import { z } from "zod";

export const projectSchema = z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    category: z.string().min(1),
    year: z.string().regex(/^\d{4}$/),
    summary: z.string().min(20),
    tags: z.array(z.string().min(1)).min(1).readonly(),
    image: z.string().startsWith("/").optional(),
    featured: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema>;
