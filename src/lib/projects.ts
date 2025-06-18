export interface Project {
    id?: string;
    title: string;
    desc: string;
    tags: string[];
    additionalTags?: string[];
    viewLink?: string;
    codeLink?: string;
}

export const _projects: Project[] = [
    {
        title: "Artemis",
        desc: "CLI orchestrator for automatic semantic versioning, changelog generation, and creating releases.",
        tags: ["CLI", "NPM", "TypeScript"],
        additionalTags: ["Bun"],
        codeLink: "https://github.com/yehezkieldio/artemis"
    },
    {
        title: "Imperia",
        desc: "A versatile Discord bot designed to be a comprehensive solution for a wide range of tasks.",
        tags: ["TypeScript", "Discord.js"],
        additionalTags: ["Bun"],
        codeLink: "https://github.com/yehezkieldio/imperia-2024"
    },
    {
        title: "TrashTrack",
        desc: "IoT-based smart trash bin system for filtering and monitoring trash efficiently.",
        tags: ["React", "NestJS", "PostgreSQL", "Espressif"],
        additionalTags: ["Capacitor", "Vite", "Ionic", "shadcn/ui", "TailwindCSS", "Prisma", "Java", "C++"],
        codeLink: "https://github.com/trashtrackteam/trashtrack"
    },
    {
        title: "Administrarte",
        desc: "An intuitive website application with the aim of managing the office asset inventory of an organization.",
        tags: ["React", "Next.js", "NestJS", "FastAPI", "MongoDB"],
        additionalTags: ["Redux", "Chakra UI", "Python"],
        codeLink: "https://github.com/astrantialabs/administrare"
    },
    {
        title: "dikaios",
        desc: "A comprehensive Tauri desktop application for a various IP address management tools.",
        tags: ["React", "Tauri", "TypeScript", "Rust"],
        additionalTags: ["Bun", "Vite"],
        codeLink: "https://github.com/yehezkieldio/dikaios"
    },
    {
        title: "Voidsong",
        desc: "Self-hosted API aggregator for various random contents built using Axum.",
        tags: ["Axum", "Rust", "Docker"],
        codeLink: "https://github.com/yehezkieldio/voidsong"
    },
    {
        title: "pittacia",
        desc: "CLI to quickly load and overwrite GitHub labels from a JSON file to a repository.",
        tags: ["CLI", "Rust"],
        codeLink: "https://github.com/yehezkieldio/pittacia"
    },
    {
        title: "Finance Recap",
        desc: "A web application that extracts, manipulates, and displays financial data from Excel spreadsheets.",
        tags: ["Laravel", "Python", "MongoDB"],
        additionalTags: ["Livewire", "SQLite", "Sass"],
        codeLink: "https://github.com/astrantialabs/administrare"
    },
    {
        title: "genshin-db",
        desc: "A JSON data package for Genshin Impact, providing detailed information about characters, weapons, and artifacts.",
        tags: ["NPM", "JavaScript"],
        codeLink: "https://github.com/theBowja/genshin-db"
    },
    {
        title: "ProjectileHP",
        desc: "A PocketMine-MP plugin that displays the player health and play sound on projectile hit.",
        tags: ["PocketMine-MP", "PHP"],
        codeLink: "https://gitlab.com/yehezkieldio/projectilehp"
    },
    {
        title: "Mythcord",
        desc: "A yet another multipurpose Discord bot with various features, utilities and a web dashboard.",
        tags: ["React", "Next.js", "TypeScript", "Discord.js"],
        codeLink: "https://github.com/yehezkieldio/mythcord-old"
    },
    {
        title: "Raiden",
        desc: "A general operations management Discord bot for the Discord community: Genshin Impact ID.",
        tags: ["TypeScript", "Discord.js"],
        codeLink: "https://github.com/yehezkieldio/raiden-old"
    },
    {
        title: "Lumine",
        desc: "A simple Indonesian multipurpose Discord bot that provides various basic features.",
        tags: ["JavaScript", "Discord.js"],
        codeLink: "https://github.com/yehezkieldio/lumine-old"
    },
    {
        title: "Aqua",
        desc: "A landing page for AQUA, the mineral water brand, showcasing its products and features.",
        tags: ["HTML", "CSS"],
        codeLink: "https://github.com/yehezkieldio/aqua-concept-website",
        viewLink: "https://yehezkieldio.github.io/aqua-concept-website"
    },
    {
        title: "LokasiZero",
        desc: "A landing page for fictional cybersecurity company, part of a competition project.",
        tags: ["HTML", "CSS"],
        codeLink: "https://github.com/yehezkieldio/lokasi-zero",
        viewLink: "https://yehezkieldio.github.io/lokasi-zero"
    }
];

export function remapProjects(projects: Project[]): Project[] {
    return projects.map((project) => ({
        ...project,
        id: project.id || crypto.randomUUID()
    }));
}

export const projects = remapProjects(_projects);
