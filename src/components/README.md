# Components

Shared React components used across the application.

## Structure
- `components/` — Shared components (buttons, inputs, cards, etc.)
- `components/ui/` — Primitive UI components (Button, Input, Card, etc.) — build shadcn/ui-style components here
- `components/features/` — Feature-specific composed components (future)

## Guidelines
- Prefer composition over configuration
- Keep components small and focused
- Use TypeScript interfaces for props
- Export from index.ts for clean imports