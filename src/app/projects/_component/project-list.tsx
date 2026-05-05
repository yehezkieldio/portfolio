"use client";

import { Bun, Nextjs, ReactDark, RustDark, TypeScript } from "@ridemountainpig/svgl-react";
import Link from "next/link";
import type { ProjectListItem } from "./project-types";

const iconMap = {
    Bun,
    Nextjs,
    React: ReactDark,
    Rust: RustDark,
    TypeScript,
};

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
    const Icon = iconMap[project.icon];

    return (
        <article
            className="project-row-enter group grid gap-4 border-border border-b py-6 transition-colors sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-8"
            style={{ animationDelay: `${revealIndex * 90}ms` }}
        >
            <div className="flex items-center justify-between gap-4 sm:block">
                <p className="font-mono text-muted-foreground/70 text-xs">{String(index).padStart(2, "0")}</p>
                <Icon
                    aria-hidden="true"
                    className="mt-0 h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100 sm:mt-6"
                />
            </div>

            <div className="space-y-4">
                <div className="grid gap-1 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-baseline min-[420px]:justify-between min-[420px]:gap-x-6 min-[420px]:gap-y-2">
                    <h2 className="font-medium text-lg leading-tight">
                        <Link
                            className="hover:text-muted-foreground"
                            href={`/projects/${project.slug}`}
                            transitionTypes={["nav-forward"]}
                        >
                            {project.title}
                        </Link>
                    </h2>
                    <p className="font-mono text-muted-foreground/80 text-xs">{project.year}</p>
                </div>

                <p className="max-w-xl text-muted-foreground text-sm leading-6">{project.description}</p>

                <ProjectLinks project={project} />

                {project.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground/70">
                        {project.tags.map((projectTag) => (
                            <span key={projectTag}>{projectTag}</span>
                        ))}
                    </div>
                ) : null}
            </div>
        </article>
    );
}

function ProjectLinks({ project }: { project: ProjectListItem }) {
    return (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
            <Link
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
            >
                read note
            </Link>
            {project.github ? (
                <a className="text-muted-foreground hover:text-foreground" href={project.github}>
                    github
                </a>
            ) : null}
            {project.website ? (
                <a className="text-muted-foreground hover:text-foreground" href={project.website}>
                    site
                </a>
            ) : null}
        </div>
    );
}
