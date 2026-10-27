import Link from "next/link";
import type { Metadata } from "next";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Youth Economic Empowerment | HOJA Network",
  description: "Vocational skills training, micro-business incubation, and commercial mentoring to fight youth unemployment in the Great Lakes region.",
};

export default function YouthEmpowermentPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <LanguageText fr="Programme historique vérifié" en="Documented Core Program" />
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Autonomisation économique des jeunes" en="Youth Economic Empowerment" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            <LanguageText fr="Donner aux jeunes demandeurs d’emploi et aux entrepreneurs en devenir des compétences professionnelles pratiques, un accompagnement à l’incubation de microentreprises et un mentorat commercial." en="Equipping young job-seekers and emerging entrepreneurs with practical vocational skills, micro-enterprise incubation, and commercial mentorship." />
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
                <LanguageText fr="Lutter contre le chômage des jeunes par l’entrepreneuriat pratique" en="Tackling Youth Unemployment Through Practical Enterprise" />
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                <LanguageText fr="Dans l’est de la RDC et la région des Grands Lacs, les jeunes constituent la majorité de la population, mais font face à un sous-emploi structurel important. Les emplois formels restent rares, laissant de nombreux diplômés et jeunes déscolarisés sans perspectives viables de moyens de subsistance." en="In Eastern DRC and the Great Lakes region, youth constitute the majority of the population but face acute structural underemployment. Formal job openings remain scarce, leaving many graduates and out-of-school youth without viable livelihood prospects." />
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                <LanguageText fr="Le réseau HOJA a été fondé sur une conviction claire : les jeunes ne sont pas des bénéficiaires passifs de l’aide, mais des personnes capables de résoudre des problèmes. Notre programme d’autonomisation économique des jeunes fait le lien entre l’éducation formelle et le marché du travail réel." en="HOJA Network was founded with a clear conviction: young people are not passive recipients of aid, but capable problem-solvers. Our Youth Economic Empowerment program bridges the gap between formal education and the real market." />
              </p>
            </div>

            {/* Action Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                <LanguageText fr="Composantes du programme" en="Program Components" />
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2"><LanguageText fr="1. Formation pratique aux compétences professionnelles" en="1. Practical Vocational Skills Training" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Un apprentissage pratique adapté à la demande du marché local : métiers techniques, fabrication à petite échelle, réparation artisanale et services commerciaux pratiques." en="Hands-on learning tailored to local market demand: technical trades, small-scale manufacturing, artisanal repair, and practical commercial services." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2"><LanguageText fr="2. Incubation de microentreprises" en="2. Micro-Enterprise Incubation" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Un accompagnement structuré sur les fondamentaux de l’entreprise : gestion des flux de trésorerie, fixation des prix, service à la clientèle, tenue de comptes de base et formalisation." en="Structured coaching on business fundamentals: cash flow management, pricing, customer service, basic bookkeeping, and formalization." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2"><LanguageText fr="3. Mentorat et réseaux de pairs" en="3. Mentorship and Peer Networks" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Mettre en relation les jeunes entrepreneurs en devenir avec des chefs d’entreprise locaux établis afin de favoriser le partage des connaissances et les possibilités de coopération commerciale." en="Connecting emerging young entrepreneurs with established local business leaders, fostering knowledge exchange and cooperative market opportunities." />
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                <LanguageText fr="« Notre objectif est de transformer les demandeurs d’emploi en créateurs d’emplois. Lorsqu’un jeune acquiert des compétences pratiques et lance une entreprise viable, c’est tout son ménage qui en bénéficie. »" en="“Our objective is to transform job-seekers into job-creators. When a young person acquires practical skills and starts a viable enterprise, they uplift their entire household.”" />
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                — Daniel Mirambi, <LanguageText fr="directeur exécutif" en="Executive Director" />
              </span>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-3"><LanguageText fr="Nos programmes" en="Our Programs" /></h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="font-bold text-primary">• <LanguageText fr="Autonomisation économique des jeunes" en="Youth Economic Empowerment" /></li>
                <li><Link href="/what-we-do/women-empowerment" className="hover:text-primary"><LanguageText fr="Autonomisation économique des femmes" en="Women's Economic Empowerment" /></Link></li>
                <li><Link href="/what-we-do/hoja-educ" className="hover:text-primary">HOJA EDUC</Link></li>
                <li><Link href="/what-we-do/parenting-in-crisis" className="hover:text-primary"><LanguageText fr="Accompagnement parental en situation de crise" en="Parenting in Crisis" /></Link></li>
                <li><Link href="/what-we-do/humanitarian-consultancy" className="hover:text-primary"><LanguageText fr="Conseil humanitaire" en="Humanitarian Consultancy" /></Link></li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-base mb-2"><LanguageText fr="Devenir partenaire" en="Partner With Us" /></h3>
              <p className="text-xs text-foreground/85 mb-4 leading-relaxed">
                <LanguageText fr="Soutenez les apprentissages, les kits de démarrage d’entreprise et la formation professionnelle des jeunes dans le cadre de nos programmes." en="Support youth apprenticeships, enterprise startup kits, and vocational training across our programs." />
              </p>
              <Link
                href="/get-involved/partner-with-us"
                className="inline-block py-2.5 px-4 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                <LanguageText fr="S’impliquer →" en="Get Involved →" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
