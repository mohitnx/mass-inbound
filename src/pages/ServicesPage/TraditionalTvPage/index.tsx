import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { CtaSection } from "./sections/CtaSection";
import { SolutionsSection } from "./sections/SolutionsSection";

export function TraditionalTv() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[#060606] z-[-2]"></div>
      <HeroSection />
      <div className="px-[20px] md:px-[80px] lg:px-[178px] h-full flex flex-col gap-7 justify-center items-start py-[40px] border-b border-[#FFFFFF]">
        <h2 className="text-heading-4 sm:text-heading-3 leading-[140%] tracking-[0%] font-medium text-start text-white">
          What is Traditional TV Advertising?
        </h2>
        <p className="text-[18px] md:text-body-lg leading-[140%] tracking-[0%] font-normal text-start text-white">
          Traditional TV advertising involves delivering ads through broadcast
          or cable TV channels, reaching a broad and diverse audience. It
          utilizes fixed time slots within popular programs or events, offering
          consistent exposure to large groups of viewers.
        </p>
      </div>
      <SolutionsSection />
      <ExperienceSection />
      <CtaSection />
    </div>
  );
}
