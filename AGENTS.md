# Project guidance

This repository contains the HOJA Network public website, implemented with Next.js App Router and static export. It began as a generated site clone; do not assume generated-route copy or metadata still describes the current project.

## Run

- `npm ci`
- `npm run dev`
- `npm run typecheck`
- `npm run build`

## Safe editing

- Preserve the approved layout, existing route structure, visual system, and user-authored working-tree changes.
- Keep organization and program copy grounded in approved source material. Do not invent partner identities, institutional facts, impact figures, payment details, or editorial content.
- Use `src/lib/wordpress.ts` for read-only WordPress post integration. News is fetched at build time because `next.config.mjs` enables static export.
- Keep bilingual copy consistent with the shared language context and translation data.
- Keep project photography and marks under `public/assets/hoja/`; include only assets approved for public use.
- Do not add real credentials to source, documentation, or `.env.example`.

## Constraints

- Do not deploy, alter production infrastructure, or send real form/payment data during an audit.
- Donation methods are informational only until verified payment configuration and a processing service exist.
- Contact uses a `mailto:` form and does not transmit data directly to a server.
- Static export means runtime server routes, redirects, and on-demand revalidation are unavailable.
