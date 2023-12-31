"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { cn } from "../lib/utils";
import { MobileNavigation } from "./mobile-navigation";

interface MainNavigationProps {
    items?: { title: string; href: string; disabled?: boolean }[];
    children?: React.ReactNode;
}

export function MainNavigation({ items, children }: MainNavigationProps) {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex gap-6 md:gap-10 justify-center">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <span className="hidden font-bold sm:inline-block">Yehezkiel Dio</span>
            </Link>
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && <MobileNavigation items={items}>{children}</MobileNavigation>}
        </div>
    );
}
