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

export function sanitizeMediaUrl(url?: string): string | undefined {
  return url || undefined;
}

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://hojanetwork.org/wp-json/wp/v2";

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
      content: item.content?.rendered || "",
      date: item.date,
      featuredMediaUrl: sanitizeMediaUrl(item._embedded?.["wp:featuredmedia"]?.[0]?.source_url),
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
  const posts = await getPosts(100);
  return posts.find((post) => post.slug === slug) || null;
}
