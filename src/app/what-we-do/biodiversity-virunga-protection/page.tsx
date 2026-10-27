import Link from "next/link";
import type { Metadata } from "next";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Biodiversity Conservation & Virunga Landscape Protection | Strategic Pillar 2 | HOJA Network",
  description: "Community-led conservation, buffer zone ecological restoration, and nature-positive livelihoods around the Virunga landscape in Eastern DRC.",
};

export default function BiodiversityVirungaProtectionPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span><LanguageText fr="Pilier stratégique 2" en="Strategic Pillar 2" /></span>
            <span>•</span>
            <span><LanguageText fr="Orientation stratégique" en="Strategic Direction" /></span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Conservation de la biodiversité et protection du paysage des Virunga" en="Biodiversity Conservation &amp; Virunga Landscape Protection" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            <LanguageText fr="Mobiliser les communautés riveraines, les jeunes et les entreprises locales pour protéger une biodiversité exceptionnelle et développer des moyens de subsistance favorables à la nature dans le paysage des Virunga." en="Mobilizing bordering communities, youth, and local enterprises to protect exceptional biodiversity and build nature-positive livelihoods across the Virunga landscape." />
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
                <LanguageText fr="Agir avec les communautés pour un patrimoine naturel inestimable" en="Community Action for an Invaluable Natural Heritage" />
              </h2>
              <p className="text-base leading-relaxed mb-4">
                <LanguageText fr="Le paysage des Virunga compte parmi les écosystèmes les plus riches en biodiversité et les plus importants sur le plan écologique d’Afrique. Il abrite des espèces emblématiques, dont le gorille de montagne, des habitats volcaniques uniques et des bassins versants essentiels qui alimentent le lac Kivu. Toutefois, la pression démographique, la précarité énergétique, les conflits armés et l’insécurité économique exercent une forte pression sur les limites du parc et les terres communautaires voisines." en="The Virunga landscape is one of Africa&apos;s most biodiverse and ecologically significant ecosystems, home to iconic species including the mountain gorilla, unique volcanic habitats, and critical freshwater catchments feeding into Lake Kivu. However, demographic pressure, energy poverty, armed conflicts, and economic precarity place immense stress on park boundaries and surrounding communal lands." />
              </p>
              <p className="text-base leading-relaxed">
                <LanguageText fr="HOJA Network aborde la conservation sous l’angle de l’action communautaire : la protection durable de la faune et des écosystèmes n’est possible que si les populations vivant dans les zones tampons disposent d’alternatives économiques viables et deviennent des actrices de la gestion de leur environnement." en="HOJA Network approaches conservation through the prism of community agency: lasting protection of wildlife and ecosystems is only achievable when local populations residing in buffer zones have viable economic alternatives and become active stewards of their living environment." />
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                <LanguageText fr="Axes stratégiques prioritaires" en="Core Strategic Focus Areas" />
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="1. Moyens de subsistance favorables à la nature dans les zones tampons" en="1. Nature-Positive Buffer Zone Livelihoods" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Accompagner les petits exploitants et les coopératives communautaires proches des aires protégées dans le développement d’activités économiques durables — comme l’apiculture, la production durable de fruits et légumes et l’artisanat écologique — qui génèrent des revenus sans dégrader les habitats naturels." en="Supporting smallholders and community cooperatives adjacent to protected areas in developing sustainable economic alternatives—such as beekeeping, sustainable fruit and vegetable production, and eco-artisanship—that generate income without degrading natural habitats." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : orientation stratégique intégrée aux filières d’insertion de l’entrepreneuriat des jeunes et des femmes." en="Status: strategic direction integrated with youth and women’s entrepreneurship pathways." />
                </div>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="2. Restauration écologique communautaire et plantation d’arbres" en="2. Community-Led Ecological Restoration &amp; Tree Planting" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Mobiliser les groupes de jeunes, les écoles et les bénévoles locaux pour créer des pépinières communautaires, restaurer les versants dégradés et planter des haies d’arbres indigènes afin de réduire l’érosion et les glissements de terrain dans les hautes terres volcaniques." en="Engaging youth groups, schools, and local volunteers in establishing community tree nurseries, restoring degraded hillsides, and planting indigenous tree belts to reduce erosion and landslips in the volcanic highlands." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : activités citoyennes et partenariales en cours de structuration." en="Status: community and partnership activities are being structured." />
                </div>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="3. Éducation environnementale des jeunes et protection de la nature" en="3. Youth Environmental Education &amp; Nature Stewardship" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Intégrer la découverte de la biodiversité, des modules d’écocitoyenneté et l’exploration de la nature à notre initiative éducative pour les enfants (HOJA EDUC), afin de transmettre les valeurs de conservation à la prochaine génération de jeunes Congolais et Rwandais." en="Integrating biodiversity appreciation, eco-citizenship modules, and nature exploration into our child education initiative (HOJA EDUC), instilling conservation values in the next generation of Congolese and Rwandan youth." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : intégré aux ateliers pédagogiques communautaires de HOJA EDUC." en="Status: integrated into HOJA EDUC community learning workshops." />
                </div>
              </div>
            </div>

            {/* Crucial Guardrail & Clarification */}
            <div className="p-6 bg-surface-3 border-2 border-primary/40 rounded-sm">
              <h4 className="font-bold text-accent text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                <span className="text-primary font-bold">ℹ</span>
                <span><LanguageText fr="Clarification institutionnelle essentielle" en="Essential Institutional Clarification" /></span>
              </h4>
              <p className="text-xs text-foreground/85 leading-relaxed">
                <LanguageText fr="HOJA Network agit en tant qu’organisation de la société civile mobilisant les communautés riveraines pour la protection du paysage des Virunga. HOJA Network n’est pas le gestionnaire du Parc national des Virunga et ne représente en aucun cas les autorités de gestion du parc (ICCN / Institut Congolais pour la Conservation de la Nature). Nos actions s’exercent exclusivement en périphérie et dans les zones communautaires, en complémentarité avec les dynamiques locales de développement durable." en="HOJA Network acts as a civil society organization mobilizing neighboring communities to protect the Virunga landscape. HOJA Network is not the manager of Virunga National Park and does not represent the park management authorities (ICCN / Congolese Institute for Nature Conservation). Our work takes place exclusively around the park and in community areas, complementing local sustainable development efforts." />
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3"><LanguageText fr="Les 4 piliers stratégiques" en="The 4 Strategic Pillars" /></h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/what-we-do/renewable-energy-clean-cooking" className="hover:text-primary transition-colors">
                    <LanguageText fr="1. Énergies renouvelables et cuisson propre" en="1. Renewable Energy &amp; Clean Cooking" />
                  </Link>
                </li>
                <li className="font-bold text-primary flex items-center gap-2">
                  <span>→</span>
                  <span><LanguageText fr="2. Biodiversité et paysage des Virunga" en="2. Biodiversity &amp; Virunga Landscape" /></span>
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
                <LanguageText fr="Ce pilier complète nos activités d’éducation communautaire et de résilience face aux crises :" en="This pillar synergizes with our community education and crisis resilience work:" />
              </p>
              <div className="space-y-2 text-xs">
                <Link href="/what-we-do/hoja-educ" className="block text-primary font-bold hover:underline">
                  • <LanguageText fr="HOJA EDUC (éducation écologique pour les enfants)" en="HOJA EDUC (Eco-Education for Children)" />
                </Link>
                <Link href="/what-we-do/parenting-in-crisis" className="block text-primary font-bold hover:underline">
                  • <LanguageText fr="Parenting in Crisis (cohésion communautaire)" en="Parenting in Crisis (Community Cohesion)" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
