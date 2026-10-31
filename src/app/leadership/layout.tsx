import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/leadership-and-governance",
  title: "Direction et gouvernance | HOJA Network",
  description: "Rencontrez l’équipe de direction et découvrez les principes de gouvernance de HOJA Network.",
});

export default function LeadershipLayout({ children }: { children: ReactNode }) {
  return children;
}
