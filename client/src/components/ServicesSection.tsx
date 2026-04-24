/**
 * ServicesSection — Technical services and expertise areas
 * Design: Dark Organic Warmth — accordion-style service items
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    number: "(01)",
    title: "Backend Development",
    items: ["Django & DRF", "FastAPI & Node.js", "Microservices Architecture", "API Design & REST"],
  },
  {
    number: "(02)",
    title: "Database Design",
    items: ["PostgreSQL & MySQL", "Schema Optimization", "Query Performance", "Data Pipelines"],
  },
  {
    number: "(03)",
    title: "DevOps & Infrastructure",
    items: ["Docker & Kubernetes", "CI/CD Pipelines", "Cloud Deployment", "Nginx & Gunicorn"],
  },
  {
    number: "(04)",
    title: "Machine Learning",
    items: ["scikit-learn Models", "Data Processing", "Defect Detection", "Model Training"],
  },
];

function ServiceItem({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open ? "oklch(0.16 0.007 60)" : "transparent",
        border: `1px solid ${open ? "oklch(0.72 0.18 45 / 20%)" : "oklch(1 0 0 / 8%)"}`,
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.1 0.005 60)" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          )}
          <div>
            <span
              className="text-xs block mb-0.5"
              style={{ color: "oklch(0.45 0.008 60)", fontFamily: "'Space Mono', monospace" }}
            >
              {service.number}
            </span>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                color: open ? "oklch(0.96 0.008 60)" : "oklch(0.5 0.008 60)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                transition: "color 0.3s",
              }}
            >
              {service.title}
            </h3>
          </div>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
          style={{
            background: open ? "oklch(0.72 0.18 45)" : "oklch(0.2 0.006 60)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? "oklch(0.1 0.005 60)" : "oklch(0.55 0.01 60)"} strokeWidth="2.5">
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
            <div className="px-5 pb-5 flex flex-col gap-2">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                  style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.72 0.18 45)" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="services" ref={ref} className="py-12">
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
          style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Space Mono', monospace" }}
        >
          My Services
        </span>
      </motion.div>

      <div className="flex flex-col gap-3 mb-8">
        {services.map((service, i) => (
          <ServiceItem key={service.title} service={service} index={i} inView={inView} />
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-between px-5 py-4 rounded-2xl"
        style={{
          background: "oklch(0.14 0.006 60)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(0.72 0.18 45)" }}
          />
          <span
            className="text-sm"
            style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Available for <strong style={{ color: "oklch(0.94 0.008 60)" }}>Remote & Freelance</strong>
          </span>
        </div>
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: "oklch(0.2 0.006 60)",
            border: "1px solid oklch(1 0 0 / 8%)",
            color: "oklch(0.94 0.008 60)",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.18 45)";
            (e.currentTarget as HTMLElement).style.color = "oklch(0.1 0.005 60)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "oklch(0.2 0.006 60)";
            (e.currentTarget as HTMLElement).style.color = "oklch(0.94 0.008 60)";
          }}
        >
          Contact me
          <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}
