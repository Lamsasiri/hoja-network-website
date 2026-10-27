import Link from "next/link";
import type { Metadata } from "next";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Women's Economic Empowerment | HOJA Network",
  description: "Financial education, enterprise coaching, and cooperative solidarity for women entrepreneurs in the Great Lakes region.",
};

export default function WomenEmpowermentPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            Documented Core Program • Programme Historique Vérifié
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Autonomisation économique des femmes" en="Women's Economic Empowerment" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            <LanguageText fr="Soutenir les entrepreneures et les coopératives marchandes grâce à une éducation financière pratique, des compétences commerciales et une gestion durable des entreprises." en="Supporting women entrepreneurs and market cooperatives through practical financial literacy, business skills, and sustainable enterprise management." />
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                <LanguageText fr="Renforcer l’autonomie financière et le leadership des femmes" en="Strengthening Women's Financial Agency and Leadership" />
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                Women form the backbone of local commerce and household sustenance throughout Eastern DRC and the Great Lakes. However, women entrepreneurs frequently face barriers to business formalization, lack of financial education, and vulnerability to economic shocks.
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                <LanguageText fr="Le réseau HOJA travaille directement avec des commerçantes, des vendeuses de marché et des collectifs artisanaux pour renforcer leur autonomie économique et protéger leurs moyens de subsistance." en="HOJA Network works directly with women merchants, market vendors, and artisanal collectives to strengthen their economic agency and protect their livelihoods." />
              </p>
            </div>

            {/* Action Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                <LanguageText fr="Axes du programme" en="Program Focus Areas" />
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2">1. Financial Education &amp; Budgeting</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Practical training on managing daily working capital, calculating profit margins, separating personal and business expenses, and building financial stability.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2">2. Cooperative Organizing &amp; Mutual Support</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Encouraging women to form supportive trade associations and collectives that facilitate bulk purchasing, negotiate better supplier terms, and share market intelligence.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2">3. Business Administration &amp; Growth</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Coaching on customer relations, product diversification, simple inventory tracking, and sustainable micro-enterprise growth.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                &ldquo;When a woman acquires financial literacy and manages her business independently, the entire family benefits: children stay in school, nutrition improves, and household resilience increases.&rdquo;
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                — Clementine Botanyi, Finance &amp; Treasury
              </span>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-3"><LanguageText fr="Nos programmes" en="Our Programs" /></h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/what-we-do/youth-empowerment" className="hover:text-primary">Youth Economic Empowerment</Link></li>
                <li className="font-bold text-primary">• Women's Economic Empowerment</li>
                <li><Link href="/what-we-do/hoja-educ" className="hover:text-primary">HOJA EDUC</Link></li>
                <li><Link href="/what-we-do/parenting-in-crisis" className="hover:text-primary">Parenting in Crisis</Link></li>
                <li><Link href="/what-we-do/humanitarian-consultancy" className="hover:text-primary">Humanitarian Consultancy</Link></li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-base mb-2"><LanguageText fr="Soutenir les entrepreneures" en="Support Women Entrepreneurs" /></h3>
              <p className="text-xs text-foreground/85 mb-4 leading-relaxed">
                <LanguageText fr="Devenez partenaire pour financer des ateliers d’éducation financière et des kits destinés aux microentreprises." en="Partner with us to fund financial literacy workshops and micro-business toolkits." />
              </p>
              <Link
                href="/get-involved/partner-with-us"
                className="inline-block py-2.5 px-4 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                <LanguageText fr="Collaborer →" en="Collaborate →" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
