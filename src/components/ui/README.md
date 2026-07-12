# UI Primitives

Low-level, reusable UI components (buttons, inputs, cards, modals, etc.).

## Purpose
Build a consistent design system. These components:
- Have no business logic
- Accept flexible props via `className` / `asChild` patterns
- Use Tailwind CSS for styling
- Follow Radix UI / shadcn/ui patterns

## Adding Components
1. Create component in `ui/`
2. Export from `ui/index.ts`
3. Document props with JSDoc