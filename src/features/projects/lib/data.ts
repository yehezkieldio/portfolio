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
        technologies: ["JavaScript", "discord.js"],
        sourceUrl: "https://gitlab.com/yehezkieldio/lumine",
    },
    {
        id: "3",
        title: "LokasiZero",
        description: "A landing page for fictional cybersecurity company, part of a competition project.",
        category: "Web Application",
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
        category: "Web Application",
        year: 2022,
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
        technologies: ["TypeScript", "discord.js"],
        sourceUrl: "https://gitlab.com/yehezkieldio/raiden",
    },
    {
        id: "6",
        title: "Mythcord",
        description:
            "A yet another multipurpose Discord bot with various features, utilities and a web dashboard.",
        category: "Discord Bot",
        year: 2021,
        technologies: ["TypeScript", "discord.js", "React", "Next.js"],
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
        category: "Web Application",
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
        category: "Web Application",
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
        category: "CLI",
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
        technologies: ["TypeScript", "discord.js"],
        sourceUrl: "https://github.com/yehezkieldio/imperia-2024",
    },
    {
        id: "15",
        title: "Topaz",
        description:
            "A personal reading tracker and metadata hub for fanfiction, webnovels, and online fiction.",
        category: "Web Application",
        year: 2025,
        technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"],
        sourceUrl: "https://github.com/yehezkieldio/topaz",
        viewUrl: "https://topaz-elizielx.vercel.app",
        image: "/img_projects/15.png",
    },
    {
        id: "16",
        title: "Firefly",
        description:
            "Automatic semantic versioning, changelog generation, and creating GitHub releases via a CLI.",
        category: "CLI",
        year: 2025,
        technologies: ["Bun", "TypeScript"],
        sourceUrl: "https://github.com/yehezkieldio/firefly",
        viewUrl: "https://npmjs.com/package/fireflyy",
    },
    {
        id: "17",
        title: "Sleeplesslabs",
        description: "The landing page for Sleeplesslabs, a software development group.",
        category: "Web Application",
        year: 2024,
        technologies: ["React", "Next.js", "TypeScript"],
        sourceUrl: "https://github.com/sleeplesslabs/sleeplesslabs-web",
        image: "/img_projects/17.png",
    },
    {
        id: "18",
        title: "Asteria",
        description: "Remote input relay system to control Windows from Linux peripherals over the network.",
        category: "CLI",
        year: 2025,
        technologies: ["Rust"],
        sourceUrl: "https://github.com/yehezkieldio/asteria",
    },
    {
        id: "19",
        title: "Kyra",
        description:
            "A tool for seamless transfer of various data types between my Windows and Arch Linux laptops.",
        category: "CLI",
        year: 2025,
        technologies: ["Rust"],
        sourceUrl: "https://github.com/yehezkieldio/kyra",
    },
    {
        id: "20",
        title: "Astral",
        description: "Landing page template with a design inspired from GitBook and the stars.",
        category: "Web Application",
        year: 2024,
        technologies: ["Astro"],
        sourceUrl: "https://github.com/yehezkieldio/astral",
        image: "/img_projects/20.png",
    },
    {
        id: "21",
        title: "Callisto",
        description:
            "Automatically streamline the setup and configuration process for various tools and utilities.",
        category: "CLI",
        year: 2024,
        technologies: ["TypeScript"],
        sourceUrl: "https://github.com/yehezkieldio/callisto",
    },
    {
        id: "22",
        title: "ArgoNavis",
        description:
            "Gemini-powered Discord bot with with RAG (retrieval-augmented generation) capabilities.",
        category: "Discord Bot",
        year: 2025,
        technologies: ["TypeScript", "discord.js", "PostgreSQL"],
        sourceUrl: "https://github.com/yehezkieldio/argonavis",
    },
    {
        id: "23",
        title: "Amaya",
        description: "Schema/file-based automated opinionated development configurations.",
        category: "CLI",
        year: 2025,
        technologies: ["Rust"],
        sourceUrl: "https://github.com/yehezkieldio/amaya",
    },
    {
        id: "24",
        title: "Avalon",
        description:
            "Cloudflare Workers-based Discord bot using LLMs for fast, context-aware question answering.",
        category: "Discord Bot",
        year: 2025,
        technologies: ["TypeScript", "LangChain", "Cloudflare Workers"],
        sourceUrl: "https://github.com/yehezkieldio/avalon",
    },
    {
        id: "25",
        title: "Starrlight",
        description: "Turn your GitHub stars into a beautiful Awesome List with ease.",
        category: "CLI",
        year: 2025,
        technologies: ["Rust"],
        sourceUrl: "https://github.com/yehezkieldio/starrlight",
    },
    {
        id: "26",
        title: "Magnus",
        description: "Simple chess game that allows you to play by taking turns with another player",
        category: "Desktop Application",
        year: 2024,
        technologies: ["Visual Basic .NET"],
        sourceUrl: "https://github.com/yehezkieldio/magnus",
        image: "/img_projects/26.png",
    },
    {
        id: "27",
        title: "Antimony",
        description:
            "API that provides a wrapper around LiveKit for managing real-time video/audio rooms and access tokens.",
        category: "API",
        year: 2024,
        technologies: ["Go", "Docker"],
        sourceUrl: "https://github.com/yehezkieldio/antimony",
    },
    {
        id: "28",
        title: "Imperia AI",
        description: "Flexible Discord chat bot with various AI providers and sources.",
        category: "Discord Bot",
        year: 2025,
        technologies: ["TypeScript", "discord.js", "AI SDK"],
        sourceUrl: "https://github.com/yehezkieldio/imperia-ai",
    },
    {
        id: "29",
        title: "TrackRunny",
        description: "TrackRunny's personal website.",
        category: "Web Application",
        year: 2020,
        technologies: ["HTML", "CSS", "JavaScript"],
        sourceUrl: "https://github.com/TrackRunny/TrackRunny-Website",
        image: "/img_projects/29.png",
    },
    {
        id: "30",
        title: "Obama",
        description: "A landing page for Obama, a feature-rich multifunction Discord bot.",
        category: "Web Application",
        year: 2020,
        technologies: ["HTML", "CSS", "JavaScript"],
        sourceUrl: "https://github.com/FutureDeveloperZ/web",
        image: "/img_projects/30.png",
    },
    {
        id: "31",
        title: "ExynosNetwork",
        description: "A landing page for ExynosNetwork, a skyblock Minecrat Bedrock Edition server.",
        category: "Web Application",
        year: 2020,
        technologies: ["HTML", "CSS", "JavaScript"],
        viewUrl: "https://codepen.io/elizielx/pen/QWGRjXV",
        image: "/img_projects/31.png",
    },
];
