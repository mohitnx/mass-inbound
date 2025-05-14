import { HeroSection } from "./sections/HeroSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { DifferenceSection } from "./sections/DifferenceSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import { ResultsSection } from "./sections/ResultsSection";
import { CtaSection } from "./sections/CtaSection";

export function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[#060606] z-[-2]"></div>
      <HeroSection />
      <SolutionsSection />
      <ExperienceSection />
      <DifferenceSection />
      <TestimonialSection />
      <ResultsSection />
      <CtaSection />
    </div>
  );
}
