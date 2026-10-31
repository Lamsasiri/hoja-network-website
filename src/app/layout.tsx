import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "https://hojanetwork.org"),
  "title": {
    "default": "HOJA Network — Nature. Clean Energy. Green Enterprise.",
    "template": "%s | HOJA Network",
  },
  "description": "HOJA Network is an African grassroots non-profit organization operating at the intersection of nature protection, clean energy, green entrepreneurship, and community resilience in Eastern DRC and the Great Lakes.",
  "robots": "max-snippet:-1,max-image-preview:standard,max-video-preview:-1",
  "openGraph": {
    "title": "HOJA Network — Nature. Clean Energy. Green Enterprise.",
    "description": "HOJA Network is an African grassroots non-profit organization operating at the intersection of nature protection, clean energy, green entrepreneurship, and community resilience in Eastern DRC and the Great Lakes.",
    "type": "website",
    "siteName": "HOJA Network",
    "images": [
      "/assets/hoja/logo_hoja_horizontal.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "HOJA Network — Nature. Clean Energy. Green Enterprise.",
    "description": "HOJA Network is an African grassroots non-profit organization operating at the intersection of nature protection, clean energy, green entrepreneurship, and community resilience in Eastern DRC and the Great Lakes.",
    "images": [
      "/assets/hoja/logo_hoja_horizontal.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/hoja/favicon_hoja_32.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/hoja/favicon_hoja_64.png",
        "type": "image/png",
        "sizes": "64x64"
      }
    ],
    "shortcut": [
      {
        "url": "/assets/hoja/favicon_hoja_32.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#21A87D"
};


import { cn } from "../lib/utils";
import ClientProviders from "../components/ClientProviders";
import LanguageSwitcher from "../components/LanguageSwitcher";
import LanguageText from "../components/LanguageText";
import LocalizedSearchForm from "../components/LocalizedSearchForm";

type TileData = {
  value: string;
  text: string;
  selected?: boolean;
};

type ListRowData = {
  href: string;
  label: string;
};

type Tile2Data = {
  description: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
  description8: string;
  description9: string;
  description10: string;
};

type Tile2Styles = {
  className?: string;
  className2?: string;
  className3?: string;
  className4?: string;
  className5?: string;
  className6?: string;
};

type ListRow2Data = {
  href: string;
  target?: string;
  label: string;
  labelFr?: string;
};

type ListRow2Styles = {
  className?: string;
};

type ListRow3Data = {
  href: string;
  label: string;
  labelFr?: string;
};

type TextLinkData = {
  href: string;
  text: string;
  textFr?: string;
  label: string;
  labelFr?: string;
};

function Tile({ d, cids }: { d: TileData; cids: string[] }) {
  return (
    <option data-cid={cids[0]} className="box-content min-h-6 block min-w-6 pb-px px-0.5 items-center gap-[0.4375rem] whitespace-nowrap" value={d.value} selected={d.selected}>
      {d.text}
    </option>
  );
}

function ListRow({ d, cids }: { d: ListRowData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item relative float-left shrink-0">
      <a data-cid={cids[1]} className="block whitespace-nowrap mx-1.5 lg:mx-2 xl:mx-3 2xl:mx-4 py-2 text-primary text-[0.9rem] lg:text-[0.92rem] xl:text-[1.05rem] 2xl:text-[1.15rem] font-bold leading-[2.0625rem] cursor-pointer hover:text-accent transition-colors" href={d.href}>
        {d.href === "/who-we-are/our-network" ? <LanguageText fr="Notre réseau" en="Our Network" /> : d.href === "/green-economy" ? <LanguageText fr="Économie verte" en="Green Economy" /> : d.href === "/hoja-academy" ? "HOJA Academy" : d.href === "/hoja-farm" ? "HOJA Farm" : d.label}
      </a>
    </li>
  );
}

function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("block max-w-[21.666%] pr-4 basis-[21.666%] md:max-lg:max-w-[33.33%] md:max-lg:basis-1/3", styles.className)}>
      <p data-cid={cids[1]} className={cn("block md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]", styles.className2)}>
        {d.description}
        <span data-cid={cids[2]} className="inline text-primary font-bold">
          {d.description2}
        </span>
      </p>
      <p data-cid={cids[3]} className={cn("block mt-[0.8rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]", styles.className3)}>
        {d.description3}
        <span data-cid={cids[4]} className="inline text-primary font-bold">
          {d.description4}
        </span>
      </p>
      <p data-cid={cids[5]} className={cn("block mt-[0.8rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]", styles.className4)}>
        {d.description5}
        <span data-cid={cids[6]} className="inline text-primary font-bold">
          {d.description6}
        </span>
      </p>
      <p data-cid={cids[7]} className={cn("block mt-[0.8rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]", styles.className5)}>
        {d.description7}
        <span data-cid={cids[8]} className="inline text-primary font-bold">
          {d.description8}
        </span>
      </p>
      <p data-cid={cids[9]} className={cn("block mt-[0.8rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]", styles.className6)}>
        {d.description9}
        <span data-cid={cids[10]} className="inline text-primary font-bold">
          {d.description10}
        </span>
      </p>
    </div>
  );
}

