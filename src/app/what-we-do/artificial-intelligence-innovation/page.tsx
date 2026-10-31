import { redirect } from "next/navigation";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/artificial-intelligence-innovation",
  title: "Artificial Intelligence Innovation",
  description: "Discover HOJA Network’s work and initiatives related to artificial intelligence innovation across Eastern DRC and the Great Lakes region.",
});

export default function ArtificialIntelligenceRedirectPage() {
  redirect("/what-we-do/responsible-digital-ai");
}
