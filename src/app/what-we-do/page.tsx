import "./ditto.css";
import ListRow from "./components/list-row";
import MediaCard from "./components/media-card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Strategic Pillars & Programs | HOJA Network",
  description: "Explore HOJA Network's strategic pillars in clean energy, biodiversity conservation, forest protection, green entrepreneurship, and our verified community programs across the Great Lakes.",
};

const ListRow_data = [
    { href: "/what-we-do/renewable-energy-clean-cooking", label: "1. Clean Cooking & Energy" },
    { href: "/what-we-do/biodiversity-virunga-protection", label: "2. Biodiversity & Virunga" },
    { href: "/what-we-do/congo-basin-forest-climate", label: "3. Congo Basin & Climate" },
    { href: "/what-we-do/green-entrepreneurship-circular-economy", label: "4. Green Entrepreneurship" },
    { href: "/what-we-do/responsible-digital-ai", label: "• Responsible Digital & AI" },
    { href: "/what-we-do/green-great-lakes-initiative", label: "• Green Great Lakes (Concept)" },
    { href: "/what-we-do/youth-empowerment", label: "• Youth Economic Empowerment" },
    { href: "/what-we-do/women-empowerment", label: "• Women's Enterprise" }
];

const MediaCard_data = [
    {
        alt: "Renewable Energy & Clean Cooking",
        imgSrc: "/assets/cloned/images/2780166559e6.jpg",
        srcSet: "/assets/cloned/images/2780166559e6.jpg 960w",
        ariaLabel: "Pillar 1: Clean Cooking",
        description: "Pillar 1",
        ariaLabel2: "Clean Energy",
        href: "/what-we-do/renewable-energy-clean-cooking",
        description2: "Energy Access",
        href2: "/what-we-do/renewable-energy-clean-cooking",
        title: "Renewable Energy & Clean Cooking",
        dateTime: "2026-01-15",
        date: "Pillar 1",
        description3: "Reducing forest extraction pressure through efficient cookstoves, solar mini-services, and local youth clean energy enterprise."
    },
    {
        alt: "Biodiversity Conservation & Virunga Landscape",
        imgSrc: "/assets/cloned/images/ca4aca8671c4.jpg",
        srcSet: "/assets/cloned/images/ca4aca8671c4.jpg 960w",
        ariaLabel: "Pillar 2: Virunga Conservation",
        description: "Pillar 2",
        ariaLabel2: "Virunga Landscape",
        href: "/what-we-do/biodiversity-virunga-protection",
        description2: "Conservation",
        href2: "/what-we-do/biodiversity-virunga-protection",
        title: "Biodiversity & Virunga Landscape",
        dateTime: "2026-02-10",
        date: "Pillar 2",
        description3: "Community-driven conservation, buffer zone ecological restoration, and nature-positive livelihoods around protected ecosystems."
    },
    {
        alt: "Congo Basin Forest Protection & Climate Action",
        imgSrc: "/assets/cloned/images/96bc94985e5a.jpg",
        srcSet: "/assets/cloned/images/96bc94985e5a.jpg 960w",
        ariaLabel: "Pillar 3: Congo Basin",
        description: "Pillar 3",
        ariaLabel2: "Climate Action",
        href: "/what-we-do/congo-basin-forest-climate",
        description2: "Forests",
        href2: "/what-we-do/congo-basin-forest-climate",
        title: "Congo Basin & Climate Action",
        dateTime: "2026-03-01",
        date: "Pillar 3",
        description3: "Preserving vital tropical rainforest carbon sinks, community agroforestry, and equitable rights-based environmental stewardship."
    },
    {
        alt: "Green Entrepreneurship & Circular Economy",
        imgSrc: "/assets/cloned/images/60e72df5260d.jpg",
        srcSet: "/assets/cloned/images/60e72df5260d.jpg 960w",
        ariaLabel: "Pillar 4: Green Economy",
        description: "Pillar 4",
        ariaLabel2: "Circular Economy",
        href: "/what-we-do/green-entrepreneurship-circular-economy",
        description2: "Green Enterprise",
        href2: "/what-we-do/green-entrepreneurship-circular-economy",
        title: "Green Entrepreneurship & Circular Economy",
        dateTime: "2026-04-05",
        date: "Pillar 4",
        description3: "Incubating youth and women in circular business models, solid and organic waste upcycling, and regenerative micro-enterprises."
    }
];

const ListRow_cids: string[][] = [
    ["n69", "n70"],
    ["n71", "n72"],
    ["n73", "n74"],
    ["n75", "n76"],
    ["n77", "n78"],
    ["n79", "n80"],
    ["n81a", "n82a"],
    ["n81b", "n82b"]
];

