import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Economic Empowerment | HOJA Network",
  robots: { index: false, follow: false },
};

export default function EconomicDevelopmentRedirectPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0 py-24 px-6 text-center" id="main">
      <head>
        <meta httpEquiv="refresh" content="0; url=/what-we-do/youth-empowerment" />
      </head>
      <div className="max-w-160 mx-auto space-y-4">
        <h1 className="[font-family:questa,_serif] text-2xl font-bold text-accent">
          Economic Empowerment Programs
        </h1>
        <p className="text-foreground/80 text-sm">
          Please explore our dedicated programs in Youth Economic Empowerment and Women&apos;s Economic Empowerment.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="/what-we-do/youth-empowerment"
            className="inline-block py-2.5 px-6 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
          >
            Youth Empowerment →
          </Link>
          <Link
            href="/what-we-do/women-empowerment"
            className="inline-block py-2.5 px-6 bg-accent text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
          >
            Women&apos;s Empowerment →
          </Link>
        </div>
      </div>
    </main>
  );
}
