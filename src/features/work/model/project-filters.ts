import { createSearchParamsCache, parseAsInteger, parseAsNativeArrayOf, parseAsString } from "nuqs/server";

import type { Project } from "#/content/projects/schema";
import type { ProjectFilterOptions, ProjectFilters, ProjectYear } from "./project-types";

export const ALL_PROJECTS_FILTER = "all" as const;

const queryOptions = {
    clearOnDefault: true,
    history: "push" as const,
    scroll: false,
    shallow: false,
};

export const projectFilterParsers = {
    page: parseAsInteger.withDefault(1).withOptions(queryOptions),
    q: parseAsString.withDefault("").withOptions(queryOptions),
    tags: parseAsNativeArrayOf(parseAsString).withDefault([]).withOptions(queryOptions),
    year: parseAsString.withDefault(ALL_PROJECTS_FILTER).withOptions(queryOptions),
};

export const projectFilterCache = createSearchParamsCache(projectFilterParsers);

function toSortedUnique(values: readonly string[]) {
    return Array.from(new Set(values)).sort((left, right) => left.localeCompare(right));
}

function isProjectYear(value: string, years: readonly ProjectYear[]): value is ProjectYear {
    return years.includes(value as ProjectYear);
}

export function getProjectFilterOptions(projects: readonly Project[]): ProjectFilterOptions {
    return {
        tags: toSortedUnique(projects.flatMap((project) => project.tags)),
        years: [...new Set(projects.map((project) => project.year))].sort().reverse() as readonly ProjectYear[],
    };
}

export function normalizeProjectFilters(
    input: {
        page: number;
        q: string;
        tags: readonly string[];
        year: string;
    },
    options: ProjectFilterOptions
): ProjectFilters {
    const query = input.q.trim();
    const tags = input.tags.filter((tag) => options.tags.includes(tag));
    const year = isProjectYear(input.year, options.years) ? input.year : ALL_PROJECTS_FILTER;

    return {
        page: Math.max(1, Number.isFinite(input.page) ? input.page : 1),
        query,
        tags,
        year,
    };
}
