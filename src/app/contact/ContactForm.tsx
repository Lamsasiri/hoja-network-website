"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactForm() {
  const { language } = useLanguage();
  const fr = language === "fr";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
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
          subject,
          message,
          type: "contact",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || (fr ? "Une erreur est survenue." : "An error occurred."));
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          (fr
            ? "Impossible d'envoyer votre message pour le moment. Veuillez réessayer."
            : "Unable to send your message right now. Please try again.")
      );
    }
  }

  return (
    <div className="border border-border p-8 rounded-sm bg-background shadow-sm">
      <h3 className="[font-family:questa,_serif] text-2xl font-bold text-accent mb-2">
        {fr ? "Envoyez-nous un message" : "Send Us a Direct Message"}
      </h3>
      <p className="text-sm text-foreground/75 mb-6">
        {fr
          ? "Nous répondons aux demandes vérifiées sous 48 heures ouvrables."
          : "We respond to all verified inquiries within 48 business hours."}
      </p>

      {status === "success" ? (
        <div className="p-6 bg-primary/10 border border-primary text-primary rounded-sm mb-6">
          <h4 className="font-bold text-base mb-1">
            {fr ? "✓ Message envoyé avec succès !" : "✓ Message Sent Successfully!"}
          </h4>
          <p className="text-sm">
            {fr
              ? "Merci pour votre prise de contact. Notre équipe à Goma et Rubavu vous répondra dans les plus brefs délais."
              : "Thank you for reaching out. Our team across Goma and Rubavu will respond as soon as possible."}
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs font-bold uppercase tracking-wider underline hover:opacity-80 cursor-pointer"
          >
            {fr ? "Envoyer un autre message" : "Send another message"}
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
                  href={`mailto:contact@hojanetwork.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                  className="font-bold underline"
                >
                  contact@hojanetwork.org
                </a>
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold uppercase tracking-wider text-accent mb-1"
              >
                {fr ? "Votre nom *" : "Your Name *"}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={fr ? "Jean Dupont" : "Jane Doe"}
                className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold uppercase tracking-wider text-accent mb-1"
              >
                {fr ? "Adresse e-mail *" : "Email Address *"}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.org"
                className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-bold uppercase tracking-wider text-accent mb-1"
            >
              {fr ? "Objet *" : "Subject *"}
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={
                fr
                  ? "Demande générale / visite / médias / programmes"
                  : "General inquiry / field visit / media / programs"
              }
              className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold uppercase tracking-wider text-accent mb-1"
            >
              {fr ? "Message *" : "Message *"}
            </label>
            <textarea
              id="contact-message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={fr ? "Écrivez votre message ici…" : "Type your message here…"}
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
                ? "Envoyer le message"
                : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
