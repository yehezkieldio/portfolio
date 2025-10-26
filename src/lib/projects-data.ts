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

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Abyss Dashboard",
        description:
            "A comprehensive analytics dashboard with real-time data visualization and advanced filtering capabilities.",
        category: "Web Application",
        year: 2025,
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        image: "",
        viewUrl: "https://example.com/abyss-dashboard",
        sourceUrl: "https://github.com/username/abyss-dashboard",
    },
    {
        id: "2",
        title: "Neural Forge",
        description: "Machine learning model training platform with automated hyperparameter optimization.",
        category: "Tool",
        year: 2024,
        technologies: ["Python", "TypeScript", "Next.js", "AI/ML", "PostgreSQL"],
        image: "",
        viewUrl: "https://example.com/neural-forge",
        sourceUrl: "https://github.com/username/neural-forge",
    },
    {
        id: "3",
        title: "Cryptic Vault",
        description: "Secure password manager with end-to-end encryption and biometric authentication.",
        category: "Mobile App",
        year: 2024,
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        viewUrl: "https://example.com/cryptic-vault",
        sourceUrl: "https://github.com/username/cryptic-vault",
    },
];
