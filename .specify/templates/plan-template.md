# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.x with Angular 21 strict templates  
**Primary Dependencies**: Angular 21, Angular Router, Angular Material/CDK, RxJS, SCSS, Tailwind as auxiliary only  
**Storage**: Browser/client state only unless feature specifies API integration or persistence  
**Testing**: `npm run test:ci`; lint, build, and format checks via `npm run lint:all`, `npm run build`, and `npm run format:check`  
**Target Platform**: Modern web browsers for approval workflow users
**Project Type**: Angular frontend application  
**Performance Goals**: Efficient approval scanning, filtering, and repeated decision workflows without layout shift  
**Constraints**: Standalone components, lazy routes, signals-first state, strict TypeScript, DESIGN.md tokens, accessible keyboard flows  
**Scale/Scope**: Approval workflow screens, shared UI, feature modules, and route-level flows within `src/app/`

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **Angular 21 architecture**: Plan names standalone components, lazy route or
  `loadComponent` boundaries, `inject()` dependencies, signal/computed/effect state, and
  zoneless-compatible OnPush behavior.
- **Strict TypeScript**: Plan identifies typed interfaces or type aliases, avoids `any`,
  defines error handling for async flows, and keeps code in `core`, `shared`, `features`, or
  `layout` boundaries.
- **DESIGN.md compliance**: Plan lists the design tokens, CSS custom properties, SCSS files,
  and shadow-as-border approach used by the feature. New hard-coded visual values require a
  constitution-related token change rationale.
- **Approval workflow UX**: Plan shows how the first screen or changed flow supports approval
  work such as pending items, status, request details, actions, history, search, filtering,
  and feedback states.
- **Accessibility and quality gates**: Plan includes keyboard behavior, semantic HTML,
  required `aria-*` attributes, focus state handling, tests for logic, routing, API, or
  workflow rules when applicable, and execution of `npm run lint:all`, `npm run test:ci`,
  `npm run build`, and `npm run format:check`.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── app/
│   ├── core/           # Global services, guards, interceptors
│   ├── shared/         # Shared standalone UI, directives, pipes
│   ├── features/       # Lazy-loaded approval workflow features
│   └── layout/         # Shell and layout components
└── styles/
    ├── abstracts/      # Tokens, variables, mixins
    ├── base/           # Reset and typography
    └── themes/         # Material and theme overrides
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
