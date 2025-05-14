import { SolutionsSection } from "./sections/SolutionsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { DifferenceSection } from "./sections/DifferenceSection";

export function Services() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[#060606] z-[-2]"></div>
      <SolutionsSection />
      <ExperienceSection />
      <DifferenceSection />
    </div>
  );
}
