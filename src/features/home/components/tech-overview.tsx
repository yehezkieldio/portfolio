import type { CSSProperties } from "react";
import { BrandGlyph } from "#/components/brand-glyph";
import { SectionAtmosphere } from "#/components/section-atmosphere";

type TechEntry = Readonly<{
    iconName: string;
    name: string;
}>;

const coreTechnologies = [
    { iconName: "Next.js", name: "Next.js" },
    { iconName: "Bun", name: "Bun" },
    { iconName: "TypeScript", name: "TypeScript" },
    { iconName: "Rust", name: "Rust" },
    { iconName: "GitHub Copilot", name: "GitHub Copilot" },
] as const satisfies readonly TechEntry[];

const fullStackColumns = [
    ["Next.js", "React", "TypeScript"],
    ["Tailwind CSS", "Node.js", "Bun"],
    ["PostgreSQL", "Docker", "Rust"],
    ["Tokio", "GitHub Actions", "Vercel"],
] as const satisfies readonly (readonly string[])[];

export function TechOverview() {
    const techDots = Array.from({ length: 5 }, (_, value) => value);
    const dataStreamRows = Array.from({ length: 40 }, (_, value) => value);

    return (
        <section className="relative overflow-x-clip py-20 md:py-32">
            <div
                className="pointer-events-none absolute"
                style={{
                    background: "linear-gradient(180deg, transparent 0%, hsl(var(--background) / 0.03) 100%)",
                    bottom: 0,
                    left: "calc(50% - (var(--viewport-width) / 2))",
                    top: 0,
                    width: "var(--viewport-width)",
                }}
            />
            <SectionAtmosphere className="z-0" variant="tech" />
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(180deg, hsl(var(--background) / 0.05) 0%, hsl(var(--background) / 0.02) 46%, transparent 100%)",
                    height: "8rem",
                    left: "calc(50% - (var(--viewport-width) / 2))",
                    top: "-6rem",
                    width: "var(--viewport-width)",
                }}
            />
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(0deg, hsl(var(--background) / 0.05) 0%, hsl(var(--background) / 0.02) 46%, transparent 100%)",
                    bottom: "-6rem",
                    height: "8rem",
                    left: "calc(50% - (var(--viewport-width) / 2))",
                    width: "var(--viewport-width)",
                }}
            />

            <div className="relative z-10">
                <div className="mx-auto mb-12 max-w-7xl md:mb-16">
                    <div className="relative">
                        <div className="flex items-start justify-start gap-4 pb-6 md:justify-end md:gap-6">
                            <div className="flex-1 text-left md:text-right">
                                <div className="mb-3 flex items-center justify-start gap-3 md:justify-end">
                                    <span className="hidden font-mono text-[7px] text-muted-foreground/25 tracking-widest md:block">
                                        INVENTORY ACTIVE
                                    </span>
                                    <div className="h-px max-w-24 flex-1 bg-linear-to-l from-white/8 to-transparent" />
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 animate-pulse bg-primary/40" />
                                        <span className="font-mono text-[8px] text-primary/60 tracking-[0.25em]">
                                            SYS.ARSENAL
                                        </span>
                                    </div>
                                </div>

                                <h2 className="mb-2 font-bold font-display text-4xl text-foreground uppercase tracking-[-0.03em] md:text-5xl lg:text-6xl">
                                    Tech Stack
                                </h2>

                                <div className="flex items-center justify-start gap-3 md:justify-end">
                                    <div className="flex gap-0.5">
                                        {techDots.map((value) => (
                                            <div
                                                className="h-0.5 w-0.5 bg-white/15"
                                                key={`tech-dot-${value}`}
                                                style={{ opacity: 1 - value * 0.18 }}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-mono text-[9px] text-muted-foreground/40 tracking-[0.15em]">
                                        WEAPONS &amp; INSTRUMENTS
                                    </span>
                                </div>
                            </div>

                            <div className="hidden h-20 w-px bg-linear-to-b from-white/15 via-primary/20 to-transparent md:block" />
                        </div>

                        <div className="h-px w-full bg-linear-to-r from-white/10 via-white/4 to-white/10" />
                    </div>
                </div>

                <div className="mx-auto mb-16 max-w-7xl md:mb-20">
                    <div className="flex flex-col items-center">
                        <span className="mb-8 font-mono text-[9px] text-muted-foreground/80 uppercase tracking-[0.2em]">
                            Core Technologies
                        </span>

                        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-px bg-border">
                            {coreTechnologies.map((tech, index) => (
                                <div
                                    className="relative flex min-h-28 flex-col items-center justify-center gap-3 bg-background px-4 py-5 text-center md:min-h-32 md:px-5 md:py-6"
                                    data-reveal=""
                                    key={tech.name}
                                    style={{ "--reveal-delay": `${100 + index * 50}ms` } as CSSProperties}
                                >
                                    <div className="absolute top-3 left-3 h-2 w-2 border border-white/8 border-r-0 border-b-0" />
                                    <div className="absolute top-3 right-3 h-2 w-2 border border-white/8 border-b-0 border-l-0" />
                                    <div className="rounded-full border border-white/8 bg-card/40 p-3">
                                        <BrandGlyph className="h-5 w-5" name={tech.iconName} />
                                    </div>
                                    <span className="font-mono text-[9px] text-foreground/84 uppercase tracking-[0.14em]">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 right-8 z-1 hidden -translate-y-1/2 opacity-[0.04] lg:block">
                <div className="h-64 overflow-hidden font-mono text-[9px] text-foreground leading-4">
                    <div className="animate-data-stream">
                        {dataStreamRows.map((value) => (
                            <div key={`data-${value}`}>
                                {(value * 982_451_653).toString(36).toUpperCase().padEnd(8, "0").slice(0, 8)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
