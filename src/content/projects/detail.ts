import "server-only";

import { projectPages } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { projects } from ".";

const projectPageSource = loader({
    baseUrl: "/portfolio",
    source: toFumadocsSource(projectPages, []),
});

const knownProjectSlugs = new Set(projects.map((project) => project.slug));

function assertKnownProjectSlug(slug: string) {
    if (!knownProjectSlugs.has(slug)) {
        throw new Error(`Project detail slug "${slug}" is not present in src/content/projects/index.ts.`);
    }

    return slug;
}

export function getProjectDetailPages() {
    return projectPageSource.getPages().map((page) => {
        assertKnownProjectSlug(page.data.slug);
        return page;
    });
}

export function getProjectDetailSlugs() {
    return getProjectDetailPages().map((page) => page.data.slug);
}

export function getProjectDetailPage(slug: string) {
    const page = projectPageSource.getPage([slug]);

    if (!page) {
        return;
    }

    return assertKnownProjectSlug(page.data.slug) === slug ? page : undefined;
}

export type ProjectDetailPage = NonNullable<ReturnType<typeof getProjectDetailPage>>;
