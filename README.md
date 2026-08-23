# Priorcheck Landing Page

Marketing and waitlist site for the Priorcheck product concept.

This repo is a single-page Astro site with:
- A hero section with an interactive mock analyzer UI
- A network visualization canvas
- A Formspree-backed waitlist form

## Stack

- Astro `6.x`
- Tailwind CSS `4.x` via `@tailwindcss/vite`
- Vanilla client-side JavaScript in Astro components

## Prerequisites

- Node.js `>=20.19.1`
- npm `>=9.6.5`

## Quick Start

```bash
npm install
cp .env.example .env
```

Set your Formspree endpoint in `.env`:

```bash
PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"
```

Start local development:

```bash
npm run dev
```

The app runs at `http://localhost:4321` by default.

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `PUBLIC_FORMSPREE_ENDPOINT` | Yes (for submissions) | Public Formspree endpoint used by the waitlist form in `src/components/CTASection.astro`. |

Notes:
- This is a `PUBLIC_` variable and is exposed to browser code. Do not put secrets in it.
- If it is missing, the waitlist form shows a submission error state and does not send data.

## NPM Scripts

- `npm run dev` - Start Astro dev server.
- `npm run start` - Alias for `npm run dev`.
- `npm run build` - Build production output into `dist/`.
- `npm run preview` - Preview built output locally.
- `npm run astro` - Run Astro CLI commands directly.

## Project Structure

```text
src/
	components/
		Hero.astro
		HowItWorks.astro
		NetworkCanvas.astro
		UseCases.astro
		ManifestoBlock.astro
		CTASection.astro
	layouts/
		Layout.astro
	pages/
		index.astro
	styles/
		global.css
```

Page composition is defined in `src/pages/index.astro`.

## Current Product Behavior

- The analyzer shown in `Hero.astro` is currently a launch-preview interaction.
- `ANALYZE` and private-account connect buttons direct users to the waitlist section.
- The old mock scan/results flow is intentionally kept commented in `Hero.astro` for future reactivation.
- The waitlist form validates email client-side and posts JSON to Formspree.

## Build and Deployment

Create a production build:

```bash
npm run build
```

Output is generated in `dist/` and can be deployed to static hosting providers.

Set `PUBLIC_FORMSPREE_ENDPOINT` in your deployment environment so it is available at build time.

## Architecture Notes

Detailed component responsibilities and maintenance guidelines are in:

- `docs/ARCHITECTURE.md`