import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SectionAtmosphere } from "#/components/section-atmosphere";
import { projects as allProjects } from "#/content/projects";
import { buildProjectArchiveItems, type ProjectArchiveItem } from "#/features/portfolio/model/project-archive";

function FeaturedProjectWrapper({
    children,
    project,
}: Readonly<{
    children: React.ReactNode;
    project: ProjectArchiveItem;
}>) {
    if (project.destination.kind === "detail") {
        return (
            <Link className="block h-full" href={project.destination.href}>
                {children}
            </Link>
        );
    }

    if (project.destination.kind === "external") {
        return (
            <a className="block h-full" href={project.destination.href} rel="noreferrer" target="_blank">
                {children}
            </a>
        );
    }

    return children;
}

export function FeaturedWork() {
    const projects = buildProjectArchiveItems(allProjects.filter((project) => project.featured).slice(0, 4));

    return (
        <section className="relative overflow-x-clip py-20 md:py-32">
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(180deg, hsl(var(--background) / 0.04) 0%, transparent 24%, transparent 84%, hsl(var(--background) / 0.06) 100%)",
                    bottom: 0,
                    left: "calc(50% - (var(--viewport-width) / 2))",
                    top: 0,
                    width: "var(--viewport-width)",
                }}
            />
            <SectionAtmosphere className="z-0" variant="featured" />
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(180deg, hsl(var(--background) / 0.08) 0%, hsl(var(--background) / 0.03) 48%, transparent 100%)",
                    height: "7rem",
                    left: "calc(50% - (var(--viewport-width) / 2))",
                    top: "-5rem",
                    width: "var(--viewport-width)",
                }}
            />
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(0deg, hsl(var(--background) / 0.08) 0%, hsl(var(--background) / 0.03) 48%, transparent 100%)",
                    bottom: "-5rem",
                    height: "7rem",
                    left: "calc(50% - (var(--viewport-width) / 2))",
                    width: "var(--viewport-width)",
                }}
            />

            <div className="relative z-10">
                <div className="mx-auto mb-12 max-w-7xl md:mb-16">
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2">
                            <div className="h-full w-full bg-linear-to-r from-white/8 via-transparent to-white/8" />
                        </div>

                        <div className="relative flex flex-col items-start gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                            <div className="flex items-start gap-4">
                                <div className="hidden flex-col items-center gap-1 pt-1 md:flex">
                                    <div className="h-2 w-2 rotate-45 border border-white/15" />
                                    <div className="h-10 w-px bg-linear-to-b from-white/12 to-transparent" />
                                </div>

                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[8px] text-primary/80 tracking-widest">
                                            SECTOR 02
                                        </span>
                                        <div className="hidden h-px w-8 bg-linear-to-r from-white/10 to-transparent md:block" />
                                        <span className="hidden font-mono text-[8px] text-muted-foreground/30 tracking-widest md:block">
                                            OPERATIONAL
                                        </span>
                                    </div>
                                    <h2 className="font-bold font-display text-4xl text-foreground uppercase tracking-[-0.03em] md:text-5xl lg:text-6xl">
                                        Stuff I Do
                                    </h2>
                                    <p className="mt-2 font-mono text-[9px] text-muted-foreground/40 tracking-[0.15em]">
                                        ACTIVE MISSION PARAMETERS
                                    </p>
                                </div>
                            </div>

                            <Link
                                className="group flex items-center gap-3 font-mono text-[10px] text-muted-foreground/50 tracking-[0.15em] transition-colors duration-300 hover:text-primary/80 sm:pb-1"
                                href="/portfolio"
                            >
                                <div className="h-px w-4 bg-white/10 transition-all duration-300 group-hover:w-8 group-hover:bg-primary/40" />
                                <span>FULL LOG</span>
                                <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>

                        <div className="h-px w-full bg-linear-to-r from-white/10 via-white/4 to-white/10" />
                    </div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
                        {projects.map((project, index) => {
                            const spanClass = index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1";

                            return (
                                <article
                                    className={`${spanClass} group relative overflow-hidden bg-background`}
                                    data-reveal=""
                                    key={project.slug}
                                    style={{ "--reveal-delay": `${160 + index * 80}ms` } as CSSProperties}
                                >
                                    <FeaturedProjectWrapper project={project}>
                                        <div className="interactive-card relative h-full min-h-64 p-6 hover:bg-card/30 md:min-h-80 md:p-8">
                                            <div className="absolute inset-0 bg-linear-to-br from-card/60 to-card/20 backdrop-blur-sm transition-all duration-500 group-hover:from-card/80 group-hover:to-card/40" />
                                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                                                <div className="absolute top-0 right-0 left-0 h-px animate-pulse bg-linear-to-r from-transparent via-primary/60 to-transparent" />
                                                <div
                                                    className="absolute right-0 bottom-0 left-0 h-px animate-pulse bg-linear-to-r from-transparent via-secondary/60 to-transparent"
                                                    style={{ animationDelay: "0.5s" }}
                                                />
                                                <div className="absolute top-0 bottom-0 left-0 w-px bg-linear-to-b from-transparent via-primary/40 to-transparent" />
                                                <div className="absolute top-0 right-0 bottom-0 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent" />
                                            </div>

                                            <div className="absolute top-4 left-4 h-4 w-4 border-muted-foreground/20 border-t-2 border-l-2 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-primary/60" />
                                            <div className="absolute top-4 right-4 h-4 w-4 border-muted-foreground/20 border-t-2 border-r-2 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-primary/60" />
                                            <div className="absolute bottom-4 left-4 h-4 w-4 border-muted-foreground/20 border-b-2 border-l-2 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-secondary/60" />
                                            <div className="absolute right-4 bottom-4 h-4 w-4 border-muted-foreground/20 border-r-2 border-b-2 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-secondary/60" />

                                            <div className="relative z-10 flex h-full flex-col">
                                                <div className="mb-auto flex items-start justify-between gap-4">
                                                    <span className="font-mono text-[10px] text-primary/70 tracking-[0.2em] transition-colors duration-300 group-hover:text-primary">
                                                        VIS_{String(index + 1).padStart(2, "0")}
                                                    </span>
                                                    <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest transition-colors duration-300 group-hover:text-muted-foreground/80">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                <div className="mt-auto">
                                                    <h3 className="mb-3 flex items-center gap-2 font-bold font-display text-foreground text-xl uppercase tracking-tight transition-colors duration-300 group-hover:translate-x-1 group-hover:text-primary md:text-2xl">
                                                        <span>{project.title}</span>
                                                        {project.destination.kind === "static" ? null : (
                                                            <ArrowUpRightIcon className="h-4 w-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                                        )}
                                                    </h3>
                                                    <p className="mb-5 max-w-md text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-muted-foreground/90">
                                                        {project.summary}
                                                    </p>
                                                    <div className="mb-4 flex flex-wrap gap-2">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <span
                                                                className="border border-border px-2 py-1 font-mono text-[9px] text-muted-foreground tracking-widest transition-all duration-300 group-hover:border-primary/40 group-hover:text-foreground/80"
                                                                key={tag}
                                                                style={{
                                                                    transitionDelay: `${tagIndex * 50}ms`,
                                                                }}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center gap-2 font-mono text-[8px] text-muted-foreground/35 uppercase tracking-[0.18em]">
                                                        <div className="h-px w-7 bg-white/10 transition-all duration-300 group-hover:w-10 group-hover:bg-primary/30" />
                                                        <span>
                                                            {project.destination.kind === "detail"
                                                                ? "Open dossier"
                                                                : project.destination.kind === "external"
                                                                  ? project.destination.label
                                                                  : "Archive only"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="scanline-texture pointer-events-none absolute inset-0 opacity-[0.015] transition-opacity duration-500 group-hover:opacity-[0.03]" />
                                            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                        </div>
                                    </FeaturedProjectWrapper>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
