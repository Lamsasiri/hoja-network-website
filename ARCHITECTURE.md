# Architecture

HOJA Network's public website is a Next.js App Router application. Institution, program, and impact pages are authored in the application; news and article content is fetched from the public WordPress REST API at build time.

## Main areas

- `src/app/`: routes, shared layout, page components, sitemap, and robots metadata.
- `src/components/` and `src/context/`: reusable client components and the French/English language state.
- `src/dictionaries/` and `src/locales/`: translation content.
- `src/lib/wordpress.ts`: WordPress REST API types and read functions.
- `public/assets/hoja/`: local organization marks, partner marks, and site photographs.
- `scripts/`: project utility and browser audit scripts.

## Rendering and WordPress

The Next.js configuration uses `output: "export"`. The application is therefore built as static HTML. WordPress posts used on `/news` and `/news/[slug]` are requested while building; the generated pages do not fetch updates in a visitor's browser. Rebuild and republish the static output to refresh editorial content. The public WordPress REST API is read-only from this site.

Set `NEXT_PUBLIC_WORDPRESS_URL` to the REST API root, normally `https://hojanetwork.org/wp-json/wp/v2`. `NEXT_PUBLIC_SITE_ORIGIN` is used to form absolute sitemap and robots URLs. Both values are public configuration, not credentials.

## Language handling

The language provider stores the selected language in browser local storage and updates the document language. Pages that support both languages render their copy from the selected language. Routes do not use separate `/fr` and `/en` URL prefixes.

## Important constraints

- No donation processor is integrated. The donation page directs visitors to request verified instructions from HOJA Network.
- Contact submission uses a `mailto:` link, which opens the visitor's mail application and does not submit data to a server.
- Static export limits runtime redirects, API routes, and on-demand content revalidation. Check hosting requirements before changing `output`.
- Public WordPress media URLs are used for article featured images when the API provides them; organization photography is stored locally under `public/assets/hoja/`.
