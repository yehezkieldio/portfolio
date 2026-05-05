"use client";

import { ExternalLink, FileText, GitBranch } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { createElement } from "react";
import type { ProjectIconNode, ProjectIconTree } from "#/lib/projects";
import type { ProjectLink, ProjectListItem } from "./project-types";

type ProjectListProps = {
    page: number;
    pageSize: number;
    projects: ProjectListItem[];
};

export function ProjectList({ page, pageSize, projects }: ProjectListProps) {
    if (projects.length === 0) {
        return (
            <p className="border-border border-b py-8 text-muted-foreground text-sm">No projects match that search.</p>
        );
    }

    return projects.map((project, index) => (
        <ProjectRow
            index={(page - 1) * pageSize + index + 1}
            key={project.slug}
            project={project}
            revealIndex={index}
        />
    ));
}

function ProjectRow({ index, project, revealIndex }: { index: number; project: ProjectListItem; revealIndex: number }) {
    return (
        <article
            className="project-row-enter group grid gap-4 border-border border-b py-6 transition-colors sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-8"
            style={{ animationDelay: `${revealIndex * 90}ms` }}
        >
            <div className="flex items-center justify-between gap-4 sm:block">
                <p className="font-mono text-muted-foreground/70 text-xs">{String(index).padStart(2, "0")}</p>
                <ProjectIcon tree={project.iconTree} />
            </div>

            <div className="space-y-4">
                <div className="grid gap-1 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-baseline min-[420px]:justify-between min-[420px]:gap-x-6 min-[420px]:gap-y-2">
                    <h2 className="font-medium text-lg leading-tight">
                        <ProjectTitle project={project} />
                    </h2>
                    <p className="font-mono text-muted-foreground/80 text-xs">{project.year}</p>
                </div>

                <p className="max-w-xl text-muted-foreground text-sm leading-6">{project.description}</p>

                <ProjectLinks project={project} />

                <ProjectTags tags={project.tags} />
            </div>
        </article>
    );
}

function ProjectIcon({ tree }: { tree: ProjectIconTree }): ReactNode {
    return renderIconTree(tree);
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
        <div className="flex flex-wrap items-center gap-2 text-xs">
            {project.hasNote ? (
                <Link
                    className="inline-flex h-7 items-center gap-1.5 border border-border/70 px-2 text-foreground transition-colors hover:border-foreground/35 hover:bg-foreground/[0.035]"
                    href={`/projects/${project.slug}`}
                    transitionTypes={["nav-forward"]}
                >
                    <FileText aria-hidden="true" className="size-3.5" />
                    note
                </Link>
            ) : null}
            {project.links.map((link) => (
                <ProjectExternalLink key={`${link.kind}:${link.href}`} link={link} />
            ))}
        </div>
    );
}

function ProjectExternalLink({ link }: { link: ProjectLink }) {
    const Icon = link.kind === "external" ? ExternalLink : GitBranch;

    return (
        <a
            className="inline-flex h-7 items-center gap-1.5 border border-border/70 px-2 text-muted-foreground transition-colors hover:border-foreground/35 hover:bg-foreground/[0.035] hover:text-foreground"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Icon aria-hidden="true" className="size-3.5" />
            {link.label}
        </a>
    );
}

function ProjectTags({ tags }: { tags: string[] }) {
    if (tags.length === 0) {
        return null;
    }

    return <p className="font-mono text-[11px] text-muted-foreground/70">{tags.slice(0, 5).join(" / ")}</p>;
}
