"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "#/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<typeof InputPrimitive>) {
    return (
        <InputPrimitive
            className={cn(
                "h-9 w-full min-w-0 border-border border-b bg-transparent px-0 py-1 text-sm outline-none transition-colors placeholder:text-muted-foreground/65 focus-visible:border-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 aria-invalid:border-destructive",
                className
            )}
            data-slot="input"
            type={type}
            {...props}
        />
    );
}

export { Input };
