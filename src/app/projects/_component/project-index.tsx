"use client";

import { ProjectControls } from "./project-controls";
import { ProjectList } from "./project-list";
import type { ProjectListItem } from "./project-types";
import { useProjectIndex } from "./use-project-index";

type ProjectIndexProps = {
    projects: ProjectListItem[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
    const projectIndex = useProjectIndex(projects);

    return (
        <div className="space-y-7">
            <ProjectControls
                onQueryChange={projectIndex.setQuery}
                onTagChange={projectIndex.setTag}
                query={projectIndex.query}
                tag={projectIndex.tag}
                tags={projectIndex.tags}
            />

            <ProjectList projects={projectIndex.filteredProjects} />
        </div>
    );
}
