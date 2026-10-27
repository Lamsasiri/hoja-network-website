"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs font-bold text-background border border-white/20">
      <span
        onClick={() => setLanguage("en")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLanguage("en"); }}
        className={`cursor-pointer px-1 transition-opacity ${
          language === "en" ? "text-primary font-extrabold" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Switch to English"
      >
        EN
      </span>
      <span className="opacity-40 select-none">|</span>
      <span
        onClick={() => setLanguage("fr")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLanguage("fr"); }}
        className={`cursor-pointer px-1 transition-opacity ${
          language === "fr" ? "text-primary font-extrabold" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Passer en Français"
      >
        FR
      </span>
    </div>
  );
}
