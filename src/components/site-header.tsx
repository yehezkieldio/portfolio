"use client";

import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#/lib/utils";

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
];

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
        <header className="relative z-40 border-white/6 border-b bg-background/85 backdrop-blur-sm">
            <div className="absoltue pointer-events-none inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/18 to-transparent" />
                <div className="absolute inset-y-0 left-[max(1rem,calc(50%-40rem))] hidden w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block" />
                <div className="absolute inset-y-0 right-[max(1rem,calc(50%-40rem))] hidden w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="flex flex-col gap-4 py-4 md:py-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-3">
                            <Link href="/">
                                <div className="font-display text-base text-foreground uppercase tracking-[-0.03em] sm:text-lg">
                                    <p>Yehezkiel Dio Sinolungan</p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                            <a
                                className="system-button-secondary min-w-0 justify-between px-4 py-3"
                                href="mailto:yehezkieldio@proton.me"
                            >
                                Say hello
                                <MailIcon className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>

                    <nav aria-label="Primary" className="border-white/6 border-t pt-3">
                        <ul className="flex flex-wrap items-center gap-2 md:gap-3">
                            {navigationItems.map((item) => {
                                const isActive = isActivePath(pathname, item.href);

                                return (
                                    <li key={item.href}>
                                        <Link
                                            aria-current={isActive ? "page" : undefined}
                                            className={cn(
                                                "group inline-flex items-center gap-3 border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300",
                                                isActive
                                                    ? "border-primary/40 bg-primary/10 text-primary"
                                                    : "border-white/8 bg-card/18 text-muted-foreground hover:border-white/16 hover:bg-card/42 hover:text-foreground"
                                            )}
                                            href={item.href}
                                        >
                                            <span
                                                className={cn(
                                                    "text-[8px]",
                                                    isActive ? "text-primary/60" : "text-muted-foreground/30"
                                                )}
                                            >
                                                {item.signal}
                                            </span>
                                            <span>{item.label}</span>
                                            <ArrowUpRightIcon
                                                className={cn(
                                                    "h-3 w-3 transition-all duration-300",
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
