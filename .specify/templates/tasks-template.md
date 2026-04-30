---
description: 'Task list template for feature implementation'
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include tests when the feature affects logic, state transitions, form validation,
routing behavior, API interaction, or approval workflow rules. The constitution requires
`npm run lint:all`, `npm run test:ci`, `npm run build`, and `npm run format:check` before
delivery.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Angular app**: `src/app/core/`, `src/app/shared/`, `src/app/features/`, `src/app/layout/`
- **Styles**: `src/styles/abstracts/`, `src/styles/base/`, `src/styles/themes/`, or component SCSS using existing tokens
- **Tests**: colocated Angular specs such as `src/app/features/[feature]/[name].spec.ts`
- Paths shown below must be adjusted to the concrete structure in plan.md

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create or update Angular feature folders per implementation plan
- [ ] T002 Define lazy route entries with `loadComponent` or route-level lazy loading
- [ ] T003 [P] Identify DESIGN.md tokens and SCSS files used by the feature

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 Define approval workflow interfaces and explicit status type aliases
- [ ] T005 [P] Create shared standalone components, directives, or pipes required by all stories
- [ ] T006 [P] Add core services, guards, or adapters with `inject()` and typed error handling
- [ ] T007 Establish signal/computed/effect state boundaries shared by user stories
- [ ] T008 Configure Angular Material token overrides or SCSS token usage needed by the feature
- [ ] T009 Add accessibility fixtures, labels, and focus behavior shared by the workflow

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1 (required when logic, state, forms, routing, or workflow rules change) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T010 [P] [US1] Component or service spec for [behavior] in src/app/features/[feature]/[name].spec.ts
- [ ] T011 [P] [US1] Routing, form, or state transition spec for [journey] in src/app/features/[feature]/[name].spec.ts

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create typed interfaces or status aliases in src/app/features/[feature]/[model].ts
- [ ] T013 [P] [US1] Create standalone component with OnPush in src/app/features/[feature]/[component].component.ts
- [ ] T014 [US1] Implement signal-based state and typed async error handling (depends on T012, T013)
- [ ] T015 [US1] Implement template with `@if`, `@for`, or `@switch` in src/app/features/[feature]/[component].component.html
- [ ] T016 [US1] Add SCSS using DESIGN.md tokens and shadow-as-border in src/app/features/[feature]/[component].component.scss
- [ ] T017 [US1] Add keyboard, semantic HTML, `aria-*`, and focus behavior for the workflow

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2 (required when logic, state, forms, routing, or workflow rules change) ⚠️

- [ ] T018 [P] [US2] Component or service spec for [behavior] in src/app/features/[feature]/[name].spec.ts
- [ ] T019 [P] [US2] Routing, form, or state transition spec for [journey] in src/app/features/[feature]/[name].spec.ts

### Implementation for User Story 2

- [ ] T020 [P] [US2] Create typed interfaces or status aliases in src/app/features/[feature]/[model].ts
- [ ] T021 [US2] Implement standalone component or service with `inject()` and signals
- [ ] T022 [US2] Implement workflow UI with DESIGN.md tokens and accessible controls
- [ ] T023 [US2] Integrate with User Story 1 components without breaking independent testability

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3 (required when logic, state, forms, routing, or workflow rules change) ⚠️

- [ ] T024 [P] [US3] Component or service spec for [behavior] in src/app/features/[feature]/[name].spec.ts
- [ ] T025 [P] [US3] Routing, form, or state transition spec for [journey] in src/app/features/[feature]/[name].spec.ts

### Implementation for User Story 3

- [ ] T026 [P] [US3] Create typed interfaces or status aliases in src/app/features/[feature]/[model].ts
- [ ] T027 [US3] Implement standalone component or service with `inject()` and signals
- [ ] T028 [US3] Implement workflow UI with DESIGN.md tokens and accessible controls

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and strict TypeScript review
- [ ] TXXX Performance and layout stability optimization across all stories
- [ ] TXXX [P] Additional Angular specs for workflow edge cases
- [ ] TXXX Accessibility verification for keyboard, aria, focus, and mobile behavior
- [ ] TXXX Run `npm run lint:all`
- [ ] TXXX Run `npm run test:ci`
- [ ] TXXX Run `npm run build`
- [ ] TXXX Run `npm run format:check`
- [ ] TXXX Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
    - User stories can then proceed in parallel (if staffed)
    - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Required tests MUST be written and fail before implementation
- Interfaces and status aliases before services or components
- Services and state boundaries before dependent components
- Template and SCSS after component API and state are stable
- Accessibility behavior before story checkpoint validation
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch Angular specs for User Story 1 together:
Task: "Component or service spec for [behavior] in src/app/features/[feature]/[name].spec.ts"
Task: "Routing, form, or state transition spec for [journey] in src/app/features/[feature]/[name].spec.ts"

# Launch independent feature files for User Story 1 together:
Task: "Create typed interfaces or status aliases in src/app/features/[feature]/[model].ts"
Task: "Create standalone component with OnPush in src/app/features/[feature]/[component].component.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
    - Developer A: User Story 1
    - Developer B: User Story 2
    - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
