import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
  SiX,
} from "react-icons/si";

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

const CONTACT_INFO = [
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    value: "+91 9360193948",
    href: "https://wa.me/919360193948",
    color: "oklch(0.65 0.18 145)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nextyusolution@gmail.com",
    href: "mailto:nextyusolution@gmail.com",
    color: "oklch(0.72 0.22 220)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote — Worldwide",
    href: null,
    color: "oklch(0.62 0.28 330)",
  },
];

const SOCIAL_LINKS = [
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/nextyu_solution/",
    color: "oklch(0.62 0.28 330)",
  },
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://facebook.com",
    color: "oklch(0.72 0.22 220)",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "oklch(0.52 0.28 285)",
  },
  {
    icon: SiX,
    label: "Twitter / X",
    href: "https://x.com",
    color: "oklch(0.8 0.01 265)",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending, isError } = useSubmitContact();

  useEffect(() => {
    document.title = "Contact Us — NextYU Solution";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    mutate(
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: "", email: "", subject: "", message: "" });
        },
      },
    );
  };

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
              Let's Talk
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? Have questions? We'd love to hear
              from you. Send us a message and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <AnimatedSection>
                <h2 className="font-display font-bold text-2xl mb-6">
                  Reach Us <span className="gradient-text">Directly</span>
                </h2>
              </AnimatedSection>

              {CONTACT_INFO.map((info, i) => {
                const Icon = info.icon;
                const content = (
                  <div
                    className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4"
                    style={{ borderColor: `${info.color}30` }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${info.color}18` }}
                    >
                      <Icon size={18} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <AnimatedSection key={info.label} delay={i * 0.1}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </AnimatedSection>
                );
              })}

              {/* Social Links */}
              <AnimatedSection delay={0.35}>
                <div className="glass-card rounded-xl p-5 mt-4">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">
                    Follow Us
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[oklch(0.09_0.012_270)] hover:bg-[oklch(0.18_0.018_270)] transition-colors duration-200"
                        >
                          <Icon size={14} style={{ color: social.color }} />
                          <span className="text-xs text-muted-foreground">
                            {social.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h2 className="font-display font-bold text-2xl mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We typically respond within 24 hours. For urgent requests, use
                  WhatsApp.
                </p>

                {submitted ? (
                  /* Success state */
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[oklch(0.65_0.22_260/0.15)] flex items-center justify-center mb-4">
                      <CheckCircle2
                        size={32}
                        className="text-[oklch(0.72_0.22_220)]"
                      />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thanks for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 border-[oklch(0.3_0.04_270)] text-foreground hover:bg-[oklch(0.52_0.28_285/0.1)]"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          data-ocid="contact.name_input"
                          className="bg-[oklch(0.09_0.012_270)] border-[oklch(0.22_0.025_270)] focus:border-[oklch(0.52_0.28_285/0.6)] focus:ring-[oklch(0.52_0.28_285/0.3)] placeholder:text-muted-foreground/40"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="email"
                          className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          data-ocid="contact.email_input"
                          className="bg-[oklch(0.09_0.012_270)] border-[oklch(0.22_0.025_270)] focus:border-[oklch(0.52_0.28_285/0.6)] focus:ring-[oklch(0.52_0.28_285/0.3)] placeholder:text-muted-foreground/40"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="subject"
                        className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="e.g. Logo Design for my startup"
                        required
                        data-ocid="contact.subject_input"
                        className="bg-[oklch(0.09_0.012_270)] border-[oklch(0.22_0.025_270)] focus:border-[oklch(0.52_0.28_285/0.6)] focus:ring-[oklch(0.52_0.28_285/0.3)] placeholder:text-muted-foreground/40"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={5}
                        required
                        data-ocid="contact.message_input"
                        className="bg-[oklch(0.09_0.012_270)] border-[oklch(0.22_0.025_270)] focus:border-[oklch(0.52_0.28_285/0.6)] focus:ring-[oklch(0.52_0.28_285/0.3)] placeholder:text-muted-foreground/40 resize-none"
                      />
                    </div>

                    {/* Error state */}
                    {isError && (
                      <div
                        data-ocid="contact.error_state"
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-[oklch(0.52_0.28_285/0.1)] border border-[oklch(0.52_0.28_285/0.3)] text-sm text-[oklch(0.75_0.15_220)]"
                      >
                        <AlertCircle size={15} />
                        Failed to send message. Please try again or contact us
                        via WhatsApp.
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full btn-glow text-white border-0 font-semibold h-11 gap-2"
                      data-ocid="contact.submit_button"
                    >
                      {isPending ? (
                        <>
                          <Loader2
                            size={16}
                            className="animate-spin"
                            data-ocid="contact.loading_state"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
