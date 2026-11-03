import "./ditto.css";
import ListRow from "./components/list-row";
import MediaCard from "./components/media-card";
import Link from "next/link";
import LanguageText from "../../components/LanguageText";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are",
  title: "Who We Are | HOJA Network",
  description: "HOJA Network is an African regional organization founded in 2017 by Isaac Bugeri, positioned at the intersection of nature protection, clean energy, green entrepreneurship, and community resilience.",
});



const ListRow_data = [
    { href: "/who-we-are/leadership-and-governance", label: "Leadership & Governance", labelFr: "Direction et gouvernance" },
    { href: "/who-we-are/our-history", label: "Our History (Since 2017)", labelFr: "Notre histoire (depuis 2017)" },
    { href: "/who-we-are/our-network", label: "Regional Network & Corridors", labelFr: "Réseau régional et corridors" },
    { href: "/impact", label: "Our Impact", labelFr: "Notre impact" },
    { href: "/what-we-do/responsible-digital-ai", label: "Responsible Digital & AI", labelFr: "Numérique responsable et IA" },
    { href: "/contact", label: "Offices & Contact", labelFr: "Bureaux et contact" }
];

const MediaCard_data = [
    {
      alt: "HOJA Network community training gathering",
      altFr: "Rassemblement de formation communautaire de HOJA Network",
      imgSrc: "/assets/hoja/photos/IMG_8302.jpg",
      srcSet: "/assets/hoja/photos/IMG_8302.jpg 960w",
      title: "Community Agency & Nature Stewardship",
      titleFr: "Communautés engagées et protection de la nature",
      description: "Grassroots communities and youth are best positioned to protect their own ecosystems and pioneer sustainable solutions. Programs are shaped with local associations as primary partners.",
      descriptionFr: "Les communautés et les jeunes sont les mieux placés pour protéger leurs écosystèmes et imaginer des solutions durables. Nos programmes sont construits avec les associations locales.",
      ariaLabel: "Read Community Agency",
      ariaLabelFr: "Découvrir l’engagement communautaire",
      href: "/what-we-do/biodiversity-virunga-protection",
      label: "Conservation",
      labelFr: "Conservation"
    },
    {
      alt: "HOJA Network women sharing ideas",
      altFr: "Des femmes de HOJA Network échangent des idées",
      imgSrc: "/assets/hoja/photos/img2.jpeg",
      srcSet: "/assets/hoja/photos/img2.jpeg 960w",
      title: "Green Self-Reliance & Circular Economy",
      titleFr: "Autonomie verte et économie circulaire",
      description: "Moving away from short-term dependency: equipping youth and women with circular business skills, clean energy technologies, and waste valorization tools that generate sustainable income.",
      descriptionFr: "Nous renforçons l’autonomie des jeunes et des femmes grâce aux compétences entrepreneuriales circulaires, aux énergies propres et à la valorisation des déchets, pour créer des revenus durables.",
      ariaLabel: "Read Green Self-Reliance",
      ariaLabelFr: "Découvrir l’autonomie verte",
      href: "/what-we-do/green-entrepreneurship-circular-economy",
      label: "Green Enterprise",
      labelFr: "Entrepreneuriat vert"
    },
    {
      alt: "HOJA Network team members in discussion",
      altFr: "Des membres de l’équipe HOJA Network en discussion",
      imgSrc: "/assets/hoja/photos/img5.jpeg",
      srcSet: "/assets/hoja/photos/img5.jpeg 960w",
      title: "Integrity, Accountability & Ethical Innovation",
      titleFr: "Intégrité, redevabilité et innovation éthique",
      description: "Operating in full compliance with DRC and Rwandan non-profit legal frameworks, ensuring open governance, community consent, and human oversight across all digital and environmental initiatives.",
      descriptionFr: "Nous respectons les cadres juridiques de la RDC et du Rwanda, et faisons vivre une gouvernance ouverte, le consentement des communautés et une supervision humaine de nos initiatives.",
      ariaLabel: "Read Integrity & Accountability",
      ariaLabelFr: "Découvrir notre engagement pour l’intégrité",
      href: "/who-we-are/leadership-and-governance",
      label: "Governance",
      labelFr: "Gouvernance"
    }
];

const ListRow_cids: string[][] = [
    ["n69", "n70"],
    ["n71", "n72"],
    ["n73", "n74"],
    ["n75", "n76"],
    ["n77", "n78"],
    ["n79", "n80"]
];

