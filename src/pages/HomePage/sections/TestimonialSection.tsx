import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react";
import { Button } from "../../../components/ui/button";
import { useState, useRef } from "react";
import Slider from "../components/testmonial-slider";

export function TestimonialSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full py-20">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Video Column */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="aspect-[5/3] w-full overflow-visible relative">
              <video
                ref={videoRef}
                src="/video/testimonial.mp4"
                className="w-full h-full object-cover rounded-[10px]"
                poster="/images/video-template.png"
                loop
                playsInline
              />
              <div className="absolute -bottom-[23px] left-0 right-0 flex justify-center gap-4 border border-[#0061EF] p-[7.5px_30px] rounded-[10px] bg-[#060606] max-w-[159px] mx-auto">
                <button
                  onClick={togglePlay}
                  className="w-[30px] h-[30px] bg-gradient-to-r from-[#002964] to-[#0061EF] border-0 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
                >
                  {isPlaying ? (
                    <IconPlayerPauseFilled className="w-[18px] h-[18px]" />
                  ) : (
                    <IconPlayerPlayFilled className="w-[18px] h-[18px]" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-[30px] h-[30px] bg-gradient-to-r from-[#002964] to-[#0061EF] border-0 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
                >
                  {isMuted ? (
                    <IconVolumeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <IconVolume className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quote Column */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-heading-4 text-white font-medium leading-[140%] tracking-[0px] mb-2">
              "I'm a fierce negotiator who treats my clients' money like my
              own."
            </div>

            <p className="text-[#AEAEAE] text-[16px] leading-[140%] tracking-[0px] mb-4">
              With decades of experience in television media buying, I bring a
              unique market-based approach to every client relationship. I
              understand the TV landscape inside and out, having personally
              managed over $500M in successful TV ad campaigns over my career.
            </p>

            <p className="text-[#AEAEAE] text-[16px] leading-[140%] tracking-[0px] mb-2">
              My team knows how to get unprecedented access that outperforms its
              spend potential for placements, ensuring your message reaches the
              right audience at the right time.
            </p>

            <p className="text-secondary-500 font-medium text-[16px] leading-[140%] tracking-[0px] mb-2">
              Ready to get started? Let’s connect
            </p>

            <Button className="w-fit">Get Started</Button>
          </div>
        </div>

        <Slider className="max-w-[900px] mx-auto mt-10" />
      </div>
    </div>
  );
}
