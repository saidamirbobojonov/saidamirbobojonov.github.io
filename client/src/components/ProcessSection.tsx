/**
 * ProcessSection — Work process steps
 * Design: Dark Organic Warmth — numbered steps with editorial headings
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    step: "Step 1",
    title: "Review The Brief",
    desc: "I created digital products with ideas use Figma",
  },
  {
    step: "Step 2",
    title: "Sketch the Wireframe",
    desc: "I created digital products with ideas use Figma",
  },
  {
    step: "Step 3",
    title: "Design Progress",
    desc: "I created digital products with ideas use Figma",
  },
  {
    step: "Step 4",
    title: "Product Examination",
    desc: "I created digital products with ideas use Figma",
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="process" ref={ref} className="py-12">
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
          My Process
        </span>
      </motion.div>

      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-5 py-6"
            style={{ borderBottom: "1px solid oklch(1 0 0 / 6%)" }}
          >
            {/* Step number */}
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: i === 0 ? "oklch(0.72 0.18 45)" : "oklch(0.18 0.006 60)",
                  border: `1px solid ${i === 0 ? "transparent" : "oklch(1 0 0 / 8%)"}`,
                  color: i === 0 ? "oklch(0.1 0.005 60)" : "oklch(0.45 0.008 60)",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-px flex-1 mt-2"
                  style={{ background: "oklch(1 0 0 / 6%)", minHeight: "24px" }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p
                className="text-xs mb-1"
                style={{ color: "oklch(0.45 0.008 60)", fontFamily: "'Space Mono', monospace" }}
              >
                {step.step}
              </p>
              <h3
                className="font-bold mb-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  color: "oklch(0.94 0.008 60)",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
