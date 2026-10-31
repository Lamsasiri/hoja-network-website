import type { Metadata } from "next";
import { SITE_ORIGIN } from "./site";

type PageSeo = {
  path: string;
  title: string;
  description: string;
};

/** Consistent, page-specific metadata for the statically exported public site. */
export function createPageMetadata({ path, title, description }: PageSeo): Metadata {
  const canonical = `${SITE_ORIGIN}${path}`;
  const pageTitle = title.replace(/\s*\|\s*HOJA Network\s*$/i, "");

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: "HOJA Network",
      type: "website",
      images: ["/assets/hoja/logo_hoja_horizontal.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/assets/hoja/logo_hoja_horizontal.png"],
    },
  };
}
