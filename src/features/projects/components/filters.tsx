"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { memo, useCallback, useEffect, useState, useTransition } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { MultiSelect, type MultiSelectOption } from "#/components/ui/multi-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { useProjectsContext } from "#/features/projects/lib/context";
import { useDebounce } from "#/lib/hooks/use-debounce";

function FiltersComponent() {
    const { filters, setFilters, hasActiveFilters, categories, technologies, years, isSearching } =
        useProjectsContext();
    const [isPending, startTransition] = useTransition();
    const [localSearch, setLocalSearch] = useState(filters.search);
    const debouncedSearch = useDebounce(localSearch, 300);

    useEffect(() => {
        if (debouncedSearch !== filters.search) {
            startTransition(() => {
                setFilters({ search: debouncedSearch, page: 1 });
            });
        }
    }, [debouncedSearch, filters.search, setFilters]);

    const handleSearchChange = useCallback((value: string) => {
        setLocalSearch(value);
    }, []);

    const handleCategoryChange = useCallback(
        (value: string) => {
            startTransition(() => {
                setFilters({ category: value, page: 1 });
            });
        },
        [setFilters]
    );

    const handleYearChange = useCallback(
        (value: string) => {
            startTransition(() => {
                setFilters({ year: Number.parseInt(value, 10), page: 1 });
            });
        },
        [setFilters]
    );

    const handleTechChange = useCallback(
        (values: string[]) => {
            startTransition(() => {
                setFilters({ tech: values, page: 1 });
            });
        },
        [setFilters]
    );

    const handleClearFilters = useCallback(() => {
        setLocalSearch("");
        startTransition(() => {
            setFilters({
                search: "",
                category: "all",
                year: 0,
                tech: [],
                page: 1,
            });
        });
    }, [setFilters]);

    const techOptions: MultiSelectOption[] = technologies.map((tech) => ({
        label: tech,
        value: tech,
    }));

    return (
        <div className="mb-12 space-y-6">
            <div className="relative">
                <SearchIcon
                    className={`-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-muted-foreground transition-opacity ${isSearching || isPending ? "animate-pulse" : ""}`}
                />
                <Input
                    aria-label="Search projects by name or description"
                    className="h-12 border-border bg-input pl-12 text-base transition-colors hover:border-accent/30 focus-visible:border-accent/30"
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search projects by name or description..."
                    type="search"
                    value={localSearch}
                />
                {(isSearching || isPending) && (
                    <div className="-translate-y-1/2 absolute top-1/2 right-4">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                    </div>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <Select onValueChange={handleCategoryChange} value={filters.category}>
                    <SelectTrigger
                        aria-label="Filter by category"
                        className="w-full border-border bg-input transition-colors hover:border-accent/30 sm:w-[180px]"
                    >
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
                    <SelectTrigger
                        aria-label="Filter by year"
                        className="w-full border-border bg-input transition-colors hover:border-accent/30 sm:w-[140px]"
                    >
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
                        aria-label="Clear all filters"
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
                <Label
                    className="font-medium text-muted-foreground text-sm uppercase tracking-wider"
                    htmlFor="tech-filter"
                >
                    Technologies
                </Label>
                <MultiSelect
                    animationConfig={{
                        badgeAnimation: "slide",
                        popoverAnimation: "scale",
                        optionHoverAnimation: "highlight",
                    }}
                    aria-label="Filter by technologies"
                    className="border-border bg-input text-foreground transition-colors hover:border-accent/30 dark:bg-input/30"
                    id="tech-filter"
                    onValueChange={handleTechChange}
                    options={techOptions}
                    placeholder="Select technologies"
                    searchable={true}
                    value={filters.tech}
                />
            </div>
        </div>
    );
}

export const Filters = memo(FiltersComponent);
Filters.displayName = "ProjectsPrimitive.Filters";
