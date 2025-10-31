"use client";

import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import { Icons } from "#/components/icons";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "#/components/ui/popover";
import type { Project } from "#/features/projects/lib/data";

interface CardProps {
    project: Project;
}

function getViewIcon(url: string) {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        return <Icons.youtube className="mr-1 h-4 w-4" />;
    }
    if (url.includes("npmjs.com")) {
        return <Icons.npm className="mr-1 h-4 w-4" />;
    }
    if (url.includes("codepen.io")) {
        return <Icons.codepen className="mr-1 h-4 w-4" />;
    }
    return <ExternalLinkIcon className="mr-1 h-4 w-4" />;
}

function getSourceIcon(url: string) {
    if (url.includes("gitlab.com")) {
        return <Icons.gitlab className="mr-1 h-2 w-2" />;
    }
    if (url.includes("github.com")) {
        return <Icons.github className="mr-1 h-2 w-2" />;
    }
    if (url.includes("codepen.io")) {
        return <Icons.codepen className="mr-1 h-2 w-2" />;
    }
    return <Icons.github className="mr-1 h-2 w-2" />;
}

function CardComponent({ project }: CardProps) {
    return (
        <article className="group minimal-hover relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-card">
            <div className="relative aspect-video overflow-hidden bg-muted">
                {project.image ? (
                    <>
                        <Image
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            height={360}
                            src={project.image || "/placeholder.svg"}
                            width={640}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card/40 via-card/10 to-transparent" />
                    </>
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-muted to-card/10 p-6">
                        <div className="text-center">
                            <h3 className="mb-2 font-medium text-2xl">{project.title}</h3>
                            <p className="line-clamp-3 text-muted-foreground text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-4">
                    <Badge className="border-border bg-background/90 backdrop-blur-sm" variant="secondary">
                        {project.year}
                    </Badge>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                    <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="font-medium text-xl leading-tight transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    <p className="mb-4 line-clamp-2 text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                    </p>

                    <Badge className="mb-4 border-accent/30 text-accent" variant="outline">
                        {project.category}
                    </Badge>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                            <Badge
                                className="border border-border bg-muted text-xs"
                                key={tech}
                                variant="secondary"
                            >
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 5 && (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button type="button">
                                        <Badge
                                            className="cursor-pointer border border-border bg-muted text-xs transition-colors hover:bg-muted/70"
                                            variant="secondary"
                                        >
                                            +{project.technologies.length - 5}
                                        </Badge>
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent align="start" className="w-auto">
                                    <div className="space-y-2">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(5).map((tech) => (
                                                <Badge
                                                    className="border border-border bg-muted text-xs"
                                                    key={tech}
                                                    variant="secondary"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>
                </div>

                <div className="flex gap-3 border-border border-t pt-4">
                    {project.viewUrl && (
                        <Button
                            asChild
                            className="flex-1 bg-primary/90 text-primary-foreground transition-all hover:bg-primary/70 hover:text-primary-foreground"
                        >
                            <a href={project.viewUrl} rel="noopener noreferrer" target="_blank">
                                {getViewIcon(project.viewUrl)}
                                View
                            </a>
                        </Button>
                    )}
                    {project.sourceUrl && (
                        <Button
                            asChild
                            className="flex-1 border-border bg-transparent transition-all hover:text-foreground"
                            variant="outline"
                        >
                            <a href={project.sourceUrl} rel="noopener noreferrer" target="_blank">
                                {getSourceIcon(project.sourceUrl)}
                                Source
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}

export const Card = memo(CardComponent);
Card.displayName = "ProjectsPrimitive.Card";
