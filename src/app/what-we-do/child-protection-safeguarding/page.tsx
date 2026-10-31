import { redirect } from "next/navigation";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/child-protection-safeguarding",
  title: "Child Protection Safeguarding",
  description: "Discover HOJA Network’s work and initiatives related to child protection safeguarding across Eastern DRC and the Great Lakes region.",
});

export default function ChildProtectionRedirectPage() {
  redirect("/what-we-do/hoja-educ");
}
