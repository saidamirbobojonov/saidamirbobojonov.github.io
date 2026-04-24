import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { toast } from "sonner";

// Get your free access key at https://web3forms.com — enter your email and paste the key here
const WEB3FORMS_ACCESS_KEY = "d1fe9ea1-762a-412e-9947-35249c2afc4d";

export default function ContactSection() {
  const { ref, inView } = useInView(0.1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${name || email} — Portfolio`,
          from_name: name || email,
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message received! I'll get back to you within 24 hours.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    background: "oklch(1 0 0)",
    border: "1px solid oklch(0 0 0 / 10%)",
    color: "oklch(0.15 0.008 60)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" ref={ref} className="py-12 pb-20">
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
          Contact
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bold mb-2"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "oklch(0.15 0.008 60)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        Let's Work Together
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-8"
        style={{
          color: "oklch(0.4 0.008 60)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
        }}
      >
        Got a project in mind? Let's discuss how I can help build your next backend system.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <div>
          <label
            className="block text-xs mb-1.5"
            style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Space Mono', monospace" }}
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.18 45 / 50%)")}
            onBlur={(e) => (e.target.style.borderColor = "oklch(0 0 0 / 10%)")}
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-xs mb-1.5"
            style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Space Mono', monospace" }}
          >
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.18 45 / 50%)")}
            onBlur={(e) => (e.target.style.borderColor = "oklch(0 0 0 / 10%)")}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            className="block text-xs mb-1.5"
            style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
          >
            Your Phone
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.18 45 / 50%)")}
            onBlur={(e) => (e.target.style.borderColor = "oklch(0 0 0 / 10%)")}
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-xs mb-1.5"
            style={{ color: "oklch(0.5 0.008 60)", fontFamily: "'Space Mono', monospace" }}
          >
            Message
          </label>
          <textarea
            placeholder="Tell me about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl resize-none"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.18 45 / 50%)")}
            onBlur={(e) => (e.target.style.borderColor = "oklch(0 0 0 / 10%)")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-between w-full px-5 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            background: "oklch(0.72 0.18 45)",
            color: "oklch(1 0 0)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
          }}
        >
          <span>{isSubmitting ? "Sending..." : "Get Started"}</span>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "oklch(1 0 0 / 20%)" }}
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={16} />}
          </div>
        </button>
      </motion.form>

    </section>
  );
}
