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

## Quality Checks

```bash
npm run lint:all
npm run test:ci
npm run build
```

## Project Notes

- Angular is configured for standalone components, Signals, strict templates, and SCSS.
- Fake API data lives in [db.json](./db.json).
- Design tokens live in [src/styles/abstracts/\_variables.scss](./src/styles/abstracts/_variables.scss) and should stay aligned with [DESIGN.md](./DESIGN.md).
