import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved | HOJA Network",
  robots: { index: false, follow: false },
};

export default function IgniteChangeRedirect() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0 py-24 px-6 text-center" id="main">
      <head>
        <meta httpEquiv="refresh" content="0; url=/get-involved/partner-with-us" />
      </head>
      <div className="max-w-160 mx-auto space-y-4">
        <h1 className="[font-family:questa,_serif] text-2xl font-bold text-accent">
          Partner with HOJA Network
        </h1>
        <p className="text-foreground/80 text-sm">
          Redirecting to our collaboration and partnership opportunities.
        </p>
        <Link
          href="/get-involved/partner-with-us"
          className="inline-block py-2.5 px-6 bg-primary text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
        >
          Go to Partner With Us →
        </Link>
      </div>
    </main>
  );
}
