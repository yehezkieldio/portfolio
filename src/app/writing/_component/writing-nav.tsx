import { SectionNav } from "#/app/_component/section-nav";

const writingLinks = [
    { label: "writing", href: "/writing", active: "exact" as const },
    { label: "notes", href: "/writing/notes" },
];

export function WritingNav() {
    return (
        <SectionNav
            ariaLabel="Writing navigation"
            className="mb-9 gap-x-4 font-mono text-xs"
            indicatorName="writing-nav-active-indicator"
            links={writingLinks}
        />
    );
}
