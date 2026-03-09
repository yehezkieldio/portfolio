import { DustTexture } from "./dust-texture";
import { OrbitalOverlay } from "./orbital-overlay";
import { SpectralBackground } from "./spectral-background";

export function AmbientBackdrop() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
            <div className="absolute inset-0 bg-background" />
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    background:
                        "radial-gradient(circle at 14% 18%, hsla(4, 100%, 60%, 0.18) 0%, transparent 32%), radial-gradient(circle at 84% 12%, hsla(263, 70%, 58%, 0.16) 0%, transparent 28%), radial-gradient(circle at 48% 62%, hsla(4, 100%, 60%, 0.08) 0%, transparent 30%), linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(0 0% 2%) 48%, hsl(0 0% 1%) 100%)",
                }}
            />

            <SpectralBackground />
            <OrbitalOverlay />
            <DustTexture />

            <div className="film-grain absolute inset-0" />

            <div className="light-leak light-leak-crimson top-[10vh] -left-[12vw] h-112 w-md" />
            <div className="light-leak light-leak-ultraviolet top-[8vh] -right-[8vw] h-96 w-[24rem]" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="absolute inset-x-0 top-[18vh] h-px bg-white/6" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/3" />
            <div className="absolute inset-y-0 left-6 hidden w-px bg-linear-to-b from-white/12 via-white/3 to-white/12 md:block" />
            <div className="absolute inset-y-0 right-6 hidden w-px bg-linear-to-brom-white/12 via-white/3 to-white/12 md:block" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background via-background/70 to-transparent" />
        </div>
    );
}
