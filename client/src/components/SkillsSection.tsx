/**
 * SkillsSection — Skills breakdown with accordion format
 * Design: Dark Organic Warmth — expandable skill categories
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    number: "(01)",
    title: "Backend Development",
    skills: ["Python", "Django & DRF", "FastAPI", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    number: "(02)",
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
  },
  {
    number: "(03)",
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines", "Nginx", "Linux"],
  },

  {
    number: "(04)",
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Responsive Design"],
  },
  {
    number: "(05)",
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Figma", "Postman", "Jira", "Apache Kafka"],
  },
];

function SkillItem({
  category,
  index,
  inView,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open ? "oklch(0.95 0.003 60)" : "transparent",
        border: `1px solid ${open ? "oklch(0.72 0.18 45 / 30%)" : "oklch(0 0 0 / 8%)"}`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          {open && (
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.72 0.18 45)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(1 0 0)" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          )}
          <div>
            <span
              className="text-xs block mb-0.5"
              style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
            >
              {category.number}
            </span>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                color: open ? "oklch(0.15 0.008 60)" : "oklch(0.45 0.008 60)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                transition: "color 0.3s",
              }}
            >
              {category.title}
            </h3>
          </div>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
          style={{
            background: open ? "oklch(0.72 0.18 45)" : "oklch(0.92 0.003 60)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? "oklch(1 0 0)" : "oklch(0.5 0.008 60)"} strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    background: "oklch(1 0 0)",
                    color: "oklch(0.72 0.18 45)",
                    border: "1px solid oklch(0.72 0.18 45 / 40%)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" ref={ref} className="py-12">
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
          Technical Skills
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bold mb-8"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
        }}
      >
        Expertise Across Full Stack Development
      </motion.h2>

      <div className="flex flex-col gap-3 mb-8">
        {skillCategories.map((category, i) => (
          <SkillItem key={category.title} category={category} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
