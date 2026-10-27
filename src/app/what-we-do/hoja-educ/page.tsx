import Link from "next/link";
import type { Metadata } from "next";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "HOJA EDUC — Creative Education & Innovation | HOJA Network",
  description: "Fostering active learning, practical creativity, and school engagement for children through community workshops in Eastern DRC.",
};

export default function HojaEducPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            Documented Core Program • Programme Historique Vérifié
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
                Education in crisis-affected environments often suffers from severe infrastructural deficits, crowded classrooms, and rote learning methodologies that fail to awaken children&apos;s innate creativity and problem-solving drive.
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                HOJA EDUC was created to offer children interactive learning spaces where discovery, creativity, and self-expression take center stage. By introducing active pedagogy principles, we help young minds connect what they learn with practical life.
              </p>
            </div>

            {/* Action Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                <LanguageText fr="Principaux axes d’apprentissage" en="Key Learning Dimensions" />
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2">1. Creative Expression &amp; Arts</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Engaging children in visual arts, storytelling, and collaborative construction projects that build self-confidence and emotional resilience.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2">2. Practical Problem-Solving &amp; Science Discovery</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Hands-on experiments using recycled and locally available materials to teach basic science, environmental curiosity, and teamwork.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2">3. Literacy &amp; Educational Retention</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Reinforcing reading and writing through enjoyable, non-intrusive games, supporting children at risk of dropping out due to economic pressures.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                &ldquo;Every child is naturally curious. When given the freedom to create, question, and build, they develop the mindset of changemakers who will shape tomorrow&apos;s Africa.&rdquo;
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                — Isaac Bugeri, Founder &amp; Ashoka Fellow
              </span>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-3"><LanguageText fr="Nos programmes" en="Our Programs" /></h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/what-we-do/youth-empowerment" className="hover:text-primary">Youth Economic Empowerment</Link></li>
                <li><Link href="/what-we-do/women-empowerment" className="hover:text-primary">Women's Economic Empowerment</Link></li>
                <li className="font-bold text-primary">• HOJA EDUC</li>
                <li><Link href="/what-we-do/parenting-in-crisis" className="hover:text-primary">Parenting in Crisis</Link></li>
                <li><Link href="/what-we-do/humanitarian-consultancy" className="hover:text-primary">Humanitarian Consultancy</Link></li>
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
