import { GitHubDark, Gmail, LinkedIn, XDark } from "@ridemountainpig/svgl-react";
import { ExternalLinkList } from "./external-link-list";
import { PageTransition } from "./page-transition";
import { SiteBackground } from "./site-background";
import { SiteNav } from "./site-nav";

const socialLinks = [
    { label: "email", href: "mailto:yehezkieldio@gmail.com", icon: Gmail },
    { label: "github", href: "https://github.com/yehezkieldio", icon: GitHubDark },
    { label: "linkedin", href: "https://www.linkedin.com/in/yehezkieldio/", icon: LinkedIn },
    { label: "x", href: "https://x.com/yhezkieldio", icon: XDark },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-dvh overflow-hidden bg-background text-foreground">
            <SiteBackground />
            <div className="relative mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-4 py-8 sm:px-6 sm:py-20">
                <header
                    className="mb-12 flex flex-wrap justify-start gap-x-5 gap-y-3 text-sm sm:mb-16 sm:justify-end"
                    style={{ viewTransitionName: "persistent-nav" }}
                >
                    <SiteNav />
                </header>

                <PageTransition>{children}</PageTransition>

                <footer
                    className="mt-12 border-border/70 border-t pt-5 sm:mt-16 sm:pt-6"
                    style={{ viewTransitionName: "persistent-contact" }}
                >
                    <ExternalLinkList links={socialLinks} />
                </footer>
            </div>
        </main>
    );
}
