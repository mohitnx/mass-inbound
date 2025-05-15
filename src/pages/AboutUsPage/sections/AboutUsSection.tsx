import { BackgroundImage } from "../../../components/BackgroundImage";

export function AboutUsSection() {
  return (
    <div className="relative min-h-[calc(74vh-7.8px)] w-full flex flex-col items-center justify-center text-white text-center pb-20 pt-48">
      <BackgroundImage imagePath="/backgrounds/about-bg.png" />
      <div className="max-w-[822px] mx-auto flex flex-col px-4 ">
        <h2 className="text-heading-1 leading-[140%] tracking-[0%] font-medium mb-[40px]">
          About Us
        </h2>
        <p className="text-heading-4 leading-[140%] tracking-[0%] font-medium mb-[14px]">
          Our Story
        </p>
        <p className="text-body-lg leading-[140%] tracking-[0%] font-normal">
          Founded with a passion for transforming the TV advertising landscape,
          we have become a leading agency specializing in strategic TV media
          buying. Over the years, our dedicated team of experts has partnered
          with numerous brands to craft impactful advertising campaigns that
          drive engagement and deliver measurable success.
        </p>
      </div>
    </div>
  );
}
