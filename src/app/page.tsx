import Link from "next/link";
import { Suspense } from "react";
import { ProjectsPrimitive } from "#/features/projects";

export default async function Home() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <header className="mb-10 text-center">
                    <h1 className="mb-3 text-balance font-serif text-3xl tracking-tight md:text-4xl lg:text-4xl">
                        Project Archive
                    </h1>
                    <p className="mx-auto mt-2 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
                        A collection of experiments, explorations, and creations of mine over the years.
                    </p>
                </header>

                <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-surface" />}>
                    <ProjectsPrimitive.Root>
                        <ProjectsPrimitive.Filters />
                        <ProjectsPrimitive.Grid />
                        <ProjectsPrimitive.Pagination />
                    </ProjectsPrimitive.Root>
                </Suspense>

                <footer className="mt-20 pt-12 text-center">
                    <p className="mx-auto max-w-4xl text-pretty text-muted-foreground text-xs md:text-base">
                        This project archive belongs to{" "}
                        <span className="font-medium">Yehezkiel Dio Sinolungan</span>.
                    </p>
                    <p className="mx-auto mt-2 max-w-4xl text-pretty text-muted-foreground text-xs md:text-base">
                        Want to see more? Check out my{" "}
                        <Link
                            className="underline underline-offset-4 transition-colors hover:text-foreground"
                            href="https://github.com/yehezkieldio"
                            rel="noreferrer"
                            target="_blank"
                        >
                            GitHub profile
                        </Link>
                        .
                    </p>
                </footer>
            </div>
        </div>
    );
}
