import { redirect } from "next/navigation";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/team",
  title: "Team",
  description: "Discover HOJA Network’s work and initiatives related to team across Eastern DRC and the Great Lakes region.",
});


export default function TeamPage() {
  redirect("/who-we-are/leadership-and-governance");
}
