import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | HOJA Network",
  description: "Explore opportunities to support, partner with, or advocate for HOJA Network's mission in the Great Lakes region.",
};

export default function GetInvolvedPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24 text-center">
        <div className="max-w-240 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            Take Action
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight">
            Get Involved with HOJA Network
          </h1>
          <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
            Whether you are an institutional foundation, a researcher, a corporate partner, or an active advocate, there are multiple avenues to contribute to our regional impact.
          </p>
        </div>
      </section>

      <div className="max-w-300 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border p-8 rounded-sm bg-surface-2 flex flex-col justify-between">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-3">
                Strategic Partnerships
              </h2>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                Collaborate with us on multi-year initiatives in clean cooking, Virunga biodiversity conservation, Congo Basin agroforestry, green youth enterprise acceleration, and community resilience across Eastern DRC and the Great Lakes.
              </p>
            </div>
            <Link
              href="/get-involved/partner-with-us"
              className="inline-block py-3 px-6 bg-primary text-background font-bold uppercase text-xs tracking-wider rounded-sm text-center hover:bg-primary/90 transition-colors"
            >
              Partner With Us →
            </Link>
          </div>

          <div className="border border-border p-8 rounded-sm bg-surface-3 flex flex-col justify-between">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-3">
                Contact & Inquiries
              </h2>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                Reach out to our field offices in Goma and Rubavu for press inquiries, research cooperation, field visits, or direct institutional communication.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block py-3 px-6 bg-accent text-background font-bold uppercase text-xs tracking-wider rounded-sm text-center hover:bg-accent/90 transition-colors"
            >
              Contact Our Team →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