const MediaCard_cids: string[][] = [
    ["n130", "n131", "n132", "n133", "n134", "n135", "n136", "n137", "n138", "n139", "n140", "n141", "n142", "n143"],
    ["n144", "n145", "n146", "n147", "n148", "n149", "n150", "n151", "n152", "n153", "n154", "n155", "n156", "n157"],
    ["n158", "n159", "n160", "n161", "n162", "n163", "n164", "n165", "n166", "n167", "n168", "n169", "n170", "n171"]
];

const MediaCard_styles = [
    { className: "before:left-[14.025rem]" },
    { className: "before:left-[12.65rem]" },
    { className: "before:left-[12.275rem]" }
];

export default function WhoWeArePage() {
  return (
    <>
      <main className="block mt-[10.3125rem] bg-background max-lg:mt-0 after:content-[''] after:table after:w-0 after:h-0" data-cid="n48" id="main">
        {/* Hero */}
        <section className="h-150 min-h-150 flex relative flex-wrap items-center overflow-hidden bg-color-011 max-md:h-auto max-lg:pt-20 max-lg:min-h-0 md:max-lg:h-[58.6rem] 2xl:h-202.5 2xl:min-h-202.5" data-cid="n49">
          <div className="w-208 h-150 block absolute top-0 left-112 min-w-0 max-md:w-full max-md:h-64 max-lg:right-0 max-lg:static max-lg:left-auto md:max-lg:w-192 md:max-lg:h-135 2xl:w-312 2xl:h-202.5 2xl:left-168" data-cid="n50">
            <img className="w-full h-150 block max-w-full overflow-clip object-cover text-center max-md:h-64 md:max-lg:h-135 2xl:h-202.5" data-cid="n51" data-component="image" alt="HOJA Network leadership team" src="/assets/hoja/photos/IMG_7113.jpg" />
          </div>
          <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4" data-cid="n52">
            <div className="w-[34.2rem] block z-2 mr-[41.8rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:mt-8 max-md:mr-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]" data-cid="n53">
              <div className="block p-6 text-background bg-accent" data-cid="n54">
                <h1 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]" data-cid="n55" data-component="heading">
                  <LanguageText fr="Qui nous sommes" en="Who We Are" />
                </h1>
              </div>
              <div className="block p-6" data-cid="n56">
                <p className="block text-xl leading-6.5 text-foreground font-medium" data-cid="n57">
                  <LanguageText fr="HOJA Network est une organisation régionale africaine fondée en 2017 par Isaac Bugeri." en="HOJA Network is an African regional organization founded in 2017 by Isaac Bugeri." />
                </p>
                <p className="block text-base leading-6 mt-3 text-muted-foreground">
                  <LanguageText fr="Nous agissons à la croisée de la conservation écologique, de l’énergie propre, de l’entrepreneuriat vert et de la résilience communautaire dans l’est de la RDC et la région des Grands Lacs." en="Positioned at the nexus of ecological conservation, clean energy, green entrepreneurship, and community resilience in Eastern DRC and the Great Lakes borderlands." />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subnav & Mission Content */}
        <div className="flex relative max-w-full py-12 flex-wrap items-start max-lg:py-8" data-cid="n58" id="content">
          <div className="flex relative z-11 w-full max-w-320 px-8 flex-row-reverse flex-wrap justify-between items-start mx-auto max-md:px-4 max-lg:flex-col" data-cid="n59">
            <aside className="w-full h-auto block sticky top-[12.3125rem] float-right z-1000 max-w-[30%] basis-[30%] overflow-hidden bg-background max-lg:top-8 max-lg:mb-6 max-lg:static max-lg:max-w-none max-lg:basis-full" data-cid="n60">
              <div className="block p-5 bg-surface-3 rounded-sm border border-border">
                <h3 className="block text-accent text-base font-bold mb-4 pb-2 border-b border-border">
                  <LanguageText fr="Dans cette rubrique" en="In this section" />
                </h3>
                <nav>
                  <ul className="space-y-2.5 text-sm">
                    {ListRow_data.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} />)}
                  </ul>
                </nav>
              </div>

              <div className="mt-6 p-5 bg-surface-2 rounded-sm border border-border">
                <h4 className="font-bold text-accent text-sm mb-2"><LanguageText fr="Notre double héritage" en="Our Double Heritage" /></h4>
                <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                  <strong><LanguageText fr="1. Racines communautaires :" en="1. Community Roots:" /></strong> <LanguageText fr="Fondée en 2017 à Nairobi, l’organisation agit aujourd’hui sur le terrain à Goma auprès des jeunes et des femmes." en="Founded in 2017 in Nairobi, the organization now works on the ground in Goma with young people and women." />
                </p>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  <strong><LanguageText fr="2. Vision verte et durable :" en="2. A Green and Sustainable Vision:" /></strong> <LanguageText fr="Notre action contribue à protéger le bassin du Congo et les Virunga, et à accélérer la transition énergétique." en="Our work contributes to protecting the Congo Basin and Virunga and accelerating the energy transition." />
                </p>
              </div>
            </aside>

            <div className="block relative float-left max-w-[66.66%] mr-[2.5375rem] basis-2/3 max-lg:max-w-none max-lg:mr-0 max-lg:basis-full" data-cid="n89">
              <div className="space-y-8 text-foreground/90">
                <div>
                  <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                    <LanguageText fr="Notre mission" en="Our Mission" />
                  </h2>
                  <p className="text-base leading-relaxed mb-4">
                    <LanguageText fr="Mobiliser les communautés, les jeunes acteurs du changement et les femmes entrepreneures des Grands Lacs autour de solutions concrètes : protéger les écosystèmes essentiels, accélérer l’accès à la cuisson propre, accompagner les entreprises vertes et renforcer l’autonomie des communautés." en="To mobilize communities, young changemakers, and women entrepreneurs across the Great Lakes around practical solutions that protect vital ecosystems, accelerate the clean cooking transition, incubate green enterprises, and foster community self-reliance." />
                  </p>
                  <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                    <LanguageText fr="Notre vision" en="Our Vision" />
                  </h2>
                  <p className="text-base leading-relaxed mb-4">
                    <LanguageText fr="Une région des Grands Lacs pacifique et résiliente, où les communautés, les jeunes et les femmes disposent des compétences et du pouvoir économique nécessaires pour régénérer la nature et développer des moyens de subsistance durables." en="A peaceful, ecologically resilient Great Lakes region where empowered communities, youth, and women have the technical capabilities and economic agency to regenerate nature and build viable, nature-positive livelihoods." />
                  </p>
                </div>

                <div>
                  <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                    <LanguageText fr="Notre approche : renforcer les capacités, pas la dépendance" en="Our Approach: Capacity Over Dependency" />
                  </h2>
                  <p className="text-base leading-relaxed mb-4">
                    <LanguageText fr="L’aide passive et les décisions imposées ne résolvent pas les crises écologiques et économiques de long terme. HOJA Network associe l’action ancrée dans les communautés à une démarche environnementale rigoureuse :" en="Passive aid and top-down mandates cannot solve long-term ecological and economic crises. At HOJA Network, we combine community-rooted action with strategic environmental rigor:" />
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-surface-2 rounded-sm border-l-4 border-primary">
                      <h4 className="font-bold text-accent text-sm mb-1"><LanguageText fr="1. Énergies renouvelables et cuisson propre" en="1. Renewable Energy &amp; Clean Cooking Access" /></h4>
                      <p className="text-xs text-foreground/80"><LanguageText fr="Diffuser des foyers de cuisson performants et des solutions solaires décentralisées afin de réduire la pression sur les forêts fragiles." en="Distributing efficient cookstoves and decentralized solar solutions to reduce deforestation pressure on fragile forests." /></p>
                    </div>
                    <div className="p-4 bg-surface-3 rounded-sm border-l-4 border-color-011">
                      <h4 className="font-bold text-accent text-sm mb-1"><LanguageText fr="2. Biodiversité et protection du paysage des Virunga" en="2. Biodiversity &amp; Virunga Landscape Protection" /></h4>
                      <p className="text-xs text-foreground/80"><LanguageText fr="Accompagner les communautés des zones tampons dans des microentreprises favorables à la nature et des actions de restauration écologique." en="Mobilizing buffer-zone communities in nature-positive micro-enterprises and ecological restoration." /></p>
                    </div>
                    <div className="p-4 bg-surface-4 rounded-sm border-l-4 border-color-008">
                      <h4 className="font-bold text-accent text-sm mb-1"><LanguageText fr="3. Agroforesterie et protection des forêts du bassin du Congo" en="3. Congo Basin Agroforestry &amp; Forest Protection" /></h4>
                      <p className="text-xs text-foreground/80"><LanguageText fr="Promouvoir l’agroforesterie paysanne durable, la régénération des sols et une gestion de l’environnement fondée sur les droits." en="Promoting sustainable smallholder agroforestry, soil regeneration, and rights-based environmental stewardship." /></p>
                    </div>
                    <div className="p-4 bg-surface-2 rounded-sm border-l-4 border-color-012">
                      <h4 className="font-bold text-accent text-sm mb-1"><LanguageText fr="4. Entrepreneuriat vert des jeunes et économie circulaire" en="4. Green Youth Entrepreneurship &amp; Circular Economy" /></h4>
                      <p className="text-xs text-foreground/80"><LanguageText fr="Accompagner des microentreprises dans le réemploi des déchets, le compostage biologique et les services circulaires de proximité." en="Incubating micro-businesses in waste upcycling, organic compost, and local circular services." /></p>
                    </div>
                    <div className="p-4 bg-surface-3 rounded-sm border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-sm mb-1"><LanguageText fr="5. Innovation numérique et IA responsable" en="5. Responsible Digital &amp; AI Innovation" /></h4>
                      <p className="text-xs text-foreground/80"><LanguageText fr="Utiliser des outils numériques accessibles et transparents pour organiser les données de terrain et suivre la restauration, sous supervision humaine." en="Applying frugal, transparent digital tools for field data organization and restoration tracking with mandatory human oversight." /></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                    <LanguageText fr="Une présence régionale ancrée sur le terrain" en="Regional Presence Rooted in the Field" />
                  </h2>
                  <p className="text-base leading-relaxed mb-4">
                    <LanguageText fr="Basé au Rond-point des Banques, au centre de Goma (RDC), et présent à Rubavu (Rwanda), HOJA Network agit le long des principaux corridors écologiques et commerciaux reliant le paysage volcanique des Virunga, le lac Kivu et le bassin du Congo." en="Headquartered at Rond-point des Banques in central Goma (DRC) with an authorized operational presence in Rubavu (Rwanda), HOJA Network acts directly along key ecological and commercial corridors connecting the Virunga volcanic landscape, Lake Kivu, and the Congo Basin edge." />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="block relative py-12 text-background bg-accent max-lg:py-8">
          <header className="block relative z-11 max-w-320 mb-8 px-8 text-center mx-auto max-md:px-4">
            <h2 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]">
              <LanguageText fr="Nos principes fondamentaux" en="Our Core Principles" />
            </h2>
            <p className="w-160 block max-w-full mx-auto pt-2 pb-4 text-background/80 text-sm">
              <LanguageText fr="Les valeurs qui guident nos relations avec les communautés, les partenaires de la conservation et les entrepreneurs locaux :" en="Values guiding our daily interactions with communities, conservation partners, and local entrepreneurs:" />
            </p>
          </header>
          <div className="block relative z-11 max-w-320 px-8 mx-auto max-md:px-4">
            <div className="w-312 flex relative -mx-4 flex-wrap max-md:w-full max-md:mx-0 md:max-lg:w-180 md:max-lg:-mx-2">
              {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
            </div>
          </div>
        </section>

        {/* Governance Banner */}
        <section className="block relative py-16 bg-surface-2 text-center">
          <div className="max-w-240 mx-auto px-6">
            <h3 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-3">
              <LanguageText fr="Découvrir notre gouvernance et notre histoire" en="Explore Our Governance &amp; History" />
            </h3>
            <p className="text-base text-foreground/80 mb-6 max-w-180 mx-auto leading-relaxed">
              <LanguageText fr="HOJA Network est dirigé par un conseil d’administration actif, une équipe de direction et des leaders communautaires de l’est de la RDC et du Rwanda." en="HOJA Network is governed by an active Board of Trustees, executive directors, and community leaders rooted in Eastern DRC and Rwanda." />
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/who-we-are/leadership-and-governance" className="py-3 px-6 bg-primary text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
                <LanguageText fr="Équipe dirigeante →" en="Leadership Team →" />
              </Link>
              <Link href="/who-we-are/our-history" className="py-3 px-6 bg-accent text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
                <LanguageText fr="Notre histoire (2017–2026) →" en="Our History (2017–2026) →" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
