import { PageTransition } from "./page-transition";
import { SiteBackground } from "./site-background";
import { SiteNav } from "./site-nav";

export function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-dvh overflow-hidden bg-background text-foreground">
            <SiteBackground />
            <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 py-7 sm:px-6 sm:py-20">
                <header
                    className="mb-10 flex flex-wrap justify-end gap-x-5 gap-y-3 text-sm leading-none sm:mb-16"
                    style={{ viewTransitionName: "persistent-nav" }}
                >
                    <SiteNav />
                </header>

                <PageTransition>{children}</PageTransition>
            </div>
        </main>
    );
}
