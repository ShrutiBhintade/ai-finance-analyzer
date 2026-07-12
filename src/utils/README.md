# Utils

Pure utility functions — no React, no side effects.

## Examples
- `utils/date.ts` — date formatting, parsing, ranges
- `utils/currency.ts` — formatting, conversion, rounding
- `utils/string.ts` — slugify, truncate, capitalize
- `utils/array.ts` — groupBy, sortBy, unique

## Guidelines
- Single responsibility
- Fully typed with generics where useful
- Unit-testable
- No external dependencies unless necessary