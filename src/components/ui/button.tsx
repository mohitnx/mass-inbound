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
          "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 gap-2 ",
          // Border radius and padding
          "rounded-[67.5px] p-[8px] hover:rounded-none transition-all duration-500 ease-in-out",
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
            "h-[52px] min-w-[186px]": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-[68px] min-w-[202px] text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2 flex items-center">{icon}</span>}
        {children}
      </button>
    );
  }
);
