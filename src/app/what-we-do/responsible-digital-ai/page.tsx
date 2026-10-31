import Link from "next/link";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/responsible-digital-ai",
  title: "Responsible Digital & AI Innovation | Transversal Enabler | HOJA Network",
  description: "Leveraging responsible digital tools and artificial intelligence as practical enablers for environmental monitoring, green enterprise efficiency, and community-led climate action in Africa.",
});



export default function ResponsibleDigitalAIPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span><LanguageText fr="Technologie transversale" en="Transversal Technology" /></span>
            <span>•</span>
            <span><LanguageText fr="Technologie transversale au service de l’impact" en="Cross-Cutting Technology for Impact" /></span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Innovation numérique et IA responsables" en="Responsible Digital &amp; AI Innovation" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            <LanguageText fr="Mettre les outils numériques et l’intelligence artificielle au service de la conservation de la nature, de rapports transparents et de l’efficacité des entreprises vertes locales, sans en faire une fin en soi." en="Harnessing digital tools and artificial intelligence not as an end in themselves, but as grounded enablers for nature conservation, transparent reporting, and local green enterprise efficiency." />
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
                <LanguageText fr="La technologie au service des personnes, de la nature et des communautés" en="Technology in Service of People, Nature &amp; Communities" />
              </h2>
              <p className="text-base leading-relaxed mb-4">
                <LanguageText fr="Chez HOJA Network, l’innovation numérique et l’intelligence artificielle ne sont jamais considérées comme des gadgets autonomes ni comme des programmes académiques isolés. Dans les régions où les infrastructures sont limitées, l’électricité intermittente et les données coûteuses, la technologie doit démontrer son utilité concrète au quotidien." en="At HOJA Network, digital innovation and artificial intelligence are never treated as self-contained gimmicks or standalone academic programs. In regions characterized by infrastructure constraints, intermittent power, and high data costs, technology must prove its value through pragmatic, everyday utility." />
              </p>
              <p className="text-base leading-relaxed">
                <LanguageText fr="Nous considérons les technologies numériques responsables comme des leviers transversaux qui renforcent les capacités humaines : elles peuvent organiser des données environnementales complexes, améliorer la transparence des projets de terrain, fournir des outils de gestion simples aux entrepreneurs verts et faciliter l’accès aux connaissances agronomiques et climatiques essentielles." en="We view responsible digital technologies as transversal catalysts that augment human capability: organizing complex environmental data, improving transparency in field projects, giving green entrepreneurs simple management tools, and facilitating access to essential agronomic and climate knowledge." />
              </p>
            </div>

            {/* Transversal Application Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                <LanguageText fr="Six applications pratiques" en="Six Practical Application Pathways" />
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="1. Analyse et organisation des données environnementales" en="1. Environmental Data Analysis &amp; Organization" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Structurer les observations de terrain, les données d’enquêtes communautaires et les données géospatiales dans des formats clairs et vérifiables, afin d’aider les décideurs locaux et les partenaires de conservation à repérer les zones de pression écologique." en="Structuring field observations, community survey metrics, and geospatial datasets into clear, auditable formats to assist local decision-makers and conservation partners in identifying ecological pressure points." />
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="2. Suivi numérique de la restauration écologique" en="2. Digital Monitoring of Ecological Restoration" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Utiliser des images satellites ouvertes et un suivi photographique géolocalisé pour vérifier la survie des arbres et la revégétalisation des versants, à partir de données de référence fiables recueillies par les équipes locales." en="Utilizing open-source satellite imagery and geolocated photo-monitoring to verify tree survival rates and hillside revegetation, where reliable baseline ground data is collected by local teams." />
                </p>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="3. Efficacité opérationnelle des entreprises vertes" en="3. Operational Resource Efficiency for Green Enterprises" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Accompagner les jeunes éco-entrepreneurs grâce à des outils numériques légers, conçus pour fonctionner hors ligne, afin de suivre les stocks, tenir une comptabilité de base et planifier les itinéraires de collecte locale des déchets et de distribution de combustibles propres." en="Assisting young eco-entrepreneurs with lightweight, offline-first digital tools for inventory tracking, basic financial accounting, and route planning for local waste collection and clean fuel distribution." />
                </p>
              </div>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-color-012">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="4. Accès aux informations sur les marchés, le climat et l’agronomie" en="4. Access to Market, Climate &amp; Agronomic Information" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Faciliter la transmission de prévisions météorologiques utiles, des prix locaux des produits et de conseils agroécologiques aux petits exploitants et aux commerçantes par des canaux mobiles accessibles." en="Facilitating the transmission of actionable weather forecasts, local commodity pricing, and agroecological tips directly to smallholder farmers and market women through accessible mobile channels." />
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="5. Appui aux rapports d’impact et à la consolidation des données de terrain" en="5. Assistance with Impact Reporting &amp; Field Data Consolidation" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Utiliser l’analyse de texte et des outils de mise en forme automatisée pour aider les coordinateurs locaux à synthétiser les rapports de suivi de plusieurs villages et libérer du temps administratif pour les échanges directs sur le terrain." en="Employing text analysis and automated formatting tools to assist grassroots coordinators in synthesizing multi-village monitoring reports, saving administrative hours for direct field interaction." />
                </p>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="6. Aide à la décision avec validation humaine systématique" en="6. Decision Support with Systematic Human Validation" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Utiliser des outils prédictifs pour modéliser les risques climatiques potentiels, tout en veillant à ce que les décisions stratégiques, environnementales et communautaires soient systématiquement validées par des experts locaux expérimentés." en="Using predictive tools to model potential climate risks, while ensuring that all strategic, environmental, and community decisions remain strictly under human validation by experienced local experts." />
                </p>
              </div>
            </div>

            {/* Core Ethical Principles */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm space-y-4">
              <h3 className="[font-family:questa,_serif] text-lg font-bold text-accent uppercase tracking-wider">
                <LanguageText fr="Nos 6 principes fondamentaux pour une technologie responsable" en="Our 6 Invariant Principles of Responsible Tech" />
              </h3>
              <ul className="space-y-3 text-xs text-foreground/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary"><LanguageText fr="1. Priorité aux réalités du terrain :" en="1. Priority for field realities:" /></span>
                  <span><LanguageText fr="La technologie doit répondre à un besoin communautaire concret, jamais à une injonction technophile abstraite." en="Technology must address a tangible community need, never an abstract demand for technology." /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary"><LanguageText fr="2. Supervision humaine systématique (human-in-the-loop) :" en="2. Systematic human oversight (human-in-the-loop):" /></span>
                  <span><LanguageText fr="Aucune décision concernant les personnes, l’allocation des ressources ou les projets environnementaux n’est confiée à un algorithme autonome." en="No decision affecting people, resource allocation, or environmental projects is delegated to an autonomous algorithm." /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary"><LanguageText fr="3. Protection des données et respect des populations :" en="3. Data protection and respect for communities:" /></span>
                  <span><LanguageText fr="Sécuriser strictement les informations recueillies auprès des familles et respecter pleinement la vie privée des communautés vulnérables." en="Strictly secure information collected from families and fully respect the privacy of vulnerable communities." /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary"><LanguageText fr="4. Transparence sur les limites :" en="4. Transparency about limitations:" /></span>
                  <span><LanguageText fr="Reconnaître explicitement les marges d’erreur, les biais potentiels des modèles et la qualité des données d’entrée." en="Explicitly acknowledge margins of error, potential model bias, and the quality of input data." /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary"><LanguageText fr="5. Sobriété et compatibilité avec les infrastructures locales :" en="5. Efficiency and compatibility with local infrastructure:" /></span>
                  <span><LanguageText fr="Privilégier des solutions légères, économes en bande passante et en énergie, et capables de fonctionner hors ligne." en="Prioritize lightweight solutions that use little bandwidth and energy and can work offline." /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary"><LanguageText fr="6. Aucune promesse technologique non démontrée :" en="6. No unproven technology claims:" /></span>
                  <span><LanguageText fr="Ne pas annoncer de diagnostics automatisés ni de capacités d’IA sans validation méthodologique et technique préalable." en="Do not claim automated diagnosis or AI capabilities without prior methodological and technical validation." /></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3"><LanguageText fr="Un levier pour les 4 piliers" en="Enabler for the 4 Pillars" /></h3>
              <p className="text-xs text-background/80 mb-4 leading-relaxed">
                <LanguageText fr="L’innovation numérique responsable contribue aux quatre piliers stratégiques de HOJA Network :" en="Responsible digital innovation cuts across all four strategic pillars of HOJA Network:" />
              </p>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/what-we-do/renewable-energy-clean-cooking" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span><LanguageText fr="Logistique de distribution de l’énergie propre" en="Clean Energy Distribution Logistics" /></span>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/biodiversity-virunga-protection" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span><LanguageText fr="Suivi des habitats des Virunga" en="Virunga Habitat Monitoring" /></span>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/congo-basin-forest-climate" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span><LanguageText fr="Suivi du couvert forestier" en="Forest Cover Tracking" /></span>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/green-entrepreneurship-circular-economy" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span><LanguageText fr="Gestion de l’économie circulaire" en="Circular Economy Management" /></span>
                  </Link>
                </li>
              </ul>
              <div className="pt-4 mt-4 border-t border-background/20 text-xs">
                <Link href="/what-we-do/green-great-lakes-initiative" className="hover:text-primary text-background/80 block">
                  <LanguageText fr="Proposition : initiative Hoja Green Great Lakes →" en="Proposed: Hoja Green Great Lakes Initiative →" />
                </Link>
              </div>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h4 className="font-bold text-accent text-sm mb-2"><LanguageText fr="Clarification institutionnelle" en="Institutional Clarification" /></h4>
              <p className="text-xs text-foreground/80 leading-relaxed">
                <LanguageText fr="HOJA Network ne gère aucune académie d’intelligence artificielle ni laboratoire technologique abstrait. L’IA est exclusivement appréhendée comme un ensemble d’outils méthodologiques d’appui aux programmes de terrain." en="HOJA Network does not operate an artificial intelligence academy or an abstract technology laboratory. AI is considered exclusively as a set of methodological tools supporting field programs." />
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
