import type { MetadataRoute } from "next";
import { getPosts } from "../lib/wordpress";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

const publicRoutes: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/who-we-are", changeFrequency: "monthly", priority: 0.9 },
  { path: "/who-we-are/our-history", changeFrequency: "monthly", priority: 0.8 },
  { path: "/who-we-are/leadership-and-governance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/who-we-are/our-network", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/renewable-energy-clean-cooking", changeFrequency: "monthly", priority: 0.85 },
  { path: "/what-we-do/biodiversity-virunga-protection", changeFrequency: "monthly", priority: 0.85 },
  { path: "/what-we-do/congo-basin-forest-climate", changeFrequency: "monthly", priority: 0.85 },
  { path: "/what-we-do/green-entrepreneurship-circular-economy", changeFrequency: "monthly", priority: 0.85 },
  { path: "/what-we-do/responsible-digital-ai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/green-great-lakes-initiative", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/youth-empowerment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/women-empowerment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/hoja-educ", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/parenting-in-crisis", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do/humanitarian-consultancy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/impact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/green-economy", changeFrequency: "monthly", priority: 0.85 },
  { path: "/hoja-academy", changeFrequency: "monthly", priority: 0.85 },
  { path: "/hoja-farm", changeFrequency: "monthly", priority: 0.85 },
  { path: "/moringa", changeFrequency: "monthly", priority: 0.8 },
  { path: "/get-involved", changeFrequency: "monthly", priority: 0.85 },
  { path: "/get-involved/partner-with-us", changeFrequency: "monthly", priority: 0.85 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/news", changeFrequency: "weekly", priority: 0.75 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(20);

  return [
    ...publicRoutes.map((route) => ({
      url: `${SITE_ORIGIN}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: `${SITE_ORIGIN}/news/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
