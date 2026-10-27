"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import type { Translations } from "../locales/translations";

type PageKey = "networkPage" | "impactPage" | "greenEconomyPage" | "moringaPage" | "academyPage" | "farmPage";
type SectionSpec = { title: string; paragraph?: string; lists?: string[] };

const sections: Record<PageKey, SectionSpec[]> = {
  networkPage: [
    { title: "presenceTitle", lists: ["rwandaTitle", "rwandaPoints", "drcTitle", "drcPoints"] },
    { title: "networkIncludesTitle", lists: ["networkPoints"] },
  ],
  impactPage: [
    { title: "approachTitle", lists: ["dim1Title", "dim1Points", "dim2Title", "dim2Points", "dim3Title", "dim3Points"] },
    { title: "transparencyTitle", paragraph: "transparencyText" },
    { title: "targetsTitle", lists: ["targets"] },
  ],
  greenEconomyPage: [
    { title: "domainsTitle", lists: ["domain1Title", "domain1Points", "domain2Title", "domain2Points", "domain3Title", "domain3Points", "domain4Title", "domain4Points", "domain5Title", "domain5Points"] },
    { title: "howWeActTitle", lists: ["howWeActPoints"] },
    { title: "concreteExamplesTitle", paragraph: "concreteExamplesText" },
  ],
  moringaPage: [
    { title: "whyTitle", paragraph: "whyIntro", lists: ["benefit1Title", "benefit1Desc", "benefit2Title", "benefit2Desc", "benefit3Title", "benefit3Desc", "benefit4Title", "benefit4Desc"] },
    { title: "approachTitle", lists: ["step1Title", "step1Points", "step2Title", "step2Points", "step3Title", "step3Points", "step4Title", "step4Points"] },
    { title: "expectedImpactTitle", lists: ["impactPoints"] },
    { title: "importantNoticeTitle", paragraph: "importantNoticeText" },
  ],
  academyPage: [
    { title: "offerTitle", lists: ["offer1Title", "offer1Points", "offer2Title", "offer2Points", "offer3Title", "offer3Points", "offer4Title", "offer4Points"] },
    { title: "targetAudienceTitle", lists: ["targetPoints"] },
    { title: "resultsTitle", lists: ["results"] },
    { title: "howToApplyTitle", paragraph: "howToApplyText" },
  ],
  farmPage: [
    { title: "approachTitle", paragraph: "approachText" },
    { title: "domainsTitle", lists: ["domain1Title", "domain1Points", "domain2Title", "domain2Points", "domain3Title", "domain3Points", "domain4Title", "domain4Points"] },
    { title: "expectedImpactTitle", lists: ["impactPoints"] },
  ],
};

