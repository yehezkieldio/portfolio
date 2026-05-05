import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { createElement } from "react";
import { ArticleHeader, MdxBody, mdxComponents } from "#/app/_component/mdx-content";
import type { ProjectIconNode, ProjectIconTree } from "#/lib/projects";
import { getProject, getProjects } from "#/lib/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjects()
        .filter((project) => project.hasNote)
        .map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    const Body = project.body;

    return (
        <article className="space-y-9">
            <ArticleHeader
                description={project.description}
                meta={
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <ProjectIconGroup icons={project.iconTrees} />
                        <p className="font-mono text-muted-foreground text-xs">{project.year}</p>
                    </div>
                }
                tags={project.tags}
                title={project.title}
            />

            <MdxBody>
                <Body components={mdxComponents} />
            </MdxBody>
        </article>
    );
}

function ProjectIconGroup({ icons }: { icons: ProjectIconTree[] }) {
    if (icons.length === 0) {
        return null;
    }

    return (
        <span className="flex shrink-0 flex-row-reverse justify-end sm:flex-row">
            {icons.slice(0, 5).map((icon, index) => (
                <span
                    className="-ml-1.5 grid size-6 place-items-center border border-background bg-background first:ml-0 sm:-ml-1 sm:first:ml-0"
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
