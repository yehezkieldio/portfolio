"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "#/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<typeof InputPrimitive>) {
    return (
        <InputPrimitive
            className={cn(
                "h-9 w-full min-w-0 appearance-none rounded-none border-border bg-transparent px-0 py-1 text-sm shadow-none outline-none transition-colors duration-[160ms] ease-(--ease-ui) [border-style:solid] [border-width:0_0_1px_0] [box-shadow:none] placeholder:text-muted-foreground/65 hover:border-border focus:border-border focus:shadow-none focus-visible:border-border focus-visible:shadow-none active:border-border disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 aria-invalid:border-destructive focus:[box-shadow:none] focus-visible:[box-shadow:none]",
                className
            )}
            data-slot="input"
            type={type}
            {...props}
        />
    );
}

export { Input };
