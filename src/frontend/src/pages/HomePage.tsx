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
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Memorable brand identities that stand out",
    color: "oklch(0.72 0.22 220)",
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    desc: "Eye-catching Instagram & social graphics",
    color: "oklch(0.62 0.28 330)",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional production & post-processing",
    color: "oklch(0.52 0.28 285)",
  },
  {
    icon: Image,
    title: "Photo Editing",
    desc: "High-quality image enhancement & retouching",
    color: "oklch(0.65 0.22 260)",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive, high-performance sites",
    color: "oklch(0.72 0.22 220)",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    desc: "Rank higher and drive organic growth",
    color: "oklch(0.85 0.16 200)",
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
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Happy Clients",
    color: "oklch(0.72 0.22 220)",
    decimal: false,
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "+",
    label: "Projects Done",
    color: "oklch(0.52 0.28 285)",
    decimal: false,
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Average Rating",
    color: "oklch(0.62 0.28 330)",
    decimal: true,
  },
  {
    icon: TrendingUp,
    value: 7,
    suffix: "+",
    label: "Years Experience",
    color: "oklch(0.85 0.16 200)",
    decimal: false,
  },
];

const SERVICE_STATS = [
  {
    icon: Figma,
    value: 200,
    suffix: "+",
    label: "Logos Designed",
    title: "Logo & Brand Identity",
    color: "oklch(0.72 0.22 220)",
    decimal: false,
    isText: false,
  },
  {
    icon: Globe,
    value: 20,
    suffix: "+",
    label: "Websites Developed",
    title: "Website Development",
    color: "oklch(0.52 0.28 285)",
    decimal: false,
    isText: false,
  },
  {
    icon: Video,
    value: 100,
    suffix: "+",
    label: "Videos Edited",
    title: "Video Production",
    color: "oklch(0.62 0.28 330)",
    decimal: false,
    isText: false,
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "",
    label: "Ranking Results",
    title: "SEO Optimization",
    color: "oklch(0.85 0.16 200)",
    decimal: false,
    isText: true,
  },
];

/** Count-up hook using IntersectionObserver + rAF */
function useCountUp(target: number, duration: number, decimal = false) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(decimal ? "0.0" : "0");
  const triggered = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - (1 - progress) ** 3;
            const current = eased * target;
            setDisplayValue(
              decimal ? current.toFixed(1) : Math.floor(current).toString(),
            );
            if (progress < 1) {
              rafId.current = requestAnimationFrame(animate);
            } else {
              setDisplayValue(decimal ? target.toFixed(1) : target.toString());
            }
          };
          rafId.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [target, duration, decimal]);

  return { ref, displayValue };
}

/** Individual stat card — uses useCountUp internally */
function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const { ref, displayValue } = useCountUp(stat.value, 1800, stat.decimal);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 overflow-hidden group cursor-default"
      style={{
        border: `1px solid ${stat.color.replace(")", " / 0.25)")}`,
        boxShadow: `0 0 24px 0 ${stat.color.replace(")", " / 0.08)")}`,
      }}
      data-ocid={`stats.card.${index + 1}`}
    >
      {/* Inner ambient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${stat.color.replace(")", " / 0.10)")} 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-1 stat-icon-pulse"
        style={{
          background: `${stat.color.replace(")", " / 0.15)")}`,
          boxShadow: `0 0 18px 0 ${stat.color.replace(")", " / 0.20)")}`,
        }}
      >
        <Icon size={26} style={{ color: stat.color }} />
      </div>

      {/* Counter */}
      <div
        className="font-display font-extrabold text-4xl md:text-5xl leading-none neon-gradient-text"
        style={{
          filter: `drop-shadow(0 0 12px ${stat.color.replace(")", " / 0.50)")})`,
        }}
      >
        {displayValue}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
        {stat.label}
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.color.replace(")", " / 0.70)")}, transparent)`,
        }}
      />
    </motion.div>
  );
}

/** Service stat card with title subtitle and isText support */
function ServiceStatCard({
  stat,
  index,
}: {
  stat: (typeof SERVICE_STATS)[number];
  index: number;
}) {
  const { ref, displayValue } = useCountUp(stat.value, 1800, stat.decimal);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 overflow-hidden group cursor-default"
      style={{
        border: `1px solid ${stat.color.replace(")", " / 0.25)")}`,
        boxShadow: `0 0 24px 0 ${stat.color.replace(")", " / 0.08)")}`,
      }}
      data-ocid={`service_stats.card.${index + 1}`}
    >
      {/* Inner ambient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${stat.color.replace(")", " / 0.12)")} 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-1 stat-icon-pulse"
        style={{
          background: `${stat.color.replace(")", " / 0.15)")}`,
          boxShadow: `0 0 18px 0 ${stat.color.replace(")", " / 0.22)")}`,
        }}
      >
        <Icon size={26} style={{ color: stat.color }} />
      </div>

      {/* Service title (subtitle) */}
      <div className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
        {stat.title}
      </div>

      {/* Counter */}
      <div
        className="font-display font-extrabold text-4xl md:text-5xl leading-none neon-gradient-text"
        style={{
          filter: `drop-shadow(0 0 12px ${stat.color.replace(")", " / 0.55)")})`,
        }}
      >
        {stat.isText ? `Top ${displayValue}` : `${displayValue}${stat.suffix}`}
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-muted-foreground tracking-wide">
        {stat.label}
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.color.replace(")", " / 0.70)")}, transparent)`,
        }}
      />
    </motion.div>
  );
}

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