const MediaCard_cids: string[][] = [
    ["n161", "n162", "n163", "n164", "n165", "n166", "n167", "n168", "n169", "n170", "n171", "n172", "n173", "n174", "n175", "n176", "n177", "n178", "n179"],
    ["n180", "n181", "n182", "n183", "n184", "n185", "n186", "n187", "n188", "n189", "n190", "n191", "n192", "n193", "n194", "n195", "n196", "n197", "n198"],
    ["n199", "n200", "n201", "n202", "n203", "n204", "n205", "n206", "n207", "n208", "n209", "n210", "n211", "n212", "n213", "n214", "n215", "n216", "n217"],
    ["n218", "n219", "n220", "n221", "n222", "n223", "n224", "n225", "n226", "n227", "n228", "n229", "n230", "n231", "n232", "n233", "n234", "n235", "n236"]
];

const MediaCard_styles = [
    { className: "before:content-['ENERGY'] before:right-80 before:bottom-[442.5px] before:w-20 before:text-background before:bg-accent before:origin-[34px_11.75px] max-md:before:right-[17.4375rem] max-md:before:bottom-[474.5px] md:max-lg:before:right-66 md:max-lg:before:bottom-[472.5px]" },
    { className: "before:content-['NATURE'] before:right-80 before:bottom-[442.5px] before:w-20 before:text-background before:bg-primary before:origin-[34px_11.75px] max-md:before:right-[17.4375rem] max-md:before:bottom-[522.5px] md:max-lg:before:right-66 md:max-lg:before:bottom-[472.5px]" },
    { className: "before:content-['FOREST'] before:right-80 before:bottom-[442.5px] before:w-20 before:text-background before:bg-accent before:origin-[34px_11.75px] max-md:before:right-[17.4375rem] max-md:before:bottom-[522.5px] md:max-lg:before:right-66 md:max-lg:before:bottom-[472.5px]", className2: "w-full" },
    { className: "before:content-['CIRCULAR'] before:right-[20.4375rem] before:bottom-[472.5px] before:w-[5.2rem] before:text-color-001 before:bg-color-009 before:origin-[30.5px_11.75px] max-md:before:right-71.5 max-md:before:bottom-[522.5px] md:max-lg:before:right-[16.9375rem]" }
];

