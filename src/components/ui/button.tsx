import { cn } from "../../lib/utils";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "icon" | "icon-ghost";
  size?: "default" | "sm" | "lg";
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center text-[14px] sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 gap-0 sm:gap-2 ",
          // Border radius and padding
          "rounded-[67.5px] p-[8px] sm:p-[8px_19px] hover:rounded-none transition-all duration-500 ease-in-out",
          // Variants
          {
            // Gradient background for default/icon
            "bg-gradient-to-r from-[#002964] to-[#0061EF] text-white border-0":
              variant === "default" || variant === "icon",
            // Ghost and Icon-ghost (white bg, black border, black text)
            "bg-none border border-white text-white ":
              variant === "ghost" || variant === "icon-ghost",
            // Outline (legacy, fallback)
            "border border-neutral-200 bg-white": variant === "outline",
          },
          // Size
          {
            "h-[32px] sm:h-[52px] sm:min-w-[186px]": size === "default",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && (
          <span className="mr-2 -mt-[2px] flex items-center">{icon}</span>
        )}
        {children}
      </button>
    );
  }
);
