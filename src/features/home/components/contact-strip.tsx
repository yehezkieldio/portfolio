import { ArrowUpRightIcon, MessageSquareIcon } from "lucide-react";
import type { ComponentType, CSSProperties, SVGProps } from "react";
import { BrandGlyph } from "#/components/brand-glyph";
import { SectionAtmosphere } from "#/components/section-atmosphere";

const socialIcons = {
    Email: ({ className }: SVGProps<SVGSVGElement>) => <BrandGlyph className={className} name="Proton Mail" />,
    GitHub: ({ className }: SVGProps<SVGSVGElement>) => <BrandGlyph className={className} name="GitHub" />,
    LinkedIn: ({ className }: SVGProps<SVGSVGElement>) => <BrandGlyph className={className} name="LinkedIn" />,
    X: ({ className }: SVGProps<SVGSVGElement>) => <BrandGlyph className={className} name="X" />,
} as const;

const socialIconMap = socialIcons satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

const socials = [
    {
        label: "GitHub",
        handle: "@yehezkieldio",
        href: "https://github.com/yehezkieldio",
    },
    {
        label: "LinkedIn",
        handle: "/in/yehezkieldio",
        href: "https://www.linkedin.com/in/yehezkieldio",
    },
    {
        label: "X",
        handle: "@yehezkieldio",
        href: "https://x.com/yhezkieldio",
    },
    {
        label: "Email",
        handle: "yehezkieldio@proton.me",
        href: "mailto:yehezkieldio@proton.me",
    },
];

