import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LiveChat from "../components/live-chat";
import { cn } from "../lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Yehezkiel Dio | Software Developer",
    description: "A software developer based at Balikpapan, Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(`${plusJakartaSans.className} dark`)}>
                <LiveChat />
                {children}
            </body>
        </html>
    );
}
