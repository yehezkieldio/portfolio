import type { MetadataRoute } from "next";
import { getProjects } from "#/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yehezkieldio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const projects = getProjects().map((project) => ({
        changeFrequency: "monthly" as const,
        lastModified: project.projectStartedAt,
        priority: project.hasNote ? 0.7 : 0.55,
        url: `${siteUrl}/projects${project.hasNote ? `/${project.slug}` : ""}`,
    }));

    return [
        {
            changeFrequency: "monthly",
            priority: 1,
            url: siteUrl,
        },
        {
            changeFrequency: "monthly",
            priority: 0.9,
            url: `${siteUrl}/projects`,
        },
        ...projects,
    ];
}
