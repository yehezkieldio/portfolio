import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cn } from "#/lib/utils";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });

const heading = Mona_Sans({
    variable: "--font-heading",
    subsets: ["latin"],
});

const mono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

const fonts = [sans.variable, heading.variable, mono.variable];

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
            <body className={cn(...fonts, "isolate flex min-h-screen flex-col antialiased")}>
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem>
                    <NuqsAdapter>{children}</NuqsAdapter>
                </ThemeProvider>
            </body>
        </html>
    );
}
