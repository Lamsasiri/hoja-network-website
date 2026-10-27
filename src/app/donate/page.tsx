"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { DONATION_CONFIG } from "@/config/donation";

const copy = {
  fr: {
    heroBadge: "Don institutionnel sécurisé", heroTitle: "Soutenir les initiatives de HOJA Network", heroIntro: "Votre contribution soutient des solutions communautaires pour l’énergie propre, la conservation de la nature, l’entrepreneuriat vert et la résilience familiale.",
    drcRegistration: "Enregistrement RDC", rwandaAuthorization: "Autorisation Rwanda", governance: "Gouvernance", governanceDetail: "Contrôle financier et rapports transparents",
    bankTab: "Virement bancaire", bankAudience: "Pour les fondations, partenaires institutionnels et donateurs individuels.", antiFraudActive: "Vérification anti-fraude active", bankProtocol: "Protocole bancaire sécurisé", bankConfirmation: "Les coordonnées complètes sont communiquées après vérification de la demande.", beneficiary: "Bénéficiaire", receiptOnRequest: "Reçu officiel sur demande", bankCtaTitle: "Demander les coordonnées bancaires officielles", bankCtaBody: "Aucune coordonnée bancaire n’est publiée avant validation par la direction financière.", contactFinance: "Contacter les finances",
    donationIn: "Don en", network: "Réseau", confirmations: "Confirmations requises", institutionalVerification: "Vérification institutionnelle", digitalAssetsIntro: "Les actifs numériques sont acceptés uniquement après validation des coordonnées officielles par notre équipe financière.", antiSpoofingTitle: "Protection contre l’usurpation", antiSpoofingBody: "Ne transférez aucun fonds vers une adresse reçue par un canal non vérifié. Demandez toujours une adresse officielle signée à HOJA Network.", treasuryStatus: "Trésorerie en cours de configuration", bitcoinAddressTitle: "Adresse Bitcoin non publiée", cryptoAddressNotice: "Aucune adresse de dépôt n’est actuellement configurée. Contactez directement l’équipe financière pour obtenir une adresse vérifiée.", requestBitcoinAddress: "Demander une adresse vérifiée",
    stablecoin: "stablecoin", usdtIntro: "Choisissez le réseau souhaité pour consulter son statut de configuration.", networkSelectorActive: "Sélecteur de réseau actif", selectNetwork: "Sélectionner un réseau", assetProtocol: "Actif et protocole", issuingNetwork: "Réseau de transfert", recommendation: "Important", protocolWarning: "N’envoyez aucun USDT avant d’avoir reçu et vérifié l’adresse officielle sur le réseau sélectionné.", requestUsdtAddress: "Demander l’adresse vérifiée",
    impactHeading: "L’impact de votre contribution", impactIntro: "Les allocations indiquées décrivent les affectations prévues pour chaque domaine d’intervention.", transparencyHeading: "Transparence et reçus", transparencyBody: "HOJA Network s’engage à assurer une gestion responsable des fonds, un suivi des activités et la remise de reçus officiels sur demande, conformément aux procédures applicables.", directContact: "Contact direct", governanceTeam: "Équipe de gouvernance", becomePartner: "Devenir partenaire",
  },
  en: {
    heroBadge: "Secure institutional giving", heroTitle: "Support HOJA Network’s initiatives", heroIntro: "Your contribution supports community solutions for clean energy, nature conservation, green enterprise, and family resilience.",
    drcRegistration: "DRC registration", rwandaAuthorization: "Rwanda authorization", governance: "Governance", governanceDetail: "Financial oversight and transparent reporting",
    bankTab: "Bank transfer", bankAudience: "For foundations, institutional partners, and individual donors.", antiFraudActive: "Active anti-fraud checks", bankProtocol: "Secure banking protocol", bankConfirmation: "Complete details are shared after the request has been reviewed.", beneficiary: "Beneficiary", receiptOnRequest: "Official receipt upon request", bankCtaTitle: "Request official bank details", bankCtaBody: "Bank details are not published before approval by the finance team.", contactFinance: "Contact finance",
    donationIn: "Donate in", network: "Network", confirmations: "Required confirmations", institutionalVerification: "Institutional verification", digitalAssetsIntro: "Digital assets are accepted only after the official details have been approved by our finance team.", antiSpoofingTitle: "Protection against impersonation", antiSpoofingBody: "Do not transfer funds to an address received through an unverified channel. Always request an official, verified address from HOJA Network.", treasuryStatus: "Treasury setup in progress", bitcoinAddressTitle: "Bitcoin address not published", cryptoAddressNotice: "No deposit address is currently configured. Contact the finance team directly to request a verified address.", requestBitcoinAddress: "Request a verified address",
    stablecoin: "stablecoin", usdtIntro: "Choose a network to view its setup status.", networkSelectorActive: "Network selector active", selectNetwork: "Select a network", assetProtocol: "Asset and protocol", issuingNetwork: "Transfer network", recommendation: "Important", protocolWarning: "Do not send USDT until you have received and verified the official address for the selected network.", requestUsdtAddress: "Request a verified address",
    impactHeading: "The impact of your contribution", impactIntro: "The allocations shown describe the intended use of funds for each program area.", transparencyHeading: "Transparency and receipts", transparencyBody: "HOJA Network is committed to responsible fund management, activity monitoring, and providing official receipts upon request, in accordance with applicable procedures.", directContact: "Direct contact", governanceTeam: "Governance team", becomePartner: "Become a partner",
  },
} as const;

