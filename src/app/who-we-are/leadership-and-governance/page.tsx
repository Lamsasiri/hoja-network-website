import "../ditto.css";
import ListRow from "../components/list-row";
import LanguageText from "../../../components/LanguageText";

const ListRow_data = [
  { href: "/who-we-are", label: "Who we are", labelFr: "Qui nous sommes" },
  { href: "/who-we-are/leadership-and-governance", label: "Leadership & Governance", labelFr: "Direction et gouvernance" },
  { href: "/who-we-are/our-history", label: "Our History (Since 2017)", labelFr: "Notre histoire (depuis 2017)" },
  { href: "/who-we-are/our-network", label: "Regional Network & Presence", labelFr: "Réseau et présence régionale" },
  { href: "/what-we-do", label: "Strategic Pillars", labelFr: "Axes stratégiques" },
  { href: "/contact", label: "Offices & Contact", labelFr: "Bureaux et contact" }
];

const ListRow_cids: string[][] = [
  ["n1", "n2"],
  ["n3", "n4"],
  ["n5", "n6"],
  ["n7", "n8"],
  ["n9", "n10"],
  ["n11", "n12"]
];

interface LeaderProfile {
  name: string;
  role: string;
  roleFr: string;
  category: "Leadership & Founder" | "Board & Governance" | "Executive Team & Operations";
  bio: string;
  bioFr: string;
  email?: string;
  tag: string;
  tagFr: string;
}

const LEADERS: LeaderProfile[] = [
  {
    name: "Isaac Bugeri",
    role: "Founder of HOJA Network",
    roleFr: "Fondateur de HOJA Network",
    category: "Leadership & Founder",
    bio: "Ashoka Africa Fellow & Venture Manager. Former Executive Director of Groupe ISACOM. Founded HOJA Network in 2017 to eradicate youth unemployment and build sustainable community enterprise across the Great Lakes.",
    bioFr: "Ashoka Africa Fellow et Venture Manager. Ancien directeur exécutif du Groupe ISACOM. Il a fondé HOJA Network en 2017 pour lutter contre le chômage des jeunes et développer des entreprises communautaires durables dans la région des Grands Lacs.",
    tag: "Founder & Ashoka Fellow",
    tagFr: "Fondateur et Ashoka Fellow"
  },
  {
    name: "Daniel Mirambi",
    role: "Executive Director",
    roleFr: "Directeur exécutif",
    category: "Leadership & Founder",
    bio: "Leads regional operations, multi-sector program execution on the Goma-Rubavu economic corridor, and direct field team coordination across DRC and Rwanda.",
    bioFr: "Dirige les opérations régionales, la mise en œuvre de programmes multisectoriels dans le corridor économique Goma-Rubavu et la coordination directe des équipes de terrain en RDC et au Rwanda.",
    email: "executive@hojanetwork.org",
    tag: "Executive Direction",
    tagFr: "Direction exécutive"
  },
  {
    name: "SADIKI ZAIRE Esaïe",
    role: "President of the Board (DRC Board)",
    roleFr: "Président du conseil d’administration (RDC)",
    category: "Board & Governance",
    bio: "Senior humanitarian expert and recognized authority on mining governance and supply-chain traceability in the Great Lakes region. Presides over the National Board of Trustees.",
    bioFr: "Expert humanitaire chevronné et spécialiste reconnu de la gouvernance minière et de la traçabilité des chaînes d’approvisionnement dans la région des Grands Lacs. Il préside le conseil d’administration national.",
    tag: "Board President",
    tagFr: "Président du conseil"
  },
  {
    name: "Héritier Kitumaini",
    role: "Member, Global Advisory Board",
    roleFr: "Membre du conseil consultatif mondial",
    category: "Board & Governance",
    bio: "Founder and Board Chairman of RAVEC. Seasoned specialist in tech startup incubation, private-sector scaling, and cross-border commercial acceleration in Africa.",
    bioFr: "Fondateur et président du conseil de RAVEC. Spécialiste chevronné de l’incubation de jeunes entreprises technologiques, du développement du secteur privé et de l’accélération des échanges transfrontaliers en Afrique.",
    tag: "Advisory Board",
    tagFr: "Conseil consultatif"
  },
  {
    name: "Adolphe Rukomeza",
    role: "Chief Communication & Media Promotion",
    roleFr: "Responsable de la communication et de la promotion médiatique",
    category: "Executive Team & Operations",
    bio: "Drives brand visibility, public affairs, media strategy, and digital outreach for all HOJA regional initiatives, summits, and field success stories.",
    bioFr: "Développe la visibilité de la marque, les affaires publiques, la stratégie médiatique et la communication numérique pour les initiatives régionales, les sommets et les récits de terrain de HOJA.",
    tag: "Communications",
    tagFr: "Communication"
  },
  {
    name: "Zachee Iribuka",
    role: "Partnerships & Fundraising Director",
    roleFr: "Directeur des partenariats et de la mobilisation de fonds",
    category: "Executive Team & Operations",
    bio: "Oversees bilateral donor engagement (Enabel, GIZ, USAID, foundations) and regional cross-border development cooperation pacts.",
    bioFr: "Supervise les relations avec les bailleurs bilatéraux (Enabel, GIZ, USAID et fondations) ainsi que les accords régionaux de coopération transfrontalière au développement.",
    email: "partnership@hojanetwork.org",
    tag: "Partnerships & Grants",
    tagFr: "Partenariats et subventions"
  },
  {
    name: "Jean Paul Dushime",
    role: "Head of Humanitarian Consultancy",
    roleFr: "Responsable du conseil humanitaire",
    category: "Executive Team & Operations",
    bio: "Directs technical assistance, compliance, and institutional capacity-building missions for grassroots CSOs and local development partners.",
    bioFr: "Dirige les missions d’assistance technique, de conformité et de renforcement des capacités institutionnelles auprès des organisations de la société civile et des partenaires locaux du développement.",
    tag: "Humanitarian Advisory",
    tagFr: "Conseil humanitaire"
  },
  {
    name: "Philippe Balume",
    role: "Assistant Manager, Community Reach & Fundraising",
    roleFr: "Responsable adjoint de la mobilisation communautaire et de la collecte de fonds",
    category: "Executive Team & Operations",
    bio: "Coordinates grassroots outreach, women cross-border traders' collectives, and local youth mobilization in Goma and Rubavu.",
    bioFr: "Coordonne les actions de proximité, les collectifs de femmes commerçantes transfrontalières et la mobilisation des jeunes à Goma et à Rubavu.",
    tag: "Community Reach",
    tagFr: "Mobilisation communautaire"
  },
  {
    name: "Clementine Botanyi",
    role: "Finance & Cashier Manager",
    roleFr: "Responsable des finances et de la caisse",
    category: "Executive Team & Operations",
    bio: "Guarantees day-to-day cash reconciliation, micro-loan ledger tracking, and adherence to strict non-profit financial procedures.",
    bioFr: "Veille au rapprochement quotidien de la caisse, au suivi des registres de microcrédit et au respect des procédures financières strictes de l’organisation sans but lucratif.",
    tag: "Finance & Accounting",
    tagFr: "Finances et comptabilité"
  },
  {
    name: "Patrick Muyali",
    role: "Technical Systems & Infrastructure Administrator",
    roleFr: "Administrateur des systèmes techniques et de l’infrastructure",
    category: "Executive Team & Operations",
    bio: "Local tech entrepreneur and long-standing domain and digital systems administrator for HOJA Network communications.",
    bioFr: "Entrepreneur local du secteur technologique et administrateur de longue date du domaine et des systèmes numériques de communication de HOJA Network.",
    tag: "Systems & Infrastructure",
    tagFr: "Systèmes et infrastructure"
  }
];

