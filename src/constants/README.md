# Constants

Application-wide constant values — enums, config values, feature flags.

## Examples
- `constants/routes.ts` — route paths
- `constants/app.ts` — app name, version, pagination defaults
- `constants/validation.ts` — regex patterns, min/max limits
- `constants/features.ts` — feature flags

## Guidelines
- Group by domain
- Use `const` assertions (`as const`) for inference
- Avoid magic strings — reference constants instead