import { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export interface Item {
  id: string | number;
  content: React.ReactNode;
  alt?: string;
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction,
  speed = 80,
  pauseOnHover,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Add event listener for animation end
    const scrollerContent = Array.from(scrollerRef.current.children);

    // Calculate the total width of all items
    const scrollerWidth = scrollerRef.current.offsetWidth;

    // Set the animation duration based on width and speed
    const animationDuration = scrollerWidth / speed;

    // Add animation styles to document head
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes scroll-right {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-50%)); }
      }
      
      @keyframes scroll-left {
        from { transform: translateX(calc(-50%)); }
        to { transform: translateX(0); }
      }
      
      .animate-scroll-right {
        animation: scroll-right ${animationDuration}s linear infinite;
      }
      
      .animate-scroll-left {
        animation: scroll-left ${animationDuration}s linear infinite;
      }
    `;
    document.head.appendChild(styleEl);

    // Check if we need to duplicate items for a smooth loop
    if (scrollerContent.length <= 1) {
      // If we don't have enough items, duplicate them
      const dupElements = scrollerContent.map((item) => item.cloneNode(true));
      dupElements.forEach((item) => {
        if (item instanceof HTMLElement) {
          scrollerRef.current?.appendChild(item);
        }
      });
    }

    // Start the animation a bit delayed to ensure everything is ready
    setTimeout(() => setStart(true), 100);

    // Cleanup
    return () => {
      document.head.removeChild(styleEl);
    };
  }, [speed, direction]);

  const scrollerClasses = cn(
    "flex w-max",
    start &&
      (direction === "right" ? "animate-scroll-right" : "animate-scroll-left"),
    pauseOnHover && "hover:[animation-play-state:paused]"
  );

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div ref={scrollerRef} className={scrollerClasses}>
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 flex items-center">
            {item.content}
          </div>
        ))}
        {/* Duplicate items for seamless looping */}
        {items.map((item) => (
          <div
            key={`dup-${item.id}`}
            className="flex-shrink-0 flex items-center"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};
