import { getProjects } from "#/lib/projects";
import { ProjectIndex } from "./_component/project-index";

export default async function ProjectsPage() {
    const projects = getProjects().map(({ description, github, icon, slug, tags, title, website, year }) => ({
        description: description ?? "",
        github,
        icon,
        slug,
        tags,
        title,
        website,
        year,
    }));

    return (
        <section className="space-y-8">
            <header className="space-y-3">
                <h1 className="font-semibold text-2xl leading-tight">Projects</h1>
                <p className="max-w-xl text-muted-foreground/95 leading-7">
                    A collection of my personal and professional projects.
                </p>
            </header>
            <ProjectIndex projects={projects} />
        </section>
    );
}
