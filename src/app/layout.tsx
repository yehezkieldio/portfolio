import type { Metadata } from "next";

import { OpenGraph } from "#/lib/opengraph";
import { cn } from "#/lib/utils";

import "./globals.css";

import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

const bricolageGrotesque = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    ...OpenGraph
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="view-transition" content="same-origin" />
            </head>
            <body
                className={cn(
                    geistSans.variable,
                    geistMono.variable,
                    bricolageGrotesque.variable,
                    "dark font-sans antialiased"
                )}
            >
                <div className="relative min-h-screen">
                    <div className="relative flex min-h-screen w-full flex-col">
                        <NuqsAdapter>{children}</NuqsAdapter>
                    </div>
                </div>
            </body>
        </html>
    );
}
