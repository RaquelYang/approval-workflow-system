<!-- SPECKIT START -->

For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan

<!-- SPECKIT END -->

# Approval Workflow System Copilot Instructions

## Project Context

This repository is an Angular 21 frontend application for an approval workflow
system. It uses a local `json-server` API during development and follows the
Vercel / Geist design system documented in `DESIGN.md`.

Use `.specify/memory/constitution.md` as the authoritative source for project
rules. Use `DESIGN.md` for visual tokens, `AGENTS.md` for agent orientation, and
`README.md` for setup and command reference. Before feature work, check the
active Spec Kit plan under `specs/**/plan.md` when one exists.

## Runtime And Commands

- Use Node.js 22 from `.nvmrc` before running Angular CLI commands.
- Install dependencies with `npm install`.
- Run the fake API with `npm run api`; it serves `mock-api/db.js` on port `3000`.
- Run the Angular dev server with `npm start`; it serves the app on port `4200`
  and runs `npm run lint:all` first.
- Use these quality gates before delivery when the change affects application
  behavior or styling:
    - `npm run lint:all`
    - `npm run test:ci`
    - `npm run build`
    - `npm run format:check`

If a command cannot be run, report the reason and the residual risk in the final
handoff.

## Angular 21 Implementation Summary

- Build all new Angular pieces as standalone components, directives, pipes, or
  services. Do not add NgModules.
- Use `ChangeDetectionStrategy.OnPush` for components.
- Use `inject()` for dependency injection instead of constructor injection.
- Use Angular Signals for UI state: `signal()` for mutable state, `computed()`
  for derived state, and `effect()` for side effects.
- Do not introduce `BehaviorSubject` for simple local UI state. Use RxJS only
  when it matches an async stream, HTTP flow, or existing integration point.
- Use signal-based component APIs: `input()`, `input.required()`, `output()`, and
  `model()`.
- Use the modern template control flow syntax: `@if`, `@for`, and `@switch`.
  Do not add `*ngIf`, `*ngFor`, or legacy structural directive syntax in new
  templates.
- Lazy-load route-level features with `loadComponent` or lazy route
  configuration.
- Keep code zoneless-compatible. Do not rely on `NgZone` side effects or timing
  assumptions.

## TypeScript And Architecture

- Keep TypeScript strict. Do not use `any`; use `unknown` plus type guards or
  explicit interfaces for untrusted data.
- Use `interface` for data structures. Use `type` for unions, mapped types, and
  discriminated UI state.
- Mark immutable properties as `readonly` when practical.
- Handle async failures explicitly with `try/catch`, RxJS `catchError`, or typed
  error state.
- Use kebab-case filenames and the `app-` selector prefix.
- Respect the current source boundaries:
    - `src/app/core` for global services, tokens, guards, interceptors, and API
      wiring.
    - `src/app/shared` for reusable standalone UI, directives, and pipes.
    - `src/app/features` for approval workflow feature areas.
    - `src/app/layout` for shell and layout components.
- Keep edits focused. Do not refactor unrelated files while implementing a
  feature or fix.

## Styling And Design Summary

- Treat `DESIGN.md` as the single source of truth for colors, typography,
  spacing, radius, shadows, and interaction states.
- Prefer existing CSS custom properties from
  `src/styles/abstracts/_variables.scss` over hard-coded values.
- Write styles in SCSS and follow the existing structure under `src/styles`.
- Do not use the CSS `border` property for UI chrome. Use the shadow-as-border
  tokens such as `var(--shadow-border)`, `var(--shadow-ring)`, and
  `var(--shadow-card)`.
- Preserve the Vercel / Geist feel: restrained white surfaces, near-black text,
  Geist Sans for UI text, Geist Mono for technical labels, and disciplined
  spacing.
- Use only the three intended font weights: `400` for body copy, `500` for UI
  interaction, and `600` for headings or emphasis.
- Keep workflow accent colors semantic:
    - `var(--color-develop)` for Develop-like states.
    - `var(--color-preview)` for Preview-like states.
    - `var(--color-ship)` for Ship, destructive, or finalization states.
      Do not use workflow colors as generic decoration.
- Tailwind may assist implementation, but it must not introduce a parallel
  design system or bypass project tokens.
- Angular Material may be used only when aligned through the project theme and
  token overrides.

## Approval Workflow UX

- Build the real workflow experience first, not a marketing or landing page.
- Prioritize pending requests, statuses, request details, approval actions,
  rejection or return flows, history, search, filters, loading states, empty
  states, and error feedback.
- Favor dense, calm, scannable interfaces for repeated work. Avoid oversized hero
  areas, decorative card stacks, or non-functional flourishes.
- Use clear business semantics in names and labels, such as `pending`,
  `approved`, `rejected`, `returned`, `draft`, and `submitted`.

## Accessibility And UI Quality

- Every interactive element must be keyboard operable and use semantic HTML.
- Add `aria-*` attributes when needed for controls, dialogs, status messages,
  icons, and navigation.
- Provide visible focus states equivalent to the focus token in `DESIGN.md`.
- Ensure text does not overflow, overlap, or become unreadable at mobile and
  desktop widths.
- Use stable dimensions for fixed-format UI elements such as toolbars, tables,
  icon buttons, counters, tiles, and status badges to avoid layout shift.
- Prefer icons from an installed Angular-compatible icon library only if the
  project already uses one. Do not add a new icon dependency without a clear
  need.

## Testing And Verification

- Add or update tests when changing logic, state transitions, form validation,
  routing, API interaction, or approval workflow rules.
- Keep tests focused on observable behavior and business outcomes.
- For services, validate API URL injection and error paths when relevant.
- For components, validate rendered states, user actions, outputs, and accessible
  labels where practical.
- Run the smallest useful verification first, then broader gates for higher-risk
  changes.

## API And Environment Notes

- The API base URL is provided through Angular dependency injection with
  `API_BASE_URL`.
- Development configuration lives in `src/environments/environment.development.ts`.
- Production defaults live in `src/environments/environment.ts`.
- Provider wiring lives in `src/app/app.config.ts`.
- Fake API data lives under `mock-api/data`, with `mock-api/db.js` composing
  resources for `json-server`.

## Collaboration Expectations

- Follow `.specify/memory/constitution.md` when Spec Kit guidance applies.
- Keep this file as an operational summary. Put durable governance changes in
  `.specify/memory/constitution.md` and detailed visual rules in `DESIGN.md`.
- Preserve user changes in the working tree. Do not revert unrelated edits.
- Use existing project patterns before introducing new abstractions.
- Keep documentation updated when commands, architecture, API contracts, or design
  tokens change.
- In final responses, summarize changed files, verification performed, and any
  risks or follow-up work.
