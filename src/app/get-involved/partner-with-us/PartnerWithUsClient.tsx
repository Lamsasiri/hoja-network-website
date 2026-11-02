"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnerWithUsPage() {
  const { language } = useLanguage();
  const fr = language === "fr";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [pillar, setPillar] = useState("general");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization,
          subject: `Partenariat (${pillar}) : ${organization || name}`,
          message,
          type: "partner",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || (fr ? "Une erreur est survenue." : "An error occurred."));
      }

      setStatus("success");
      setName("");
      setEmail("");
      setOrganization("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          (fr
            ? "Impossible d'envoyer votre proposition pour le moment. Veuillez réessayer."
            : "Unable to send your proposal right now. Please try again.")
      );
    }
  }

  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            {fr ? "Alliances stratégiques et partenariats" : "Strategic Alliances & Partnerships"}
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            {fr ? "Devenir partenaire de HOJA Network" : "Partner with HOJA Network"}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            {fr ? "Concevons ensemble des solutions durables et positives pour la nature avec une équipe communautaire expérimentée, ancrée dans l’est de la RDC et la région des Grands Lacs." : "Co-designing lasting, nature-positive solutions with an experienced grassroots team grounded in Eastern DRC and the Great Lakes borderlands."}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-4">
                {fr ? "Pourquoi collaborer avec HOJA Network ?" : "Why Collaborate with HOJA Network?"}
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 mb-4">
                {fr ? "HOJA Network met en relation des fondations philanthropiques, des agences bilatérales de développement, des alliances de conservation et des entreprises à impact avec des initiatives communautaires vérifiées dans l’est de la RDC et les territoires voisins." : "HOJA Network connects philanthropic foundations, bilateral development agencies, conservation alliances, and corporate social innovators directly with verified community initiatives in Eastern DRC and neighboring territories."}
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                {fr ? "Nous relions les normes mondiales de gouvernance environnementale et sociale à une présence quotidienne fondée sur la confiance auprès des associations de jeunes, des commerçantes, des petits exploitants et des responsables communautaires." : "We connect global environmental and social governance standards with a trusted daily presence among youth associations, women merchants, smallholders, and community leaders."}
              </p>
            </div>

            {/* Strategic Partnership Pathways */}
            <div className="space-y-6">
              <h3 className="[font-family:questa,_serif] text-xl font-bold text-accent">
                {fr ? "Axes principaux de collaboration" : "Core Collaboration Pathways"}
              </h3>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-primary mb-2">{fr ? "1. Cuisson propre et transition vers les énergies renouvelables" : "1. Clean Cooking & Renewable Energy Transition"}</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {fr ? "Soutenez la distribution de foyers biomasse économes en combustible, de solutions solaires décentralisées et la formation de jeunes techniciens à la maintenance énergétique à Goma et dans les zones périurbaines." : "Support the distribution of fuel-efficient biomass cookstoves, decentralized solar micro-solutions, and sponsor youth technicians in clean energy maintenance across Goma and peri-urban hubs."}
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-color-011 mb-2">{fr ? "2. Paysage des Virunga et conservation communautaire" : "2. Virunga Landscape & Community Conservation"}</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {fr ? "Co-financez la restauration écologique menée par les communautés, les pépinières d’arbres et des moyens de subsistance favorables à la nature (apiculture, jardins écologiques) pour les familles vivant dans les zones tampons protégées." : "Co-fund community-led ecological restoration, tree seedling nurseries, and nature-positive livelihoods (beekeeping, eco-gardens) for families residing in protected area buffer zones."}
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-4">
                <h4 className="text-lg font-bold text-color-008 mb-2">{fr ? "3. Agroforesterie du bassin du Congo et protection des forêts" : "3. Congo Basin Agroforestry & Forest Protection"}</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {fr ? "Participez à des modèles d’agroforesterie pour petits exploitants, à la conservation des sols et à des accords communautaires de gestion des terres afin de limiter la pression agricole sur les lisières de la forêt tropicale." : "Partner on smallholder agroforestry models, soil conservation, and community land stewardship agreements to curb agricultural pressure on tropical rainforest margins."}
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-2">
                <h4 className="text-lg font-bold text-color-012 mb-2">{fr ? "4. Accélérateur d’entreprises vertes pour les jeunes et les femmes" : "4. Green Youth & Women Enterprise Accelerator"}</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {fr ? "Soutenez des cohortes d’incubation et des kits de démarrage pour les jeunes entrepreneurs et les commerçantes transfrontalières qui lancent des activités circulaires dans le recyclage créatif, le compostage biologique et les services écologiques." : "Sponsor incubation cohorts and business starter kits for young entrepreneurs and female cross-border traders launching circular enterprises in waste upcycling, organic compost, and eco-services."}
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm bg-surface-3">
                <h4 className="text-lg font-bold text-accent mb-2">{fr ? "5. Innovation numérique responsable et solutions pour la nature" : "5. Responsible Digital & Nature Innovation"}</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {fr ? "Collaborez à des outils sobres et à code source ouvert pour le suivi environnemental, la cartographie de la restauration sur le terrain et le suivi transparent de l’impact, avec validation humaine obligatoire." : "Collaborate on frugal, open-source environmental telemetry, field restoration mapping, and transparent impact monitoring tools operated with mandatory human validation."}
                </p>
              </div>
            </div>

            {/* Documented Institutional Ecosystem & Alliances */}
            <div className="space-y-6 pt-6 border-t border-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                  {fr ? "Transparence et cadre institutionnel" : "Transparency &amp; Institutional Framework"}
                </span>
                <h3 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-2">
                  {fr ? "Écosystème de partenaires et réseaux documentés" : "Our Partner Ecosystem &amp; Documented Networks"}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {fr ? "Conformément à nos principes de rigueur et d’intégrité, nous distinguons nos affiliations fondatrices, nos autorisations légales, nos réseaux de concertation et nos cadres de coopération historiques :" : "In keeping with our principles of rigor and integrity, we distinguish founding affiliations, legal authorizations, consultation networks, and historical cooperation frameworks:"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* 2. Ministère Justice RDC */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Ministère de la Justice (RDC)</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {fr ? "Autorisation légale" : "Legal authorization"}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    {fr ? "Autorisation ministérielle n° " : "Ministerial authorization no. "}<code>JUST.G.S. 112/S-KV/0508/2021</code>{fr ? " conférant la personnalité juridique d’ASBL pour nos actions d’utilité publique." : " granting ASBL legal status for our public-interest work."}
                  </p>
                </div>

                {/* 3. RGB Rwanda */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">Rwanda Governance Board (RGB)</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {fr ? "Autorisation active" : "Active authorization"}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    {fr ? "Autorisation légale d’opération transfrontalière e-Imiryango n° " : "Legal authorization for cross-border e-Imiryango operations no. "}<code>058/2024</code>{fr ? " pour nos programmes d’action communautaire à Rubavu." : " for our community action programs in Rubavu."}
                  </p>
                </div>

                {/* 4. RAVEC RDC */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">RAVEC RDC</span>
                    <span className="text-[10px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                      {fr ? "Concertation économique" : "Economic consultation"}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    {fr ? <>Réseau des Acteurs de la Valorisation de l’Entrepreneuriat au Congo, présidé par Héritier Kitumaini, pour l’insertion des jeunes entrepreneurs.</> : <>Network of Actors Promoting Entrepreneurship in Congo, chaired by Héritier Kitumaini, supporting young entrepreneurs’ integration.</>}
                  </p>
                </div>

                {/* 5. Historical Project Referents */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">{fr ? "Cadres techniques et bailleurs" : "Technical Partners &amp; Donors"}</span>
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {fr ? "Références historiques" : "Historical references"}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    {fr ? "Programmes historiquement menés en synergie avec des cadres de développement multilatéraux et bilatéraux (Enabel, GIZ, USAID et fondations partenaires)." : "Programs historically carried out in coordination with multilateral and bilateral development frameworks (Enabel, GIZ, USAID, and partner foundations)."}
                  </p>
                </div>

                {/* 6. Grassroots */}
                <div className="p-4 bg-surface-2 rounded-sm border border-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-accent uppercase tracking-wider">{fr ? "Réseaux paysans et commerçantes" : "Farmer &amp; Women Trader Networks"}</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {fr ? "Ancrage local" : "Grassroots network"}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-normal">
                    {fr ? "Coopératives agricoles riveraines du corridor des Virunga et cercles de solidarité de commerçantes transfrontalières entre Goma et Rubavu." : "Agricultural cooperatives near the Virunga corridor and solidarity groups of women cross-border traders between Goma and Rubavu."}
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="border border-border p-8 rounded-sm bg-background shadow-sm">
              <h3 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-2">
                {fr ? "Engageons le dialogue sur un partenariat" : "Start a Partnership Dialogue"}
              </h3>
              <p className="text-sm text-foreground/75 mb-6">
                {fr ? "Présentez votre organisation et expliquez comment vous souhaitez collaborer avec HOJA Network." : "Tell us about your organization and how you would like to collaborate with HOJA Network."}
              </p>

              {status === "success" ? (
                <div className="p-6 bg-primary/10 border border-primary text-primary rounded-sm mb-6">
                  <h4 className="font-bold text-base mb-1">
                    {fr ? "✓ Demande de partenariat transmise avec succès !" : "✓ Partnership Inquiry Sent Successfully!"}
                  </h4>
                  <p className="text-sm">
                    {fr
                      ? "Merci pour votre intérêt. La direction des partenariats et des programmes examinera votre proposition sous 48 heures ouvrables."
                      : "Thank you for your interest. Our partnerships and executive team will review your proposal within 48 business hours."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-bold uppercase tracking-wider underline hover:opacity-80 cursor-pointer"
                  >
                    {fr ? "Soumettre une autre proposition" : "Submit another inquiry"}
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500 text-red-700 text-sm rounded-sm">
                      <p>{errorMessage}</p>
                      <p className="mt-2 text-xs">
                        {fr
                          ? "Vous pouvez également nous écrire directement à : "
                          : "You can also write to us directly at: "}
                        <a
                          href={`mailto:partnership@hojanetwork.org?subject=${encodeURIComponent(`Partenariat : ${organization || name}`)}&body=${encodeURIComponent(message)}`}
                          className="font-bold underline"
                        >
                          partnership@hojanetwork.org
                        </a>
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                        {fr ? "Nom complet *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={fr ? "Ex. : Marie Dupont" : "e.g. Marie Dupont"}
                        className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                        {fr ? "Adresse courriel *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={fr ? "Ex. : marie@foundation.org" : "e.g. marie@foundation.org"}
                        className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                        {fr ? "Organisation / fondation" : "Organization / Foundation"}
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder={fr ? "Nom de l’organisation" : "Organization Name"}
                        className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                        {fr ? "Axe / domaine d’intérêt" : "Pillar / Focus Area of Interest"}
                      </label>
                      <select
                        value={pillar}
                        onChange={(e) => setPillar(e.target.value)}
                        className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                      >
                        <option value="general">{fr ? "Partenariat stratégique général" : "General Strategic Partnership"}</option>
                        <option value="pillar-1">{fr ? "Axe 1 : Énergies renouvelables et cuisson propre" : "Pillar 1: Renewable Energy & Clean Cooking"}</option>
                        <option value="pillar-2">{fr ? "Axe 2 : Biodiversité et paysage des Virunga" : "Pillar 2: Biodiversity & Virunga Landscape"}</option>
                        <option value="pillar-3">{fr ? "Axe 3 : Forêt du bassin du Congo et agroforesterie" : "Pillar 3: Congo Basin Forest & Agroforestry"}</option>
                        <option value="pillar-4">{fr ? "Axe 4 : Entrepreneuriat vert des jeunes et des femmes" : "Pillar 4: Green Youth & Women Enterprise"}</option>
                        <option value="digital-ai">{fr ? "Innovation numérique et IA responsables" : "Responsible Digital & AI Innovation"}</option>
                        <option value="green-great-lakes">{fr ? "Initiative Hoja Green Great Lakes (régionale)" : "Hoja Green Great Lakes Initiative (Regional)"}</option>
                        <option value="community-education">{fr ? "HOJA EDUC et résilience familiale" : "HOJA EDUC & Family Resilience"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      {fr ? "Votre message / proposition *" : "Your Message / Proposal *"}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={fr ? "Décrivez votre proposition de collaboration, son alignement stratégique ou vos questions institutionnelles…" : "Describe your proposed collaboration, strategic alignment, or institutional questions..."}
                      className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto py-3 px-8 bg-primary hover:bg-primary/90 text-background font-bold uppercase tracking-wider text-sm rounded-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {status === "submitting"
                      ? fr
                        ? "Envoi en cours…"
                        : "Sending…"
                      : fr
                        ? "Envoyer une demande de partenariat"
                        : "Send Partnership Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>


          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3">{fr ? "Contacts directs de la direction" : "Direct Executive Contacts"}</h3>
              <div className="space-y-4 text-sm text-foreground/85">
                <div>
                  <div className="font-bold text-background">Daniel Mirambi</div>
                  <div className="text-xs text-primary">{fr ? "Directeur exécutif" : "Executive Director"}</div>
                  <a href="mailto:contact@hojanetwork.org" className="text-xs underline hover:text-primary">
                    contact@hojanetwork.org
                  </a>
                </div>
                <div className="pt-2 border-t border-background/15">
                  <div className="font-bold text-background">Isaac Bugeri</div>
                  <div className="text-xs text-primary">{fr ? "Fondateur" : "Founder"}</div>
                  <a href="mailto:bugeri@hojanetwork.org" className="text-xs underline hover:text-primary">
                    bugeri@hojanetwork.org
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-3 rounded-sm border border-border text-sm">
              <h3 className="font-bold text-accent text-base mb-3">{fr ? "Statut légal et institutionnel" : "Legal &amp; Institutional Status"}</h3>
              <p className="text-foreground/80 mb-2">
                <strong>{fr ? "RDC :" : "DRC:"}</strong> {fr ? "ASBL enregistrée sous l’autorisation ministérielle" : "Registered NGO under Ministerial authorization"} <code>JUST.G.S. 112/S-KV/0508/2021</code>.
              </p>
              <p className="text-foreground/80 mb-2">
                <strong>{fr ? "Rwanda :" : "Rwanda:"}</strong> {fr ? "Autorisée par le Rwanda Governance Board (RGB)" : "Authorized under Rwanda Governance Board (RGB)"} <code>{fr ? "n°" : "No."} 058/2024</code>.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
