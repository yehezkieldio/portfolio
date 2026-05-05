import { projects as projectDocs } from "fumadocs-mdx:collections/server";
import { Bun, Nextjs, ReactDark, RustDark, TypeScript } from "@ridemountainpig/svgl-react";

const iconMap = {
    Bun,
    Nextjs,
    React: ReactDark,
    Rust: RustDark,
    TypeScript,
} as const;

export type ProjectIconName = keyof typeof iconMap;

const MDX_EXTENSION_REGEX = /\.mdx?$/;

function projectSlug(path: string) {
    return path.replace(MDX_EXTENSION_REGEX, "");
}

function withProjectRuntimeFields(project: (typeof projectDocs)[number]) {
    return {
        ...project,
        slug: projectSlug(project.info.path),
        Icon: iconMap[project.icon],
    };
}

type Project = ReturnType<typeof withProjectRuntimeFields>;

function sortProjects(a: Project, b: Project) {
    return b.year.localeCompare(a.year) || a.title.localeCompare(b.title);
}

const projects = projectDocs.map(withProjectRuntimeFields).sort(sortProjects);

const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

export function getProjects() {
    return projects;
}

export function getProject(slug: string) {
    return projectsBySlug.get(slug);
}
