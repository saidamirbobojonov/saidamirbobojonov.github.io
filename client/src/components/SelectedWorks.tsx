/**
 * SelectedWorks — Portfolio projects showcase with marquee ticker
 * Design: Dark Organic Warmth — cinematic project cards with overlays
 */
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "LMS Microservices Platform",
    category: "Backend Architecture",
    description: "Production-grade Learning Management System with 5+ microservices, Kafka messaging, and Kubernetes orchestration",
    tech: ["Node.js", "Django", "Kafka", "Docker", "Kubernetes"],
    year: "2025",
    color: "oklch(0.72 0.18 45)",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  },
  {
    title: "Materials Defect Detection",
    category: "Machine Learning",
    description: "ML-based defect classification system achieving 40% accuracy improvement over manual baselines",
    tech: ["Python", "scikit-learn", "Data Pipelines", "ML"],
    year: "2024",
    color: "oklch(0.6 0.15 30)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    title: "Institutional Websites",
    category: "Full Stack Web",
    description: "Production websites for school and tourism center with CMS, admin tooling, and QR code generation",
    tech: ["Django", "PostgreSQL", "CMS", "React"],
    year: "2024",
    color: "oklch(0.5 0.12 280)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    href: "https://pulatov-school.tj",
  },
];

export default function SelectedWorks() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="works" ref={ref} className="py-12">
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
          style={{ color: "oklch(0.4 0.008 60)", fontFamily: "'Space Mono', monospace" }}
        >
          Selected Works
        </span>
      </motion.div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 px-4">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "oklch(0.4 0.008 60)",
                }}
              >
                Selected Work
              </span>
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "oklch(0.72 0.18 45)" }}
              />
            </span>
          ))}
        </div>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href ?? undefined}
            target={project.href ? "_blank" : undefined}
            rel={project.href ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ height: i === 2 ? "260px" : "300px", gridColumn: i === 2 ? "1 / -1" : undefined }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Color + dark overlay */}
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.color}cc 0%, ${project.color}99 40%, rgba(0,0,0,0.55) 100%)`,
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              {/* Top badge */}
              <div className="flex items-start justify-between">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    color: "rgba(255,255,255,1)",
                    fontFamily: "'Space Mono', monospace",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {project.category}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    color: "rgba(255,255,255,1)",
                    fontFamily: "'Space Mono', monospace",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Bottom content */}
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.5rem",
                      color: "rgba(255,255,255,1)",
                      letterSpacing: "-0.02em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs mb-3"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: 1.5,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.description}
                  </p>
                  <p
                    className="text-xs mb-2"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'Space Mono', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontSize: "0.65rem",
                    }}
                  >
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: "'Space Mono', monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <ArrowUpRight size={16} style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
