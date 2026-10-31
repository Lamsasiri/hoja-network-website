import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/our-history",
  title: "Notre histoire | HOJA Network",
  description: "Découvrez les origines et l’évolution de HOJA Network et son engagement auprès des communautés de l’est de la RDC et de la région des Grands Lacs.",
});

export default function FounderLayout({ children }: { children: ReactNode }) {
  return children;
}
