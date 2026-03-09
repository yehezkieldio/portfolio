import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "#/lib/utils";

type SiteFrameProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
};

export function SiteFrame({ children, className, ...props }: SiteFrameProps) {
    return (
        <div
            className={cn(
                "relative mx-auto max-w-7xl px-6 pt-8 pb-24 md:px-12 md:pt-12 md:pb-28 lg:px-16 lg:pt-16 lg:pb-32",
                className
            )}
            {...props}
        >
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-white/[0.12] via-white/[0.03] to-white/[0.12] md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-white/[0.12] via-white/[0.03] to-white/[0.12] md:block" />
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-white/[0.15] via-white/[0.04] to-white/[0.15] md:block" />
            <div className="relative">{children}</div>
        </div>
    );
}
