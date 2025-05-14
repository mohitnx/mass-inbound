import { ExperienceSection } from "./sections/ExperienceSection";
import { DifferenceSection } from "./sections/DifferenceSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import { ResultsSection } from "./sections/ResultsSection";
import { CtaSection } from "./sections/CtaSection";
import { AboutUsSection } from "./sections/AboutUsSection";

export function AboutUs() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[#060606] z-[-2]"></div>
      <AboutUsSection />
      <TestimonialSection />
      <ExperienceSection />
      <DifferenceSection />
      <ResultsSection />
      <CtaSection />
    </div>
  );
}
