## 1. Format Structure

```
type(scope): description
```

- **Length**: ≤ 50 characters total
- **Case**: lowercase except proper nouns
- **Voice**: imperative mood ("add" not "adds" or "added")
- **Punctuation**: no period at end
- **Style**: concise, direct, actionable

## 2. Type Classification (Priority Order)

### Primary Types

- **feat**: new functionality, components, or user-facing features
- **fix**: bug fixes, error handling, or corrections
- **refactor**: code restructuring without behavior changes
- **perf**: performance optimizations or improvements
- **chore**: maintenance, dependencies, tooling, configuration, or broad non-source code changes

### Secondary Types

- **deps**, **fix(deps)**, **chore(deps)**, **build(deps)**: dependency additions, upgrades, or removals
- **i18n**, **locale**, **translation**: internationalization and localization changes
- **style**, **format**: formatting, whitespace, linting fixes
- **security**: vulnerability fixes or security improvements
- **revert**: reverting previous commits
- **build**: build system or tooling changes
- **compat**: compatibility updates
- **revert**: revert commits
- **test**: adding/modifying tests without production code changes
- **ci**: CI/CD pipeline, build, or deployment configuration
- **docs**: documentation changes only, either markdown or code comments
- **deprecated** (in message or body): deprecation notices

## 3. Scope Determination Rules

### For `src/` changes:

- Use specific module/component name: `auth`, `api`, `ui`, `core`, `utils`
- File-based: `parser`, `validator`, `router`, `middleware`
- Feature-based: `login`, `dashboard`, `notifications`

### For non-`src/` changes:

- Dependencies: `deps`
- Configuration: `config`
- Build/tooling: `build`, `ci`
- Documentation: `docs`
- Root files: omit scope

### Scope Selection Priority:

1. Most specific affected component
2. If multiple components: use parent module or omit scope
3. If unclear: omit scope rather than guess

## 4. Decision Tree

```
1. Is this a dependency change?
   -> YES: chore(deps): action dependency package-name

2. Is this outside src/ directory?
   -> YES: chore(scope): action

3. Is this adding new functionality in src/?
   -> YES: feat(scope): action

4. Is this fixing a bug/error in src/?
   -> YES: fix(scope): action

5. Is this restructuring code without changing behavior?
   -> YES: refactor(scope): action

6. Otherwise, use most specific type from list
```

## 5. Description Writing Rules

### DO:

- Start with action verb: "add", "remove", "update", "fix", "refactor"
- Be specific: "add user authentication" not "add auth stuff"
- Use present tense imperative: "implement" not "implemented"
- Focus on WHAT changed, not WHY

### DON'T:

- Use vague terms: "update things", "fix stuff", "improve code"
- Add explanations: "fix bug (was causing crashes)"
- Include ticket numbers: "fix USER-123"
- Use gerunds: "adding" instead of "add"

## 6. Common Patterns

### Dependencies

```
fix(deps): upgrade dependency react to v18.2.0
chore(deps): add lodash dependency
chore(deps): remove unused axios dependency
```

### Features

```
feat(auth): add oauth2 google login
feat(api): implement user profile endpoints
feat(ui): add dark mode toggle
feat: add email notifications
```

### Fixes

```
fix(auth): handle expired token refresh
fix(api): validate required fields
fix(ui): prevent button double-click
fix: resolve memory leak in parser
```

### Refactoring

```
refactor(core): extract validation logic
refactor(api): simplify error handling
refactor: consolidate utility functions
```

## 7. Edge Cases

### Multiple types in one commit:

- Choose the most significant change
- If equal significance, prefer: feat > fix > refactor > chore

### Multiple scopes affected:

- Use parent scope if logical grouping exists
- Omit scope if no clear parent
- Consider splitting into multiple commits
