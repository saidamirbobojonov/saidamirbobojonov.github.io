/**
 * AboutSection — About me with tools grid
 * Design: Dark Organic Warmth — editorial heading, tool cards
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const tools = [
  {
    name: "Python",
    desc: "Primary language for backend development",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#3776ab"/>
        <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "Django",
    desc: "Full-stack web framework for production systems",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#092E20"/>
        <path d="M12 6L6 9v6l6 3 6-3V9l-6-3z" fill="#FFFFFF" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    desc: "Advanced relational database",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791"/>
        <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    desc: "Containerization and deployment",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#2496ED"/>
        <path d="M12 6L6 9v6l6 3 6-3V9l-6-3z" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    desc: "Container orchestration platform",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#326CE5"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Git",
    desc: "Version control and collaboration",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#F1502F"/>
        <path d="M12 6L6 9v6l6 3 6-3V9l-6-3z" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="about" ref={ref} className="py-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-6"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "oklch(0.72 0.18 45)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          About Me
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bold mb-5"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
        }}
      >
        Backend engineer building scalable systems with Python and cloud infrastructure
      </motion.h2>

      {/* Body text */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
        style={{
          color: "oklch(0.4 0.008 60)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        I specialize in building production-grade backend systems using Python, Django, and FastAPI. With hands-on experience in microservices architecture, DevOps, and cloud infrastructure, I've delivered scalable solutions for startups and enterprises. My work spans from LMS platforms and ML pipelines to institutional websites and internal tooling.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mb-8"
        style={{
          color: "oklch(0.4 0.008 60)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        Currently based in Brooklyn, NY. U.S.-based and available immediately for Python backend engineering roles. Passionate about clean code, system design, and open-source contributions.
      </motion.p>

      {/* Handle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mb-8 text-sm font-medium"
        style={{ color: "oklch(0.72 0.18 45)", fontFamily: "'Space Mono', monospace" }}
      >
        @saidamirbobojonov
      </motion.p>


    </section>
  );
}
