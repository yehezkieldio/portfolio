import { notFound } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { getProject, getProjects } from "#/lib/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjects()
        .filter((project) => project.hasNote)
        .map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    const Body = project.body;

    return (
        <article className="space-y-10">
            <header className="space-y-4 border-border border-b pb-8">
                <h1 className="font-semibold text-2xl leading-tight">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-foreground">
                    <project.Icon aria-hidden="true" className="h-5 w-5 opacity-80" />
                    <span className="font-mono text-xs">{project.year}</span>
                    {project.tags.length > 0 ? (
                        <span className="font-mono text-[11px] text-muted-foreground/70">
                            {project.tags.slice(0, 5).join(" / ")}
                        </span>
                    ) : null}
                </div>
                <p className="max-w-xl text-muted-foreground/95 leading-7">{project.description}</p>
            </header>

            <div className="project-note max-w-none">
                <Body components={projectNoteComponents} />
            </div>
        </article>
    );
}

const projectNoteComponents = {
    a: ProjectNoteLink,
    blockquote: ProjectNoteBlockquote,
    code: ProjectNoteCode,
    h1: ProjectNoteH1,
    h2: ProjectNoteH2,
    h3: ProjectNoteH3,
    hr: ProjectNoteDivider,
    li: ProjectNoteListItem,
    ol: ProjectNoteOrderedList,
    p: ProjectNoteParagraph,
    pre: ProjectNotePre,
    strong: ProjectNoteStrong,
    table: ProjectNoteTable,
    tbody: ProjectNoteTableBody,
    td: ProjectNoteTableCell,
    th: ProjectNoteTableHeadCell,
    thead: ProjectNoteTableHead,
    ul: ProjectNoteUnorderedList,
};

function ProjectNoteH1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
    return (
        <h1 className="mt-12 font-semibold text-2xl leading-tight first:mt-0" {...props}>
            {children}
        </h1>
    );
}

function ProjectNoteH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
    return (
        <h2 className="mt-11 border-border border-t pt-7 font-semibold text-xl leading-tight first:mt-0" {...props}>
            {children}
        </h2>
    );
}

function ProjectNoteH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
    return (
        <h3 className="mt-8 font-medium text-base leading-tight" {...props}>
            {children}
        </h3>
    );
}

function ProjectNoteParagraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
    return (
        <p className="mt-4 max-w-2xl text-muted-foreground text-sm leading-7 first:mt-0" {...props}>
            {children}
        </p>
    );
}

function ProjectNoteLink({ children, ...props }: ComponentPropsWithoutRef<"a">) {
    return (
        <a
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            {...props}
        >
            {children}
        </a>
    );
}

function ProjectNoteStrong({ children, ...props }: ComponentPropsWithoutRef<"strong">) {
    return (
        <strong className="font-medium text-foreground" {...props}>
            {children}
        </strong>
    );
}

function ProjectNoteUnorderedList({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
    return (
        <ul className="mt-4 ml-4 max-w-2xl list-disc space-y-2 text-muted-foreground text-sm leading-7" {...props}>
            {children}
        </ul>
    );
}

function ProjectNoteOrderedList({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
    return (
        <ol className="mt-4 ml-4 max-w-2xl list-decimal space-y-2 text-muted-foreground text-sm leading-7" {...props}>
            {children}
        </ol>
    );
}

function ProjectNoteListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
    return (
        <li className="pl-1 marker:text-muted-foreground/60" {...props}>
            {children}
        </li>
    );
}

function ProjectNoteBlockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className="mt-6 max-w-2xl border-border border-l pl-4 text-muted-foreground text-sm leading-7"
            {...props}
        >
            {children}
        </blockquote>
    );
}

function ProjectNoteCode({ children, ...props }: ComponentPropsWithoutRef<"code">) {
    return (
        <code
            className="border border-border/70 bg-foreground/[0.035] px-1 py-0.5 font-mono text-[0.85em] text-foreground"
            {...props}
        >
            {children}
        </code>
    );
}

function ProjectNotePre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
    return (
        <pre
            className="mt-5 max-w-full overflow-x-auto border border-border/80 bg-foreground/[0.025] p-4 font-mono text-muted-foreground text-xs leading-6"
            {...props}
        >
            {children}
        </pre>
    );
}

function ProjectNoteDivider(props: ComponentPropsWithoutRef<"hr">) {
    return <hr className="my-9 border-border" {...props} />;
}

function ProjectNoteTable({ children, ...props }: ComponentPropsWithoutRef<"table">) {
    return (
        <div className="mt-6 max-w-full overflow-x-auto border border-border/70">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm" {...props}>
                {children}
            </table>
        </div>
    );
}

function ProjectNoteTableHead({ children, ...props }: ComponentPropsWithoutRef<"thead">) {
    return (
        <thead className="border-border border-b bg-foreground/[0.035]" {...props}>
            {children}
        </thead>
    );
}

function ProjectNoteTableBody({ children, ...props }: ComponentPropsWithoutRef<"tbody">) {
    return (
        <tbody className="divide-y divide-border/70" {...props}>
            {children}
        </tbody>
    );
}

function ProjectNoteTableHeadCell({ children, ...props }: ComponentPropsWithoutRef<"th">) {
    return (
        <th className="px-3 py-2 font-mono font-normal text-[11px] text-muted-foreground uppercase" {...props}>
            {children}
        </th>
    );
}

function ProjectNoteTableCell({ children, ...props }: ComponentPropsWithoutRef<"td">) {
    return (
        <td className="px-3 py-2 text-muted-foreground" {...props}>
            {children}
        </td>
    );
}
