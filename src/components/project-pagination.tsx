"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { Button } from "#/components/ui/button";

export function ProjectPagination() {
    const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

    // This would normally come from the filtered projects count
    // For now, we'll use a placeholder
    const totalPages = 5;

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePageClick = (pageNum: number) => {
        setPage(pageNum);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (totalPages <= 1) return null;

    return (
        <div className="mt-16 flex items-center justify-center gap-2">
            <Button
                className="border-border bg-transparent transition-all hover:border-accent/30 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                disabled={page === 1}
                onClick={handlePrevious}
                size="icon"
                variant="outline"
            >
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
            </Button>

            <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Button
                        className={
                            page === pageNum
                                ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                                : "border-border transition-all hover:border-accent/30 hover:bg-muted"
                        }
                        key={pageNum}
                        onClick={() => handlePageClick(pageNum)}
                        size="icon"
                        variant={page === pageNum ? "default" : "outline"}
                    >
                        {pageNum}
                    </Button>
                ))}
            </div>

            <Button
                className="border-border bg-transparent transition-all hover:border-accent/30 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                disabled={page === totalPages}
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
