import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { CtaSection } from "./sections/CtaSection";
import { SolutionsSection } from "./sections/SolutionsSection";

export function StreamingTv() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[#060606] z-[-2]"></div>
      <HeroSection />
      <div className="px-[20px] md:px-[80px] lg:px-[178px] h-full flex flex-col gap-7 justify-center items-start py-[40px] border-b border-[#FFFFFF] bg-background-900">
        <h2 className="text-heading-4 sm:text-heading-3 leading-[140%] tracking-[0%] font-medium text-start text-white">
          What is Streaming TV Advertising?
        </h2>
        <p className="text-[18px] md:text-body-lg leading-[140%] tracking-[0%] font-normal text-start text-white">
          Streaming TV advertising involves delivering ads to viewers who are
          watching content on the digital platforms like Hulu, Roku, and others.
          This modern approach for precise targeting and real-time analytics,
          setting it apart from traditional TV advertising
        </p>
      </div>
      <SolutionsSection />
      <ExperienceSection />
      <CtaSection />
    </div>
  );
}
