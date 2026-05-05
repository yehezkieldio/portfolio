"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#/lib/utils";

type SectionNavLink = {
    active?: "exact" | "nested";
    href: string;
    label: string;
};

type SectionNavProps = {
    ariaLabel: string;
    className?: string;
    indicatorName: string;
    links: SectionNavLink[];
};

export function SectionNav({ ariaLabel, className, indicatorName, links }: SectionNavProps) {
    const pathname = usePathname();

    return (
        <nav aria-label={ariaLabel} className={cn("flex flex-wrap gap-x-5 gap-y-2", className)}>
            {links.map((link) => {
                const isActive = isActivePath(pathname, link);

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
                                style={{ viewTransitionName: indicatorName }}
                            />
                        ) : null}
                    </Link>
                );
            })}
        </nav>
    );
}

function isActivePath(pathname: string, link: SectionNavLink) {
    if (link.active === "exact" || link.href === "/") {
        return pathname === link.href;
    }

    return pathname === link.href || pathname.startsWith(`${link.href}/`);
}
