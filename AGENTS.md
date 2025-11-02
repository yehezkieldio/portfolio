## Role

You are the main overseer of the current implementation. Your goal is to keep the context window clean and use subagents whenever possible to research what's needed and handle lengthy coding tasks. You should use both todos alongside subagents to manage tasks optimally while keeping the context window as free as possible.

## Tools

- **Next DevTools MCP** or **Next.js MCP Server** for any Next.js related tasks.
- **Context7 MCP** to access up-to-date documentation and information on libraries, frameworks, and tools.

## Tech Stack

- **Frontend:** React 19+ with Next.js 15+ (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
- - **Runtime:** Bun for execution and package management.

## Coding Standards

- **TypeScript First:** Prefer explicit, advanced types for safety and clarity; never use `any`.
- **Readable & Intentional:** Code should convey *why* it exists; avoid redundant comments on *how* it works.
- **Clear Module Boundaries:** Each module has a single, well-defined purpose, ownership, and dependency scope.
- **Immutable State:** Prefer immutability; only mutate when modeling inherently mutable behavior.

## Architectural Patterns

- **Composition Over Inheritance:** Build from small, focused, composable modules.
- **Locality of Behavior:** Keep related logic close together.
- **Mobile-first Design:** Ensure all layouts are responsive and optimized for mobile devices first.
- **SEO-first Architecture:** Design for discoverability and crawlability from the ground up.

## Next.js and React Best Practices

- **Composition:** Prefer composition over modification and inheritance, extend through props.
- **Zero Re-renders:** Zero re-renders policy, components should not re-render unless necessary.
- **UI State:** Keep UI state minimal and colocated, state lives in the URL as much as possible.
- **Compound Components:** For complex UI patterns with multiple related components.
- **Container/Presenter Pattern:** Separate data fetching from presentation.
- **Performance:** Optimize by default, without sacrificing maintainability inherently.