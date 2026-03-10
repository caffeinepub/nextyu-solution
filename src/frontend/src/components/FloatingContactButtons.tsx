import { Mail, Phone } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

interface FloatingButton {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
  color: string;
  bgColor: string;
  ocid: string;
  newTab: boolean;
}

const BUTTONS: FloatingButton[] = [
  {
    id: "whatsapp",
    icon: SiWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/919360193948",
    color: "#25D366",
    bgColor: "oklch(0.55 0.18 145)",
    ocid: "floating.whatsapp_button",
    newTab: true,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Call Us",
    href: "tel:+919360193948",
    color: "oklch(0.78 0.18 220)",
    bgColor: "oklch(0.62 0.22 220)",
    ocid: "floating.phone_button",
    newTab: false,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Us",
    href: "mailto:nextyusolution@gmail.com",
    color: "oklch(0.75 0.15 285)",
    bgColor: "oklch(0.52 0.28 285)",
    ocid: "floating.email_button",
    newTab: false,
  },
  {
    id: "instagram",
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/nextyu_solution/",
    color: "#E1306C",
    bgColor: "oklch(0.58 0.22 350)",
    ocid: "floating.instagram_button",
    newTab: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.6, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 22, mass: 0.8 },
  },
};

export default function FloatingContactButtons() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed left-3 z-40 flex flex-col gap-3"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Floating contact buttons"
    >
      {BUTTONS.map((btn) => {
        const Icon = btn.icon;
        const isHovered = hoveredId === btn.id;

        const borderColor =
          btn.id === "whatsapp"
            ? "oklch(0.55 0.18 145 / 0.6)"
            : btn.id === "instagram"
              ? "oklch(0.55 0.22 350 / 0.6)"
              : btn.id === "phone"
                ? "oklch(0.62 0.22 220 / 0.6)"
                : "oklch(0.52 0.28 285 / 0.6)";
        const glowColor =
          btn.id === "whatsapp"
            ? "oklch(0.55 0.18 145 / 0.35)"
            : btn.id === "instagram"
              ? "oklch(0.55 0.22 350 / 0.35)"
              : btn.id === "phone"
                ? "oklch(0.62 0.22 220 / 0.35)"
                : "oklch(0.52 0.28 285 / 0.35)";

        return (
          <motion.div
            key={btn.id}
            variants={buttonVariants}
            className="relative flex items-center"
            onHoverStart={() => setHoveredId(btn.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -8, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -8, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-14 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold text-white pointer-events-none shadow-lg"
                  style={{
                    background: "oklch(0.12 0.015 270 / 0.95)",
                    border: "1px solid oklch(0.25 0.03 270)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {btn.label}
                  {/* Arrow */}
                  <span
                    className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-2.5 h-2.5 rotate-45"
                    style={{
                      background: "oklch(0.12 0.015 270 / 0.95)",
                      border: "1px solid oklch(0.25 0.03 270)",
                      borderRight: "none",
                      borderTop: "none",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon Button */}
            <motion.a
              href={btn.href}
              target={btn.newTab ? "_blank" : "_self"}
              rel={btn.newTab ? "noopener noreferrer" : undefined}
              data-ocid={btn.ocid}
              aria-label={btn.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, oklch(0.22 0.025 270), oklch(0.09 0.012 270))",
                border: `2px solid ${borderColor}`,
                backdropFilter: "blur(12px)",
                boxShadow: isHovered
                  ? `0 0 18px 4px ${glowColor}`
                  : "0 4px 16px oklch(0 0 0 / 0.4)",
              }}
            >
              <Icon
                size={20}
                style={{
                  color: btn.color,
                  filter: isHovered ? "brightness(1.2)" : "brightness(1)",
                }}
              />
            </motion.a>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
