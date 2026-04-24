/**
 * ExperienceSection — Work experience timeline
 * Design: Dark Organic Warmth — vertical timeline with company highlights
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    company: "FNF Global Inc.",
    title: "Backend Engineer",
    location: "Khujand, Tajikistan (U.S.-based)",
    period: "Nov 2025 – Feb 2026",
    highlights: [
      "Architected production-grade LMS with 5+ microservices (Node.js, Django REST Framework)",
      "Integrated Apache Kafka for asynchronous messaging and event processing",
      "Built Google Drive API automation for document management workflows",
      "Optimized PostgreSQL schemas, reducing query latency by ~30%",
      "Configured Kubernetes orchestration with Nginx and S3/MinIO storage",
    ],
  },
  {
    company: "Cultural & Historical Complex of Khujand Fortress",
    title: "Software Developer & Technical Project Coordinator",
    location: "Khujand, Tajikistan",
    period: "Dec 2024 – Nov 2025",
    highlights: [
      "Designed and maintained institutional website using Django and PostgreSQL",
      "Built QR code generation system for exhibit labeling and visitor info",
      "Managed production environment and content administration",
      "Authored technical sections of international grant proposals for EU and CIS funding",
    ],
  },
  {
    company: "Federal Institute for Materials Research and Testing (BAM)",
    title: "Python Programmer Intern",
    location: "Berlin, Germany",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Developed ML models using scikit-learn for structural defect detection",
      "Achieved ~40% accuracy improvement over manual baselines",
      "Engineered data pipelines, reducing analyst prep time by 45%",
      "Certified Internship Python Programmer (BAM Berlin, 2024)",
    ],
  },
  {
    company: "Technology Park, Khujand State University",
    title: "Software Developer & Technical Project Coordinator",
    location: "Khujand, Tajikistan",
    period: "Apr 2020 – May 2024 · Sep 2024 – Feb 2026",
    highlights: [
      "Developed multiple institutional websites (pulatov-school.tj, tourismcenter.tj)",
      "Implemented CMS features, admin tooling, and dynamic content management",
      "Built internal automation tools to streamline university operations",
      "Contributed to successful international grant applications for digitization initiatives",
    ],
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="experience" ref={ref} className="py-12">
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
          Experiences
        </span>
      </motion.div>

      {/* Large editorial quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-10"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
          fontWeight: 600,
          color: "oklch(0.15 0.008 60)",
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
        }}
      >
        Backend engineer crafting scalable systems with Python, microservices, and cloud infrastructure{" "}
        <span style={{ color: "oklch(0.4 0.008 60)" }}>for production</span>
      </motion.blockquote>

      {/* Experience list */}
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="py-5 flex flex-col gap-3"
            style={{ borderBottom: "1px solid oklch(0 0 0 / 8%)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
                >
                  {exp.company}
                </p>
                <h4
                  className="font-semibold mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.1rem",
                    color: "oklch(0.15 0.008 60)",
                  }}
                >
                  {exp.title}
                </h4>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.45 0.008 60)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {exp.location}
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs whitespace-nowrap mt-1"
                style={{
                  background: "oklch(0.95 0.003 60)",
                  border: "1px solid oklch(0 0 0 / 10%)",
                  color: "oklch(0.5 0.008 60)",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {exp.period}
              </span>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-1.5">
              {exp.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: "oklch(0.72 0.18 45)" }}
                  />
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.4 0.008 60)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
