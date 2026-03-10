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

const WHAT_WE_DO = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Create unique and memorable brand identities that make your business stand out and leave a lasting impression.",
    color: "oklch(0.72 0.22 220)",
    shadowColor: "0 0 24px oklch(0.72 0.22 220 / 0.5)",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Build fast, responsive, and high-performance websites designed for modern businesses and startups.",
    color: "oklch(0.52 0.28 285)",
    shadowColor: "0 0 24px oklch(0.52 0.28 285 / 0.5)",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    desc: "Improve your website visibility and rank higher on search engines to attract more organic traffic.",
    color: "oklch(0.78 0.18 160)",
    shadowColor: "0 0 24px oklch(0.78 0.18 160 / 0.5)",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional video editing and post-production to create engaging and high-quality visual content.",
    color: "oklch(0.62 0.28 330)",
    shadowColor: "0 0 24px oklch(0.62 0.28 330 / 0.5)",
  },
  {
    icon: Image,
    title: "Photo Editing",
    desc: "Enhance your photos with professional retouching, color correction, and creative image editing.",
    color: "oklch(0.65 0.22 260)",
    shadowColor: "0 0 24px oklch(0.65 0.22 260 / 0.5)",
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    desc: "Eye-catching social media graphics and posts designed to boost engagement and strengthen your brand.",
    color: "oklch(0.72 0.28 10)",
    shadowColor: "0 0 24px oklch(0.72 0.28 10 / 0.5)",
  },
];

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
    color: "oklch(0.72 0.22 220)",
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
    color: "oklch(0.62 0.28 330)",
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
    color: "oklch(0.52 0.28 285)",
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
    color: "oklch(0.65 0.22 260)",
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
    color: "oklch(0.85 0.16 200)",
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
    color: "oklch(0.72 0.22 220)",
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
    color: "oklch(0.52 0.28 285)",
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
    color: "oklch(0.62 0.28 330)",
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
    color: "oklch(0.65 0.22 260)",
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
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.01_270)] to-[oklch(0.08_0.01_270)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[150px] bg-[oklch(0.52_0.28_285/0.08)] pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.52_0.28_285/0.15)] border border-[oklch(0.52_0.28_285/0.3)] text-[oklch(0.78_0.18_220)] text-sm font-medium mb-6">
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

      {/* ===== WHAT WE DO BEST ===== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[oklch(0.07_0.012_270)]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        {/* Radial glow behind title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[120px] bg-[oklch(0.52_0.28_285/0.1)] pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-7xl">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.52_0.28_285/0.15)] border border-[oklch(0.52_0.28_285/0.3)] text-[oklch(0.78_0.18_220)] text-sm font-medium mb-5">
              Our Expertise
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
              What We Do <span className="gradient-text">Best</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital services designed to help businesses grow,
              build strong brands, and succeed in the digital world.
            </p>
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_DO.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  data-ocid={`whatwedobest.item.${i + 1}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: item.shadowColor,
                  }}
                  className="glass-card rounded-2xl p-7 flex flex-col items-center text-center cursor-default"
                  style={{
                    border: "1px solid oklch(0.22 0.025 270 / 0.6)",
                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      `${item.color.replace("oklch(", "oklch(").replace(")", " / 0.5)")}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "oklch(0.22 0.025 270 / 0.6)";
                  }}
                >
                  {/* Icon box with float animation */}
                  <motion.div
                    className="mb-5 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${item.color.slice(0, -1)} / 0.12)`.replace(
                        "oklch(",
                        "oklch(",
                      ),
                      boxShadow:
                        `0 0 18px ${item.color.slice(0, -1)} / 0.25)`.replace(
                          "oklch(",
                          "oklch(",
                        ),
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <Icon size={28} style={{ color: item.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom gradient accent line */}
                  <div
                    className="mt-6 w-12 h-0.5 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
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
                    <ul className="space-y-2 border-t border-[oklch(0.22_0.025_270)] pt-4">
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
      <section className="py-20 bg-[oklch(0.09_0.012_270)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.52_0.28_285/0.6)] to-transparent" />
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
