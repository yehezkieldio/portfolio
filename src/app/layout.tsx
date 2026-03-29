import "./globals.css";

import type { Metadata } from "next";
import { Archivo, Geist_Mono, Public_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { RouteTransition } from "#/components/route-transition";
import { SiteHeader } from "#/components/site-header";
import { cn } from "#/lib/utils";

const mono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const sans = Public_Sans({
    variable: "--font-public-sans",
    subsets: ["latin"],
});

const display = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Yehezkiel Dio Sinolungan",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon.ico" },
        ],
        apple: "/apple-touch-icon.png",
        other: [
            { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
            { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
        ],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    mono.variable,
                    sans.variable,
                    display.variable,
                    "isolate flex min-h-screen flex-col bg-background antialiased"
                )}
            >
                <NuqsAdapter>
                    <SiteHeader />
                    <RouteTransition>{children}</RouteTransition>
                </NuqsAdapter>
            </body>
        </html>
    );
}
