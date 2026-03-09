import type { Project } from "#/content/projects/schema";
import type { ProjectFilters } from "./project-types";

export function filterProjects(projects: readonly Project[], filters: ProjectFilters) {
    const normalizedQuery = filters.query.toLowerCase();

    return projects.filter((project) => {
        const matchesQuery =
            normalizedQuery.length === 0 ||
            project.title.toLowerCase().includes(normalizedQuery) ||
            project.category.toLowerCase().includes(normalizedQuery) ||
            project.summary.toLowerCase().includes(normalizedQuery) ||
            project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

        const matchesTags = filters.tags.length === 0 || filters.tags.some((tag) => project.tags.includes(tag));
        const matchesYear = filters.year === "all" || project.year === filters.year;

        return matchesQuery && matchesTags && matchesYear;
    });
}
