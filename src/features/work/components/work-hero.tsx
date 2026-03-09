import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import type { ProjectFilters } from "../model/project-types";

type WorkHeroProps = Readonly<{
    activeResultCount: number;
    filters: ProjectFilters;
}>;

export function WorkHero({ activeResultCount, filters }: WorkHeroProps) {
    const hasActiveFilters = filters.query.length > 0 || filters.tags.length > 0 || filters.year !== "all";

    return (
        <section className="relative py-8 md:py-12 lg:py-16">
            <div className="relative mb-16">
                <div className="absolute top-1/2 -left-6 hidden md:-left-12 lg:block">
                    <div className="flex items-center">
                        <div className="h-px w-6 bg-linear-to-r from-white/4 to-white/12 md:w-12" />
                        <div className="h-1.5 w-1.5 rotate-45 border border-white/15 bg-background" />
                    </div>
                </div>

                <Link
                    className="group mb-12 inline-flex items-center gap-3 font-mono text-muted-foreground text-xs tracking-widest transition-colors hover:text-primary"
                    href="/"
                >
                    <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span>BACK TO HOME</span>
                </Link>

                <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[9px] text-primary/70 uppercase tracking-[0.3em]">
                        Archive / All Projects
                    </span>
                    <div className="h-px max-w-32 flex-1 bg-linear-to-r from-white/8 to-transparent" />
                </div>

                <h1 className="mb-4 font-bold font-display text-4xl text-foreground uppercase tracking-[-0.04em] md:text-5xl lg:text-6xl">
                    Portfolio
                </h1>
                <p className="max-w-xl text-muted-foreground text-sm leading-relaxed">
                    A selection of projects spanning full-stack development, infrastructure, security, and developer
                    tools.
                </p>

                <div className="mt-6 flex items-center gap-0">
                    <div className="h-2 w-2 animate-pulse bg-primary/50" />
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-[0.15em]">
                        {activeResultCount} PROJECT{activeResultCount !== 1 ? "S" : ""} INDEXED
                    </span>
                </div>
            </div>
        </section>
    );
}
