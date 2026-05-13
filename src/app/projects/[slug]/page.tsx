import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "#/lib/projects";
import { ProjectArticle } from "./_components/project-article";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjects().flatMap((project) => (project.hasNote ? [{ slug: project.slug }] : []));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return {
            title: "Project",
        };
    }

    return {
        description: project.description,
        title: project.title,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return <ProjectArticle project={project} />;
}