export default function LocalizedHojaPage({ pageKey }: { pageKey: PageKey }) {
  const { t } = useLanguage();
  const content = t[pageKey] as unknown as Record<string, unknown>;
  const text = (key: string) => typeof content[key] === "string" ? content[key] as string : "";
  const strings = (key: string): string[] => {
    const value = content[key];
    if (!Array.isArray(value)) return typeof value === "string" ? [value] : [];
    return value.flatMap((item) => {
      if (typeof item === "string") return [item];
      if (item && typeof item === "object") return Object.values(item).filter((part): part is string => typeof part === "string");
      return [];
    });
  };
  const fieldActions = Array.isArray(content["howWeActPoints"])
    ? content["howWeActPoints"].flatMap((item) => {
        if (!item || typeof item !== "object") return [];
        const action = item as Record<string, unknown>;
        return typeof action.step === "string" && typeof action.desc === "string"
          ? [{ step: action.step, description: action.desc }]
          : [];
      })
    : [];
  const buttonHref = pageKey === "greenEconomyPage" ? "/moringa" : pageKey === "networkPage" ? "/contact" : pageKey === "academyPage" ? "/contact" : pageKey === "farmPage" || pageKey === "moringaPage" ? "/donate" : "/contact";
  const heroImage = pageKey === "greenEconomyPage"
    ? "/assets/hoja/photos/WhatsApp Image 2026-10-17 at 22.04.47.jpeg"
    : pageKey === "academyPage"
      ? "/assets/hoja/photos/academy-schoolchildren.png"
      : pageKey === "farmPage"
        ? "/assets/hoja/photos/IMG_7211.jpg"
        : pageKey === "moringaPage"
          ? "/assets/hoja/photos/WhatsApp Image 2026-10-17 at 22.04.48a.jpeg"
    : "/assets/hoja/photos/PXL_20241110_122420814-1-scaled.jpg";
  const heroImageAlt = pageKey === "greenEconomyPage"
    ? "River surrounded by dense green forest"
    : pageKey === "academyPage"
      ? "Schoolchildren gathered outside their classroom"
      : pageKey === "farmPage"
        ? "HOJA community members gathered in a training session"
        : pageKey === "moringaPage"
          ? "A boat crossing a river bordered by green forest"
      : "HOJA Network community activity";
  const brightenHero = pageKey === "academyPage" || pageKey === "farmPage";

  return (
    <main className="block mt-[10.3125rem] bg-background max-lg:mt-0 after:content-[''] after:table after:w-0 after:h-0" id="main">
      <section className="h-150 min-h-150 flex relative flex-wrap items-center overflow-hidden bg-color-011 max-md:h-auto max-lg:pt-20 max-lg:min-h-0 md:max-lg:h-[58.6rem] 2xl:h-202.5 2xl:min-h-202.5">
        <div className="w-208 h-150 block absolute top-0 left-112 min-w-0 max-md:w-full max-md:h-64 max-lg:right-0 max-lg:static max-lg:left-auto md:max-lg:w-192 md:max-lg:h-135 2xl:w-312 2xl:h-202.5 2xl:left-168">
          <img className={`w-full h-150 block max-w-full overflow-clip object-cover text-center max-md:h-64 md:max-lg:h-135 2xl:h-202.5 ${brightenHero ? "[filter:brightness(1.16)]" : ""}`} alt={heroImageAlt} src={heroImage} />
        </div>
        <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4">
          <div className="w-[34.2rem] block z-2 mr-[41.8rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:mt-8 max-md:mr-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]">
            <div className="block p-6 text-background bg-accent">
              <h1 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]">{text("title")}</h1>
            </div>
            <div className="block p-6">
              <p className="block text-xl leading-6.5 text-foreground font-medium">{text("subtitle")}</p>
              <p className="block text-base leading-6 mt-3 text-muted-foreground">{text("intro")}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex relative max-w-full py-12 flex-wrap items-start max-lg:py-8" id="content">
        <div className="flex relative z-11 max-w-320 px-8 flex-row-reverse flex-wrap justify-between items-start grow basis-2/3 mx-auto max-md:px-4 max-lg:flex-col max-lg:grow-[initial] max-lg:basis-[initial]">
          <aside className="w-full h-auto block sticky top-[12.3125rem] float-right z-1000 max-w-[30%] basis-[30%] overflow-hidden bg-background max-lg:top-8 max-lg:mb-6 max-lg:static max-lg:max-w-none max-lg:basis-full">
            <div className="block p-5 bg-surface-3 rounded-sm border border-border">
              <h3 className="block text-accent text-base font-bold mb-4 pb-2 border-b border-border">{t.nav.network}</h3>
              <nav><ul className="space-y-2.5 text-sm">{[
                ["/our-network", t.nav.network], ["/impact", t.nav.impact], ["/green-economy", t.nav.greenEconomy], ["/hoja-academy", t.nav.academy], ["/hoja-farm", t.nav.farm], ["/donate", t.nav.donate],
              ].map(([href, label]) => <li key={href}><Link href={href} className="text-foreground/80 hover:text-primary">{label}</Link></li>)}</ul></nav>
            </div>
          </aside>
          <div className="block relative float-left max-w-[66.66%] mr-[2.5375rem] basis-2/3 max-lg:max-w-none max-lg:mr-0 max-lg:basis-full">
            <div className="space-y-8 text-foreground/90">
              <p className="text-base leading-relaxed">{text("intro")}</p>
              {sections[pageKey].map((section, index) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent">{text(section.title)}</h2>
                  {section.paragraph && !(pageKey === "academyPage" && index === 3) && !(pageKey === "moringaPage" && (index === 0 || index === 3)) && <p className="text-base leading-relaxed">{text(section.paragraph)}</p>}
                  {pageKey === "greenEconomyPage" && index === 0 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {[
                        { title: text("domain1Title"), points: strings("domain1Points"), image: "WhatsApp Image 2026-10-17 at 22.04.49az.jpeg", alt: "Community camp in a green rural landscape" },
                        { title: text("domain2Title"), points: strings("domain2Points"), image: "WhatsApp Image 2026-10-17 at 22.04.48.jpeg", alt: "Cocoa pods growing among tropical leaves" },
                        { title: text("domain3Title"), points: strings("domain3Points"), image: "WhatsApp Image 2026-10-17 at 22.04.47.jpeg", alt: "River flowing through a forest" },
                        { title: text("domain4Title"), points: strings("domain4Points"), image: "WhatsApp Image 2026-10-17 at 22.04.52s.jpeg", alt: "Young plants growing in a community nursery" },
                        { title: text("domain5Title"), points: strings("domain5Points"), image: "WhatsApp Image 2026-10-17 at 22.04.51r.jpeg", alt: "Cacao pods growing in a diverse forest garden" },
                      ].map((domain, domainIndex) => (
                        <article key={domain.title} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                          <div className="relative h-36 overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${domain.image}`} alt={domain.alt} />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                            <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                              <span className="mr-2 text-primary">0{domainIndex + 1}</span>{domain.title}
                            </h3>
                          </div>
                          <ul className="space-y-3 p-5 text-sm leading-relaxed text-foreground/85">
                            {domain.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-3">
                                <span className="mt-0.5 font-bold text-primary" aria-hidden="true">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "academyPage" && index === 0 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {[
                        { title: text("offer1Title"), points: strings("offer1Points"), image: "academy-training.jpg", alt: "Young people participating in a community workshop" },
                        { title: text("offer2Title"), points: strings("offer2Points"), image: "academy-digital.jpg", alt: "HOJA Academy participants learning together" },
                        { title: text("offer3Title"), points: strings("offer3Points"), image: "academy-incubation.jpg", alt: "Training and learning center" },
                        { title: text("offer4Title"), points: strings("offer4Points"), image: "academy-mentorship.jpg", alt: "Community education center" },
                      ].map((offer, offerIndex) => (
                        <article key={offer.title} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                          <div className="relative h-36 overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${offer.image}`} alt={offer.alt} />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                            <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                              <span className="mr-2 text-primary">0{offerIndex + 1}</span>{offer.title}
                            </h3>
                          </div>
                          <ul className="space-y-3 p-5 text-sm leading-relaxed text-foreground/85">
                            {offer.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-3">
                                <span className="mt-0.5 font-bold text-primary" aria-hidden="true">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "academyPage" && index === 1 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { image: "academy-training.jpg", alt: "Young people at a community learning session" },
                        { image: "academy-digital.jpg", alt: "Women participating in a training workshop" },
                        { image: "WhatsApp Image 2026-10-17 at 22.04.52s.jpeg", alt: "Seedlings growing in a nursery" },
                        { image: "HOJA-YOUNG-PARLIAMENTARIAT-OF-KENYOU.jpg", alt: "Young community leaders gathered together" },
                      ].map((visual, audienceIndex) => {
                        const audience = strings("targetPoints")[audienceIndex];
                        if (!audience) return null;
                        return (
                          <article key={audienceIndex} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                            <div className="h-36 overflow-hidden">
                              <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${visual.image}`} alt={visual.alt} />
                            </div>
                            <div className="flex gap-4 p-5">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">0{audienceIndex + 1}</span>
                              <p className="text-sm leading-relaxed text-foreground/85">{audience}</p>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : pageKey === "academyPage" && index === 2 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {strings("results").map((result, resultIndex) => (
                        <article key={resultIndex} className="relative flex min-h-36 items-start gap-4 overflow-hidden rounded-sm border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md">
                          <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
                          <span className="[font-family:questa,_serif] text-3xl font-bold text-primary/70">0{resultIndex + 1}</span>
                          <p className="pt-1 text-sm leading-relaxed text-foreground/85">{result}</p>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "academyPage" && index === 3 ? (
                    <article className="relative overflow-hidden rounded-sm border border-border bg-surface-2 p-6 shadow-md">
                      <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary" aria-hidden="true">→</span>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{t.common.language === "Français" ? "Candidatures ouvertes" : "Applications open"}</span>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/90">{text("howToApplyText")}</p>
                    </article>
                  ) : pageKey === "farmPage" && index === 0 ? (
                    <article className="overflow-hidden rounded-sm border border-border bg-background shadow-md">
                      <div className="relative h-44 overflow-hidden">
                        <img className="h-full w-full object-cover" src="/assets/hoja/photos/WhatsApp Image 2026-10-17 at 22.04.50.jpeg" alt="Productive trees and crops growing together in a green landscape" />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent" />
                        <h3 className="absolute bottom-0 left-0 right-0 p-5 text-xl font-bold text-background">{text("approachTitle")}</h3>
                      </div>
                      <p className="p-6 text-base leading-relaxed text-foreground/85">{text("approachText")}</p>
                    </article>
                  ) : pageKey === "farmPage" && index === 1 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {[
                        { title: text("domain1Title"), points: strings("domain1Points"), image: "WhatsApp Image 2026-10-17 at 22.04.52s.jpeg", alt: "Young plants growing in a community nursery" },
                        { title: text("domain2Title"), points: strings("domain2Points"), image: "IMG_7752-1-1-scaled.jpg", alt: "HOJA Network supporting a community member" },
                        { title: text("domain3Title"), points: strings("domain3Points"), image: "academy-training.jpg", alt: "Young people participating in a community workshop" },
                        { title: text("domain4Title"), points: strings("domain4Points"), image: "WhatsApp-Image-2025-09-29-at-16.20.52_f70ab64f.jpg", alt: "Schoolchildren gathered outside their classroom" },
                      ].map((domain, domainIndex) => (
                        <article key={domain.title} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                          <div className="relative h-36 overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${domain.image}`} alt={domain.alt} />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                            <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                              <span className="mr-2 text-primary">0{domainIndex + 1}</span>{domain.title}
                            </h3>
                          </div>
                          <ul className="space-y-3 p-5 text-sm leading-relaxed text-foreground/85">
                            {domain.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-3">
                                <span className="mt-0.5 font-bold text-primary" aria-hidden="true">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "farmPage" && index === 2 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {strings("impactPoints").map((impact, impactIndex) => (
                        <article key={impactIndex} className="relative flex min-h-32 items-start gap-4 overflow-hidden rounded-sm border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md">
                          <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
                          <span className="[font-family:questa,_serif] text-3xl font-bold text-primary/70">0{impactIndex + 1}</span>
                          <p className="pt-1 text-sm leading-relaxed text-foreground/85">{impact}</p>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "moringaPage" && index === 0 ? (
                    <div className="space-y-5">
                      <p className="rounded-sm border border-border border-l-4 border-l-primary bg-surface-2 p-5 text-base leading-relaxed text-foreground/85">{text("whyIntro")}</p>
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                        {[
                          { title: text("benefit1Title"), description: text("benefit1Desc"), image: "moringa-tree.jpg", alt: "A young moringa tree with fresh leaves" },
                          { title: text("benefit2Title"), description: text("benefit2Desc"), image: "moringa-nursery.jpg", alt: "Rows of young moringa seedlings in a nursery" },
                          { title: text("benefit3Title"), description: text("benefit3Desc"), image: "moringa-pods.jpeg", alt: "Moringa pods growing on a tree" },
                          { title: text("benefit4Title"), description: text("benefit4Desc"), image: "WhatsApp Image 2026-10-17 at 22.04.52s.jpeg", alt: "Young plants ready for local cultivation" },
                        ].map((benefit, benefitIndex) => (
                          <article key={benefit.title} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                            <div className="relative h-36 overflow-hidden">
                              <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${benefit.image}`} alt={benefit.alt} />
                              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                              <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                                <span className="mr-2 text-primary">0{benefitIndex + 1}</span>{benefit.title}
                              </h3>
                            </div>
                            <p className="p-5 text-sm leading-relaxed text-foreground/85">{benefit.description}</p>
                          </article>
                        ))}
                      </div>
                    </div>
                  ) : pageKey === "moringaPage" && index === 1 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {[
                        { title: text("step1Title"), points: strings("step1Points"), image: "moringa-nursery.jpg", alt: "Moringa seedlings growing in a nursery" },
                        { title: text("step2Title"), points: strings("step2Points"), image: "academy-schoolchildren.png", alt: "Children gathered at a local school" },
                        { title: text("step3Title"), points: strings("step3Points"), image: "moringa-pods.jpeg", alt: "Moringa pods on a productive tree" },
                        { title: text("step4Title"), points: strings("step4Points"), image: "IMG_7211.jpg", alt: "Community members sharing knowledge at a workshop" },
                      ].map((step, stepIndex) => (
                        <article key={step.title} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                          <div className="relative h-36 overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${step.image}`} alt={step.alt} />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                            <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                              <span className="mr-2 text-primary">0{stepIndex + 1}</span>{step.title.replace(/^\d+\.\s*/, "")}
                            </h3>
                          </div>
                          <ul className="space-y-3 p-5 text-sm leading-relaxed text-foreground/85">
                            {step.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-3">
                                <span className="mt-0.5 font-bold text-primary" aria-hidden="true">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "moringaPage" && index === 2 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {strings("impactPoints").map((impact, impactIndex) => (
                        <article key={impactIndex} className="relative flex min-h-32 items-start gap-4 overflow-hidden rounded-sm border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md">
                          <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
                          <span className="[font-family:questa,_serif] text-3xl font-bold text-primary/70">0{impactIndex + 1}</span>
                          <p className="pt-1 text-sm leading-relaxed text-foreground/85">{impact}</p>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "moringaPage" && index === 3 ? (
                    <article className="relative overflow-hidden rounded-sm border border-border bg-surface-2 p-6 shadow-md">
                      <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary" aria-hidden="true">i</span>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{t.common.language === "Français" ? "Information nutritionnelle" : "Nutrition information"}</span>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/90">{text("importantNoticeText")}</p>
                    </article>
                  ) : pageKey === "greenEconomyPage" && index === 1 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {[
                        { image: "WhatsApp Image 2026-10-17 at 22.04.47.jpeg", alt: "River and surrounding forest" },
                        { image: "IMG_0525.jpg", alt: "Young people taking part in a practical training" },
                        { image: "IMG_7752-1-1-scaled.jpg", alt: "HOJA Network supporting a community member" },
                        { image: "IMG_0531.jpg", alt: "Entrepreneurs working together" },
                        { image: "WhatsApp Image 2026-10-17 at 22.04.52s.jpeg", alt: "Young plants growing in a community nursery" },
                      ].map((visual, actionIndex) => {
                        const action = fieldActions[actionIndex];
                        if (!action) return null;
                        return (
                          <article key={action.step} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                            <div className="relative h-36 overflow-hidden">
                              <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={`/assets/hoja/photos/${visual.image}`} alt={visual.alt} />
                              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                              <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                                <span className="mr-2 text-primary">0{actionIndex + 1}</span>{action.step}
                              </h3>
                            </div>
                            <p className="p-5 text-sm leading-relaxed text-foreground/85">{action.description}</p>
                          </article>
                        );
                      })}
                    </div>
                  ) : pageKey === "impactPage" && index === 0 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {[
                        { title: text("dim1Title"), points: strings("dim1Points"), image: "IMG_0531.jpg", alt: "Entrepreneurs learning together" },
                        { title: text("dim2Title"), points: strings("dim2Points"), image: "IMG_7752-1-1-scaled.jpg", alt: "HOJA Network supporting a community member" },
                        { title: text("dim3Title"), points: strings("dim3Points"), image: "WhatsApp Image 2026-10-17 at 22.04.50.jpeg", alt: "Agroforestry and restored green land" },
                      ].map((dimension, dimensionIndex) => (
                        <article key={dimension.title} className="overflow-hidden rounded-sm border border-border bg-background shadow-md transition-shadow hover:shadow-lg">
                          <div className="relative h-36 overflow-hidden">
                            <img
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              src={`/assets/hoja/photos/${dimension.image}`}
                              alt={dimension.alt}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/15 to-transparent" />
                            <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-background">
                              <span className="mr-2 text-primary">0{dimensionIndex + 1}</span>{dimension.title.replace(/^\d+\.\s*/, "")}
                            </h3>
                          </div>
                          <ul className="space-y-3 p-5 text-sm leading-relaxed text-foreground/85">
                            {dimension.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-3">
                                <span className="mt-0.5 font-bold text-primary" aria-hidden="true">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  ) : pageKey === "impactPage" && index === 1 ? (
                    <article className="relative overflow-hidden rounded-sm border border-border bg-surface-2 p-6 shadow-md">
                      <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary" aria-hidden="true">✓</span>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{t.common.language === "Français" ? "Résultats vérifiés" : "Verified results"}</span>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/90">{text("transparencyText")}</p>
                    </article>
                  ) : pageKey === "impactPage" && index === 2 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {strings("targets").map((target, targetIndex) => {
                        const metric = target.match(/^[\d,\s]+/);
                        const value = metric?.[0].trim() ?? "";
                        const description = metric ? target.slice(metric[0].length).trim() : target;
                        return (
                          <article key={targetIndex} className="relative overflow-hidden rounded-sm border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md">
                            <div className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
                            <p className="[font-family:questa,_serif] text-3xl font-bold text-accent">{value}</p>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{description}</p>
                          </article>
                        );
                      })}
                    </div>
                  ) : section.lists?.map((key) => {
                    const items = strings(key);
                    return items.length ? <ul key={key} className="space-y-3 list-disc pl-6 text-base leading-relaxed">{items.map((item, itemIndex) => <li key={`${key}-${itemIndex}`}>{item}</li>)}</ul> : null;
                  })}
                </section>
              ))}
              <section className="p-6 bg-surface-2 rounded-sm border border-border">
                <h2 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-4">{text("ctaTitle")}</h2>
                <Link href={buttonHref} className="inline-block py-3 px-6 text-sm font-bold uppercase tracking-wider bg-primary text-background">{text("ctaButton")}</Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
