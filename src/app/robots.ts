import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yehezkieldio.vercel.app";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: "/",
            userAgent: "*",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
