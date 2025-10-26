import type { Metadata } from "next";
import { Geist_Mono, Gloock, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "#/lib/utils";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const gloock = Gloock({
    weight: "400",
    variable: "--font-gloock",
    subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
    variable: "--font-source-sans-3",
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
            <body className={cn(geistMono.variable, gloock.variable, sourceSans3.variable, "antialiased")}>
                {children}
            </body>
        </html>
    );
}
