import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Panel } from "#/components/panel";
import type { ProjectFilters } from "../model/project-types";

type WorkHeroProps = Readonly<{
    activeResultCount: number;
    filters: ProjectFilters;
    totalProjectCount: number;
}>;

export function WorkHero({ activeResultCount, filters, totalProjectCount }: WorkHeroProps) {
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

                <div className="mt-6 flex items-center gap-3">
                    <div className="h-2 w-2 animate-pulse bg-primary/50" />
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-[0.15em]">
                        {activeResultCount} PROJECT{activeResultCount !== 1 ? "S" : ""} INDEXED
                    </span>
                </div>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.8fr)_minmax(16rem,0.8fr)]">
                <div className="bg-card/30 px-6 py-6 md:px-8 md:py-8">
                    <p className="font-mono text-[9px] text-primary/70 tracking-[0.18em]">WORK.ARCHIVE</p>
                    <p className="mt-4 max-w-xl font-display font-semibold text-3xl text-foreground uppercase tracking-[-0.04em] md:text-4xl">
                        Filter by search, tag, year.
                    </p>
                    <p className="mt-3 max-w-xl text-muted-foreground text-sm leading-7">
                        Query state stays in the URL, results stay server-driven, and the chrome stops looking like a
                        polite spreadsheet.
                    </p>
                </div>

                <Panel className="h-full border-0 p-0">
                    <div className="flex h-full flex-col justify-between gap-6 px-6 py-6">
                        <div>
                            <p className="meta-text">Archive status</p>
                            <p className="mt-4 font-display font-semibold text-4xl text-foreground uppercase tracking-[-0.04em]">
                                {activeResultCount}
                            </p>
                            <p className="mt-2 text-muted-foreground text-sm">Currently in view</p>
                        </div>
                        <div className="data-indicator">SYNC LOCKED</div>
                    </div>
                </Panel>

                <Panel className="h-full border-0 p-0">
                    <div className="grid h-full gap-px bg-white/6">
                        <div className="bg-card/30 px-6 py-6">
                            <p className="meta-text">Total projects</p>
                            <p className="mt-4 font-display font-semibold text-2xl text-foreground uppercase tracking-[-0.04em]">
                                {totalProjectCount}
                            </p>
                        </div>
                        <div className="bg-card/20 px-6 py-6">
                            <p className="meta-text">Filter state</p>
                            <p className="mt-4 font-display font-semibold text-2xl text-foreground uppercase tracking-[-0.04em]">
                                {hasActiveFilters ? "Filtered" : "All"}
                            </p>
                            <p className="mt-2 text-muted-foreground text-sm">
                                {filters.tags.length} tag filters · {filters.query.length} query chars
                            </p>
                        </div>
                    </div>
                </Panel>
            </div>
        </section>
    );
}
