import LocalizedHojaPage from "../../components/LocalizedHojaPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/hoja-farm",
  title: "Hoja Farm",
  description: "Discover HOJA Network’s work and initiatives related to hoja farm across Eastern DRC and the Great Lakes region.",
});


export default function HojaFarmPage() {
  return <LocalizedHojaPage pageKey="farmPage" />;
}
