import Link from "next/link";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/our-network",
  title: "Our Regional Network & Presence | HOJA Network",
  description: "Explore HOJA Network's physical presence and operational base: Headquarters in Goma, North Kivu, DRC, and connections across the Great Lakes region.",
});



export default function OurNetworkPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="h-150 min-h-150 flex relative flex-wrap items-center overflow-hidden bg-color-011 max-md:h-auto max-lg:pt-20 max-lg:min-h-0 md:max-lg:h-[58.6rem] 2xl:h-202.5 2xl:min-h-202.5">
        <div className="w-208 h-150 block absolute top-0 left-112 min-w-0 max-md:w-full max-md:h-64 max-lg:right-0 max-lg:static max-lg:left-auto md:max-lg:w-192 md:max-lg:h-135 2xl:w-312 2xl:h-202.5 2xl:left-168">
          <img
            className="w-full h-150 block max-w-full overflow-clip object-cover text-center max-md:h-64 md:max-lg:h-135 2xl:h-202.5 [filter:brightness(1.12)]"
            src="/assets/hoja/photos/IMG_8227.jpg"
            alt="HOJA Network team gathered in front of regional flags"
          />
        </div>
        <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4">
          <div className="w-[34.2rem] block z-2 mr-[41.8rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:mt-8 max-md:mr-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]">
            <div className="block p-6 text-background bg-accent">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary"><LanguageText fr="Présence et bases de terrain" en="Presence &amp; Field Bases" /></p>
              <h1 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]">
                <LanguageText fr="Notre réseau régional" en="Our Regional Network" />
              </h1>
            </div>
            <div className="block p-6">
              <p className="block text-base leading-relaxed text-muted-foreground">
                <LanguageText fr="Notre siège se trouve à Goma, au Nord-Kivu (RDC). Nous relions des initiatives locales, des entrepreneurs et des partenaires communautaires dans toute la région des Grands Lacs." en="Headquartered in Goma, North Kivu (DRC). Connecting grassroots initiatives, local entrepreneurs, and community partners across the Great Lakes." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                <LanguageText fr="Ancrés dans l’est de la RDC et la région des Grands Lacs" en="Rooted in Eastern DRC and the Great Lakes" />
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                <LanguageText fr="HOJA Network est ancré à Goma, un pôle commercial stratégique du Rift Albertin. Nous travaillons étroitement avec les commerçants locaux, les associations de jeunes et les acteurs de la société civile pour soutenir un développement durable et l’autonomie." en="HOJA Network is rooted in Goma, a strategic commercial hub in the Albertine Rift. We work closely with local merchants, youth associations, and civil society actors to foster sustainable development and self-reliance." />
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                <LanguageText fr="Notre enregistrement légal en République démocratique du Congo garantit le respect transparent des exigences des autorités nationales et la responsabilité institutionnelle." en="Our legal registration in the Democratic Republic of the Congo ensures transparent compliance with national authorities and institutional accountability." />
              </p>
            </div>

            {/* Operating Hubs */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                <LanguageText fr="Notre présence physique" en="Our Physical Presence" />
              </h3>

              {/* Hub 1: Goma HQ */}
              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-accent"><LanguageText fr="Siège — Goma, RDC" en="Headquarters — Goma, DRC" /></h4>
                  <span className="text-xs bg-primary text-background font-bold px-2.5 py-1 rounded-sm uppercase"><LanguageText fr="Siège" en="Headquarters" /></span>
                </div>
                <div className="text-sm text-foreground/85 space-y-2">
                  <p>
                    <strong><LanguageText fr="Adresse :" en="Address:" /></strong><br />
                    Rond-point des Banques, Centre-ville, Goma, Nord-Kivu, RD Congo<br />
                    (Bâtiment de l&apos;ancien Hôtel Rusina, 1er étage)
                  </p>
                  <p>
                    <strong><LanguageText fr="Enregistrement officiel :" en="Official Registration:" /></strong><br />
                    <LanguageText fr="Autorisation ministérielle " en="Ministerial Authorization " /><code>JUST.G.S. 112/S-KV/0508/2021</code>
                  </p>
                  <p>
                    <strong><LanguageText fr="Principales activités :" en="Key Operations:" /></strong><br />
                    <LanguageText fr="Gestion exécutive, coordination de l’accès à l’énergie propre, alliances de conservation des zones tampons, incubation d’entreprises vertes pour les jeunes, accompagnement des entreprises de femmes, ateliers HOJA EDUC, espaces de dialogue Parenting in Crisis et conseil humanitaire." en="Executive management, clean energy access coordination, buffer-zone conservation alliances, youth green business incubation, women&apos;s enterprise coaching, HOJA EDUC workshops, Parenting in Crisis dialogue desks, and humanitarian consultancy." />
                  </p>
                  <p>
                    <strong><LanguageText fr="Téléphone / WhatsApp :" en="Phone / WhatsApp:" /></strong><br />
                    <a href="tel:+243897715819" className="text-primary hover:underline font-semibold">+243 897 715 819</a>
                  </p>
                </div>
              </div>

              {/* Regional Scope */}
              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-accent"><LanguageText fr="Portée régionale et corridors écologiques" en="Regional Scope &amp; Ecological Corridors" /></h4>
                  <span className="text-xs bg-color-011 text-background font-bold px-2.5 py-1 rounded-sm uppercase"><LanguageText fr="Présence dans les Grands Lacs" en="Great Lakes Presence" /></span>
                </div>
                <div className="text-sm text-foreground/85 space-y-2">
                  <p>
                    <strong><LanguageText fr="Couverture géographique :" en="Geographical Reach:" /></strong><br />
                    <LanguageText fr="Ancrés dans l’est de la RDC, le long du paysage des Virunga, du lac Kivu et des marges du bassin du Congo, nous sommes également présents dans l’ouest du Rwanda (Rubavu, certificat RGB n° 058/2024)." en="Grounded in Eastern DRC along the Virunga landscape, Lake Kivu, and Congo Basin margins, with operational presence in Western Rwanda (Rubavu, RGB Certificate No. 058/2024)." />
                  </p>
                  <p>
                    <strong><LanguageText fr="Priorités :" en="Core Focus:" /></strong><br />
                    <LanguageText fr="Encourager la collaboration transfrontalière entre les communautés de jeunes, soutenir les femmes dans le commerce durable, protéger les écosystèmes fragiles et accélérer la transition vers l’énergie propre." en="Fostering cross-border collaboration between youth communities, supporting women in sustainable commerce, protecting fragile ecosystems, and accelerating the clean energy transition." />
                  </p>
                  <p>
                    <strong><LanguageText fr="Demandes officielles :" en="Official Inquiries:" /></strong><br />
                    <a href="mailto:contact@hojanetwork.org" className="text-primary hover:underline font-semibold">contact@hojanetwork.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-lg mb-4"><LanguageText fr="Qui nous sommes" en="Who We Are" /></h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/who-we-are" className="text-foreground/80 hover:text-primary flex items-center gap-2">
                    <span>•</span> <LanguageText fr="Présentation et mission" en="Overview &amp; Mission" />
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are/leadership-and-governance" className="text-foreground/80 hover:text-primary flex items-center gap-2">
                    <span>•</span> <LanguageText fr="Direction et gouvernance" en="Leadership &amp; Governance" />
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are/our-history" className="text-foreground/80 hover:text-primary flex items-center gap-2">
                    <span>•</span> <LanguageText fr="Notre histoire (2017–2026)" en="Our History (2017–2026)" />
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are/our-network" className="font-bold text-primary flex items-center gap-2">
                    <span>→</span> <LanguageText fr="Réseau et présence régionale" en="Regional Network &amp; Presence" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-2"><LanguageText fr="Visiter nos bureaux" en="Visiting Our Offices" /></h3>
              <p className="text-sm text-background/85 mb-4">
                <LanguageText fr="Pour organiser une visite institutionnelle, une réunion de recherche ou une discussion sur un partenariat de terrain, veuillez contacter notre secrétariat à l’avance." en="To arrange an institutional visit, research meeting, or field partnership discussion, please contact our administrative desk in advance." />
              </p>
              <Link href="/contact" className="inline-block w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-background rounded-sm transition-colors">
                <LanguageText fr="Contacter nos bureaux →" en="Contact Our Offices →" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
