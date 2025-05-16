import { BackgroundImage } from "../../../components/BackgroundImage";
import { useState } from "react";

interface DifferenceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

function DifferenceCard({ title, subtitle, description }: DifferenceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#FFFFFF0D] backdrop-blur-[40px]
                border-[0.5px] border-[#FEFEFE] rounded-[10px] px-[8px] py-[16px] flex flex-col items-center text-center
                transition-all duration-500 ease-out hover:bg-[#FFFFFF15] 
                hover:shadow-[0_0_20px_rgba(246,129,4,0.2)] hover:scale-105 hover:-translate-y-1
                cursor-pointer relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-r from-[#F68104] to-[#FCD8B1] blur-xl"></div>

      <div
        className="bg-gradient-to-r from-[#F68104] to-[#FCD8B1] text-transparent bg-clip-text text-heading-3 font-medium mb-[2px]
                      transition-transform duration-500 group-hover:scale-110"
      >
        {title}
      </div>
      <div className="text-white text-heading-7 mb-[7px] transition-colors duration-300 group-hover:text-[#FCD8B1]">
        {subtitle}
      </div>
      <p className="text-[#DFDFDF] text-[12px] leading-[140%] tracking-[0%] transition-colors duration-500 group-hover:text-white">
        {description}
      </p>

      {/* Subtle pulsing border effect on hover */}
      <div
        className={`absolute inset-0 rounded-[10px] transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="absolute inset-0 border border-[#F68104] rounded-[10px] animate-pulse"></div>
      </div>
    </div>
  );
}

export function DifferenceSection() {
  const differenceData: DifferenceCardProps[] = [
    {
      "title": "$500M+",
      "subtitle": "in Transactions",
      "description": "Over four decades of hands-on experience in TV, radio, and streaming media buying. We've helped brands secure top-tier placements at unmatched rates."
    },
    {
      "title": "70+",
      "subtitle": "U.S Markets",
      "description": "We operate with direct-to-publisher relationships across traditional and streaming TV, ensuring reach without inflated layers."
    },
    {
      "title": "63%",
      "subtitle": "Lower CPA",
      "description": "Clients see dramatically lower cost-per-acquisition by leveraging our optimized inventory strategies."
    },
    {
      "title": "100%",
      "subtitle": "Transparent Spending",
      "description": "Unlike agencies with 3–5 layers of hidden markups, we buy directly from the auction and pass savings straight to clients."
    },
    {
      "title": "Smart",
      "subtitle": "Audience Targeting",
      "description": "We reach the right viewer with ads based on income, location, interests, and more delivered un-skippable through top DSPs."
    },
    {
      "title": "Real-Time",
      "subtitle": "Strategy Adjustments",
      "description": "We track, analyze, and pivot campaigns based on data not guesswork. From reach to ROAS, every dollar works harder."
    }
  ]
    ;

  return (
    <div className="w-full py-20 relative ">
      {/* Background stars effect */}
      <BackgroundImage imagePath="/backgrounds/star.png" />

      <div className="max-w-[800px] mx-auto px-4 relative z-10">
        <div className="text-center mb-[28px]">
          <h2 className="text-heading-3 sm:text-heading-1 font-medium leading-[140%] tracking-[0%] text-white mb-2">
            What Makes us Different
          </h2>
          <p className="text-[14px] sm:text-[16px] max-w-[70%] mx-auto sm:max-w-[100%] leading-[140%] tracking-[0%] font-[400] text-[#DFDFDF]">
            A Proven, Data-Backed Approach to Media Buying That Delivers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto mt-6">
          {differenceData.map((card, index) => (
            <DifferenceCard
              key={index + 3}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