export default function WhatWeDoPage() {
  return (
    <>
      <main className="block mt-[10.3125rem] bg-background max-lg:mt-0 after:content-[''] after:table after:w-0 after:h-0" data-cid="n48" id="main">
        {/* Hero Section */}
        <section className="h-150 min-h-150 flex relative flex-wrap items-center overflow-hidden bg-color-011 max-md:h-auto max-lg:pt-20 max-lg:min-h-0 md:max-lg:h-[53.725rem] 2xl:h-202.5 2xl:min-h-202.5" data-cid="n49">
          <div className="w-208 h-150 block absolute top-0 left-112 min-w-0 max-md:w-full max-md:h-64 max-lg:right-0 max-lg:static max-lg:left-auto md:max-lg:w-192 md:max-lg:h-135 2xl:w-312 2xl:h-202.5 2xl:left-168" data-cid="n50">
            <img className="w-full h-150 block max-w-full overflow-clip object-cover text-center max-md:h-64 md:max-lg:h-135 2xl:h-202.5" data-cid="n51" data-component="image" alt="HOJA Network Strategic Action" src="/assets/cloned/images/a5025cdf55a9.jpg" />
          </div>
          <div className="flex relative z-11 max-w-320 px-8 flex-wrap mx-auto max-md:px-4" data-cid="n52">
            <div className="w-[34.2rem] block z-2 mr-[41.8rem] self-center bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] max-md:w-full max-lg:mt-8 max-md:mr-0 md:max-lg:w-[35.2rem] md:max-lg:mr-[8.8rem]" data-cid="n53">
              <div className="block p-6 text-background bg-accent" data-cid="n54">
                <h1 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]" data-cid="n55" data-component="heading">
                  What We Do
                </h1>
              </div>
              <div className="block p-6" data-cid="n56">
                <p className="block text-xl leading-6.5 text-foreground font-medium" data-cid="n57">
                  At the Intersection of Nature, Clean Energy, Green Enterprise &amp; Community Resilience
                </p>
                <p className="block text-base leading-6 mt-3 text-muted-foreground">
                  HOJA Network aligns four forward-looking strategic pillars with our verified grassroots programs, deploying responsible digital innovation in service of people and ecosystems in the Great Lakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Subnav */}
        <div className="flex relative max-w-full py-12 flex-wrap items-start max-lg:py-8" data-cid="n58" id="content">
          <div className="flex relative z-11 max-w-320 px-8 flex-row-reverse flex-wrap justify-between items-start grow basis-2/3 mx-auto max-md:px-4 max-lg:flex-col max-lg:grow-[initial] max-lg:basis-[initial]" data-cid="n59">
            <aside className="w-full h-auto block sticky top-[12.3125rem] float-right z-1000 max-w-[30%] basis-[30%] overflow-hidden bg-background max-lg:top-8 max-lg:mb-6 max-lg:static max-lg:max-w-none max-lg:basis-full" data-cid="n60">
              <div className="block p-5 bg-surface-3 rounded-sm border border-border">
                <h3 className="block text-accent text-base font-bold mb-4 pb-2 border-b border-border">
                  Strategic Architecture
                </h3>
                <nav>
                  <ul className="space-y-2.5 text-sm">
                    {ListRow_data.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} />)}
                  </ul>
                </nav>
              </div>

              <div className="mt-6 p-5 bg-surface-2 rounded-sm border border-border">
                <h4 className="font-bold text-accent text-sm mb-2">Three Clear Levels</h4>
                <div className="space-y-2 text-xs text-foreground/80">
                  <p><strong>1. Piliers Stratégiques :</strong> Vision directrice environnement &amp; économie verte.</p>
                  <p><strong>2. Technologie Transversale :</strong> Numérique responsable &amp; IA sobre.</p>
                  <p><strong>3. Programmes Historiques :</strong> Ancrage opérationnel vérifié de terrain.</p>
                </div>
              </div>
            </aside>

            <div className="block relative float-left max-w-[66.66%] mr-[2.5375rem] basis-2/3 max-lg:max-w-none max-lg:mr-0 max-lg:basis-full" data-cid="n81">
              <div className="space-y-8 text-foreground/90">
                <div>
                  <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                    Our 4 Strategic Pillars
                  </h2>
                  <p className="text-base leading-relaxed mb-4">
                    In response to accelerating ecological degradation and systemic economic precarity in the Great Lakes, HOJA Network organizes its strategic direction around four interconnected pillars:
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <Link href="/what-we-do/renewable-energy-clean-cooking" className="p-5 bg-surface-2 border-l-4 border-primary rounded-sm hover:shadow-md transition-shadow group">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Pillar 1</div>
                    <h3 className="font-bold text-accent text-base mb-1 group-hover:text-primary transition-colors">Renewable Energy &amp; Clean Cooking</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">Transitioning households from unsustainably harvested charcoal to efficient cookstoves and decentralized clean energy entrepreneurship.</p>
                  </Link>

                  <Link href="/what-we-do/biodiversity-virunga-protection" className="p-5 bg-surface-3 border-l-4 border-color-011 rounded-sm hover:shadow-md transition-shadow group">
                    <div className="text-xs font-bold uppercase tracking-wider text-color-011 mb-1">Pillar 2</div>
                    <h3 className="font-bold text-accent text-base mb-1 group-hover:text-primary transition-colors">Biodiversity &amp; Virunga Landscape</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">Community-led conservation, buffer zone reforestation, and nature-positive livelihoods around protected ecosystems.</p>
                  </Link>

                  <Link href="/what-we-do/congo-basin-forest-climate" className="p-5 bg-surface-4 border-l-4 border-color-008 rounded-sm hover:shadow-md transition-shadow group">
                    <div className="text-xs font-bold uppercase tracking-wider text-color-008 mb-1">Pillar 3</div>
                    <h3 className="font-bold text-accent text-base mb-1 group-hover:text-primary transition-colors">Congo Basin Forest &amp; Climate Action</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">Preserving critical rainforest carbon sinks, community agroforestry, and equitable rights-based land stewardship.</p>
                  </Link>

                  <Link href="/what-we-do/green-entrepreneurship-circular-economy" className="p-5 bg-surface-2 border-l-4 border-color-012 rounded-sm hover:shadow-md transition-shadow group">
                    <div className="text-xs font-bold uppercase tracking-wider text-color-012 mb-1">Pillar 4</div>
                    <h3 className="font-bold text-accent text-base mb-1 group-hover:text-primary transition-colors">Green Entrepreneurship &amp; Circular Economy</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">Incubating youth and women in waste reduction, upcycling, organic composting, and circular micro-business models.</p>
                  </Link>
                </div>

                {/* Transversal & Proposed Regional Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-surface-3 border-l-4 border-accent rounded-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Transversal Enabler</div>
                    <Link href="/what-we-do/responsible-digital-ai">
                      <h4 className="font-bold text-accent text-base mb-1 hover:text-primary transition-colors">Responsible Digital &amp; AI Innovation →</h4>
                    </Link>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      Practical, frugal tools for environmental telemetry, restoration tracking, and green enterprise efficiency with mandatory human oversight.
                    </p>
                  </div>

                  <div className="p-5 bg-surface-4 border-l-4 border-primary rounded-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Proposed Regional Initiative</div>
                    <Link href="/what-we-do/green-great-lakes-initiative">
                      <h4 className="font-bold text-accent text-base mb-1 hover:text-primary transition-colors">Hoja Green Great Lakes Initiative →</h4>
                    </Link>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      A regional concept note integrating clean energy, community conservation, and a green enterprise accelerator across 5 strategic axes.
                    </p>
                  </div>
                </div>

                {/* Verified Historical Programs Section */}
                <div className="pt-6 border-t border-border">
                  <h3 className="[font-family:questa,_serif] text-xl md:text-2xl font-bold text-accent mb-3">
                    Documented Grassroots &amp; Historical Programs
                  </h3>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                    Our environmental and green economy vision is anchored in our verified, field-tested community portfolio operating in North Kivu and regional borderlands:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <Link href="/what-we-do/youth-empowerment" className="p-3 bg-surface rounded-sm border border-border hover:border-primary transition-colors">
                      <strong>• Youth Economic Empowerment:</strong> Vocational skills &amp; micro-business starter kits.
                    </Link>
                    <Link href="/what-we-do/women-empowerment" className="p-3 bg-surface rounded-sm border border-border hover:border-primary transition-colors">
                      <strong>• Women&apos;s Economic Autonomy:</strong> Cross-border trader literacy &amp; enterprise support.
                    </Link>
                    <Link href="/what-we-do/hoja-educ" className="p-3 bg-surface rounded-sm border border-border hover:border-primary transition-colors">
                      <strong>• HOJA EDUC:</strong> Creative early learning materials &amp; eco-education workshops.
                    </Link>
                    <Link href="/what-we-do/parenting-in-crisis" className="p-3 bg-surface rounded-sm border border-border hover:border-primary transition-colors">
                      <strong>• Parenting in Crisis:</strong> Psychosocial dialogue circles for displaced families.
                    </Link>
                    <Link href="/what-we-do/humanitarian-consultancy" className="p-3 bg-surface rounded-sm border border-border hover:border-primary transition-colors sm:col-span-2">
                      <strong>• Humanitarian Consultancy &amp; The HOJA Summit:</strong> Local capacity building &amp; annual regional convening.
                    </Link>
                  </div>
                </div>

                {/* Authentic Quote */}
                <blockquote className="p-6 bg-accent text-background rounded-sm text-center my-8">
                  <p className="font-medium italic text-lg leading-relaxed">
                    &ldquo;When people have the tools to analyze their own problems and the collective solidarity to pool their resources, they do not need to wait for outside assistance. They become the creators of their own opportunities.&rdquo;
                  </p>
                  <span className="block not-italic font-bold text-primary text-sm mt-3 uppercase tracking-wider">
                    — Isaac Bugeri, Founder of HOJA Network &amp; Ashoka Fellow
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (4 Pillars) */}
        <section className="block relative pt-16 pb-12 text-background bg-accent max-md:pt-12 max-lg:pb-8">
          <header className="block relative z-11 max-w-320 mb-8 px-8 text-center mx-auto max-md:px-4">
            <h2 className="block [font-family:questa,_serif] text-[2.4375rem] leading-[2.9375rem] [overflow-wrap:break-word] max-lg:text-[1.75rem] max-lg:leading-[2.125rem]">
              Strategic Pillars in Action
            </h2>
            <p className="w-160 block max-w-full mx-auto pt-2 pb-4 text-foreground/80 text-sm">
              Discover how our 4 strategic pillars translate into concrete community initiatives across Eastern DRC and the Great Lakes.
            </p>
          </header>
          <div className="block relative z-11 max-w-320 px-8 mx-auto max-md:px-4">
            <div className="w-full flex relative -mx-4 flex-wrap max-md:mx-0">
              {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="block relative py-16 bg-surface-2 text-center">
          <div className="max-w-240 mx-auto px-6">
            <h3 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-3">
              Partner with HOJA Network on Green &amp; Community Solutions
            </h3>
            <p className="text-base text-foreground/80 mb-6 max-w-180 mx-auto leading-relaxed">
              We welcome collaboration with philanthropic foundations, conservation alliances, clean energy funds, and community leaders committed to sustainable prosperity in the Great Lakes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/get-involved/partner-with-us" className="py-3 px-6 bg-primary text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
                Partner With Us
              </Link>
              <Link href="/contact" className="py-3 px-6 bg-accent text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
                Contact Our Offices
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
