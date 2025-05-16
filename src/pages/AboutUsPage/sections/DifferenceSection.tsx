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
        className={`absolute inset-0 rounded-[10px] transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-0"
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
      title: "$500M+",
      subtitle: "in Transactions",
      description:
        "Over four decades of hands-on experience in TV, radio, and streaming media buying. We've helped brands secure top-tier placements at unmatched rates.",
    },
    {
      title: "70+",
      subtitle: "Media Partners",
      description:
        "Exclusive relationships with premium networks and platforms across television, streaming, and radio to deliver maximum impact for your advertising budget.",
    },
    {
      title: "63%",
      subtitle: "Lower CPM",
      description:
        "Our strategic buying approach consistently delivers costs well below industry averages, maximizing your ROI while maintaining premium placement quality.",
    },
    {
      title: "100%",
      subtitle: "Transparency",
      description:
        "Complete visibility into your campaign performance with detailed analytics and reporting that show exactly how your media dollars are working for you.",
    },
    {
      title: "Smart",
      subtitle: "Audience Targeting",
      description:
        "Proprietary data analysis that identifies optimal viewer segments and programming matchups to ensure your message reaches the right audience at the right time.",
    },
    {
      title: "Real-Time",
      subtitle: "Campaign Optimization",
      description:
        "Continuous monitoring and adjustment of your media strategy based on performance insights, ensuring maximum effectiveness throughout your campaign lifecycle.",
    },
  ];

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
