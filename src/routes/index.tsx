import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight, Calendar, LineChart, Shield, Layers, Zap, Bell, BarChart3,
  ShoppingBag, Video, TrendingUp, Store, Target, Database, Mail, Phone, MapPin,
  Check, Linkedin, Facebook, Instagram, Music2, CheckCircle2, X,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import portrait5k from "@/assets/portrait-5k.jpg";
import shopeeNewUpdated1 from "@/assets/shopee-new-updated-1.png";
import shopeeNewUpdated2 from "@/assets/shopee-new-updated-2.png";
import shopeeNew3 from "@/assets/shopee-new-3.jpg";
import shopeeNew4 from "@/assets/shopee-new-4.jpg";
import shopeeNew5 from "@/assets/shopee-new-5.jpg";
import shopeeCarousel1 from "@/assets/shopee-carousel-1.png";
import tiktokNew1 from "@/assets/tiktok-new-1.png";
import tiktokNew2 from "@/assets/tiktok-new-2.png";
import tiktokNew3 from "@/assets/tiktok-new-3.png";
import tiktokNew4 from "@/assets/tiktok-new-4.png";
import tiktokNew5 from "@/assets/tiktok-new-5.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full px-3 py-2 flex items-center gap-2 md:gap-6 w-full max-w-5xl">
        <a href="#top" className="flex items-center pl-3 group">
          <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors duration-300">Adan Khattak</span>
        </a>
        <div className="hidden md:flex items-center gap-6 mx-auto text-sm text-muted-foreground">
          {["About", "Services", "Skills", "Case Studies", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="ml-auto md:ml-0 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-glow hover:opacity-90 transition">
          <Calendar className="h-4 w-4" /> Book a Call
        </a>
      </nav>
    </header>
  );
}

