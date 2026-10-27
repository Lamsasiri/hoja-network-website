import Link from "next/link";
import type { Metadata } from "next";
import { getPosts, sanitizeMediaUrl } from "../../lib/wordpress";
import LanguageText from "../../components/LanguageText";

export const metadata: Metadata = {
  title: "News & Field Stories | HOJA Network",
  description: "Latest news, field reports, community stories, and press releases from HOJA Network across Eastern DRC and Rwanda.",
};

export default async function NewsArchivePage() {
  const posts = await getPosts(12);

  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <LanguageText fr="Nouvelles du terrain" en="Dispatches from the Field" />
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Actualités, récits de terrain et nouvelles" en="News, Field Stories &amp; Updates" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            <LanguageText fr="Découvrez les actualités et récits vérifiés sur la protection de la nature, l’énergie propre, l’entrepreneuriat vert, l’éducation créative (HOJA EDUC), l’accompagnement des familles et la résilience communautaire dans l’est de la RDC et la région des Grands Lacs." en="Discover verified dispatches on nature protection, clean energy, green entrepreneurship, creative education (HOJA EDUC), parenting in crisis, and community resilience across Eastern DRC and the Great Lakes." />
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 && <p className="text-foreground/80"><LanguageText fr="Aucune actualité n’est disponible pour le moment. Revenez bientôt." en="There are no news updates available at the moment. Please check back soon." /></p>}
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-border rounded-sm overflow-hidden bg-background flex flex-col justify-between hover:shadow-lg transition-shadow group"
            >
              <div>
                {post.featuredMediaUrl && (
                  <div className="relative h-48 w-full overflow-hidden bg-surface-2">
                    <img
                      src={sanitizeMediaUrl(post.featuredMediaUrl)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.categories && post.categories.length > 0 && (
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {post.categories[0]}
                    </div>
                  )}
                  <h2 className="[font-family:questa,_serif] text-xl font-bold text-accent mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/news/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-border/50 flex items-center justify-between text-xs text-foreground/60">
                <span><LanguageText fr={`Par ${post.authorName || "HOJA Network"}`} en={`By ${post.authorName || "HOJA Network"}`} /></span>
                <span><LanguageText fr={new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })} en={new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
