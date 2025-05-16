import Slider from "../components/hero-slider";
import { BackgroundImage } from "../../../../components/BackgroundImage";
import { Button } from "../../../../components/ui/button";

export function HeroSection() {
  return (
    <div
      className="relative md:h-screen w-full flex flex-col gap-[60px] md:gap-[120px] items-start justify-center text-white text-center pt-[218.8px] sm:pt-[257px] pb-[108px] px-[40px] md:px-[50px] lg:px-[160px]"
      style={{
        borderBottom: "0.5px solid",
        borderImageSource:
          "linear-gradient(92.29deg, #F5F5F5 1.41%, #FCFCFC 97.3%)",
        borderImageSlice: 1,
      }}
    >
      <BackgroundImage
        imagePath="/backgrounds/stream-bg.png"
        className="mt-[111.2px] md:mt-[149px] w-full h-full"
      />

      <div className=" px-4 z-10 flex flex-col items-start gap-5">
        <h1 className="text-heading-2 sm:text-heading-1 leading-[140%] tracking-[0%] font-medium text-start">
          Streaming TV
          <br />
          Advertising
        </h1>

        <p className="text-body-[16px] sm:text-body-lg leading-[140%] tracking-[0%] font-normal text-start">
          Maximize your brand reach with targeted Ads <br /> on Streaming
          platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" className="h-[48px] w-[140px] text-[16px]">
            Get Started
          </Button>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Slider className="w-[90%] sm:w-[100%] md:w-[100%] lg:w-[66%]" />
      </div>
    </div>
  );
}
