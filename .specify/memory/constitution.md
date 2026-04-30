<!--
Sync Impact Report
Version change: 1.1.0 -> 1.2.0
Modified principles: none
Added sections: Agent Runtime Version Alignment
Removed sections: none
Templates requiring updates:
- ✅ updated: .specify/templates/plan-template.md
- ✅ updated: .specify/templates/spec-template.md
- ✅ updated: .specify/templates/tasks-template.md
- ✅ reviewed: .specify/templates/checklist-template.md
- ✅ reviewed: .specify/templates/commands/*.md (no files present)
- ✅ updated: .github/copilot-instructions.md
- ✅ updated: AGENTS.md
- ✅ updated: README.md
- ✅ reviewed: DESIGN.md
Follow-up TODOs: none
-->

# Approval Workflow System Frontend Constitution

## Core Principles

### I. Angular 21 Modern Architecture First

All application code MUST use Angular 21 standalone components and MUST NOT introduce
NgModule. Routes and feature areas MUST be lazy-loaded with `loadComponent` or equivalent
lazy route configuration. Dependency injection MUST use `inject()`. Component inputs and
outputs MUST use `input()`, `input.required()`, `output()`, or `model()`. Templates MUST use
the modern control flow syntax `@if`, `@for`, and `@switch`; structural directives such as
`*ngIf` and `*ngFor` are prohibited for new code.

Mutable UI state MUST prefer `signal()`, derived state MUST use `computed()`, and side
effects MUST use `effect()`. `BehaviorSubject` MUST NOT be introduced for simple local UI
state. Components MUST use `ChangeDetectionStrategy.OnPush` and remain compatible with
zoneless execution by avoiding reliance on `NgZone` side effects. These rules keep the
frontend aligned with Angular 21's current architecture and reduce hidden runtime coupling.

### II. Strict TypeScript and Maintainable Boundaries

All new TypeScript MUST compile with the project's strict settings, including strict
templates, no implicit returns, and explicit override behavior. New code MUST NOT use `any`;
external or untrusted data MUST be represented as `unknown` until narrowed by type guards,
validation, or explicit interfaces. Data structures MUST use `interface`; unions, mapped
types, and discriminated state variants MUST use `type` aliases.

Asynchronous flows MUST handle failure explicitly with `try/catch`, RxJS `catchError`, or a
typed error state. Feature code MUST stay within the established `src/app/core`,
`src/app/shared`, `src/app/features`, and `src/app/layout` boundaries. File names MUST use
kebab-case and selectors MUST use the `app-` prefix. These constraints make approvals,
workflow state, and shared UI behavior traceable and safe to evolve.

### III. DESIGN.md Is the Single Visual Source of Truth

All UI MUST follow the Vercel / Geist design system defined in `DESIGN.md`. Colors,
typography, weights, spacing, radius, shadows, and focus states MUST be consumed through
existing CSS custom properties or design tokens. Components MUST NOT hard-code new visual
values when an approved token exists.

UI chrome MUST NOT use the CSS `border` property for visual borders. It MUST use the
project's shadow-as-border system, including tokens such as `var(--shadow-border)` and
`var(--shadow-card)`. Workflow accent colors MUST be used only for their matching semantic
workflow state, such as Develop, Preview, Ship, or equivalent approval statuses. They MUST
NOT be used as general decoration. This principle preserves one coherent interface language
across Angular Material, SCSS, and any Tailwind-assisted styling.

### IV. Approval UX Optimizes Work, Not Marketing

The first screen and primary flows MUST serve approval work directly: pending items,
request status, request details, approval actions, history, search, filters, and feedback
states. The application MUST favor dense, quiet, well-ordered screens that support scanning,
comparison, batch understanding, and repeated decisions.

Features MUST NOT replace real workflow capability with large hero sections, decorative card
stacks, or non-functional visual flourishes. Approval workflow data models, status enums,
and UI labels MUST use clear business semantics such as `pending`, `approved`, `rejected`,
`returned`, `draft`, and `submitted`. The rationale is that an approval system succeeds when
users can decide accurately and efficiently, not when it resembles a marketing page.

### V. Accessibility, Quality Gates, and Tests Are Non-Negotiable

Every interactive element MUST be keyboard operable, use semantic HTML, expose necessary
`aria-*` attributes, and provide a focus state equivalent to `2px solid var(--color-focus)`.
New UI MUST avoid text overflow, incoherent overlap, layout shift, and unusable mobile
states. Forms, dialogs, tables, buttons, status labels, icons, and navigation controls MUST
follow `DESIGN.md` tokens for color, radius, weight, and shadow.

Each application behavior or styling change MUST run `npm run lint:all`, `npm run test:ci`,
`npm run build`, and `npm run format:check` before delivery. Features that include logic,
state transitions, form validation, routing behavior, API interaction, or approval workflow
rules MUST include focused tests through `ng test` or the project's configured test runner.
If any gate cannot be executed, the plan or delivery notes MUST record the reason and the
risk. This principle keeps the system usable for assistive technologies and resilient under
ongoing feature work.

## Technical Constraints

SCSS is the primary styling language. New styles SHOULD reuse the structure under
`src/styles/abstracts`, `src/styles/base`, and `src/styles/themes` before adding local
patterns. Angular Material MAY be used only when its output is aligned through this project's
Material token overrides and does not break the Geist visual language. Tailwind MAY be used
as an implementation aid, but MUST NOT create a parallel design system or bypass
`DESIGN.md` tokens.

Shared UI elements, including icons, buttons, forms, tables, badges, dialogs, navigation,
and feedback states, MUST match the tokenized color, radius, typography, shadow, and focus
rules. Approval workflow domain names MUST remain explicit and business-readable in models,
status variants, component names, and visible labels. Changes to `DESIGN.md` tokens, global
styles, route architecture, workflow state models, or shared component APIs are
constitution-related changes and MUST include migration notes.

## Development Workflow and Quality Gates

### Agent Runtime Version Alignment

When an agent starts work in this repository, it MUST read `.nvmrc` before running Node,
npm, Angular CLI, json-server, or quality-gate commands. The active Node.js runtime MUST
match the version declared in `.nvmrc`. If it does not match, the agent MUST switch to the
declared version, such as with `nvm use`, before continuing. If the declared version is not
installed or the version manager is unavailable, the agent MUST report the blocker and MUST
NOT run project commands under a mismatched Node version.

This rule applies before development servers, tests, builds, format checks, dependency
installation, and generated Spec Kit workflows. It prevents environment drift and keeps
Angular, npm, and local API behavior consistent across human and automated sessions.

Feature specifications MUST describe approval work in user-centered terms and identify the
workflow entities and statuses involved. Feature plans MUST explicitly document Angular
architecture choices, lazy routing, state management, design token usage, accessibility
considerations, testing strategy, and quality gates. Any requirement that conflicts with this
constitution MUST be called out in the plan with a proposed correction before implementation
continues.

Task lists MUST include work for TypeScript models, Angular standalone components or
services, SCSS token usage, accessibility checks, and validation through the required quality
gates. Tests MUST be scheduled for logic, state transitions, form validation, routing
behavior, API interaction, and approval workflow rules. Pull requests or handoffs MUST
include the quality gates executed, or document the reason they were not executed and the
residual risk.

## Runtime Guidance Hierarchy

This constitution is the authoritative governance source for architecture, design, approval
workflow UX, accessibility, and quality gates. `DESIGN.md` is the authoritative visual token
and interaction reference. `.github/copilot-instructions.md` is an operational summary for
Copilot and MUST point back to this constitution instead of duplicating full principle text.
`AGENTS.md` is a human-readable agent index and MUST stay concise. `README.md` is an
onboarding and command reference for developers and MUST NOT repeat architectural rules
beyond short pointers to this constitution and `DESIGN.md`.

When guidance conflicts, the constitution wins first, then `DESIGN.md` for visual details,
then Copilot instructions for agent execution behavior, then `AGENTS.md` and `README.md` for
orientation. Any change that expands, removes, or redefines project rules MUST update this
hierarchy's dependent files in the same amendment.

## Governance

This constitution supersedes individual feature specs, plans, tasks, and implementation
preferences. Amendments require a documented rationale, an impact assessment for templates
and runtime guidance, and migration notes when changing design tokens, global styles, route
architecture, workflow state models, or shared component APIs.

Versioning follows semantic versioning. MAJOR changes remove or redefine principles in a way
that can invalidate existing feature plans or implementations. MINOR changes add principles,
sections, or materially expanded guidance. PATCH changes clarify wording or fix non-semantic
issues. Every plan, review, and delivery MUST verify compliance with this constitution and
record justified exceptions before work proceeds.

**Version**: 1.2.0 | **Ratified**: 2026-05-01 | **Last Amended**: 2026-05-01
