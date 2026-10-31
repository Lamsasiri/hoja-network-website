import { redirect } from "next/navigation";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/governance-team",
  title: "Governance Team",
  description: "Discover HOJA Network’s work and initiatives related to governance team across Eastern DRC and the Great Lakes region.",
});


export default function GovernanceTeamPage() {
  redirect("/who-we-are/leadership-and-governance");
}
