// MainNavigationItem.tsx
import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";

interface MainNavigationItemProps {
    item: { title: string; href: string; disabled?: boolean };
    segment?: string;
    isLast: boolean;
}

export function MainNavigationItem({ item, segment, isLast }: MainNavigationItemProps) {
    return (
        <React.Fragment>
            <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                )}
            >
                {item.title}
            </Link>
            {!isLast && <span className="mx-1 text-foreground/20 select-none">/</span>}
        </React.Fragment>
    );
}
