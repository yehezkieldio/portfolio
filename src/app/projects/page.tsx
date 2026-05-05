import { PageHeader, PageSection } from "#/app/_component/content-primitives";
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
        <PageSection>
            <PageHeader description="A collection of my personal and professional projects." title="Projects" />
            <ProjectIndex projects={projects} />
        </PageSection>
    );
}
