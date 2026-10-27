"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LeadershipRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/who-we-are/leadership-and-governance");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-xl font-bold mb-2">Redirecting to Leadership &amp; Governance...</h1>
        <p className="text-sm text-foreground/70 mb-4">
          Our verified leadership team and governance boards are now centralized.
        </p>
        <Link
          href="/who-we-are/leadership-and-governance"
          className="text-primary underline font-medium text-sm"
        >
          Click here if you are not automatically redirected →
        </Link>
      </div>
    </div>
  );
}
