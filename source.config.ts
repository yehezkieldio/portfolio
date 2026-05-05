import { pageSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs: projects, meta: projectsMeta } = defineDocs({
    dir: "content/projects",
    docs: {
        schema: pageSchema.extend({
            icon: z.enum(["Nextjs", "React", "Rust", "TypeScript", "Bun"]),
            github: z.url().optional(),
            website: z.url().optional(),
            year: z.string(),
            tags: z.array(z.string()).default([]),
        }),
    },
});

export default defineConfig({});