function ListRow2({ d, cids, styles }: { d: ListRow2Data; cids: string[]; styles: ListRow2Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("block mx-auto max-lg:mx-0", styles.className)}>
      <a data-cid={cids[1]} className="inline cursor-pointer" href={d.href} target={d.target}>
        {d.labelFr ? <LanguageText fr={d.labelFr} en={d.label} /> : d.label}
      </a>
    </li>
  );
}

function ListRow3({ d, cids }: { d: ListRow3Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline-block pb-4 cursor-pointer max-lg:pb-2" href={d.href}>
        {d.labelFr ? <LanguageText fr={d.labelFr} en={d.label} /> : d.label}
      </a>
    </li>
  );
}

function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="block min-w-0 max-w-full relative py-2 pr-8 text-left cursor-pointer max-lg:w-full max-lg:basis-full max-lg:pr-0" href={d.href}>
      <b data-cid={cids[1]} className="inline font-bold">
        {d.textFr ? <LanguageText fr={d.textFr} en={d.text} /> : d.text}
      </b>
      {d.labelFr ? <LanguageText fr={d.labelFr} en={d.label} /> : d.label}
    </a>
  );
}

const Tile_data = [
    { value: "AUD", text: "AUD" },
    { value: "CAD", text: "CAD" },
    { value: "CHF", text: "CHF" },
    { value: "EUR", text: "EUR" },
    { value: "GBP", text: "GBP" },
    { value: "USD", selected: true, text: "USD" }
];

const ListRow_data = [
    { href: "/who-we-are/our-network", label: "Notre réseau" },
    { href: "/impact", label: "Impact" },
    { href: "/green-economy", label: "Économie verte" },
    { href: "/hoja-academy", label: "HOJA Academy" },
    { href: "/hoja-farm", label: "HOJA Farm" },
];

const UtilityNav_data = [
    { href: "/who-we-are", label: "Qui nous sommes", en: "Who we are" },
    { href: "/who-we-are/our-history", label: "Notre histoire", en: "Our history" },
    { href: "/news", label: "Actualités", en: "News & views" },
    { href: "/contact", label: "Contact", en: "Contact" },
];

const Tile2_data = [
    { description: "Community Supporter ", description2: "$50", description3: "Ashoka Africa Network ", description4: "Fellowship", description5: "Youth Training Advocate ", description6: "$250", description7: "HOJA EDUC Supporter ", description8: "$25", description9: "Women Enterprise Circle ", description10: "$100" },
    { description: "Community Hub ", description2: "$150", description3: "Regional Development Ally ", description4: "$80", description5: "Local Enterprise Partner ", description6: "$300", description7: "Youth Mentorship Supporter ", description8: "$45", description9: "Family Resilience Fund ", description10: "$75" },
    { description: "African Youth Supporter ", description2: "$120", description3: "Child Protection Ally ", description4: "$60", description5: "Community Solidarity ", description6: "$210", description7: "Local Community Leader ", description8: "$35", description9: "Vocational Skills Circle ", description10: "$180" }
];

const ListRow2_data = [
    { href: "/impact", target: "_self", label: "Our Impact", labelFr: "Notre impact" },
    { href: "/news", target: "_self", label: "News & Field Stories", labelFr: "Actualités et récits de terrain" },
    { href: "/who-we-are/leadership-and-governance", target: "_self", label: "Leadership & Team", labelFr: "Direction et équipe" },
    { href: "/contact", target: "_self", label: "Contact our offices", labelFr: "Contacter nos bureaux" }
];

