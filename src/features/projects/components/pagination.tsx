"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { memo, useCallback } from "react";
import { Button } from "#/components/ui/button";
import { useProjectsContext } from "#/features/projects/lib/context";

function PaginationComponent() {
    const { currentPage, totalPages, setFilters } = useProjectsContext();

    const handlePageChange = useCallback(
        (newPage: number) => {
            setFilters({ page: newPage });
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        [setFilters]
    );

    const handlePrevious = useCallback(() => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    }, [currentPage, handlePageChange]);

    const handleNext = useCallback(() => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    }, [currentPage, totalPages, handlePageChange]);

    if (totalPages <= 1) return null;

    return (
        <div className="mt-16 flex items-center justify-center gap-2">
            <Button
                className="border-border bg-transparent transition-all hover:border-accent/30 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                disabled={currentPage === 1}
                onClick={handlePrevious}
                size="icon"
                variant="outline"
            >
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
            </Button>

            <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isCurrentPage = currentPage === pageNum;
                    return (
                        <Button
                            className={
                                isCurrentPage
                                    ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "border-border transition-all hover:border-accent/30 hover:bg-muted"
                            }
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            size="icon"
                            variant={isCurrentPage ? "default" : "outline"}
                        >
                            {pageNum}
                        </Button>
                    );
                })}
            </div>

            <Button
                className="border-border bg-transparent transition-all hover:border-accent/30 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                disabled={currentPage === totalPages}
                onClick={handleNext}
                size="icon"
                variant="outline"
            >
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Next page</span>
            </Button>
        </div>
    );
}

export const Pagination = memo(PaginationComponent);
Pagination.displayName = "ProjectsPrimitive.Pagination";
