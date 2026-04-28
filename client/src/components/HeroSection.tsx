import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const skillTags = ["Python", "Django", "Microservices", "Docker & Kubernetes", "PostgreSQL", "FastAPI", "AWS/Cloud", "REST APIs", "React", "TypeScript"];

function LiveClock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "America/New_York" })
  );
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "America/New_York" }));
    }, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem" }}>
      Brooklyn, NY · {time}
    </span>
  );
}

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
      className="flex-1 rounded-2xl p-5 flex flex-col gap-2"
      style={{
        background: "oklch(0.95 0.003 60)",
        border: "1px solid oklch(0 0 0 / 10%)",
        minWidth: 0,
      }}
    >
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "oklch(0.72 0.18 45)" }} />
        <span
          className="text-xs uppercase tracking-widest leading-tight"
          style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          {label}
        </span>
      </div>
      <div
        className="text-5xl font-bold leading-none mt-1"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
        }}
      >
        {count}{suffix}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section id="home" ref={sectionRef} className="pt-8 pb-12 relative">
      {/* Location & live time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-8"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "oklch(0.55 0.18 145)", boxShadow: "0 0 6px oklch(0.55 0.18 145 / 60%)" }}
        />
        <LiveClock />
      </motion.div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.72 0.18 45)" }} />
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
        Building Production‑Grade Backend Systems
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 max-w-lg"
        style={{
          color: "oklch(0.4 0.008 60)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.65,
        }}
      >
        Python backend engineer specializing in microservices architecture, scalable systems design, and DevOps.
        Experienced with Django, FastAPI, Kubernetes, and cloud infrastructure — available immediately in Brooklyn, NY.
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

      {/* Stats row */}
      <div className="flex gap-3 flex-wrap sm:flex-nowrap">
        <StatCard label="Years Exp." value={4} suffix="+" delay={0.1} />
        <StatCard label="Projects" value={10} suffix="+" delay={0.15} />
        <StatCard label="Countries" value={3} suffix="" delay={0.2} />
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
