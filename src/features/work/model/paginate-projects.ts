export const PROJECTS_PER_PAGE = 6;

export function paginateProjects<T>(items: readonly T[], page: number, perPage = PROJECTS_PER_PAGE) {
    const totalItems = items.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const startIndex = (currentPage - 1) * perPage;

    return {
        currentPage,
        items: items.slice(startIndex, startIndex + perPage),
        totalItems,
        totalPages,
    } as const;
}
