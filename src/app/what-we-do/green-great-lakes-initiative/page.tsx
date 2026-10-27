import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoja Green Great Lakes Initiative | Proposed Regional Initiative | HOJA Network",
  description: "A proposed regional framework uniting clean energy, community conservation, agroforestry, green enterprise acceleration, and digital climate innovation across the Great Lakes.",
};

export default function GreenGreatLakesInitiativePage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-color-011 text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span>Proposition Stratégique Régionale</span>
            <span>•</span>
            <span>Concept Under Development</span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Hoja Green Great Lakes Initiative
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            An ambitious proposed regional framework designed to catalyze nature protection, decentralized clean energy, and green youth entrepreneurship across Eastern DRC and the Great Lakes borderlands.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10 text-foreground/90">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold mb-4">
                Statut institutionnel : Proposition de programme régional en phase de conception et de dialogue partenarial
              </div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                Why a Regional Environmental &amp; Economic Framework?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Ecosystems, climate impacts, and market flows in the Great Lakes do not halt at national boundaries. The Lake Kivu basin, the Virunga ecological corridor, and the Congo Basin periphery form an interdependent geographical landscape facing shared threats: forest degradation, energy poverty, vulnerable cross-border value chains, and youth underemployment.
              </p>
              <p className="text-base leading-relaxed">
                The <strong>Hoja Green Great Lakes Initiative</strong> is formulated as an integrated, multi-year regional proposition. It translates HOJA Network&apos;s four strategic pillars into a synchronized operational architecture, bridging environmental stewardship with grassroots economic vitality.
              </p>
            </div>

            {/* The 5 Strategic Axes */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                The Five Proposed Operational Axes
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Axe 1</div>
                <h4 className="text-lg font-bold text-accent mb-2">Clean Energy for Green Livelihoods</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Accelerating the community distribution of fuel-efficient cookstoves and decentralized renewable energy solutions, training local youth as certified maintenance and sales agents.
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <div className="text-xs font-bold uppercase tracking-wider text-color-011 mb-1">Axe 2</div>
                <h4 className="text-lg font-bold text-accent mb-2">Virunga Community Conservation and Enterprise</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Fostering conservation-compatible micro-enterprises (beekeeping, agroecology, sustainable crafts) in community lands bordering protected areas, providing viable alternatives to forest extraction.
                </p>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <div className="text-xs font-bold uppercase tracking-wider text-color-008 mb-1">Axe 3</div>
                <h4 className="text-lg font-bold text-accent mb-2">Congo Basin Restoration and Agroforestry</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Supporting smallholder farmers with indigenous tree seedlings and regenerative soil techniques to establish community agroforestry belts that mitigate hillside erosion.
                </p>
              </div>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-color-012">
                <div className="text-xs font-bold uppercase tracking-wider text-color-012 mb-1">Axe 4</div>
                <h4 className="text-lg font-bold text-accent mb-2">Women and Youth Green Enterprise Accelerator</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Mentoring, incubation, and business development services dedicated to young women and men creating enterprises in waste sorting, recycling, organic composting, and eco-services.
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-primary">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Axe 5</div>
                <h4 className="text-lg font-bold text-accent mb-2">Digital Climate and Nature Innovation</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Deploying responsible digital tools for community environmental mapping, lightweight field telemetry, and verifiable impact monitoring with systematic human oversight.
                </p>
              </div>
            </div>

            {/* Indicative Horizons with Strict Framing */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm">
              <h3 className="[font-family:questa,_serif] text-lg font-bold text-accent mb-2">
                Horizons Indicatifs &amp; Cibles Prospectives du Modèle
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed mb-4">
                Dans le cadre de la modélisation transmise par les partenaires stratégiques de HOJA Network, des ordres de grandeur indicatifs ont été élaborés pour dimensionner les ambitions à moyen terme de l&apos;initiative. <strong>Ces chiffres constituent des horizons de travail et ne représentent en aucun cas des résultats déjà atteints ni des engagements juridiques fermes :</strong>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-primary">~100</div>
                  <div className="text-[11px] text-foreground/75 mt-1">Entreprises vertes incubées visées</div>
                </div>
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-color-011">~5 000</div>
                  <div className="text-[11px] text-foreground/75 mt-1">Ménages bénéficiaires cibles</div>
                </div>
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-color-008">~1 000 ha</div>
                  <div className="text-[11px] text-foreground/75 mt-1">Paysages restaurés cibles</div>
                </div>
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-color-012">~500</div>
                  <div className="text-[11px] text-foreground/75 mt-1">Opportunités économiques cibles</div>
                </div>
              </div>
              <div className="text-[11px] text-muted-foreground mt-3 italic">
                * Cibles prospectives soumises à la mobilisation de coalitions de bailleurs et à la validation des comités de pilotage locaux.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3">Institutional Distinction</h3>
              <p className="text-xs text-background/85 leading-relaxed mb-3">
                HOJA Network maintains a strict, transparent distinction between:
              </p>
              <ul className="space-y-2 text-xs text-background/80">
                <li>• <strong>Existant &amp; Vérifié :</strong> Nos 5 programmes de terrain actifs à Goma et dans la région.</li>
                <li>• <strong>Orientations Stratégiques :</strong> Les 4 piliers guidant notre vision institutionnelle.</li>
                <li>• <strong>Proposition en Développement :</strong> La présente initiative régionale soumise au dialogue partenarial.</li>
              </ul>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h4 className="font-bold text-accent text-sm mb-2">Get Involved in Co-Design</h4>
              <p className="text-xs text-foreground/80 mb-4 leading-relaxed">
                Foundations, technical agencies, and research bodies interested in co-designing or supporting this regional framework:
              </p>
              <Link href="/get-involved/partner-with-us" className="inline-block py-2.5 px-4 bg-primary text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
                Contact Strategy Team →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
