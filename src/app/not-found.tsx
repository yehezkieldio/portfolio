import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="space-y-6">
            <header className="project-row-enter space-y-3">
                <p className="font-mono text-muted-foreground text-sm">404</p>
                <h1 className="font-semibold text-2xl leading-tight">Page not found</h1>
                <p className="max-w-xl text-[15px] text-muted-foreground/95 leading-6 tracking-normal sm:text-base sm:leading-7">
                    The page you are looking for does not exist, or it may have moved.
                </p>
            </header>

            <div className="project-row-enter" style={{ animationDelay: "140ms" }}>
                <Link
                    className="motion-link inline-flex items-center gap-2 font-mono text-muted-foreground text-sm"
                    href="/"
                    transitionTypes={["nav-lateral"]}
                >
                    <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                    Go home
                </Link>
            </div>
        </section>
    );
}
