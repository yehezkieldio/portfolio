import { projects as projectDocs } from "fumadocs-mdx:collections/server";
import * as simpleIcons from "@icons-pack/react-simple-icons";
import type { SvglComponentName } from "@ridemountainpig/svgl-react";
import * as svglIcons from "@ridemountainpig/svgl-react";
import type { JSX, ReactNode, SVGProps } from "react";
import { isValidElement } from "react";

type SvglComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;
type SimpleIconProps = SVGProps<SVGSVGElement> & {
    color?: string;
    size?: number | string;
    title?: string;
};
type SimpleIconComponent = {
    render: (props: SimpleIconProps, ref: null) => JSX.Element;
};
type ProjectIconRenderer =
    | {
          component: SimpleIconComponent;
          source: "simple-icons";
      }
    | {
          component: SvglComponent;
          source: "svgl";
      };

const iconComponents = Object.fromEntries(
    Object.entries(svglIcons).filter(([, exportValue]) => typeof exportValue === "function")
) as Record<SvglComponentName, SvglComponent>;

const simpleIconComponents = Object.fromEntries(
    Object.entries(simpleIcons).filter(
        ([name, exportValue]) =>
            name.startsWith("Si") && typeof exportValue === "object" && exportValue !== null && "render" in exportValue
    )
) as unknown as Record<string, SimpleIconComponent>;

export type ProjectIconName = string;

type ProjectIconProp = boolean | number | string | Record<string, number | string>;

export type ProjectIconTree =
    | {
          children: ProjectIconTree[];
          props: Record<string, ProjectIconProp>;
          type: string;
      }
    | string;

const iconAliases = {
    Nx: "NxDark",
    React: "ReactDark",
    Rust: "RustDark",
} as const satisfies Record<string, SvglComponentName>;

const simpleIconAliases = {
    Nextjs: "SiNextdotjs",
} as const satisfies Record<string, string>;

const ICON_LABEL_SEPARATOR_REGEX = /\s+/;
const NON_ICON_LABEL_CHARACTER_REGEX = /[^a-z0-9]+/gi;
const MDX_EXTENSION_REGEX = /\.mdx?$/;

function projectSlug(path: string) {
    return path.replace(MDX_EXTENSION_REGEX, "");
}

function getProjectIcon(icon: ProjectIconName) {
    const resolvedIcon = icon in iconAliases ? iconAliases[icon as keyof typeof iconAliases] : icon;
    const Icon = iconComponents[resolvedIcon as SvglComponentName];

    if (Icon) {
        return {
            component: Icon,
            source: "svgl",
        } satisfies ProjectIconRenderer;
    }

    const simpleIconName =
        icon in simpleIconAliases ? simpleIconAliases[icon as keyof typeof simpleIconAliases] : `Si${icon}`;
    const SimpleIcon = simpleIconComponents[simpleIconName];

    if (SimpleIcon) {
        return {
            component: SimpleIcon,
            source: "simple-icons",
        } satisfies ProjectIconRenderer;
    }

    return {
        component: createFallbackIcon(icon),
        source: "svgl",
    } satisfies ProjectIconRenderer;
}

function createFallbackIcon(icon: ProjectIconName): SvglComponent {
    const label = icon
        .replace(NON_ICON_LABEL_CHARACTER_REGEX, " ")
        .trim()
        .split(ICON_LABEL_SEPARATOR_REGEX)
        .map((part) => part[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();

    return function FallbackProjectIcon(props) {
        return (
            <svg fill="none" viewBox="0 0 24 24" {...props}>
                <title>{icon}</title>
                <rect height="22" rx="4" stroke="currentColor" strokeOpacity="0.45" width="22" x="1" y="1" />
                <text
                    dominantBaseline="middle"
                    fill="currentColor"
                    fontFamily="monospace"
                    fontSize={label.length > 2 ? 6 : 7}
                    fontWeight="600"
                    textAnchor="middle"
                    x="12"
                    y="12.5"
                >
                    {label || "?"}
                </text>
            </svg>
        );
    };
}

function projectIconTree(icon: ProjectIconName, className: string): ProjectIconTree {
    const renderer = getProjectIcon(icon);
    const tree =
        renderer.source === "simple-icons"
            ? serializeSimpleIcon(renderer.component, icon, className)
            : serializeIconNode(
                  renderer.component({
                      "aria-hidden": "true",
                      className,
                  })
              );

    if (tree === null) {
        throw new Error(`Unable to serialize project icon: ${icon}`);
    }

    return tree;
}

function serializeSimpleIcon(
    Icon: SimpleIconComponent,
    icon: ProjectIconName,
    className: string
): ProjectIconTree | null {
    return serializeIconNode(
        Icon.render(
            {
                "aria-hidden": "true",
                className,
                color: "currentColor",
                size: "100%",
                title: icon,
            },
            null
        )
    );
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
    return [children].flat().flatMap((child) => {
        const tree = serializeIconNode(child as ReactNode);

        return tree === null ? [] : [tree];
    });
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
    const links: {
        href: string;
        kind: "external" | "github" | "gitlab";
        label: string;
    }[] = [];

    if (project.github) {
        links.push({ href: project.github, kind: "github", label: "github" });
    }

    if (project.gitlab) {
        links.push({ href: project.gitlab, kind: "gitlab", label: "gitlab" });
    }

    if (project.website) {
        links.push({ href: project.website, kind: "external", label: "site" });
    }

    for (const link of project.external) {
        links.push({ ...link, kind: "external" });
    }

    return links;
}

function projectIconNames(project: (typeof projectDocs)[number]) {
    if (project.icons && project.icons.length > 0) {
        return project.icons;
    }

    return project.icon ? [project.icon] : [];
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
        Icon: project.icon ? getProjectIcon(project.icon) : null,
        iconTree: project.icon ? projectIconTree(project.icon, "h-5 w-5 opacity-80") : null,
        tags: project.tags.map(normalizeTag),
    };
}

type Project = ReturnType<typeof withProjectRuntimeFields>;

function sortProjects(a: Project, b: Project) {
    return b.projectSortDate.localeCompare(a.projectSortDate) || a.title.localeCompare(b.title);
}

const projects = projectDocs
    .flatMap((project) => (project.hidden ? [] : [withProjectRuntimeFields(project)]))
    .sort(sortProjects);

const projectsBySlug = new Map(projects.flatMap((project) => (project.hasNote ? [[project.slug, project]] : [])));

export function getProjects() {
    return projects;
}

export function getProject(slug: string) {
    return projectsBySlug.get(slug);
}
