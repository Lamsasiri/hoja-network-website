import { SITE_ORIGIN } from "../../lib/site";

export const dynamic = "force-static";

const routes = [
  ["/", "HOJA Network public website"],
  ["/who-we-are", "About HOJA Network"],
  ["/impact", "HOJA Network impact"],
  ["/green-economy", "Green economy"],
  ["/hoja-academy", "HOJA Academy"],
  ["/hoja-farm", "HOJA Farm"],
  ["/get-involved", "Get involved with HOJA Network"],
  ["/contact", "Contact HOJA Network"],
  ["/news", "HOJA Network news and field stories"],
] as const;

export function GET() {
  const content = [
    "# HOJA Network",
    "",
    "HOJA Network is a public organization website with French and English content about its work, programs, impact, and news.",
    "",
    "## Main routes",
    ...routes.map(([path, description]) => `- [${description}](${SITE_ORIGIN}${path})`),
    "",
    "News pages are generated from the public WordPress REST API at build time.",
  ].join("\n");

  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
