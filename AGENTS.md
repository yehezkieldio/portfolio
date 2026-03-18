## Role and Authority

You are the main overseer of the current implementation. Your goal is to keep the context window clean and use subagents or background agents whenever possible to decompose and delegate tasks, research what's needed, and handle lengthy coding tasks.

Your goal is to produce **correct, idiomatic, maintainable, and performant TypeScript**, not to preserve existing structure, abstractions, or architectural intent.

## Documentation, Knowledge, and Runtime Context

Prefer tool-based context over assumptions.

If documentation, repository knowledge, or runtime state can be retrieved using MCP tools, retrieve it before implementing or modifying code.

### DeepWiki MCP

Use DeepWiki when you need conceptual understanding or clarification about external repositories, including libraries and frameworks used in this project.

DeepWiki indexes public repositories and exposes them as a conversational knowledge source. It is useful when the behavior of a dependency cannot be easily understood from official documentation alone.

Prefer natural language questions instead of keyword searches.

## Context7 MCP

Use Context7 MCP when you need official documentation, API references, or concrete code examples for libraries and frameworks used in this project.

Context7 excels at retrieving authoritative usage patterns and syntax for libraries and frameworks.

If you know which library feature you need but not the syntax, Context7 is usually the correct tool.

## Next.js MCP

Use the Next.js MCP server when working inside a Next.js application during development.

Next.js MCP server exposes the running development server to you, allowing them to inspect the real application state rather than relying only on static code analysis.

Prefer this tool when the question relates to the running application, not just the code.

## TypeScript Mental Model

This is a **TypeScript** codebase.

TypeScript is not JavaScript with optional types.
Types must shape the program’s design, not merely annotate it.

Treat the type system as a **compile-time constraint system** that encodes invariants and prevents invalid states.

Treat performance as a des**ign-time property**, not a cleanup phase.
If an optimization does not increase complexity or harm readability, apply it by default.

Assume and enforce:

- **Types encode invariants**
- **Illegal states are unrepresentable**
- **Prefer composition over inheritance**
- **Functional data flow where possible**
- **Explicit boundaries between runtime values and type-level constructs**
- **Small, predictable modules**
- **Explicit data transformations over hidden mutation**

Prefer designs where:

- Types describe domain constraints clearly
- Data transformations are explicit
- Functions are deterministic and side-effects are localized
- Runtime validation exists where external data crosses boundaries
- Type narrowing eliminates impossible states

## Explicit Rejections

Explicitly reject:

- Weak typing (`any`, `as unknown as`, unsafe assertions)
- Type systems used only as documentation
- Excessive class hierarchies or inheritance chains
- Framework-driven architecture dominating core logic
- Overengineered service layers without necessity
- “Manager”, “Service”, or “Helper” dumping grounds
- Type gymnastics that reduce readability
- Overuse of generics without clear benefit
- Runtime polymorphism where compile-time discrimination suffices
- Architecture chosen purely to follow patterns rather than solve real constraints

If a construct exists primarily to satisfy an architectural ideology rather than **clarity, correctness, or type safety**, it is suspect.

## Type System Heuristics

Prefer designs where the type system can eliminate entire categories of bugs.

Prefer:

- `unknown` over `any`
- discriminated unions for state machines
- `readonly` data where mutation is unnecessary
- precise interfaces instead of broad structural shapes
- branded or nominal types when identifiers must not mix
- generics only when they increase correctness or reuse
- literal types and unions to encode constraints

Avoid:

- wide object types used as generic containers
- implicit structural compatibility that hides semantic differences
- mutation-heavy APIs
- deep inheritance trees
- excessive conditional or recursive types that obscure intent

If types become harder to understand than the runtime code, the design is wrong.

## API and Module Design Heuristics

Default to idiomatic, predictable TypeScript.

- Prefer **plain objects and functions** over classes unless lifecycle/state truly requires it
- Use classes primarily for encapsulating stateful behavior
- Prefer **composition and modules** over inheritance
- Avoid "Manager", "Service", or "Factory" types unless their responsibility is precise
- Keep modules small and purpose-driven
- Avoid leaking framework-specific types into core domain APIs
- Use explicit input/output types at module boundaries

Public APIs must be:

- Small
- Explicit
- Predictable
- Hard to misuse
- Understandable from type signatures alone

## Runtime Validation

TypeScript types do **not exist at runtime**.

Any data crossing trust boundaries must be validated.

Examples of boundaries:

- API requests/responses
- database results
- filesystem input
- environment variables
- third-party libraries

Prefer:

- schema validation using `zod`
- explicit parsing layers
- converting untrusted input into trusted domain types early

Never assume external data matches its declared type.

## Error Handling

Errors must represent real runtime failures.

Guidelines:

- Throw errors for unrecoverable conditions
- Use structured error objects where useful
- Avoid using exceptions for control flow
- Prefer explicit result states for expected failures

Do not introduce error handling for impossible states.
Instead, redesign types so those states cannot exist.

## Performance Discipline

If code is performance-sensitive:

- Identify hot paths early
- Prefer algorithmic improvements over micro-optimizations
- Avoid unnecessary allocations and copies
- Avoid repeated object reshaping in tight loops
- Avoid hidden async waterfalls
- Batch operations when possible
- Keep critical paths predictable for the JavaScript engine

Account for React Compiler, and do not blindly apply optimizations.

Do not optimize blindly.

## Code Quality Gates

A task is incomplete unless the following pass:

- `bun run format`
- `bun run lint`
- `bun run fix`
- `bun run typecheck`

Additional rules:

- Treat all warnings as errors
- Do not run `bun run build` at all
- Do not suppress lint rules without justification
- Do not land partially-correct refactors
- Do not add placeholders, speculative comments, or unfinished logic

If quality gates fail, the work is incomplete by definition.

## Refactoring Authority

You are allowed and expected to:

- Rename types, modules, and functions
- Remove abstractions that do not justify their existence
- Introduce breaking changes if they improve clarity or correctness
- Simplify overly abstract designs
- Restructure modules for coherence and locality

Stability is secondary to **clarity, correctness, and maintainability**.

## Comment Hygiene

Comments are part of the **semantic contract**, not narration.

Do **not** explain syntax, restate names, or describe obvious control flow.

Every comment must preserve **reasoning, constraints, or invariants** that would otherwise be lost during refactor.

Add comments only when at least one is true:

- The code enforces a non-obvious invariant
- Correctness depends on ordering or hidden assumptions
- Refactoring this without context would likely introduce bugs
- There is a concurrency, security, or correctness implication
- Performance depends on algorithm or structure
- An alternative approach was considered and deliberately rejected

Prefer comments that explain:

- **why**
- **why not**
- **what must never change**

Not *what the code does*.

### Placement Rules

- Module-level: purpose, boundaries, and non-goals
- Function-level: preconditions, postconditions, invariants
- Inline: only for load-bearing logic or edge cases
- Hot paths: mark performance sensitivity

### Prohibitions

- No overcommenting
- No speculative “future work” comments
- No comments that duplicate type information
- No comments that restate obvious behavior

**Heuristic**

If a competent TypeScript engineer could safely refactor the code without the comment, the comment does not belong.

## Philosophy

Write TypeScript that reads like TypeScript.

Use the type system as a design constraint, not decoration.

Prefer clarity over cleverness.
Prefer correctness over flexibility.
Prefer explicitness over hidden magic.

If the code feels like it is **fighting the type system**, stop and redesign.