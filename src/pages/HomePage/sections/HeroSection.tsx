import { Button } from "../../../components/ui/button";
import { BackgroundImage } from "../../../components/BackgroundImage";
import { IconCircleCaretRight, IconDeviceTvOld } from "@tabler/icons-react";
import Slider from "../components/hero-slider";

export function HeroSection() {
  return (
    <div
      className="relative min-h-[calc(74vh-7.8px)] w-full flex flex-col items-center justify-center text-white text-center pb-20 pt-40"
      style={{
        borderBottom: "0.5px solid",
        borderImageSource:
          "linear-gradient(92.29deg, #F5F5F5 1.41%, #FCFCFC 97.3%)",
        borderImageSlice: 1,
      }}
    >
      <BackgroundImage imagePath="/backgrounds/hero1.jpg" />

      <div className="max-w-3xl mx-auto px-4 z-10 flex flex-col gap-5">
        <p className="text-secondary-500 text-heading-4 leading-[140%] tracking-[0%] font-medium">
          Maximize Your TV Ad Investment
        </p>

        <h1 className="text-heading-1 leading-[140%] tracking-[0%] font-medium">
          TV Media Buying That
          <br />
          Drives Results
        </h1>

        <p className="text-body-1 leading-[140%] tracking-[0%] font-normal">
          Achieve unmatched reach and ROI with strategic TV media buying that
          puts your brand in front of the right audience.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="icon"
            icon={<IconCircleCaretRight stroke={1.5} size={26.5} />}
            className="px-[19px]"
          >
            Streaming TV Ads
          </Button>

          <Button
            variant="icon-ghost"
            icon={<IconDeviceTvOld stroke={1.5} size={26.5} />}
            className="px-[19px]"
          >
            Traditional TV Ads
          </Button>
        </div>
      </div>

      <Slider className="absolute -bottom-[33.5px] left-1/2 -translate-x-1/2 w-[890px]" />
    </div>
  );
}
