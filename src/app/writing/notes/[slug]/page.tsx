import { notFound } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { getNote, getNotes } from "#/lib/notes";

type NotePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getNotes().map((note) => ({ slug: note.slug }));
}

export default async function NotePage({ params }: NotePageProps) {
    const { slug } = await params;
    const note = getNote(slug);

    if (!note) {
        notFound();
    }

    const Body = note.body;

    return (
        <article className="space-y-9">
            <header className="project-row-enter space-y-3 border-border border-b pb-8">
                {note.date ? <p className="font-mono text-muted-foreground text-xs">{note.date}</p> : null}
                <h1 className="font-semibold text-2xl leading-tight">{note.title}</h1>
                {note.description ? (
                    <p className="max-w-xl text-muted-foreground/95 leading-7">{note.description}</p>
                ) : null}
                {note.tags.length > 0 ? (
                    <p className="font-mono text-[11px] text-muted-foreground/70">
                        {note.tags.slice(0, 5).join(" / ")}
                    </p>
                ) : null}
            </header>

            <div className="project-note project-row-enter space-y-5" style={{ animationDelay: "55ms" }}>
                <Body components={noteComponents} />
            </div>
        </article>
    );
}

const noteComponents = {
    a: NoteLink,
    blockquote: NoteBlockquote,
    code: NoteCode,
    h1: NoteH1,
    h2: NoteH2,
    h3: NoteH3,
    h4: NoteH4,
    h5: NoteH5,
    h6: NoteH6,
    hr: NoteDivider,
    li: NoteListItem,
    ol: NoteOrderedList,
    p: NoteParagraph,
    pre: NotePre,
    strong: NoteStrong,
    table: NoteTable,
    tbody: NoteTableBody,
    td: NoteTableCell,
    th: NoteTableHeadCell,
    thead: NoteTableHead,
    ul: NoteUnorderedList,
};

function NoteH1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
    return (
        <h1 className="font-semibold text-2xl leading-tight [&:not(:first-child)]:mt-12" {...props}>
            {children}
        </h1>
    );
}

function NoteH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
    return (
        <h2
            className="border-border border-t pt-7 font-semibold text-xl leading-tight [&:not(:first-child)]:mt-12"
            {...props}
        >
            {children}
        </h2>
    );
}

function NoteH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
    return (
        <h3 className="font-medium text-base leading-tight [&:not(:first-child)]:mt-9" {...props}>
            {children}
        </h3>
    );
}

function NoteH4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
    return (
        <h4 className="font-medium text-sm leading-tight [&:not(:first-child)]:mt-8" {...props}>
            {children}
        </h4>
    );
}

function NoteH5({ children, ...props }: ComponentPropsWithoutRef<"h5">) {
    return (
        <h5
            className="font-mono font-normal text-muted-foreground text-xs uppercase [&:not(:first-child)]:mt-7"
            {...props}
        >
            {children}
        </h5>
    );
}

function NoteH6({ children, ...props }: ComponentPropsWithoutRef<"h6">) {
    return (
        <h6
            className="font-mono font-normal text-[11px] text-muted-foreground/70 uppercase [&:not(:first-child)]:mt-6"
            {...props}
        >
            {children}
        </h6>
    );
}

function NoteParagraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
    return (
        <p className="max-w-2xl text-muted-foreground text-sm leading-7" {...props}>
            {children}
        </p>
    );
}

function NoteLink({ children, ...props }: ComponentPropsWithoutRef<"a">) {
    return (
        <a className="motion-link text-foreground underline decoration-border" {...props}>
            {children}
        </a>
    );
}

function NoteStrong({ children, ...props }: ComponentPropsWithoutRef<"strong">) {
    return (
        <strong className="font-medium text-foreground" {...props}>
            {children}
        </strong>
    );
}

function NoteUnorderedList({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
    return (
        <ul
            className="max-w-2xl list-disc space-y-2 pl-5 text-muted-foreground text-sm leading-7 marker:text-muted-foreground/55"
            {...props}
        >
            {children}
        </ul>
    );
}

function NoteOrderedList({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
    return (
        <ol
            className="max-w-2xl list-decimal space-y-2 pl-5 text-muted-foreground text-sm leading-7 marker:font-mono marker:text-[11px] marker:text-muted-foreground/55"
            {...props}
        >
            {children}
        </ol>
    );
}

function NoteListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
    return (
        <li className="pl-1 [&>ol]:mt-2 [&>ol]:space-y-1.5 [&>ul]:mt-2 [&>ul]:space-y-1.5 [&>ul]:pl-4" {...props}>
            {children}
        </li>
    );
}

function NoteBlockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className="max-w-2xl border-border border-l pl-4 text-muted-foreground text-sm leading-7"
            {...props}
        >
            {children}
        </blockquote>
    );
}

function NoteCode({ children, ...props }: ComponentPropsWithoutRef<"code">) {
    return (
        <code
            className="border border-border/70 bg-foreground/[0.035] px-1 py-0.5 font-mono text-[0.85em] text-foreground"
            {...props}
        >
            {children}
        </code>
    );
}

function NotePre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
    return (
        <pre
            className="max-w-full overflow-x-auto border border-border/80 bg-foreground/[0.025] p-4 font-mono text-muted-foreground text-xs leading-6"
            {...props}
        >
            {children}
        </pre>
    );
}

function NoteDivider(props: ComponentPropsWithoutRef<"hr">) {
    return <hr className="border-border" {...props} />;
}

function NoteTable({ children, ...props }: ComponentPropsWithoutRef<"table">) {
    return (
        <div className="max-w-full overflow-x-auto border border-border/70">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm" {...props}>
                {children}
            </table>
        </div>
    );
}

function NoteTableHead({ children, ...props }: ComponentPropsWithoutRef<"thead">) {
    return (
        <thead className="border-border border-b bg-foreground/[0.035]" {...props}>
            {children}
        </thead>
    );
}

function NoteTableBody({ children, ...props }: ComponentPropsWithoutRef<"tbody">) {
    return (
        <tbody className="divide-y divide-border/70" {...props}>
            {children}
        </tbody>
    );
}

function NoteTableHeadCell({ children, ...props }: ComponentPropsWithoutRef<"th">) {
    return (
        <th className="px-3 py-2 font-mono font-normal text-[11px] text-muted-foreground uppercase" {...props}>
            {children}
        </th>
    );
}

function NoteTableCell({ children, ...props }: ComponentPropsWithoutRef<"td">) {
    return (
        <td className="px-3 py-2 text-muted-foreground" {...props}>
            {children}
        </td>
    );
}
