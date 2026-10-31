import Link from "next/link";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/green-great-lakes-initiative",
  title: "Hoja Green Great Lakes Initiative | Proposed Regional Initiative | HOJA Network",
  description: "A proposed regional framework uniting clean energy, community conservation, agroforestry, green enterprise acceleration, and digital climate innovation across the Great Lakes.",
});



export default function GreenGreatLakesInitiativePage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-flex items-center gap-2 bg-color-011 text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <span><LanguageText fr="Proposition stratégique régionale" en="Proposed Regional Initiative" /></span>
            <span>•</span>
            <span><LanguageText fr="Concept en cours d’élaboration" en="Concept Under Development" /></span>
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Initiative verte de HOJA pour les Grands Lacs" en="Hoja Green Great Lakes Initiative" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-220 leading-relaxed">
            <LanguageText fr="Un cadre régional ambitieux proposé pour stimuler la protection de la nature, l’énergie propre décentralisée et l’entrepreneuriat vert des jeunes dans l’est de la RDC et les zones frontalières des Grands Lacs." en="An ambitious proposed regional framework designed to catalyze nature protection, decentralized clean energy, and green youth entrepreneurship across Eastern DRC and the Great Lakes borderlands." />
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
                <LanguageText fr="Statut institutionnel : Proposition de programme régional en phase de conception et de dialogue partenarial" en="Institutional status: Proposed regional program in the design and partner-dialogue phase" />
              </div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                <LanguageText fr="Pourquoi un cadre régional environnemental et économique ?" en="Why a Regional Environmental & Economic Framework?" />
              </h2>
              <p className="text-base leading-relaxed mb-4">
                <LanguageText fr="Les écosystèmes, les effets du changement climatique et les flux commerciaux dans la région des Grands Lacs ne s’arrêtent pas aux frontières nationales. Le bassin du lac Kivu, le corridor écologique des Virunga et la périphérie du bassin du Congo forment un espace géographique interdépendant confronté à des menaces communes : dégradation des forêts, précarité énergétique, chaînes de valeur transfrontalières vulnérables et sous-emploi des jeunes." en="Ecosystems, climate impacts, and market flows in the Great Lakes do not halt at national boundaries. The Lake Kivu basin, the Virunga ecological corridor, and the Congo Basin periphery form an interdependent geographical landscape facing shared threats: forest degradation, energy poverty, vulnerable cross-border value chains, and youth underemployment." />
              </p>
              <p className="text-base leading-relaxed">
                <LanguageText fr="L’" en="The " /><strong>Hoja Green Great Lakes Initiative</strong><LanguageText fr=" est formulée comme une proposition régionale intégrée sur plusieurs années. Elle traduit les quatre piliers stratégiques du réseau HOJA en une architecture opérationnelle coordonnée, qui relie la gestion responsable de l’environnement au dynamisme économique local." en=" is formulated as an integrated, multi-year regional proposition. It translates HOJA Network's four strategic pillars into a synchronized operational architecture, bridging environmental stewardship with grassroots economic vitality." />
              </p>
            </div>

            {/* The 5 Strategic Axes */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent">
                <LanguageText fr="Les cinq axes opérationnels proposés" en="The Five Proposed Operational Axes" />
              </h3>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-primary">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1"><LanguageText fr="Axe 1" en="Axis 1" /></div>
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="Énergie propre et moyens de subsistance verts" en="Clean Energy for Green Livelihoods" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Accélérer la distribution communautaire de foyers de cuisson économes en combustible et de solutions décentralisées d’énergie renouvelable, et former des jeunes locaux comme agents certifiés de vente et d’entretien." en="Accelerating the community distribution of fuel-efficient cookstoves and decentralized renewable energy solutions, training local youth as certified maintenance and sales agents." />
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-color-011">
                <div className="text-xs font-bold uppercase tracking-wider text-color-011 mb-1"><LanguageText fr="Axe 2" en="Axis 2" /></div>
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="Conservation communautaire et entreprises autour des Virunga" en="Virunga Community Conservation and Enterprise" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Favoriser des microentreprises compatibles avec la conservation (apiculture, agroécologie, artisanat durable) sur les terres communautaires bordant les zones protégées, afin d’offrir des alternatives viables à l’exploitation forestière." en="Fostering conservation-compatible micro-enterprises (beekeeping, agroecology, sustainable crafts) in community lands bordering protected areas, providing viable alternatives to forest extraction." />
                </p>
              </div>

              <div className="p-6 bg-surface-4 rounded-sm border-l-4 border-color-008">
                <div className="text-xs font-bold uppercase tracking-wider text-color-008 mb-1"><LanguageText fr="Axe 3" en="Axis 3" /></div>
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="Restauration du bassin du Congo et agroforesterie" en="Congo Basin Restoration and Agroforestry" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Soutenir les petits exploitants agricoles en leur fournissant des plants d’essences locales et des techniques de régénération des sols pour créer des ceintures agroforestières communautaires qui atténuent l’érosion des versants." en="Supporting smallholder farmers with indigenous tree seedlings and regenerative soil techniques to establish community agroforestry belts that mitigate hillside erosion." />
                </p>
              </div>

              <div className="p-6 bg-surface-2 rounded-sm border-l-4 border-color-012">
                <div className="text-xs font-bold uppercase tracking-wider text-color-012 mb-1"><LanguageText fr="Axe 4" en="Axis 4" /></div>
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="Accélérateur d’entreprises vertes pour les femmes et les jeunes" en="Women and Youth Green Enterprise Accelerator" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Proposer du mentorat, de l’incubation et des services de développement commercial aux jeunes femmes et hommes qui créent des entreprises dans le tri des déchets, le recyclage, le compostage organique et les services écologiques." en="Mentoring, incubation, and business development services dedicated to young women and men creating enterprises in waste sorting, recycling, organic composting, and eco-services." />
                </p>
              </div>

              <div className="p-6 bg-surface-3 rounded-sm border-l-4 border-primary">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1"><LanguageText fr="Axe 5" en="Axis 5" /></div>
                <h4 className="text-lg font-bold text-accent mb-2"><LanguageText fr="Innovation numérique pour le climat et la nature" en="Digital Climate and Nature Innovation" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Déployer des outils numériques responsables pour la cartographie communautaire de l’environnement, la télémétrie de terrain légère et le suivi vérifiable des impacts, sous supervision humaine systématique." en="Deploying responsible digital tools for community environmental mapping, lightweight field telemetry, and verifiable impact monitoring with systematic human oversight." />
                </p>
              </div>
            </div>

            {/* Indicative Horizons with Strict Framing */}
            <div className="p-6 bg-surface-3 border border-border rounded-sm">
              <h3 className="[font-family:questa,_serif] text-lg font-bold text-accent mb-2">
                <LanguageText fr="Horizons indicatifs et cibles prospectives du modèle" en="Indicative Horizons & Prospective Model Targets" />
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed mb-4">
                <LanguageText fr="Dans le cadre de la modélisation transmise par les partenaires stratégiques de HOJA Network, des ordres de grandeur indicatifs ont été élaborés pour dimensionner les ambitions à moyen terme de l’initiative. Ces chiffres constituent des horizons de travail et ne représentent en aucun cas des résultats déjà atteints ni des engagements juridiques fermes." en="Based on the modelling shared by HOJA Network's strategic partners, indicative ranges have been developed to size the initiative's medium-term ambitions. These figures are working horizons; they do not represent results already achieved or binding legal commitments." />
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-primary">~100</div>
                  <div className="text-[11px] text-foreground/75 mt-1"><LanguageText fr="Entreprises vertes incubées visées" en="Green enterprises targeted for incubation" /></div>
                </div>
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-color-011">~5 000</div>
                  <div className="text-[11px] text-foreground/75 mt-1"><LanguageText fr="Ménages bénéficiaires cibles" en="Target beneficiary households" /></div>
                </div>
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-color-008">~1 000 ha</div>
                  <div className="text-[11px] text-foreground/75 mt-1"><LanguageText fr="Paysages restaurés cibles" en="Target landscapes for restoration" /></div>
                </div>
                <div className="p-3 bg-background border border-border rounded-sm">
                  <div className="text-xl font-bold text-color-012">~500</div>
                  <div className="text-[11px] text-foreground/75 mt-1"><LanguageText fr="Opportunités économiques cibles" en="Target economic opportunities" /></div>
                </div>
              </div>
              <div className="text-[11px] text-muted-foreground mt-3 italic">
                <LanguageText fr="* Cibles prospectives soumises à la mobilisation de coalitions de bailleurs et à la validation des comités de pilotage locaux." en="* Prospective targets depend on mobilizing donor coalitions and validation by local steering committees." />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3"><LanguageText fr="Distinction institutionnelle" en="Institutional Distinction" /></h3>
              <p className="text-xs text-background/85 leading-relaxed mb-3">
                <LanguageText fr="Le réseau HOJA établit une distinction claire et transparente entre :" en="HOJA Network maintains a strict, transparent distinction between:" />
              </p>
              <ul className="space-y-2 text-xs text-background/80">
                <li>• <strong><LanguageText fr="Existant et vérifié" en="Existing & verified" />:</strong> <LanguageText fr="Nos 5 programmes de terrain actifs à Goma et dans la région." en="Our 5 active field programs in Goma and the surrounding region." /></li>
                <li>• <strong><LanguageText fr="Orientations stratégiques" en="Strategic directions" />:</strong> <LanguageText fr="Les 4 piliers guidant notre vision institutionnelle." en="The 4 pillars guiding our institutional vision." /></li>
                <li>• <strong><LanguageText fr="Proposition en développement" en="Proposal under development" />:</strong> <LanguageText fr="La présente initiative régionale soumise au dialogue partenarial." en="This regional initiative, submitted for partner dialogue." /></li>
              </ul>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h4 className="font-bold text-accent text-sm mb-2"><LanguageText fr="Participer à la conception conjointe" en="Get Involved in Co-Design" /></h4>
              <p className="text-xs text-foreground/80 mb-4 leading-relaxed">
                <LanguageText fr="Fondations, agences techniques et organismes de recherche intéressés par la conception conjointe ou le soutien de ce cadre régional :" en="Foundations, technical agencies, and research bodies interested in co-designing or supporting this regional framework:" />
              </p>
              <Link href="/get-involved/partner-with-us" className="inline-block py-2.5 px-4 bg-primary text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
                <LanguageText fr="Contacter l’équipe stratégie →" en="Contact Strategy Team →" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
