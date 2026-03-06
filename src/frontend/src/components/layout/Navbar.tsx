import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/", ocid: "nav.home_link" },
  { label: "About", to: "/about", ocid: "nav.about_link" },
  { label: "Services", to: "/services", ocid: "nav.services_link" },
  { label: "Portfolio", to: "/portfolio", ocid: "nav.portfolio_link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact_link" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[oklch(0.08_0.008_15/0.95)] backdrop-blur-xl border-b border-[oklch(0.22_0.02_15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.home_link"
        >
          <img
            src="/assets/generated/logo-mark-transparent.dim_200x200.png"
            alt="NextYU Solution"
            className="w-8 h-8 object-contain"
          />
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="gradient-text">NextYU</span>
            <span className="text-foreground/80"> Solution</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[oklch(0.68_0.24_25)] bg-[oklch(0.55_0.24_25/0.12)]"
                    : "text-foreground/70 hover:text-foreground hover:bg-[oklch(0.55_0.24_25/0.08)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/contact">
            <Button
              className="ml-2 btn-glow text-white border-0 text-sm font-semibold"
              size="sm"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-[oklch(0.55_0.24_25/0.1)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.mobile_toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[oklch(0.1_0.01_15/0.98)] backdrop-blur-xl border-b border-[oklch(0.22_0.02_15)] px-6 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[oklch(0.68_0.24_25)] bg-[oklch(0.55_0.24_25/0.12)]"
                      : "text-foreground/70 hover:text-foreground hover:bg-[oklch(0.55_0.24_25/0.08)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact" className="mt-2">
              <Button className="w-full btn-glow text-white border-0 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
