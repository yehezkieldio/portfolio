"use client";

import { ProjectCard } from "#/components/project-card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "#/components/ui/pagination";
import { useViewTransition } from "#/hooks/use-view-transition";
import { projects } from "#/lib/projects";
import { parseAsInteger, useQueryState } from "nuqs";

interface ProjectListProps {
    itemsPerPage?: number;
}

export function ProjectList({ itemsPerPage = 6 }: ProjectListProps) {
    const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
    const { startViewTransition } = useViewTransition();

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        startViewTransition(() => {
            setPage(newPage);
        });

        // Scroll to top of projects section with a slight delay for transition
        setTimeout(() => {
            const projectsSection = document.getElementById("projects-section");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    if (projects.length === 0) {
        return (
            <div className="py-8 text-center">
                <p className="text-muted-foreground">No projects to display yet.</p>
            </div>
        );
    }

    return (
        <div id="projects-section" className="flex flex-col gap-6">
            <div
                className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-4 lg:grid-cols-3"
                style={{ viewTransitionName: "project-grid" }}
            >
                {currentProjects.map((project, index) => (
                    <div
                        key={`${project.title}-${index}`}
                        className="animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: "both"
                        }}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-8 flex justify-center" style={{ viewTransitionName: "pagination" }}>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => handlePageChange(Math.max(1, page - 1))}
                                    className={page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                                // Show first page, last page, current page, and pages around current
                                const showPage =
                                    pageNum === 1 ||
                                    pageNum === totalPages ||
                                    (pageNum >= page - 1 && pageNum <= page + 1);

                                if (!showPage) {
                                    // Show ellipsis for gaps
                                    if (pageNum === page - 2 || pageNum === page + 2) {
                                        return (
                                            <PaginationItem key={pageNum}>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        );
                                    }
                                    return null;
                                }

                                return (
                                    <PaginationItem key={pageNum}>
                                        <PaginationLink
                                            onClick={() => handlePageChange(pageNum)}
                                            isActive={pageNum === page}
                                            className="cursor-pointer"
                                        >
                                            {pageNum}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                                    className={page >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
