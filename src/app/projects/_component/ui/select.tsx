"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type * as React from "react";

import { cn } from "#/lib/utils";

const Select = SelectPrimitive.Root;

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
    return <SelectPrimitive.Group className={cn("p-1", className)} data-slot="select-group" {...props} />;
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
    return (
        <SelectPrimitive.Value className={cn("flex flex-1 text-left", className)} data-slot="select-value" {...props} />
    );
}

function SelectTrigger({
    children,
    className,
    size = "default",
    ...props
}: SelectPrimitive.Trigger.Props & {
    size?: "sm" | "default";
}) {
    return (
        <SelectPrimitive.Trigger
            className={cn(
                "motion-focus motion-press flex h-9 w-full select-none items-center justify-between gap-2 border-border border-b bg-transparent py-1 text-muted-foreground text-sm focus-visible:border-foreground focus-visible:text-foreground disabled:cursor-not-allowed disabled:opacity-45 data-[size=sm]:h-8 data-placeholder:text-muted-foreground/65 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-(--ease-ui) data-[popup-open]:[&_svg]:rotate-180",
                className
            )}
            data-size={size}
            data-slot="select-trigger"
            {...props}
        >
            {children}
            <SelectPrimitive.Icon
                render={<ChevronDownIcon className="size-4 text-muted-foreground transition-colors" />}
            />
        </SelectPrimitive.Trigger>
    );
}

function SelectContent({
    align = "center",
    alignItemWithTrigger = true,
    alignOffset = 0,
    children,
    className,
    side = "bottom",
    sideOffset = 6,
    ...props
}: SelectPrimitive.Popup.Props &
    Pick<SelectPrimitive.Positioner.Props, "align" | "alignItemWithTrigger" | "alignOffset" | "side" | "sideOffset">) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Positioner
                align={align}
                alignItemWithTrigger={alignItemWithTrigger}
                alignOffset={alignOffset}
                className="isolate z-50"
                side={side}
                sideOffset={sideOffset}
            >
                <SelectPrimitive.Popup
                    className={cn(
                        "relative isolate z-50 max-h-(--available-height) min-w-40 origin-(--transform-origin) overflow-y-auto overflow-x-hidden border border-border bg-background/96 text-foreground opacity-100 shadow-[0_12px_40px_rgb(0_0_0/0.24)] backdrop-blur-md transition-[opacity,transform] duration-150 ease-(--ease-ui) data-ending-style:scale-[0.98] data-starting-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:opacity-0",
                        alignItemWithTrigger && "w-(--anchor-width)",
                        className
                    )}
                    data-align-trigger={alignItemWithTrigger}
                    data-slot="select-content"
                    {...props}
                >
                    <SelectScrollUpButton />
                    <SelectPrimitive.List className="p-1">{children}</SelectPrimitive.List>
                    <SelectScrollDownButton />
                </SelectPrimitive.Popup>
            </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    );
}

function SelectLabel({ className, ...props }: SelectPrimitive.GroupLabel.Props) {
    return (
        <SelectPrimitive.GroupLabel
            className={cn("px-2 py-1.5 font-mono text-[11px] text-muted-foreground uppercase", className)}
            data-slot="select-label"
            {...props}
        />
    );
}

function SelectItem({ children, className, ...props }: SelectPrimitive.Item.Props) {
    return (
        <SelectPrimitive.Item
            className={cn(
                "relative flex w-full cursor-default select-none items-center gap-2 px-2 py-1.5 pr-8 text-sm outline-none transition-[background-color,color,transform] duration-150 ease-(--ease-ui) data-disabled:pointer-events-none data-highlighted:translate-x-0.5 data-highlighted:bg-foreground/[0.055] data-selected:bg-foreground/[0.08] data-highlighted:text-foreground data-selected:text-foreground data-disabled:opacity-40",
                className
            )}
            data-slot="select-item"
            {...props}
        >
            <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
                {children}
            </SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator
                render={
                    <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
                        <CheckIcon className="size-3.5" />
                    </span>
                }
            />
        </SelectPrimitive.Item>
    );
}

function SelectSeparator({ className, ...props }: SelectPrimitive.Separator.Props) {
    return (
        <SelectPrimitive.Separator
            className={cn("pointer-events-none my-1 h-px bg-border", className)}
            data-slot="select-separator"
            {...props}
        />
    );
}

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
    return (
        <SelectPrimitive.ScrollUpArrow
            className={cn(
                "top-0 z-10 flex w-full cursor-default items-center justify-center bg-background py-1",
                className
            )}
            data-slot="select-scroll-up-button"
            {...props}
        >
            <ChevronUpIcon className="size-4" />
        </SelectPrimitive.ScrollUpArrow>
    );
}

function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
    return (
        <SelectPrimitive.ScrollDownArrow
            className={cn(
                "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-background py-1",
                className
            )}
            data-slot="select-scroll-down-button"
            {...props}
        >
            <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownArrow>
    );
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};
