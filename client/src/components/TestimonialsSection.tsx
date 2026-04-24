/**
 * TestimonialsSection — Testimonial carousel with client avatars
 * Design: Dark Organic Warmth — large quote text, avatar navigation
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote:
      "A studio with passionate, professional and full creativity. Much more than I'm expect. Great services, high quality products & affordable.",
    author: "Lewis Jones",
    role: "CEO of Avade Inc",
    initials: "LJ",
  },
  {
    quote:
      "A little universe of inspiration — where passion meets professionalism and creativity knows no bounds. Exceptional service, stunning products that made me go 'wow' at first glance, and prices that make you smile!",
    author: "Jayden",
    role: "CEO of Avade Inc",
    initials: "JD",
  },
  {
    quote:
      "This studio is on another level! Super creative, totally pro, and packed with good vibes. Loved the service, obsessed with the quality — and the prices? Totally worth it!",
    author: "Musk",
    role: "CEO of Avade Inc",
    initials: "MK",
  },
];

const clientLogos = [
  "Airbnb", "Spotify", "Netflix", "Adobe", "Figma", "Notion", "Linear", "Vercel"
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView(0.1);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonial" ref={ref} className="py-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-8"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "oklch(0.72 0.18 45)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Space Mono', monospace" }}
        >
          Testimonial
        </span>
      </motion.div>

      {/* Testimonial card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl p-6 mb-6"
        style={{
          background: "oklch(0.14 0.006 60)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              fontWeight: 500,
              color: "oklch(0.94 0.008 60)",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            "{testimonials[current].quote}"
          </motion.blockquote>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: "oklch(0.72 0.18 45)",
                color: "oklch(0.1 0.005 60)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {testimonials[current].initials}
            </div>
            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: "oklch(0.94 0.008 60)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {testimonials[current].author}
              </p>
              <p
                className="text-xs"
                style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <span
              className="text-xs mr-2"
              style={{ color: "oklch(0.45 0.008 60)", fontFamily: "'Space Mono', monospace" }}
            >
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "oklch(0.2 0.006 60)",
                border: "1px solid oklch(1 0 0 / 8%)",
                color: "oklch(0.65 0.01 60)",
              }}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "oklch(0.2 0.006 60)",
                border: "1px solid oklch(1 0 0 / 8%)",
                color: "oklch(0.65 0.01 60)",
              }}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Client logos ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4"
      >
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "oklch(0.45 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          Clients
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <span
                key={i}
                className="mx-6 text-sm font-semibold"
                style={{
                  color: "oklch(0.35 0.006 60)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
