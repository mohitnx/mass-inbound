import { BentoCard } from "../../../../components/ui/BentoCardBlue";

export function SolutionsSection() {
  const solutionCards = [
    {
      title: "Media Buying & Negotiation",
      description:
        "We have established relationships in over 70 markets, including all Florida markets, allowing us to secure the best market rates—guaranteed.",
      icon: "/icons/icon-chain.svg",
    },
    {
      title: "Media Strategy & Placement",
      description:
        "We Identify the best TV networks, programs, and time slots to develop a strategic media plan that maximizes your company’s reach and ROI.",
      icon: "/icons/icon-bars.svg",
    },
    {
      title: "Post Buy Analysis",
      description:
        "We collaborate with TV networks to ensure that stations fulfill the terms of our negotiated agreements, driving our partners to exceed the industry standard of 90% delivery.",
      icon: "/icons/icon-chart.svg",
    },
    {
      title: "Campaign Insights",
      description:
        "We provide in-depth analytics covering impressions, reach, frequency, customer location and demographics, click-through rate, and more!",
      icon: "/icons/icon-planning.svg",
    },
  ];

  return (
    <div className="w-full bg-[#060606] py-20 max-w-[1080px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-heading-3 sm:text-heading-1 font-medium text-white text-center leading-[140%] tracking-[0%] mb-4">
          Our Traditional TV Ads Solutions
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
