import { Link } from "react-router-dom";
import { BackgroundImage } from "../../../../components/BackgroundImage";
import { Button } from "../../../../components/ui/button";

export function CtaSection() {
  return (
    <div className="w-full py-16 relative">
      <BackgroundImage imagePath={"/backgrounds/cta-bg.png"} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-heading-3 sm:text-heading-2 font-medium text-white mb-5 leading-[140%] tracking-[0px]">
            READY TO GROW YOUR BUSINESS?
          </h2>

          <p className="text-[#AEAEAE] text-[14px] sm:text-body-lg leading-[140%] tracking-[0px] mb-[40px] max-w-[70%] mx-auto">
            Get in Touch With a TV Media Buying Expert Today.
          </p>

          <div className="items-center gap-4 mt-3 md:mt-0 flex justify-center">
            <Link to="/contact" className="">
              <Button variant="default" className="p-[20px_20px]">
                Get Started
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <img src="/icons/call.svg" alt="Call Us" />
              <div className="flex flex-col text-left gap-0">
                <span className="text-primary-200 leading-[140%] tracking-[0%]">
                  Call Us
                </span>
                <span className="text-[16px] leading-[140%] tracking-[0%] text-white">
                  <a href="tel:9415868512" className="hover:text-blue-300">(941) 586-8512</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
