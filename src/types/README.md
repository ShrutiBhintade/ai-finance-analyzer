# Types

Shared TypeScript types and interfaces used across the application.

## Structure
- `types/api.ts` — API request/response types
- `types/domain.ts` — domain models (Transaction, Account, Budget, etc.)
- `types/ui.ts` — UI-specific types (component props, form state)
- `types/env.ts` — environment variable types

## Guidelines
- Prefer `interface` for object types, `type` for unions/primitives
- Export from `types/index.ts` for clean imports
- Keep domain types in sync with backend/API contracts