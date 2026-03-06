import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CreditCard,
  Figma,
  Globe,
  Image,
  Instagram,
  MapPin,
  Palette,
  TrendingUp,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "We craft memorable, timeless logos that instantly communicate your brand's identity and values. From minimalist wordmarks to bold emblems — your logo will make the right first impression.",
    features: [
      "Multiple concepts",
      "Vector formats",
      "Full copyright transfer",
      "Unlimited revisions",
    ],
    color: "oklch(0.68 0.24 25)",
    ocid: "services.item.1",
  },
  {
    icon: Instagram,
    title: "Instagram Poster Design",
    desc: "Stop the scroll with visually stunning Instagram content. Our designers create cohesive, on-brand posts and stories that drive engagement and grow your following.",
    features: [
      "Story & feed templates",
      "Branded style guide",
      "Seasonal campaigns",
      "Quick turnaround",
    ],
    color: "oklch(0.72 0.2 40)",
    ocid: "services.item.2",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Transform raw footage into compelling brand stories. From short-form reels to long-form corporate videos — we add color grading, motion graphics, and professional polish.",
    features: [
      "Color grading",
      "Motion graphics",
      "Audio enhancement",
      "Multi-format export",
    ],
    color: "oklch(0.65 0.22 10)",
    ocid: "services.item.3",
  },
  {
    icon: Image,
    title: "Photo Editing",
    desc: "Elevate your photography with professional retouching, background removal, color correction, and composite editing that makes your images stand out.",
    features: [
      "Background removal",
      "Color correction",
      "Skin retouching",
      "Product photo editing",
    ],
    color: "oklch(0.72 0.18 55)",
    ocid: "services.item.4",
  },
  {
    icon: MapPin,
    title: "Google My Business Setup",
    desc: "Get found by local customers. We set up and optimize your Google My Business profile to maximize local visibility, reviews, and foot traffic to your business.",
    features: [
      "Profile optimization",
      "Category setup",
      "Photo uploads",
      "Review strategy",
    ],
    color: "oklch(0.85 0.16 90)",
    ocid: "services.item.5",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    desc: "Rank higher on Google and drive organic traffic that converts. Our data-driven SEO strategies include technical optimization, content strategy, and link building.",
    features: [
      "Keyword research",
      "On-page SEO",
      "Technical audit",
      "Monthly reporting",
    ],
    color: "oklch(0.68 0.24 25)",
    ocid: "services.item.6",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive websites built for performance and conversion. Whether you need a landing page, portfolio, or e-commerce store — we deliver a site that works as hard as you do.",
    features: [
      "Mobile responsive",
      "SEO-ready",
      "Fast load times",
      "CMS integration",
    ],
    color: "oklch(0.65 0.22 10)",
    ocid: "services.item.7",
  },
  {
    icon: Figma,
    title: "Graphic Design",
    desc: "Comprehensive visual design for all your marketing needs — brochures, banners, presentations, social media kits, and more. Consistent, professional, and on-brand every time.",
    features: [
      "Print & digital",
      "Brand consistency",
      "Editable templates",
      "Fast delivery",
    ],
    color: "oklch(0.72 0.2 40)",
    ocid: "services.item.8",
  },
  {
    icon: CreditCard,
    title: "Visiting Card Design",
    desc: "Leave a lasting impression with professionally designed business cards. We create both print-ready and digital visiting cards that reflect your personal or business brand.",
    features: [
      "Print-ready files",
      "Digital version",
      "Multiple layouts",
      "NFC card design",
    ],
    color: "oklch(0.72 0.18 55)",
    ocid: "services.item.9",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services — NextYU Solution";
  }, []);

  return (
    <main className="pt-16">
      {/* ===== PAGE HERO ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.01_15)] to-[oklch(0.08_0.008_15)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[150px] bg-[oklch(0.55_0.24_25/0.08)] pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.55_0.24_25/0.15)] border border-[oklch(0.55_0.24_25/0.3)] text-[oklch(0.78_0.18_35)] text-sm font-medium mb-6">
              What We Offer
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate every aspect
              of your online presence — from brand identity to search rankings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection
                  key={service.title}
                  delay={i * 0.06}
                  className="h-full"
                >
                  <div
                    className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col"
                    data-ocid={service.ocid}
                  >
                    {/* Icon */}
                    <div
                      className="w-13 h-13 w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${service.color}18` }}
                    >
                      <Icon size={24} style={{ color: service.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 border-t border-[oklch(0.22_0.02_15)] pt-4">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: service.color }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[oklch(0.09_0.009_15)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.24_25/0.6)] to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Not sure which service{" "}
              <span className="gradient-text">you need?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's chat! Our team will help you identify the right solution for
              your business goals.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glow text-white border-0 font-semibold gap-2"
                data-ocid="cta.get_started_button"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
