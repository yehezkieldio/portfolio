"use client";

type ProjectPaginationProps = {
    currentPage: number;
    onNext: () => void;
    onPrevious: () => void;
    pageCount: number;
    resultCount: number;
};

export function ProjectPagination({ currentPage, onNext, onPrevious, pageCount, resultCount }: ProjectPaginationProps) {
    return (
        <div className="grid gap-4 text-sm min-[420px]:flex min-[420px]:items-center min-[420px]:justify-between">
            <p className="font-mono text-muted-foreground text-xs">
                {resultCount} result{resultCount === 1 ? "" : "s"} / page {currentPage} of {pageCount}
            </p>
            <div className="grid grid-cols-2 gap-2 min-[420px]:flex">
                <button
                    className="motion-focus motion-press min-h-10 border border-border px-3 py-1.5 text-muted-foreground/75 disabled:pointer-events-none disabled:opacity-35 min-[420px]:min-h-0"
                    disabled={currentPage === 1}
                    onClick={onPrevious}
                    type="button"
                >
                    prev
                </button>
                <button
                    className="motion-focus motion-press min-h-10 border border-border px-3 py-1.5 text-muted-foreground/75 disabled:pointer-events-none disabled:opacity-35 min-[420px]:min-h-0"
                    disabled={currentPage === pageCount}
                    onClick={onNext}
                    type="button"
                >
                    next
                </button>
            </div>
        </div>
    );
}
