import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/our-network",
  title: "Notre réseau régional | HOJA Network",
  description: "Découvrez la présence régionale de HOJA Network dans l’est de la RDC, au Rwanda et dans la région des Grands Lacs.",
});

export default function OurNetworkLayout({ children }: { children: ReactNode }) {
  return children;
}
