import { redirect } from "next/navigation";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/economic-development-women-empowerment",
  title: "Economic Development Women Empowerment",
  description: "Discover HOJA Network’s work and initiatives related to economic development women empowerment across Eastern DRC and the Great Lakes region.",
});

export default function EconomicDevelopmentRedirectPage() {
  redirect("/what-we-do/women-empowerment");
}
