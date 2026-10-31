import LocalizedHojaPage from "../../components/LocalizedHojaPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/green-economy",
  title: "Green Economy",
  description: "Discover HOJA Network’s work and initiatives related to green economy across Eastern DRC and the Great Lakes region.",
});


export default function GreenEconomyPage() {
  return <LocalizedHojaPage pageKey="greenEconomyPage" />;
}
