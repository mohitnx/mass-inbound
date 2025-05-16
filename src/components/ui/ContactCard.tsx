import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ContactCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href?: string;
    className?: string;
}

export function ContactCard({ title, description, icon, href, className }: ContactCardProps) {
    const CardContent = () => (
        <div className="bg-[#FEFEFE]/10 backdrop-blur-sm border border-white/50 p-4 rounded-[10px] flex items-center gap-4 group overflow-hidden">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#0061EF]/20 group-hover:bg-[#0061EF]/40 transition-colors">
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    style={{ transformOrigin: 'center' }}
                >
                    {icon}
                </motion.div>
            </div>
            <div className="text-left overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 0 }}
                    className="group-hover:scale-105 transform transition-transform duration-200 origin-left"
                >
                    <p className="text-[14px] text-[#8AB6F8]">{title}</p>
                    <p className="text-[16px] font-medium">{description}</p>
                </motion.div>
            </div>
        </div>
    );

    return href ? (
        <a
            href={href}
            className={cn("block", className)}
        >
            <CardContent />
        </a>
    ) : (
        <div className={className}>
            <CardContent />
        </div>
    );
} 