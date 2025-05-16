import { cn } from "../../lib/utils";
import { Button } from "./button";

export interface ExpandingCardProps {
  icon: React.ReactNode;
  iconBgColor?: string;
  title: string;
  description: string;
  backgroundImage: string;
  className?: string;
  onLearnMoreClick?: () => void;
}

export const ExpandingCard: React.FC<ExpandingCardProps> = ({
  icon,
  title,
  description,
  backgroundImage,
  className,
  onLearnMoreClick,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl py-[28px] px-[20px] lg:px-[30px] lg:hover:px-[80px] transition-all duration-500 ease-in-out h-[400px] border border-[#FFFFFF66]",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      </div>

      <div className="relative sm:p-6 flex flex-col justify-end items-start h-full gap-[0px] md:gap-[10px]">
        <div className="flex items-center mb-4">
          <div
            className={cn(
              "min-w-[30px] min-h-[30px] rounded-full flex items-center justify-center mr-3 bg-gradient-to-r from-[#F68104] to-[#FCD8B1]"
            )}
          >
            {icon}
          </div>
          <h3 className="text-heading-7 sm:text-heading-4 font-medium leading-[140%] tracking-[0%] text-white ">
            {title}
          </h3>
        </div>

        <p className="text-[12px] md:text-body-sm text-left text-[#AEAEAE] font-[400] leading-[140%] tracking-[0%] mb-2 md:mb-0 md:w-[90%]">
          {description}
        </p>

        <Button
          size="sm"
          className="self-start p-[4px_12px]"
          onClick={onLearnMoreClick}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export const ExpandingCardContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex gap-4 md:gap-8 w-full mx-auto transition-all duration-500",
        "md:[&>*]:flex-1 md:hover:[&>*:hover]:flex-[2]",
        className
      )}
    >
      {children}
    </div>
  );
};

// Card group with hover effect
export const ExpandableCardsGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto group",
        className
      )}
    >
      <style>{`
        @media (min-width: 768px) {
          .card-container > div {
            transition: all 0.5s ease;
          }
          .card-container > div:hover {
            transform: scale(1.02);
          }
          /* When first card is hovered */
          .card-container:hover > div:first-child:hover {
            grid-column: span 2;
            width: calc(200% + 2rem);
          }
          /* When second card is hovered */
          .card-container:hover > div:last-child:hover {
            grid-column: span 2;
            width: calc(200% + 2rem);
          }
          /* Special sizes for the 1:3 and 2:3 ratio effect */
          .card-container:hover > div:first-child:hover ~ div:last-child {
            width: 33.333%;
          }
          .card-container:hover > div:last-child:hover ~ div:first-child {
            width: 33.333%;
          }
        }
      `}</style>
      <div className="md:grid md:grid-cols-2 gap-8 card-container">
        {children}
      </div>
    </div>
  );
};
