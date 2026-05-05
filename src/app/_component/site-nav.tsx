"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#/lib/utils";

const navLinks = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "writing", href: "/writing" },
];

function isActivePath(pathname: string, href: string) {
    if (href === "/") {
        return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);

                return (
                    <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "motion-link motion-press relative",
                            isActive ? "text-foreground" : "text-muted-foreground"
                        )}
                        href={link.href}
                        key={link.href}
                        transitionTypes={["nav-lateral"]}
                    >
                        <span>{link.label}</span>
                        {isActive ? (
                            <span
                                aria-hidden="true"
                                className="absolute -bottom-1 left-0 h-px w-full bg-foreground/70"
                                style={{ viewTransitionName: "nav-active-indicator" }}
                            />
                        ) : null}
                    </Link>
                );
            })}
        </nav>
    );
}
