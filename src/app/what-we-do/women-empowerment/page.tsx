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
            <LanguageText fr="Programme historique vérifié" en="Documented Core Program" />
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
                <LanguageText fr="Dans l’est de la RDC et la région des Grands Lacs, les femmes sont au cœur du commerce local et de la subsistance des ménages. Pourtant, les entrepreneures se heurtent souvent à des obstacles à la formalisation de leurs activités, à un manque d’éducation financière et à une vulnérabilité aux chocs économiques." en="Women form the backbone of local commerce and household sustenance throughout Eastern DRC and the Great Lakes. However, women entrepreneurs frequently face barriers to business formalization, lack of financial education, and vulnerability to economic shocks." />
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
                <h4 className="text-lg font-bold text-primary mb-2"><LanguageText fr="1. Éducation financière et budgétisation" en="1. Financial Education & Budgeting" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Une formation pratique à la gestion du fonds de roulement quotidien, au calcul des marges bénéficiaires, à la séparation des dépenses personnelles et professionnelles et au renforcement de la stabilité financière." en="Practical training on managing daily working capital, calculating profit margins, separating personal and business expenses, and building financial stability." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2"><LanguageText fr="2. Organisation coopérative et entraide" en="2. Cooperative Organizing & Mutual Support" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Encourager les femmes à former des associations commerciales et des collectifs solidaires qui facilitent les achats groupés, négocient de meilleures conditions auprès des fournisseurs et partagent des informations sur les marchés." en="Encouraging women to form supportive trade associations and collectives that facilitate bulk purchasing, negotiate better supplier terms, and share market intelligence." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2"><LanguageText fr="3. Gestion et développement de l’entreprise" en="3. Business Administration & Growth" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Un accompagnement sur les relations avec la clientèle, la diversification des produits, le suivi simple des stocks et le développement durable des microentreprises." en="Coaching on customer relations, product diversification, simple inventory tracking, and sustainable micro-enterprise growth." />
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                <LanguageText fr="« Lorsqu’une femme acquiert des connaissances financières et gère son entreprise de manière autonome, toute la famille en bénéficie : les enfants restent à l’école, l’alimentation s’améliore et la résilience du ménage augmente. »" en="“When a woman acquires financial literacy and manages her business independently, the entire family benefits: children stay in school, nutrition improves, and household resilience increases.”" />
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                — Clementine Botanyi, <LanguageText fr="finance et trésorerie" en="Finance & Treasury" />
              </span>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-3"><LanguageText fr="Nos programmes" en="Our Programs" /></h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/what-we-do/youth-empowerment" className="hover:text-primary"><LanguageText fr="Autonomisation économique des jeunes" en="Youth Economic Empowerment" /></Link></li>
                <li className="font-bold text-primary">• <LanguageText fr="Autonomisation économique des femmes" en="Women's Economic Empowerment" /></li>
                <li><Link href="/what-we-do/hoja-educ" className="hover:text-primary">HOJA EDUC</Link></li>
                <li><Link href="/what-we-do/parenting-in-crisis" className="hover:text-primary"><LanguageText fr="Accompagnement parental en situation de crise" en="Parenting in Crisis" /></Link></li>
                <li><Link href="/what-we-do/humanitarian-consultancy" className="hover:text-primary"><LanguageText fr="Conseil humanitaire" en="Humanitarian Consultancy" /></Link></li>
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
