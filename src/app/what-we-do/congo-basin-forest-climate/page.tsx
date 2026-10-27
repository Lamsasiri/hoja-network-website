import Link from "next/link";
import type { Metadata } from "next";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Congo Basin Forest Protection & Climate Action | Strategic Pillar 3 | HOJA Network",
  description: "Protecting community forests, advancing agroforestry, building climate resilience, and championing equitable, rights-based environmental stewardship in Eastern DRC.",
};

export default function CongoBasinForestClimatePage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span><LanguageText fr="Pilier stratégique 3" en="Strategic Pillar 3" /></span>
            <span>•</span>
            <span><LanguageText fr="Orientation stratégique" en="Strategic Direction" /></span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Protection des forêts du bassin du Congo et action climatique" en="Congo Basin Forest Protection &amp; Climate Action" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            <LanguageText fr="Préserver les importants puits de carbone des forêts tropicales, développer l’agroforesterie communautaire et renforcer l’adaptation locale au climat par une gestion transparente fondée sur les droits." en="Preserving crucial rainforest carbon sinks, advancing community-based agroforestry, and strengthening local climate adaptation through transparent, rights-based stewardship." />
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
                <LanguageText fr="Le bassin du Congo : un poumon écologique essentiel de la planète" en="The Congo Basin: The Earth&apos;s Vital Ecological Lung" />
              </h2>
              <p className="text-base leading-relaxed mb-4">
                <LanguageText fr="Le bassin du Congo abrite la deuxième plus grande forêt tropicale du monde et constitue l’un des puits de carbone les plus importants de la planète. Il contribue à réguler les précipitations régionales et la stabilité du climat mondial. Dans l’est de la RDC, les lisières forestières subissent de fortes pressions dues à l’agriculture sur brûlis et itinérante, à l’exploitation non maîtrisée du bois et au manque d’autres possibilités économiques pour les populations rurales vulnérables." en="The Congo Basin contains the second largest tropical rainforest on Earth and represents one of the planet&apos;s most critical carbon sinks, regulating regional precipitation and global climate stability. In Eastern DRC, forest edges are under severe strain from slash-and-burn farming, shifting agriculture, unmanaged timber harvesting, and the lack of alternative economic opportunities for vulnerable rural populations." />
              </p>
              <p className="text-base leading-relaxed">
                <LanguageText fr="HOJA Network estime que l’action climatique et la protection des forêts ne peuvent réussir sans tenir compte des droits fonciers des communautés et des moyens de subsistance ruraux. Notre orientation stratégique porte sur l’agroforesterie communautaire, la gestion durable des sols et le renforcement du rôle des gardiens locaux des terres." en="HOJA Network believes climate action and forest protection cannot succeed in isolation from community land rights and rural livelihoods. Our strategic orientation focuses on community agroforestry, sustainable soil management, and empowering grassroots land custodians." />
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                <LanguageText fr="Axes stratégiques prioritaires" en="Core Strategic Focus Areas" />
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="1. Agroforesterie communautaire et utilisation durable des terres" en="1. Community Agroforestry &amp; Sustainable Land Use" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Encourager les petits exploitants à intégrer dans leurs champs des arbres indigènes fixateurs d’azote, fruitiers et polyvalents afin d’améliorer la fertilité des sols, de diversifier les sources alimentaires et de limiter l’avancée de l’agriculture sur les forêts primaires." en="Encouraging smallholder farmers to integrate nitrogen-fixing, fruit, and multi-purpose indigenous trees into crop fields, enhancing soil fertility, diversifying nutritional food sources, and curbing agricultural encroachment into primary forests." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : orientation stratégique en phase de structuration pilote avec des coopératives agricoles locales." en="Status: strategic direction in a pilot structuring phase with local agricultural cooperatives." />
                </div>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="2. Résilience climatique et gestion des bassins versants" en="2. Climate Resilience &amp; Watershed Management" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Renforcer les capacités d’adaptation des communautés face aux phénomènes météorologiques extrêmes, aux pluies saisonnières imprévisibles et à la dégradation des terres sur les pentes volcaniques escarpées et dans les bassins versants fragiles qui se dirigent vers le lac Kivu." en="Strengthening community adaptation capacities against extreme weather events, unpredictable seasonal rains, and land degradation along steep volcanic hillsides and fragile river basins flowing toward Lake Kivu." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : orientation stratégique en développement." en="Status: strategic direction under development." />
                </div>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="3. Gouvernance environnementale locale et gestion des terres" en="3. Local Environmental Governance &amp; Land Stewardship" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  <LanguageText fr="Faciliter les dialogues entre les autorités coutumières, les agricultrices et les jeunes afin d’établir des accords participatifs de gestion des terres qui protègent les bosquets naturels et les sources d’eau communautaires." en="Facilitating community dialogues between customary authorities, women farmers, and youth to establish participatory land management agreements that safeguard natural woodlots and communal water springs." />
                </p>
                <div className="text-xs text-muted-foreground italic">
                  <LanguageText fr="Statut : en synergie avec les cercles de dialogue communautaires de HOJA." en="Status: coordinated with HOJA community dialogue circles." />
                </div>
              </div>
            </div>

            {/* Rigorous Position on Carbon Finance */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm">
              <h4 className="font-bold text-accent text-sm mb-2 uppercase tracking-wider">
                <LanguageText fr="Position éthique et prudente sur les mécanismes carbone" en="Ethical and Cautious Position on Carbon Mechanisms" />
              </h4>
              <p className="text-xs text-foreground/85 leading-relaxed mb-2">
                <LanguageText fr="HOJA Network adopte une position délibérément prudente, rigoureuse et conditionnelle vis-à-vis des marchés et crédits carbone." en="HOJA Network takes a deliberately cautious, rigorous, and conditional position on carbon markets and credits." />
              </p>
              <p className="text-xs text-foreground/85 leading-relaxed">
                <LanguageText fr="Toute future exploration d’instruments de finance climatique ou de compensation carbone devra impérativement satisfaire aux conditions suivantes : (1) reconnaissance préalable et inaliénable des droits fonciers et coutumiers des communautés locales, (2) consentement libre, préalable et éclairé (CLIP), (3) méthodologies de mesure et de vérification scientifiques indépendantes, et (4) partage équitable, transparent et auditable des bénéfices en faveur directe des populations riveraines. HOJA Network ne commercialise actuellement aucun crédit carbone." en="Any future exploration of climate finance or carbon offset instruments must meet the following conditions: (1) prior and inalienable recognition of local communities’ land and customary rights, (2) free, prior, and informed consent (FPIC), (3) independent scientific measurement and verification methods, and (4) fair, transparent, and auditable sharing of benefits directly with neighboring populations. HOJA Network currently does not sell any carbon credits." />
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
                <li>
                  <Link href="/what-we-do/biodiversity-virunga-protection" className="hover:text-primary transition-colors">
                    <LanguageText fr="2. Biodiversité et paysage des Virunga" en="2. Biodiversity &amp; Virunga Landscape" />
                  </Link>
                </li>
                <li className="font-bold text-primary flex items-center gap-2">
                  <span>→</span>
                  <span><LanguageText fr="3. Forêts du bassin du Congo et action climatique" en="3. Congo Basin Forest &amp; Climate Action" /></span>
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
                <LanguageText fr="La résilience rurale s’appuie directement sur nos programmes économiques communautaires et familiaux :" en="Rural resilience builds directly on our community economic and family programs:" />
              </p>
              <div className="space-y-2 text-xs">
                <Link href="/what-we-do/youth-empowerment" className="block text-primary font-bold hover:underline">
                  • <LanguageText fr="Compétences professionnelles agricoles pour les jeunes" en="Youth Vocational Skills in Agriculture" />
                </Link>
                <Link href="/what-we-do/humanitarian-consultancy" className="block text-primary font-bold hover:underline">
                  • <LanguageText fr="Conseil humanitaire et études de terrain" en="Humanitarian Advisory &amp; Field Studies" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
