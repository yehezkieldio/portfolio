const backgroundLayers = [
    "fluff-base",
    "fluff-stars fluff-stars-a",
    "fluff-stars fluff-stars-b",
    "fluff-orbit fluff-orbit-a",
    "fluff-orbit fluff-orbit-b",
    "fluff-panel fluff-panel-left",
    "fluff-panel fluff-panel-right",
    "fluff-scanline",
    "fluff-cross fluff-cross-a",
    "fluff-cross fluff-cross-b",
    "fluff-cross fluff-cross-c",
] as const;

export function SiteBackground() {
    return (
        <div aria-hidden="true" className="portfolio-fluff">
            {backgroundLayers.map((className) => (
                <div className={className} key={className} />
            ))}
            <div className="fluff-constellation">
                <span />
                <span />
                <span />
            </div>
            <div className="fluff-grain" />
        </div>
    );
}
