"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "#/components/theme-toggle";
import { Button } from "#/components/ui/button";

const NAV_LINKS = [{ href: "/projects", label: "Projects" }] as const;

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "border-border/20 border-b bg-background/60 backdrop-blur-md"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link
                            className="font-normal font-serif text-base tracking-wide transition-colors duration-300 hover:text-accent sm:text-lg"
                            href="/"
                        >
                            Yehezkiel Dio
                        </Link>

                        <div className="hidden items-center gap-6 md:flex lg:gap-8">
                            {NAV_LINKS.map(({ href, label }) => (
                                <Link
                                    className="group relative font-sans text-muted-foreground text-sm transition-all duration-300 hover:text-foreground"
                                    href={href}
                                    key={href}
                                >
                                    <span>{label}</span>
                                    <span className="-bottom-1 absolute left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            <div className="h-4 w-px bg-border/40" />
                            <ThemeToggle />
                        </div>

                        <div className="flex items-center gap-3 md:hidden">
                            <ThemeToggle />
                            <Button
                                aria-expanded={isMobileMenuOpen}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                                className="relative z-50"
                                onClick={toggleMobileMenu}
                                size="icon"
                                variant="ghost"
                            >
                                {isMobileMenuOpen ? (
                                    <XIcon className="h-5 w-5" />
                                ) : (
                                    <MenuIcon className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    aria-label="Mobile navigation menu"
                    aria-modal="true"
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
                    role="dialog"
                >
                    <button
                        aria-label="Close menu overlay"
                        className="absolute inset-0 cursor-default"
                        onClick={closeMobileMenu}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                closeMobileMenu();
                            }
                        }}
                        type="button"
                    >
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="relative flex h-full flex-col items-center justify-center space-y-8 px-6">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                className="font-sans text-2xl text-muted-foreground transition-colors hover:text-foreground"
                                href={href}
                                key={href}
                                onClick={closeMobileMenu}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
