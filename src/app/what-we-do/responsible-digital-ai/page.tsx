import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Digital & AI Innovation | Transversal Enabler | HOJA Network",
  description: "Leveraging responsible digital tools and artificial intelligence as practical enablers for environmental monitoring, green enterprise efficiency, and community-led climate action in Africa.",
};

export default function ResponsibleDigitalAIPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span>Transversal Technology</span>
            <span>•</span>
            <span>Technologie Transversale au Service de l&apos;Impact</span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Responsible Digital &amp; AI Innovation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            Harnessing digital tools and artificial intelligence not as an end in themselves, but as grounded enablers for nature conservation, transparent reporting, and local green enterprise efficiency.
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
                Technology in Service of People, Nature &amp; Communities
              </h2>
              <p className="text-base leading-relaxed mb-4">
                At HOJA Network, digital innovation and artificial intelligence are never treated as self-contained gimmicks or standalone academic programs. In regions characterized by infrastructure constraints, intermittent power, and high data costs, technology must prove its value through pragmatic, everyday utility.
              </p>
              <p className="text-base leading-relaxed">
                We view responsible digital technologies as transversal catalysts that augment human capability: organizing complex environmental data, improving transparency in field projects, giving green entrepreneurs simple management tools, and facilitating access to essential agronomic and climate knowledge.
              </p>
            </div>

            {/* Transversal Application Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                Six Practical Application Pathways
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2">1. Environmental Data Analysis &amp; Organization</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Structuring field observations, community survey metrics, and geospatial datasets into clear, auditable formats to assist local decision-makers and conservation partners in identifying ecological pressure points.
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2">2. Digital Monitoring of Ecological Restoration</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Utilizing open-source satellite imagery and geolocated photo-monitoring to verify tree survival rates and hillside revegetation, where reliable baseline ground data is collected by local teams.
                </p>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2">3. Operational Resource Efficiency for Green Enterprises</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Assisting young eco-entrepreneurs with lightweight, offline-first digital tools for inventory tracking, basic financial accounting, and route planning for local waste collection and clean fuel distribution.
                </p>
              </div>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-color-012">
                <h4 className="text-lg font-bold text-accent mb-2">4. Access to Market, Climate &amp; Agronomic Information</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Facilitating the transmission of actionable weather forecasts, local commodity pricing, and agroecological tips directly to smallholder farmers and market women through accessible mobile channels.
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2">5. Assistance with Impact Reporting &amp; Field Data Consolidation</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Employing text analysis and automated formatting tools to assist grassroots coordinators in synthesizing multi-village monitoring reports, saving administrative hours for direct field interaction.
                </p>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2">6. Decision Support with Systematic Human Validation</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Using predictive tools to model potential climate risks, while ensuring that all strategic, environmental, and community decisions remain strictly under human validation by experienced local experts.
                </p>
              </div>
            </div>

            {/* Core Ethical Principles */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm space-y-4">
              <h3 className="[font-family:questa,_serif] text-lg font-bold text-accent uppercase tracking-wider">
                Our 6 Invariant Principles of Responsible Tech
              </h3>
              <ul className="space-y-3 text-xs text-foreground/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">1. Prise en compte prioritaire des réalités de terrain :</span>
                  <span>La technologie doit répondre à un besoin communautaire tangible, jamais à une injonction technophile abstraite.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">2. Supervision humaine systématique (Human-in-the-loop) :</span>
                  <span>Aucune décision touchant les personnes, les allocations de ressources ou les projets environnementaux n&apos;est déléguée à un algorithme autonome.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">3. Protection des données et respect des populations :</span>
                  <span>Sécurisation stricte des informations collectées auprès des familles et respect absolu de la vie privée des communautés vulnérables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">4. Transparence sur les limites :</span>
                  <span>Reconnaissance explicite des marges d&apos;erreur, des biais potentiels des modèles et de la qualité des données d&apos;entrée.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">5. Sobriété et compatibilité avec les infrastructures locales :</span>
                  <span>Priorité aux solutions légères, frugales en bande passante, fonctionnant hors-ligne et économes en énergie.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">6. Zéro promesse technologique non démontrée :</span>
                  <span>Refus d&apos;annoncer des diagnostics automatisés ou des capacités d&apos;IA sans validation méthodologique et technique préalable.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3">Enabler for the 4 Pillars</h3>
              <p className="text-xs text-background/80 mb-4 leading-relaxed">
                Responsible digital innovation cuts across all four strategic pillars of HOJA Network:
              </p>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/what-we-do/renewable-energy-clean-cooking" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span>Clean Energy Distribution Logistics</span>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/biodiversity-virunga-protection" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span>Virunga Habitat Monitoring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/congo-basin-forest-climate" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span>Forest Cover Tracking</span>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/green-entrepreneurship-circular-economy" className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>•</span>
                    <span>Circular Economy Management</span>
                  </Link>
                </li>
              </ul>
              <div className="pt-4 mt-4 border-t border-background/20 text-xs">
                <Link href="/what-we-do/green-great-lakes-initiative" className="hover:text-primary text-background/80 block">
                  Proposed: Hoja Green Great Lakes Initiative →
                </Link>
              </div>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h4 className="font-bold text-accent text-sm mb-2">Institutional Clarification</h4>
              <p className="text-xs text-foreground/80 leading-relaxed">
                HOJA Network ne gère aucune académie d&apos;intelligence artificielle ni laboratoire technologique abstrait. L&apos;IA est exclusivement appréhendée comme un ensemble d&apos;outils méthodologiques d&apos;appui aux programmes de terrain.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
