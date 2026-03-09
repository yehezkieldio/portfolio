import type { Project } from "#/content/projects/schema";

export type ProjectYear = Project["year"];

export type ProjectFilters = Readonly<{
    query: string;
    tags: readonly string[];
    year: ProjectYear | "all";
    page: number;
}>;

export type ProjectFilterOptions = Readonly<{
    tags: readonly string[];
    years: readonly ProjectYear[];
}>;
