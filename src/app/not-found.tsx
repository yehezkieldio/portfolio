import Link from "next/link";

export default function NotFound() {
    return (
        <section className="space-y-8">
            <header className="project-row-enter space-y-3">
                <p className="font-mono text-muted-foreground text-sm">404</p>
                <h1 className="font-semibold text-2xl leading-tight">Page not found</h1>
                <p className="max-w-xl text-muted-foreground/95 leading-7">
                    The page you are looking for does not exist, or it may have moved.
                </p>
            </header>

            <div className="project-row-enter" style={{ animationDelay: "70ms" }}>
                <Link
                    className="motion-link motion-press text-muted-foreground text-sm"
                    href="/"
                    transitionTypes={["nav-lateral"]}
                >
                    Go home
                </Link>
            </div>
        </section>
    );
}
