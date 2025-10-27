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
        image: "/img_projects/1.png",
    },
    {
        id: "2",
        title: "Lumine",
        description: "A simple Indonesian multipurpose Discord bot that provides various basic features.",
        category: "Discord Bot",
        year: 2021,
        technologies: ["JavaScript", "Discord.js"],
        sourceUrl: "https://gitlab.com/yehezkieldio/lumine",
    },
    {
        id: "3",
        title: "LokasiZero",
        description: "A landing page for fictional cybersecurity company, part of a competition project.",
        category: "Web Development",
        year: 2023,
        technologies: ["HTML", "CSS", "JavaScript"],
        sourceUrl: "https://github.com/yehezkieldio/lokasi-zero",
        viewUrl: "https://yehezkieldio.github.io/lokasi-zero",
        image: "/img_projects/3.png",
    },
    {
        id: "4",
        title: "Aqua",
        description:
            "A landing page for AQUA, the mineral water brand, showcasing its products and features.",
        category: "Web Development",
        year: 2023,
        technologies: ["HTML", "CSS", "JavaScript"],
        sourceUrl: "https://github.com/yehezkieldio/aqua-concept-website",
        viewUrl: "https://yehezkieldio.github.io/aqua-concept-website",
        image: "/img_projects/4.png",
    },
];
