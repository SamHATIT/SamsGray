import React, {useState} from "react";
import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import {SearchBar, SearchBarProps} from "@/components/SearchBar";

type NavbarProps = {
    searchBoxProps?: SearchBarProps
}

const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Services", href: "/services" },
    { label: "Expertises", href: "/expertises" },
    { label: "À propos", href: "/about" },
];

export const Navbar = (props: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NextUINavbar
            position="sticky"
            maxWidth="xl"
            className={clsx(
                "bg-graphite-light/95 backdrop-blur-md border-b border-copper/10",
                "shadow-shadow-dark",
                "animate-fadeInDown"
            )}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* Logo */}
            <NavbarBrand>
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-14 w-auto relative">
                        <Image
                            src="/img.png"
                            alt="Samhatit Consulting"
                            width={180}
                            height={56}
                            className="object-contain drop-shadow-[0_0_4px_var(--copper-glow)] transition-all hover:drop-shadow-[0_0_10px_rgba(180,106,60,0.7)]"
                        />
                    </div>
                </Link>
            </NavbarBrand>

            {/* Desktop Navigation */}
            <NavbarContent className="hidden md:flex gap-6" justify="center">
                {navLinks.map((link) => (
                    <NavbarItem key={link.href}>
                        <Link
                            href={link.href}
                            className={clsx(
                                "relative font-semibold text-gray-custom py-2",
                                "transition-all duration-300",
                                "after:content-[''] after:absolute after:left-0 after:bottom-1",
                                "after:w-0 after:h-0.5 after:bg-gradient-copper",
                                "after:transition-all after:duration-300",
                                "hover:text-white hover:drop-shadow-[0_0_6px_var(--copper-glow)]",
                                "hover:after:w-full"
                            )}
                        >
                            {link.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* CTA Button */}
            <NavbarContent justify="end">
                <NavbarItem className="hidden md:flex">
                    <Link
                        href="/contact"
                        className={clsx(
                            "px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wide",
                            "bg-gradient-copper text-white",
                            "transition-all duration-300",
                            "hover:shadow-glow hover:-translate-y-0.5"
                        )}
                    >
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem className="md:hidden">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        className="text-white"
                    />
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu className="bg-graphite-light/98 backdrop-blur-md pt-6">
                {navLinks.map((link, index) => (
                    <NavbarMenuItem key={`${link.href}-${index}`}>
                        <Link
                            href={link.href}
                            className={clsx(
                                "w-full py-3 text-lg font-semibold",
                                "text-gray-custom transition-all duration-300",
                                "hover:text-copper-light hover:translate-x-1"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Link
                        href="/contact"
                        className={clsx(
                            "w-full py-3 px-5 mt-4 rounded-lg font-bold text-center",
                            "bg-gradient-copper text-white",
                            "transition-all duration-300 hover:shadow-glow"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </NextUINavbar>
    );
};
