import { redirect } from "next/navigation";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/topic",
  title: "HOJA Network Topics",
  description: "Discover HOJA Network’s work and initiatives related to hoja network topics across Eastern DRC and the Great Lakes region.",
});

export default function TopicRedirect() {
  redirect("/impact");
}
