import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[oklch(0.06_0.01_270)] border-t border-[oklch(0.22_0.025_270)] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/uploads/WhatsApp-Image-2026-03-06-at-23.36.51-1.jpeg"
                alt="NextYU Solution"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="gradient-text">NextYU</span>
                <span className="text-foreground/80"> Solution</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              A creative digital service startup helping businesses grow online.
              We craft exceptional digital experiences that drive real results.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/nextyu_solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[oklch(0.14_0.015_270)] border border-[oklch(0.22_0.025_270)] text-muted-foreground hover:text-[oklch(0.72_0.22_220)] hover:border-[oklch(0.52_0.28_285/0.5)] transition-all duration-200"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[oklch(0.14_0.015_270)] border border-[oklch(0.22_0.025_270)] text-muted-foreground hover:text-[oklch(0.72_0.22_220)] hover:border-[oklch(0.52_0.28_285/0.5)] transition-all duration-200"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[oklch(0.14_0.015_270)] border border-[oklch(0.22_0.025_270)] text-muted-foreground hover:text-[oklch(0.72_0.22_220)] hover:border-[oklch(0.52_0.28_285/0.5)] transition-all duration-200"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[oklch(0.14_0.015_270)] border border-[oklch(0.22_0.025_270)] text-muted-foreground hover:text-[oklch(0.72_0.22_220)] hover:border-[oklch(0.52_0.28_285/0.5)] transition-all duration-200"
              >
                <SiX size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.22_220)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.52_0.28_285)] group-hover:w-2 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.22_220)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="text-[oklch(0.72_0.22_220)] mt-0.5 shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  nextyusolution@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-[oklch(0.72_0.22_220)] mt-0.5 shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  +91 9360193948
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-[oklch(0.72_0.22_220)] mt-0.5 shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  Remote — Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[oklch(0.22_0.025_270)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground">
            © {year} NextYU Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
