import { Card, CardContent } from "#/components/ui/card";
import { Project } from "#/lib/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="group bg-card/50 hover:bg-card/80 relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-5">
                <div className="mb-3 flex items-start justify-between">
                    <h3 className="font-display text-base leading-tight font-medium">{project.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-[10px] font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2 text-xs">
                    {project.viewLink && (
                        <a
                            href={project.viewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn text-foreground/60 hover:text-foreground flex items-center gap-1 transition-colors"
                        >
                            <span>View</span>
                            <svg
                                className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    )}
                    {project.viewLink && project.codeLink && <span className="text-muted-foreground/40">•</span>}
                    {project.codeLink && (
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn text-foreground/60 hover:text-foreground flex items-center gap-1 transition-colors"
                        >
                            <span>Code</span>
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
