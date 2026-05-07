const backgroundLayers = [
    "ambient-base",
    "ambient-stars ambient-stars-a",
    "ambient-stars ambient-stars-b",
    "ambient-orbit ambient-orbit-a",
    "ambient-orbit ambient-orbit-b",
    "ambient-panel ambient-panel-left",
    "ambient-scanline",
    "ambient-cross ambient-cross-a",
    "ambient-cross ambient-cross-b",
    "ambient-cross ambient-cross-c",
] as const;

export function SiteBackground() {
    return (
        <div aria-hidden="true" className="portfolio-ambient">
            {backgroundLayers.map((className) => (
                <div className={className} key={className} />
            ))}
            <div className="ambient-constellation">
                <span />
                <span />
                <span />
            </div>
            <div className="ambient-grain" />
        </div>
    );
}
