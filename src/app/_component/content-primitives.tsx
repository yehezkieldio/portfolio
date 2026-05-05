import Link from "next/link";
import type { ReactNode } from "react";

type PageSectionProps = {
    children: ReactNode;
};

type PageHeaderProps = {
    children?: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    title: string;
    withRule?: boolean;
};

type ContentListProps = {
    children: ReactNode;
    empty?: ReactNode;
    isEmpty?: boolean;
    withTopRule?: boolean;
};

type ContentRowProps = {
    children: ReactNode;
    delayIndex?: number;
    withRule?: boolean;
};

type ContentTitleLinkProps = {
    children: ReactNode;
    href: string;
    isExternal?: boolean;
};

export function PageSection({ children }: PageSectionProps) {
    return <section className="space-y-8">{children}</section>;
}

export function PageHeader({ children, description, meta, title, withRule = false }: PageHeaderProps) {
    return (
        <header className={`project-row-enter space-y-3${withRule ? "border-border border-b pb-8" : ""}`}>
            {meta}
            <h1 className="font-semibold text-2xl leading-tight">{title}</h1>
            {description ? <p className="max-w-xl text-muted-foreground/95 leading-7">{description}</p> : null}
            {children}
        </header>
    );
}

export function ContentList({ children, empty, isEmpty = false, withTopRule = false }: ContentListProps) {
    if (isEmpty) {
        return empty ?? null;
    }

    return <div className={withTopRule ? "space-y-7 border-border border-t pt-6" : undefined}>{children}</div>;
}

export function ContentRow({ children, delayIndex = 0, withRule = true }: ContentRowProps) {
    return (
        <article
            className={`project-row-enter motion-row space-y-2 transition-[transform] duration-200 ease-(--ease-ui)${
                withRule ? "border-border border-b py-6 sm:py-7" : ""
            }`}
            style={{ animationDelay: `${delayIndex * 45}ms` }}
        >
            {children}
        </article>
    );
}

export function ContentTitleLink({ children, href, isExternal = false }: ContentTitleLinkProps) {
    if (isExternal) {
        return (
            <a className="motion-link motion-title-link" href={href} rel="noopener noreferrer" target="_blank">
                {children}
            </a>
        );
    }

    return (
        <Link className="motion-link motion-title-link" href={href} transitionTypes={["nav-forward"]}>
            {children}
        </Link>
    );
}

export function ContentMeta({ children }: { children: ReactNode }) {
    return <p className="font-mono text-muted-foreground text-xs">{children}</p>;
}

export function ContentTags({ tags, limit = 5 }: { tags: string[]; limit?: number }) {
    if (tags.length === 0) {
        return null;
    }

    return <p className="font-mono text-[11px] text-muted-foreground/70">{tags.slice(0, limit).join(" / ")}</p>;
}

export function EmptyLine({ children }: { children: ReactNode }) {
    return <p className="border-border border-b py-8 text-muted-foreground text-sm">{children}</p>;
}
