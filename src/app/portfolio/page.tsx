import { AmbientBackdrop } from "#/components/layout/ambient-backdrop";
import { SiteFrame } from "#/components/site-frame";
import { projects } from "#/content/projects";
import { WorkHero } from "#/features/work/components/work-hero";
import { filterProjects } from "#/features/work/model/filter-projects";
import { paginateProjects } from "#/features/work/model/paginate-projects";
import {
    getProjectFilterOptions,
    normalizeProjectFilters,
    projectFilterCache,
} from "#/features/work/model/project-filters";

type PortfolioPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
    const options = getProjectFilterOptions(projects);

    await projectFilterCache.parse(searchParams);

    const filters = normalizeProjectFilters(projectFilterCache.all(), options);
    const filteredProjects = filterProjects(projects, filters);
    const pagination = paginateProjects(filteredProjects, filters.page);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AmbientBackdrop />
            <main>
                <SiteFrame>
                    <WorkHero activeResultCount={filteredProjects.length} filters={filters} />
                </SiteFrame>
            </main>
        </div>
    );
}
