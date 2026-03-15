import "server-only";

import { projects } from "#/content/projects";
import { getProjectDetailSlugs } from "#/content/projects/detail";
import type { Project } from "#/content/projects/schema";

export type ProjectDestination =
    | Readonly<{
          href: string;
          kind: "detail";
          label: "Open dossier";
      }>
    | Readonly<{
          href: string;
          kind: "external";
          label: "Open live" | "Open repo";
      }>
    | Readonly<{
          kind: "static";
          label: "Archive only";
      }>;

export type ProjectArchiveItem = Project &
    Readonly<{
        destination: ProjectDestination;
    }>;

function resolveProjectDestination(project: Project, detailedSlugs: ReadonlySet<string>): ProjectDestination {
    if (detailedSlugs.has(project.slug)) {
        return {
            href: `/portfolio/${project.slug}`,
            kind: "detail",
            label: "Open dossier",
        };
    }

    if (project.liveUrl) {
        return {
            href: project.liveUrl,
            kind: "external",
            label: "Open live",
        };
    }

    if (project.repoUrl) {
        return {
            href: project.repoUrl,
            kind: "external",
            label: "Open repo",
        };
    }

    return {
        kind: "static",
        label: "Archive only",
    };
}

export function buildProjectArchiveItems(sourceProjects: readonly Project[]): readonly ProjectArchiveItem[] {
    const detailedSlugs = new Set(getProjectDetailSlugs());

    return sourceProjects.map((project) => ({
        ...project,
        destination: resolveProjectDestination(project, detailedSlugs),
    }));
}

export function getProjectArchiveItemBySlug(slug: string) {
    return buildProjectArchiveItems(projects).find((project) => project.slug === slug);
}
