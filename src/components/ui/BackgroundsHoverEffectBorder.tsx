import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type BackgroundsHoverEffectBorderProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  gradientClassName?: string;
  animationDuration?: number;
};

export function BackgroundsHoverEffectBorder({
  children,
  className = "",
  containerClassName = "",
  borderClassName = "",
  gradientClassName = "",
  animationDuration = 0.5,
}: BackgroundsHoverEffectBorderProps) {
  return (
    <div className={twMerge("relative group", containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animationDuration }}
        className={twMerge(
          "absolute -inset-0.5 transition duration-1000 group-hover:duration-200",
          gradientClassName
        )}
      />
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: animationDuration }}
        className={twMerge(
          "relative",
          borderClassName
        )}
      >
        <div className={twMerge("", className)}>{children}</div>
      </motion.div>
    </div>
  );
}
