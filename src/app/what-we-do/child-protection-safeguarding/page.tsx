import type { Metadata } from "next";
import Link from "next/link";
import LanguageText from "../../../components/LanguageText";

export const metadata: Metadata = {
  title: "Parenting in Crisis | HOJA Network",
  robots: { index: false, follow: false },
};

export default function ChildProtectionRedirectPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0 py-24 px-6 text-center" id="main">
      <head>
        <meta httpEquiv="refresh" content="0; url=/what-we-do/parenting-in-crisis" />
      </head>
      <div className="max-w-160 mx-auto space-y-4">
        <h1 className="[font-family:questa,_serif] text-2xl font-bold text-accent">
          <LanguageText fr="Accompagnement parental en situation de crise" en="Parenting in Crisis & Family Support" />
        </h1>
        <p className="text-foreground/80 text-sm">
          <LanguageText fr="Découvrez notre programme de soutien aux familles et aux enfants vulnérables du Nord-Kivu." en="Please explore our program supporting vulnerable families and children in North Kivu." />
        </p>
        <Link
          href="/what-we-do/parenting-in-crisis"
          className="inline-block py-2.5 px-6 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
        >
          <LanguageText fr="Accéder au programme d’accompagnement parental →" en="Go to Parenting in Crisis →" />
        </Link>
      </div>
    </main>
  );
}
