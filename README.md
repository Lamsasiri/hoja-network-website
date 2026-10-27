# HOJA Network Website

The public website for HOJA Network, built with Next.js. It presents the organization's work, impact, programs, and news in French and English.

## Architecture

This is a Next.js App Router application exported as static files. Institutional and program pages are part of the application. The `/news` archive and `/news/[slug]` article pages read posts from the WordPress REST API during the build. News updates appear after the site is rebuilt; the published static pages do not query WordPress at visitor request time. See [ARCHITECTURE.md](./ARCHITECTURE.md) for details and constraints.

## Technology

- Next.js 15.5
- React 19
- TypeScript 5
- Tailwind CSS 4
- WordPress REST API for editorial posts

## Prerequisites

- Node.js 20.9 or newer (use an active LTS release)
- npm 10 or newer
- Network access to the public WordPress REST API to build news pages

## Local setup

```sh
npm ci
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, copy the environment template with `Copy-Item .env.example .env.local`. Then open `http://localhost:3000`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_ORIGIN` | Recommended | Public site origin used by sitemap and robots metadata. Set to `https://hojanetwork.org` for the official site. |
| `NEXT_PUBLIC_WORDPRESS_URL` | Recommended | WordPress REST API root. Defaults to `https://hojanetwork.org/wp-json/wp/v2`. |

These are public URLs and must not contain credentials. Do not commit `.env.local` or any other `.env` file.

## WordPress configuration

The site reads published posts from `/posts?_embed&per_page=...`. It uses the post title, excerpt, HTML content, publication date, slug, author, and featured media when returned. The current public API endpoint is accessible without authentication. The API client returns an empty list on request failure, so check the build output and the WordPress endpoint when news unexpectedly disappears. No WordPress content is written by the site.

Because this project uses static export, API content is fetched at build time. Rebuild after WordPress editorial changes. A private or authenticated API is not currently supported.

## Routes

Main HOJA routes include `/`, `/who-we-are`, `/who-we-are/our-history`, `/who-we-are/our-network`, `/who-we-are/team`, `/who-we-are/governance-team`, `/what-we-do`, `/impact`, `/green-economy`, `/hoja-academy`, `/hoja-farm`, `/moringa`, `/get-involved`, `/get-involved/partner-with-us`, `/contact`, `/donate`, and `/news`. Program detail routes are under `/what-we-do/`.

News articles use `/news/[slug]`; the set of static article routes is determined by WordPress content available when `npm run build` runs. The sitemap is maintained in `src/app/sitemap.ts`.

## Languages

French and English are selected through the shared language switcher and retained in local storage. Supported copy uses the provider and dictionary/localized text components. Routes do not have separate language prefixes.

## Media

Organization marks, partner marks, and site photography used by the application are served from `public/assets/hoja/`. WordPress featured media is referenced from the URL returned by the API. Only include media that is approved for public website and repository use; avoid copying the entire WordPress library.

## Commands

```sh
npm run dev       # local development server
npm run typecheck # TypeScript validation
npm run build     # production static export
npm run start     # serve the static export from out/ on localhost:3000 (run build first)
npm run audit:browser # browser route, language, image, and responsive checks
```

The repository does not currently define a lint or unit-test suite. The browser audit requires a local Chrome/Chromium installation; set `CHROME_PATH` if it is not at the standard Windows path. Run `npm run build`, then start `npm run start` in one terminal before running `npm run audit:browser` in another. The browser checks the static export in `out/` and never submits contact or payment data.

## Maintenance notes

- Keep the lockfile in sync with `package.json` and use `npm ci` for reproducible installs.
- Run TypeScript validation and a production build before preparing a release.
- Check WordPress reachability and generated news routes when rebuilding.
- Do not add payment credentials or claim a donation transaction was completed; payment processing is not integrated.
- Do not deploy from this repository as part of an audit. Deployment is a separate operation.
