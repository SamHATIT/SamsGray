import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

const footerSections = [
    {
        title: 'Services',
        links: [
            { label: 'Audit Stratégique', href: '/services#audit' },
            { label: 'Implémentation Agentforce', href: '/services#implementation' },
            { label: 'Accompagnement Continu', href: '/services#accompagnement' },
        ]
    },
    {
        title: 'Ressources',
        links: [
            { label: 'Calculateur ROI', href: '/roi-calculator' },
            { label: 'Blog', href: '/articles' },
            { label: 'Expertises', href: '/expertises' },
        ]
    },
    {
        title: 'Contact',
        links: [
            { label: '📧 Email', href: 'mailto:contact@samhatit-consulting.cloud' },
            { label: '💼 LinkedIn', href: 'https://linkedin.com/company/samhatit-consulting', external: true },
            { label: '📅 Calendly', href: 'https://calendly.com/samhatit-consulting', external: true },
        ]
    },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-graphite border-t border-copper/20">
            <div className="container mx-auto px-6 py-12 md:py-16 max-w-7xl">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-copper-light text-lg font-semibold mb-4">
                            À propos
                        </h3>
                        <p className="text-gray-custom leading-relaxed mb-4">
                            Samhatit Consulting est votre partenaire expert en transformation
                            digitale Salesforce et IA. Nous aidons les entreprises à libérer
                            tout le potentiel d'Agentforce.
                        </p>
                        <div className="mt-4">
                            <Image
                                src="/img.png"
                                alt="Samhatit Consulting"
                                width={200}
                                height={60}
                                className="opacity-90"
                            />
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-copper-light text-lg font-semibold mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={clsx(
                                                "text-gray-custom py-2 block transition-all duration-300",
                                                "hover:text-copper-light hover:translate-x-1"
                                            )}
                                            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-copper/10 text-center text-gray-dark text-sm">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()} Samhatit Consulting. Tous droits réservés.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link
                            href="/legal"
                            className="text-gray-dark hover:text-copper-light transition-colors"
                        >
                            Mentions légales
                        </Link>
                        <span className="text-gray-darker">|</span>
                        <Link
                            href="/privacy"
                            className="text-gray-dark hover:text-copper-light transition-colors"
                        >
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