export default function LeadershipPage() {
  return (
    <main className="block mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      <section className="py-12 bg-accent text-background">
        <div className="max-w-320 px-8 mx-auto max-md:px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">
              <LanguageText fr="Gouvernance et structure" en="Governance &amp; Structure" />
            </span>
            <h1 className="[font-family:questa,_serif] text-[2.5rem] leading-[3rem] font-normal mb-4">
              <LanguageText fr="Direction et gouvernance" en="Leadership &amp; Governance" />
            </h1>
            <p className="text-lg leading-relaxed text-background/80">
              <LanguageText fr="Découvrez les fondateurs, les administrateurs et les directeurs exécutifs qui portent la mission communautaire de HOJA Network en République démocratique du Congo, au Rwanda et dans le reste de l’Afrique." en="Meet the founders, trustees, and executive directors driving HOJA Network’s grassroots mission across the Democratic Republic of the Congo, Rwanda, and the wider African continent." />
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-320 px-8 py-12 mx-auto max-md:px-4 flex flex-wrap max-lg:flex-col justify-between items-start">
        <aside className="w-full lg:w-[25%] mb-8 lg:mb-0 lg:sticky lg:top-[12.5rem]">
          <div className="bg-surface-3 p-6 rounded-sm">
            <h3 className="font-bold text-accent text-lg mb-4 [font-family:questa,_serif]">
              <LanguageText fr="Dans cette rubrique" en="In this section" />
            </h3>
            <ul className="space-y-2">
              {ListRow_data.map((d, i) => (
                <li key={i} className="border-b border-border/50 pb-2">
                  <a href={d.href} className="text-primary hover:underline text-sm font-semibold">
                    <LanguageText fr={d.labelFr} en={d.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-surface-2 p-6 rounded-sm border-l-4 border-primary">
            <h4 className="font-bold text-accent text-base mb-2">
              <LanguageText fr="Norme de gouvernance" en="Governance Standard" />
            </h4>
            <p className="text-xs text-foreground/80 leading-relaxed">
              <LanguageText fr="HOJA Network exerce ses activités dans le strict respect de l’autorisation de la RDC n° JUST.G.S.112/S-KV/0508/2021 et de l’autorisation RGB e-Imiryango du Rwanda n° 058/2024." en="HOJA Network operates in strict compliance with DRC Law No. JUST.G.S.112/S-KV/0508/2021 and Rwanda RGB e-Imiryango Law No. 058/2024." />
            </p>
          </div>
        </aside>

        <div className="w-full lg:w-[70%]">
          <div className="mb-12">
            <h2 className="[font-family:questa,_serif] text-2xl text-accent font-bold pb-3 border-b-2 border-primary mb-6">
              <LanguageText fr="Direction exécutive et conseil d’administration" en="Executive Direction &amp; Board of Trustees" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LEADERS.map((leader, idx) => (
                <div key={idx} className="bg-surface-2 p-6 rounded border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-primary text-background rounded">
                        <LanguageText fr={leader.tagFr} en={leader.tag} />
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        <LanguageText fr={leader.category === "Leadership & Founder" ? "Direction et fondateur" : leader.category === "Board & Governance" ? "Conseil et gouvernance" : "Équipe exécutive et opérations"} en={leader.category} />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground [font-family:questa,_serif] mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-3">
                      <LanguageText fr={leader.roleFr} en={leader.role} />
                    </p>
                    <p className="text-sm text-foreground/85 leading-relaxed">
                      <LanguageText fr={leader.bioFr} en={leader.bio} />
                    </p>
                  </div>
                  {leader.email && (
                    <div className="mt-4 pt-3 border-t border-border">
                      <a href={`mailto:${leader.email}`} className="text-xs font-semibold text-accent underline">
                        {leader.email}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
