import { projects as projectDocs } from "fumadocs-mdx:collections/server";
import type { SvglComponentName } from "@ridemountainpig/svgl-react";
import * as svglIcons from "@ridemountainpig/svgl-react";
import type { JSX, ReactNode, SVGProps } from "react";
import { isValidElement } from "react";

type SvglComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const iconComponents = Object.fromEntries(
    Object.entries(svglIcons).filter(([, exportValue]) => typeof exportValue === "function")
) as Record<SvglComponentName, SvglComponent>;

export type ProjectIconName = SvglComponentName;

export type ProjectIconNode = {
    children: ProjectIconTree[];
    props: Record<string, ProjectIconProp>;
    type: string;
};

export type ProjectIconProp = boolean | number | string | Record<string, number | string>;

export type ProjectIconTree = ProjectIconNode | string;

const iconAliases = {
    React: "ReactDark",
    Rust: "RustDark",
} as const satisfies Record<string, SvglComponentName>;

const MDX_EXTENSION_REGEX = /\.mdx?$/;

function projectSlug(path: string) {
    return path.replace(MDX_EXTENSION_REGEX, "");
}

function getProjectIcon(icon: ProjectIconName) {
    const resolvedIcon = icon in iconAliases ? iconAliases[icon as keyof typeof iconAliases] : icon;
    const Icon = iconComponents[resolvedIcon];

    if (!Icon) {
        throw new Error(`Unknown @ridemountainpig/svgl-react icon: ${icon}`);
    }

    return Icon;
}

function projectIconTree(icon: ProjectIconName, className: string): ProjectIconTree {
    const Icon = getProjectIcon(icon);
    const tree = serializeIconNode(
        Icon({
            "aria-hidden": "true",
            className,
        })
    );

    if (tree === null) {
        throw new Error(`Unable to serialize @ridemountainpig/svgl-react icon: ${icon}`);
    }

    return tree;
}

function serializeIconNode(node: ReactNode): ProjectIconTree | null {
    if (typeof node === "string" || typeof node === "number") {
        return String(node);
    }

    if (!isValidElement(node) || typeof node.type !== "string") {
        return null;
    }

    const { children, ...props } = node.props as Record<string, unknown>;

    return {
        children: serializeIconChildren(children),
        props: serializeIconProps(props),
        type: node.type,
    };
}

function serializeIconChildren(children: unknown): ProjectIconTree[] {
    return [children]
        .flat()
        .map((child) => serializeIconNode(child as ReactNode))
        .filter((child): child is ProjectIconTree => child !== null);
}

function serializeIconProps(props: Record<string, unknown>): Record<string, ProjectIconProp> {
    const serializableProps: Record<string, ProjectIconProp> = {};

    for (const [key, value] of Object.entries(props)) {
        if (typeof value === "boolean" || typeof value === "number" || typeof value === "string") {
            serializableProps[key] = value;
        } else if (isSerializableStyle(value)) {
            serializableProps[key] = value;
        }
    }

    return serializableProps;
}

function isSerializableStyle(value: unknown): value is Record<string, number | string> {
    return (
        typeof value === "object" &&
        value !== null &&
        Object.values(value).every((item) => typeof item === "number" || typeof item === "string")
    );
}

function projectLinks(project: (typeof projectDocs)[number]) {
    return [
        project.github ? { href: project.github, kind: "github" as const, label: "github" } : null,
        project.gitlab ? { href: project.gitlab, kind: "gitlab" as const, label: "gitlab" } : null,
        project.website ? { href: project.website, kind: "external" as const, label: "site" } : null,
        ...project.external.map((link) => ({ ...link, kind: "external" as const })),
    ].filter((link) => link !== null);
}

function projectIconNames(project: (typeof projectDocs)[number]) {
    return project.icons && project.icons.length > 0 ? project.icons : [project.icon];
}

function normalizeTag(tag: string) {
    return tag.trim().toLowerCase().replace(/\s+/g, "-");
}

function withProjectRuntimeFields(project: (typeof projectDocs)[number]) {
    const iconNames = projectIconNames(project);

    return {
        ...project,
        hasNote: project.note,
        iconTrees: iconNames.map((icon) =>
            projectIconTree(icon, "h-5 w-5 opacity-75 transition-opacity group-hover:opacity-100")
        ),
        links: projectLinks(project),
        projectSortDate: project.projectSortDate ?? project.projectStartedAt,
        slug: projectSlug(project.info.path),
        Icon: getProjectIcon(project.icon),
        iconTree: projectIconTree(project.icon, "h-5 w-5 opacity-80"),
        tags: project.tags.map(normalizeTag),
    };
}

type Project = ReturnType<typeof withProjectRuntimeFields>;

function sortProjects(a: Project, b: Project) {
    return b.projectSortDate.localeCompare(a.projectSortDate) || a.title.localeCompare(b.title);
}

const projects = projectDocs.map(withProjectRuntimeFields).sort(sortProjects);

const projectsBySlug = new Map(projects.filter((project) => project.hasNote).map((project) => [project.slug, project]));

export function getProjects() {
    return projects;
}

export function getProject(slug: string) {
    return projectsBySlug.get(slug);
}
