"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useState, ViewTransition } from "react";

type RouteTransitionProps = {
    children: ReactNode;
};

const FIREFOX_USER_AGENT_PATERN = /firefox/i;

function supportRouteTransitions(): boolean {
    if (typeof window === "undefined") {
        return false;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const usesCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isFirefox = FIREFOX_USER_AGENT_PATERN.test(window.navigator.userAgent);

    if (prefersReducedMotion || usesCoarsePointer || isFirefox) {
        return false;
    }

    const hasNativeViewTransitions = "startViewTransition" in document;
    return hasNativeViewTransitions;
}

export function RouteTransition({ children }: RouteTransitionProps) {
    const pathname = usePathname();
    const [canUseRouteTransition, setCanUseRouteTransition] = useState(false);

    useEffect(() => {
        setCanUseRouteTransition(supportRouteTransitions());
    });

    if (!canUseRouteTransition) {
        return <div id="main-content">{children}</div>;
    }

    return (
        <ViewTransition default="none" enter="route-enter" exit="route-exit" key={pathname}>
            <div id="main-content">{children}</div>
        </ViewTransition>
    );
}
