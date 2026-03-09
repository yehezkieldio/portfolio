import type { z } from "zod";

import { type Project, projectSchema } from "./schema";

const projectRecords = [
    {
        slug: "signalboard",
        title: "Signalboard",
        category: "Product analytics dashboard",
        year: "2026",
        summary:
            "A server-first monitoring workspace for product teams that need release visibility, calmer reporting, and fewer dashboard tabs pretending to help.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Charts"],
        image: "/img_projects/1.png",
        featured: true,
    },
    {
        slug: "release-cabinet",
        title: "Release Cabinet",
        category: "Developer tooling",
        year: "2025",
        summary:
            "A changelog and versioning workflow that turns pull request metadata into clean release notes, structured tags, and dependable deployment summaries.",
        tags: ["Node.js", "CLI", "GitHub Actions", "Automation"],
    },
    {
        slug: "field-notes",
        title: "Field Notes",
        category: "Editorial publishing",
        year: "2025",
        summary:
            "A content pipeline for articles and case studies with local authoring, typed metadata, and layouts designed to reward reading instead of rushing.",
        tags: ["Next.js", "MDX", "SEO", "Content"],
        image: "/img_projects/12.png",
        featured: true,
    },
    {
        slug: "canvas-zero",
        title: "Canvas Zero",
        category: "Design system sandbox",
        year: "2024",
        summary:
            "A proving ground for reusable UI patterns, motion rules, and responsive layout decisions before they harden into product code.",
        tags: ["Design Systems", "Tailwind CSS", "Accessibility"],
        image: "/img_projects/13.png",
        featured: true,
    },
    {
        slug: "deploy-sentinel",
        title: "Deploy Sentinel",
        category: "Delivery automation",
        year: "2024",
        summary:
            "A set of release guardrails that validates environment contracts, prevents risky deploys, and surfaces the exact failure state before users find it first.",
        tags: ["CI/CD", "Docker", "Validation", "Ops"],
    },
    {
        slug: "partner-portal",
        title: "Partner Portal",
        category: "B2B workspace",
        year: "2024",
        summary:
            "An authenticated workspace for operations teams with role-aware navigation, document workflows, and a visual system tuned for clarity under pressure.",
        tags: ["Auth", "UX", "TypeScript", "APIs"],
        image: "/img_projects/15.png",
        featured: true,
    },
    {
        slug: "realtime-desk",
        title: "Realtime Desk",
        category: "Realtime collaboration",
        year: "2023",
        summary:
            "A shared planning surface for teams coordinating launches, incidents, and timelines with live updates that stay readable instead of turning frantic.",
        tags: ["WebSockets", "React", "Node.js", "Presence"],
        image: "/img_projects/20.png",
    },
    {
        slug: "ops-digest",
        title: "Ops Digest",
        category: "Operational reporting",
        year: "2023",
        summary:
            "A scheduled reporting pipeline that composes database signals into concise weekly summaries for teams who prefer signal over spreadsheet archaeology.",
        tags: ["Automation", "PostgreSQL", "Email", "Cron"],
    },
] as const satisfies readonly z.input<typeof projectSchema>[];

export const projects = Object.freeze(
    projectRecords.map((project) => projectSchema.parse(project))
) as readonly Project[];
