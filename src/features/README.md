# Features

Feature-based modules — each feature is a self-contained unit with its own components, hooks, types, and utilities.

## Structure
```
features/
  transactions/
    components/
    hooks/
    types.ts
    utils.ts
  budgets/
    ...
  accounts/
    ...
```

## Guidelines
- Features own their domain logic
- Avoid cross-feature imports (use shared `lib/` or `types/` instead)
- Each feature exports a public API from `index.ts`
- Keep components, hooks, types close to where they're used