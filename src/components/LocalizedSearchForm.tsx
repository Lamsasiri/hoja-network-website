"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LocalizedSearchForm() {
  const { language } = useLanguage();
  const isFrench = language === "fr";
  return (
    <form className="inline-block relative leading-5">
      <div className="block" role="search">
        <label className="w-[5.9375rem] h-px block absolute -my-px mr-[0.3125rem] -ml-px overflow-hidden text-sm leading-[1.3125rem] cursor-default" htmlFor="search">
          {isFrench ? "Rechercher sur le site" : "Search website"}
        </label>
        <input className="w-full h-[2.1875rem] inline-block pr-10 pl-2 rounded-tl-[10px] rounded-tr-[35px] rounded-br-[35px] rounded-bl-[10px] overflow-clip text-foreground text-sm leading-[1.375rem] bg-background cursor-text" id="search" name="s" placeholder={isFrench ? "Rechercher" : "Search site"} type="text" />
        <button className="w-7.5 h-7.5 block absolute top-0.5 right-0.5 rounded-[100%] overflow-hidden text-lg font-bold leading-[1.6875rem] text-center -indent-3996 bg-color-008 cursor-pointer before:content-[''] before:hidden before:absolute before:top-0 before:-right-7.5 before:w-[4.6875rem] before:h-full before:bg-clr-0" aria-label={isFrench ? "Lancer la recherche" : "Search submit"} type="submit">
          <svg className="w-4 h-4 block absolute top-1.5 right-1.5 text-background pointer-events-none" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
