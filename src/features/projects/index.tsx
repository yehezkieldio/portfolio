"use client";

import type { ReactNode } from "react";
import { Card } from "#/features/projects/components/card";
import { Filters } from "#/features/projects/components/filters";
import { Grid } from "#/features/projects/components/grid";
import { Pagination } from "#/features/projects/components/pagination";
import { ProjectsProvider } from "#/features/projects/lib/context";

/**
 * ProjectsPrimitive - Compound Component API for Projects
 *
 * A composable, performance-optimized component system for displaying and filtering projects.
 *
 * Architecture:
 * - Container/Presenter Pattern: Separates data fetching (Root) from presentation (Filters, Grid, Card, Pagination)
 * - Compound Components: Related components that work together through shared context
 *
 * Performance Optimizations:
 * - All child components are memoized to prevent unnecessary re-renders
 * - MiniSearch instance is singleton (created once, reused)
 * - Filtering and pagination logic is memoized
 * - Context updates are batched and optimized
 *
 * Usage:
 * ```tsx
 * <ProjectsPrimitive.Root>
 *   <ProjectsPrimitive.Filters />
 *   <ProjectsPrimitive.Grid />
 *   <ProjectsPrimitive.Pagination />
 * </ProjectsPrimitive.Root>
 * ```
 */

/**
 * Root - Container component that manages all project state
 */
interface RootProps {
    children: ReactNode;
    itemsPerPage?: number;
}

function Root({ children, itemsPerPage }: RootProps) {
    return <ProjectsProvider itemsPerPage={itemsPerPage}>{children}</ProjectsProvider>;
}

/**
 * Export compound component API
 */
export const ProjectsPrimitive = {
    Root,
    Filters,
    Grid,
    Card,
    Pagination,
};
