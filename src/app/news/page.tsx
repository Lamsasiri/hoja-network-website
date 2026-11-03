import Link from "next/link";
import { getPosts, isExpiredOpportunity, sanitizeMediaUrl } from "../../lib/wordpress";
import LanguageText from "../../components/LanguageText";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/news",
  title: "News & Field Stories | HOJA Network",
  description: "Latest news, field reports, community stories, and press releases from HOJA Network across Eastern DRC and Rwanda.",
});



export default async function NewsArchivePage() {
  const posts = await getPosts(12);

  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="h-150 min-h-150 flex relative flex-wrap items-center overflow-hidden bg-color-011 max-md:h-auto max-lg:pt-20 max-lg:min-h-0 md:max-lg:h-[58.6rem] 2xl:h-202.5 2xl:min-h-202.5">
        <div className="w-208 h-150 block absolute top-0 left-112 min-w-0 max-md:w-full max-md:h-64 max-lg:right-0 max-lg:static max-lg:left-auto md:max-lg:w-192 md:max-lg:h-135 2xl:w-312 2xl:h-202.5 2xl:left-168">
          <img className="w-full h-150 block max-w-full overflow-clip object-cover text-center max-md:h-64 md:max-lg:h-135 2xl:h-202.5" alt="Jeunes de HOJA Network réunis lors d’une activité de terrain" src="/assets/hoja/photos/IMG_8227.jpg" />
        </div>
        <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4">
          <div className="w-[34.2rem] block z-2 mr-[41.8rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:mt-8 max-md:mr-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]">
            <div className="block p-6 text-background bg-accent">
              <span className="inline-block bg-[var(--primary-text)] text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-3"><LanguageText fr="Nouvelles du terrain" en="Dispatches from the Field" /></span>
              <h1 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]">
                <LanguageText fr="Actualités, récits de terrain et nouvelles" en="News, Field Stories &amp; Updates" />
              </h1>
            </div>
            <div className="block p-6">
              <p className="block text-xl leading-6.5 text-foreground font-medium">
                <LanguageText fr="Découvrez les actualités et récits vérifiés sur la protection de la nature, l’énergie propre, l’entrepreneuriat vert, l’éducation créative (HOJA EDUC), l’accompagnement des familles et la résilience communautaire dans l’est de la RDC et la région des Grands Lacs." en="Discover verified dispatches on nature protection, clean energy, green entrepreneurship, creative education (HOJA EDUC), parenting in crisis, and community resilience across Eastern DRC and the Great Lakes." />
              </p>
            </div>
          </div>
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
                      alt={post.featuredMediaAlt || post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  {isExpiredOpportunity(post) && <p className="mb-3 inline-flex rounded-sm bg-surface-4 px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground"><LanguageText fr="Candidature clôturée" en="Applications closed" /></p>}
                  {post.categories && post.categories.length > 0 && (
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--primary-text)] mb-2">
                      {post.categories[0]}
                    </div>
                  )}
                  <h2 className="[font-family:questa,_serif] text-xl font-bold text-accent mb-3 leading-snug group-hover:text-[var(--primary-text)] transition-colors">
                    <Link className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href={`/news/${post.slug}`}>
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
