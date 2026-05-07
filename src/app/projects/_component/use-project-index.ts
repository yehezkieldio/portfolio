"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { ProjectListItem } from "./project-types";

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

export function useProjectIndex(projects: ProjectListItem[]) {
    const [query, setQuery] = useState("");
    const [tag, setTag] = useState(ALL_TAGS_VALUE);
    const deferredQuery = useDeferredValue(query);
    const normalizedQuery = normalizeQuery(deferredQuery);

    const tags = useMemo(() => uniqueTags(projects), [projects]);
    const filteredProjects = useMemo(
        () => projects.filter((project) => matchesProject(project, normalizedQuery, tag)),
        [normalizedQuery, projects, tag]
    );

    return {
        filteredProjects,
        query,
        setQuery,
        setTag,
        tag,
        tags,
    };
}
