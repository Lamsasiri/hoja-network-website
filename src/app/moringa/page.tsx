import LocalizedHojaPage from "../../components/LocalizedHojaPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/moringa",
  title: "Moringa",
  description: "Discover HOJA Network’s work and initiatives related to moringa across Eastern DRC and the Great Lakes region.",
});


export default function MoringaPage() {
  return <LocalizedHojaPage pageKey="moringaPage" />;
}
