import { cn } from "#/lib/utils";

const homeFrameAnchors = ["6%", "37%", "68%"] as const;

export function HomeFrameChrome() {
    return (
        <>
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 md:block">
                <div className="absolute top-0 left-0 h-[18%] w-px bg-linear-to-b from-white/14 via-white/6 to-transparent" />
                <div className="absolute top-[24%] left-0 h-[12%] w-px bg-linear-to-b from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-[44%] left-0 h-[18%] w-px bg-linear-to-b from-white/8 via-white/4 to-transparent" />
                <div className="absolute top-[72%] left-0 h-[20%] w-px bg-linear-to-b from-white/10 via-white/4 to-transparent" />
                <div className="absolute top-0 left-0 h-px w-20 bg-linear-to-r from-white/12 to-transparent" />
                {homeFrameAnchors.map((top, index) => (
                    <div className="absolute left-0 flex items-center gap-2" key={`left-anchor-${top}`} style={{ top }}>
                        <div
                            className={cn(
                                "rotate-45 border border-white/18 bg-background/80",
                                index === 1 ? "h-2.5 w-2.5 border-primary/35 bg-primary/10" : "h-2 w-2"
                            )}
                        />
                        <div
                            className={cn(
                                "h-px bg-linear-to-r to-transparent",
                                index === 1 ? "w-10 from-primary/30" : "w-6 from-white/10"
                            )}
                        />
                    </div>
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 md:block">
                <div className="absolute top-[8%] right-0 h-[14%] w-px bg-linear-to-b from-white/10 via-white/4 to-transparent" />
                <div className="absolute top-[30%] right-0 h-[18%] w-px bg-linear-to-b from-transparent via-secondary/26 to-transparent" />
                <div className="absolute top-[56%] right-0 h-[12%] w-px bg-linear-to-b from-white/10 via-white/4 to-transparent" />
                <div className="absolute top-[78%] right-0 h-[14%] w-px bg-linear-to-b from-transparent via-white/8 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-14 bg-linear-to-l from-white/8 to-transparent" />
                {homeFrameAnchors.map((top, index) => (
                    <div
                        className="absolute right-0 flex items-center gap-2"
                        key={`right-anchor-${top}`}
                        style={{ top }}
                    >
                        <div
                            className={cn(
                                "h-px bg-linear-to-l to-transparent",
                                index === 2 ? "w-12 from-secondary/28" : "w-5 from-white/10"
                            )}
                        />
                        <div className={cn("relative h-3 w-3", index === 2 ? "text-secondary/45" : "text-white/16")}>
                            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
