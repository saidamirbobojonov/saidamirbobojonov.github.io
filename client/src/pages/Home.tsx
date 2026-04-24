/**
 * Home — Main portfolio page
 * Design: Dark Organic Warmth
 * Layout: Fixed left sidebar (ProfileCard) + scrollable right content
 */
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SelectedWorks from "@/components/SelectedWorks";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.98 0.001 60)" }}
    >
      {/* Background ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 60%, oklch(0.72 0.18 45 / 2%) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, oklch(0.6 0.15 30 / 1%) 0%, transparent 60%)",
        }}
      />

      <Navbar />

      {/* Main layout */}
      <div className="flex min-h-screen">
        {/* Left sidebar — fixed profile card */}
        <aside
          className="hidden lg:flex flex-col"
          style={{
            width: "300px",
            minWidth: "300px",
            position: "sticky",
            top: 0,
            height: "100vh",
            padding: "1.5rem 1rem 1.5rem 1.5rem",
            overflowY: "auto",
          }}
        >
          <ProfileCard />
        </aside>

        {/* Right content — scrollable */}
        <main
          className="flex-1 min-w-0"
          style={{ padding: "1.5rem 2.5rem 1.5rem 1.5rem", maxWidth: "820px" }}
        >
          {/* Mobile profile card */}
          <div className="lg:hidden mb-6">
            <ProfileCard />
          </div>

          <HeroSection />
          <hr className="section-divider" />
          <SkillsSection />
          <hr className="section-divider" />
          <ExperienceSection />
          <hr className="section-divider" />
          <SelectedWorks />
          <hr className="section-divider" />
          <AboutSection />
          <hr className="section-divider" />
          <FAQSection />
          <hr className="section-divider" />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
