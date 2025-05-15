import { Button } from "../../../components/ui/button";
import { BackgroundImage } from "../../../components/BackgroundImage";
import { IconCircleCaretRight, IconDeviceTvOld } from "@tabler/icons-react";
import Slider from "../components/hero-slider";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="relative min-h-[calc(65vh)] sm:min-h-[calc(74vh-7.8px)] w-full flex flex-col items-center justify-center text-white text-center pb-20 pt-40"
      style={
        isLargeScreen
          ? {
              borderBottom: "0.5px solid",
              borderImageSource:
                "linear-gradient(92.29deg, #F5F5F5 1.41%, #FCFCFC 97.3%)",
              borderImageSlice: 1,
            }
          : {}
      }
    >
      <BackgroundImage imagePath="/backgrounds/hero1.jpg" />

      <div className="max-w-3xl mx-auto px-4 z-10 flex flex-col gap-5">
        <p className="text-secondary-500 text-heading-4 leading-[140%] tracking-[0%] font-medium">
          Maximize Your TV Ad Investment
        </p>

        <h1 className="text-heading-2 sm:text-heading-1 leading-[140%] tracking-[0%] font-medium">
          TV Media Buying That
          <br />
          Drives Results
        </h1>

        <p className="text-body-[16px] sm:text-body-lg leading-[140%] tracking-[0%] font-normal">
          Achieve unmatched reach and ROI with strategic TV media buying that
          puts your brand in front of the right audience.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="icon"
            icon={
              <IconCircleCaretRight
                stroke={1.5}
                className="w-[18px] h-[18px] sm:w-[26.5px] sm:h-[26.5px]"
              />
            }
          >
            Streaming TV Ads
          </Button>

          <Button
            variant="icon-ghost"
            icon={
              <IconDeviceTvOld
                stroke={1.5}
                className="w-[18px] h-[18px] sm:w-[26.5px] sm:h-[26.5px]"
              />
            }
          >
            Traditional TV Ads
          </Button>
        </div>
      </div>

      <Slider className="absolute bottom-0 sm:-bottom-[33.5px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[67%]" />
    </div>
  );
}
