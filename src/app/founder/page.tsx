"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageText from "../../components/LanguageText";

export default function FounderRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/who-we-are/our-history");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-xl font-bold mb-2"><LanguageText fr="Redirection vers notre histoire…" en="Redirecting to Our History..." /></h1>
        <p className="text-sm text-foreground/70 mb-4">
          <LanguageText fr="L’histoire du fondateur et l’histoire institutionnelle sont présentées sur notre page dédiée." en="The founder&apos;s story and institutional history are now available on our dedicated page." />
        </p>
        <Link
          href="/who-we-are/our-history"
          className="text-primary underline font-medium text-sm"
        >
          <LanguageText fr="Cliquez ici si la redirection ne se fait pas automatiquement →" en="Click here if you are not automatically redirected →" />
        </Link>
      </div>
    </div>
  );
}
