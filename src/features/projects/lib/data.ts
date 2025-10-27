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
    {
        id: "5",
        title: "Raiden",
        description: "An operations management Discord bot built for the Genshin Impact ID community.",
        category: "Discord Bot",
        year: 2021,
        technologies: ["TypeScript", "Discord.js"],
        sourceUrl: "https://gitlab.com/yehezkieldio/raiden",
    },
    {
        id: "6",
        title: "Mythcord",
        description:
            "A yet another multipurpose Discord bot with various features, utilities and a web dashboard.",
        category: "Discord Bot",
        year: 2021,
        technologies: ["TypeScript", "Discord.js", "React", "Next.js"],
        sourceUrl: "https://gitlab.com/yehezkieldio/mythcord",
    },
    {
        id: "7",
        title: "genshin-db",
        description:
            "A data package for Genshin Impact, providing information about characters, weapons, and artifacts.",
        category: "Library",
        technologies: ["JavaScript"],
        year: 2020,
        sourceUrl: "https://github.com/theBowja/genshin-db",
    },
    {
        id: "8",
        title: "Finance Recap",
        description:
            "A web application that extracts, manipulates, and displays financial data from Excel spreadsheets.",
        category: "Web Development",
        year: 2022,
        technologies: ["PHP", "Laravel", "MongoDB"],
        sourceUrl: "https://github.com/astrantialabs/finance-recap",
        image: "/img_projects/8.png",
    },
    {
        id: "9",
        title: "Inventory Management",
        description:
            "An web application with the aim of managing the office asset inventory of an organization.",
        category: "Web Development",
        year: 2022,
        technologies: ["React", "Next.js", "Nest.js", "MongoDB"],
        sourceUrl: "https://github.com/astrantialabs/administrare",
        image: "/img_projects/9.png",
    },
    {
        id: "10",
        title: "Pittacia",
        description:
            "CLI to quickly create or override GitHub issue labels from a JSON file to a repository.",
        category: "Library",
        year: 2023,
        technologies: ["Rust"],
        sourceUrl: "https://github.com/yehezkieldio/pittacia",
    },
    {
        id: "11",
        title: "Voidsong",
        description: "Self-hosted API aggregator for various random contents.",
        category: "API",
        year: 2024,
        technologies: ["Rust", "Docker"],
        sourceUrl: "https://github.com/yehezkieldio/voidsong",
    },
    {
        id: "12",
        title: "Dikaios",
        description: "A desktop application for a various IP address management tools.",
        category: "Desktop Application",
        year: 2024,
        technologies: ["Tauri", "Vite", "Rust", "React", "TypeScript"],
        sourceUrl: "https://github.com/yehezkieldio/dikaios",
        image: "/img_projects/12.png",
    },
    {
        id: "13",
        title: "TrashTrack",
        description: "IoT-based smart trash bin system for filtering and monitoring trash efficiently.",
        category: "Mobile Application",
        year: 2024,
        technologies: ["Capacitor", "Ionic", "Vite", "React", "TypeScript"],
        sourceUrl: "https://github.com/trashtrackteam/trashtrack",
        image: "/img_projects/13.png",
    },
    {
        id: "14",
        title: "Imperia",
        description:
            "A versatile Discord bot designed to be a comprehensive solution for a wide range of tasks.",
        category: "Discord Bot",
        year: 2024,
        technologies: ["TypeScript", "Discord.js"],
        sourceUrl: "https://github.com/yehezkieldio/imperia-2024",
    },
];
