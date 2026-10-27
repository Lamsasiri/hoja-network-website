"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageText({ fr, en }: { fr: string; en: string }) {
  const { language } = useLanguage();
  return <>{language === "fr" ? fr : en}</>;
}
