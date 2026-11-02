import "../ditto.css";
import Link from "next/link";
import LanguageText from "../../../components/LanguageText";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  path: "/who-we-are/our-history",
  title: "Our History & Milestones | HOJA Network",
  description: "Discover HOJA Network's journey from its foundation in 2017 to its active presence in Goma (DRC) and the Great Lakes region.",
});



const TIMELINE = [
  {
    year: "2017",
    title: "Origins & Foundation by Isaac Bugeri",
    titleFr: "Origines et fondation par Isaac Bugeri",
    description: "Isaac Bugeri, Congolese social entrepreneur, establishes HOJA Network in Nairobi, Kenya, driven by a conviction: youth unemployment and community challenges must be tackled through practical skills, enterprise creation, and local problem-solving.",
    descriptionFr: "Isaac Bugeri, entrepreneur social congolais, fonde HOJA Network à Nairobi, au Kenya. Sa conviction : le chômage des jeunes et les défis des communautés appellent des compétences pratiques, la création d’entreprises et des solutions locales."
  },
  {
    year: "2019",
    title: "Establishment in Goma & Eastern DRC",
    titleFr: "Implantation à Goma et dans l’est de la RDC",
    description: "HOJA Network establishes field operations in Goma, North Kivu, addressing youth underemployment through practical vocational training and enterprise coaching for emerging entrepreneurs and women in commerce.",
    descriptionFr: "HOJA Network lance ses activités de terrain à Goma, au Nord-Kivu. L’organisation répond au sous-emploi des jeunes par des formations professionnelles pratiques et un accompagnement des entrepreneurs émergents et des femmes commerçantes."
  },
  {
    year: "2021",
    title: "Official DRC Legal Registration",
    titleFr: "Enregistrement officiel en RDC",
    description: "Formal ministerial authorization obtained in the Democratic Republic of Congo (No. JUST.G.S. 112/S-KV/0508/2021). Establishment of the headquarters at Rond-point des Banques in central Goma.",
    descriptionFr: "L’organisation obtient son autorisation ministérielle en République démocratique du Congo (n° JUST.G.S. 112/S-KV/0508/2021) et établit son siège au Rond-point des Banques, au centre de Goma."
  },
  {
    year: "2023",
    title: "Launch of HOJA EDUC & Parenting in Crisis",
    titleFr: "Lancement de HOJA EDUC et du programme Parents en crise",
    description: "Deployment of HOJA EDUC, an active learning and creative discovery initiative for children, alongside the Parenting in Crisis program providing psychosocial dialogue spaces for families navigating conflict and displacement in North Kivu.",
    descriptionFr: "HOJA EDUC propose aux enfants des activités d’apprentissage actif et de découverte créative. Le programme Parents en crise offre aux familles du Nord-Kivu des espaces de dialogue psychosocial face aux conflits et aux déplacements."
  },
  {
    year: "2024–2025",
    title: "The HOJA Summit & Regional Partnerships",
    titleFr: "Le Sommet HOJA et les partenariats régionaux",
    description: "Convening young African changemakers and community leaders through the annual HOJA Summit, while expanding technical assistance and capacity-building partnerships for local grassroots organizations.",
    descriptionFr: "Le Sommet HOJA rassemble chaque année de jeunes acteurs du changement et des leaders communautaires africains. HOJA Network développe aussi l’assistance technique et les partenariats de renforcement des capacités des organisations locales."
  }
];

export default function HistoryPage() {
  return (
    <main className="block mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      <section className="py-16 bg-accent text-background">
        <div className="max-w-320 px-8 mx-auto max-md:px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-wider text-xs block mb-2">
              <LanguageText fr="Nos étapes clés depuis 2017" en="Our Milestones Since 2017" />
            </span>
            <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold mb-4">
              <LanguageText fr="Notre histoire et notre évolution" en="Our History &amp; Growth" />
            </h1>
            <p className="text-lg leading-relaxed text-background/80">
              <LanguageText fr="D’une initiative d’autonomisation des jeunes à un réseau régional établi, qui soutient l’entrepreneuriat local, l’éducation des enfants et la résilience des familles dans la région des Grands Lacs." en="From an initial youth empowerment initiative to an established regional network supporting local enterprise, child education, and family resilience in the Great Lakes." />
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-320 px-8 py-16 mx-auto max-md:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-primary pl-6 ml-4 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute -left-[2.05rem] top-1.5" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  {item.year}
                </span>
                <h2 className="text-xl font-bold text-accent [font-family:questa,_serif] mb-2">
                  <LanguageText fr={item.titleFr} en={item.title} />
                </h2>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  <LanguageText fr={item.descriptionFr} en={item.description} />
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-surface-2 rounded-sm border-l-4 border-primary">
            <h3 className="text-xl font-bold [font-family:questa,_serif] text-accent mb-2">
              <LanguageText fr="La conviction du fondateur" en="Founder&apos;s Conviction" />
            </h3>
            <blockquote className="italic text-foreground/80 leading-relaxed mb-4 text-base">
              <LanguageText fr="« La véritable transformation ne vient pas de l’assistanat. Elle advient lorsque les jeunes et les femmes des communautés disposent des outils, de la rigueur financière et de la confiance technique nécessaires pour bâtir des solutions durables. »" en="“True transformation never comes from hand-outs. It emerges when grassroots youth and women gain the tools, the financial discipline, and the technical confidence to build solutions that last.”" />
            </blockquote>
            <p className="font-semibold text-primary text-sm">
              — Isaac Bugeri, <LanguageText fr="fondateur de HOJA Network" en="Founder of HOJA Network" />
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/who-we-are/leadership-and-governance" className="text-sm font-bold text-primary hover:underline">
              <LanguageText fr="Découvrir notre équipe dirigeante et notre gouvernance →" en="Discover our Leadership &amp; Governance Team →" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
