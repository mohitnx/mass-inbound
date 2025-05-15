import { cn } from "../../lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, error, className, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-white/80 mb-1">
                        {label}
                    </label>
                )}
                <div
                    className={cn(
                        "relative overflow-hidden rounded-md",
                        isFocused && "ring-1 ring-[#0061EF]"
                    )}
                >
                    {isFocused && (
                        <motion.div
                            initial={{ left: "-100%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            style={{ zIndex: 0 }}
                        />
                    )}
                    <input
                        ref={ref}
                        className={cn(
                            "w-full bg-white/30 border border-white rounded-xl p-3 text-white placeholder-white focus:border-[#0061EF] focus:ring-1 focus:ring-[#0061EF] transition-all focus:outline-none relative z-10",
                            error && "border-red-500",
                            className
                        )}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        {...props}
                    />
                </div>
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );
    }
);

FormInput.displayName = "FormInput"; 