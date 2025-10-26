"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { CATEGORIES, TECHNOLOGIES, YEARS } from "#/lib/constants";

export function SearchFilters() {
    const [filters, setFilters] = useQueryStates({
        search: parseAsString.withDefault(""),
        category: parseAsString.withDefault("all"),
        year: parseAsInteger.withDefault(0),
        tech: parseAsArrayOf(parseAsString).withDefault([]),
    });

    const handleTechToggle = (technology: string) => {
        const newTech = filters.tech.includes(technology)
            ? filters.tech.filter((t) => t !== technology)
            : [...filters.tech, technology];
        setFilters({ tech: newTech });
    };

    const clearFilters = () => {
        setFilters({
            search: "",
            category: "all",
            year: 0,
            tech: [],
        });
    };

    const hasActiveFilters =
        filters.search !== "" || filters.category !== "all" || filters.year !== 0 || filters.tech.length > 0;

    return (
        <div className="mb-12 space-y-6">
            <div className="relative">
                <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-muted-foreground" />
                <Input
                    className="h-12 border-border bg-input pl-12 text-base transition-all focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                    onChange={(e) => setFilters({ search: e.target.value })}
                    placeholder="Search projects by name or description..."
                    type="search"
                    value={filters.search}
                />
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <Select onValueChange={(value) => setFilters({ category: value })} value={filters.category}>
                    <SelectTrigger className="w-[180px] border-border bg-input transition-colors hover:border-accent/30">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    onValueChange={(value) => setFilters({ year: Number.parseInt(value, 10) })}
                    value={filters.year.toString()}
                >
                    <SelectTrigger className="w-[140px] border-border bg-input transition-colors hover:border-accent/30">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0">All Years</SelectItem>
                        {YEARS.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {hasActiveFilters && (
                    <Button
                        className="text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                        onClick={clearFilters}
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
                    {TECHNOLOGIES.map((tech) => (
                        <Badge
                            className={`cursor-pointer transition-all ${
                                filters.tech.includes(tech)
                                    ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "hover:border-accent/30 hover:bg-muted"
                            }`}
                            key={tech}
                            onClick={() => handleTechToggle(tech)}
                            variant={filters.tech.includes(tech) ? "default" : "outline"}
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
