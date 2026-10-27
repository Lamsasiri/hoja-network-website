import HomePageClient from "./HomePageClient";
import { getPosts } from "../lib/wordpress";

export default async function Page() {
  const posts = await getPosts(3);
  return <HomePageClient posts={posts} />;
}