"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "#/components/theme-toggle";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? "border-border/20 border-b bg-background/60 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                    <Link
                        className="font-normal font-serif text-base tracking-tight transition-colors duration-300 hover:text-accent"
                        href="/"
                    >
                        Yehezkiel Dio
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link
                            className="group relative font-sans text-muted-foreground text-sm transition-all duration-300 hover:text-foreground"
                            href="#about"
                        >
                            <span>About</span>
                            <span className="-bottom-1 absolute left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link
                            className="group relative font-sans text-muted-foreground text-sm transition-all duration-300 hover:text-foreground"
                            href="/projects"
                        >
                            <span>Projects</span>
                            <span className="-bottom-1 absolute left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link
                            className="group relative font-sans text-muted-foreground text-sm transition-all duration-300 hover:text-foreground"
                            href="#contact"
                        >
                            <span>Contact</span>
                            <span className="-bottom-1 absolute left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <div className="h-4 w-px bg-border/40" />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
