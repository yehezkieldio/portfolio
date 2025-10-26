# Development Instructions

## 1. Technology Stack

- **Frontend:** React 19+ with Next.js 15+ (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
- **Runtime:** Bun for execution and package management.

## 2. Coding Standards

- **TypeScript First:** Prefer explicit, advanced types for safety and clarity; never use `any`.
- **Defensive Programming:** Validate all inputs/outputs at boundaries; treat external data as potentially invalid.
- **Readable & Intentional:** Code should convey *why* it exists; avoid redundant comments on *how* it works.
- **Clear Module Boundaries:** Each module has a single, well-defined purpose, ownership, and dependency scope.
- **Immutable State:** Prefer immutability; only mutate when modeling inherently mutable behavior.
- **Extract Complex Expressions:** Break down complex expressions into well-named intermediate variables or functions.

## 3. Architectural Patterns

- **Composition Over Inheritance:** Build from small, focused, composable modules.
- **Locality of Behavior:** Keep related logic close together.
- **Small Modules:** Avoid large, monolithic files; favor small, composable units.

## 4. Next.js and React

- **Memoization:** Apply memoization for expensive computations, but avoid overuse to prevent complexity.
- **Composition:** Prefer composition over modification and inheritance, extend through props
- **Zero Re-renders:** Zero re-renders policy, components should not re-render unless necessary
- **UI State:** Keep UI state minimal and colocated, state lives in the URL as much as possible
- **Performance:** Every component, function, and hook should be optimized for performance by default

## 5. React Component Design

- **Container/Presenter Pattern:** Separate data fetching from presentation
- **Compound Components:** For complex UI patterns with multiple related components

## 6. Visual Styling

- **Mobile-first Design:** Ensure all layouts are responsive and optimized for mobile devices first.
- **Performance Budgets:** Set and adhere to performance budgets for each breakpoint to maintain fast load times and smooth interactions.

## 7. Naming Conventions

- **Variables:** Use descriptive names with auxiliary verbs (e.g., `isLoading`, `hasError`, `canDelete`).
- **Components, Types, Interfaces:** Use PascalCase (e.g., `UserProfile`, `AppConfig`).
- **Functions, Variables, Object Properties:** Use camelCase (e.g., `fetchData`, `userList`).
- **Constants, Environment Variables:** Use SCREAMING_SNAKE_CASE (e.g., `API_URL`, `MAX_RETRIES`).
- **Files and Directories:** Use kebab-case (e.g., `user-profile.tsx`, `api-routes/`).