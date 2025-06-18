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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { useViewTransition } from "#/hooks/use-view-transition";
import { Project, projects } from "#/lib/projects";
import MiniSearch from "minisearch";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useMemo, useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

interface ProjectListProps {
    itemsPerPage?: number;
}

export function ProjectList({ itemsPerPage = 6 }: ProjectListProps) {
    const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
    const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));
    const [selectedTag, setSelectedTag] = useQueryState("tag", parseAsString.withDefault(""));
    const [searchInput, setSearchInput] = useState(search);
    const { startViewTransition } = useViewTransition();

    const projectsMinisearch = useMemo(() => {
        const ms = new MiniSearch<Project>({
            fields: ["title", "desc", "tags", "additionalTags"],
            storeFields: ["title", "desc", "tags", "additionalTags"],
            searchOptions: {
                boost: { title: 2 },
                fuzzy: 0.2
            }
        });
        ms.addAll(projects);
        return ms;
    }, []);

    const debouncedSearch = useDebouncedCallback((value: string) => {
        startViewTransition(() => {
            setSearch(value);
            setPage(1);
        });
    }, 300);

    useEffect(() => {
        if (searchInput !== search) {
            debouncedSearch(searchInput);
        }
    }, [searchInput, search, debouncedSearch]);

    const allTags: string[] = useMemo((): string[] => {
        const tags = new Set<string>();
        projects.forEach((project: Project): void => {
            project.tags.forEach((tag: string): Set<string> => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    const filteredProjects = useMemo(() => {
        let results;
        if (search.trim() !== "") {
            results = projectsMinisearch.search(search, { combineWith: "AND" }).map((r) => r);
        } else {
            results = projects;
        }
        if (selectedTag !== "") {
            results = results.filter((project) => project.tags.includes(selectedTag));
        }
        return results;
    }, [search, selectedTag, projectsMinisearch]);

    const totalPages: number = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex: number = (page - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex) as Project[];

    const handleSearchChange = (value: string): void => {
        setSearchInput(value);
    };

    const handleTagChange = (value: string): void => {
        startViewTransition((): void => {
            setSelectedTag(value === "all" ? "" : value);
            setPage(1);
        });
    };

    const handlePageChange = (newPage: number): void => {
        startViewTransition((): void => {
            setPage(newPage);
        });

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
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
            <div className="flex flex-col gap-4 px-4 md:flex-row md:gap-4">
                <div className="flex-1">
                    <Input
                        type="text"
                        placeholder="Search projects by title, description, or tags..."
                        value={searchInput}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div className="w-full md:w-48">
                    <Select value={selectedTag || "all"} onValueChange={handleTagChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Filter by tag" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Tags</SelectItem>
                            {allTags.map((tag) => (
                                <SelectItem key={tag} value={tag}>
                                    {tag}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {filteredProjects.length === 0 && (search !== "" || selectedTag !== "") && (
                <div className="py-8 text-center">
                    <p className="text-muted-foreground">No projects found matching your search criteria.</p>
                </div>
            )}

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

            {totalPages > 1 && currentProjects.length > 0 && (
                <div className="mt-8 flex justify-center" style={{ viewTransitionName: "pagination" }}>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={(): void => handlePageChange(Math.max(1, page - 1))}
                                    className={page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                                const showPage =
                                    pageNum === 1 ||
                                    pageNum === totalPages ||
                                    (pageNum >= page - 1 && pageNum <= page + 1);

                                if (!showPage) {
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
