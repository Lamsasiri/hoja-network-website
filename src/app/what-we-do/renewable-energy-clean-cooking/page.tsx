import Link from "next/link";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/renewable-energy-clean-cooking",
  title: "Renewable Energy & Clean Cooking | Strategic Pillar 1 | HOJA Network",
  description: "Advancing community access to cleaner household cooking solutions, solar energy micro-services, and local green energy entrepreneurship in the Great Lakes region.",
});



export default function RenewableEnergyCleanCookingPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span><LanguageText fr="Pilier stratégique 1" en="Strategic Pillar 1" /></span>
            <span>•</span>
            <span><LanguageText fr="Orientation stratégique" en="Strategic Direction" /></span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Énergies renouvelables et solutions de cuisson propre" en="Renewable Energy &amp; Clean Cooking Solutions" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            <LanguageText fr="Réduire la dépendance des ménages au charbon de bois récolté de manière non durable en soutenant des solutions de cuisson plus propres, les énergies renouvelables décentralisées et l’entrepreneuriat local dans les services énergétiques." en="Reducing household dependency on unsustainably harvested charcoal by supporting cleaner cooking alternatives, decentralized renewable energy, and local energy service entrepreneurship." />
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10 text-foreground/90">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                <LanguageText fr="Le défi majeur de l’énergie et des forêts" en="The Critical Energy &amp; Forest Challenge" />
              </h2>
              <p className="text-base leading-relaxed mb-4">
                <LanguageText fr="Dans l’est de la République démocratique du Congo et les zones frontalières de l’ouest du Rwanda, plus de 90 % des ménages urbains et périurbains dépendent du bois-énergie et du charbon traditionnel (makala) pour cuisiner au quotidien. Cette forte dépendance accélère la dégradation des forêts autour du paysage des Virunga et des marges du bassin du Congo, tout en exposant les femmes et les jeunes enfants à une pollution intérieure nocive." en="Across Eastern Democratic Republic of the Congo and the borderlands of Western Rwanda, over 90% of urban and peri-urban households rely on wood fuel and traditional charcoal (makala) for daily cooking. This massive reliance drives severe forest degradation around the Virunga landscape and the Congo Basin margins, while exposing women and young children to hazardous indoor air pollution." />
              </p>
              <p className="text-base leading-relaxed">
                <LanguageText fr="HOJA Network considère l’énergie propre pour les ménages non comme un luxe lointain, mais comme un besoin communautaire urgent, directement lié à la santé des familles, à la dignité économique des femmes et à la conservation des paysages." en="HOJA Network positions clean household energy not as a distant luxury, but as an urgent community necessity linked directly to family health, women&apos;s economic dignity, and landscape conservation." />
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                <LanguageText fr="Axes stratégiques prioritaires" en="Core Strategic Focus Areas" />
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="1. Accès à la cuisson propre et adoption" en="1. Clean Cooking Access &amp; Adoption" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Promouvoir des foyers à biomasse très efficaces, éprouvés sur le marché, et soutenir une transition progressive vers des combustibles alternatifs durables (comme des granulés issus de sources durables et des résidus agricoles), adaptés aux budgets des ménages périurbains." en="Promoting market-tested, highly efficient biomass cookstoves and supporting the gradual transition toward alternative, sustainable fuels (such as sustainably sourced pellets and agricultural residues) suited to peri-urban household budgets." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : orientation stratégique en développement avec des fabricants locaux et distributeurs communautaires." en="Status: strategic direction under development with local manufacturers and community distributors." />
                </div>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="2. Entrepreneuriat énergétique local pour les jeunes et les femmes" en="2. Local Energy Entrepreneurship for Youth &amp; Women" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Former les jeunes et les commerçantes à la distribution, à la réparation et à l’assemblage de foyers de cuisson propre et de systèmes solaires domestiques décentralisés, afin d’intégrer l’accès à l’énergie dans des microentreprises viables." en="Training youth and women merchants in the distribution, repair, and assembly of clean cookstoves and decentralized solar home systems, embedding energy access into viable micro-enterprises." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : déploiement articulé sur le programme d'insertion professionnelle des jeunes et de micro-entrepreneuriat des femmes." en="Status: rollout linked to the youth employment and women’s microenterprise programs." />
                </div>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="3. Sensibilisation communautaire et santé de l’air intérieur" en="3. Community Sensitization &amp; Indoor Air Health" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Organiser des ateliers de sensibilisation dans les centres de quartier et les marchés sur les risques sanitaires du monoxyde de carbone et de l’inhalation de fumée, ainsi que sur les économies domestiques rendues possibles par les technologies de cuisson économes en combustible." en="Facilitating grassroots awareness workshops in neighborhood centers and market spaces on the health risks of carbon monoxide, smoke inhalation, and the household savings realized through fuel-efficient cooking technologies." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : intégré aux dialogues communautaires et aux cercles familiaux dans le Nord-Kivu." en="Status: integrated into community dialogues and family circles in North Kivu." />
                </div>
              </div>
            </div>

            {/* Guardrail Note */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm">
              <h4 className="font-bold text-accent text-sm mb-2 uppercase tracking-wider">
                <LanguageText fr="Note institutionnelle de transparence" en="Institutional Transparency Note" />
              </h4>
              <p className="text-xs text-foreground/80 leading-relaxed">
                <LanguageText fr="Ce pilier représente une orientation stratégique prioritaire de HOJA Network. Les activités de distribution et de fabrication sont menées en partenariat avec des acteurs techniques spécialisés et des coopératives locales. Aucun objectif chiffré n&apos;est présenté comme un résultat atteint sans audit d&apos;impact indépendant préalable." en="This pillar is a strategic priority for HOJA Network. Distribution and manufacturing activities are carried out with specialized technical actors and local cooperatives. No numerical target is presented as an achieved result without a prior independent impact audit." />
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3"><LanguageText fr="Les 4 piliers stratégiques" en="The 4 Strategic Pillars" /></h3>
              <ul className="space-y-3 text-sm">
                <li className="font-bold text-primary flex items-center gap-2">
                  <span>→</span>
                  <span><LanguageText fr="1. Énergies renouvelables et cuisson propre" en="1. Renewable Energy &amp; Clean Cooking" /></span>
                </li>
                <li>
                  <Link href="/what-we-do/biodiversity-virunga-protection" className="hover:text-primary transition-colors">
                    <LanguageText fr="2. Biodiversité et paysage des Virunga" en="2. Biodiversity &amp; Virunga Landscape" />
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/congo-basin-forest-climate" className="hover:text-primary transition-colors">
                    <LanguageText fr="3. Forêts du bassin du Congo et action climatique" en="3. Congo Basin Forest &amp; Climate Action" />
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/green-entrepreneurship-circular-economy" className="hover:text-primary transition-colors">
                    <LanguageText fr="4. Entrepreneuriat vert et économie circulaire" en="4. Green Entrepreneurship &amp; Circular Economy" />
                  </Link>
                </li>
              </ul>
              <div className="pt-4 mt-4 border-t border-background/20 text-xs">
                <Link href="/what-we-do/responsible-digital-ai" className="hover:text-primary text-background/80 block mb-1">
                  <LanguageText fr="Transversal : numérique et IA responsables →" en="Transversal: Responsible Digital &amp; AI →" />
                </Link>
                <Link href="/what-we-do/green-great-lakes-initiative" className="hover:text-primary text-background/80 block">
                  <LanguageText fr="Proposition : initiative Hoja Green Great Lakes →" en="Proposed: Hoja Green Great Lakes Initiative →" />
                </Link>
              </div>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h4 className="font-bold text-accent text-sm mb-2"><LanguageText fr="Programmes communautaires associés" en="Connected Grassroots Programs" /></h4>
              <p className="text-xs text-foreground/80 mb-4 leading-relaxed">
                <LanguageText fr="L’entrepreneuriat dans l’énergie propre s’appuie directement sur les initiatives d’autonomisation économique de HOJA déjà documentées :" en="Clean energy entrepreneurship builds directly on HOJA&apos;s verified economic empowerment initiatives:" />
              </p>
              <div className="space-y-2 text-xs">
                <Link href="/what-we-do/youth-empowerment" className="block text-primary font-bold hover:underline">
                  • Youth Vocational Training
                </Link>
                <Link href="/what-we-do/women-empowerment" className="block text-primary font-bold hover:underline">
                  • Women&apos;s Economic Autonomy
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
