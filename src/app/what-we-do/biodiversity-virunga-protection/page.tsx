import Link from "next/link";
import type { Metadata } from "next";

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
            <span>Strategic Pillar 2</span>
            <span>•</span>
            <span>Orientation Stratégique</span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Biodiversity Conservation &amp; Virunga Landscape Protection
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            Mobilizing bordering communities, youth, and local enterprises to protect exceptional biodiversity and build nature-positive livelihoods across the Virunga landscape.
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
                Community Action for an Invaluable Natural Heritage
              </h2>
              <p className="text-base leading-relaxed mb-4">
                The Virunga landscape is one of Africa&apos;s most biodiverse and ecologically significant ecosystems, home to iconic species including the mountain gorilla, unique volcanic habitats, and critical freshwater catchments feeding into Lake Kivu. However, demographic pressure, energy poverty, armed conflicts, and economic precarity place immense stress on park boundaries and surrounding communal lands.
              </p>
              <p className="text-base leading-relaxed">
                HOJA Network approaches conservation through the prism of community agency: lasting protection of wildlife and ecosystems is only achievable when local populations residing in buffer zones have viable economic alternatives and become active stewards of their living environment.
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                Core Strategic Focus Areas
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <h4 className="text-lg font-bold text-accent mb-2">1. Nature-Positive Buffer Zone Livelihoods</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Supporting smallholders and community cooperatives adjacent to protected areas in developing sustainable economic alternatives—such as beekeeping, sustainable fruit and vegetable production, and eco-artisanship—that generate income without degrading natural habitats.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Orientation stratégique intégrée aux filières d&apos;insertion de l&apos;entrepreneuriat des jeunes et des femmes.
                </div>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <h4 className="text-lg font-bold text-accent mb-2">2. Community-Led Ecological Restoration &amp; Tree Planting</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Engaging youth groups, schools, and local volunteers in establishing community tree nurseries, restoring degraded hillsides, and planting indigenous tree belts to reduce erosion and landslips in the volcanic highlands.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Activités citoyennes et partenariales en cours de structuration.
                </div>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <h4 className="text-lg font-bold text-accent mb-2">3. Youth Environmental Education &amp; Nature Stewardship</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Integrating biodiversity appreciation, eco-citizenship modules, and nature exploration into our child education initiative (HOJA EDUC), instilling conservation values in the next generation of Congolese and Rwandan youth.
                </p>
                <div className="text-xs text-muted-foreground italic">
                  Statut : Intégré aux ateliers pédagogiques communautaires de HOJA EDUC.
                </div>
              </div>
            </div>

            {/* Crucial Guardrail & Clarification */}
            <div className="p-6 bg-surface-3 border-2 border-primary/40 rounded-sm">
              <h4 className="font-bold text-accent text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                <span className="text-primary font-bold">ℹ</span>
                <span>Clarification Institutionnelle Essentielle</span>
              </h4>
              <p className="text-xs text-foreground/85 leading-relaxed">
                <strong>HOJA Network agit en tant qu&apos;organisation de la société civile</strong> mobilisant les communautés riveraines pour la protection du paysage des Virunga. <strong>HOJA Network n&apos;est pas le gestionnaire du Parc National des Virunga</strong> et ne représente en aucun cas les autorités de gestion du parc (ICCN / Institut Congolais pour la Conservation de la Nature). Nos actions s&apos;exercent exclusivement en périphérie et dans les zones communautaires, en complémentarité avec les dynamiques locales de développement durable.
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
                <li className="font-bold text-primary flex items-center gap-2">
                  <span>→</span>
                  <span>2. Biodiversity &amp; Virunga Landscape</span>
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
                This pillar synergizes with our community education and crisis resilience work:
              </p>
              <div className="space-y-2 text-xs">
                <Link href="/what-we-do/hoja-educ" className="block text-primary font-bold hover:underline">
                  • HOJA EDUC (Eco-Education for Children)
                </Link>
                <Link href="/what-we-do/parenting-in-crisis" className="block text-primary font-bold hover:underline">
                  • Parenting in Crisis (Community Cohesion)
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
