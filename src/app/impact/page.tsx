import LocalizedHojaPage from "../../components/LocalizedHojaPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/impact",
  title: "Impact",
  description: "Discover HOJA Network’s work and initiatives related to impact across Eastern DRC and the Great Lakes region.",
});


export default function ImpactPage() {
  return <LocalizedHojaPage pageKey="impactPage" />;
}
