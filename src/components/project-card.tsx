"use client";

import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import type { Project } from "#/lib/projects-data";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group minimal-hover relative flex h-full flex-col overflow-hidden border border-border bg-card">
            {/* Image or Fallback */}
            <div className="relative aspect-video overflow-hidden bg-muted">
                {project.image ? (
                    <Image
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={project.image || "/placeholder.svg"}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-muted to-card p-6">
                        <div className="text-center">
                            <h3 className="mb-2 font-bold text-2xl text-accent">{project.title}</h3>
                            <p className="line-clamp-3 text-muted-foreground text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                )}
                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                    <Badge className="border-border bg-background/90 backdrop-blur-sm" variant="secondary">
                        {project.year}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                    <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="font-bold text-xl leading-tight transition-colors group-hover:text-primary">
                            {project.title}
                        </h3>
                    </div>

                    <p className="mb-4 line-clamp-2 text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Category */}
                    <Badge className="mb-4 border-accent/30 text-accent" variant="outline">
                        {project.category}
                    </Badge>

                    {/* Technologies */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                                className="border border-border bg-muted text-xs"
                                key={tech}
                                variant="secondary"
                            >
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                            <Badge className="border border-border bg-muted text-xs" variant="secondary">
                                +{project.technologies.length - 3}
                            </Badge>
                        )}
                    </div>
                </div>

                <div className="flex gap-3 border-border border-t pt-4">
                    {project.viewUrl && (
                        <Button
                            asChild
                            className="flex-1 bg-primary text-primary-foreground transition-all hover:bg-primary/90"
                        >
                            <a href={project.viewUrl} rel="noopener noreferrer" target="_blank">
                                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                                View
                            </a>
                        </Button>
                    )}
                    {project.sourceUrl && (
                        <Button
                            asChild
                            className="flex-1 border-border bg-transparent transition-all hover:border-accent/30 hover:bg-muted"
                            variant="outline"
                        >
                            <a href={project.sourceUrl} rel="noopener noreferrer" target="_blank">
                                <GithubIcon className="mr-2 h-4 w-4" />
                                Source
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}
