import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "#/lib/utils";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
};

export function Panel({ children, className, ...props }: PanelProps) {
    return (
        <div
            className={cn("glass-card relative overflow-hidden border border-white/8 bg-card/20 p-6", className)}
            {...props}
        >
            <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-white/8 border-t border-l" />
            <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-white/8 border-t border-r" />
            <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-white/8 border-b border-l" />
            <div className="pointer-events-none absolute right-2 bottom-2 h-2 w-2 border-white/8 border-r border-b" />
            {children}
        </div>
    );
}
