export type ProjectListItem = {
    description: string;
    github?: string;
    icon: "Bun" | "Nextjs" | "React" | "Rust" | "TypeScript";
    slug: string;
    tags: string[];
    title: string;
    website?: string;
    year: string;
};
