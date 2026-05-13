import { PageHeader, PageSection } from "#/app/_component/content-primitives";
import { getProjects } from "#/lib/projects";
import { ProjectIndex } from "./_component/project-index";

export const metadata = {
    description:
        "Projects by Yehezkiel Dio Sinolungan, including Azalea, Cubic, and other software systems across media, operations, release tooling, and research.",
    title: "Projects - Yehezkiel Dio Sinolungan",
};

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
        <div className="projects-page-surface">
            <div aria-hidden="true" className="projects-page-ambient" />
            <PageSection>
                <PageHeader description="A collection of my personal and professional projects." title="Projects" />
                <ProjectIndex projects={projects} />
            </PageSection>
        </div>
    );
}
