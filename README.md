# Approval Workflow System

Angular 21 approval workflow prototype with a local `json-server` API. The UI follows the Vercel / Geist design rules documented in [DESIGN.md](./DESIGN.md).

## Requirements

- Node.js 22 (`.nvmrc` is included)
- npm 10

```bash
nvm use
npm install
```

## Development

Run the fake API and Angular dev server in separate terminals:

```bash
npm run api
npm start
```

- App: `http://localhost:4200/`
- API: `http://localhost:3000/approvalRequests`

`npm start` runs `npm run lint:all` before serving, so use Node 22 before starting the app.

## API Configuration

The API base URL is provided through Angular DI with `API_BASE_URL`.

- Development: [src/environments/environment.development.ts](src/environments/environment.development.ts)
- Production default: [src/environments/environment.ts](src/environments/environment.ts)
- Provider wiring: [src/app/app.config.ts](src/app/app.config.ts)

Use `provideApiBaseUrl()` in tests or future runtime setup to override the endpoint without changing services.

## Quality Checks

```bash
npm run lint:all
npm run test:ci
npm run build
npm run format:check
```

## Project Notes

- Angular is configured for standalone components, Signals, strict templates, and SCSS.
- Fake API data lives in [db.json](./db.json).
- Design tokens live in [src/styles/abstracts/\_variables.scss](./src/styles/abstracts/_variables.scss) and should stay aligned with [DESIGN.md](./DESIGN.md).
- Project governance lives in [.specify/memory/constitution.md](.specify/memory/constitution.md). Keep README focused on setup and commands.
