const backgroundLayers = [
    "ambient-base",
    "ambient-stars ambient-stars-a",
    "ambient-stars ambient-stars-b",
    "ambient-panel ambient-panel-left",
    "ambient-panel ambient-panel-right",
    "ambient-scanline",
    "ambient-diamond ambient-diamond-a",
    "ambient-diamond ambient-diamond-b",
    "ambient-star ambient-star-a",
    "ambient-star ambient-star-b",
    "ambient-star ambient-star-c",
    "ambient-star ambient-star-d",
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
