import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendInquiry = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      business: z.string().optional(),
      revenue: z.string().optional(),
      message: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "noreply@yourdomain.com";
    const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL || "adanktk2003@gmail.com";

    if (!SENDGRID_API_KEY) {
      throw new Error("Missing SENDGRID_API_KEY. Set it in your environment to enable email delivery.");
    }

    const subject = `Website Inquiry from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nBusiness Name: ${data.business || "N/A"}\nMonthly Revenue: ${data.revenue || "N/A"}\n\nMessage:\n${data.message}`;

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: SENDGRID_TO_EMAIL }],
          },
        ],
        from: { email: SENDGRID_FROM_EMAIL, name: "Website Inquiry" },
        subject,
        content: [{ type: "text/plain", value: body }],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Failed to send inquiry email: ${response.status} ${text}`);
    }

    return { success: true };
  });
