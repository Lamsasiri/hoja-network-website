"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, Translations } from "../locales/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("hoja_lang") as Language;
    if (saved === "en" || saved === "fr") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      const browserLang = navigator.language?.toLowerCase();
      if (browserLang && browserLang.startsWith("en")) {
        setLanguageState("en");
        document.documentElement.lang = "en";
      } else {
        setLanguageState("fr");
        document.documentElement.lang = "fr";
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("hoja_lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const t = translations[language] || translations.fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "fr",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.fr,
      mounted: false,
    };
  }
  return context;
}
