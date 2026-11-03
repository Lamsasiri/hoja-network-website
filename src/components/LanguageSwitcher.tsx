"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs font-bold text-background border border-white/20">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`cursor-pointer px-1 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          language === "en" ? "text-primary font-extrabold" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="opacity-40 select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`cursor-pointer px-1 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          language === "fr" ? "text-primary font-extrabold" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Passer en Français"
      >
        FR
      </button>
    </div>
  );
}
