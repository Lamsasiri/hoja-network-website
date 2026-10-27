"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function ContactForm() {
  const { language } = useLanguage();
  const fr = language === "fr";
  return (
    <div className="border border-border p-8 rounded-sm bg-background shadow-sm">
      <h3 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-2">
        {fr ? "Envoyez-nous un message" : "Send Us a Direct Message"}
      </h3>
      <p className="text-sm text-foreground/75 mb-6">
        {fr ? "Nous répondons aux demandes vérifiées sous 48 heures ouvrables." : "We respond to all verified inquiries within 48 business hours."}
      </p>
      <form className="space-y-4" action="mailto:contact@hojanetwork.org" method="GET">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
              {fr ? "Votre nom *" : "Your Name *"}
            </label>
            <input id="contact-name" type="text" required name="name" placeholder={fr ? "Jean Dupont" : "Jane Doe"} className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
              {fr ? "Adresse e-mail *" : "Email Address *"}
            </label>
            <input id="contact-email" type="email" required name="email" placeholder="jane@example.org" className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary" />
          </div>
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
            {fr ? "Objet *" : "Subject *"}
          </label>
          <input id="contact-subject" type="text" required name="subject" placeholder={fr ? "Demande générale / visite / médias / programmes" : "General inquiry / field visit / media / programs"} className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-accent mb-1">
            {fr ? "Message *" : "Message *"}
          </label>
          <textarea id="contact-message" rows={5} required name="body" placeholder={fr ? "Écrivez votre message ici…" : "Type your message here…"} className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary" />
        </div>
        <button type="submit" className="w-full sm:w-auto py-3 px-8 bg-primary hover:bg-primary/90 text-background font-bold uppercase tracking-wider text-sm rounded-sm transition-colors cursor-pointer">
          {fr ? "Envoyer le message" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
