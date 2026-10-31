import HomePageClient from "./HomePageClient";
import { createPageMetadata } from "../lib/seo";
import { getPosts } from "../lib/wordpress";

export const metadata = createPageMetadata({
  path: "/",
  title: "Nature, clean energy and green enterprise in the Great Lakes",
  description: "HOJA Network works with communities in Eastern DRC and the Great Lakes on nature protection, clean energy, green entrepreneurship, education, and community resilience.",
});


export default async function Page() {
  const posts = await getPosts(3);
  return <HomePageClient posts={posts} />;
}
