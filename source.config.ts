import { defineCollections, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const projectPages = defineCollections({
    type: "doc",
    dir: "content/project",
    schema: frontmatterSchema.extend({
        kicker: z.string().min(1).optional(),
        role: z.string().min(1).optional(),
        slug: z.string().regex(/^[a-z0-9-]+$/),
        status: z.string().min(1).optional(),
        timeline: z.string().min(1).optional(),
    }),
});

export default defineConfig();
