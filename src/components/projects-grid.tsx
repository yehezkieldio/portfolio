"use client";

import MiniSearch from "minisearch";
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";
import { ProjectCard } from "#/components/project-card";
import { PROJECTS } from "#/lib/projects-data";

export function ProjectsGrid() {
    const [filters] = useQueryStates({
        search: parseAsString.withDefault(""),
        category: parseAsString.withDefault("all"),
        year: parseAsInteger.withDefault(0),
        tech: parseAsArrayOf(parseAsString).withDefault([]),
        page: parseAsInteger.withDefault(1),
    });

    // Initialize MiniSearch
    const miniSearch = useMemo(() => {
        const ms = new MiniSearch({
            fields: ["title", "description", "category", "technologies"],
            storeFields: [
                "id",
                "title",
                "description",
                "category",
                "year",
                "technologies",
                "image",
                "viewUrl",
                "sourceUrl",
            ],
            searchOptions: {
                boost: { title: 2 },
                fuzzy: 0.2,
            },
        });

        ms.addAll(PROJECTS);
        return ms;
    }, []);

    // Filter and search projects
    const filteredProjects = useMemo(() => {
        let results = PROJECTS;

        // Apply search
        if (filters.search) {
            const searchResults = miniSearch.search(filters.search);
            results = searchResults
                .map((result) => PROJECTS.find((p) => p.id === result.id))
                .filter((p): p is (typeof PROJECTS)[number] => p !== undefined);
        }

        // Apply category filter
        if (filters.category !== "all") {
            results = results.filter((p) => p.category === filters.category);
        }

        // Apply year filter
        if (filters.year !== 0) {
            results = results.filter((p) => p.year === filters.year);
        }

        // Apply technology filters
        if (filters.tech.length > 0) {
            results = results.filter((p) => filters.tech.every((tech) => p.technologies.includes(tech)));
        }

        return results;
    }, [filters, miniSearch]);

    // Pagination
    const ITEMS_PER_PAGE = 9;
    // const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (filters.page - 1) * ITEMS_PER_PAGE;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (filteredProjects.length === 0) {
        return (
            <div className="py-20 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated">
                    <span className="text-3xl">🔍</span>
                </div>
                <h3 className="mb-2 font-semibold text-2xl">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6 text-muted-foreground text-sm">
                Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of{" "}
                {filteredProjects.length} projects
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
