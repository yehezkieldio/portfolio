import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "#/components/theme-provider";
import { cn } from "#/lib/utils";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Yehezkiel Dio Sinolungan",
        template: "%s",
    },
    description: "Software Engineer, Web Developer, and Open Source Enthusiast.",
    keywords: ["Design", "Development", "Engineering"],
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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        title: "Yehezkiel Dio Sinolungan",
        description: "Software Engineer, Web Developer, and Open Source Enthusiast.",
        siteName: "Yehezkiel Dio Sinolungan",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yehezkiel Dio Sinolungan",
        description: "Software Engineer, Web Developer, and Open Source Enthusiast.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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
                    geistMono.variable,
                    geist.variable,
                    playfairDisplay.variable,
                    "font-sans antialiased"
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem>
                    <NuqsAdapter>
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </NuqsAdapter>
                </ThemeProvider>
            </body>
        </html>
    );
}