export function ContactStrip() {
    const signalBars = Array.from({ length: 12 }, (_, value) => value);

    return (
        <section className="relative overflow-x-clip py-24 md:py-56">
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute"
                    style={{
                        background:
                            "linear-gradient(180deg, hsl(var(--void) / 0.04) 0%, transparent 24%, transparent 82%, hsl(var(--void) / 0.06) 100%)",
                        bottom: 0,
                        left: "50%",
                        top: 0,
                        transform: "translateX(-50%)",
                        width: "var(--viewport-width)",
                    }}
                />
            </div>

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute"
                    style={{
                        background:
                            "linear-gradient(180deg, hsl(var(--background) / 0.06) 0%, hsl(var(--background) / 0.02) 48%, transparent 100%)",
                        height: "12rem",
                        left: "50%",
                        top: 0,
                        transform: "translateX(-50%)",
                        width: "var(--viewport-width)",
                    }}
                />
                <div
                    className="absolute"
                    style={{
                        background:
                            "linear-gradient(0deg, hsl(var(--void) / 0.06) 0%, hsl(var(--void) / 0.02) 48%, transparent 100%)",
                        bottom: 0,
                        height: "12rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "var(--viewport-width)",
                    }}
                />
            </div>

            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(180deg, hsl(var(--background) / 0.12) 0%, hsl(var(--background) / 0.05) 52%, transparent 100%)",
                    height: "8rem",
                    left: "50%",
                    top: "-6rem",
                    transform: "translateX(-50%)",
                    width: "var(--viewport-width)",
                }}
            />
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "linear-gradient(0deg, hsl(var(--void) / 0.18) 0%, hsl(var(--void) / 0.08) 56%, transparent 100%)",
                    bottom: "-6rem",
                    height: "9rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "var(--viewport-width)",
                }}
            />

            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                preserveAspectRatio="none"
                style={{ height: "100%", opacity: 0.02, width: "100%" }}
            >
                <ellipse cx="50%" cy="50%" fill="none" rx="35%" ry="45%" stroke="white" strokeWidth="0.5" />
                <ellipse cx="50%" cy="50%" fill="none" rx="45%" ry="35%" stroke="white" strokeWidth="0.3" />
            </svg>

            <SectionAtmosphere className="z-0" variant="contact" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="relative mb-16 text-center md:mb-24">
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="h-40 w-40 animate-ping rounded-full border border-white/3"
                            style={{ animationDuration: "4s" }}
                        />
                        <div
                            className="absolute inset-6 animate-ping rounded-full border border-white/5"
                            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
                        />
                        <div
                            className="absolute inset-12 animate-ping rounded-full border border-primary/10"
                            style={{ animationDelay: "1s", animationDuration: "2.5s" }}
                        />
                    </div>

                    <div className="relative">
                        <div className="pointer-events-none absolute top-1/2 right-0 left-0 h-px -translate-y-1/2">
                            <div className="h-full w-full bg-linear-to-r from-white/8 via-transparent to-white/8" />
                        </div>

                        <div
                            className="mb-6 flex items-center justify-center gap-3"
                            data-reveal=""
                            style={{ "--reveal-delay": "60ms" } as CSSProperties}
                        >
                            <div className="h-px w-12 bg-linear-to-r from-transparent to-white/12" />
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 animate-pulse rounded-full bg-primary/40" />
                                <span className="font-mono text-[8px] text-primary/50 tracking-[0.3em]">
                                    UPLINK ACTIVE
                                </span>
                                <div className="h-1 w-1 animate-pulse rounded-full bg-primary/40" />
                            </div>
                            <div className="h-px w-12 bg-linear-to-l from-transparent to-white/12" />
                        </div>

                        <h2
                            className="font-bold font-display text-4xl text-foreground uppercase tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
                            data-reveal=""
                            style={{ "--reveal-delay": "120ms" } as CSSProperties}
                        >
                            <span>Let&apos;s get in </span>
                            <span className="text-gradient-crimson">touch</span>
                        </h2>

                        <p
                            className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground text-sm leading-7"
                            data-reveal=""
                            style={{ "--reveal-delay": "180ms" } as CSSProperties}
                        >
                            Currently open to new opportunities and collaborations. I am not quite active on social
                            media, but I check my messages regularly and would love to hear from you.
                        </p>

                        <div
                            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                            data-reveal=""
                            style={{ "--reveal-delay": "220ms" } as CSSProperties}
                        >
                            <a
                                className="system-button w-full justify-between sm:w-auto sm:min-w-56"
                                href="mailto:hello@yehezkiel.dev"
                            >
                                Email me
                                <ArrowUpRightIcon className="h-4 w-4" />
                            </a>
                            <a
                                className="system-button-secondary w-full justify-between sm:w-auto sm:min-w-52"
                                href="https://www.linkedin.com/in/yehezkieldio"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                                <ArrowUpRightIcon className="h-4 w-4" />
                            </a>
                        </div>

                        <div
                            className="mt-4 flex items-center justify-center gap-1"
                            data-reveal=""
                            style={{ "--reveal-delay": "260ms" } as CSSProperties}
                        >
                            {signalBars.map((value) => (
                                <div
                                    className="w-0.5 animate-pulse bg-white/15"
                                    key={`frequency-${value}`}
                                    style={{
                                        animationDelay: `${value * 0.1}s`,
                                        height: `${6 + Math.sin(value * 0.8) * 4}px`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-px bg-border/30 sm:grid-cols-2 md:grid-cols-4">
                    {socials.map((social, index) => {
                        const Icon = socialIconMap[social.label as keyof typeof socialIconMap] ?? MessageSquareIcon;

                        return (
                            <a
                                className="interactive-card group relative bg-background p-6 hover:bg-card/10 md:p-10"
                                data-reveal=""
                                href={social.href}
                                key={social.label}
                                rel="noopener noreferrer"
                                style={{ "--reveal-delay": `${320 + index * 80}ms` } as CSSProperties}
                                target="_blank"
                            >
                                <div className="absolute top-3 left-3 h-2 w-2 border-muted-foreground/10 border-t border-l transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:border-primary/60" />
                                <div className="absolute top-3 right-3 h-2 w-2 border-muted-foreground/10 border-t border-r transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:border-primary/60" />
                                <div className="absolute bottom-3 left-3 h-2 w-2 border-muted-foreground/10 border-b border-l transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:border-secondary/60" />
                                <div className="absolute right-3 bottom-3 h-2 w-2 border-muted-foreground/10 border-r border-b transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:border-secondary/60" />

                                <Icon className="mb-5 h-7 w-7 text-muted-foreground/50 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />

                                <div className="mb-1 font-display font-semibold text-foreground text-lg tracking-tight transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary">
                                    {social.label}
                                </div>

                                <div className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.05em] transition-colors duration-300 group-hover:text-muted-foreground/60">
                                    {social.handle}
                                </div>

                                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-secondary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                <div className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-linear-to-r from-primary/80 to-secondary/60 transition-transform duration-500 group-hover:scale-x-100" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
