"use client";

import { AnimatePresence, motion } from "motion/react";
import { memo } from "react";
import { Card } from "#/features/projects/components/card";
import { useProjectsContext } from "#/features/projects/lib/context";

function GridComponent() {
    const { paginatedProjects, startIndex, endIndex, totalCount, filterKey } = useProjectsContext();

    if (totalCount === 0) {
        return (
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center"
                exit={{ opacity: 0, y: -20 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated">
                    <span className="text-3xl">🔍</span>
                </div>
                <h3 className="mb-2 font-semibold text-2xl">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </motion.div>
        );
    }

    return (
        <div>
            <motion.div
                animate={{ opacity: 1 }}
                className="mb-6 text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <span aria-atomic="true" aria-live="polite">
                    Showing {startIndex + 1}-{endIndex} of {totalCount} projects
                </span>
            </motion.div>
            <AnimatePresence mode="wait">
                <motion.div
                    animate="visible"
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    exit="hidden"
                    initial="hidden"
                    key={filterKey}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    {paginatedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                            }}
                        >
                            <Card project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export const Grid = memo(GridComponent);
Grid.displayName = "ProjectsPrimitive.Grid";
