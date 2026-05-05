"use client";

import Link from "next/link";
import { ContentList, ContentRow, ContentTags, ContentTitleLink, EmptyLine } from "#/app/_component/content-primitives";
import type { ProjectListItem } from "./project-types";

type ProjectListProps = {
    projects: ProjectListItem[];
};

export function ProjectList({ projects }: ProjectListProps) {
    return (
        <ContentList empty={<EmptyLine>No projects match that search.</EmptyLine>} isEmpty={projects.length === 0}>
            {projects.map((project, index) => (
                <ProjectRow key={project.slug} project={project} revealIndex={index} />
            ))}
        </ContentList>
    );
}

function ProjectRow({ project, revealIndex }: { project: ProjectListItem; revealIndex: number }) {
    return (
        <ContentRow delayIndex={revealIndex}>
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <h2 className="min-w-0 font-medium text-sm leading-tight">
                    <ProjectTitle project={project} />
                </h2>
                <p className="font-mono text-muted-foreground text-xs">{project.year}</p>
            </div>

            <p className="max-w-xl text-muted-foreground text-sm leading-6">{project.description}</p>

            <ContentTags tags={project.tags} />

            <ProjectLinks project={project} />
        </ContentRow>
    );
}

function ProjectTitle({ project }: { project: ProjectListItem }) {
    if (project.hasNote) {
        return <ContentTitleLink href={`/projects/${project.slug}`}>{project.title}</ContentTitleLink>;
    }

    const href = project.links[0]?.href;

    if (!href) {
        return project.title;
    }

    return (
        <ContentTitleLink href={href} isExternal>
            {project.title}
        </ContentTitleLink>
    );
}

function ProjectLinks({ project }: { project: ProjectListItem }) {
    return (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
            {project.hasNote ? (
                <Link
                    className="motion-link text-muted-foreground/75 hover:underline"
                    href={`/projects/${project.slug}`}
                    transitionTypes={["nav-forward"]}
                >
                    read note
                </Link>
            ) : null}
            {project.links.map((link) => (
                <a
                    className="motion-link text-muted-foreground/75 hover:underline"
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
