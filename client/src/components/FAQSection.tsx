/**
 * FAQSection — Frequently asked questions accordion
 * Design: Dark Organic Warmth — clean accordion with amber accents
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "What types of projects do you work on?",
    a: "I specialize in brand identity, UI/UX design, Webflow development, and Framer prototyping. From startups to established companies, I help create compelling digital experiences.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A brand identity project typically takes 2-3 weeks, while a full website design and development can take 4-8 weeks.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely! I work with clients worldwide. Communication is handled via email, Slack, and video calls, making remote collaboration seamless.",
  },
  {
    q: "What is your revision policy?",
    a: "Standard plans include 2 revision rounds, while Premium plans offer unlimited revisions. I want to ensure you're completely satisfied with the final result.",
  },
  {
    q: "How do we get started?",
    a: "Simply fill out the contact form below or book a call. I'll review your brief and get back to you within 24 hours with a proposal.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView(0.1);

  return (
    <section id="faqs" ref={ref} className="py-12">
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
        Frequently Asked Questions
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
                style={{
                  color: "oklch(0.15 0.008 60)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
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
                      lineHeight: 1.6,
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
