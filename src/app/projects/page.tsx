import { getProjects } from "#/lib/projects";
import { ProjectIndex } from "./_component/project-index";

export default async function ProjectsPage() {
    const projects = getProjects().map(({ description, hasNote, icon, iconTrees, links, slug, tags, title, year }) => ({
        description: description ?? "",
        hasNote,
        icon,
        iconTrees,
        links,
        slug,
        tags,
        title,
        year,
    }));

    return (
        <section className="space-y-8">
            <header className="project-row-enter space-y-3">
                <h1 className="font-semibold text-2xl leading-tight">Projects</h1>
                <p className="max-w-xl text-muted-foreground/95 leading-7">
                    A collection of my personal and professional projects.
                </p>
            </header>
            <ProjectIndex projects={projects} />
        </section>
    );
}
