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
          src="/logo/renewal.svg"
          alt="Renewal"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="/logo/neatly.svg"
          alt="Neatly"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="/logo/kitchen.svg"
          alt="Kitchen"
          className="opacity-70 hover:opacity-100 transition-opacity mx-4"
        />
      ),
    },
    {
      id: 4,
      content: (
        <img
          src="/logo/florida.svg"
          alt="Florida"
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
        <p className="text-heading-6 hidden sm:block font-medium text-black leading-[140%] text-left border-r border-[#06060680] pr-4">
          Trusted by Leading Brands:
        </p>
        <div className="w-full max-w-5xl overflow-hidden relative">
          <InfiniteMovingCards
            items={logoItems}
            speed={80}
            direction="left"
            pauseOnHover={true}
            className="py-[7.15px]"
          />
          <div
            className="absolute inset-y-0 left-0 w-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>
          <div
            className="absolute inset-y-0 right-0 w-32 pointer-events-none rounded-r-full"
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
