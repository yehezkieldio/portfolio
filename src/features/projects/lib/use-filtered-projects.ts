import MiniSearch from "minisearch";
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";
import type { Project } from "#/features/projects/lib/data";
import { PROJECTS } from "#/features/projects/lib/data";

export interface FilterState {
    search: string;
    category: string;
    year: number;
    tech: string[];
    page: number;
}

interface UseFilteredProjectsReturn {
    filters: FilterState;
    setFilters: (filters: Partial<FilterState>) => Promise<URLSearchParams>;
    filteredProjects: Project[];
    totalCount: number;
    paginatedProjects: Project[];
    totalPages: number;
    hasActiveFilters: boolean;
}

let miniSearchInstance: MiniSearch<Project> | null = null;

function getMiniSearchInstance(): MiniSearch<Project> {
    if (!miniSearchInstance) {
        miniSearchInstance = new MiniSearch({
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

        miniSearchInstance.addAll(PROJECTS);
    }
    return miniSearchInstance;
}

export function useFilteredProjects(itemsPerPage = 9): UseFilteredProjectsReturn {
    const [filters, setFilters] = useQueryStates(
        {
            search: parseAsString.withDefault(""),
            category: parseAsString.withDefault("all"),
            year: parseAsInteger.withDefault(0),
            tech: parseAsArrayOf(parseAsString).withDefault([]),
            page: parseAsInteger.withDefault(1),
        },
        {
            shallow: true,
        }
    );

    const miniSearch = getMiniSearchInstance();

    const filteredProjects = useMemo(() => {
        let results = PROJECTS;

        const hasNoFilters =
            !filters.search && filters.category === "all" && filters.year === 0 && filters.tech.length === 0;

        if (hasNoFilters) {
            return results;
        }

        if (filters.search) {
            const searchResults = miniSearch.search(filters.search);
            const projectIds = new Set(searchResults.map((result) => result.id));
            results = PROJECTS.filter((p) => projectIds.has(p.id));
        }

        if (filters.tech.length > 0) {
            const techSet = new Set(filters.tech);
            results = results.filter((p) =>
                filters.tech.every((tech) => techSet.has(tech) && p.technologies.includes(tech))
            );
        }

        if (filters.category !== "all") {
            results = results.filter((p) => p.category === filters.category);
        }

        if (filters.year !== 0) {
            results = results.filter((p) => p.year === filters.year);
        }

        return results;
    }, [filters.search, filters.category, filters.year, filters.tech, miniSearch]);

    const paginationData = useMemo(() => {
        const totalCount = filteredProjects.length;
        const totalPages = Math.ceil(totalCount / itemsPerPage);
        const startIndex = (filters.page - 1) * itemsPerPage;
        const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

        return {
            totalCount,
            totalPages,
            paginatedProjects,
        };
    }, [filteredProjects, filters.page, itemsPerPage]);

    const hasActiveFilters = useMemo(
        () =>
            filters.search !== "" ||
            filters.category !== "all" ||
            filters.year !== 0 ||
            filters.tech.length > 0,
        [filters.search, filters.category, filters.year, filters.tech]
    );

    return {
        filters,
        setFilters,
        filteredProjects,
        totalCount: paginationData.totalCount,
        paginatedProjects: paginationData.paginatedProjects,
        totalPages: paginationData.totalPages,
        hasActiveFilters,
    };
}
