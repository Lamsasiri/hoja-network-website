import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/donate",
  title: "Faire un don à HOJA Network",
  description: "Découvrez comment soutenir les initiatives communautaires de HOJA Network : énergie propre, protection de la nature, entrepreneuriat vert et résilience familiale.",
});

export default function DonateLayout({ children }: { children: ReactNode }) {
  return children;
}
