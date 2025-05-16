import { InfiniteMovingCards } from "../../../components/ui/InfiniteMovingCards";
import type { Item } from "../../../components/ui/InfiniteMovingCards";

interface SliderProps {
  className?: string;
}

const Slider = ({ className = "" }: SliderProps) => {
  const logoItems: Item[] = [
    {
      id: 1,
      content: (
        <img
          src="/logo/netflix.svg"
          alt="Netflix"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="/logo/cnn.svg"
          alt="CNN"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="/logo/hbo.svg"
          alt="HBO"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 4,
      content: (
        <img
          src="/logo/youtube.svg"
          alt="YouTube TV"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 5,
      content: (
        <img
          src="/logo/disnep.svg"
          alt="Disney+"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 6,
      content: (
        <img
          src="/logo/prime.svg"
          alt="Amazon Prime"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 7,
      content: (
        <img
          src="/logo/hulu.svg"
          alt="Hulu"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 8,
      content: (
        <img
          src="/logo/discovery.svg"
          alt="Discovery"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 9,
      content: (
        <img
          src="/logo/fubo.svg"
          alt="Fubo"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 10,
      content: (
        <img
          src="/logo/pluto.svg"
          alt="Pluto"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 11,
      content: (
        <img
          src="/logo/tubi.svg"
          alt="Tubi"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 12,
      content: (
        <img
          src="/logo/showtime.svg"
          alt="Showtime"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
  ];

  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center justify-center z-10 rounded-full pl-4`}
        style={{
          border: "1.5px solid rgba(255, 255, 255, 0.70)",
          background:
            "linear-gradient(90deg, #FFF 23.08%, rgba(255, 255, 255, 0.50) 100%)",
          boxShadow: "0px 6px 10px 2px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(20px)",
        }}
      >
        <p className="text-[14px] hidden sm:block sm:text-heading-6 font-medium text-black leading-[140%] text-left border-r border-[#06060680] pr-4">
          Advertise on Top TV Networks
        </p>
        <div className="w-full max-w-5xl overflow-hidden relative">
          <InfiniteMovingCards
            items={logoItems}
            direction="left"
            pauseOnHover={true}
          />
          <div
            className="absolute inset-y-0 left-0 w-32 pointer-events-none hidden sm:block"
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>
          <div
            className="absolute inset-y-0 right-0 w-32 pointer-events-none rounded-r-full hidden sm:block"
            style={{
              background:
                "linear-gradient(-90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
