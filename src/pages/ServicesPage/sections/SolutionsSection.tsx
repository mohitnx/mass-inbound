import { IconDeviceTvOld, IconPlayerPlay } from "@tabler/icons-react";
import { BackgroundImage } from "../../../components/BackgroundImage";
import {
  ExpandingCard,
  ExpandingCardContainer,
} from "../../../components/ui/ExpandingCard";

export function SolutionsSection() {
  return (
    <div className="relative min-h-[calc(74vh-7.8px)] w-full flex flex-col items-center justify-center text-white text-center pb-20 pt-40">
      <BackgroundImage
        imagePath="/backgrounds/solution/bg-solution.png"
        className="bg-[#060606]"
      />
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="text-center mb-16 max-w-[683px] mx-auto">
          <h2 className="text-heading-1 font-medium text-white leading-[100%] tracking-[0%] mb-[17px]">
            Our TV Advertising Solutions
          </h2>
          <p className="text-body-lg leading-[140%] tracking-[0%] font-[400] text-[#AEAEAE]">
            We provide TV advertising solutions to connect you with your
            audience through both traditional and streaming platforms.
          </p>
        </div>

        <ExpandingCardContainer className="max-w-[1080px]">
          {/* Streaming TV Advertising Card */}
          <ExpandingCard
            icon={<IconPlayerPlay />}
            title="Streaming TV Advertising"
            description="Connect with engaged audiences through premium streaming channels, delivering your message directly to modern viewers."
            backgroundImage="/backgrounds/solution/bg-1.png"
            onLearnMoreClick={() =>
              console.log("Learn more about Streaming TV")
            }
          />

          {/* Traditional TV Advertising Card */}
          <ExpandingCard
            icon={<IconDeviceTvOld />}
            title="Traditional TV Advertising"
            description="Maximize brand exposure with strategic placements on popular TV networks, reaching households nationwide."
            backgroundImage="/backgrounds/solution/bg-2.png"
            onLearnMoreClick={() =>
              console.log("Learn more about Traditional TV")
            }
          />
        </ExpandingCardContainer>
      </div>
    </div>
  );
}
