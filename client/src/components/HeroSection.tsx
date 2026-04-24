/**
 * HeroSection — Introduction, skill tags, and stat counters
 * Design: Dark Organic Warmth — large display type, warm amber accents
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const skillTags = ["Python", "Django", "Microservices", "Docker & Kubernetes", "PostgreSQL", "FastAPI", "AWS/Cloud", "REST APIs", "React", "TypeScript", "Tailwind CSS"];

function StatCard({
  label,
  value,
  suffix,
  delay = 0,
}: {
  label: string;
  value: number;
  suffix: string;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex-1 rounded-2xl p-6 flex flex-col gap-2"
      style={{
        background: "oklch(0.95 0.003 60)",
        border: "1px solid oklch(0 0 0 / 10%)",
        minWidth: 0,
      }}
    >
      <div className="flex items-center gap-1.5">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "oklch(0.72 0.18 45)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          {label}
        </span>
      </div>
      <div
        className="text-6xl font-bold leading-none mt-2"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
        }}
      >
        {count}
        {suffix}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section id="home" ref={sectionRef} className="pt-8 pb-12 relative">
      {/* Location & time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-8"
      >
        <span
          className="text-xs"
          style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          New York, NY 10:24 AM
        </span>
      </motion.div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="flex items-center gap-2 mb-4"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "oklch(0.72 0.18 45)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          Introduction
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bold leading-tight mb-4"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        Building Production-Grade Backend Systems
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 max-w-md"
        style={{
          color: "oklch(0.4 0.008 60)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.6,
        }}
      >
        Python backend engineer specializing in microservices architecture, scalable systems design, and DevOps. Experienced with Django, FastAPI, Kubernetes, and cloud infrastructure.
      </motion.p>

      {/* Skill tags */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {skillTags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.72 0.18 45 / 30%)",
              color: "oklch(0.72 0.18 45)",
              fontFamily: "'DM Sans', sans-serif",
              cursor: "default",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Stats */}
      <div className="flex gap-4">
        <StatCard label="Years Experience" value={4} suffix="+" delay={0.1} />
      </div>

      {/* Decorative background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, oklch(0.72 0.18 45 / 4%) 0%, transparent 70%)",
          zIndex: -1,
        }}
      />
    </section>
  );
}
