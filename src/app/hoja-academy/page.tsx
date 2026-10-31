import LocalizedHojaPage from "../../components/LocalizedHojaPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/hoja-academy",
  title: "Hoja Academy",
  description: "Discover HOJA Network’s work and initiatives related to hoja academy across Eastern DRC and the Great Lakes region.",
});


export default function HojaAcademyPage() {
  return <LocalizedHojaPage pageKey="academyPage" />;
}
