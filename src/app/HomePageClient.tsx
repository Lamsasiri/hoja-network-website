"use client";
import "./ditto.css";
import MediaCard from "./components/media-card";
import MediaCard2 from "./components/media-card2";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const partnerLogos = [
  { src: "usiu-africa.png", alt: "United States International University-Africa" },
  { src: "serano-africa.png", alt: "Serano Africa" },
  { src: "jm-busha-54.png", alt: "JM Busha 54 — Peace and Unity in Africa" },
  { src: "africa-university.png", alt: "Africa University" },
  { src: "jma.png", alt: "Jeunesse Active RDC" },
  { src: "asenti.png", alt: "Asenti" },
  { src: "bia-community.png", alt: "BIA Community" },
  { src: "ravec.png", alt: "RAVEC — Tech. Autonomisation de la femme" },
  { src: "youth-survival-organization.png", alt: "Youth Survival Organization Tanzania" },
];

function PartnerLogoTicker() {
  return (
    <div
      className="w-full overflow-hidden py-4"
      aria-label="Logos de nos partenaires"
    >
      <div className="hoja-partner-ticker flex w-max items-center" aria-label="Logos de nos partenaires" aria-live="off">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-4 pr-4" role="list" aria-hidden={copy === 1}>
            {partnerLogos.map((logo) => (
              <div key={`${logo.src}-${copy}`} className="flex h-24 w-44 shrink-0 items-center justify-center px-2" role="listitem">
                <img className="h-16 w-full object-contain opacity-100" src={`/assets/hoja/partners/${logo.src}`} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


export default function HomePageClient({ posts }: { posts: import("../lib/wordpress").WPPost[] }) {
  const { t } = useLanguage();

  const impactStats = [
    { value: "10K+", description: t.home.keyFigures.line1, color: "bg-accent", surface: "bg-surface-3" },
    { value: "1K+", description: t.home.keyFigures.line2, color: "bg-color-008", surface: "bg-surface-2" },
    { value: "500", description: t.home.keyFigures.line3, color: "bg-color-002", surface: "bg-surface-4" },
    { value: "1K", description: t.home.keyFigures.line4, color: "bg-[#9A3412]", surface: "bg-[#FFF7ED]" },
  ];

  const MediaCard_data = [
    { alt: t.home.whyHoja.card1Title, imgSrc: "/assets/hoja/photos/home-economic-empowerment.webp", srcSet: "/assets/hoja/photos/home-economic-empowerment.webp 414w", href: "/impact", title: t.home.whyHoja.card1Title, description: t.home.whyHoja.card1Text },
    { alt: t.home.whyHoja.card2Title, imgSrc: "/assets/hoja/photos/home-entrepreneurship.webp", srcSet: "/assets/hoja/photos/home-entrepreneurship.webp 1200w", href: "/hoja-academy", title: t.home.whyHoja.card2Title, description: t.home.whyHoja.card2Text },
    { alt: t.home.whyHoja.card3Title, imgSrc: "/assets/hoja/photos/home-climate-action.webp", srcSet: "/assets/hoja/photos/home-climate-action.webp 1024w", href: "/green-economy", title: t.home.whyHoja.card3Title, description: t.home.whyHoja.card3Text },
    { alt: t.home.whyHoja.card4Title, imgSrc: "/assets/hoja/photos/home-education-innovation.webp", srcSet: "/assets/hoja/photos/home-education-innovation.webp 1200w", href: "/hoja-academy", title: t.home.whyHoja.card4Title, description: t.home.whyHoja.card4Text },
  ];

const MediaCard_cids: string[][] = [
    ["n65", "n66", "n67", "n68", "n69", "n70", "n71", "n72", "n73", "n74", "n75"],
    ["n76", "n77", "n78", "n79", "n80", "n81", "n82", "n83", "n84", "n85", "n86"],
    ["n87", "n88", "n89", "n90", "n91", "n92", "n93", "n94", "n95", "n96", "n97"],
    ["n98", "n99", "n100", "n101", "n102", "n103", "n104", "n105", "n106", "n107", "n108"]
];

const MediaCard2_cids: string[][] = [
    ["n172", "n173", "n174", "n175", "n176", "n177", "n178", "n179", "n180", "n181", "n182", "n183"],
    ["n184", "n185", "n186", "n187", "n188", "n189", "n190", "n191", "n192", "n193", "n194", "n195"],
    ["n196", "n197", "n198", "n199", "n200", "n201", "n202", "n203", "n204", "n205", "n206", "n207"],
    ["n208", "n209", "n210", "n211", "n212", "n213", "n214", "n215", "n216", "n217", "n218", "n219"],
    ["n220", "n221", "n222", "n223", "n224", "n225", "n226", "n227", "n228", "n229", "n230", "n231"],
    ["n232", "n233", "n234", "n235", "n236", "n237", "n238", "n239", "n240", "n241", "n242", "n243"]
];

const MediaCard_styles = [
    { className: "my-6", className2: "before:top-[30.4375rem] before:bg-color-009 max-md:before:top-[32.1875rem]" },
    { className: "mt-12 mb-6", className2: "-mb-8 max-lg:mb-0 before:top-[30.9375rem] before:bg-accent max-md:before:top-[33.6875rem]" },
    { className: "my-6", className2: "before:top-[30.4375rem] before:bg-color-011 max-md:before:top-[33.6875rem]", className3: "h-full" },
    { className: "mt-12 mb-6", className2: "-mb-8 max-lg:mb-0 before:top-[30.9375rem] before:bg-color-008 max-md:before:top-[32.1875rem]" }
];

const MediaCard2_styles = [
    {  },
    {  },
    {  },
    { className: "w-full" },
    {  },
    { className: "w-full" }
];

  return (
    <>
      <main className="block mt-[10.3125rem] bg-background max-lg:mt-0 after:content-[''] after:table after:w-0 after:h-0" data-cid="n48" id="main">
        {/* Hero Section */}
        <section className="h-170 min-h-170 flex relative py-12 flex-wrap items-center overflow-hidden bg-color-009 max-md:h-auto max-lg:pb-8 max-lg:min-h-0 max-lg:pt-0 md:max-lg:h-[966px] 2xl:h-229.5 2xl:min-h-229.5" data-cid="n49">
          <div className="w-240 h-170 block absolute top-0 left-80 min-w-0 max-md:w-full max-md:h-[263.7px] max-lg:right-0 max-lg:static max-lg:left-auto md:max-lg:w-192 md:max-lg:h-135 2xl:w-360 2xl:h-229.5 2xl:left-120" data-cid="n50">
            <video className="w-full h-170 block max-w-full overflow-clip object-cover text-center max-md:h-52 md:max-lg:h-135 2xl:h-229.5" data-cid="n51" autoPlay muted loop playsInline preload="metadata" poster="/assets/hoja/photos/home-hero-great-lakes.webp" aria-hidden="true">
              <source src="/assets/hoja/videos/homepage-hero-virunga-zoom.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4" data-cid="n52">
            <div className="w-[34.2rem] block z-2 mr-[41.8rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:mt-8 max-md:mr-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]" data-cid="n53">
              <div className="block p-6 text-background bg-primary" data-cid="n54">
                <h1 className="block [font-family:questa,_serif] text-[2.25rem] leading-[2.75rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]" data-cid="n55" data-component="heading">
                  {t.home.hero.title}
                </h1>
              </div>
              <div className="block p-6" data-cid="n56">
                <p className="block text-xl leading-6.5 font-medium text-foreground" data-cid="n57">
                  {t.home.hero.whatWeDoLabel}
                </p>
                <p className="block text-base leading-6 mt-3 text-muted-foreground">
                  {t.home.hero.whatWeDoText}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link className="h-[48.3px] inline-flex items-center justify-center py-[10.7px] px-6 text-background text-base font-bold bg-accent hover:bg-accent/90 transition-colors rounded-sm" href="/impact">
                    {t.home.hero.ctaExplore}
                  </Link>
                  <Link className="h-[48.3px] inline-flex items-center justify-center py-[10.7px] px-6 text-foreground text-base font-bold border-2 border-accent hover:bg-surface-2 transition-colors rounded-sm" href="/get-involved/partner-with-us">
                    {t.home.hero.ctaPartner}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why HOJA Network — four reference cards */}
        <section className="block relative pt-12 pb-20 max-lg:pt-8" data-cid="n59">
          <header className="block relative z-2 max-w-320 mb-8 px-8 text-center mx-auto max-md:px-4">
            <h2 className="block max-w-240 mx-auto py-8 text-background [font-family:questa,_serif] text-[2.2rem] leading-[2.75rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem] max-md:pb-0">
              {t.home.whyHoja.title}
            </h2>
          </header>
          <div className="h-[38.1875rem] block absolute top-0 inset-x-0 z-0 bg-[var(--primary-text)] max-md:h-[53.4rem] md:max-lg:h-[40rem]" />
          <div className="block relative z-2 max-w-320 px-8 mx-auto max-md:px-4">
            <div className="w-312 flex relative -mx-4 flex-wrap max-md:w-full max-md:mx-0 md:max-lg:w-180 md:max-lg:-mx-2">
              {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
            </div>
          </div>
          <div className="h-[9.55rem] block absolute bottom-0 inset-x-0 z-0 bg-surface max-md:h-[26.7rem] md:max-lg:h-[13.4625rem]" />
        </section>

        {/* Field Feature Section */}
        <section className="h-180 min-h-180 flex relative py-12 flex-wrap items-center overflow-hidden bg-color-011 max-md:h-auto max-lg:pb-8 max-lg:min-h-0 max-lg:pt-0 md:max-lg:h-[53.425rem] 2xl:h-243 2xl:min-h-243" data-cid="n110">
          <div className="w-240 h-180 block absolute top-0 left-0 min-w-0 max-md:w-full max-md:h-64 max-lg:static md:max-lg:w-192 md:max-lg:h-135 2xl:w-360 2xl:h-243" data-cid="n111">
            <img className="w-full h-180 block max-w-full overflow-clip object-cover text-center max-md:h-64 md:max-lg:h-135 2xl:h-243" data-cid="n112" data-component="image" alt="HOJA Network team member with a community member" src="/assets/hoja/photos/home-local-roots.webp" />
          </div>
          <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4" data-cid="n113">
            <div className="w-[32.5rem] block z-2 -mt-12.5 ml-[43.5rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:ml-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]" data-cid="n114">
              <div className="block p-6 text-background bg-accent" data-cid="n115">
                <h2 className="block [font-family:questa,_serif] text-[1.9375rem] leading-[2.375rem] [overflow-wrap:break-word]" data-cid="n116" data-component="heading">
                  <span className="block mb-2 [font-family:proxima-nova,_sans-serif] text-sm uppercase tracking-wider font-bold text-primary" data-cid="n117">
                    {t.home.keyFigures.title}
                  </span>
                  {" "}{t.home.localRoots.title}{" "}
                </h2>
              </div>
              <div className="block p-6" data-cid="n118">
                <p className="block text-foreground leading-relaxed" data-cid="n119">
                  {t.home.localRoots.description}
                </p>
                <div className="mt-6 flex gap-4">
                  <Link className="inline-block py-3 px-6 text-sm font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent/90 transition-colors rounded-sm" href="/impact">
                    {t.home.hero.ctaExplore} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Anchors */}
        <section className="block relative py-12 overflow-hidden max-lg:py-8" data-cid="n121">
          <header className="block relative z-11 max-w-320 pt-8 pb-12 text-center mx-auto max-md:pb-6" data-cid="n122">
            <h2 className="block text-[var(--primary-text)] [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]" data-cid="n123" data-component="heading">
              {t.home.approach.title}
            </h2>
            <p className="w-180 block max-w-full mx-auto pt-2 pb-4 text-foreground/80 text-base" data-cid="n124">
              {t.home.approach.description}
            </p>
          </header>
          <div className="flex relative z-11 max-w-320 px-8 flex-wrap items-stretch mx-auto max-md:px-4" data-cid="n125">
            <div className="block relative max-w-[37%] basis-[37%] min-h-[26rem] order-[1] max-md:max-w-full max-md:basis-full max-md:min-h-64 max-md:mb-5" data-cid="n126">
              <img className="w-full h-full block rounded-sm max-w-full overflow-clip object-cover text-center min-h-80 max-md:min-h-64" data-cid="n127" data-component="image" alt="Waterfall and forested landscape" src="/assets/hoja/photos/home-impact.webp" />
            </div>
            <div className="relative z-10 -ml-24 max-w-[70%] basis-[70%] py-4 self-center order-[2] max-md:ml-0 max-md:max-w-full max-md:basis-full max-md:py-0">
              <ul className="flex flex-col gap-4 [list-style-type:none] list-outside max-md:gap-3">
                {impactStats.map((stat, index) => {
                  const numberOnRight = index % 2 === 1;
                  return (
                    <li key={stat.value + index} className={`flex min-h-28 items-stretch overflow-hidden rounded-md shadow-md transition-transform duration-300 hover:-translate-y-0.5 ${stat.surface} ${numberOnRight ? "flex-row-reverse" : ""}`}>
                      <div
                        className={`flex w-[28%] min-w-24 shrink-0 items-center justify-center px-3 py-4 text-background max-md:w-[30%] ${stat.color}`}
                        style={{ clipPath: numberOnRight ? "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
                      >
                        <span className="[font-family:questa,_serif] text-4xl font-extrabold leading-none text-background md:text-5xl">{stat.value}</span>
                      </div>
                      <div className="flex flex-1 items-center p-5 text-left text-sm leading-relaxed text-foreground/90 md:p-6 md:text-base">
                        {stat.description}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 px-2 text-sm leading-relaxed text-foreground/80">{t.home.keyFigures.periodNote} <Link className="font-bold text-[var(--primary-text)] underline underline-offset-2" href="/contact">{t.common.language === "Français" ? "Contacter HOJA" : "Contact HOJA"}</Link></p>
            </div>
          </div>
        </section>

        {/* Building Capacity Section */}
        <section className="block relative py-16 bg-[var(--primary-text)] text-background" data-cid="n154">
          <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4">
            <div className="block max-w-[45%] self-center basis-[45%] max-lg:max-w-full max-lg:basis-full max-lg:order-[2]" data-cid="n156">
            <img className="w-full h-80 block max-w-full overflow-clip text-center object-cover rounded-sm shadow-md" data-cid="n157" data-component="image" alt="Agroforesterie et régénération des sols par HOJA Network" src="/assets/hoja/photos/home-green-economy.webp" />
            </div>
            <div className="block max-w-[55%] px-10 self-center basis-[55%] text-background max-lg:max-w-full max-lg:mb-8 max-lg:basis-full max-lg:px-0" data-cid="n158">
              <h2 className="block [font-family:questa,_serif] text-[2.2rem] leading-[2.75rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]" data-cid="n159" data-component="heading">
                {t.home.capacities.title}
              </h2>
              <p className="block mt-4 text-base leading-relaxed text-background/90">
                {t.home.capacities.description}
              </p>
              <div className="mt-6">
                <Link className="inline-block py-3 px-6 text-sm font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent/90 transition-colors rounded-sm" href="/get-involved/partner-with-us">
                  {t.home.capacities.cta} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Verified partner logos from the HOJA WordPress media library */}
        <section className="block relative py-12 overflow-hidden" data-cid="partners-ecosystem">
          <header className="block max-w-320 px-8 mb-6 text-center mx-auto max-md:px-4">
            <h2 className="text-[var(--primary-text)] [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] max-lg:text-[1.75rem]">{t.home.partners.title}</h2>
          </header>
          <PartnerLogoTicker />
        </section>

        {/* News Spotlight & Field Stories */}
        <section className="block relative py-12 overflow-hidden max-lg:py-8" data-cid="n167">
          <header className="block relative z-11 max-w-320 mb-8 px-8 text-center mx-auto max-md:px-4" data-cid="n168">
            <h2 className="block text-[var(--primary-text)] [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]" data-cid="n169" data-component="heading">
              {t.home.news.title}
            </h2>
            <p className="text-foreground/75 mt-2">
              {t.home.news.description}
            </p>
          </header>
          <div className="block relative z-11 max-w-320 px-8 mx-auto max-md:px-4" data-cid="n170">
            <div className="w-312 flex relative -mx-4 flex-wrap max-md:w-full max-md:mx-0 md:max-lg:w-180 md:max-lg:-mx-2" data-cid="n171">
              {posts.slice(0, 3).map((post, i) => <MediaCard2 key={post.id} d={{ alt: post.featuredMediaAlt || post.title, imgSrc: post.featuredMediaUrl || "", srcSet: post.featuredMediaUrl || "", title: post.title, description: post.excerpt, ariaLabel: t.home.news.readArticle, href: `/news/${post.slug}` }} cids={MediaCard2_cids[i]} styles={{}} />)}
              {posts.length === 0 && <p className="w-full py-6 text-center text-foreground/80">{t.common.language === "Français" ? "Aucune actualité récente disponible. Consultez toutes les actualités." : "No recent updates are available. Browse all news."} <Link href="/news" className="font-bold text-[var(--primary-text)] underline">{t.common.language === "Français" ? "Toutes les actualités" : "All news"}</Link></p>}
            </div>
          </div>
        </section>
        <div className="block" data-cid="n244" />
      </main>
    </>
  );
}
