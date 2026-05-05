"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#/lib/utils";

const writingLinks = [
    { label: "writing", href: "/writing" },
    { label: "notes", href: "/writing/notes" },
];

function isActivePath(pathname: string, href: string) {
    if (href === "/writing") {
        return pathname === "/writing";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export function WritingNav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Writing navigation" className="mb-9 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs">
            {writingLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);

                return (
                    <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "motion-link motion-press relative",
                            isActive ? "text-foreground" : "text-muted-foreground/75"
                        )}
                        href={link.href}
                        key={link.href}
                        transitionTypes={["nav-lateral"]}
                    >
                        {link.label}
                        {isActive ? (
                            <span
                                aria-hidden="true"
                                className="absolute -bottom-1 left-0 h-px w-full bg-foreground/60"
                                style={{ viewTransitionName: "writing-nav-active-indicator" }}
                            />
                        ) : null}
                    </Link>
                );
            })}
        </nav>
    );
}
