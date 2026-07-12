# Lib

Shared utility libraries, configurations, and client instances.

## Examples
- `lib/utils.ts` — `cn()` classname helper, formatters
- `lib/validators.ts` — Zod schemas, validation helpers
- `lib/constants.ts` — app-wide constants
- `lib/db/` — database client (future)
- `lib/auth/` — auth configuration (future)

## Guidelines
- No React dependencies (pure TS/JS)
- Tree-shakeable exports
- Well-typed with JSDoc