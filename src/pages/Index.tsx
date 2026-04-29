import { Navbar, HeroSection } from "@/components/sections/Hero";
import { AdvantagesSection, CalculatorSection } from "@/components/sections/AdvantagesCalculator";
import { ProcessSection, FaqSection } from "@/components/sections/ProcessFaq";
import { CtaSection, Footer } from "@/components/sections/CtaFooter";

export default function Index() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <CalculatorSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}