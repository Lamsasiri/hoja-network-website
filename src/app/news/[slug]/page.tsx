import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPosts, getPostBySlug, sanitizeMediaUrl } from "../../../lib/wordpress";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";
import { SITE_ORIGIN } from "../../../lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts(20);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Story Not Found | HOJA Network",
    };
  }

  return {
    ...createPageMetadata({
      path: `/news/${post.slug}`,
      title: post.title,
      description: post.excerpt || "Read this story from HOJA Network.",
    }),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_ORIGIN}/news/${post.slug}`,
      type: "article",
      images: post.featuredMediaUrl ? [post.featuredMediaUrl] : ["/assets/hoja/logo_hoja_horizontal.png"],
    },
  };
}

export default async function SingleNewsPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Header */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-20">
        <div className="max-w-240 mx-auto">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider mb-4 flex-wrap">
            <Link href="/news" className="text-primary hover:underline font-bold">
              <LanguageText fr="← Actualités et récits" en="← News &amp; Stories" />
            </Link>
            {post.categories && post.categories.length > 0 && (
              <>
                <span className="text-background/40">•</span>
                <span className="bg-primary/20 text-primary font-bold px-2 py-0.5 rounded">
                  {post.categories[0]}
                </span>
              </>
            )}
          </div>
          <h1 className="[font-family:questa,_serif] text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-xs text-foreground/80">
            <span><LanguageText fr="Par" en="By" /> <strong>{post.authorName || "HOJA Network"}</strong></span>
            <span>•</span>
            <time dateTime={post.date}>
              <LanguageText fr={new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} en={new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} />
            </time>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      {post.featuredMediaUrl && (
        <div className="max-w-240 mx-auto px-6 -mt-8 relative z-10">
          <img
            src={sanitizeMediaUrl(post.featuredMediaUrl)}
            alt={post.title}
            className="w-full max-h-120 object-cover rounded-sm shadow-lg"
          />
        </div>
      )}

      {/* Article Body */}
      <article className="max-w-240 mx-auto px-6 py-12 lg:py-16">
        <div
          className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6 [&>p]:leading-relaxed [&>h3]:text-accent [&>h3]:font-bold [&>h3]:text-2xl [&>h3]:mt-8 [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back Link & CTA */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <Link href="/news" className="text-sm font-bold text-primary hover:underline">
            <LanguageText fr="← Retour à toutes les actualités" en="← Return to all news &amp; stories" />
          </Link>
          <Link href="/get-involved/partner-with-us" className="text-sm font-bold uppercase tracking-wider py-2.5 px-6 bg-accent text-background rounded-sm hover:bg-accent/90 transition-colors">
            <LanguageText fr="Soutenir cette initiative" en="Support This Initiative" />
          </Link>
        </div>
      </article>
    </main>
  );
}
