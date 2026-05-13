import { SectionNav } from "./section-nav";

const navLinks = [
    { label: "about", href: "/", active: "exact" as const },
    { label: "projects", href: "/projects" },
    { label: "writing", href: "/writing" },
];

export function SiteNav() {
    return <SectionNav ariaLabel="Primary navigation" indicatorName="nav-active-indicator" links={navLinks} />;
}
