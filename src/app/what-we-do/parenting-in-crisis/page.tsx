import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parenting in Crisis | HOJA Network",
  description: "Psychosocial dialogue circles and family support for households facing conflict, displacement, and vulnerability in North Kivu.",
};

export default function ParentingInCrisisPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            Documented Core Program • Programme Historique Vérifié
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            Parenting in Crisis: Family Support &amp; Psychosocial Resilience
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            Providing safe community spaces for parents navigating conflict, economic strain, and displacement, strengthening family bonds and protecting children.
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
                Strengthening Family Resilience Under Adversity
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                Recurrent security crises and economic displacement in North Kivu place tremendous psychosocial burdens on households. Parents are forced to cope with loss of income, shelter insecurity, and the constant stress of protecting their children in volatile environments.
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                The Parenting in Crisis initiative creates supportive, community-based spaces where parents and caregivers can come together to address psychological distress, share coping strategies, and practice supportive parenting.
              </p>
            </div>

            {/* Action Areas */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                Core Initiatives
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2">1. Community Dialogue &amp; Listening Circles</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Facilitated group sessions where mothers, fathers, and caregivers share daily challenges, reduce feelings of isolation, and support each other through mutual solidarity.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2">2. Positive Parenting in Challenging Contexts</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Workshops on managing parental stress, non-violent communication, recognizing signs of trauma in children, and preserving family harmony under economic hardship.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2">3. Child Protection &amp; Community Referral</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Identifying at-risk children, preventing child labor and exploitation, and connecting families with available social, legal, and educational resources.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-6 bg-accent text-background rounded-sm">
              <p className="italic text-base leading-relaxed">
                &ldquo;A stable, emotionally supportive home is a child&apos;s primary shield against trauma. By caring for the caregivers, we safeguard the emotional and physical future of the children.&rdquo;
              </p>
              <span className="block font-bold text-primary text-xs mt-3 uppercase tracking-wider">
                — Jean Paul Dushime, Humanitarian Advisory Lead
              </span>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-3">Our Programs</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/what-we-do/youth-empowerment" className="hover:text-primary">Youth Economic Empowerment</Link></li>
                <li><Link href="/what-we-do/women-empowerment" className="hover:text-primary">Women's Economic Empowerment</Link></li>
                <li><Link href="/what-we-do/hoja-educ" className="hover:text-primary">HOJA EDUC</Link></li>
                <li className="font-bold text-primary">• Parenting in Crisis</li>
                <li><Link href="/what-we-do/humanitarian-consultancy" className="hover:text-primary">Humanitarian Consultancy</Link></li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-base mb-2">Support Vulnerable Families</h3>
              <p className="text-xs text-foreground/85 mb-4 leading-relaxed">
                Help sustain dialogue circles, psychosocial facilitators, and family assistance efforts in Goma.
              </p>
              <Link
                href="/get-involved/partner-with-us"
                className="inline-block py-2.5 px-4 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                Join Hands →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
