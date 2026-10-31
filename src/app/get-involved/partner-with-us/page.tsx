import PartnerWithUsClient from "./PartnerWithUsClient";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/get-involved/partner-with-us",
  title: "Partner With Us | Strategic Alliances & Green Solutions | HOJA Network",
  description: "Collaborate with HOJA Network on clean cooking, Virunga biodiversity conservation, Congo Basin agroforestry, green youth enterprise incubation, and grassroots resilience.",
});



export default function PartnerWithUsPage() {
  return <PartnerWithUsClient />;
}
