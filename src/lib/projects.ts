export interface Project {
    title: string;
    description: string;
    tags: string[];
    viewLink?: string;
    codeLink?: string;
}

export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
        tags: ["React", "Node.js", "TypeScript"],
        viewLink: "https://example.com",
        codeLink: "https://github.com/example/ecommerce"
    },
    {
        title: "Task Management App",
        description:
            "Collaborative task management application with real-time updates and team collaboration features.",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        viewLink: "https://example.com/tasks",
        codeLink: "https://github.com/example/task-manager"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive weather dashboard with location-based forecasts and weather data visualization.",
        tags: ["Vue.js", "Chart.js", "API Integration"],
        viewLink: "https://example.com/weather"
    },
    {
        title: "Portfolio Website",
        description:
            "Modern portfolio website built with Next.js featuring dynamic project showcase and responsive design.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        codeLink: "https://github.com/example/portfolio"
    },
    {
        title: "Blog Platform",
        description: "Content management system with markdown support, SEO optimization, and comment functionality.",
        tags: ["React", "Express", "MongoDB"],
        viewLink: "https://example.com/blog",
        codeLink: "https://github.com/example/blog"
    },
    {
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication and transaction tracking.",
        tags: ["React Native", "Firebase", "Redux"],
        viewLink: "https://apps.apple.com/app/example"
    },
    {
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
        tags: ["Python", "Django", "D3.js"],
        viewLink: "https://example.com/analytics",
        codeLink: "https://github.com/example/analytics"
    },
    {
        title: "Inventory Management System",
        description: "Enterprise inventory management system with barcode scanning and automated reordering.",
        tags: ["Angular", "Spring Boot", "MySQL"],
        codeLink: "https://github.com/example/inventory"
    }
];
