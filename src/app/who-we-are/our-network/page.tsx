import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Regional Network & Presence | HOJA Network",
  description: "Explore HOJA Network's physical presence and operational base: Headquarters in Goma, North Kivu, DRC, and connections across the Great Lakes region.",
};

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
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Presence &amp; Field Bases</p>
              <h1 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]">
                Our Regional Network
              </h1>
            </div>
            <div className="block p-6">
              <p className="block text-base leading-relaxed text-muted-foreground">
                Headquartered in Goma, North Kivu (DRC). Connecting grassroots initiatives, local entrepreneurs, and community partners across the Great Lakes.
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
                Rooted in Eastern DRC and the Great Lakes
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                HOJA Network is rooted in Goma, a strategic commercial hub in the Albertine Rift. We work closely with local merchants, youth associations, and civil society actors to foster sustainable development and self-reliance.
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                Our legal registration in the Democratic Republic of the Congo ensures transparent compliance with national authorities and institutional accountability.
              </p>
            </div>

            {/* Operating Hubs */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                Our Physical Presence
              </h3>

              {/* Hub 1: Goma HQ */}
              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-accent">Headquarters — Goma, DRC</h4>
                  <span className="text-xs bg-primary text-background font-bold px-2.5 py-1 rounded-sm uppercase">Headquarters</span>
                </div>
                <div className="text-sm text-foreground/85 space-y-2">
                  <p>
                    <strong>Address:</strong><br />
                    Rond-point des Banques, Centre-ville, Goma, Nord-Kivu, RD Congo<br />
                    (Bâtiment de l&apos;ancien Hôtel Rusina, 1er étage)
                  </p>
                  <p>
                    <strong>Official Registration:</strong><br />
                    Ministerial Authorization <code>JUST.G.S. 112/S-KV/0508/2021</code>
                  </p>
                  <p>
                    <strong>Key Operations:</strong><br />
                    Executive management, clean energy access coordination, buffer-zone conservation alliances, youth green business incubation, women&apos;s enterprise coaching, HOJA EDUC workshops, Parenting in Crisis dialogue desks, and humanitarian consultancy.
                  </p>
                  <p>
                    <strong>Phone / WhatsApp:</strong><br />
                    <a href="tel:+243897715819" className="text-primary hover:underline font-semibold">+243 897 715 819</a> / <a href="tel:+243792369704" className="text-primary hover:underline font-semibold">+243 792 369 704</a>
                  </p>
                </div>
              </div>

              {/* Regional Scope */}
              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-accent">Regional Scope &amp; Ecological Corridors</h4>
                  <span className="text-xs bg-color-011 text-background font-bold px-2.5 py-1 rounded-sm uppercase">Great Lakes Presence</span>
                </div>
                <div className="text-sm text-foreground/85 space-y-2">
                  <p>
                    <strong>Geographical Reach:</strong><br />
                    Grounded in Eastern DRC along the Virunga landscape, Lake Kivu, and Congo Basin margins, with operational presence in Western Rwanda (Rubavu, RGB Certificate No. 058/2024).
                  </p>
                  <p>
                    <strong>Core Focus:</strong><br />
                    Fostering cross-border collaboration between youth communities, supporting women in sustainable commerce, protecting fragile ecosystems, and accelerating the clean energy transition.
                  </p>
                  <p>
                    <strong>Official Inquiries:</strong><br />
                    <a href="mailto:contact@hojanetwork.org" className="text-primary hover:underline font-semibold">contact@hojanetwork.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-surface-3 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-lg mb-4">Who We Are</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/who-we-are" className="text-foreground/80 hover:text-primary flex items-center gap-2">
                    <span>•</span> Overview &amp; Mission
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are/leadership-and-governance" className="text-foreground/80 hover:text-primary flex items-center gap-2">
                    <span>•</span> Leadership &amp; Governance
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are/our-history" className="text-foreground/80 hover:text-primary flex items-center gap-2">
                    <span>•</span> Our History (2017–2026)
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are/our-network" className="font-bold text-primary flex items-center gap-2">
                    <span>→</span> Regional Network &amp; Presence
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-2">Visiting Our Offices</h3>
              <p className="text-sm text-background/85 mb-4">
                To arrange an institutional visit, research meeting, or field partnership discussion, please contact our administrative desk in advance.
              </p>
              <Link href="/contact" className="inline-block w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-background rounded-sm transition-colors">
                Contact Our Offices →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
