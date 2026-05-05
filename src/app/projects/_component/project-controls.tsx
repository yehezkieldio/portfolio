"use client";

import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type ProjectControlsProps = {
    onQueryChange: (query: string) => void;
    onTagChange: (tag: string) => void;
    query: string;
    tag: string;
    tags: string[];
};

export function ProjectControls({ onQueryChange, onTagChange, query, tag, tags }: ProjectControlsProps) {
    return (
        <div className="grid gap-3 pt-2 min-[520px]:grid-cols-[minmax(0,1fr)_12rem]">
            <label className="sr-only" htmlFor="project-search">
                Search projects
            </label>
            <Input
                className="h-10"
                id="project-search"
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="search title, stack, notes..."
                value={query}
            />

            <label className="sr-only" htmlFor="project-filter">
                Filter projects
            </label>
            <Select id="project-filter" onValueChange={(value) => onTagChange(value ?? "all")} value={tag}>
                <SelectTrigger className="h-10">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent align="start">
                    <SelectItem value="all">all tags</SelectItem>
                    {tags.map((projectTag) => (
                        <SelectItem key={projectTag} value={projectTag}>
                            {projectTag}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
