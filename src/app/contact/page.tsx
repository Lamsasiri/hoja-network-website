import LanguageText from "../../components/LanguageText";
import ContactForm from "./ContactForm";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  path: "/contact",
  title: "Contact Us | HOJA Network",
  description: "Get in touch with HOJA Network headquarters in Goma (DRC) and regional office in Rubavu (Rwanda). Verified addresses, phone numbers, and contact form.",
});



export default function ContactPage() {
  return (
    <main className="mt-[10.3125rem] bg-background max-lg:mt-0" id="main">
      {/* Hero */}
      <section className="relative bg-accent text-background py-16 px-6 lg:py-24">
        <div className="max-w-300 mx-auto">
          <div className="inline-block bg-primary text-background font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4">
            <LanguageText fr="Restons en contact" en="Connect With Us" />
          </div>
          <h1 className="[font-family:questa,_serif] text-3xl md:text-5xl font-bold leading-tight max-w-240">
            <LanguageText fr="Contacter HOJA Network" en="Contact HOJA Network" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-200 leading-relaxed">
            <LanguageText fr="Contactez nos bureaux de Goma (RDC) et de Rubavu (Rwanda) pour vos demandes institutionnelles, partenariats ou programmes communautaires." en="Reach our field offices in Goma (DRC) and Rubavu (Rwanda) for institutional inquiries, partnerships, or community programs." />
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details & Addresses (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="[font-family:questa,_serif] text-2xl md:text-3xl font-bold text-accent mb-6">
                <LanguageText fr="Nos bureaux" en="Our Physical Presence" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* DRC Office */}
                <div className="border border-border p-6 rounded-sm bg-surface-2">
                  <div className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-background rounded-sm mb-3">
                    <LanguageText fr="Siège (RDC)" en="Headquarters (DRC)" />
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-2">Goma, North Kivu</h3>
                  <div className="text-sm text-foreground/85 space-y-2">
                    <p>
                      <strong><LanguageText fr="Adresse :" en="Address:" /></strong><br />
                      Rond-point des Banques, Centre-ville<br />
                      (Bâtiment de l&apos;ancien Hôtel Rusina, 1er étage)<br />
                      Goma, Province du Nord-Kivu, RD Congo
                    </p>
                    <p>
                      <strong><LanguageText fr="Téléphone / WhatsApp :" en="Phone / WhatsApp:" /></strong><br />
                      <a href="tel:+243897715819" className="text-primary hover:underline font-semibold block">+243 897 715 819</a>
                    </p>
                    <p>
                      <strong><LanguageText fr="Enregistrement officiel :" en="Official Reg:" /></strong><br />
                      <code className="text-xs bg-background px-2 py-0.5 rounded">JUST.G.S. 112/S-KV/0508/2021</code>
                    </p>
                  </div>
                </div>

                {/* Rwanda Office */}
                <div className="border border-border p-6 rounded-sm bg-surface-3">
                  <div className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-color-011 text-background rounded-sm mb-3">
                    <LanguageText fr="Bureau régional (Rwanda)" en="Regional Office (Rwanda)" />
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-2">Rubavu / Gisenyi</h3>
                  <div className="text-sm text-foreground/85 space-y-2">
                    <p>
                      <strong><LanguageText fr="Adresse :" en="Address:" /></strong><br />
                      Gisenyi Sector, Rubavu District<br />
                      Western Province<br />
                      <LanguageText fr="République du Rwanda" en="Republic of Rwanda" />
                    </p>
                    <p>
                      <strong><LanguageText fr="Téléphone / WhatsApp :" en="Phone / WhatsApp:" /></strong><br />
                      <a href="tel:+250794359736" className="text-primary hover:underline font-semibold block">+250 794 359 736</a>
                    </p>
                    <p>
                      <strong>E-mail :</strong><br />
                      <a href="mailto:hojacommunication@gmail.com" className="text-primary hover:underline font-semibold block">hojacommunication@gmail.com</a>
                    </p>
                    <p>
                      <strong><LanguageText fr="Enregistrement RDB :" en="RDB Registration:" /></strong><br />
                      <span className="text-sm"><LanguageText fr="n° 131851993 — entreprise sociale (limited by guarantee), enregistrée le 26/02/2025" en="No. 131851993 — social enterprise (limited by guarantee), registered on 26/02/2025" /></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 bg-accent text-background rounded-sm">
              <h3 className="font-bold text-lg mb-3"><LanguageText fr="Horaires et visites" en="Office Hours &amp; Visits" /></h3>
              <div className="space-y-3 text-sm text-background/90">
                <p>
                  <strong className="text-background"><LanguageText fr="Lundi – vendredi :" en="Monday – Friday:" /></strong><br />
                  08:30 – 17:00 (CAT / GMT+2)
                </p>
                <p>
                  <strong className="text-background"><LanguageText fr="Samedi :" en="Saturday:" /></strong><br />
                  09:00 – 13:00 (<LanguageText fr="suivi de terrain uniquement" en="Field monitoring only" />)
                </p>
                <p>
                  <strong className="text-background"><LanguageText fr="Dimanche :" en="Sunday:" /></strong> <LanguageText fr="fermé" en="Closed" />
                </p>
                <div className="pt-3 border-t border-background/30 text-xs text-background/85">
                  <em><LanguageText fr="Remarque : pour des raisons de sécurité et de logistique dans la région frontalière, les visiteurs et délégations sont invités à prendre rendez-vous au moins 48 heures à l’avance." en="Note: Due to security and logistics protocols in the border region, external visitors and delegations are invited to schedule meetings at least 48 hours in advance." /></em>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-2 rounded-sm border border-border">
              <h3 className="font-bold text-accent text-base mb-2"><LanguageText fr="Médias et presse" en="Media &amp; Press" /></h3>
              <p className="text-sm text-foreground/80 mb-3">
                <LanguageText fr="Journalistes, chercheurs et partenaires médias couvrant l’autonomisation des jeunes, l’entrepreneuriat féminin, la protection de l’enfance ou l’action humanitaire dans la région des Grands Lacs :" en="Journalists, researchers, and media partners covering youth empowerment, women's enterprise, child protection, or humanitarian action in the Great Lakes region:" />
              </p>
              <a href="mailto:contact@hojanetwork.org" className="text-xs font-bold text-primary hover:underline">
                press@hojanetwork.org →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
