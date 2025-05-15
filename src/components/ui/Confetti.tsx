import { useEffect, useState } from 'react';
import React from 'react';

interface ConfettiProps {
    count?: number;
    colors?: string[];
}

export function Confetti({ count = 100, colors = ['#0061EF', '#00D1FF', '#FFD700', '#FF6B6B', '#48BB78'] }: ConfettiProps) {
    const [confetti, setConfetti] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const newConfetti: React.ReactNode[] = [];

        // Use window dimensions instead of container
        const windowWidth = window.innerWidth;
        // Remove unused variable
        // const windowHeight = window.innerHeight;

        for (let i = 0; i < count; i++) {
            // Random properties for each confetti piece
            const size = Math.floor(Math.random() * 10) + 5; // 5-15px
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * windowWidth;
            const top = -50 - Math.random() * 100; // Start above viewport
            const delay = Math.random() * 3; // 0-3s delay
            const duration = Math.random() * 3 + 2; // 2-5s duration
            const shape = Math.random() > 0.5 ? 'circle' : 'square';

            // Create the confetti piece
            newConfetti.push(
                <div
                    key={i}
                    className="confetti fixed"
                    style={{
                        left: `${left}px`,
                        top: `${top}px`,
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: color,
                        borderRadius: shape === 'circle' ? '50%' : '0',
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                        zIndex: 5
                    }}
                />
            );
        }

        setConfetti(newConfetti);

        // Clean up
        return () => {
            setConfetti([]);
        };
    }, [colors, count]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
            {confetti}
        </div>
    );
} 