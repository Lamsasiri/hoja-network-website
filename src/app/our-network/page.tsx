"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageText from "../../components/LanguageText";

export default function OurNetworkRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/who-we-are/our-network");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-xl font-bold mb-2"><LanguageText fr="Redirection vers notre réseau régional…" en="Redirecting to Our Regional Network..." /></h1>
        <p className="text-sm text-foreground/70 mb-4">
          <LanguageText fr="Découvrez nos bases de terrain dans l’est de la RDC et au Rwanda." en="Explore our field bases across Eastern DRC and Rwanda." />
        </p>
        <Link
          href="/who-we-are/our-network"
          className="text-primary underline font-medium text-sm"
        >
          <LanguageText fr="Cliquez ici si la redirection ne se fait pas automatiquement →" en="Click here if you are not automatically redirected →" />
        </Link>
      </div>
    </div>
  );
}
