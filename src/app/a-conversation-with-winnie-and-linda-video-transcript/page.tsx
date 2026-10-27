import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are | HOJA Network",
  robots: { index: false, follow: false },
};

export default function Transcript1Redirect() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0 py-24 px-6 text-center" id="main">
      <head>
        <meta httpEquiv="refresh" content="0; url=/who-we-are" />
      </head>
      <div className="max-w-160 mx-auto space-y-4">
        <h1 className="[font-family:questa,_serif] text-2xl font-bold text-accent">
          HOJA Network
        </h1>
        <p className="text-foreground/80 text-sm">
          Redirecting to our institutional overview and mission.
        </p>
        <Link
          href="/who-we-are"
          className="inline-block py-2.5 px-6 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
        >
          Go to Who We Are →
        </Link>
      </div>
    </main>
  );
}