const ListRow3_data = [
    { href: "/who-we-are/our-history", label: "Our History (Since 2017)", labelFr: "Notre histoire (depuis 2017)" },
    { href: "/impact", label: "Impact", labelFr: "Impact" },
    { href: "/who-we-are/our-network", label: "Our Network & Presence", labelFr: "Notre réseau et notre présence" },
    { href: "/contact", label: "Offices & Contact", labelFr: "Bureaux et contact" },
    { href: "/sitemap.xml", label: "Sitemap", labelFr: "Plan du site" }
];

const TextLink_data = [
    { href: "/contact", text: "HOJA Network DRC HQ", textFr: "Siège de HOJA Network en RDC", label: ", Goma, Rond-point des Banques (No. JUST.G.S.112/S-KV/0508/2021)", labelFr: ", Goma, Rond-point des Banques (n° JUST.G.S.112/S-KV/0508/2021)" },
    { href: "/who-we-are/our-network", text: "Regional Presence", textFr: "Présence régionale", label: ", Great Lakes Region & Western Rwanda (RGB No. 058/2024)", labelFr: ", région des Grands Lacs et ouest du Rwanda (RGB n° 058/2024)" },
    { href: "/what-we-do/renewable-energy-clean-cooking", text: "Pillar 1: Clean Cooking & Energy", textFr: "Pilier 1 : cuisson propre et énergie", label: ", Reducing Forest Pressure & Household Air Pollution", labelFr: ", réduire la pression sur les forêts et la pollution de l’air intérieur" },
    { href: "/what-we-do/biodiversity-virunga-protection", text: "Pillar 2: Virunga Landscape", textFr: "Pilier 2 : paysage des Virunga", label: ", Community Conservation & Buffer Zone Livelihoods", labelFr: ", conservation communautaire et activités durables dans les zones tampons" },
    { href: "/what-we-do/congo-basin-forest-climate", text: "Pillar 3: Congo Basin Forests", textFr: "Pilier 3 : forêts du bassin du Congo", label: ", Community Agroforestry & Climate Resilience", labelFr: ", agroforesterie communautaire et résilience climatique" },
    { href: "/what-we-do/green-entrepreneurship-circular-economy", text: "Pillar 4: Green Entrepreneurship", textFr: "Pilier 4 : entrepreneuriat vert", label: ", Waste Valorization & Circular Micro-Enterprises", labelFr: ", valorisation des déchets et microentreprises circulaires" },
    { href: "/what-we-do/responsible-digital-ai", text: "Responsible Digital & AI", textFr: "Numérique responsable et IA", label: ", Transversal Enabler with Systematic Human Oversight", labelFr: ", un levier transversal sous supervision humaine" },
    { href: "/what-we-do/green-great-lakes-initiative", text: "Hoja Green Great Lakes", textFr: "HOJA Green Great Lakes", label: ", Proposed Regional Framework Under Development", labelFr: ", cadre régional proposé et en cours d’élaboration" },
    { href: "/what-we-do/youth-empowerment", text: "Youth Economic Empowerment", textFr: "Autonomisation économique des jeunes", label: ", Practical Vocational Training & Enterprise", labelFr: ", formations professionnelles pratiques et entrepreneuriat" },
    { href: "/what-we-do/women-empowerment", text: "Women's Economic Empowerment", textFr: "Autonomisation économique des femmes", label: ", Financial Literacy & Sustainable Enterprise", labelFr: ", éducation financière et entreprises durables" },
    { href: "/what-we-do/hoja-educ", text: "HOJA EDUC", textFr: "HOJA EDUC", label: ", Creative Learning & Environmental Appreciation for Children", labelFr: ", apprentissage créatif et sensibilisation des enfants à l’environnement" },
    { href: "/who-we-are", text: "Ashoka Africa Fellowship", textFr: "Ashoka Africa Fellowship", label: ", Social Entrepreneurship Affiliation", labelFr: ", réseau d’entrepreneuriat social" },
    { href: "/who-we-are", text: "Philosophy", textFr: "Notre philosophie", label: ", Solve Problems, Create Opportunities", labelFr: ", résoudre les problèmes et créer des opportunités" }
];

