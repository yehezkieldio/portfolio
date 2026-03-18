import { ArrowRightIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function IdentityHeader() {
    return (
        <section className="relative flex min-h-svh items-center overflow-hidden py-8 sm:py-10 md:min-h-screen md:py-16">
            <div className="wireframe-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

            <div className="relative z-10 w-full">
                <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
                    <h1 className="relative flex-1">
                        <span
                            className="block animate-fade-up font-bold font-display text-[13vw] text-foreground uppercase leading-[0.85] tracking-[-0.04em] opacity-0 sm:text-[9vw] md:text-[7vw] lg:text-[6vw]"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span>YEHEZKIEL </span>
                            <span className="text-gradient-crimson">DIO</span>
                        </span>
                        <span
                            className="block animate-fade-up font-bold font-display text-[13vw] text-foreground uppercase leading-[0.85] tracking-[-0.04em] opacity-0 sm:text-[9vw] md:text-[7vw] lg:text-[6vw]"
                            style={{ animationDelay: "0.2s" }}
                        >
                            SINOLUNGAN
                        </span>
                    </h1>

                    <div
                        className="relative hidden shrink-0 animate-fade-up opacity-0 sm:block"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="absolute -inset-2 rounded-full bg-linear-to-br from-primary/20 via-transparent to-secondary/20 blur-md" />
                        <div className="relative">
                            <div className="absolute -top-2 -left-2 h-4 w-4 border-primary/40 border-t-2 border-l-2" />
                            <div className="absolute -top-2 right-0 h-4 w-4 border-primary/40 border-t-2 border-r-2" />
                            <div className="absolute -bottom-2 -left-2 h-4 w-4 border-secondary/40 border-b-2 border-l-2" />
                            <div className="absolute right-0 -bottom-2 h-4 w-4 border-secondary/40 border-r-2 border-b-2" />

                            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border md:h-28 md:w-28 lg:h-40 lg:w-40">
                                <Image
                                    alt="Portrait of Yehezkiel Dio Sinolungan"
                                    className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                                    fill
                                    sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
                                    src="https://avatars.githubusercontent.com/u/47420407?v=4"
                                />
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100%) 2px, hsl(0 0% 100%) 3px)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-6 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-2 opacity-0 md:mt-1"
                    style={{ animationDelay: "0.5s" }}
                >
                    <span className="h-2 w-2 animate-pulse bg-primary" />
                    <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] md:text-xs">
                        FULL-STACK SOFTWARE ENGINEER
                    </span>
                    <span className="hidden h-px w-12 bg-border md:block" />
                    <span className="hidden font-mono text-[10px] text-muted-foreground/80 md:block">
                        Based in Balikpapan, Indonesia • Open to Remote
                    </span>
                </div>

                <div
                    className="mt-10 animate-fade-up opacity-0 md:mt-16 md:ml-auto md:max-w-xl lg:max-w-2xl"
                    style={{ animationDelay: "0.6s" }}
                >
                    <p className="max-w-2xl text-muted-foreground/80 text-sm leading-relaxed md:text-base">
                        Building accessible, high-performance digital experiences. I specialize in full-stack web
                        development, with a focus on building resilient systems and scalable architectures.
                    </p>
                </div>

                <div
                    className="mt-8 flex animate-fade-up flex-col gap-3 opacity-0 sm:mt-10 sm:flex-row"
                    style={{ animationDelay: "0.7s" }}
                >
                    <Link className="system-button w-full justify-between sm:w-auto sm:min-w-60" href="/portfolio">
                        View my projects
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                    <Link
                        className="system-button-secondary w-full justify-between sm:w-auto sm:min-w-52"
                        href="https://github.com/yehezkieldio"
                        rel="noreferrer"
                        target="_blank"
                    >
                        View my GitHub
                        <SquareArrowOutUpRightIcon className="h-4 w-4" />
                    </Link>
                </div>

                <div
                    className="mt-14 flex animate-fade-up items-center gap-4 opacity-0 md:mt-24 md:gap-6"
                    style={{ animationDelay: "0.9s" }}
                >
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 bg-muted-foreground/30" />
                        <span className="font-mono text-[9px] text-muted-foreground/50 tracking-[0.15em]">
                            01 / INTRO
                        </span>
                    </div>
                    <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
                </div>
            </div>
        </section>
    );
}
