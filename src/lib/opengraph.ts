import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
    title: {
        default: "Yehezkiel Dio Sinolungan",
        template: "%s"
    },
    description: "Software Engineer, Web Developer, and Open Source Enthusiast.",
    keywords: ["Design", "Development", "Engineering"],
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon.ico" }
        ],
        apple: "/apple-touch-icon.png",
        other: [
            { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
            { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" }
        ]
    },
    manifest: "/site.webmanifest",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        title: "Yehezkiel Dio Sinolungan",
        description: "Software Engineer, Web Developer, and Open Source Enthusiast.",
        siteName: "Yehezkiel Dio Sinolungan"
    },
    twitter: {
        card: "summary_large_image",
        title: "Yehezkiel Dio Sinolungan",
        description: "Software Engineer, Web Developer, and Open Source Enthusiast."
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            "index": true,
            "follow": true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};
