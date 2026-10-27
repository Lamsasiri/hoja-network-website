import type { Metadata } from "next";
import Link from "next/link";
import LanguageText from "../../components/LanguageText";

export const metadata: Metadata = {
  title: "What We Do | HOJA Network",
  robots: { index: false, follow: false },
};

export default function WhyGirlsEducationRedirect() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0 py-24 px-6 text-center" id="main">
      <head>
        <meta httpEquiv="refresh" content="0; url=/what-we-do" />
      </head>
      <div className="max-w-160 mx-auto space-y-4">
        <h1 className="[font-family:questa,_serif] text-2xl font-bold text-accent">
          <LanguageText fr="Programmes de HOJA Network" en="HOJA Network Programs" />
        </h1>
        <p className="text-foreground/80 text-sm">
          <LanguageText fr="Redirection vers nos axes stratégiques et nos programmes communautaires dans la région des Grands Lacs." en="Redirecting to our strategic pillars and community programs in the Great Lakes region." />
        </p>
        <Link
          href="/what-we-do"
          className="inline-block py-2.5 px-6 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
        >
          <LanguageText fr="Découvrir nos actions →" en="Go to What We Do →" />
        </Link>
      </div>
    </main>
  );
}
