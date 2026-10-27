import type { Metadata } from "next";
import Link from "next/link";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Renewable Energy & Clean Cooking | HOJA Network",
  robots: { index: false, follow: false },
};

export default function BiomassRedirectPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0 py-24 px-6 text-center" id="main">
      <head>
        <meta httpEquiv="refresh" content="0; url=/what-we-do/renewable-energy-clean-cooking" />
      </head>
      <div className="max-w-160 mx-auto space-y-4">
        <h1 className="[font-family:questa,_serif] text-2xl font-bold text-accent">
          <LanguageText fr="Énergies renouvelables et cuisson propre" en="Renewable Energy & Clean Cooking Solutions" />
        </h1>
        <p className="text-foreground/80 text-sm">
          <LanguageText fr="Redirection vers le pilier stratégique 1 : énergies renouvelables et cuisson propre." en="Redirecting to Strategic Pillar 1: Renewable Energy & Clean Cooking Solutions." />
        </p>
        <Link
          href="/what-we-do/renewable-energy-clean-cooking"
          className="inline-block py-2.5 px-6 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
        >
          <LanguageText fr="Accéder au pilier stratégique 1 →" en="Go to Strategic Pillar 1 →" />
        </Link>
      </div>
    </main>
  );
}