const Tile_cids: string[][] = [
    ["Ln20"],
    ["Ln21"],
    ["Ln22"],
    ["Ln23"],
    ["Ln24"],
    ["Ln25"]
];

const ListRow_cids: string[][] = [
    ["Ln40", "Ln41"],
    ["Ln42", "Ln43"],
    ["Ln44", "Ln45"],
    ["Ln46", "Ln47"],
    ["Ln48", "Ln49"],
    ["Ln50", "Ln51"]
];

const Tile2_cids: string[][] = [
    ["Ln251", "Ln252", "Ln253", "Ln254", "Ln255", "Ln256", "Ln257", "Ln258", "Ln259", "Ln260", "Ln261"],
    ["Ln262", "Ln263", "Ln264", "Ln265", "Ln266", "Ln267", "Ln268", "Ln269", "Ln270", "Ln271", "Ln272"],
    ["Ln273", "Ln274", "Ln275", "Ln276", "Ln277", "Ln278", "Ln279", "Ln280", "Ln281", "Ln282", "Ln283"]
];

const ListRow2_cids: string[][] = [
    ["Ln317", "Ln318"],
    ["Ln319", "Ln320"],
    ["Ln321", "Ln322"],
    ["Ln323", "Ln324"]
];

const ListRow3_cids: string[][] = [
    ["Ln326", "Ln327"],
    ["Ln328", "Ln329"],
    ["Ln330", "Ln331"],
    ["Ln332", "Ln333"],
    ["Ln334", "Ln335"]
];

const TextLink_cids: string[][] = [
    ["Ln344", "Ln345"],
    ["Ln346", "Ln347"],
    ["Ln348", "Ln349"],
    ["Ln350", "Ln351"],
    ["Ln352", "Ln353"],
    ["Ln354", "Ln355"],
    ["Ln356", "Ln357"],
    ["Ln358", "Ln359"],
    ["Ln360", "Ln361"],
    ["Ln362", "Ln363"],
    ["Ln364", "Ln365"],
    ["Ln366", "Ln367"],
    ["Ln368", "Ln369"]
];

const Tile2_styles = [
    { className: "max-md:max-w-[50%] max-md:mx-[5.3625rem] max-md:basis-1/2 max-md:pr-0", className2: "max-md:text-lg max-md:leading-[1.6875rem]", className3: "max-md:text-lg max-md:leading-[1.6875rem]", className4: "max-md:text-lg max-md:leading-[1.6875rem]", className5: "max-md:text-lg max-md:leading-[1.6875rem]", className6: "max-md:text-lg max-md:leading-[1.6875rem]" },
    { className: "max-md:hidden" },
    { className: "max-md:hidden" }
];

