/**
 * PricingSection — Two pricing plan cards + FAQ
 * Design: Dark Organic Warmth — card-based pricing with amber highlight
 */
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const plans = [
  {
    name: "Standard Plan",
    price: "$1,500",
    period: "/month",
    desc: "Perfect for individuals and small projects",
    features: [
      "Up to 3 design projects",
      "Brand identity design",
      "UI/UX design",
      "2 revision rounds",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Premium Plan",
    price: "$3,500",
    period: "/month",
    desc: "For growing teams and complex projects",
    features: [
      "Unlimited design projects",
      "Full brand identity",
      "UI/UX + Webflow development",
      "Unlimited revisions",
      "Priority support",
      "Monthly strategy call",
    ],
    cta: "Get Started",
    featured: true,
  },
];

export default function PricingSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="pricing" ref={ref} className="py-12">
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
          Pricing
        </span>
      </motion.div>

      <div className="flex flex-col gap-4 mb-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl p-6"
            style={{
              background: plan.featured ? "oklch(0.16 0.008 45)" : "oklch(0.14 0.006 60)",
              border: `1px solid ${plan.featured ? "oklch(0.72 0.18 45 / 30%)" : "oklch(1 0 0 / 8%)"}`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Space Mono', monospace" }}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      color: "oklch(0.96 0.008 60)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>
              {plan.featured && (
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "oklch(0.72 0.18 45)",
                    color: "oklch(0.1 0.005 60)",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  Popular
                </span>
              )}
            </div>

            <p
              className="text-sm mb-5"
              style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {plan.desc}
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: plan.featured ? "oklch(0.72 0.18 45)" : "oklch(0.22 0.006 60)" }}
                  >
                    <Check size={10} style={{ color: plan.featured ? "oklch(0.1 0.005 60)" : "oklch(0.65 0.01 60)" }} />
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.75 0.008 60)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: plan.featured ? "oklch(0.72 0.18 45)" : "oklch(0.2 0.006 60)",
                border: `1px solid ${plan.featured ? "transparent" : "oklch(1 0 0 / 8%)"}`,
                color: plan.featured ? "oklch(0.1 0.005 60)" : "oklch(0.94 0.008 60)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {plan.cta}
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Custom quote */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center py-4"
      >
        <p
          className="text-sm mb-2"
          style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Do you have any other questions?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          style={{ color: "oklch(0.72 0.18 45)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ask me directly
          <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}
