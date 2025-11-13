import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface HeroProps {
    title?: string;
    subtitle?: string;
    label?: string;
}

const Particle = ({ delay }: { delay: number }) => (
    <div
        className="absolute w-1 h-1 bg-copper rounded-full shadow-[0_0_10px_var(--copper-glow)]"
        style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float 20s infinite ease-in-out`,
            animationDelay: `${delay}s`,
        }}
    />
);

export const Hero: React.FC<HeroProps> = ({
    title = "Augmenter la performance de vos équipes avec l'IA fiable et mesurable",
    subtitle = "Des solutions Salesforce et Agentforce calibrées pour maximiser votre retour sur investissement, accélérer la transformation et renforcer la confiance numérique.",
    label = "Expert Salesforce & Transformation IA"
}) => {
    return (
        <section className="relative py-20 md:py-32 text-center overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/50 to-graphite z-0" />

            {/* Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <Particle key={i} delay={i * 0.5} />
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fadeInUp">
                {/* Label Badge */}
                <div className="inline-flex items-center justify-center mb-6">
                    <span
                        className={clsx(
                            "px-4 py-2 rounded-full",
                            "bg-gradient-copper text-white text-sm font-bold",
                            "shadow-glow animate-pulse"
                        )}
                    >
                        {label}
                    </span>
                </div>

                {/* Main Title */}
                <h1
                    className={clsx(
                        "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
                        "drop-shadow-[0_0_14px_var(--copper-glow)]"
                    )}
                >
                    {title.split('IA').map((part, index, array) => (
                        <React.Fragment key={index}>
                            {part}
                            {index < array.length - 1 && (
                                <span className="bg-gradient-copper bg-clip-text text-transparent">
                                    IA
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-custom max-w-3xl mx-auto mb-8 leading-relaxed">
                    {subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className={clsx(
                            "px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide",
                            "bg-gradient-copper text-white",
                            "transition-all duration-300",
                            "hover:shadow-glow hover:-translate-y-1",
                            "flex items-center gap-2"
                        )}
                    >
                        📅 Consultation gratuite
                    </Link>
                    <Link
                        href="/roi-calculator"
                        className={clsx(
                            "px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide",
                            "border-2 border-copper text-white bg-transparent",
                            "transition-all duration-300",
                            "hover:shadow-glow hover:border-copper-light",
                            "flex items-center gap-2"
                        )}
                    >
                        🧮 Calculer mon ROI
                    </Link>
                </div>
            </div>
        </section>
    );
};
