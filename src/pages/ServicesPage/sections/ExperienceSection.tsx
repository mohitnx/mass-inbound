import { BentoCard } from "../../../components/ui/BentoCard";

export function ExperienceSection() {
  return (
    <div className="w-full bg-[#060606] py-20 max-w-[1080px] mx-auto">
      <div className="container mx-auto px-4">
        <p className="text-secondary-500 text-center text-heading-6 leading-[140%] tracking-[0%]">
          Why Choose Us
        </p>
        <h2 className="text-heading-3 sm:text-heading-1 max-w-[70%] mx-auto sm:max-w-[100%] font-medium text-white text-center leading-[140%] tracking-[0%] mb-10">
          Experience You Can Rely On
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-4 flex-1">
            {/* Tall Card (2/3) - Premium Audience Reach */}
            <BentoCard
              title="Premium Audience Reach"
              description="Access to 70+ markets and top streaming platforms, targeting your ideal customers through data-driven ad placements."
              imageSrc="/images/woman-watching-tv.jpg"
              imagePosition="top"
              imageClassName="h-[400px] sm:h-[460px]"
              className="grow-[2] flex-1"
            />

            {/* Small Card (1/3) - Direct Access to Media */}
            <BentoCard
              title="Direct Access to Media"
              description="We cut out the middlemen by purchasing ad space directly from auctions, ensuring you get the best rates and full control of your campaign."
              icon={"/icons/icon-chain.svg"}
              className="grow flex-1"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between gap-4 flex-1">
            {/* Small Card (1/3) - Data-Driven Decisions */}
            <BentoCard
              title="Data-Driven Decisions"
              description="Our advanced analytics provide insights on audience demographics, engagement rates, and campaign performance to fine-tune your strategy."
              icon={"/icons/icon-bar.svg"}
              className="grow"
            />

            {/* Tall Card (2/3) - Proven Expertise */}
            <BentoCard
              title="Proven Expertise"
              description="Over 40 years of hands-on experience in traditional TV and streaming TV (OTT/CTV) advertising. We leverage deep industry knowledge to maximize customer reach."
              imageSrc="/images/analytics-dashboard.jpg"
              imagePosition="top"
              imageClassName="h-[380px] sm:h-[444px] md:h-[438px]"
              className="grow-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
