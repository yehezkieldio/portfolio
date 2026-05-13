type SkeletonRowsProps = {
    count?: number;
};

function skeletonRowKeys(count: number) {
    return Array.from({ length: count }, (_, index) => `skeleton-row-${index + 1}`);
}

export function SkeletonHeader() {
    return (
        <div className="space-y-2.5 sm:space-y-3">
            <div className="h-6 w-36 bg-muted sm:h-7 sm:w-40" />
            <div className="h-4 w-full max-w-xl bg-muted" />
        </div>
    );
}

export function SkeletonRows({ count = 3 }: SkeletonRowsProps) {
    return (
        <div className="border-border border-t">
            {skeletonRowKeys(count).map((key) => (
                <article
                    className="grid gap-3.5 border-border border-b py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-8"
                    key={key}
                >
                    <div className="h-3 w-5 bg-muted" />
                    <div className="space-y-4">
                        <div className="h-5 w-36 bg-muted" />
                        <div className="space-y-2">
                            <div className="h-3 w-full bg-muted" />
                            <div className="h-3 w-4/5 bg-muted" />
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
