"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { ProjectListItem } from "./project-types";

const PAGE_SIZE = 2;
const ALL_TAGS_VALUE = "all";

function uniqueTags(projects: ProjectListItem[]) {
    return Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) => a.localeCompare(b));
}

function normalizeQuery(query: string) {
    return query.trim().toLowerCase();
}

function getProjectSearchText(project: ProjectListItem) {
    return `${project.title} ${project.description} ${project.year} ${project.tags.join(" ")}`.toLowerCase();
}

function matchesProject(project: ProjectListItem, query: string, tag: string) {
    return (
        (query.length === 0 || getProjectSearchText(project).includes(query)) &&
        (tag === ALL_TAGS_VALUE || project.tags.includes(tag))
    );
}

function paginate<T>(items: T[], page: number) {
    const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const currentPage = Math.min(page, pageCount);
    const start = (currentPage - 1) * PAGE_SIZE;

    return {
        currentPage,
        pageCount,
        visibleItems: items.slice(start, start + PAGE_SIZE),
    };
}

export function useProjectIndex(projects: ProjectListItem[]) {
    const [query, setQuery] = useState("");
    const [tag, setTag] = useState(ALL_TAGS_VALUE);
    const [page, setPage] = useState(1);
    const deferredQuery = useDeferredValue(query);
    const normalizedQuery = normalizeQuery(deferredQuery);

    const tags = useMemo(() => uniqueTags(projects), [projects]);
    const filteredProjects = useMemo(
        () => projects.filter((project) => matchesProject(project, normalizedQuery, tag)),
        [normalizedQuery, projects, tag]
    );
    const pagination = paginate(filteredProjects, page);

    function resetPage() {
        setPage(1);
    }

    return {
        ...pagination,
        filteredProjects,
        pageSize: PAGE_SIZE,
        query,
        setPage,
        setQuery,
        setTag,
        tag,
        tags,
        resetPage,
    };
}
