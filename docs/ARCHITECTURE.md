# Architecture

## Overview

This repository is a single-page Astro site assembled in `src/pages/index.astro`.

Render order:
1. `Hero.astro`
2. `HowItWorks.astro`
3. `NetworkCanvas.astro`
4. `UseCases.astro`
5. `ManifestoBlock.astro`
6. `CTASection.astro`

Shared shell is provided by `src/layouts/Layout.astro`.

## Component Responsibilities

### `src/layouts/Layout.astro`

- Imports global Tailwind entrypoint from `src/styles/global.css`.
- Defines `<head>` metadata, Google Fonts, fixed nav, and footer.
- Adds inline script for nav style changes on scroll.

### `src/components/Hero.astro`

- Contains the interactive analyzer mock UI.
- Handles platform selection and public/private profile mode toggles.
- Routes analyzer actions to waitlist CTA using `sendToWaitlist()`.
- Includes a commented mock scanner/results flow retained for future launch wiring.

### `src/components/HowItWorks.astro`

- Static three-step explanation section.

### `src/components/NetworkCanvas.astro`

- Runs a client-side canvas animation of social graph clustering.
- Starts with free movement, then transitions to organized mode.
- Supports reduced-motion users by skipping animation and rendering final layout directly.
- Pauses animation when out of viewport with `IntersectionObserver`.

Important maintenance constraint:
- In organized mode, nodes must keep per-node slot targets (`targetX` and `targetY`) and snapping logic.
- Removing this behavior can cause nodes to collapse into a single point over time.

### `src/components/UseCases.astro`

- Static card grid of audience scenarios.

### `src/components/ManifestoBlock.astro`

- Static manifesto quote and supporting copy.

### `src/components/CTASection.astro`

- Reads `import.meta.env.PUBLIC_FORMSPREE_ENDPOINT`.
- Validates email format before submit.
- Sends `POST` request to Formspree with JSON payload.
- Handles three UI states: validation error, submit error, and success.

## Styling System

Tailwind setup:
- Entry file: `src/styles/global.css`
- Config: `tailwind.config.mjs`
- Vite plugin integration: `astro.config.mjs`

Design tokens in `tailwind.config.mjs` include:
- Colors: `bg`, `surface`, `surfaceHigh`, `accent`, `accentRed`, `accentOrange`, `muted`, `text`, `textSecondary`
- Fonts: `display` (`Bebas Neue`), `mono` (`IBM Plex Mono`), `body` (`DM Sans`)

## Runtime Configuration

Environment variable:
- `PUBLIC_FORMSPREE_ENDPOINT`

Expected format:
- `https://formspree.io/f/<form_id>`

Because this is a `PUBLIC_` variable, it is embedded in client code and should never contain secrets.

## Change Checklist

When editing user flows:
- Keep hero CTA and waitlist IDs aligned (`waitlist`, `waitlist-submit`).
- If re-enabling analyzer scan logic, confirm the form CTA flow remains reachable.

When editing network animation:
- Preserve organized target-slot assignment and snap-to-target behavior.
- Re-test both normal motion and reduced-motion paths.

When editing form submission:
- Keep endpoint in `data-formspree-endpoint` or equivalent client-readable source.
- Verify validation and network failure states are still visible to users.