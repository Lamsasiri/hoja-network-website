import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/get-involved/partner-with-us",
  title: "Partenariats | HOJA Network",
  description: "Collaborez avec HOJA Network sur l’énergie propre, la conservation, l’agroforesterie, l’entrepreneuriat vert et la résilience communautaire.",
});

export default function PartnershipLayout({ children }: { children: ReactNode }) {
  return children;
}
