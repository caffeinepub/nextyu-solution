import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type FilterType = "All" | "Design" | "Video" | "Web";

const PROJECTS = [
  {
    id: 1,
    title: "TechNova Brand Identity",
    category: "Design" as FilterType,
    desc: "Complete brand overhaul for a SaaS startup — logo, business cards, and brand guidelines.",
    image: "/assets/generated/portfolio-logos.dim_600x400.jpg",
    tags: ["Logo", "Branding"],
    ocid: "portfolio.item.1",
  },
  {
    id: 2,
    title: "Luxe Living Website",
    category: "Web" as FilterType,
    desc: "Premium real estate agency website with virtual tour integration and lead capture system.",
    image: "/assets/generated/portfolio-web.dim_600x400.jpg",
    tags: ["Website", "UI/UX"],
    ocid: "portfolio.item.2",
  },
  {
    id: 3,
    title: "FoodieHub Promo Video",
    category: "Video" as FilterType,
    desc: "60-second brand launch video for a food delivery app — scripted, shot, and edited.",
    image: "/assets/generated/portfolio-video.dim_600x400.jpg",
    tags: ["Video Editing", "Motion"],
    ocid: "portfolio.item.3",
  },
  {
    id: 4,
    title: "GreenLeaf Social Kit",
    category: "Design" as FilterType,
    desc: "Instagram content strategy and 30-day social media design kit for an organic brand.",
    image: "/assets/generated/portfolio-logos.dim_600x400.jpg",
    tags: ["Social Media", "Design"],
    ocid: "portfolio.item.4",
  },
  {
    id: 5,
    title: "Pulse Fitness Website",
    category: "Web" as FilterType,
    desc: "High-converting gym website with class booking, trainer profiles, and membership portal.",
    image: "/assets/generated/portfolio-web.dim_600x400.jpg",
    tags: ["Website", "SEO"],
    ocid: "portfolio.item.5",
  },
  {
    id: 6,
    title: "StyleHouse Lookbook Video",
    category: "Video" as FilterType,
    desc: "Fashion brand showcase video combining editorial photography with cinematic motion.",
    image: "/assets/generated/portfolio-video.dim_600x400.jpg",
    tags: ["Video", "Fashion"],
    ocid: "portfolio.item.6",
  },
  {
    id: 7,
    title: "Artisan Coffee Branding",
    category: "Design" as FilterType,
    desc: "Full visual identity for an independent coffee roastery — logo, packaging, and signage.",
    image: "/assets/generated/portfolio-logos.dim_600x400.jpg",
    tags: ["Branding", "Print"],
    ocid: "portfolio.item.7",
  },
  {
    id: 8,
    title: "FinWise Dashboard",
    category: "Web" as FilterType,
    desc: "Financial analytics web application with real-time charts and portfolio management.",
    image: "/assets/generated/portfolio-web.dim_600x400.jpg",
    tags: ["Web App", "Dashboard"],
    ocid: "portfolio.item.8",
  },
  {
    id: 9,
    title: "SkyDrone Product Reel",
    category: "Video" as FilterType,
    desc: "Aerial drone footage product reel with 3D text animations and sound design.",
    image: "/assets/generated/portfolio-video.dim_600x400.jpg",
    tags: ["Video", "Product"],
    ocid: "portfolio.item.9",
  },
];

const FILTERS: FilterType[] = ["All", "Design", "Video", "Web"];

const FILTER_COLORS: Record<FilterType, string> = {
  All: "oklch(0.68 0.24 25)",
  Design: "oklch(0.72 0.2 40)",
  Video: "oklch(0.65 0.22 10)",
  Web: "oklch(0.72 0.18 55)",
};

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

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  useEffect(() => {
    document.title = "Portfolio — NextYU Solution";
  }, []);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

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
              Selected Work
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A showcase of our finest work — brands we've built, websites we've
              launched, and stories we've told through design and video.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTER TABS ===== */}
      <section className="pb-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((filter) => (
              <button
                type="button"
                key={filter}
                data-ocid="portfolio.filter.tab"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "text-white"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
                style={
                  activeFilter === filter
                    ? {
                        background: `linear-gradient(135deg, ${FILTER_COLORS[filter]}, ${FILTER_COLORS[filter]}bb)`,
                        boxShadow: `0 4px 20px ${FILTER_COLORS[filter]}40`,
                      }
                    : {}
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  data-ocid={project.ocid}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden group cursor-pointer glass-card-hover"
                >
                  {/* Project image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.008_15/0.8)] to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[oklch(0.55_0.24_25/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ExternalLink size={16} className="text-white" />
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
                        style={{
                          background: `${FILTER_COLORS[project.category]}cc`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-base mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-[oklch(0.18_0.015_15)] text-muted-foreground border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[oklch(0.09_0.009_15)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.24_25/0.6)] to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Want your project to be{" "}
              <span className="gradient-text">next?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create something incredible together.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glow text-white border-0 font-semibold gap-2"
                data-ocid="cta.get_started_button"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
