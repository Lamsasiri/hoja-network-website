import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Entrepreneurship & Circular Economy | Strategic Pillar 4 | HOJA Network",
  description: "Promoting green jobs, waste valorization, circular business models, and eco-inclusive skills for young entrepreneurs and women in the Great Lakes region.",
};

export default function GreenEntrepreneurshipCircularEconomyPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span>Strategic Pillar 4</span>
            <span>•</span>
            <span>Orientation Stratégique</span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Green Entrepreneurship &amp; Circular Economy
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            Unlocking sustainable economic opportunities for youth and women through circular business models, waste reduction and upcycling, and regenerative local enterprises.
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
                Economic Dignity Through Environmental Innovation
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Rapid urbanization in cities like Goma and Rubavu generates acute waste management challenges: organic markets discard tonnes of agricultural residues daily, plastic pollution clogs urban drainages and threatens Lake Kivu&apos;s waters, and raw materials are rarely reprocessed locally. At the same time, thousands of motivated young people and women seek viable, dignifying employment opportunities.
              </p>
              <p className="text-base leading-relaxed">
                HOJA Network views the circular economy as a powerful engine for local job creation. By transforming discarded materials, agricultural by-products, and solid waste into valuable local products, communities reduce environmental pollution while generating sustainable household income.
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                Core Strategic Focus Areas
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2">1. Solid Waste Reduction &amp; Local Upcycling</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Incubating youth-led micro-enterprises that collect, sort, and upcycle municipal plastic and textile waste into durable consumer goods, construction materials, or reusable packaging, reducing litter in public corridors and Lake Kivu shorelines.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Orientation stratégique intégrée aux ateliers d&apos;apprentissage pratique.
                </div>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2">2. Organic Waste Valorization &amp; Eco-Composting</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Training urban farming collectives and youth groups to recover organic food waste from central markets and convert it into high-grade organic compost and soil conditioners for peri-urban vegetable gardens.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Projets pilotes d&apos;apprentissage en milieu communautaire.
                </div>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2">3. Green Enterprise Incubation for Women &amp; Youth</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Providing tailored business mentorship, eco-design training, simple bookkeeping skills, and starter kits for young entrepreneurs launching micro-businesses in renewable energy maintenance, eco-packaging, and regenerative agriculture.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Directement articulé sur nos programmes historiques d&apos;autonomisation économique des jeunes et des femmes.
                </div>
              </div>
            </div>

            {/* Grounding in Reality */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm">
              <h4 className="font-bold text-accent text-sm mb-2 uppercase tracking-wider">
                Ancrage Opérationnel &amp; Rigueur
              </h4>
              <p className="text-xs text-foreground/85 leading-relaxed">
                Les activités d&apos;entrepreneuriat vert de HOJA Network s&apos;appuient sur l&apos;expérience éprouvée de notre organisation dans la formation professionnelle et le coaching d&apos;entreprises locales. Nous n&apos;affirmons aucune capacité industrielle non vérifiée : nous formons des personnes concrètes, nous incubons des initiatives à taille humaine, et nous mesurons l&apos;impact à l&apos;aune de l&apos;autonomie économique durable des participants.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3">The 4 Strategic Pillars</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/what-we-do/renewable-energy-clean-cooking" className="hover:text-primary transition-colors">
                    1. Renewable Energy &amp; Clean Cooking
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/biodiversity-virunga-protection" className="hover:text-primary transition-colors">
                    2. Biodiversity &amp; Virunga Landscape
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/congo-basin-forest-climate" className="hover:text-primary transition-colors">
                    3. Congo Basin Forest &amp; Climate Action
                  </Link>
                </li>
                <li className="font-bold text-primary flex items-center gap-2">
                  <span>→</span>
                  <span>4. Green Entrepreneurship &amp; Circular Economy</span>
                </li>
              </ul>
              <div className="pt-4 mt-4 border-t border-background/20 text-xs">
                <Link href="/what-we-do/responsible-digital-ai" className="hover:text-primary text-background/80 block mb-1">
                  Transversal: Responsible Digital &amp; AI →
                </Link>
                <Link href="/what-we-do/green-great-lakes-initiative" className="hover:text-primary text-background/80 block">
                  Proposed: Hoja Green Great Lakes Initiative →
                </Link>
              </div>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h4 className="font-bold text-accent text-sm mb-2">Connected Grassroots Programs</h4>
              <p className="text-xs text-foreground/80 mb-4 leading-relaxed">
                This pillar represents the green evolution of our core verified work:
              </p>
              <div className="space-y-2 text-xs">
                <Link href="/what-we-do/youth-empowerment" className="block text-primary font-bold hover:underline">
                  • Youth Economic Empowerment
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
