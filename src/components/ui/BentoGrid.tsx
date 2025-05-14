import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function BentoGrid({
  children,
  className = "",
  containerClassName = "",
}: BentoGridProps) {
  return (
    <div className={twMerge("w-full", containerClassName)}>
      <div
        className={twMerge(
          "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
