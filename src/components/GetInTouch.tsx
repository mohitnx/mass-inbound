import { BackgroundImage } from "./BackgroundImage"
import { Button } from "./ui/button"

const GetInTouch = () => {
  return (
    <div className="relative w-full flex flex-col items-center bg-black justify-center text-white text-center py-20 min-h-[331px] backdrop-blur-xl">
      <BackgroundImage imagePath={"/backgrounds/cta-bg.png"} />

      <div className="container mx-auto px-8 md:px-4 md:max-w-6xl">
        <div className="text-center space-y-8">
          <p className="text-[38px]">READY TO GROW YOUR BUSINESS?</p>
          <p className="text-[20px] text-[#AEAEAE]">Get in touch with a TV Media Buying Expert Today.</p>

          <div className="flex justify-center items-center gap-4 md:gap-10">
            <Button>Get in touch</Button>
            <div className="flex items-center gap-2">
              <img src="/icons/call.svg" alt="Call Us" />
              <div className="flex flex-col text-left gap-0">
                <span className=" text-primary-200 leading-[140%] tracking-[0%]">
                  Call Us
                </span>
                <span className="text-[16px] leading-[140%] tracking-[0%]">
                  (941) 586-8512
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch