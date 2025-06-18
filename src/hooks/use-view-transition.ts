"use client";

import { useCallback } from "react";

interface ViewTransitionOptions {
    skipTransition?: boolean;
}

export function useViewTransition() {
    const startViewTransition = useCallback(
        (callback: () => void | Promise<void>, options: ViewTransitionOptions = {}) => {
            if (options.skipTransition || !("startViewTransition" in document)) {
                // Fallback for browsers that don't support View Transition API
                return Promise.resolve().then(callback);
            }

            return document.startViewTransition(callback);
        },
        []
    );

    return { startViewTransition };
}
