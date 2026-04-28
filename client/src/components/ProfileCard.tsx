/*
 * ProfileCard — Fixed sidebar profile card
 * Design: Light Theme — clean white background, dark text, amber/orange accents
 */
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin } from "lucide-react";

const PORTRAIT_URL = "/avatar.jpeg";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/saidamirbobojonov",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saidamirbobojonov",
    icon: <Linkedin size={14} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/saeedamir08?igsh=MThmZW51OTA4cWRjYw%3D%3D&utm_source=qr",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "oklch(0.95 0.003 60)",
        border: "1px solid oklch(0 0 0 / 10%)",
        width: "100%",
      }}
    >


      {/* Portrait */}
      <div className="relative mx-4 mt-4 rounded-xl overflow-hidden" style={{ aspectRatio: "1/1.1" }}>
        <img
          src={PORTRAIT_URL}
          alt="Jayden portrait"
          className="w-full h-full object-cover object-top"
        />
        {/* Signature overlay */}
        <div
          className="absolute inset-0 flex items-end justify-center pb-4"
          style={{
            background: "linear-gradient(180deg, transparent 0%, oklch(0 0 0 / 30%) 100%)",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '20px',
              color: "oklch(1 0 0)",
              fontWeight: 400,
              textShadow: "0 2px 8px oklch(0 0 0 / 40%)",
            }}
          >
            Saidamir Bobojonov
          </p>
        </div>
      </div>

      {/* Contact info */}
      <div className="px-4 py-4 flex flex-col gap-2">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            color: "oklch(0.72 0.18 45)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: 600,
          }}
        >
          Contact
        </p>
        <a
          href="mailto:saidamirbobojonov@icloud.com"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "oklch(0.72 0.18 45)",
            wordBreak: "break-word",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "underline")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "none")}
        >
          saidamirbobojonov@icloud.com
        </a>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            color: "oklch(0.45 0.008 60)",
          }}
        >
          Brooklyn, NY · (347) 768-3773
        </p>
      </div>

      {/* Social links */}
      <div className="flex items-center justify-center gap-2 px-4 py-2" style={{backgroundColor: 'oklch(0.95 0.003 60)'}}>
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "oklch(0.92 0.003 60)",
              border: "1px solid oklch(0 0 0 / 10%)",
              color: "oklch(0.15 0.008 60)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.18 45)";
              (e.currentTarget as HTMLElement).style.color = "oklch(1 0 0)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.92 0.003 60)";
              (e.currentTarget as HTMLElement).style.color = "oklch(0.15 0.008 60)";
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="px-4 py-3">
        <a
          href="#contact"
          className="group flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
          style={{
            background: "oklch(0.72 0.18 45)",
            border: "1px solid oklch(0.72 0.18 45 / 40%)",
            color: "oklch(1 0 0)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.18 45 / 60%)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.18 45 / 40%)";
          }}
        >
          <span>Get Started</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
            style={{ background: "oklch(1 0 0 / 20%)" }}
          >
            <ArrowUpRight size={14} style={{ color: "oklch(1 0 0)" }} />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
