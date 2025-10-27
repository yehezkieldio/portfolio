export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    year: number;
    technologies: string[];
    image?: string;
    viewUrl?: string;
    sourceUrl?: string;
}

export function getUniqueCategories(projects: Project[]): string[] {
    return Array.from(new Set(projects.map((p) => p.category))).sort();
}

export function getUniqueTechnologies(projects: Project[]): string[] {
    return Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();
}

export function getUniqueYears(projects: Project[]): number[] {
    return Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "ProjectileHP",
        description: "PocketMine-MP plugin that display Health and Playsound on Projectile Hit.",
        category: "Plugin",
        year: 2019,
        technologies: ["PHP"],
        sourceUrl: "https://gitlab.com/yehezkieldio/projectilehp",
    },
];