function StatCard({ value, label, icon: Icon, prefix, suffix }: { value: string; label: string; icon: any; prefix?: string; suffix?: string }) {
  return (
    <div className="glass rounded-2xl p-5 relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-3xl font-bold tracking-tight">
            {prefix && <span className="text-sm text-muted-foreground mr-1 align-top">{prefix}</span>}
            {value}
            {suffix && <span className="text-base text-muted-foreground ml-1">{suffix}</span>}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{label}</div>
        </div>
        <div className="h-9 w-9 rounded-lg bg-secondary grid place-items-center text-amber">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const skills = [
    "I am Shopee Ads Expert",
    "I manage TikTokShop GMV Max Ads",
    "I am Problem Solver",
    "I am Brand Builder",
  ];
  const [skillIndex, setSkillIndex] = useState(0);

  const activeSkill = skills[skillIndex];
  const [skillPrefix, skillSuffix] = activeSkill.split(" ").length > 2
    ? [activeSkill.split(" ").slice(0, 2).join(" "), activeSkill.split(" ").slice(2).join(" ")]
    : [activeSkill, ""];

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((current) => (current + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid radial-fade pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for Asian Markets (Shopee, TikTok Shop, Lazada) 🌏
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
              From <span className="text-gradient">Store</span> to <span className="text-gradient-primary">Empire</span>
            </h1>
            <p className="mt-8 text-4xl md:text-5xl font-bold leading-tight text-white">
              Hey, I&apos;m <span className="text-orange-500">Adan Khattak</span>
            </p>
            <p className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              <span className="text-white">{skillPrefix}</span>
              {skillSuffix && <span className="text-orange-400"> {skillSuffix}</span>}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-amber" /> 5+ Years Marketplace Experience</span>
              <span className="inline-flex items-center gap-2"><Layers className="h-4 w-4 text-cyan" /> 40+ Brands Scaled</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:mt-12">
            <StatCard value="387,540+" label="Revenue Generated" prefix="RM" icon={Bell} />
            <StatCard value="12.45" suffix="x" label="Average High-Performance ROAS" icon={BarChart3} />
            <StatCard value="145" suffix="%" prefix="+" label="Sales Growth" icon={TrendingUp} />
            <StatCard value="132.6" suffix="%" prefix="+" label="Revenue Growth" icon={BarChart3} />
            <div className="col-span-2 flex justify-center md:justify-start items-center gap-3 mt-4">
              <Button size="lg" className="text-base md:text-lg px-5 md:px-6 py-3" asChild>
                <a href="https://wa.me/923070736647" target="_blank" rel="noopener noreferrer">Hire me</a>
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-5 md:px-6 py-3" asChild>
                <a href="#contact">Contact me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    { t: "Shopee Ads", d: "Expert-level Shop Ads, Product ads & Live Ads optimized for maximum ROAS across Asia." },
    { t: "TikTok Shop GMV MAX Ads", d: "Affiliate, Live, Video, and Sponsored Solutions, Content Strategy & Scaling Malaysian brands" },
    { t: "Lazada Ads Management", d: "Sponsored Product Ads, Sponsored Discovery Ads, Sponsored Store Ads, LazLive Ads, Affiliate Ads, Display/Banner Ads, Voucher Campaign Promotions" },
    { t: "Store Optimization", d: "Listing Optimization, Conversion, A+ Content, Ads Management and search-rank optimization for marketplaces." },
    { t: "Marketplace Strategy", d: "Category positioning, pricing, and assortment strategy for growth." },
    { t: "Data Analytics", d: "Dashboards, ROAS tracking, and predictive insights for smarter marketing spend and growth optimization." },
  ];
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden glass group">
            <img src={portrait5k} alt="Adan Khattak — E-commerce Growth Consultant" className="w-full h-auto object-cover transition-transform duration-300 ease-out transform group-hover:scale-105" />
            <span className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.12), 0 0 24px rgba(99,102,241,0.06)' }} />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/70 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold">Adan Khattak</div>
                  <div className="text-sm text-muted-foreground">Shopee · TikTok Shop · Growth</div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs glass rounded-full px-3 py-1">
                  <CheckCircle2 className="h-3 w-3 text-cyan" /> Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</div>
          <div className="max-w-2xl">
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Turning Businesses into Recognized Brands with Smart Creative Vision & Strategies</h2>
          </div>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">I'm Adan Khattak — a Digital Entrepreneur, Founder & CEO of Zenvault Ecom, and an e-commerce growth consultant specializing in scaling stores on Shopee, TikTok Shop, and Lazada for brands across all active Asian markets. As a Shopee Ads expert dedicated to maximizing ROI, I've spent the last five years helping sellers go from flat revenue to compounding monthly growth, with a playbook that pairs hard data with operator-level execution.</p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">I’ve worked with clients across Malaysia, Singapore, and Indonesia, helping brands scale with precision and purpose. Whether it’s launching a product, optimizing Ads, or building a strong brand identity — I’m here to make your vision a reality.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {skills.map(s => (
              <div key={s.t} className="glass rounded-2xl p-5 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
                <div className="font-semibold">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 radial-fade pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="glass rounded-3xl p-7 group relative overflow-hidden transition-transform duration-300 ease-out transform group-hover:-translate-y-2 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-amber">Degree</div>
            <h3 className="mt-5 text-2xl font-semibold">Bachelor's in Software Engineering</h3>
            <p className="mt-2 text-muted-foreground">ICUP Peshawar — 2025</p>
            <span className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.06), 0 0 20px rgba(99,102,241,0.04)' }} />
          </div>
          <div className="glass rounded-3xl p-7 group relative overflow-hidden transition-transform duration-300 ease-out transform group-hover:-translate-y-2 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-amber">Currently</div>
            <h3 className="mt-5 text-2xl font-semibold">Master's in Artificial Intelligence</h3>
            <p className="mt-2 text-muted-foreground">UET Peshawar — 2026</p>
            <span className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.06), 0 0 20px rgba(99,102,241,0.04)' }} />
          </div>
          <div className="glass rounded-3xl p-7 group relative overflow-hidden transition-transform duration-300 ease-out transform group-hover:-translate-y-2 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-amber">Certifications</div>
            <h3 className="mt-5 text-2xl font-semibold">Webdo & DigiSkills</h3>
            <p className="mt-2 text-muted-foreground">B2B course from Webdo Solutions and Digital Marketing course from DigiSkills.</p>
            <span className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.06), 0 0 20px rgba(99,102,241,0.04)' }} />
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-3xl p-7 group relative overflow-hidden transition-transform duration-300 ease-out transform group-hover:-translate-y-2 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-amber">Marketplace Experience</div>
            <p className="mt-4 text-muted-foreground">No formal Shopee course completed — I have gained practical experience through working with multiple Clients, have read Shopee articles, and 5 years of hands-on work and marketplace execution.</p>
            <span className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.06), 0 0 20px rgba(99,102,241,0.04)' }} />
          </div>
          <div className="glass rounded-3xl p-7 group relative overflow-hidden transition-transform duration-300 ease-out transform group-hover:-translate-y-2 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-amber">Availability</div>
            <p className="mt-4 text-muted-foreground">Available 24/7 to support marketplace acceleration, campaign launches, and live commerce execution.</p>
            <span className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.06), 0 0 20px rgba(99,102,241,0.04)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { tag: "Marketplace", icon: ShoppingBag, title: "Shopee Management", desc: "", points: ["Shopee Campaign Management", "Campaign Optimization", "Product Research", "Keyword Research", "Competitor Analysis", "Listing Creation & SEO", "A+ Content", "Listing Images", "Use of AI Tools", "ROAS Improvement", "Affiliate Marketing"] },
    { tag: "Social Commerce", icon: Video, title: "TiktokShop Management", desc: "", points: ["Listing Optimization", "Product Hunting", "TiktokShop GMV Max Ads", "TiktokShop Spark Ads", "Affiliate Outreach", "Affiliate Marketing Strategy Plan", "Live Ads Strategy for Live Streaming", "Maximizing 10x ROI"] },
    { tag: "Marketplace", icon: ShoppingBag, title: "Lazada Management", desc: "", points: ["Sponsored Products Ads", "Sponsored Shop Ads", "Discovery Ads", "Campaign & Voucher Strategy", "Pricing & Competitor Analysis", "Inventory Management"] },
    { tag: "Conversion", icon: Store, title: "Store Optimization", desc: "", points: ["Storefront Branding & Design", "Analytics & Performance Tracking", "Store Audits", "A to Z Management"] },
    { tag: "Strategy", icon: Target, title: "Consultancy", desc: "", points: ["Strategic Planning", "Brand Positioning", "Training & Team Leadership", "1 to 1 Mentorship Plan"] },
  ];
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 radial-fade pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map(it => (
            <div key={it.title} className="glass rounded-3xl p-7 group border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-amber">{it.tag}</span>
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow">
                  <it.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground">{it.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {it.points.map(p => (
                  <li key={p} className="inline-flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-cyan" /> {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Start with this service <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "Shopee Ads (Expert)", level: 98 },
    { name: "TikTok Shop Ads", level: 93 },
    { name: "Lazada Ads & Growth", level: 92 },
    { name: "Marketplace Growth Strategy", level: 91 },
    { name: "Performance Marketing", level: 95 },
    { name: "Conversion Optimization", level: 89 },
  ];
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Capabilities</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map(s => (
            <div key={s.name}>
              <div className="flex justify-between text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-gradient-primary rounded-full transition-all duration-1000" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shopeeSlides = [
    { title: "Monthly Ads Performance", subtitle: "RM48k GMV • 1.6k orders • 5.93 ROAS", tag: "Monthly Ads" },
    { title: "Shopee Daily Ads Performance", subtitle: "RM2.3k GMV • 36 orders • 10.00 ROAS", tag: "Daily Ads" },
    { title: "Shop Sales Performance", subtitle: "RM90.5k sales • 3.3k orders • 38% growth", tag: "Shop Overview" },
    { title: "Monthly Growth Trajectory", subtitle: "RM110k sales • 4k orders • 21.5% growth", tag: "Scale" },
    { title: "Quarterly Ads Scale", subtitle: "RM182.8k sales • 6.6k orders • 6.25 ROAS", tag: "Quarterly Ads" },
    { title: "Shopee Sales Performance", subtitle: "RM51.1k sales • 1.9k orders • 6.68 ROAS", tag: "All CPC Ads" },
  ];
  const shopeeImages = [shopeeNewUpdated1, shopeeNewUpdated2, shopeeNew3, shopeeNew4, shopeeNew5, shopeeCarousel1];
  const tiktokSlides = [
    { title: "TikTok GMV Max Campaign", subtitle: "RM86.6k GMV • 3.7k orders • 13.01x ROI", tag: "GMV Max" },
    { title: "Scale-up Ads Campaign", subtitle: "RM26.5k GMV • 1.25k orders • 8.88x ROI", tag: "Growth" },
    { title: "Targeted Ads Optimization", subtitle: "RM53.7k GMV • 2.2k orders • 12.14x ROI", tag: "Optimization" },
    { title: "Seller Center Performance", subtitle: "RM127.6k GMV • 6.7k items sold • 86.7% growth", tag: "Shop Overview" },
    { title: "Long-term Store Scaling", subtitle: "RM588k GMV • 25.9k orders • 32.9k items sold", tag: "Scale Overview" },
    { title: "High-ROI Performance Mix", subtitle: "Optimized paid Ads + creator-driven campaigns", tag: "Live & Affiliate" },
  ];
  const tiktokImages = [tiktokNew1, tiktokNew2, tiktokNew3, tiktokNew4, tiktokNew5, tiktokNew1];

  return (
    <section id="work-experience" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Work Experience</h2>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber">Shopee Sales</div>
            <div className="mt-6 overflow-hidden rounded-[0.75rem] border border-border bg-muted/30 relative">
              <Carousel className="relative">
                <CarouselContent className="flex gap-4">
                  {shopeeSlides.map((slide, index) => (
                    <CarouselItem key={slide.title} className="min-w-full">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(shopeeImages[index])}
                        className="block w-full overflow-hidden rounded-[0.75rem] border border-orange-700/30 bg-slate-950/10 text-left transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="relative aspect-[16/10] md:aspect-[2.2/1] w-full bg-background/80">
                          <img
                            src={shopeeImages[index]}
                            alt={slide.title}
                            width={2560}
                            height={1440}
                            loading="eager"
                            decoding="async"
                            className="h-full w-full object-contain p-2 md:p-3 cursor-zoom-in"
                            sizes="(max-width: 768px) 100vw, 1200px"
                          />
                        </div>
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/90 text-white shadow-glow" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/90 text-white shadow-glow" />
              </Carousel>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-cyan">TikTokShop Sales</div>
            <div className="mt-6 overflow-hidden rounded-[0.75rem] border border-border bg-muted/30 relative">
              <Carousel className="relative">
                <CarouselContent className="flex gap-4">
                  {tiktokSlides.map((slide, index) => (
                    <CarouselItem key={slide.title} className="min-w-full">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(tiktokImages[index])}
                        className="block w-full overflow-hidden rounded-[0.75rem] border border-orange-700/30 bg-slate-950/10 text-left transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="relative aspect-[16/10] md:aspect-[2.2/1] w-full bg-background/80">
                          <img
                            src={tiktokImages[index]}
                            alt={slide.title}
                            width={2560}
                            height={1440}
                            loading="eager"
                            decoding="async"
                            className="h-full w-full object-contain p-2 md:p-3 cursor-zoom-in"
                            sizes="(max-width: 768px) 100vw, 1200px"
                          />
                        </div>
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/90 text-white shadow-glow" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/90 text-white shadow-glow" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[1.25rem] border border-orange-700/40 bg-background/95 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/90"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedImage}
              alt="Expanded portfolio preview"
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies</h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-7 flex flex-col justify-between border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300 hover:-translate-y-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber">Shopee Ads · Past 3 Months</div>
              <h3 className="mt-3 text-2xl font-semibold">Home Supplies Brand</h3>
              <p className="mt-2 text-muted-foreground">A regional seller stuck at flat ROAS and rising CPC. We rebuilt campaign structure, search-mapped the top SKUs and ran daily bid governance.</p>
              <div className="mt-6 grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                {[["RM182.8k", "Total Ads Sales"], ["6.25x", "Average ROAS"], ["6.6k", "Total Orders"]].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-secondary p-3 sm:p-4 min-h-[88px] flex flex-col justify-center">
                    <div className="text-lg sm:text-xl font-bold text-gradient break-words">{v}</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-tight">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="text-xs text-muted-foreground mb-2">Impressions & Traffic Scale Trend (Past 3 Months)</div>
              <div className="mt-4 bg-slate-950/20 rounded-2xl border border-border p-4 flex flex-col justify-between">
                <svg viewBox="0 0 500 120" className="w-full h-24 overflow-visible">
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3" />
                  
                  <defs>
                    <linearGradient id="shopeeChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.21 35)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="oklch(0.72 0.21 35)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <path d="M 0 120 L 0 50 Q 25 70 50 80 Q 75 90 100 40 Q 125 75 150 25 Q 175 60 200 85 Q 225 90 250 80 Q 275 65 300 70 Q 325 80 350 55 Q 375 75 400 95 Q 425 105 450 78 Q 475 70 500 75 L 500 120 Z" fill="url(#shopeeChartGrad)" />
                  <path d="M 0 50 Q 25 70 50 80 Q 75 90 100 40 Q 125 75 150 25 Q 175 60 200 85 Q 225 90 250 80 Q 275 65 300 70 Q 325 80 350 55 Q 375 75 400 95 Q 425 105 450 78 Q 475 70 500 75" fill="none" stroke="oklch(0.72 0.21 35)" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-1">
                  <span>12/03</span>
                  <span>25/03</span>
                  <span>07/04</span>
                  <span>20/04</span>
                  <span>03/05</span>
                  <span>16/05</span>
                  <span>29/05</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-7 flex flex-col justify-between border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300 hover:-translate-y-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan">TikTok Shop · Feb – May 2026</div>
              <h3 className="mt-3 text-2xl font-semibold">Home & Lifestyle Seller — TikTok Shop MY</h3>
              <p className="mt-2 text-muted-foreground">Launched a creator + paid amplification engine alongside live commerce. Compounding sales week-over-week with a controlled cost structure.</p>
              <div className="mt-6 grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                {[["RM588k", "Total GMV"], ["32.9k", "Items Sold"], ["25.9k", "Total Orders"]].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-secondary p-3 sm:p-4 min-h-[88px] flex flex-col justify-center">
                    <div className="text-lg sm:text-xl font-bold text-gradient break-words">{v}</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-tight">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="text-xs text-muted-foreground mb-2">Shop Analytics Performance Graph</div>
              <div className="mt-4 bg-slate-950/20 rounded-2xl border border-border p-4 flex flex-col justify-between">
                <svg viewBox="0 0 500 120" className="w-full h-24 overflow-visible">
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3" />
                  
                  <defs>
                    <linearGradient id="tiktokChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.82 0.13 200)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="oklch(0.82 0.13 200)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <path d="M 0 120 L 0 80 Q 25 60 50 85 Q 75 75 100 80 Q 125 90 150 78 Q 175 100 200 85 Q 225 65 250 20 Q 275 80 300 75 Q 325 82 350 78 Q 375 70 400 92 Q 425 80 450 95 Q 475 90 500 85 L 500 120 Z" fill="url(#tiktokChartGrad)" />
                  <path d="M 0 80 Q 25 60 50 85 Q 75 75 100 80 Q 125 90 150 78 Q 175 100 200 85 Q 225 65 250 20 Q 275 80 300 75 Q 325 82 350 78 Q 375 70 400 92 Q 425 80 450 95 Q 475 90 500 85" fill="none" stroke="oklch(0.82 0.13 200)" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-1">
                  <span>Feb 1</span>
                  <span>Feb 16</span>
                  <span>Mar 3</span>
                  <span>Mar 18</span>
                  <span>Apr 2</span>
                  <span>Apr 17</span>
                  <span>May 2</span>
                  <span>May 17</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  const plats = ["Shopee", "TikTok Shop", "Facebook", "Instagram", "Lazada", "Meta Ads"];
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Platforms I work across — where Asian brands win</div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {plats.map(p => (
            <span key={p} className="rounded-full border border-orange-700/70 bg-background/60 px-5 py-2 text-sm text-foreground shadow-sm transition-all duration-300 hover:border-orange-600 hover:bg-orange-950/20">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Insights section removed as requested


function Testimonial() {
  const testimonials = [
    {
      quote: "Adan rebuilt our Shopee account from the ground up. Within four months, our ROAS jumped from 3.1 to 7.4 and we were finally scaling without bleeding margin. He thinks like an operator, not just a media buyer.",
      initials: "LW",
      name: "Lim Wei Jian",
      role: "Founder · Beauty Brand (Shopee Mall)",
    },
    {
      quote: "His TikTok Shop strategy brought our live campaigns to life and made our content feel more commercial without losing the brand voice.",
      initials: "AR",
      name: "Aisha Rahman",
      role: "Brand Lead · Home & Lifestyle Seller",
    },
    {
      quote: "Clear execution, smart reporting, and real growth. He made marketplace complexity feel manageable and gave us a system we could scale.",
      initials: "SN",
      name: "Sophie Nguyen",
      role: "Operations Director · Regional FMCG Brand",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Testimonials</div>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">Trusted by sellers building market-leading brands.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-3xl p-8 h-full border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
              <p className="text-lg leading-relaxed text-muted-foreground">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center font-bold">{item.initials}</div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryBusiness, setInquiryBusiness] = useState("");
  const [inquiryRevenue, setInquiryRevenue] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const W3FORMS_ACCESS_KEY = import.meta.env.VITE_W3FORMS_ACCESS_KEY || "";

  const clearForm = () => {
    setInquiryName("");
    setInquiryEmail("");
    setInquiryBusiness("");
    setInquiryRevenue("");
    setInquiryMessage("");
  };

  const handleInquirySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("sending");
    setSubmitError(null);

    if (!W3FORMS_ACCESS_KEY) {
      setSubmitState("error");
      setSubmitError("W3Forms access key is missing. Please set VITE_W3FORMS_ACCESS_KEY in your .env file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", W3FORMS_ACCESS_KEY);
      formData.append("name", inquiryName);
      formData.append("email", inquiryEmail);
      formData.append("business", inquiryBusiness);
      formData.append("revenue", inquiryRevenue);
      formData.append("message", inquiryMessage);

      const response = await fetch("https://api.w3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to send inquiry.");
      }

      clearForm();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setSubmitError(error instanceof Error ? error.message : "Unable to send inquiry.");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 radial-fade pointer-events-none" />
      <div className="container mx-auto px-6 relative grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Contact</h2>
          <div className="mt-8 space-y-4">
            <a href="mailto:adanktk2003@gmail.com" className="flex items-center gap-4 glass rounded-2xl p-4 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-primary/15 grid place-items-center text-primary"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">adanktk2003@gmail.com</div>
              </div>
            </a>
            <a href="tel:+60112394 2413" className="flex items-center gap-4 glass rounded-2xl p-4 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-cyan/15 grid place-items-center text-cyan"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Malaysia 🇲🇾</div>
                <div className="font-medium">+60 11-2394 2413</div>
              </div>
            </a>
            <a href="tel:+923070736647" className="flex items-center gap-4 glass rounded-2xl p-4 border border-orange-700/30 hover:border-orange-700/80 transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-amber/15 grid place-items-center text-amber"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Pakistan 🇵🇰</div>
                <div className="font-medium">+92 307 0736647</div>
              </div>
            </a>
            <div className="flex items-center gap-4 glass rounded-2xl p-4">
              <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Based in</div>
                <div className="font-medium">KPK, Peshawar, Pakistan</div>
              </div>
            </div>
          </div>
          <div className="mt-8 social-links">
            <div className="social-icon-wrapper">
              <a href="https://wa.me/923070736647" target="_blank" rel="noopener noreferrer" className="social-icon-link" data-social="whatsapp">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.365-2.897 1.027l-.207.159-2.143-.561.571 2.063.156.251c-.713 1.231-1.129 2.645-1.129 4.108 0 4.199 3.393 7.592 7.573 7.592 2.016 0 3.913-.787 5.332-2.209 1.42-1.421 2.206-3.319 2.206-5.333 0-4.18-3.414-7.592-7.573-7.592m6.313 18.483h.002c-.6 0-1.192-.153-1.738-.444l-.124-.065-1.289.338.363-1.365-.088-.14c-.451-.72-.924-1.412-1.400-2.044 3.157-1.064 5.682-4.016 5.682-7.51 0-4.424-3.594-8.018-8.018-8.018-1.946 0-3.78.688-5.252 1.95-.04 1.322-.647 2.564-1.504 3.524 2.368-1.501 5.135-2.38 8.148-2.38 5.604 0 10.159 4.555 10.159 10.159 0 5.604-4.555 10.159-10.159 10.159" /></svg>
                <div className="social-fill" />
              </a>
              <div className="social-tooltip">WhatsApp</div>
            </div>
            <div className="social-icon-wrapper">
              <a href="https://www.facebook.com/adan.khattak.723811" target="_blank" rel="noopener noreferrer" className="social-icon-link" data-social="facebook">
                <Facebook className="h-7 w-7" />
                <div className="social-fill" />
              </a>
              <div className="social-tooltip">Facebook</div>
            </div>
            <div className="social-icon-wrapper">
              <a href="https://www.instagram.com/adan.khttk?igsh=MWR6b3BqZHdvM2Zkbw==" target="_blank" rel="noopener noreferrer" className="social-icon-link" data-social="instagram">
                <Instagram className="h-7 w-7" />
                <div className="social-fill" />
              </a>
              <div className="social-tooltip">Instagram</div>
            </div>
            <div className="social-icon-wrapper">
              <a href="https://www.linkedin.com/in/adan-khattak2003" target="_blank" rel="noopener noreferrer" className="social-icon-link" data-social="linkedin">
                <Linkedin className="h-7 w-7" />
                <div className="social-fill" />
              </a>
              <div className="social-tooltip">LinkedIn</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleInquirySubmit} className="glass rounded-3xl p-8 space-y-5 h-fit">
          <div>
            <h3 className="text-xl font-semibold">Send an inquiry</h3>
            <p className="text-sm text-muted-foreground mt-1">Fill in the details below — replies within 24 hours.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              placeholder="Your Name"
              required
              className="bg-secondary rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary"
            />
            <input
              value={inquiryEmail}
              onChange={(e) => setInquiryEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
              className="bg-secondary rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary"
            />
          </div>
          <input
            value={inquiryBusiness}
            onChange={(e) => setInquiryBusiness(e.target.value)}
            placeholder="Business Name"
            className="w-full bg-secondary rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary"
          />
          <select
            value={inquiryRevenue}
            onChange={(e) => setInquiryRevenue(e.target.value)}
            className="w-full bg-secondary rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary"
          >
            <option value="">Your Current Monthly Revenue? — Select a range</option>
            <option>Below RM10,000</option>
            <option>RM10,000 – RM50,000</option>
            <option>RM50,000 – RM200,000</option>
            <option>RM200,000 – RM500,000</option>
            <option>Above RM500,000</option>
          </select>
          <textarea
            value={inquiryMessage}
            onChange={(e) => setInquiryMessage(e.target.value)}
            placeholder="Message"
            rows={4}
            required
            className="w-full bg-secondary rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary resize-none"
          />
          <button
            type="submit"
            disabled={submitState === "sending"}
            className="w-full bg-gradient-primary text-primary-foreground rounded-full px-6 py-3 font-medium shadow-glow hover:opacity-90 active:scale-[0.98] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform duration-150 inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitState === "sending" ? "Sending..." : "Let's Scale Your Store"}
            <ArrowRight className="h-4 w-4" />
          </button>
          {submitState === "success" && (
            <div className="text-sm text-center text-emerald-500">Inquiry sent successfully — check your email inbox soon.</div>
          )}
          {submitState === "error" && submitError && (
            <div className="text-sm text-center text-rose-500">{submitError}</div>
          )}
          <div className="text-xs text-center text-muted-foreground">Your information is private. No spam, ever.</div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Adan Khattak. All rights reserved.</div>
        <div className="flex items-center gap-2"><Database className="h-4 w-4" /> Shopee Ads Expert & Growth Consultant for Asian Markets</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Services />
        <Skills />
        <WorkExperience />
        <CaseStudies />
        <Platforms />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