const ListRow2_styles = [
    {  },
    { className: "max-lg:mt-2" },
    { className: "max-lg:mt-2" },
    { className: "max-lg:mt-2" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${SITE_ORIGIN}/#/schema/WebSite`,
                "url": `${SITE_ORIGIN}/`,
                "name": "HOJA Network",
                "description": "Autonomiser les personnes. Créer des entreprises. Résoudre les problèmes.",
                "inLanguage": "fr-FR",
                "publisher": { "@id": `${SITE_ORIGIN}/#/schema/Organization` }
              },
              {
                "@type": "Organization",
                "@id": `${SITE_ORIGIN}/#/schema/Organization`,
                "name": "HOJA Network",
                "url": `${SITE_ORIGIN}/`,
                "logo": `${SITE_ORIGIN}/assets/hoja/logo_hoja_nav.png`,
                "description": "African regional organization dedicated to youth economic empowerment, women's entrepreneurship, child education, and humanitarian capacity building.",
                "foundingDate": "2017",
                "founder": {
                  "@type": "Person",
                  "name": "Isaac Bugeri"
                }
              }
            ]
          }) }}
        />
      </head>
      <body className="cn0" data-cid="n0">
        <ClientProviders>
        <a className="w-[10.15rem] h-[48.3px] block fixed -top-40 left-0 z-40 py-[10.7px] px-[1.2rem] overflow-hidden text-background text-lg font-bold leading-[1.6875rem] text-center bg-primary cursor-pointer before:content-[''] before:block before:absolute before:inset-y-0 before:-right-7.5 before:left-[7.3375rem] before:w-[4.6875rem] before:h-[48.3px] before:bg-clr-0 before:transform-[matrix(1,0,-1,1,0,0)] before:origin-[37.5px_24.1562px]" data-cid="Ln1" href="#main">
          Skip to content
        </a>
        <header className="h-[10.3125rem] flex fixed top-0 inset-x-0 z-40 flex-wrap bg-background max-md:h-[11.875rem] max-lg:relative max-lg:bottom-0 md:max-lg:h-[6.975rem] after:content-[''] after:table after:w-0 after:h-[7.0375rem] max-md:after:h-[10.875rem] md:max-lg:after:h-[5.975rem]" data-cid="Ln2">
          <div className="w-full block py-2 text-background bg-accent" data-cid="Ln3">
            <div className="flex relative z-11 max-w-320 px-8 flex-wrap justify-between items-center mx-auto max-lg:hidden" data-cid="Ln4">
              <nav className="block" data-cid="Ln5">
                <ul className="block text-right [list-style-type:none] list-outside after:content-[''] after:table after:w-0 after:h-0 max-lg:after:w-auto max-lg:after:h-auto" data-cid="Ln6">
                  <li className="inline-block" data-cid="Ln7">
                    <a className="block mr-4 py-2 text-sm font-bold leading-[1.375rem] cursor-pointer" data-cid="Ln8" href="/who-we-are">
                      <LanguageText fr="Qui nous sommes" en="Who we are" />
                    </a>
                  </li>
                  <li className="inline-block relative before:content-[''] before:block before:absolute before:inset-y-3.5 before:right-31.5 before:left-0 before:w-0.5 before:h-2.5 before:bg-background before:opacity-40 max-lg:before:hidden" data-cid="Ln9">
                    <a className="block mx-4 py-2 text-sm font-bold leading-[1.375rem] cursor-pointer" data-cid="Ln10" href="/who-we-are/our-history">
                      <LanguageText fr="Notre histoire" en="Our history" />
                    </a>
                  </li>
                  <li className="inline-block relative before:content-[''] before:block before:absolute before:inset-y-3.5 before:right-[7.5625rem] before:left-0 before:w-0.5 before:h-2.5 before:bg-background before:opacity-40 max-lg:before:hidden" data-cid="Ln11">
                    <a className="block mx-4 py-2 text-sm font-bold leading-[1.375rem] cursor-pointer" data-cid="Ln12" href="/news">
                      <LanguageText fr="Actualités" en="News & views" />
                    </a>
                  </li>
                  <li className="inline-block relative before:content-[''] before:block before:absolute before:inset-y-3.5 before:right-27.5 before:left-0 before:w-0.5 before:h-2.5 before:bg-background before:opacity-40 max-lg:before:hidden" data-cid="Ln15">
                    <a className="block mx-4 py-2 text-sm font-bold leading-[1.375rem] cursor-pointer hover:text-primary transition-colors" data-cid="Ln16" href="/contact">
                      <LanguageText fr="Contact" en="Contact" />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4" data-cid="Ln17">
                <LanguageSwitcher />
                <LocalizedSearchForm />
              </div>
            </div>
          </div>
          <div className="w-full flex relative z-11 max-w-320 py-[1.1rem] px-8 flex-wrap lg:flex-nowrap items-center mx-auto max-md:px-4" data-cid="Ln32">
            <a className="w-56 lg:w-40 xl:w-48 2xl:w-56 h-[4.4375rem] flex shrink-0 items-center cursor-pointer max-md:w-[21.4375rem] max-md:mb-4 max-lg:order-[1] md:max-lg:w-44 md:max-lg:h-13.5" data-cid="Ln33" href="/" id="logo">
              <img className="h-14 w-auto block max-w-full overflow-clip text-center max-md:mx-auto object-contain" data-cid="Ln34" alt="HOJA Network" src="/assets/hoja/logo_hoja_new.png" />
              <span className="w-px h-px block absolute -m-px overflow-hidden" data-cid="Ln35">
                HOJA Network
              </span>
            </a>
            <nav className="min-w-0 flex-1 flex justify-center items-center my-[0.6875rem] mx-4 lg:mx-2 xl:mx-3 2xl:mx-4 max-md:w-[10.5rem] max-md:mx-[2.3px] max-lg:order-[3] max-lg:my-0 md:max-lg:w-[7.1875rem] md:max-lg:ml-2.5 md:max-lg:mr-0" data-cid="Ln36">
              <input type="checkbox" id="rnav-open" className="peer hidden" aria-label="Toggle navigation menu" />
              <label className="hidden relative py-[10.7px] pr-10 pl-4 text-background text-xl font-bold leading-7.5 text-left uppercase bg-accent cursor-pointer max-lg:block max-md:pr-6 max-md:text-center max-md:[font-size:inherit] max-md:leading-[inherit]" data-cid="Ln37" aria-expanded="false" htmlFor="rnav-open" id="rnav-button">
                {"Menu "}
                <svg className="w-5 h-5 block absolute top-[calc(50%_-_10px)] right-4 text-background pointer-events-none" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul className="flex flex-nowrap items-center justify-center [list-style-type:none] list-outside max-lg:hidden after:content-[''] after:table after:w-0 after:h-0 max-lg:after:w-auto max-lg:after:h-auto" data-cid="Ln39">
                {ListRow_data.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} />)}
              </ul>
              {/* Responsive Mobile Drawer */}
              <div className="hidden peer-checked:max-lg:block fixed inset-x-0 top-[11.875rem] md:max-lg:top-[6.975rem] bottom-0 z-50 bg-accent text-background overflow-y-auto px-6 py-8 shadow-2xl border-t border-white/10">
                <div className="max-w-md mx-auto space-y-5">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">HOJA Network</span>
                    <label htmlFor="rnav-open" className="text-xs uppercase font-bold text-background/90 hover:text-white cursor-pointer px-3 py-1.5 bg-white/15 rounded">✕ <LanguageText fr="Fermer" en="Close menu" /></label>
                  </div>
                  <div className="pb-4 border-b border-white/20"><LanguageSwitcher /></div>
                  <p className="text-xs font-bold uppercase tracking-widest text-background/70"><LanguageText fr="Découvrir HOJA" en="Discover HOJA" /></p>
                  {UtilityNav_data.map((d) => <a key={d.href} href={d.href} className="block text-lg font-bold text-background hover:text-primary"><LanguageText fr={d.label} en={d.en} /></a>)}
                  <p className="pt-3 border-t border-white/20 text-xs font-bold uppercase tracking-widest text-background/70"><LanguageText fr="Nos actions" en="Our work" /></p>
                  {ListRow_data.map((d) => <a key={d.href} href={d.href} className="block text-lg font-bold text-background hover:text-primary">{d.href === "/who-we-are/our-network" ? <LanguageText fr="Notre réseau" en="Our Network" /> : d.href === "/impact" ? "Impact" : d.href === "/green-economy" ? <LanguageText fr="Économie verte" en="Green Economy" /> : d.href === "/hoja-academy" ? "HOJA Academy" : "HOJA Farm"}</a>)}
                </div>
              </div>
            </nav>
            <a className="w-[8.75rem] shrink-0 whitespace-nowrap block relative py-3 px-3 overflow-hidden text-background text-base font-bold leading-6 text-center bg-primary cursor-pointer max-md:w-[10.5rem] max-md:ml-[2.3px] max-lg:order-[2] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:w-32.5 md:max-lg:ml-[17.9375rem] md:max-lg:text-xl md:max-lg:leading-7.5 before:content-[''] before:block before:absolute before:inset-y-0 before:-right-7.5 before:left-[5.5rem] before:w-[4.6875rem] before:bg-clr-0 before:transform-[matrix(1,0,-1,1,0,0)] before:origin-[37.5px_31.6562px] max-md:before:left-[7.6875rem] max-md:before:origin-[37.5px_22.6562px] md:max-lg:before:left-[5.3125rem] md:max-lg:before:origin-[37.5px_25.6562px]" data-cid="Ln46" href="/donate">
              <LanguageText fr="Faire un don" en="Donate" />
            </a>
          </div>
        </header>
        <label className="w-px h-px block absolute top-0 left-0 -m-px overflow-hidden cursor-default" data-cid="Ln47" htmlFor="rnav-open">
          Open responsive nav
        </label>
        {children}
        <footer className="block relative z-39 pt-16 overflow-hidden text-background bg-primary max-lg:pt-10" data-cid="Ln284">
          <div className="block relative z-11 max-w-320 px-8 mx-auto max-md:px-4" data-cid="Ln285">
            <div className="flex mb-8 flex-wrap justify-between items-center max-lg:border-b-2 max-lg:border-solid max-lg:border-b-background max-lg:mb-6 max-lg:pb-6" data-cid="Ln286">
              <a className="w-56 block cursor-pointer max-md:w-[21.4375rem] md:max-lg:w-48" data-cid="Ln287" href="/">
                <picture className="inline" data-cid="Ln288">
                  <img className="h-14 w-auto block max-w-full overflow-clip text-center max-lg:h-12 max-lg:mb-4 object-contain" data-cid="Ln289" alt="HOJA Network" src="/assets/hoja/logo_hoja_new.png" />
                </picture>
              </a>
              <ul className="block max-w-full text-left [list-style-type:none] list-outside max-md:mt-4 max-md:basis-full">
                <li className="inline-block text-center">
                  <a className="h-12 w-12 flex items-center justify-center rounded-[100%] text-primary bg-background hover:bg-background/90 cursor-pointer" data-cid="Ln292" href="https://www.linkedin.com/company/hoja-network" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.4 9.74v-8.37H5.06v8.37z" /></svg>
                  </a>
                </li>
                <li className="inline-block mx-[5px] text-center">
                  <a className="h-12 w-12 flex items-center justify-center rounded-[100%] text-primary bg-background hover:bg-background/90 cursor-pointer" href="https://www.facebook.com/profile.php?id=61554708660088" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21z" /></svg>
                  </a>
                </li>
                <li className="inline-block ml-[5px] text-center">
                  <a className="h-12 w-12 flex items-center justify-center rounded-[100%] text-primary bg-background hover:bg-background/90 cursor-pointer" href="https://x.com/HOJANETWORK" target="_blank" rel="noreferrer" aria-label="X">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.8zm-1.1 18h1.7L7.4 3.9H5.6z" /></svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap" data-cid="Ln315">
              <ul className="border-t-[3px] border-solid border-t-background border-b-[3px] border-b-background flex max-w-full py-6 px-4 flex-wrap justify-between items-center basis-full [list-style-type:none] list-outside max-lg:block max-lg:max-w-[50%] max-lg:pr-2.5 max-lg:basis-1/2 max-lg:border-t-[0] max-lg:border-initial max-lg:border-t-[initial] max-lg:border-b-[0] max-lg:border-b-[initial] max-lg:py-0 max-lg:pl-0 max-lg:[justify-content:initial] max-lg:[align-items:initial]" data-cid="Ln316">
                {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} cids={ListRow2_cids[i]} styles={ListRow2_styles[i]} />)}
              </ul>
              <ul className="block max-w-[23%] my-8 basis-[23%] [list-style-type:none] list-outside max-lg:max-w-[50%] max-lg:basis-1/2 max-lg:my-0" data-cid="Ln325">
                {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} cids={ListRow3_cids[i]} />)}
              </ul>
              <div className="flex max-w-[50%] my-8 ml-[328.3px] flex-wrap basis-1/2 overflow-hidden max-lg:max-w-full max-lg:mt-4 max-lg:basis-full max-lg:mb-0 max-lg:ml-0" data-cid="Ln336">
                <div className="block relative max-w-[65%] p-8 basis-[65%] text-color-001 bg-surface max-md:max-w-full max-md:pb-4 max-md:px-4 max-md:basis-full after:content-[''] after:block after:absolute after:inset-y-0 after:-right-5 after:left-[23.45rem] after:bg-surface after:transform-[matrix(1,0,-0.109518,1,0,0)] after:origin-[20px_140.977px] max-md:after:top-[-18.7px] max-md:after:bottom-[10.425rem] max-md:after:inset-x-0 max-md:after:transform-[matrix(1,-0.109518,0,1,0,0)] max-md:after:origin-[171.5px_20.625px] md:max-lg:after:left-[27.35rem] md:max-lg:after:origin-[20px_163.227px]" data-cid="Ln337">
                  <p className="block relative z-1 [font-family:questa,_serif] text-[1.5625rem] leading-7.5">
                    <LanguageText fr="Recevez les nouvelles de HOJA" en="Subscribe to HOJA newsletter" />
                  </p>
                  <p className="block mt-4">
                    <LanguageText fr="Actualités, initiatives locales et nouvelles de HOJA." en="Inspiring grassroots innovations and impact updates straight into your inbox." />
                  </p>
                  <a className="h-[48.3px] inline-block relative mt-4 py-[10.7px] px-[1.2rem] overflow-hidden text-background text-lg font-bold leading-[1.6875rem] text-center bg-primary cursor-pointer before:content-[''] before:block before:absolute before:inset-y-0 before:-right-7.5 before:left-[5.9625rem] before:w-[4.6875rem] before:h-[48.3px] before:bg-clr-0 before:transform-[matrix(1,0,-1,1,0,0)] before:origin-[37.5px_24.1562px]" data-cid="Ln340" href="/contact">
                    <LanguageText fr="Nous contacter" en="Contact us" />
                  </a>
                </div>
                <div className="h-[17.625rem] block max-w-[35%] basis-[35%] max-md:hidden md:max-lg:h-[326.5px]" data-cid="Ln341">
                  <img className="w-full h-70.5 block max-w-full overflow-clip object-cover text-center md:max-lg:h-81.5" data-cid="Ln342" alt="Community impact" src="/assets/hoja/photos/HOJA-TEAM-BUILDING.jpg" />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-solid border-t-background border-b-2 border-b-background flex py-6 flex-wrap max-lg:mt-6 max-lg:pb-4" data-cid="Ln343">
              {TextLink_data.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} />)}
            </div>
            <div className="flex py-8 flex-wrap justify-between" data-cid="Ln370">
              <p className="w-full block md:max-lg:w-176 text-sm opacity-90" data-cid="Ln371">
                <LanguageText fr="© 2026 HOJA Network. Tous droits réservés. Autonomiser les personnes. Créer des entreprises. Résoudre les problèmes." en="Copyright © 2026 HOJA Network. All Rights Reserved. Empowering People. Building Businesses. Solving Problems." />
              </p>
            </div>
          </div>
          <div className="block py-6 bg-color-010" data-cid="Ln372">
            <div className="flex relative z-11 max-w-320 px-8 flex-wrap justify-between items-center mx-auto max-md:px-4" data-cid="Ln373">
              <div className="flex flex-wrap items-center" data-cid="Ln374">
                <img className="h-10 w-auto block max-w-full overflow-clip align-middle object-contain" alt="HOJA Emblem" src="/assets/hoja/favicon_hoja_64.png" />
                <p className="w-96 block ml-4 align-middle text-xs text-background/80 max-md:w-full max-md:mt-2 max-md:ml-0">
                  <LanguageText fr="Les ressources mobilisées soutiennent la formation professionnelle des jeunes, l’entrepreneuriat des femmes et l’éducation des enfants. " en="Resources mobilized directly support youth vocational training, women's entrepreneurship, and child education programs. " />
                  <a className="inline underline font-semibold text-background cursor-pointer" href="/who-we-are/leadership-and-governance">
                    <LanguageText fr="Gouvernance et leadership." en="View governance and leadership." />
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-background/90 max-md:mt-4">

              </div>
            </div>
          </div>
          <button className="w-12.5 h-12.5 block fixed top-[45.3125rem] left-320 z-10000 rounded-[5px] overflow-hidden text-lg font-bold leading-[1.6875rem] text-center bg-background shadow-[var(--color-010)_0px_0px_4px_4px] cursor-pointer before:content-[''] before:block before:absolute before:top-5 before:-right-7.5 before:bottom-2.5 before:left-[0.9375rem] before:w-5 before:h-5 before:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] before:origin-[10px_10px]" data-cid="Ln388">
            <p className="w-px h-px block absolute -m-px overflow-hidden" data-cid="Ln389">
              <LanguageText fr="Haut de page" en="Back to top" />
            </p>
          </button>
        </footer>
        </ClientProviders>
      </body>
    </html>
  );
}
