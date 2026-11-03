/**
 * Types & Client REST pour WordPress Headless (HOJA Network)
 * Données authentiques, sans chiffres gonflés ni affirmations non étayées.
 */

export interface WPPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredMediaUrl?: string;
  featuredMediaAlt?: string;
  authorName?: string;
  categories?: string[];
  lang?: 'en' | 'fr';
  url?: string;
}

export interface WPPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
}

const MONTHS: Record<string, number> = {
  january: 0, janvier: 0, february: 1, février: 1, fevrier: 1,
  march: 2, mars: 2, april: 3, avril: 3, may: 4, mai: 4,
  june: 5, juin: 5, july: 6, juillet: 6, august: 7, août: 7, aout: 7,
  september: 8, septembre: 8, october: 9, octobre: 9, november: 10, novembre: 10,
  december: 11, décembre: 11, decembre: 11,
};

/** Returns true only when an opportunity post includes a clearly identifiable past deadline. */
export function isExpiredOpportunity(post: WPPost, now = new Date()): boolean {
  const text = `${post.title} ${post.excerpt} ${post.content.replace(/<[^>]*>/g, " ")}`;
  if (!/(job opportunity|career opportunity|vacancy|job opening|offre d'emploi|offre d’emploi|poste à pourvoir|recrutement)/i.test(text)) {
    return false;
  }

  const match = text.match(/(?:application\s+deadline|deadline|date limite(?:\s+de\s+candidature)?|date de clôture)\s*[:–-]?\s*(?:📅\s*)?([A-Za-zÀ-ÿ]+\s+\d{1,2},?\s+\d{4}|\d{1,2}\s+[A-Za-zÀ-ÿ]+\s+\d{4})/i);
  if (!match) return false;

  let deadline: Date;
  const monthFirst = match[1].match(/^([A-Za-zÀ-ÿ]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  const dayFirst = match[1].match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/);
  if (monthFirst) {
    const month = MONTHS[monthFirst[1].toLocaleLowerCase("fr-FR")];
    if (month === undefined) return false;
    deadline = new Date(Number(monthFirst[3]), month, Number(monthFirst[2]), 23, 59, 59, 999);
  } else if (dayFirst) {
    const month = MONTHS[dayFirst[2].toLocaleLowerCase("fr-FR")];
    if (month === undefined) return false;
    deadline = new Date(Number(dayFirst[3]), month, Number(dayFirst[1]), 23, 59, 59, 999);
  } else {
    return false;
  }

  return deadline.getTime() < now.getTime();
}

/** Homepage spotlight window keeps old field posts from looking like current updates. */
export function isRecentPost(post: WPPost, now = new Date(), maxAgeDays = 365): boolean {
  const publishedAt = new Date(post.date).getTime();
  if (!Number.isFinite(publishedAt)) return false;
  const age = now.getTime() - publishedAt;
  return age >= 0 && age <= maxAgeDays * 24 * 60 * 60 * 1000;
}

export function sanitizeMediaUrl(url?: string): string | undefined {
  if (!url || typeof url !== "string") return undefined;
  const trimmed = url.trim();
  if (trimmed.startsWith("/")) return trimmed;

  try {
    const mediaUrl = new URL(trimmed);
    if (mediaUrl.protocol !== "https:" && mediaUrl.protocol !== "http:") return undefined;
    // WordPress still returns uploads under the former public site host. The
    // frontend now runs on Vercel, so serve those media files from the CMS host.
    if (mediaUrl.hostname === "hojanetwork.org" && mediaUrl.pathname.startsWith("/wp-content/uploads/")) {
      mediaUrl.host = "wp.hojanetwork.org";
    }
    return mediaUrl.toString();
  } catch {
    return undefined;
  }
}

export function sanitizeHtml(html = ""): string {
  if (!html) return "";
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\s*on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/href\s*=\s*["']\s*javascript:[^"']*["']/gi, 'href="#"')
    .replace(/src\s*=\s*["']\s*javascript:[^"']*["']/gi, 'src=""')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
}

const configuredWpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://wp.hojanetwork.org/wp-json/wp/v2";
const WP_API_URL = configuredWpApiUrl.replace(
  /^https?:\/\/(?:www\.)?hojanetwork\.org(?=\/wp-json\/wp\/v2(?:\/|$))/i,
  "https://wp.hojanetwork.org",
);

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#0*39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function plainText(html = ""): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function featuredMediaUrl(item: any): string | undefined {
  const media = item._embedded?.["wp:featuredmedia"]?.[0];
  const responsiveUrl = media?.media_details?.sizes?.medium_large?.source_url
    || media?.media_details?.sizes?.large?.source_url
    || media?.source_url;
  return sanitizeMediaUrl(responsiveUrl);
}

export async function getPosts(limit: number = 6): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${limit}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.slice(0, limit).map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: plainText(item.title?.rendered || ""),
      excerpt: plainText(item.excerpt?.rendered || ""),
      content: sanitizeHtml(item.content?.rendered || ""),
      date: item.date,
      featuredMediaUrl: featuredMediaUrl(item),
      featuredMediaAlt: plainText(item._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || ""),
      authorName: item._embedded?.author?.[0]?.name,
      categories: (item._embedded?.["wp:term"]?.flat() || [])
        .filter((term: any) => term.taxonomy === "category")
        .map((category: any) => plainText(category.name || ""))
        .filter(Boolean),
      lang: item.lang === "fr" ? "fr" : item.lang === "en" ? "en" : undefined,
      url: item.link,
    }));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      // Fallback to searching in recent posts
      const posts = await getPosts(50);
      return posts.find((post) => post.slug === slug) || null;
    }
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      const posts = await getPosts(50);
      return posts.find((post) => post.slug === slug) || null;
    }
    const item = data[0];
    return {
      id: item.id,
      slug: item.slug,
      title: plainText(item.title?.rendered || ""),
      excerpt: plainText(item.excerpt?.rendered || ""),
      content: sanitizeHtml(item.content?.rendered || ""),
      date: item.date,
      featuredMediaUrl: featuredMediaUrl(item),
      featuredMediaAlt: plainText(item._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || ""),
      authorName: item._embedded?.author?.[0]?.name,
      categories: (item._embedded?.["wp:term"]?.flat() || [])
        .filter((term: any) => term.taxonomy === "category")
        .map((category: any) => plainText(category.name || ""))
        .filter(Boolean),
      lang: item.lang === "fr" ? "fr" : item.lang === "en" ? "en" : undefined,
      url: item.link,
    };
  } catch {
    return null;
  }
}
