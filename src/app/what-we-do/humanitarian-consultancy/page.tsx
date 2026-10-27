import Link from "next/link";
import type { Metadata } from "next";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Humanitarian Consultancy & Capacity Building | HOJA Network",
  description: "Technical advisory, institutional strengthening, and fundraising guidance for local civil society organizations in the Great Lakes region.",
};

export default function HumanitarianConsultancyPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <LanguageText fr="Service institutionnel vérifié" en="Documented Institutional Service" />
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Conseil humanitaire et renforcement des capacités" en="Humanitarian Consultancy & Capacity Building" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            <LanguageText fr="Renforcer les organisations locales, les organisations de la société civile de terrain et les initiatives communautaires grâce à une assistance technique, un appui à la conformité et à la mobilisation des ressources." en="Strengthening local organizations, grassroots CSOs, and community initiatives through technical assistance, compliance support, and resource mobilization." />
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                <LanguageText fr="Donner aux acteurs locaux les moyens d’impulser un changement durable" en="Empowering Local Actors to Drive Sustainable Change" />
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
            <LanguageText fr="Dans la région des Grands Lacs, les organisations de la société civile de terrain sont les plus proches des populations et les plus rapides à répondre aux urgences. Elles se heurtent toutefois souvent à des obstacles institutionnels : normes de conformité des bailleurs, cadres de rapports financiers et structuration des projets." en="Grassroots civil society organizations in the Great Lakes are closest to the people and quickest to respond to emergencies. However, they frequently struggle with institutional bottlenecks: donor compliance standards, financial reporting frameworks, and structured project formulation." />
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                <LanguageText fr="Sous la direction de Jean Paul Dushime, le service de conseil humanitaire du réseau HOJA fournit un accompagnement technique pratique aux associations locales pour les aider à répondre aux normes internationales et à obtenir des financements directs." en="Under the leadership of Jean Paul Dushime, HOJA Network's Humanitarian Consultancy arm provides hands-on technical guidance to local associations, helping them meet international benchmarks and secure direct funding." />
              </p>
            </div>

            {/* Action Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                <LanguageText fr="Principaux services de conseil" en="Core Advisory Services" />
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2"><LanguageText fr="1. Conception de projets et élaboration de propositions" en="1. Project Design & Proposal Development" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Aider les organisations locales à structurer leurs théories du changement, cadres de résultats, cadres logiques et demandes de subvention compétitives conformes aux exigences des bailleurs." en="Assisting local organizations in structuring theories of change, results frameworks, logframes, and competitive grant proposals aligned with donor requirements." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2"><LanguageText fr="2. Suivi, évaluation et apprentissage (SEA)" en="2. Monitoring, Evaluation & Learning (MEL)" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Mettre en place des systèmes de suivi réalistes et fondés sur des données probantes, des enquêtes de référence et des méthodes de mesure des résultats pour les initiatives communautaires." en="Establishing realistic, evidence-based tracking systems, baseline surveys, and outcome measurement methodologies for community initiatives." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2"><LanguageText fr="3. Gouvernance institutionnelle et conformité" en="3. Institutional Governance & Compliance" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Accompagner les responsables locaux dans la rédaction de manuels financiers, l’élaboration de normes d’approvisionnement, de contrôles internes et de politiques de redevabilité." en="Supporting local leadership with financial manual drafting, procurement standards, internal controls, and accountability policies." />
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                <LanguageText fr="« Une véritable localisation de l’aide humanitaire consiste à transmettre aux organisations de terrain des compétences concrètes, une capacité à respecter les exigences de conformité et une confiance institutionnelle suffisante pour qu’elles dirigent leur propre développement. »" en="“True localization of humanitarian aid means transferring real skills, compliance capacity, and institutional confidence to grassroots organizations so they can lead their own development.”" />
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                — Zachee Iribuka, <LanguageText fr="directeur des partenariats et de la collecte de fonds" en="Partnerships & Fundraising Director" />
              </span>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-3"><LanguageText fr="Nos programmes" en="Our Programs" /></h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/what-we-do/youth-empowerment" className="hover:text-primary"><LanguageText fr="Autonomisation économique des jeunes" en="Youth Economic Empowerment" /></Link></li>
                <li><Link href="/what-we-do/women-empowerment" className="hover:text-primary"><LanguageText fr="Autonomisation économique des femmes" en="Women's Economic Empowerment" /></Link></li>
                <li><Link href="/what-we-do/hoja-educ" className="hover:text-primary">HOJA EDUC</Link></li>
                <li><Link href="/what-we-do/parenting-in-crisis" className="hover:text-primary"><LanguageText fr="Accompagnement parental en situation de crise" en="Parenting in Crisis" /></Link></li>
                <li className="font-bold text-primary">• <LanguageText fr="Conseil humanitaire" en="Humanitarian Consultancy" /></li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-base mb-2"><LanguageText fr="Demander un appui-conseil" en="Request Advisory Support" /></h3>
              <p className="text-xs text-foreground/85 mb-4 leading-relaxed">
                <LanguageText fr="Contactez notre équipe de conseil pour une évaluation institutionnelle ou explorer des possibilités de partenariat." en="Contact our consultancy team for institutional assessments and partnership opportunities." />
              </p>
              <Link
                href="/contact"
                className="inline-block py-2.5 px-4 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                <LanguageText fr="Contacter l’équipe-conseil →" en="Contact Advisory Team →" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
