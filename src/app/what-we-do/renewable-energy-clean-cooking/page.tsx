import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewable Energy & Clean Cooking | Strategic Pillar 1 | HOJA Network",
  description: "Advancing community access to cleaner household cooking solutions, solar energy micro-services, and local green energy entrepreneurship in the Great Lakes region.",
};

export default function RenewableEnergyCleanCookingPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span>Strategic Pillar 1</span>
            <span>•</span>
            <span>Orientation Stratégique</span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Renewable Energy &amp; Clean Cooking Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            Reducing household dependency on unsustainably harvested charcoal by supporting cleaner cooking alternatives, decentralized renewable energy, and local energy service entrepreneurship.
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
                The Critical Energy &amp; Forest Challenge
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Across Eastern Democratic Republic of the Congo and the borderlands of Western Rwanda, over 90% of urban and peri-urban households rely on wood fuel and traditional charcoal (<em>makala</em>) for daily cooking. This massive reliance drives severe forest degradation around the Virunga landscape and the Congo Basin margins, while exposing women and young children to hazardous indoor air pollution.
              </p>
              <p className="text-base leading-relaxed">
                HOJA Network positions clean household energy not as a distant luxury, but as an urgent community necessity linked directly to family health, women&apos;s economic dignity, and landscape conservation.
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                Core Strategic Focus Areas
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2">1. Clean Cooking Access &amp; Adoption</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Promoting market-tested, highly efficient biomass cookstoves and supporting the gradual transition toward alternative, sustainable fuels (such as sustainably sourced pellets and agricultural residues) suited to peri-urban household budgets.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Orientation stratégique en développement avec des fabricants locaux et distributeurs communautaires.
                </div>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2">2. Local Energy Entrepreneurship for Youth &amp; Women</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Training youth and women merchants in the distribution, repair, and assembly of clean cookstoves and decentralized solar home systems, embedding energy access into viable micro-enterprises.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Déploiement articulé sur le programme d'insertion professionnelle des jeunes et de micro-entrepreneuriat des femmes.
                </div>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2">3. Community Sensitization &amp; Indoor Air Health</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Facilitating grassroots awareness workshops in neighborhood centers and market spaces on the health risks of carbon monoxide, smoke inhalation, and the household savings realized through fuel-efficient cooking technologies.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Intégré aux dialogues communautaires et aux cercles familiaux dans le Nord-Kivu.
                </div>
              </div>
            </div>

            {/* Guardrail Note */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm">
              <h4 className="font-bold text-accent text-sm mb-2 uppercase tracking-wider">
                Note Institutionnelle de Transparence
              </h4>
              <p className="text-xs text-foreground/80 leading-relaxed">
                Ce pilier représente une orientation stratégique prioritaire de HOJA Network. Les activités de distribution et de fabrication sont menées en partenariat avec des acteurs techniques spécialisés et des coopératives locales. Aucun objectif chiffré n&apos;est présenté comme un résultat atteint sans audit d&apos;impact indépendant préalable.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3">The 4 Strategic Pillars</h3>
              <ul className="space-y-3 text-sm">
                <li className="font-bold text-primary flex items-center gap-2">
                  <span>→</span>
                  <span>1. Renewable Energy &amp; Clean Cooking</span>
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
                <li>
                  <Link href="/what-we-do/green-entrepreneurship-circular-economy" className="hover:text-primary transition-colors">
                    4. Green Entrepreneurship &amp; Circular Economy
                  </Link>
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
                Clean energy entrepreneurship builds directly on HOJA&apos;s verified economic empowerment initiatives:
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
