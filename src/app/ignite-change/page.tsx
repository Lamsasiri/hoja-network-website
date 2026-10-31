import { redirect } from "next/navigation";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/ignite-change",
  title: "Ignite Change",
  description: "Discover HOJA Network’s work and initiatives related to ignite change across Eastern DRC and the Great Lakes region.",
});

export default function IgniteChangeRedirect() {
  redirect("/get-involved/partner-with-us");
}
