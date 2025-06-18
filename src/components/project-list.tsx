"use client";

import { ProjectCard } from "#/components/project-card";
import { Input } from "#/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "#/components/ui/pagination";
import { Select } from "#/components/ui/select";
import { useViewTransition } from "#/hooks/use-view-transition";
import { projects } from "#/lib/projects";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useMemo } from "react";

interface ProjectListProps {
    itemsPerPage?: number;
}

export function ProjectList({ itemsPerPage = 6 }: ProjectListProps) {
    const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
    const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));
    const [selectedTag, setSelectedTag] = useQueryState("tag", parseAsString.withDefault(""));
    const { startViewTransition } = useViewTransition();

    // Get all unique tags from projects
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach((project) => {
            project.tags.forEach((tag) => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    // Filter projects based on search and tag
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // Search filter: check title first, then description, then tags
            const matchesSearch =
                search === "" ||
                project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.description.toLowerCase().includes(search.toLowerCase()) ||
                project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

            // Tag filter
            const matchesTag = selectedTag === "" || project.tags.includes(selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [search, selectedTag]);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // Reset page to 1 when filters change
    const handleSearchChange = (value: string) => {
        startViewTransition(() => {
            setSearch(value);
            setPage(1);
        });
    };

    const handleTagChange = (value: string) => {
        startViewTransition(() => {
            setSelectedTag(value);
            setPage(1);
        });
    };

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
            {/* Search and Filter Controls */}
            <div className="flex flex-col gap-4 px-4 md:flex-row md:gap-4">
                <div className="flex-1">
                    <Input
                        type="text"
                        placeholder="Search projects by title, description, or tags..."
                        value={search}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div className="w-full md:w-48">
                    <Select value={selectedTag} onChange={(e) => handleTagChange(e.target.value)} className="w-full">
                        <option value="">All Tags</option>
                        {allTags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </Select>
                </div>
            </div>

            {/* No results message */}
            {filteredProjects.length === 0 && (search !== "" || selectedTag !== "") && (
                <div className="py-8 text-center">
                    <p className="text-muted-foreground">No projects found matching your search criteria.</p>
                </div>
            )}

            {/* Projects Grid */}
            {currentProjects.length > 0 && (
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
            )}

            {/* Pagination */}
            {totalPages > 1 && currentProjects.length > 0 && (
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
