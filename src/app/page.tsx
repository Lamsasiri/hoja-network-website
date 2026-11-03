import HomePageClient from "./HomePageClient";
import { createPageMetadata } from "../lib/seo";
import { getPosts, isExpiredOpportunity, isRecentPost } from "../lib/wordpress";

export const metadata = createPageMetadata({
  path: "/",
  title: "Nature, clean energy and green enterprise in the Great Lakes",
  description: "HOJA Network works with communities in Eastern DRC and the Great Lakes on nature protection, clean energy, green entrepreneurship, education, and community resilience.",
});


export default async function Page() {
  const latestPosts = await getPosts(20);
  const posts = latestPosts.filter((post) => isRecentPost(post) && !isExpiredOpportunity(post)).slice(0, 3);
  return <HomePageClient posts={posts} />;
}
