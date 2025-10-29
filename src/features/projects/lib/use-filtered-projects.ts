import MiniSearch from "minisearch";
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useDeferredValue, useEffect, useMemo } from "react";
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
    filterKey: string;
    isSearching: boolean;
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

    const deferredSearch = useDeferredValue(filters.search);
    const isSearching = deferredSearch !== filters.search;

    const filteredProjects = useMemo(() => {
        let results = PROJECTS;

        const hasNoFilters =
            !deferredSearch && filters.category === "all" && filters.year === 0 && filters.tech.length === 0;

        if (hasNoFilters) {
            return results.sort((a, b) => b.year - a.year);
        }

        if (deferredSearch) {
            const searchResults = miniSearch.search(deferredSearch);
            const projectIds = new Set(searchResults.map((result) => result.id));
            results = PROJECTS.filter((p) => projectIds.has(p.id));
        }

        if (filters.tech.length > 0) {
            results = results.filter((p) => filters.tech.every((tech) => p.technologies.includes(tech)));
        }

        if (filters.category !== "all") {
            results = results.filter((p) => p.category === filters.category);
        }

        if (filters.year !== 0) {
            results = results.filter((p) => p.year === filters.year);
        }

        return results.sort((a, b) => b.year - a.year);
    }, [deferredSearch, filters.category, filters.year, filters.tech, miniSearch]);

    const paginationData = useMemo(() => {
        const totalCount = filteredProjects.length;
        const totalPages = Math.max(1, Math.ceil(totalCount / itemsPerPage));

        const validPage = Math.max(1, Math.min(filters.page, totalPages));
        const startIndex = (validPage - 1) * itemsPerPage;
        const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

        return {
            totalCount,
            totalPages,
            paginatedProjects,
            validPage,
        };
    }, [filteredProjects, filters.page, itemsPerPage]);

    useEffect(() => {
        if (paginationData.validPage !== filters.page) {
            setFilters({ page: paginationData.validPage });
        }
    }, [paginationData.validPage, filters.page, setFilters]);

    const hasActiveFilters = useMemo(
        () =>
            filters.search !== "" ||
            filters.category !== "all" ||
            filters.year !== 0 ||
            filters.tech.length > 0,
        [filters.search, filters.category, filters.year, filters.tech]
    );

    const filterKey = useMemo(
        () => `${filters.page}-${paginationData.totalCount}-${hasActiveFilters}`,
        [filters.page, paginationData.totalCount, hasActiveFilters]
    );

    return {
        filters,
        setFilters,
        filteredProjects,
        totalCount: paginationData.totalCount,
        paginatedProjects: paginationData.paginatedProjects,
        totalPages: paginationData.totalPages,
        hasActiveFilters,
        filterKey,
        isSearching,
    };
}
