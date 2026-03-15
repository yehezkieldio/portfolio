import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "#/lib/utils";
import { HomeFrameChrome } from "./frames/home-frame-chrome";

type SiteFrameVariant = "about" | "home" | "portfolio" | "uses" | "writing";

type SiteFrameProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
    variant?: SiteFrameVariant;
};

export function SiteFrame({ children, className, variant = "home", ...props }: SiteFrameProps) {
    const chrome = <HomeFrameChrome />;

    return (
        <div
            className={cn(
                "relative mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6 md:px-12 md:pt-12 md:pb-28 lg:px-16 lg:pt-12 lg:pb-32",
                className
            )}
            {...props}
        >
            {chrome}
            <div className="relative">{children}</div>
        </div>
    );
}
