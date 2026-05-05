import { notFound } from "next/navigation";
import { getProject, getProjects } from "#/lib/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    const Body = project.body;

    return (
        <article className="space-y-8">
            <header className="space-y-3">
                <h1 className="font-semibold text-2xl leading-tight">{project.title}</h1>
                <div className="flex items-center gap-3 text-muted-foreground">
                    <project.Icon aria-hidden="true" className="h-5 w-5 opacity-80" />
                    <span className="font-mono text-xs">{project.year}</span>
                </div>
                <p className="max-w-xl text-muted-foreground/95 leading-7">{project.description}</p>
            </header>

            <div className="prose prose-invert max-w-none prose-p:text-muted-foreground text-[16px] text-muted-foreground prose-p:leading-7">
                <Body />
            </div>
        </article>
    );
}
