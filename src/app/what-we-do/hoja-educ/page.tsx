import Link from "next/link";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/what-we-do/hoja-educ",
  title: "HOJA EDUC — Creative Education & Innovation | HOJA Network",
  description: "Fostering active learning, practical creativity, and school engagement for children through community workshops in Eastern DRC.",
});



export default function HojaEducPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <LanguageText fr="Programme historique vérifié" en="Documented Core Program" />
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="HOJA EDUC : éducation créative et innovation" en="HOJA EDUC: Creative Education & Innovation" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            <LanguageText fr="Éveiller la curiosité, favoriser une pédagogie active et soutenir la persévérance scolaire des enfants et jeunes apprenants grâce à des ateliers de découverte interactifs." en="Nurturing curiosity, active pedagogy, and school perseverance among children and young learners through interactive discovery workshops." />
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
                <LanguageText fr="Inspirer les enfants par un apprentissage pratique et actif" en="Inspiring Children Through Practical, Active Learning" />
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                <LanguageText fr="Dans les contextes de crise, l’éducation souffre souvent de graves déficits d’infrastructures, de classes surchargées et de méthodes fondées sur la répétition qui ne stimulent ni la créativité naturelle des enfants ni leur capacité à résoudre des problèmes." en="Education in crisis-affected environments often suffers from severe infrastructural deficits, crowded classrooms, and rote learning methodologies that fail to awaken children's innate creativity and problem-solving drive." />
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                <LanguageText fr="HOJA EDUC a été créé pour offrir aux enfants des espaces d’apprentissage interactifs où la découverte, la créativité et l’expression personnelle occupent une place centrale. En appliquant les principes de la pédagogie active, nous aidons les jeunes esprits à relier leurs apprentissages à la vie pratique." en="HOJA EDUC was created to offer children interactive learning spaces where discovery, creativity, and self-expression take center stage. By introducing active pedagogy principles, we help young minds connect what they learn with practical life." />
              </p>
            </div>

            {/* Action Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                <LanguageText fr="Principaux axes d’apprentissage" en="Key Learning Dimensions" />
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2"><LanguageText fr="1. Expression créative et arts" en="1. Creative Expression & Arts" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Faire participer les enfants aux arts visuels, à la narration et à des projets de construction collectifs qui renforcent la confiance en soi et la résilience émotionnelle." en="Engaging children in visual arts, storytelling, and collaborative construction projects that build self-confidence and emotional resilience." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2"><LanguageText fr="2. Résolution pratique de problèmes et découverte scientifique" en="2. Practical Problem-Solving & Science Discovery" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Réaliser des expériences pratiques avec des matériaux recyclés et disponibles localement pour enseigner les bases des sciences, éveiller la curiosité environnementale et développer le travail d’équipe." en="Hands-on experiments using recycled and locally available materials to teach basic science, environmental curiosity, and teamwork." />
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2"><LanguageText fr="3. Alphabétisation et persévérance scolaire" en="3. Literacy & Educational Retention" /></h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr="Renforcer la lecture et l’écriture par des jeux agréables et non intrusifs, et soutenir les enfants exposés au risque d’abandon scolaire en raison des difficultés économiques." en="Reinforcing reading and writing through enjoyable, non-intrusive games, supporting children at risk of dropping out due to economic pressures." />
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                <LanguageText fr="« Chaque enfant est naturellement curieux. Lorsqu’il a la liberté de créer, de questionner et de construire, il développe l’état d’esprit des acteurs du changement qui façonneront l’Afrique de demain. »" en="“Every child is naturally curious. When given the freedom to create, question, and build, they develop the mindset of changemakers who will shape tomorrow's Africa.”" />
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                <LanguageText fr="— Isaac Bugeri, fondateur de HOJA Network" en="— Isaac Bugeri, Founder of HOJA Network" />
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
                <li className="font-bold text-primary">• HOJA EDUC</li>
                <li><Link href="/what-we-do/parenting-in-crisis" className="hover:text-primary"><LanguageText fr="Accompagnement parental en situation de crise" en="Parenting in Crisis" /></Link></li>
                <li><Link href="/what-we-do/humanitarian-consultancy" className="hover:text-primary"><LanguageText fr="Conseil humanitaire" en="Humanitarian Consultancy" /></Link></li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-base mb-2"><LanguageText fr="Soutenir HOJA EDUC" en="Support HOJA EDUC" /></h3>
              <p className="text-xs text-foreground/85 mb-4 leading-relaxed">
                <LanguageText fr="Aidez-nous à équiper les ateliers d’apprentissage communautaires en matériel pédagogique, livres et fournitures créatives." en="Help equip community learning workshops with educational materials, books, and creative supplies." />
              </p>
              <Link
                href="/get-involved/partner-with-us"
                className="inline-block py-2.5 px-4 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                <LanguageText fr="Soutenir l’éducation →" en="Support Education →" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
