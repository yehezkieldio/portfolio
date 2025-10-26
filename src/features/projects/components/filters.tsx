"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { memo, useCallback } from "react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { useProjectsContext } from "#/features/projects/lib/context";

function FiltersComponent() {
    const { filters, setFilters, hasActiveFilters, categories, technologies, years } = useProjectsContext();

    const handleSearchChange = useCallback(
        (value: string) => {
            setFilters({ search: value, page: 1 });
        },
        [setFilters]
    );

    const handleCategoryChange = useCallback(
        (value: string) => {
            setFilters({ category: value, page: 1 });
        },
        [setFilters]
    );

    const handleYearChange = useCallback(
        (value: string) => {
            setFilters({ year: Number.parseInt(value, 10), page: 1 });
        },
        [setFilters]
    );

    const handleTechToggle = useCallback(
        (technology: string) => {
            const newTech = filters.tech.includes(technology)
                ? filters.tech.filter((t) => t !== technology)
                : [...filters.tech, technology];
            setFilters({ tech: newTech, page: 1 });
        },
        [filters.tech, setFilters]
    );

    const handleClearFilters = useCallback(() => {
        setFilters({
            search: "",
            category: "all",
            year: 0,
            tech: [],
            page: 1,
        });
    }, [setFilters]);

    return (
        <div className="mb-12 space-y-6">
            <div className="relative">
                <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-muted-foreground" />
                <Input
                    className="h-12 border-border bg-input pl-12 text-base transition-all focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search projects by name or description..."
                    type="search"
                    value={filters.search}
                />
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <Select onValueChange={handleCategoryChange} value={filters.category}>
                    <SelectTrigger className="w-[180px] border-border bg-input transition-colors hover:border-accent/30">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select onValueChange={handleYearChange} value={filters.year.toString()}>
                    <SelectTrigger className="w-[140px] border-border bg-input transition-colors hover:border-accent/30">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0">All Years</SelectItem>
                        {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {hasActiveFilters && (
                    <Button
                        className="text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                        onClick={handleClearFilters}
                        variant="ghost"
                    >
                        <XIcon className="mr-2 h-4 w-4" />
                        Clear Filters
                    </Button>
                )}
            </div>

            <div className="space-y-3">
                <Label className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
                    Technologies
                </Label>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => {
                        const isSelected = filters.tech.includes(tech);
                        return (
                            <Badge
                                className={`cursor-pointer transition-all ${
                                    isSelected
                                        ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "hover:border-accent/30 hover:bg-muted"
                                }`}
                                key={tech}
                                onClick={() => handleTechToggle(tech)}
                                variant={isSelected ? "default" : "outline"}
                            >
                                {tech}
                            </Badge>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export const Filters = memo(FiltersComponent);
Filters.displayName = "ProjectsPrimitive.Filters";
