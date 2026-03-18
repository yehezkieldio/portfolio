export function AmbientBackdrop() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-svh overflow-hidden bg-background md:h-[110svh] lg:h-[120svh]"
            style={{
                contain: "paint",
                maskImage: "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
            }}
        >
            <div className="absolute inset-0 bg-background" />
            <div
                className="light-leak light-leak-crimson top-[10vh] -left-[12vw] h-112 w-md"
                style={{
                    animation: "none",
                    opacity: 0.1,
                }}
            />
            <div
                className="light-leak light-leak-ultraviolet top-[8vh] -right-[8vw] h-96 w-96"
                style={{
                    animation: "none",
                    opacity: 0.1,
                }}
            />
            <div
                className="absolute right-0 bottom-0 h-[72vh] w-[68vw] opacity-[0.028]"
                style={{
                    backgroundImage:
                        "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
                    backgroundSize: "84px 84px",
                    maskImage:
                        "linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.8) 40%, black 70%, black 100%)",
                    WebkitMaskImage:
                        "linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.8) 40%, black 70%, black 100%)",
                }}
            />
            <div
                className="absolute top-[22vh] -left-[12%] h-[44vh] w-[42vw] opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(hsl(0 0% 100% / 0.32) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.32) 1px, transparent 1px)",
                    backgroundSize: "54px 54px",
                    transform: "rotate(-11deg)",
                    transformOrigin: "center",
                    maskImage:
                        "radial-gradient(circle at 28% 42%, black 0%, black 30%, transparent 72%), linear-gradient(90deg, transparent 0%, black 22%, black 64%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at 28% 42%, black 0%, black 30%, transparent 72%), linear-gradient(90deg, transparent 0%, black 22%, black 64%, transparent 100%)",
                }}
            />
            <div className="absolute inset-y-0 left-6 hidden w-8 md:block">
                <div className="absolute top-[6%] left-0 h-[13%] w-px bg-linear-to-b from-white/12 via-white/4 to-transparent" />
                <div className="absolute top-[32%] left-0 h-[18%] w-px bg-linear-to-b from-transparent via-primary/22 to-transparent" />
                <div className="absolute top-[69%] left-0 h-[15%] w-px bg-linear-to-b from-white/10 via-white/4 to-transparent" />
                <div className="absolute top-[31%] left-0 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rotate-45 border border-primary/35 bg-primary/10" />
                    <div className="h-px w-8 bg-linear-to-r from-primary/20 to-transparent" />
                </div>
            </div>
            <div className="absolute inset-y-0 right-6 hidden w-8 md:block">
                <div className="absolute top-[12%] right-0 h-[10%] w-px bg-linear-to-b from-white/10 via-white/4 to-transparent" />
                <div className="absolute top-[48%] right-0 h-[16%] w-px bg-linear-to-b from-transparent via-secondary/22 to-transparent" />
                <div className="absolute top-[78%] right-0 h-[11%] w-px bg-linear-to-b from-white/8 via-white/3 to-transparent" />
                <div className="absolute top-[48%] right-0 flex items-center gap-2">
                    <div className="h-px w-8 bg-linear-to-l from-secondary/22 to-transparent" />
                    <div className="relative h-3 w-3 text-secondary/30">
                        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[28vh] bottom-[14vh] opacity-[0.05]"
                style={{
                    background:
                        "radial-gradient(ellipse at left center, hsla(4, 100%, 60%, 0.16), transparent 46%), radial-gradient(ellipse at right 65%, hsla(263, 70%, 58%, 0.12), transparent 40%)",
                    maskImage: "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
                }}
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background via-background/70 to-transparent" />
        </div>
    );
}
