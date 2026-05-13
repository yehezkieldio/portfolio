import { SkeletonHeader } from "../_component/loading-blocks";

export default function ProjectsLoading() {
    return (
        <section className="space-y-8">
            <SkeletonHeader />
            <ProjectSkeletonRows />
        </section>
    );
}

function ProjectSkeletonRows() {
    return (
        <div>
            {Array.from({ length: 3 }, (_, index) => (
                <article className="space-y-3 border-border border-b py-6 sm:py-7" key={index}>
                    <div className="flex items-baseline justify-between gap-4">
                        <div className="h-4 w-32 bg-muted sm:w-40" />
                        <div className="h-3 w-10 shrink-0 bg-muted" />
                    </div>

                    <div className="max-w-xl space-y-2">
                        <div className="h-3 w-full bg-muted" />
                        <div className="h-3 w-4/5 bg-muted" />
                    </div>

                    <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div className="h-3 w-44 bg-muted" />
                        <div className="flex items-center gap-3 sm:justify-end">
                            <div className="h-3 w-20 bg-muted" />
                            <div className="h-3 w-16 bg-muted" />
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
