import { redirect } from "next/navigation";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/biomass-lake-kivu-ecosystem",
  title: "Biomass Lake Kivu Ecosystem",
  description: "Discover HOJA Network’s work and initiatives related to biomass lake kivu ecosystem across Eastern DRC and the Great Lakes region.",
});

export default function BiomassRedirectPage() {
  redirect("/what-we-do/renewable-energy-clean-cooking");
}
