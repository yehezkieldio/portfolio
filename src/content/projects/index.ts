import type { z } from "zod";

import { type Project, projectSchema } from "./schema";

const projectRecords = [
    {
        slug: "trashtrack",
        title: "TrashTrack",
        summary:
            "Internet of Things (IoT) smart trash bin monitoring system for real-time fill level tracking and waste management solutions.",
        category: "Mobile Application",
        year: "2024",
        tags: ["TypeScript", "Capacitor", "Vite", "React", "Nx"],
        featured: true,
        repoUrl: "https://github.com/trashtrackteam/trashtrack",
    },
    {
        slug: "azalea",
        title: "Azalea",
        summary: "Discord bot for downloading images/videos from X (formerly Twitter) and reuploading them to Discord.",
        category: "Discord Bot",
        year: "2026",
        tags: ["Rust", "Twilight", "Tokio"],
        featured: true,
        repoUrl: "https://github.com/yehezkieldio/azalea",
    },
    {
        slug: "firefly",
        title: "Firefly",
        summary:
            "CLI for automated project releases, including semantic versioning, changelog generation, and GitHub releases.",
        category: "Developer Tooling",
        year: "2025",
        tags: ["TypeScript", "Bun", "NPM"],
        featured: true,
        repoUrl: "https://github.com/yehezkieldio/firefly",
    },

    {
        slug: "administrate",
        title: "Administrate",
        summary:
            "Internal management portal for overseeing lifecycle of office assets for inventory tracking, procurement, and administration.",
        category: "Web Application",
        year: "2022",
        tags: ["TypeScript", "React", "Next.js", "Nest.js", "MongoDB"],
        featured: true,
        repoUrl: "https://github.com/astrantialabs/administrare",
    },
] as const satisfies readonly z.input<typeof projectSchema>[];

export const projects = Object.freeze(
    projectRecords.map((project) => projectSchema.parse(project))
) as readonly Project[];
