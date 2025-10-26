"use client";

import { createContext, type ReactNode, useContext, useMemo } from "react";
import {
    getUniqueCategories,
    getUniqueTechnologies,
    getUniqueYears,
    PROJECTS,
    type Project,
} from "#/features/projects/lib/data";
import type { FilterState } from "#/features/projects/lib/use-filtered-projects";
import { useFilteredProjects } from "#/features/projects/lib/use-filtered-projects";
import { ITEMS_PER_PAGE } from "#/lib/constants";

interface ProjectsContextValue {
    filteredProjects: Project[];
    paginatedProjects: Project[];
    totalCount: number;
    totalPages: number;

    filters: FilterState;
    setFilters: (filters: Partial<FilterState>) => Promise<URLSearchParams>;
    hasActiveFilters: boolean;

    currentPage: number;
    startIndex: number;
    endIndex: number;

    categories: string[];
    technologies: string[];
    years: number[];
}

const ProjectsContext = createContext<ProjectsContextValue | undefined>(undefined);

interface ProjectsProviderProps {
    children: ReactNode;
    itemsPerPage?: number;
}

export function ProjectsProvider({ children, itemsPerPage = ITEMS_PER_PAGE }: ProjectsProviderProps) {
    const {
        filters,
        setFilters,
        filteredProjects,
        paginatedProjects,
        totalCount,
        totalPages,
        hasActiveFilters,
    } = useFilteredProjects(itemsPerPage);

    const paginationHelpers = useMemo(() => {
        const startIndex = (filters.page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalCount);

        return {
            currentPage: filters.page,
            startIndex,
            endIndex,
        };
    }, [filters.page, itemsPerPage, totalCount]);

    const derivedFilterValues = useMemo(
        () => ({
            categories: getUniqueCategories(PROJECTS),
            technologies: getUniqueTechnologies(PROJECTS),
            years: getUniqueYears(PROJECTS),
        }),
        []
    );

    const contextValue = useMemo<ProjectsContextValue>(
        () => ({
            filteredProjects,
            paginatedProjects,
            totalCount,
            totalPages,
            filters,
            setFilters,
            hasActiveFilters,
            ...paginationHelpers,
            ...derivedFilterValues,
        }),
        [
            filteredProjects,
            paginatedProjects,
            totalCount,
            totalPages,
            filters,
            setFilters,
            hasActiveFilters,
            paginationHelpers,
            derivedFilterValues,
        ]
    );

    return <ProjectsContext.Provider value={contextValue}>{children}</ProjectsContext.Provider>;
}

export function useProjectsContext() {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error("useProjectsContext must be used within ProjectsProvider");
    }
    return context;
}
