import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CreditCard,
  Figma,
  Globe,
  Image,
  Instagram,
  MapPin,
  Palette,
  Star,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const SERVICES = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Memorable brand identities that stand out",
    color: "oklch(0.68 0.24 25)",
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    desc: "Eye-catching Instagram & social graphics",
    color: "oklch(0.72 0.2 40)",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional production & post-processing",
    color: "oklch(0.65 0.22 10)",
  },
  {
    icon: Image,
    title: "Photo Editing",
    desc: "High-quality image enhancement & retouching",
    color: "oklch(0.72 0.18 55)",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive, high-performance sites",
    color: "oklch(0.68 0.24 25)",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    desc: "Rank higher and drive organic growth",
    color: "oklch(0.85 0.16 90)",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Founder, Bloom Boutique",
    text: "NextYU Solution transformed our brand from zero to hero. The logo and social media designs they created are absolutely stunning — our online presence has never been stronger.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "CEO, TechLaunch Inc.",
    text: "Our website traffic increased by 300% after NextYU handled our SEO and website redesign. Truly exceptional work and incredible value for the investment.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Marketing Director, GreenGrow",
    text: "The video editing team at NextYU is phenomenal. They took our raw footage and created a cinematic brand story that our customers absolutely love.",
    rating: 5,
  },
];

const STATS = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Briefcase, value: "500+", label: "Projects Done" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: TrendingUp, value: "5+", label: "Years Experience" },
];

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

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "NextYU Solution — Grow Your Business Online";
  }, []);

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.06 0.01 15) 0%, oklch(0.08 0.008 15) 100%)",
        }}
      >
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bg.dim_1920x1080.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.01_15/0.3)] via-transparent to-[oklch(0.08_0.008_15)]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-[oklch(0.55_0.24_25/0.14)] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] bg-[oklch(0.45_0.22_10/0.1)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.55_0.24_25/0.15)] border border-[oklch(0.55_0.24_25/0.3)] text-[oklch(0.78_0.18_35)] text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.2_40)] animate-pulse" />
            Creative Digital Agency — Open for Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Grow Your Business
            <br />
            <span className="gradient-text">with NextYU Solution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We craft exceptional digital experiences — from stunning brand
            identities to high-performance websites that convert visitors into
            loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glow text-white border-0 font-semibold text-base px-8 h-12 gap-2"
                data-ocid="hero.primary_button"
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[oklch(0.3_0.03_15)] hover:bg-[oklch(0.55_0.24_25/0.1)] hover:border-[oklch(0.55_0.24_25/0.6)] text-foreground font-semibold text-base px-8 h-12"
                data-ocid="hero.secondary_button"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[oklch(0.4_0.05_25)] rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[oklch(0.68_0.24_25)]"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-[oklch(0.1_0.01_15)] border-y border-[oklch(0.22_0.02_15)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center gap-2 py-4">
                    <div className="w-10 h-10 rounded-xl bg-[oklch(0.55_0.24_25/0.15)] flex items-center justify-center mb-1">
                      <Icon size={18} className="text-[oklch(0.68_0.24_25)]" />
                    </div>
                    <span className="font-display font-bold text-3xl gradient-text">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COMPANY INTRO ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="section-divider mb-6" />
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
                Your Partner in{" "}
                <span className="gradient-text">Digital Growth</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                NextYU Solution is a creative digital service startup founded
                with one mission: to help businesses thrive in the digital
                landscape. We combine cutting-edge design with smart strategy to
                deliver measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From brand identity and social media to full-scale web
                development and SEO, we're the creative force behind hundreds of
                successful businesses worldwide.
              </p>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-[oklch(0.55_0.24_25/0.5)] text-[oklch(0.68_0.24_25)] hover:bg-[oklch(0.55_0.24_25/0.1)] gap-2"
                >
                  Learn Our Story
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Brand Identity", value: "150+ logos crafted" },
                  { title: "Web Projects", value: "80+ sites launched" },
                  { title: "Video Productions", value: "200+ videos edited" },
                  { title: "SEO Campaigns", value: "Top 3 rankings" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="glass-card glass-card-hover p-5 rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.68_0.24_25)] mb-3" />
                    <div className="font-heading font-semibold text-sm text-foreground mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES HIGHLIGHT ===== */}
      <section className="py-24 bg-[oklch(0.09_0.009_15)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              What We <span className="gradient-text">Do Best</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive digital services tailored to accelerate your brand's
              growth and online presence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 h-full group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${service.color}20` }}
                    >
                      <Icon size={22} style={{ color: service.color }} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-[oklch(0.55_0.24_25/0.5)] text-[oklch(0.68_0.24_25)] hover:bg-[oklch(0.55_0.24_25/0.1)] gap-2"
              >
                View All Services
                <ArrowRight size={16} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] bg-[oklch(0.55_0.24_25/0.06)] pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Don't just take our word for it — here's what real clients say
              about working with NextYU Solution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.1}>
                <Card className="glass-card glass-card-hover border-0 rounded-2xl h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from(
                        { length: testimonial.rating },
                        (_, j) => `star-${j}`,
                      ).map((starKey) => (
                        <Star
                          key={starKey}
                          size={14}
                          fill="oklch(0.85 0.16 90)"
                          className="text-[oklch(0.85_0.16_90)]"
                        />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2 border-t border-[oklch(0.22_0.02_15)]">
                      <div className="w-9 h-9 rounded-full bg-[oklch(0.55_0.24_25/0.2)] flex items-center justify-center text-[oklch(0.68_0.24_25)] font-bold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-sm text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.01_15)] via-[oklch(0.12_0.014_15)] to-[oklch(0.1_0.01_15)]" />
        <div className="absolute inset-0 border-y border-[oklch(0.22_0.02_15)]" />
        {/* Glow line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.58_0.24_25/0.6)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.58_0.24_25/0.6)] to-transparent" />

        {/* Ambient glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] blur-[100px] bg-[oklch(0.55_0.24_25/0.14)] pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Ready to{" "}
              <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join 100+ businesses that trust NextYU Solution to power their
              digital presence. Let's build something amazing together.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glow text-white border-0 font-semibold text-base px-10 h-12 gap-2"
                data-ocid="cta.get_started_button"
              >
                Get Started Today
                <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
