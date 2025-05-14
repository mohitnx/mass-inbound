import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { BackgroundsHoverEffectBorder } from "./BackgroundsHoverEffectBorder";

type BentoCardProps = {
  title: string;
  description: string;
  icon?: string;
  imageSrc?: string;
  className?: string;
  imageClassName?: string;
  imagePosition?: "top" | "bottom";
  isWide?: boolean;
  isTall?: boolean;
  hasHoverEffect?: boolean;
};

export function BentoCard({
  title,
  description,
  icon,
  imageSrc,
  className = "",
  imageClassName = "",
  imagePosition = "top",
  isWide = false,
  isTall = false,
  hasHoverEffect = true,
}: BentoCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={twMerge(
        "bg-[#0F0F0F] border border-[#FFFFFF66] rounded-[16px] overflow-hidden flex flex-col shadow-none h-full p-5",
        className
      )}
    >
      {imageSrc && imagePosition === "top" && (
        <div
          className={twMerge(
            "w-full overflow-hidden rounded-[12px] mb-[14px]",
            imageClassName
          )}
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative flex-grow">
        <div
          className={`flex items-center justify-between pb-[10px] ${
            icon ? "pt-[20px]" : ""
          }`}
        >
          {title && (
            <h3 className="text-heading-3 font-medium text-white leading-[140%] tracking-[0%]">
              {title}
            </h3>
          )}

          {icon && (
            <div className="">
              <img src={icon} alt={title} />
            </div>
          )}
        </div>
        {description && (
          <p className="text-[16px] text-[#AEAEAE] leading-[140%] tracking-[0%]">
            {description}
          </p>
        )}
      </div>

      {imageSrc && imagePosition === "bottom" && (
        <div className={twMerge("w-full overflow-hidden", imageClassName)}>
          <img
            src={imageSrc}
            alt={title || "Feature image"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </motion.div>
  );

  if (hasHoverEffect) {
    return (
      <div
        className={twMerge(
          isWide ? "col-span-1 md:col-span-2" : "col-span-1",
          isTall ? "row-span-2" : "row-span-1"
        )}
      >
        <BackgroundsHoverEffectBorder gradientClassName="">
          {cardContent}
        </BackgroundsHoverEffectBorder>
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        isWide ? "col-span-1 md:col-span-2" : "col-span-1",
        isTall ? "row-span-2" : "row-span-1"
      )}
    >
      {cardContent}
    </div>
  );
}