/** Circuit board SVG overlay — PCB-style tech pattern with animated traveling light */
function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Base grid lines ── */}
      <line
        x1="0"
        y1="150"
        x2="1440"
        y2="150"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <line
        x1="0"
        y1="300"
        x2="1440"
        y2="300"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="0"
        y1="450"
        x2="1440"
        y2="450"
        stroke="#7C3AED"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <line
        x1="0"
        y1="600"
        x2="1440"
        y2="600"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="0"
        y1="750"
        x2="1440"
        y2="750"
        stroke="#7C3AED"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="180"
        y1="0"
        x2="180"
        y2="900"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="360"
        y1="0"
        x2="360"
        y2="900"
        stroke="#7C3AED"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <line
        x1="540"
        y1="0"
        x2="540"
        y2="900"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="720"
        y1="0"
        x2="720"
        y2="900"
        stroke="#7C3AED"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="900"
        y1="0"
        x2="900"
        y2="900"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <line
        x1="1080"
        y1="0"
        x2="1080"
        y2="900"
        stroke="#7C3AED"
        strokeWidth="0.5"
        opacity="0.10"
      />
      <line
        x1="1260"
        y1="0"
        x2="1260"
        y2="900"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.10"
      />

      {/* ── Branching trace paths ── */}
      <path
        d="M180 150 L360 150 L360 300 L540 300"
        stroke="#00BFFF"
        strokeWidth="0.8"
        fill="none"
        opacity="0.18"
      />
      <path
        d="M720 300 L900 300 L900 450 L1080 450"
        stroke="#7C3AED"
        strokeWidth="0.8"
        fill="none"
        opacity="0.18"
      />
      <path
        d="M360 450 L540 450 L540 600 L720 600"
        stroke="#D946EF"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />
      <path
        d="M1080 150 L1260 150 L1260 300"
        stroke="#00BFFF"
        strokeWidth="0.8"
        fill="none"
        opacity="0.18"
      />
      <path
        d="M180 600 L360 600 L360 750"
        stroke="#7C3AED"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />
      <path
        d="M900 600 L1080 600 L1080 750 L1260 750"
        stroke="#D946EF"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />
      <line
        x1="540"
        y1="300"
        x2="720"
        y2="300"
        stroke="#00BFFF"
        strokeWidth="0.6"
        opacity="0.14"
      />
      <line
        x1="180"
        y1="450"
        x2="360"
        y2="450"
        stroke="#7C3AED"
        strokeWidth="0.6"
        opacity="0.12"
      />
      <line
        x1="720"
        y1="150"
        x2="900"
        y2="300"
        stroke="#00BFFF"
        strokeWidth="0.6"
        opacity="0.10"
      />
      <line
        x1="540"
        y1="600"
        x2="720"
        y2="750"
        stroke="#7C3AED"
        strokeWidth="0.6"
        opacity="0.10"
      />

      {/* ── Intersection nodes ── */}
      <circle cx="180" cy="150" r="2.5" fill="#00BFFF" opacity="0.25" />
      <circle cx="360" cy="150" r="2" fill="#7C3AED" opacity="0.20" />
      <circle cx="360" cy="300" r="3" fill="#00BFFF" opacity="0.28" />
      <circle cx="540" cy="300" r="2" fill="#D946EF" opacity="0.22" />
      <circle cx="720" cy="300" r="2.5" fill="#7C3AED" opacity="0.20" />
      <circle cx="900" cy="300" r="2" fill="#00BFFF" opacity="0.22" />
      <circle cx="900" cy="450" r="3" fill="#7C3AED" opacity="0.28" />
      <circle cx="1080" cy="450" r="2" fill="#D946EF" opacity="0.20" />
      <circle cx="1260" cy="150" r="2.5" fill="#00BFFF" opacity="0.22" />
      <circle cx="1260" cy="300" r="2" fill="#7C3AED" opacity="0.20" />
      <circle cx="540" cy="450" r="2.5" fill="#D946EF" opacity="0.22" />
      <circle cx="540" cy="600" r="2" fill="#00BFFF" opacity="0.20" />
      <circle cx="720" cy="600" r="3" fill="#7C3AED" opacity="0.25" />
      <circle cx="360" cy="600" r="2" fill="#D946EF" opacity="0.20" />
      <circle cx="360" cy="750" r="2.5" fill="#00BFFF" opacity="0.22" />
      <circle cx="1080" cy="600" r="2" fill="#7C3AED" opacity="0.20" />
      <circle cx="1080" cy="750" r="2.5" fill="#D946EF" opacity="0.25" />
      <circle cx="1260" cy="750" r="2" fill="#00BFFF" opacity="0.20" />
      <rect
        x="177"
        y="447"
        width="6"
        height="6"
        fill="#00BFFF"
        opacity="0.18"
      />
      <rect
        x="717"
        y="447"
        width="6"
        height="6"
        fill="#D946EF"
        opacity="0.18"
      />
      <rect
        x="897"
        y="597"
        width="6"
        height="6"
        fill="#7C3AED"
        opacity="0.18"
      />

      {/* ── Animated traveling light paths ── */}
      <path
        d="M180 150 L360 150 L360 300 L540 300 L540 450 L720 450"
        stroke="#00BFFF"
        strokeWidth="1.5"
        fill="none"
        className="circuit-line"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <path
        d="M720 300 L900 300 L900 450 L1080 450 L1080 600 L1260 600"
        stroke="#7C3AED"
        strokeWidth="1.5"
        fill="none"
        className="circuit-line"
        style={{ animationDelay: "1.1s", animationDuration: "3.4s" }}
      />
      <path
        d="M360 600 L540 600 L540 750 L720 750 L900 750 L1080 750"
        stroke="#D946EF"
        strokeWidth="1.5"
        fill="none"
        className="circuit-line"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      />
    </svg>
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
            "linear-gradient(180deg, oklch(0.06 0.01 270) 0%, oklch(0.08 0.01 270) 100%)",
        }}
      >
        {/* Circuit board SVG background */}
        <CircuitBackground />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-bg opacity-25" />

        {/* Floating CSS orbs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "15%",
            left: "12%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "oklch(0.52 0.28 285 / 0.10)",
            filter: "blur(80px)",
            animation: "floatOrb 7s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "55%",
            right: "10%",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "oklch(0.72 0.22 220 / 0.08)",
            filter: "blur(70px)",
            animation: "floatOrb 9s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "20%",
            left: "35%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "oklch(0.62 0.28 330 / 0.07)",
            filter: "blur(60px)",
            animation: "floatOrb 11s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "35%",
            right: "28%",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "oklch(0.52 0.28 285 / 0.07)",
            filter: "blur(50px)",
            animation: "floatOrb 8s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "70%",
            left: "20%",
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "oklch(0.72 0.22 220 / 0.06)",
            filter: "blur(45px)",
            animation: "floatOrb 10s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.52_0.28_285/0.15)] border border-[oklch(0.52_0.28_285/0.3)] text-[oklch(0.78_0.18_220)] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.22_220)] animate-pulse" />
            Creative Digital Agency — Open for Projects
          </motion.div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <motion.span
              className="block text-foreground mb-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Grow Your Business with
            </motion.span>
            <motion.span
              className="block neon-gradient-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            >
              NextYU Solution
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            We build brands, websites, and digital experiences that convert
            visitors into loyal customers.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed opacity-70"
          >
            From stunning brand identities to high-performance websites — we're
            the creative force behind hundreds of successful businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
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
                className="border-[oklch(0.3_0.04_270)] hover:bg-[oklch(0.52_0.28_285/0.1)] hover:border-[oklch(0.52_0.28_285/0.6)] text-foreground font-semibold text-base px-8 h-12"
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
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[oklch(0.4_0.08_285)] rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.22_220)]"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.08 0.012 270)" }}
        data-ocid="stats.section"
      >
        {/* Ambient glow blobs */}
        <div
          className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
          style={{ background: "oklch(0.52 0.28 285 / 0.08)" }}
        />
        <div
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
          style={{ background: "oklch(0.62 0.28 330 / 0.07)" }}
        />

        {/* Top / bottom border lines */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.22 220 / 0.5), oklch(0.52 0.28 285 / 0.5), oklch(0.62 0.28 330 / 0.5), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.22 220 / 0.5), oklch(0.52 0.28 285 / 0.5), oklch(0.62 0.28 330 / 0.5), transparent)",
          }}
        />

        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section heading */}
          <AnimatedSection className="text-center mb-12">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Our <span className="neon-gradient-text">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Numbers that speak for themselves
            </p>
          </AnimatedSection>

          {/* Stat cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE STATS SECTION ===== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.07 0.01 270)" }}
        data-ocid="service_stats.section"
      >
        {/* Ambient glow blobs */}
        <div
          className="absolute left-1/3 top-1/3 w-72 h-72 rounded-full blur-[120px] pointer-events-none"
          style={{ background: "oklch(0.72 0.22 220 / 0.07)" }}
        />
        <div
          className="absolute right-1/3 bottom-1/3 w-72 h-72 rounded-full blur-[120px] pointer-events-none"
          style={{ background: "oklch(0.52 0.28 285 / 0.08)" }}
        />
        <div
          className="absolute left-2/3 top-1/2 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
          style={{ background: "oklch(0.62 0.28 330 / 0.06)" }}
        />

        {/* Top border line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.22 220 / 0.5), oklch(0.52 0.28 285 / 0.5), oklch(0.62 0.28 330 / 0.5), transparent)",
          }}
        />
        {/* Bottom border line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.22 220 / 0.5), oklch(0.52 0.28 285 / 0.5), oklch(0.62 0.28 330 / 0.5), transparent)",
          }}
        />

        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section heading */}
          <AnimatedSection className="text-center mb-12">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Your Partner in{" "}
              <span className="neon-gradient-text">Digital Growth</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Measurable results across every service we offer
            </p>
          </AnimatedSection>

          {/* Service stat cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {SERVICE_STATS.map((stat, i) => (
              <ServiceStatCard key={stat.title} stat={stat} index={i} />
            ))}
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
                  className="border-[oklch(0.52_0.28_285/0.5)] text-[oklch(0.72_0.22_220)] hover:bg-[oklch(0.52_0.28_285/0.1)] gap-2"
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
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.22_220)] mb-3" />
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
      <section className="py-24 bg-[oklch(0.09_0.012_270)]">
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
                      style={{
                        background: `${service.color.replace(")", " / 0.15)")}`,
                      }}
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
                className="border-[oklch(0.52_0.28_285/0.5)] text-[oklch(0.72_0.22_220)] hover:bg-[oklch(0.52_0.28_285/0.1)] gap-2"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] bg-[oklch(0.52_0.28_285/0.06)] pointer-events-none" />

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
                    <div className="flex gap-1">
                      {Array.from(
                        { length: testimonial.rating },
                        (_, j) => `star-${j}`,
                      ).map((starKey) => (
                        <Star
                          key={starKey}
                          size={14}
                          fill="oklch(0.85 0.16 200)"
                          className="text-[oklch(0.85_0.16_200)]"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-[oklch(0.22_0.025_270)]">
                      <div className="w-9 h-9 rounded-full bg-[oklch(0.52_0.28_285/0.2)] flex items-center justify-center text-[oklch(0.72_0.22_220)] font-bold text-sm">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.012_270)] via-[oklch(0.12_0.015_270)] to-[oklch(0.09_0.012_270)]" />
        <div className="absolute inset-0 border-y border-[oklch(0.22_0.025_270)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.60_0.26_220/0.6)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.60_0.26_220/0.6)] to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] blur-[100px] bg-[oklch(0.52_0.28_285/0.14)] pointer-events-none" />

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
                data-ocid="cta.primary_button"
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
