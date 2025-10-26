import type { ReactNode } from "react";
import { Card } from "#/features/projects/components/card";
import { Filters } from "#/features/projects/components/filters";
import { Grid } from "#/features/projects/components/grid";
import { Pagination } from "#/features/projects/components/pagination";
import { ProjectsProvider } from "#/features/projects/lib/context";

interface RootProps {
    children: ReactNode;
    itemsPerPage?: number;
}

function Root({ children, itemsPerPage }: RootProps) {
    return <ProjectsProvider itemsPerPage={itemsPerPage}>{children}</ProjectsProvider>;
}

Root.displayName = "ProjectsPrimitive.Root";

const ProjectsPrimitive = {
    Root,
    Filters,
    Grid,
    Card,
    Pagination,
};

export { ProjectsPrimitive };
