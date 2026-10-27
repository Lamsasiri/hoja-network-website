"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageText from "../../components/LanguageText";

export default function PartnershipRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/get-involved/partner-with-us");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-xl font-bold mb-2"><LanguageText fr="Redirection vers la page des partenariats…" en="Redirecting to Partner With Us..." /></h1>
        <p className="text-sm text-foreground/70 mb-4">
          <LanguageText fr="Découvrez les possibilités de collaboration avec HOJA Network." en="Discover collaboration opportunities with HOJA Network." />
        </p>
        <Link
          href="/get-involved/partner-with-us"
          className="text-primary underline font-medium text-sm"
        >
          <LanguageText fr="Cliquez ici si la redirection ne se fait pas automatiquement →" en="Click here if you are not automatically redirected →" />
        </Link>
      </div>
    </div>
  );
}
