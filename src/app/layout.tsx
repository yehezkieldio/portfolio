import "./globals.css";

import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cn } from "#/lib/utils";

const fonts = [
    IBM_Plex_Mono({
        variable: "--font-mono",
        weight: ["400", "500"],
        subsets: ["latin"],
    }).variable,
    Public_Sans({
        variable: "--font-sans",
        subsets: ["latin"],
    }).variable,
    Archivo({
        variable: "--font-display",
        subsets: ["latin"],
    }).variable,
];

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
            <body className={cn(...fonts, "isolate flex min-h-screen flex-col bg-background antialiased")}>
                <NuqsAdapter>{children}</NuqsAdapter>
            </body>
        </html>
    );
}
