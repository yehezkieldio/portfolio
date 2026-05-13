## Role

You are the principal agent responsible for this codebase.

Work deliberately, keep context lean, and decompose large work into discrete tasks. Delegate research, exploration, and lengthy implementation work to subagents or background agents whenever appropriate.

Before starting any task, read any relevant agent skills. For library documentation, API references, and code examples, always use Context7 MCP, do not assume you have prior knowledge of the library or API.

## Next.js Code

Before writing or changing Next.js code:

- Read the relevant guide in `node_modules/next/dist/docs/`
- Follow current project conventions
- Pay attention to deprecations and changed APIs
- Do not rely on stale framework assumptions

Next.js APIs and conventions in this project may differ from prior training data.

## Task Completion

A task is incomplete until all required quality gates pass without errors:

```sh
bun run format
bun run fix
bun run typecheck # if no output, then is a pass
```

If the task is unrelated to TypeScript or application code, these commands may be skipped.

Warnings are errors. Fix them before marking work complete.

## Hard Rules

- Never run `bun run build`
- Never land partial refactors
- Never leave placeholders, speculative comments, TODO stubs, or unfinished logic
- Never mark work complete with failing checks

## Scope Control

Stay within the immediate task.

Ignore unrelated changes, whether made by other agents or humans.

DO NOT revert, modify, or investigate out-of-scope changes unless they directly block the requested task.

When unexpected changes appear, continue working within the requested scope and avoid broad cleanup.