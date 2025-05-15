import { cn } from "../../lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormTextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    className?: string;
}

export const FormTextarea = React.forwardRef<
    HTMLTextAreaElement,
    FormTextareaProps
>(({ label, error, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-white/80 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                {/* Base container with fixed height and rounded corners */}
                <div className={cn(
                    "w-full bg-white/30 border border-white rounded-xl overflow-hidden",
                    isFocused && "border-[#0061EF] ring-1 ring-[#0061EF]"
                )}>
                    {/* Textarea with transparent background */}
                    <textarea
                        ref={ref}
                        className={cn(
                            "w-full bg-transparent border-none p-3 text-white placeholder-white focus:outline-none resize-none relative z-20",
                            error && "border-red-500",
                            className
                        )}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        {...props}
                    />

                    {/* Animation contained in parent div */}
                    {isFocused && (
                        <motion.div
                            initial={{ left: "-10%" }}
                            animate={{ left: "110%" }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"
                        />
                    )}
                </div>
            </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
});

FormTextarea.displayName = "FormTextarea"; 