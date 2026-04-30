# AGENTS.md — Approval Workflow System Agent Guide

## Purpose

This file is a compact guide for agents working in this repository. The full project rules
live in [.specify/memory/constitution.md](.specify/memory/constitution.md); do not duplicate
them here.

## Source Priority

1. [.specify/memory/constitution.md](.specify/memory/constitution.md) — governance,
   architecture, approval UX, accessibility, and quality gates.
2. [DESIGN.md](DESIGN.md) — Vercel / Geist visual tokens and interaction details.
3. [.github/copilot-instructions.md](.github/copilot-instructions.md) — Copilot execution
   notes and command reminders.
4. [README.md](README.md) — developer setup, API endpoint, and command reference.

## Working Rules

- On startup, read [.nvmrc](.nvmrc), confirm the active Node.js version matches it, and run
  `nvm use` before any Node, npm, Angular CLI, json-server, or quality-gate command when the
  active version differs.
- Read the active Spec Kit plan under `specs/**/plan.md` before feature work. If no plan
  exists, use the constitution and design document as the source of truth.
- Keep new Angular work standalone, signals-first, strict TypeScript, OnPush, lazy-loaded
  where route-level, and zoneless-compatible.
- Keep approval workflow screens task-focused: pending work, statuses, request details,
  decisions, history, search, filters, loading, empty, and error states.
- Use SCSS with existing CSS custom properties from `src/styles/abstracts/_variables.scss`;
  do not create a parallel visual system.
- Preserve user changes in the working tree and keep edits scoped to the request.

## Verification

For application behavior or styling changes, run the required gates when feasible:

```bash
npm run lint:all
npm run test:ci
npm run build
npm run format:check
```

Report any skipped gate with the reason and residual risk.
