import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type ExternalLink = {
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
};

type ExternalLinkListProps = {
    links: readonly ExternalLink[];
};

export function ExternalLinkList({ links }: ExternalLinkListProps) {
    return (
        <ul className="grid gap-2 min-[420px]:grid-cols-2 min-[640px]:grid-cols-4">
            {links.map((link, index) => (
                <li key={link.href}>
                    <a
                        className="group relative flex min-h-12 items-center gap-2 overflow-hidden border border-border/70 px-2.5 py-2 text-muted-foreground text-sm transition-[border-color,background-color,color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/35 hover:bg-foreground/[0.035] hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/70 active:translate-y-0"
                        href={link.href}
                        rel="noopener noreferrer"
                        style={{ animationDelay: `${index * 70}ms` }}
                        target="_blank"
                    >
                        <span className="grid size-6 shrink-0 place-items-center rounded-sm bg-foreground/[0.035] transition-transform duration-300 ease-out group-hover:scale-105">
                            <link.icon aria-hidden="true" className="size-4" />
                        </span>
                        <span className="min-w-0 flex-1 truncate">{link.label}</span>
                        <ExternalLinkIcon
                            aria-hidden="true"
                            className="size-3.5 shrink-0 opacity-35 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80"
                            strokeWidth={1.75}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
