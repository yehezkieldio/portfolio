"use client";

import { addTransitionType, startTransition, useRef, ViewTransition } from "react";
import { ProjectControls } from "./project-controls";
import { ProjectList } from "./project-list";
import { ProjectPagination } from "./project-pagination";
import type { ProjectListItem } from "./project-types";
import { useProjectIndex } from "./use-project-index";

type ProjectIndexProps = {
    projects: ProjectListItem[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
    const projectIndex = useProjectIndex(projects);
    const listTopRef = useRef<HTMLDivElement>(null);

    function scrollToListTop() {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.requestAnimationFrame(() => {
            listTopRef.current?.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start",
            });
        });
    }

    function paginate(direction: "next" | "previous") {
        startTransition(() => {
            addTransitionType(direction === "next" ? "project-next" : "project-previous");
            projectIndex.setPage((page) =>
                direction === "next" ? Math.min(projectIndex.pageCount, page + 1) : Math.max(1, page - 1)
            );
        });
        scrollToListTop();
    }

    return (
        <div className="space-y-7">
            <ProjectControls
                onQueryChange={(query) => {
                    projectIndex.setQuery(query);
                    projectIndex.resetPage();
                }}
                onTagChange={(tag) => {
                    projectIndex.setTag(tag);
                    projectIndex.resetPage();
                }}
                query={projectIndex.query}
                tag={projectIndex.tag}
                tags={projectIndex.tags}
            />

            <div ref={listTopRef} />
            <ViewTransition
                default="none"
                update={{
                    "project-next": "project-next",
                    "project-previous": "project-previous",
                    default: "none",
                }}
            >
                <div className="border-border border-t" key={projectIndex.currentPage}>
                    <ProjectList
                        page={projectIndex.currentPage}
                        pageSize={projectIndex.pageSize}
                        projects={projectIndex.visibleItems}
                    />
                </div>
            </ViewTransition>

            <ProjectPagination
                currentPage={projectIndex.currentPage}
                onNext={() => paginate("next")}
                onPrevious={() => paginate("previous")}
                pageCount={projectIndex.pageCount}
                resultCount={projectIndex.filteredProjects.length}
            />
        </div>
    );
}
