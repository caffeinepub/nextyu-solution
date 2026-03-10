import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Eye,
  Shield,
  Target,
  Users,
  Zap,
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

const WHY_US = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We respect your timelines. Projects delivered on schedule without compromising quality.",
    color: "oklch(0.85 0.16 200)",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Every deliverable undergoes rigorous quality checks to ensure excellence.",
    color: "oklch(0.72 0.22 220)",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "Our team is always available to assist you at every stage of the project.",
    color: "oklch(0.65 0.22 260)",
  },
  {
    icon: Shield,
    title: "Reliable & Trustworthy",
    desc: "Your data and intellectual property are always safe with us.",
    color: "oklch(0.52 0.28 285)",
  },
  {
    icon: Clock,
    title: "Revisions Included",
    desc: "We work until you're 100% satisfied with the final result.",
    color: "oklch(0.62 0.28 330)",
  },
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Everything we design is crafted with your business goals in mind.",
    color: "oklch(0.72 0.22 220)",
  },
];

const TEAM = [
  {
    name: "Sivakumar Yuvaraj",
    role: "Founder & Creative Director",
    bio: "Sivakumar is the visionary behind NextYU Solution, driving the company's strategic direction and creative identity. He leads brand development and digital strategy, ensuring every project reflects innovation and purpose.",
    initials: "SY",
    gradientFrom: "oklch(0.60 0.26 200)",
    gradientTo: "oklch(0.52 0.28 260)",
  },
  {
    name: "Kaviyarasan",
    role: "Human Resource Manager",
    bio: "Kaviyarasan builds and nurtures the talent that powers NextYU Solution, overseeing recruitment, team coordination, and employee growth. He is committed to fostering a collaborative, high-performance work culture where every team member thrives.",
    initials: "KV",
    gradientFrom: "oklch(0.52 0.28 260)",
    gradientTo: "oklch(0.62 0.28 300)",
  },
  {
    name: "Nirali Vachhani",
    role: "Web Developer",
    bio: "Nirali specializes in crafting modern, responsive websites and scalable web applications tailored to client needs. She brings technical precision and a keen eye for user experience to every project she delivers.",
    initials: "NV",
    gradientFrom: "oklch(0.62 0.28 300)",
    gradientTo: "oklch(0.72 0.22 340)",
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us — NextYU Solution";
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
              Our Story
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              About <span className="gradient-text">NextYU Solution</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We're a passionate team of designers, developers, and strategists
              united by one goal: helping your business reach its full digital
              potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="section-divider mb-6" />
              <h2 className="font-display font-bold text-3xl mb-6">
                How It All <span className="gradient-text">Began</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NextYU Solution was founded with a simple observation: too many
                great businesses were being held back by poor digital
                presentation. Small businesses deserved premium-quality design
                and marketing without enterprise-level budgets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting from a small team of freelancers, we've grown into a
                full-service digital agency delivering world-class results to
                clients across 15+ countries. Our remote-first model lets us
                bring global talent to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, NextYU Solution stands as a testament to what's possible
                when creativity meets strategy — and we're just getting started.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="glass-card gradient-border rounded-2xl p-8">
                  <div className="space-y-4">
                    {[
                      "Serving clients in 15+ countries worldwide",
                      "100% client satisfaction guarantee",
                      "Fast turnaround with premium quality",
                      "Transparent pricing, no hidden fees",
                      "Dedicated project manager for every client",
                    ].map((point, i) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-[oklch(0.72_0.22_220)] shrink-0"
                        />
                        <span className="text-sm text-foreground/80">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2.5 animate-float border border-[oklch(0.52_0.28_285/0.4)]">
                  <div className="text-xs text-muted-foreground">Since</div>
                  <div className="font-display font-bold text-xl gradient-text">
                    2019
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 bg-[oklch(0.09_0.012_270)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8 h-full border-[oklch(0.52_0.28_285/0.3)] group hover:border-[oklch(0.52_0.28_285/0.5)] transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.52_0.28_285/0.15)] flex items-center justify-center mb-5">
                  <Target size={22} className="text-[oklch(0.72_0.22_220)]" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 gradient-text">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with premium digital
                  services that drive real, measurable growth. We believe every
                  brand deserves a powerful online presence — and we make that
                  achievable at every budget level.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-2xl p-8 h-full border-[oklch(0.62_0.28_330/0.3)] group hover:border-[oklch(0.62_0.28_330/0.5)] transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.62_0.28_330/0.15)] flex items-center justify-center mb-5">
                  <Eye size={22} className="text-[oklch(0.62_0.28_330)]" />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.22 220), oklch(0.62 0.28 330))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital partner for growing
                  businesses worldwide — a team that clients return to again and
                  again because we don't just deliver work, we deliver
                  transformation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Why Choose <span className="gradient-text">NextYU?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              We're not just another agency. Here's what makes us different.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 h-full">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${item.color}18` }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <h3 className="font-heading font-semibold text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-24 bg-[oklch(0.09_0.012_270)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Talented, passionate, and dedicated to your success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.12}>
                <motion.div
                  className="glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Avatar with gradient ring */}
                  <div className="relative mb-5">
                    <div
                      className="w-24 h-24 rounded-full p-[3px]"
                      style={{
                        background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center font-display font-bold text-2xl text-white"
                        style={{
                          background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                        }}
                      >
                        {member.initials}
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-30 -z-10"
                      style={{
                        background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                      }}
                    />
                  </div>

                  <h3 className="font-heading font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-4 tracking-wide uppercase"
                    style={{
                      background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.52_0.28_285/0.6)] to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's turn your vision into a digital reality.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glow text-white border-0 font-semibold gap-2"
                data-ocid="cta.get_started_button"
              >
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
