import { BentoCard } from "../../../../components/ui/BentoCardBlue";

export function SolutionsSection() {
  const solutionCards = [
    {
      title: "Connected TV/OTT Ad Placement",
      description:
        "Highly targeted streaming ads with selected behavioral attributes airing on premium programming for maximum audience engagement.",
      icon: "/icons/icon-chain.svg",
    },
    {
      title: "Digital Display & Retargeting",
      description:
        "For individuals that view your website, we will retarget advertisements to these individuals via digital display ads or streaming content.",
      icon: "/icons/icon-target.svg",
    },
    {
      title: "Dynamic Strategy Adjustments",
      description:
        "We use tracking pixels to monitor all attributable activity generated by our campaign and provide immediate option to adjust and pivot campaigns, targets or creative as needed based on results.",
      icon: "/icons/icon-bars.svg",
    },
    {
      title: "Campaign Insights",
      description:
        "We provide in-depth analytics covering impressions, reach, frequency, customer location and demographics, click-through rate, and more!",
      icon: "/icons/icon-chart.svg",
    },
  ];

  return (
    <div className="w-full bg-[#060606] py-20 max-w-[1080px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-heading-3 sm:text-heading-1 font-medium text-white text-center leading-[140%] tracking-[0%] mb-4">
          Our Streaming TV Ads Solutions
        </h2>
        <p className="text-[18px] md:text-body-lg leading-[140%] tracking-[0%] font-normal text-center text-white mb-10 max-w-[90%] sm:max-w-[100%] mx-auto">
          Tailored Media Solutions to Maximize Your Brand Impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionCards.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
