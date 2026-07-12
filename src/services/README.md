# Services

Business logic and external service integrations — API clients, data fetching, third-party SDKs.

## Structure
- `services/api.ts` — API client (fetch wrapper, interceptors)
- `services/transactions.ts` — transaction-related API calls
- `services/accounts.ts` — account-related API calls
- `services/ai.ts` — AI/ML service integration

## Guidelines
- Separate data fetching from React components
- Use React Query / SWR for server state (future)
- Keep services framework-agnostic where possible