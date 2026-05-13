import { notFound } from "next/navigation";
import { getProject, getProjects } from "#/lib/projects";
import { ProjectArticle } from "./_components/project-article";

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

    return <ProjectArticle project={project} />;
}
