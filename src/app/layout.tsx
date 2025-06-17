import type { Metadata } from "next";

import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

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
    title: "Yehezkiel Dio Sinolungan",
    description: "Software Engineer. Web Developer. Open Source Enthusiast."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
