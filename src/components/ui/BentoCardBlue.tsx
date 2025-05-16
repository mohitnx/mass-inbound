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
        "bg-gradient-to-r from-[#0061EF] to-[#002964] border-[0.5px] border-[#FEFEFE] rounded-[16px] overflow-hidden flex flex-col flex-1 shadow-none min-h-full p-[10px_20px] sm:p-5",
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
        <div className={`flex items-center justify-start gap-5 pb-[10px] sm:pb-[20px]`}>
          {icon && (
            <div className="h-[50px] w-[50px]">
              <img src={icon} alt={title} />
            </div>
          )}
          {title && (
            <h3 className="text-heading-5 h-[70px] flex items-center sm:text-heading-4 lg:text-heading-3 font-medium text-white leading-[140%] tracking-[0%]">
              {title}
            </h3>
          )}
        </div>
        {description && (
          <p className="text-[14px] line-clamp-4 sm:text-[16px] text-[#AEAEAE] leading-[140%] tracking-[0%]">
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
