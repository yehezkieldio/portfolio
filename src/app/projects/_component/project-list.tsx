"use client";

import { GitHubDark } from "@ridemountainpig/svgl-react";
import { ExternalLinkIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";
import { ContentList, ContentRow, ContentTags, ContentTitleLink, EmptyLine } from "#/app/_component/content-primitives";
import type { ProjectLink, ProjectListItem } from "./project-types";

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
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5 sm:gap-y-1">
                <h2 className="min-w-0 font-medium text-[13px] leading-[1.25] tracking-normal sm:text-sm sm:leading-tight">
                    <ProjectTitle project={project} />
                </h2>
                <p className="shrink-0 font-mono text-[11px] text-muted-foreground/70 leading-none tracking-normal sm:text-xs">
                    {project.year}
                </p>
            </div>

            <p className="max-w-xl text-[13.5px] text-muted-foreground leading-[1.55] tracking-normal sm:text-sm sm:leading-6">
                {project.description}
            </p>

            <div className="flex items-center justify-between gap-3 pt-1 sm:gap-4">
                <div className="min-w-0 flex-1 overflow-hidden [&>p]:overflow-hidden [&>p]:text-ellipsis [&>p]:text-nowrap [&>p]:text-[9.5px] sm:[&>p]:text-[11px]">
                    <ContentTags tags={project.tags} />
                </div>
                <ProjectLinks project={project} />
            </div>
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
        <p className="flex shrink-0 flex-wrap items-center justify-end gap-x-3 gap-y-1.5 text-[11px] leading-5 tracking-normal sm:text-xs">
            {project.hasNote ? (
                <Link
                    className="group motion-link inline-flex items-center gap-1.5 font-medium text-foreground/82 transition-colors duration-200 ease-(--ease-ui) hover:text-foreground"
                    href={`/projects/${project.slug}`}
                    transitionTypes={["nav-forward"]}
                >
                    <FileTextIcon aria-hidden="true" className="size-3.5 text-muted-foreground/80" />
                    <span>Case Study</span>
                    <ExternalLinkIcon
                        aria-hidden="true"
                        className="size-3 text-muted-foreground/70 transition-colors duration-200 ease-(--ease-ui) group-hover:text-foreground/90"
                    />
                </Link>
            ) : null}
            {project.links.map((link) => (
                <ProjectActionLink key={`${link.kind}:${link.href}`} link={link} />
            ))}
        </p>
    );
}

function ProjectActionLink({ link }: { link: ProjectLink }) {
    return (
        <a
            className="group motion-link inline-flex items-center gap-1.5 font-medium text-foreground/82 transition-colors duration-200 ease-(--ease-ui) hover:text-foreground"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
        >
            <ProjectActionIcon kind={link.kind} />
            <span>{getProjectLinkLabel(link)}</span>
            <ExternalLinkIcon
                aria-hidden="true"
                className="size-3 text-muted-foreground/70 transition-colors duration-200 ease-(--ease-ui) group-hover:text-foreground/90"
            />
        </a>
    );
}

function ProjectActionIcon({ kind }: { kind: ProjectLink["kind"] }) {
    if (kind === "github") {
        return (
            <GitHubDark
                aria-hidden="true"
                className="size-3.5 opacity-80 brightness-0 grayscale invert transition-opacity duration-200 ease-(--ease-ui) group-hover:opacity-100"
            />
        );
    }

    return <ExternalLinkIcon aria-hidden="true" className="size-3.5 text-muted-foreground/70" />;
}

function getProjectLinkLabel(link: ProjectLink) {
    if (link.kind === "github") {
        return "GitHub";
    }

    if (link.kind === "gitlab") {
        return "GitLab";
    }

    if (link.label === "site") {
        return "Website";
    }

    return link.label;
}
