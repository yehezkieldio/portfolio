"use client";

import { memo } from "react";
import { Card } from "#/features/projects/components/card";
import { useProjectsContext } from "#/features/projects/lib/context";

function GridComponent() {
    const { paginatedProjects, startIndex, endIndex, totalCount } = useProjectsContext();

    if (totalCount === 0) {
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
                Showing {startIndex + 1}-{endIndex} of {totalCount} projects
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export const Grid = memo(GridComponent);
Grid.displayName = "ProjectsPrimitive.Grid";