export default function DonatePage() {
  const { language } = useLanguage();
  const c = copy[language];
  const [selectedMethod, setSelectedMethod] = useState<"wire" | "btc" | "usdt">("wire");
  const [selectedUsdtNetwork, setSelectedUsdtNetwork] = useState<string>("trc20");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldId: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const usdtNetworks = DONATION_CONFIG.supportedMethods.usdt.networks;
  const currentUsdt = usdtNetworks.find(n => n.networkId === selectedUsdtNetwork) || usdtNetworks[0];
  const bankEmail = new URLSearchParams({ subject: language === "fr" ? "Demande de coordonnées bancaires pour un don à HOJA Network" : "Request for HOJA Network donation bank details" });
  const bitcoinEmail = new URLSearchParams({
    subject: language === "fr" ? "Don en Bitcoin (BTC) — HOJA Network" : "Bitcoin (BTC) donation — HOJA Network",
    body: language === "fr"
      ? "Bonjour, je souhaite effectuer une contribution en Bitcoin (BTC) pour soutenir vos initiatives. Merci de me transmettre l'adresse de dépôt officielle vérifiée et la procédure de reçu."
      : "Hello, I would like to make a Bitcoin (BTC) contribution in support of your work. Please send me the verified official deposit address and receipt procedure.",
  });
  const usdtEmail = new URLSearchParams({
    subject: `Donation USDT (${currentUsdt.networkName}) — HOJA Network`,
    body: language === "fr"
      ? `Bonjour, je souhaite effectuer une contribution en USDT sur le réseau ${currentUsdt.networkName}. Merci de me transmettre l'adresse officielle vérifiée.`
      : `Hello, I would like to make a USDT contribution on the ${currentUsdt.networkName} network. Please send me the verified official address.`,
  });

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 max-lg:pt-24" id="main">
      {/* Hero Section */}
      <section className="max-w-300 mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-3 rounded-full text-xs font-bold uppercase tracking-wider text-accent mb-4 border border-border">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {c.heroBadge}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold [font-family:questa,_serif] text-accent mb-4 leading-tight">
          {c.heroTitle}
        </h1>
        <p className="max-w-220 mx-auto text-base md:text-lg text-foreground/80 leading-relaxed">
          {c.heroIntro}
        </p>

        {/* Legal credentials banner */}
        <div className="mt-8 p-4 bg-surface-2 rounded-sm border border-border max-w-240 mx-auto text-xs text-muted-foreground flex flex-wrap justify-around gap-4 text-left md:text-center">
          <div>
            <strong className="text-foreground">{c.drcRegistration}</strong> ASBL No. <code>JUST.G.S. 112/S-KV/0508/2021</code>
          </div>
          <div>
            <strong className="text-foreground">{c.rwandaAuthorization}</strong> RGB No. <code>058/2024</code>
          </div>
          <div>
            <strong className="text-foreground">{c.governance}</strong> {c.governanceDetail}
          </div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-300 mx-auto px-6 mb-16">
        <div className="bg-surface-1 border border-border rounded-sm shadow-sm overflow-hidden">
          {/* Method Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border bg-surface-2 text-sm font-bold">
            <button
              type="button"
              onClick={() => setSelectedMethod("wire")}
              className={`py-4 px-6 text-center transition-colors flex items-center justify-center gap-2 border-b-2 md:border-b-0 md:border-r border-border ${
                selectedMethod === "wire"
                  ? "bg-background text-accent border-b-accent md:border-r-border"
                  : "text-foreground/70 hover:bg-surface-3"
              }`}
            >
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>{c.bankTab}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod("btc")}
              className={`py-4 px-6 text-center transition-colors flex items-center justify-center gap-2 border-b-2 md:border-b-0 md:border-r border-border ${
                selectedMethod === "btc"
                  ? "bg-background text-accent border-b-accent md:border-r-border"
                  : "text-foreground/70 hover:bg-surface-3"
              }`}
            >
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 14.5v1.5h-1.5v-1.5h-1.2v1.5h-1.5v-1.5H6.5v-1.8h1.2c.4 0 .6-.2.6-.6v-6.2c0-.4-.2-.6-.6-.6H6.5V6.6h2.9V5.1h1.5v1.5h1.2V5.1h1.5v1.5c2.1.1 3.4 1 3.4 2.8 0 1.2-.6 2.1-1.6 2.5 1.3.4 2 1.4 2 2.8 0 1.8-1.4 2.8-3.8 2.8zm-1.8-6.4c1.1 0 1.9-.4 1.9-1.3 0-.9-.8-1.3-1.9-1.3h-1.6v2.6h1.6zm.4 4.5c1.3 0 2.2-.4 2.2-1.5s-.9-1.5-2.2-1.5h-2v3h2z"/>
              </svg>
              <span>Bitcoin (BTC)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod("usdt")}
              className={`py-4 px-6 text-center transition-colors flex items-center justify-center gap-2 ${
                selectedMethod === "usdt"
                  ? "bg-background text-accent border-b-accent"
                  : "text-foreground/70 hover:bg-surface-3"
              }`}
            >
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 6.5h-2.5v1.2c2.2.2 3.8.8 3.8 1.5 0 .7-1.6 1.3-3.8 1.5v3.8h-2.6v-3.8c-2.2-.2-3.8-.8-3.8-1.5 0-.7 1.6-1.3 3.8-1.5V8.5H8.2V6.8h7.6v1.7z"/>
              </svg>
              <span>Tether (USDT)</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10">
            {/* METHOD 1: BANK WIRE */}
            {selectedMethod === "wire" && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-bold [font-family:questa,_serif] text-accent">
                      {language === "fr" ? DONATION_CONFIG.supportedMethods.bankWire.title : DONATION_CONFIG.supportedMethods.bankWire.titleEn}
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      {c.bankAudience}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded text-amber-700 text-xs font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{c.antiFraudActive}</span>
                  </div>
                </div>

                {/* Instructions Box */}
                <div className="bg-surface-2 p-5 rounded-sm border border-border mb-8 text-sm leading-relaxed text-foreground/90">
                  <p className="font-semibold text-accent mb-2">
                    {c.bankProtocol}
                  </p>
                  <p className="mb-3">
                    {language === "fr" ? DONATION_CONFIG.supportedMethods.bankWire.wireInstructions : DONATION_CONFIG.supportedMethods.bankWire.wireInstructionsEn}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {c.bankConfirmation}
                  </p>
                </div>

                {/* Account currencies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {DONATION_CONFIG.supportedMethods.bankWire.accounts.map((acc, idx) => (
                    <div key={idx} className="bg-surface-3 p-5 rounded-sm border border-border flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-accent text-lg">{acc.currency}</span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-0.5 bg-surface-1 rounded">
                            {language === "fr" ? acc.country : acc.countryEn}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{language === "fr" ? acc.bankName : acc.bankNameEn}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{c.beneficiary}: {acc.accountName}</p>
                        <p className="text-xs text-foreground/80 italic leading-snug">
                          {language === "fr" ? acc.statusNotice : acc.statusNoticeEn}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/60">
                        <span className="inline-block text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                          {c.receiptOnRequest}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Box */}
                <div className="bg-primary text-background p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-bold [font-family:questa,_serif]">
                      {c.bankCtaTitle}
                    </h3>
                    <p className="text-xs text-background/85 mt-1 max-w-160">
                      {c.bankCtaBody}
                    </p>
                  </div>
                  <a
                    href={`mailto:contact@hojanetwork.org?${bankEmail.toString()}`}
                    className="shrink-0 bg-background text-accent px-6 py-3 font-bold text-sm rounded-sm hover:bg-surface-2 transition-colors uppercase tracking-wider"
                  >
                    {c.contactFinance} →
                  </a>
                </div>
              </div>
            )}

            {/* METHOD 2: BITCOIN (BTC) */}
            {selectedMethod === "btc" && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-bold [font-family:questa,_serif] text-accent">
                      {c.donationIn} {DONATION_CONFIG.supportedMethods.bitcoin.titleEn}
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      {c.network}: <strong>{DONATION_CONFIG.supportedMethods.bitcoin.network}</strong> • {c.confirmations}: {DONATION_CONFIG.supportedMethods.bitcoin.minimumConfirmation}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded text-blue-700 text-xs font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>{c.institutionalVerification}</span>
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
                  <div className="space-y-4 text-sm text-foreground/85 leading-relaxed">
                    <p>
                      {c.digitalAssetsIntro}
                    </p>
                    <div className="p-4 bg-surface-2 rounded-sm border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-xs uppercase tracking-wider mb-1">
                        {c.antiSpoofingTitle}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {c.antiSpoofingBody}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language === "fr" ? DONATION_CONFIG.supportedMethods.bitcoin.statusNotice : DONATION_CONFIG.supportedMethods.bitcoin.statusNoticeEn}
                    </p>
                  </div>

                  {/* Verification Status Card */}
                  <div className="bg-surface-3 p-6 rounded-sm border border-border text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded mb-2">
                      {c.treasuryStatus}
                    </span>
                    <h3 className="font-bold text-base mb-2">{c.bitcoinAddressTitle}</h3>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto mb-4">
                      {c.cryptoAddressNotice}
                    </p>
                    <a
                      href={`mailto:contact@hojanetwork.org?${bitcoinEmail.toString()}`}
                      className="inline-block w-full py-3 px-4 bg-accent text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
                    >
                      {c.requestBitcoinAddress} →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* METHOD 3: TETHER (USDT) */}
            {selectedMethod === "usdt" && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-bold [font-family:questa,_serif] text-accent">
                      {c.donationIn} {DONATION_CONFIG.supportedMethods.usdt.titleEn} ({c.stablecoin})
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      {c.usdtIntro}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded text-accent text-xs font-semibold">
                    <span>{c.networkSelectorActive}</span>
                  </div>
                </div>

                {/* Network Selection Buttons */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    {c.selectNetwork}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {usdtNetworks.map((net) => (
                      <button
                        key={net.networkId}
                        type="button"
                        onClick={() => setSelectedUsdtNetwork(net.networkId)}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors ${
                          selectedUsdtNetwork === net.networkId
                            ? "bg-accent text-background border-accent"
                            : "bg-surface-2 text-foreground/80 border-border hover:bg-surface-3"
                        }`}
                      >
                        {net.networkName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Network Details */}
                <div className="bg-surface-2 p-6 rounded-sm border border-border mb-8">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-4 border-b border-border/60 mb-4">
                    <div>
                      <span className="text-xs text-muted-foreground block">{c.assetProtocol}</span>
                      <strong className="text-lg text-accent">{currentUsdt.symbol}</strong>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-xs text-muted-foreground block">{c.issuingNetwork}</span>
                      <span className="font-semibold text-sm">{currentUsdt.networkName}</span>
                    </div>
                  </div>

                  <p className="text-xs text-foreground/80 leading-relaxed mb-4">
                    {language === "fr" ? currentUsdt.statusNotice : currentUsdt.statusNoticeEn}
                  </p>

                  <div className="p-4 bg-surface-3 rounded border border-border/80 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-muted-foreground">
                      <strong>{c.recommendation}:</strong> {c.protocolWarning}
                    </div>
                    <a
                      href={`mailto:contact@hojanetwork.org?${usdtEmail.toString()}`}
                      className="shrink-0 px-4 py-2.5 bg-accent text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
                    >
                      {c.requestUsdtAddress} ({currentUsdt.networkName}) →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Allocation Section */}
      <section className="max-w-300 mx-auto px-6 mb-16">
        <header className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold [font-family:questa,_serif] text-accent mb-2">
            {c.impactHeading}
          </h2>
          <p className="text-sm text-foreground/75 max-w-xl mx-auto">
            {c.impactIntro}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DONATION_CONFIG.impactThemes.map((theme) => (
            <div key={theme.id} className="bg-surface-2 p-6 rounded-sm border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-accent text-background flex items-center justify-center font-bold text-sm mb-4">
                  ✓
                </div>
                <h3 className="font-bold text-base text-accent mb-2">{language === "fr" ? theme.title : theme.titleEn}</h3>
                <p className="text-xs text-foreground/80 leading-relaxed mb-4">{language === "fr" ? theme.description : theme.descriptionEn}</p>
              </div>
              <div className="pt-3 border-t border-border text-[11px] font-semibold text-accent/90">
                {language === "fr" ? theme.allocation : theme.allocationEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance & Fiscal Receipt */}
      <section className="max-w-300 mx-auto px-6">
        <div className="bg-surface-3 p-8 rounded-sm border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold [font-family:questa,_serif] text-accent">
              {c.transparencyHeading}
            </h3>
            <p className="text-xs text-foreground/80 leading-relaxed">
              {c.transparencyBody}
            </p>
            <p className="text-xs text-muted-foreground pt-1">
              {c.directContact}: <a href="mailto:contact@hojanetwork.org" className="text-primary font-semibold underline">contact@hojanetwork.org</a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/who-we-are/governance-team"
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground border border-border bg-background hover:bg-surface-2 rounded-sm text-center"
            >
              {c.governanceTeam}
            </Link>
            <Link
              href="/get-involved/partner-with-us"
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent/90 rounded-sm text-center"
            >
              {c.becomePartner} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
