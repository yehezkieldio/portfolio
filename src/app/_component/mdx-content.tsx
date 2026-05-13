import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "#/lib/utils";
import { ContentTags, PageHeader } from "./content-primitives";

type ArticleHeaderProps = {
    description?: ReactNode;
    meta?: ReactNode;
    tags?: string[];
    title: string;
};

export function ArticleHeader({ description, meta, tags = [], title }: ArticleHeaderProps) {
    return (
        <PageHeader description={description} meta={meta} title={title} withRule>
            <ContentTags tags={tags} />
        </PageHeader>
    );
}

export function MdxBody({ children }: { children: ReactNode }) {
    return (
        <div
            className="project-note project-row-enter min-w-0 overflow-hidden [&>*+*]:mt-4 [&>ol]:mt-2.5 [&>p+ol]:mt-1.5 [&>p+ul]:mt-1.5 [&>ul]:mt-2.5"
            style={{ animationDelay: "110ms" }}
        >
            {children}
        </div>
    );
}

export const mdxComponents = {
    a: MdxLink,
    blockquote: MdxBlockquote,
    code: MdxCode,
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    h5: MdxH5,
    h6: MdxH6,
    hr: MdxDivider,
    li: MdxListItem,
    ol: MdxOrderedList,
    p: MdxParagraph,
    pre: MdxPre,
    strong: MdxStrong,
    table: MdxTable,
    tbody: MdxTableBody,
    td: MdxTableCell,
    th: MdxTableHeadCell,
    thead: MdxTableHead,
    ul: MdxUnorderedList,
};

function MdxH1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
    return (
        <h1 className="not-first:mt-10 text-balance font-semibold text-2xl leading-tight" {...props}>
            {children}
        </h1>
    );
}

function MdxH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
    return (
        <h2 className="not-first:mt-10 text-balance font-semibold text-xl leading-tight" {...props}>
            {children}
        </h2>
    );
}

function MdxH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
    return (
        <h3 className="not-first:mt-8 text-balance font-medium text-base leading-tight" {...props}>
            {children}
        </h3>
    );
}

function MdxH4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
    return (
        <h4 className="not-first:mt-7 text-balance font-medium text-sm leading-tight" {...props}>
            {children}
        </h4>
    );
}

function MdxH5({ children, ...props }: ComponentPropsWithoutRef<"h5">) {
    return (
        <h5 className="not-first:mt-7 font-mono font-normal text-muted-foreground text-xs uppercase" {...props}>
            {children}
        </h5>
    );
}

function MdxH6({ children, ...props }: ComponentPropsWithoutRef<"h6">) {
    return (
        <h6 className="not-first:mt-6 font-mono font-normal text-[11px] text-muted-foreground/70 uppercase" {...props}>
            {children}
        </h6>
    );
}

function MdxParagraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
    return (
        <p className="wrap-anywhere max-w-[70ch] text-pretty text-muted-foreground/90 text-sm leading-7" {...props}>
            {children}
        </p>
    );
}

function MdxLink({ children, ...props }: ComponentPropsWithoutRef<"a">) {
    return (
        <a className="motion-link text-foreground underline decoration-border" {...props}>
            {children}
        </a>
    );
}

function MdxStrong({ children, ...props }: ComponentPropsWithoutRef<"strong">) {
    return (
        <strong className="font-medium text-foreground" {...props}>
            {children}
        </strong>
    );
}

function MdxUnorderedList({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
    return (
        <ul
            className="max-w-[70ch] list-disc space-y-1.5 text-pretty pl-4 text-muted-foreground/90 text-sm leading-7 marker:text-muted-foreground/55"
            {...props}
        >
            {children}
        </ul>
    );
}

function MdxOrderedList({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
    return (
        <ol
            className="max-w-[70ch] list-decimal space-y-1.5 text-pretty pl-4 text-muted-foreground/90 text-sm leading-7 marker:font-mono marker:text-[11px] marker:text-muted-foreground/55"
            {...props}
        >
            {children}
        </ol>
    );
}

function MdxListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
    return (
        <li className="[&>ol]:mt-2 [&>ol]:space-y-1.5 [&>ul]:mt-2 [&>ul]:space-y-1.5 [&>ul]:pl-4" {...props}>
            {children}
        </li>
    );
}

function MdxBlockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className="max-w-[80ch] border-border/55 border-l pl-4 text-muted-foreground/85 text-xs leading-6 [&_p]:max-w-none [&_p]:text-inherit [&_p]:text-xs [&_p]:leading-6"
            {...props}
        >
            {children}
        </blockquote>
    );
}

function MdxCode({ children, ...props }: ComponentPropsWithoutRef<"code">) {
    const { className, ...rest } = props;

    return (
        <code
            className={cn("font-mono", className ? "text-[0.92em]" : "wrap-break-word text-[0.85em] text-foreground")}
            {...rest}
        >
            {children}
        </code>
    );
}

function MdxPre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
    const { className, style, ...rest } = props;

    return (
        <div className="max-w-full overflow-hidden border border-border/80 bg-foreground/2.5">
            <pre
                className={cn(
                    "tab-2 max-w-full overflow-x-auto p-4 font-mono text-xs leading-6 sm:p-5 [&_code]:grid [&_code]:min-w-max [&_code]:break-normal [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit",
                    className
                )}
                style={style}
                {...rest}
            >
                {children}
            </pre>
        </div>
    );
}

function MdxDivider(props: ComponentPropsWithoutRef<"hr">) {
    return (
        <div className="max-w-[70ch] py-4 sm:py-4">
            <hr className="h-px border-0 bg-border/80" {...props} />
        </div>
    );
}

function MdxTable({ children, ...props }: ComponentPropsWithoutRef<"table">) {
    return (
        <div className="max-w-full overflow-x-auto border border-border/70">
            <table className="w-full min-w-136 border-collapse text-left text-sm sm:min-w-0" {...props}>
                {children}
            </table>
        </div>
    );
}

function MdxTableHead({ children, ...props }: ComponentPropsWithoutRef<"thead">) {
    return (
        <thead className="border-border border-b bg-foreground/[0.035]" {...props}>
            {children}
        </thead>
    );
}

function MdxTableBody({ children, ...props }: ComponentPropsWithoutRef<"tbody">) {
    return (
        <tbody className="divide-y divide-border/70" {...props}>
            {children}
        </tbody>
    );
}

function MdxTableHeadCell({ children, ...props }: ComponentPropsWithoutRef<"th">) {
    return (
        <th className="px-3 py-2 font-mono font-normal text-[11px] text-muted-foreground uppercase" {...props}>
            {children}
        </th>
    );
}

function MdxTableCell({ children, ...props }: ComponentPropsWithoutRef<"td">) {
    return (
        <td className="wrap-anywhere px-3 py-2 text-muted-foreground" {...props}>
            {children}
        </td>
    );
}
