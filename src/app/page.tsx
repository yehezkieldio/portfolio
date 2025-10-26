import { Suspense } from "react";
import { ProjectsPrimitive } from "#/features/projects";

export default async function Home() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <header className="mb-20 text-center">
                    <h1 className="mb-6 text-balance font-serif text-5xl tracking-tight md:text-4xl lg:text-4xl">
                        Project Archive
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
                        A collection of experiments, explorations, and creations of mine over the years.
                    </p>
                </header>

                <ProjectsPrimitive.Root>
                    <Suspense fallback={<div className="h-32 animate-pulse rounded-lg bg-surface" />}>
                        <ProjectsPrimitive.Filters />
                    </Suspense>

                    <Suspense fallback={<div className="mt-8 h-96 animate-pulse rounded-lg bg-surface" />}>
                        <ProjectsPrimitive.Grid />
                    </Suspense>

                    <Suspense fallback={<div className="mt-8 h-16 animate-pulse rounded-lg bg-surface" />}>
                        <ProjectsPrimitive.Pagination />
                    </Suspense>
                </ProjectsPrimitive.Root>
            </div>
        </div>
    );
}
