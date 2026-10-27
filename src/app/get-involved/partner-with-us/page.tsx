import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Strategic Alliances & Green Solutions | HOJA Network",
  description: "Collaborate with HOJA Network on clean cooking, Virunga biodiversity conservation, Congo Basin agroforestry, green youth enterprise incubation, and grassroots resilience.",
};

export default function PartnerWithUsPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            Strategic Alliances &amp; Partnerships
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Partner with HOJA Network
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            Co-designing lasting, nature-positive solutions with an experienced grassroots team grounded in Eastern DRC and the Great Lakes borderlands.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                Why Collaborate with HOJA Network?
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                HOJA Network connects philanthropic foundations, bilateral development agencies, conservation alliances, and corporate social innovators directly with verified community initiatives in Eastern DRC and neighboring territories.
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                We bridge global standards of environmental and social governance—inspired by our founder&apos;s Ashoka Fellowship—with daily, trust-based presence among youth associations, women merchants, smallholders, and community leaders.
              </p>
            </div>

            {/* Strategic Partnership Pathways */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                Core Collaboration Pathways
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2">1. Clean Cooking &amp; Renewable Energy Transition</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Support the distribution of fuel-efficient biomass cookstoves, decentralized solar micro-solutions, and sponsor youth technicians in clean energy maintenance across Goma and peri-urban hubs.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2">2. Virunga Landscape &amp; Community Conservation</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Co-fund community-led ecological restoration, tree seedling nurseries, and nature-positive livelihoods (beekeeping, eco-gardens) for families residing in protected area buffer zones.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2">3. Congo Basin Agroforestry &amp; Forest Protection</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Partner on smallholder agroforestry models, soil conservation, and community land stewardship agreements to curb agricultural pressure on tropical rainforest margins.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-color-012 mb-2">4. Green Youth &amp; Women Enterprise Accelerator</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Sponsor incubation cohorts and business starter kits for young entrepreneurs and female cross-border traders launching circular enterprises in waste upcycling, organic compost, and eco-services.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-accent mb-2">5. Responsible Digital &amp; Nature Innovation</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Collaborate on frugal, open-source environmental telemetry, field restoration mapping, and transparent impact monitoring tools operated with mandatory human validation.
                </p>
              </div>
            </div>

            {/* Documented Institutional Ecosystem & Alliances */}
            <div className="space-y-6 pt-6 border-t border-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                  Transparence &amp; Cadrage Institutionnel
                </span>
                <h3 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-2">
                  Notre Écosystème Partenaire &amp; Réseaux Documentés
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Conformément à nos principes de rigueur et d&apos;intégrité, nous distinguons clairement nos affiliations fondatrices, nos agréments légaux d&apos;exercice, nos référents de concertation et les cadres de coopération historique :
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* 1. Ashoka */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Ashoka Africa Network</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Affiliation Fondatrice
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    Lien institutionnel porté par Isaac Bugeri (Ashoka Fellow). Accès au réseau mondial des entrepreneurs sociaux et standards d&apos;impact systémique.
                  </p>
                </div>

                {/* 2. Ministère Justice RDC */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Ministère de la Justice (RDC)</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Agrément Légal
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    Autorisation ministérielle N° <code>JUST.G.S. 112/S-KV/0508/2021</code> conférant la personnalité juridique d&apos;ASBL pour nos actions d&apos;utilité publique.
                  </p>
                </div>

                {/* 3. RGB Rwanda */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Rwanda Governance Board (RGB)</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Autorisation Active
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    Autorisation légale d&apos;opération transfrontalière e-Imiryango N° <code>058/2024</code> pour nos programmes d&apos;action communautaire à Rubavu.
                  </p>
                </div>

                {/* 4. RAVEC RDC */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">RAVEC RDC</span>
                    <span className="text-[10px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                      Concertation Économique
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    Réseau des Acteurs de la Valorisation de l&apos;Entrepreneuriat au Congo, présidé par Héritier Kitumaini, pour l&apos;insertion des jeunes entrepreneurs.
                  </p>
                </div>

                {/* 5. Historical Project Referents */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Cadres Techniques &amp; Bailleurs</span>
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Réf. Historiques
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    Programmes menés historiquement en synergie avec des cadres de développement multilatéraux et bilatéraux (Enabel, GIZ, USAID, fondations partenaires).
                  </p>
                </div>

                {/* 6. Grassroots */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Réseaux Paysans &amp; Marchandes</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Base Terrain
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    Coopératives agricoles riveraines du corridor des Virunga et cercles de solidarité des femmes commerçantes transfrontalières Goma-Rubavu.
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="border border-border p-8 rounded-sm bg-background shadow-sm">
              <h3 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-2">
                Start a Partnership Dialogue
              </h3>
              <p className="text-sm text-foreground/75 mb-6">
                Tell us about your organization and how you would like to collaborate with HOJA Network.
              </p>

              <form className="space-y-4" action="mailto:contact@hojanetwork.org" method="GET">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="e.g. Marie Dupont"
                      className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="e.g. marie@foundation.org"
                      className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Organization / Foundation
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization Name"
                      className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Pillar / Focus Area of Interest
                    </label>
                    <select
                      name="pillar"
                      className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                    >
                      <option value="general">General Strategic Partnership</option>
                      <option value="pillar-1">Pillar 1: Renewable Energy &amp; Clean Cooking</option>
                      <option value="pillar-2">Pillar 2: Biodiversity &amp; Virunga Landscape</option>
                      <option value="pillar-3">Pillar 3: Congo Basin Forest &amp; Agroforestry</option>
                      <option value="pillar-4">Pillar 4: Green Youth &amp; Women Enterprise</option>
                      <option value="digital-ai">Responsible Digital &amp; AI Innovation</option>
                      <option value="green-great-lakes">Hoja Green Great Lakes Initiative (Regional)</option>
                      <option value="community-education">HOJA EDUC &amp; Family Resilience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                    Your Message / Proposal *
                  </label>
                  <textarea
                    rows={5}
                    required
                    name="message"
                    placeholder="Describe your proposed collaboration, strategic alignment, or institutional questions..."
                    className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto py-3 px-8 bg-primary hover:bg-primary/90 text-background font-bold uppercase tracking-wider text-sm rounded-sm transition-colors cursor-pointer"
                >
                  Send Partnership Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3">Direct Executive Contacts</h3>
              <div className="space-y-4 text-sm text-foreground/85">
                <div>
                  <div className="font-bold text-background">Daniel Mirambi</div>
                  <div className="text-xs text-primary">Executive Director</div>
                  <a href="mailto:contact@hojanetwork.org" className="text-xs underline hover:text-primary">
                    contact@hojanetwork.org
                  </a>
                </div>
                <div className="pt-2 border-t border-background/15">
                  <div className="font-bold text-background">Isaac Bugeri</div>
                  <div className="text-xs text-primary">Founder &amp; Ashoka Fellow</div>
                  <a href="mailto:bugeri@hojanetwork.org" className="text-xs underline hover:text-primary">
                    bugeri@hojanetwork.org
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-3 rounded-sm border border-border text-sm">
              <h3 className="font-bold text-accent text-base mb-3">Legal &amp; Institutional Status</h3>
              <p className="text-foreground/80 mb-2">
                <strong>DRC:</strong> Registered NGO under Ministerial authorization <code>JUST.G.S. 112/S-KV/0508/2021</code>.
              </p>
              <p className="text-foreground/80 mb-2">
                <strong>Rwanda:</strong> Authorized under Rwanda Governance Board (RGB) <code>No. 058/2024</code>.
              </p>
              <p className="text-foreground/80">
                <strong>Affiliation:</strong> Ashoka Global Fellowship Network.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
