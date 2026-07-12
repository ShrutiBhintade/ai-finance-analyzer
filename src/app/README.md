# App Router (Next.js App Router)

This folder contains the Next.js App Router pages, layouts, and route handlers.

## Structure
- `app/` — Route segments (pages, layouts, loading, error)
- `app/(auth)/` — Authenticated route group (future)
- `app/(dashboard)/` — Dashboard route group (future)
- `app/api/` — API routes (future)

## Conventions
- Use Server Components by default
- Add `'use client'` directive only when needed
- Colocate components with their routes when possible