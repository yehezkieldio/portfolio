"use client";

import { usePathname } from "next/navigation";
import { ViewTransition } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <ViewTransition
            default="none"
            enter={{
                "nav-back": "nav-back",
                "nav-forward": "nav-forward",
                "nav-lateral": "content-fade-in",
                default: "none",
            }}
            exit={{
                "nav-back": "nav-back",
                "nav-forward": "nav-forward",
                "nav-lateral": "content-fade-out",
                default: "none",
            }}
        >
            <div className="route-content-enter" key={pathname}>
                {children}
            </div>
        </ViewTransition>
    );
}
