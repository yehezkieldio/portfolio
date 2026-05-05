"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { createElement } from "react";
import type { ProjectIconNode, ProjectIconTree } from "#/lib/projects";
import type { ProjectListItem } from "./project-types";

type ProjectListProps = {
    projects: ProjectListItem[];
};

export function ProjectList({ projects }: ProjectListProps) {
    if (projects.length === 0) {
        return (
            <p className="border-border border-b py-8 text-muted-foreground text-sm">No projects match that search.</p>
        );
    }

    return projects.map((project, index) => <ProjectRow key={project.slug} project={project} revealIndex={index} />);
}

function ProjectRow({ project, revealIndex }: { project: ProjectListItem; revealIndex: number }) {
    return (
        <article
            className="project-row-enter group space-y-2 border-border border-b py-6 transition-colors sm:py-7"
            style={{ animationDelay: `${revealIndex * 90}ms` }}
        >
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <div className="flex min-w-0 items-center gap-2.5">
                    <ProjectIconGroup icons={project.iconTrees} />
                    <h2 className="min-w-0 font-medium text-sm leading-tight">
                        <ProjectTitle project={project} />
                    </h2>
                </div>
                <p className="font-mono text-muted-foreground text-xs">{project.year}</p>
            </div>

            <p className="max-w-xl text-muted-foreground text-sm leading-6">{project.description}</p>

            <ProjectTags tags={project.tags} />

            <ProjectLinks project={project} />
        </article>
    );
}

function ProjectIconGroup({ icons }: { icons: ProjectIconTree[] }) {
    if (icons.length === 0) {
        return null;
    }

    return (
        <span className="flex shrink-0 flex-row-reverse justify-end sm:flex-row">
            {icons.slice(0, 4).map((icon, index) => (
                <span
                    className="-ml-1.5 grid size-5 place-items-center border border-background bg-background first:ml-0 sm:-ml-1 sm:first:ml-0"
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

function ProjectTitle({ project }: { project: ProjectListItem }) {
    if (project.hasNote) {
        return (
            <Link
                className="hover:text-muted-foreground"
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
            >
                {project.title}
            </Link>
        );
    }

    const href = project.links[0]?.href;

    if (!href) {
        return project.title;
    }

    return (
        <a className="hover:text-muted-foreground" href={href} rel="noopener noreferrer" target="_blank">
            {project.title}
        </a>
    );
}

function ProjectLinks({ project }: { project: ProjectListItem }) {
    return (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
            {project.hasNote ? (
                <Link
                    className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    href={`/projects/${project.slug}`}
                    transitionTypes={["nav-forward"]}
                >
                    read note
                </Link>
            ) : null}
            {project.links.map((link) => (
                <a
                    className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    href={link.href}
                    key={`${link.kind}:${link.href}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {link.label}
                </a>
            ))}
        </p>
    );
}

function ProjectTags({ tags }: { tags: string[] }) {
    if (tags.length === 0) {
        return null;
    }

    return <p className="font-mono text-[11px] text-muted-foreground/70">{tags.slice(0, 5).join(" / ")}</p>;
}
