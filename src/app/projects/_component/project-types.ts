import type { ProjectIconName, ProjectIconTree } from "#/lib/projects";

export type ProjectLink = {
    href: string;
    kind: "external" | "github" | "gitlab";
    label: string;
};

export type ProjectListItem = {
    description: string;
    hasNote: boolean;
    icon?: ProjectIconName;
    iconTrees: ProjectIconTree[];
    links: ProjectLink[];
    slug: string;
    tags: string[];
    title: string;
    year: string;
};
