/*
 * ProfileCard — Fixed sidebar profile card
 * Design: Light Theme — clean white background, dark text, amber/orange accents
 */
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Linkedin } from "lucide-react";

const PORTRAIT_URL = "/avatar.jpeg";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100034959560055",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "oklch(0.15 0.008 60)",
            wordBreak: "break-all",
          }}
        >
          saidamirbobojonov@icloud.com
        </p>
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
