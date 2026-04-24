/**
 * Navbar — Top navigation bar
 * Design: Dark Organic Warmth — minimal, icon-based nav with amber accent
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Home, Briefcase, Award, Settings, User, Star, Tag, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Works", href: "#works", icon: Briefcase },
  { label: "Experience", href: "#experience", icon: Award },
  { label: "Skills", href: "#skills", icon: Settings },
  { label: "About", href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: "oklch(0.95 0.003 60)" }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "oklch(0.15 0.008 60)",
                }}
              >
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.92 0.003 60)", color: "oklch(0.15 0.008 60)" }}
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pt-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-lg font-medium transition-colors"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "oklch(0.15 0.008 60)",
                    borderBottom: "1px solid oklch(0 0 0 / 10%)",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "oklch(0.72 0.18 45)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.15 0.008 60)")}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed nav icons on right side (desktop) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            title={link.label}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
            style={{
              background: "oklch(0.92 0.003 60)",
              border: "1px solid oklch(0 0 0 / 10%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.18 45 / 60%)";
              (e.currentTarget as HTMLElement).style.background = "oklch(0.88 0.003 60)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0 0 0 / 10%)";
              (e.currentTarget as HTMLElement).style.background = "oklch(0.92 0.003 60)";
            }}
          >
            <link.icon size={14} style={{ color: "oklch(0.4 0.008 60)" }} />
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-40 lg:hidden w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: "oklch(0.92 0.003 60)",
          border: "1px solid oklch(0 0 0 / 10%)",
          color: "oklch(0.15 0.008 60)",
        }}
      >
        <Menu size={16} />
      </button>
    </>
  );
}
