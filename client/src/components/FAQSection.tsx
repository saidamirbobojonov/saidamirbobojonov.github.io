import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "What types of backend projects do you take on?",
    a: "I specialize in Python-based backend systems — Django REST APIs, FastAPI microservices, PostgreSQL database design, Kafka-based messaging, and Kubernetes deployments. I'm comfortable with greenfield builds and scaling existing systems.",
  },
  {
    q: "Are you available for full-time roles?",
    a: "Yes — I'm actively looking for full-time backend engineering roles in the U.S. I'm based in Brooklyn, NY, authorized to work in the U.S., and available to start immediately.",
  },
  {
    q: "Can you work remotely or on-site?",
    a: "I'm flexible — remote, hybrid, or on-site anywhere in the New York metro area. I've worked with distributed teams across multiple time zones.",
  },
  {
    q: "What's your approach to system design?",
    a: "I prioritize clear service boundaries, idempotent APIs, and schema-first database design. I document architectural decisions and keep services independently deployable. I lean on proven patterns rather than premature abstraction.",
  },
  {
    q: "How do I get in touch?",
    a: "Fill out the contact form below or email me directly at saidamirbobojonov@icloud.com. I reply within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView(0.1);

  return (
    <section id="faqs" ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.72 0.18 45)" }} />
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Space Mono', monospace" }}
        >
          FAQs
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold mb-8"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
        }}
      >
        Common Questions
      </motion.h2>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl overflow-hidden"
            style={{
              background: openIndex === i ? "oklch(0.88 0.003 60)" : "oklch(0.95 0.003 60)",
              border: `1px solid ${openIndex === i ? "oklch(0.72 0.18 45 / 40%)" : "oklch(0 0 0 / 10%)"}`,
              transition: "all 0.2s",
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span
                className="font-medium text-sm pr-4"
                style={{ color: "oklch(0.15 0.008 60)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {faq.q}
              </span>
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                style={{
                  background: openIndex === i ? "oklch(0.72 0.18 45)" : "oklch(0.92 0.003 60)",
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === i ? "oklch(1 0 0)" : "oklch(0.4 0.008 60)"}
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p
                    className="px-5 pb-4 text-sm"
                    style={{
                      color: "oklch(0.35 0.008 60)",
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
