"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { memo, useCallback } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { MultiSelect, type MultiSelectOption } from "#/components/ui/multi-select";
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

    const handleTechChange = useCallback(
        (values: string[]) => {
            setFilters({ tech: values, page: 1 });
        },
        [setFilters]
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

    const techOptions: MultiSelectOption[] = technologies.map((tech) => ({
        label: tech,
        value: tech,
    }));

    return (
        <div className="mb-12 space-y-6">
            <div className="relative">
                <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-muted-foreground" />
                <Input
                    className="h-12 border-border bg-input pl-12 text-base transition-colors hover:border-accent/30 focus-visible:border-accent/30"
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search projects by name or description..."
                    type="search"
                    value={filters.search}
                />
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <Select onValueChange={handleCategoryChange} value={filters.category}>
                    <SelectTrigger className="w-full border-border bg-input transition-colors hover:border-accent/30 sm:w-[180px]">
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
                    <SelectTrigger className="w-full border-border bg-input transition-colors hover:border-accent/30 sm:w-[140px]">
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
                <MultiSelect
                    animationConfig={{
                        badgeAnimation: "slide",
                        popoverAnimation: "scale",
                        optionHoverAnimation: "highlight",
                    }}
                    className="border-border bg-input text-foreground transition-colors hover:border-accent/30 dark:bg-input/30"
                    defaultValue={filters.tech}
                    onValueChange={handleTechChange}
                    options={techOptions}
                    placeholder="Select technologies"
                    searchable={true}
                />
            </div>
        </div>
    );
}

export const Filters = memo(FiltersComponent);
Filters.displayName = "ProjectsPrimitive.Filters";
