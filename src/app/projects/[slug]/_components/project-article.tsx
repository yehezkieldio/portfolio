import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { createElement } from "react";
import { ContentTags } from "#/app/_component/content-primitives";
import { MdxBody, mdxComponents } from "#/app/_component/mdx-content";
import type { getProject, ProjectIconNode, ProjectIconTree } from "#/lib/projects";

type Project = NonNullable<ReturnType<typeof getProject>>;

type ProjectArticleProps = {
    project: Project;
};

export function ProjectArticle({ project }: ProjectArticleProps) {
    const Body = project.body;

    return (
        <article className="space-y-10 sm:space-y-12">
            <ProjectArticleHeader
                description={project.description}
                icons={project.iconTrees}
                links={project.links}
                tags={project.tags}
                title={project.title}
                year={project.year}
            />

            <MdxBody>
                <Body components={mdxComponents} />
            </MdxBody>
        </article>
    );
}

type ProjectArticleHeaderProps = {
    description?: ReactNode;
    icons: ProjectIconTree[];
    links: {
        href: string;
        label: string;
    }[];
    tags: string[];
    title: string;
    year: string;
};

function ProjectArticleHeader({ description, icons, links, tags, title, year }: ProjectArticleHeaderProps) {
    return (
        <header className="project-row-enter border-border border-b pb-8 sm:pb-10">
            <Link
                className="motion-link inline-flex items-center gap-2 font-mono text-muted-foreground/75 text-xs"
                href="/projects"
                transitionTypes={["nav-back"]}
            >
                <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                projects
            </Link>

            <div className="mt-7">
                <ProjectIconGroup icons={icons} />
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1.5 sm:gap-y-1">
                <h1 className="text-balance font-semibold text-[1.75rem] leading-[1.08] tracking-normal sm:text-4xl sm:leading-[1.05]">
                    {title}
                </h1>
                <p className="font-mono text-[11px] text-muted-foreground/70 leading-none tracking-normal sm:text-xs">
                    {year}
                </p>
            </div>

            {description ? (
                <p className="mt-5 max-w-[70ch] text-pretty text-[13.5px] text-muted-foreground/90 leading-[1.6] tracking-normal sm:text-sm sm:leading-7">
                    {description}
                </p>
            ) : null}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <ContentTags tags={tags} />
                <ProjectHeaderLinks links={links} />
            </div>
        </header>
    );
}

function ProjectHeaderLinks({ links }: { links: ProjectArticleHeaderProps["links"] }) {
    if (links.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs">
            {links.map((link) => (
                <a
                    className="motion-link inline-flex items-center gap-1.5 text-muted-foreground/80 hover:text-foreground"
                    href={link.href}
                    key={`${link.label}:${link.href}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {link.label}
                    <ExternalLink aria-hidden="true" className="size-3" strokeWidth={1.75} />
                </a>
            ))}
        </div>
    );
}

function ProjectIconGroup({ icons }: { icons: ProjectIconTree[] }) {
    if (icons.length === 0) {
        return null;
    }

    return (
        <span className="flex flex-wrap items-center gap-2">
            {icons.slice(0, 5).map((icon, index) => (
                <span className="grid size-6 place-items-center text-muted-foreground/80 grayscale" key={index}>
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
