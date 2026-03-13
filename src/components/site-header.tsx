"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#/lib/utils";
import { Icons } from "./icons";

interface NavigationItem {
    href: string;
    label: string;
    signal: string;
}

const navigationItems: NavigationItem[] = [
    { href: "/", label: "Home", signal: "00" },
    { href: "/portfolio", label: "Portfolio", signal: "01" },
    { href: "/writing", label: "Writing", signal: "02" },
    { href: "/about", label: "About", signal: "03" },
] as const;

function isActivePath(pathname: string, href: string): boolean {
    if (href === "/") {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
    const pathname = usePathname();

    if (pathname === "/uses") {
        return null;
    }

    return (
        <header className="relative z-40 bg-background/85 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/18 to-transparent" />
                <div className="absolute inset-y-0 left-[max(1rem,calc(50%-40rem))] hidden w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block" />
                <div className="absolute inset-y-0 right-[max(1rem,calc(50%-40rem))] hidden w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="flex flex-col gap-4 py-4 md:py-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-3">
                            <Link className="group inline-flex w-fit items-center gap-3" href="/">
                                <div>
                                    <p className="font-display text-base text-foreground uppercase tracking-[-0.03em] sm:text-lg">
                                        Yehezkiel Dio Sinolungan
                                    </p>
                                    <p className="font-mono text-[8px] text-muted-foreground/70 uppercase tracking-[0.24em]">
                                        Software Engineer · Full-stack Developer
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden flex-col items-start gap-3 sm:flex sm:flex-row sm:items-center">
                            <p className="font-mono text-[8px] text-muted-foreground/70 uppercase tracking-[0.22em]">
                                Available for work
                            </p>
                            <a
                                className="system-button-secondary min-w-0 justify-between px-4 py-3"
                                href="mailto:yehezkieldio@proton.me"
                            >
                                Say hello
                                <Icons.mail className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>

                    <nav aria-label="Primary" className="border-white/6 border-t pt-3">
                        <ul className="flex flex-wrap items-center gap-2 md:gap-3">
                            {navigationItems.map((item) => {
                                const isActive = isActivePath(pathname, item.href);

                                return (
                                    <li className={cn(isActive && "hidden")} key={item.href}>
                                        <Link
                                            aria-current={isActive ? "page" : undefined}
                                            className={cn(
                                                "group inline-flex items-center gap-1 border px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] transition-all duration-300 md:gap-3 md:px-3 md:py-2 md:text-[10px]",
                                                isActive
                                                    ? "border-primary/40 bg-primary/10 text-primary"
                                                    : "border-white/8 bg-card/18 text-muted-foreground hover:border-white/16 hover:bg-card/42 hover:text-foreground"
                                            )}
                                            href={item.href}
                                        >
                                            <span
                                                className={cn(
                                                    "text-[7px] md:text-[8px]",
                                                    isActive ? "text-primary/60" : "text-muted-foreground/30"
                                                )}
                                            >
                                                {item.signal}
                                            </span>
                                            <span>{item.label}</span>
                                            <ArrowUpRightIcon
                                                className={cn(
                                                    "h-2.5 w-2.5 transition-all duration-300 md:h-3 md:w-3",
                                                    isActive
                                                        ? "translate-x-0.5 -translate-y-0.5 text-primary/70"
                                                        : "text-muted-foreground/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary/70"
                                                )}
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
