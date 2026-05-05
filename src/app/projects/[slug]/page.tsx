import { notFound } from "next/navigation";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { createElement } from "react";
import type { ProjectIconNode, ProjectIconTree } from "#/lib/projects";
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
        <article className="space-y-9">
            <header className="project-row-enter space-y-3 border-border border-b pb-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <ProjectIconGroup icons={project.iconTrees} />
                    <p className="font-mono text-muted-foreground text-xs">{project.year}</p>
                </div>
                <h1 className="font-semibold text-2xl leading-tight">{project.title}</h1>
                <p className="max-w-xl text-muted-foreground/95 leading-7">{project.description}</p>
                {project.tags.length > 0 ? (
                    <p className="font-mono text-[11px] text-muted-foreground/70">
                        {project.tags.slice(0, 5).join(" / ")}
                    </p>
                ) : null}
            </header>

            <div className="project-note project-row-enter space-y-5" style={{ animationDelay: "55ms" }}>
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
    h4: ProjectNoteH4,
    h5: ProjectNoteH5,
    h6: ProjectNoteH6,
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

function ProjectIconGroup({ icons }: { icons: ProjectIconTree[] }) {
    if (icons.length === 0) {
        return null;
    }

    return (
        <span className="flex shrink-0 flex-row-reverse justify-end sm:flex-row">
            {icons.slice(0, 5).map((icon, index) => (
                <span
                    className="-ml-1.5 grid size-6 place-items-center border border-background bg-background first:ml-0 sm:-ml-1 sm:first:ml-0"
                    key={index}
                    style={{ zIndex: icons.length - index }}
                >
                    {renderIconTree(icon)}
                </span>
            ))}
        </span>
    );
}

function renderIconTree(tree: ProjectIconTree): ReactNode {
    if (typeof tree === "string") {
        return tree;
    }

    return createElement(
        tree.type,
        tree.props,
        ...tree.children.map((child, index) =>
            typeof child === "string" ? child : createElement(IconTreeFragment, { key: index, node: child })
        )
    );
}

function IconTreeFragment({ node }: { node: ProjectIconNode }): ReactNode {
    return renderIconTree(node);
}

function ProjectNoteH1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
    return (
        <h1 className="font-semibold text-2xl leading-tight [&:not(:first-child)]:mt-12" {...props}>
            {children}
        </h1>
    );
}

function ProjectNoteH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
    return (
        <h2
            className="border-border border-t pt-7 font-semibold text-xl leading-tight [&:not(:first-child)]:mt-12"
            {...props}
        >
            {children}
        </h2>
    );
}

function ProjectNoteH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
    return (
        <h3 className="font-medium text-base leading-tight [&:not(:first-child)]:mt-9" {...props}>
            {children}
        </h3>
    );
}

function ProjectNoteH4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
    return (
        <h4 className="font-medium text-sm leading-tight [&:not(:first-child)]:mt-8" {...props}>
            {children}
        </h4>
    );
}

function ProjectNoteH5({ children, ...props }: ComponentPropsWithoutRef<"h5">) {
    return (
        <h5
            className="font-mono font-normal text-muted-foreground text-xs uppercase [&:not(:first-child)]:mt-7"
            {...props}
        >
            {children}
        </h5>
    );
}

function ProjectNoteH6({ children, ...props }: ComponentPropsWithoutRef<"h6">) {
    return (
        <h6
            className="font-mono font-normal text-[11px] text-muted-foreground/70 uppercase [&:not(:first-child)]:mt-6"
            {...props}
        >
            {children}
        </h6>
    );
}

function ProjectNoteParagraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
    return (
        <p className="max-w-2xl text-muted-foreground text-sm leading-7" {...props}>
            {children}
        </p>
    );
}

function ProjectNoteLink({ children, ...props }: ComponentPropsWithoutRef<"a">) {
    return (
        <a className="motion-link text-foreground underline decoration-border" {...props}>
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
        <ul
            className="max-w-2xl list-disc space-y-2 pl-5 text-muted-foreground text-sm leading-7 marker:text-muted-foreground/55"
            {...props}
        >
            {children}
        </ul>
    );
}

function ProjectNoteOrderedList({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
    return (
        <ol
            className="max-w-2xl list-decimal space-y-2 pl-5 text-muted-foreground text-sm leading-7 marker:font-mono marker:text-[11px] marker:text-muted-foreground/55"
            {...props}
        >
            {children}
        </ol>
    );
}

function ProjectNoteListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
    return (
        <li className="pl-1 [&>ol]:mt-2 [&>ol]:space-y-1.5 [&>ul]:mt-2 [&>ul]:space-y-1.5 [&>ul]:pl-4" {...props}>
            {children}
        </li>
    );
}

function ProjectNoteBlockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className="max-w-2xl border-border border-l pl-4 text-muted-foreground text-sm leading-7"
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
            className="max-w-full overflow-x-auto border border-border/80 bg-foreground/[0.025] p-4 font-mono text-muted-foreground text-xs leading-6"
            {...props}
        >
            {children}
        </pre>
    );
}

function ProjectNoteDivider(props: ComponentPropsWithoutRef<"hr">) {
    return <hr className="border-border" {...props} />;
}

function ProjectNoteTable({ children, ...props }: ComponentPropsWithoutRef<"table">) {
    return (
        <div className="max-w-full overflow-x-auto border border-border/70">
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
