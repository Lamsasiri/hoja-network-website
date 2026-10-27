"use client";

import { useState } from "react";
import Link from "next/link";
import { DONATION_CONFIG } from "@/config/donation";

export default function DonatePage() {
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

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 max-lg:pt-24" id="main">
      {/* Hero Section */}
      <section className="max-w-300 mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-3 rounded-full text-xs font-bold uppercase tracking-wider text-accent mb-4 border border-border">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Soutien Institutionnel &amp; Philanthropique
        </div>
        <h1 className="text-4xl md:text-5xl font-bold [font-family:questa,_serif] text-accent mb-4 leading-tight">
          Soutenir l&apos;Action de Terrain de HOJA Network
        </h1>
        <p className="max-w-220 mx-auto text-base md:text-lg text-foreground/80 leading-relaxed">
          Votre contribution finance directement nos programmes communautaires dans la région des Grands Lacs :
          accès à l&apos;énergie propre et foyers améliorés, conservation citoyenne autour des Virunga,
          entrepreneuriat vert des jeunes et protection des familles en zone de crise.
        </p>

        {/* Legal credentials banner */}
        <div className="mt-8 p-4 bg-surface-2 rounded-sm border border-border max-w-240 mx-auto text-xs text-muted-foreground flex flex-wrap justify-around gap-4 text-left md:text-center">
          <div>
            <strong className="text-foreground">Enregistrement RDC :</strong> ASBL N° <code>JUST.G.S. 112/S-KV/0508/2021</code>
          </div>
          <div>
            <strong className="text-foreground">Autorisation Rwanda :</strong> RGB N° <code>058/2024</code>
          </div>
          <div>
            <strong className="text-foreground">Gouvernance :</strong> Audit financier &amp; reçu officiel
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
              <span>Virement Bancaire (SWIFT / SEPA)</span>
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
                      {DONATION_CONFIG.supportedMethods.bankWire.title}
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      Privilégié pour les fondations, bailleurs de fonds institutionnels et donateurs majeurs.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded text-amber-700 text-xs font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Procédure de Sécurité Anti-Fraude Active</span>
                  </div>
                </div>

                {/* Instructions Box */}
                <div className="bg-surface-2 p-5 rounded-sm border border-border mb-8 text-sm leading-relaxed text-foreground/90">
                  <p className="font-semibold text-accent mb-2">
                    Protocole de Transmission des Coordonnées Bancaires :
                  </p>
                  <p className="mb-3">
                    {DONATION_CONFIG.supportedMethods.bankWire.wireInstructions}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Chaque don fait l&apos;objet d&apos;une convention d&apos;allocation ou d&apos;une confirmation écrite émise par la direction financière de HOJA Network.
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
                            {acc.country}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{acc.bankName}</h3>
                        <p className="text-xs text-muted-foreground mb-3">Bénéficiaire : {acc.accountName}</p>
                        <p className="text-xs text-foreground/80 italic leading-snug">
                          {acc.statusNotice}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/60">
                        <span className="inline-block text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                          Attestation sur demande
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Box */}
                <div className="bg-primary text-background p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-bold [font-family:questa,_serif]">
                      Obtenir les Coordonnées Bancaires Officielles
                    </h3>
                    <p className="text-xs text-background/85 mt-1 max-w-160">
                      Envoyez votre demande directement à notre direction financière. Un relevé bancaire certifié (RIB/SWIFT) et une note de cadrage vous seront transmis sous 24 à 48 heures ouvrées.
                    </p>
                  </div>
                  <a
                    href="mailto:contact@hojanetwork.org?subject=Demande%20de%20coordonnees%20bancaires%20pour%20don%20HOJA%20Network"
                    className="shrink-0 bg-background text-accent px-6 py-3 font-bold text-sm rounded-sm hover:bg-surface-2 transition-colors uppercase tracking-wider"
                  >
                    Contacter la Direction Financière →
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
                      Don en {DONATION_CONFIG.supportedMethods.bitcoin.title}
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      Réseau : <strong>{DONATION_CONFIG.supportedMethods.bitcoin.network}</strong> • Confirmations requises : {DONATION_CONFIG.supportedMethods.bitcoin.minimumConfirmation}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded text-blue-700 text-xs font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Vérification Institutionnelle Obligatoire</span>
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
                  <div className="space-y-4 text-sm text-foreground/85 leading-relaxed">
                    <p>
                      HOJA Network reconnaît le potentiel des actifs numériques pour financer l&apos;action communautaire et climatique sans subir les délais et frais excessifs des transferts transfrontaliers traditionnels dans les Grands Lacs.
                    </p>
                    <div className="p-4 bg-surface-2 rounded-sm border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-xs uppercase tracking-wider mb-1">
                        Politique Anti-Spoofing &amp; Sécurité des Donateurs
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Pour empêcher toute usurpation d&apos;adresse publique, piratage d&apos;affichage web ou tentative de phishing, l&apos;adresse Bitcoin de trésorerie officielle est communiquée et signée cryptographiquement lors de l&apos;initiation du don.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {DONATION_CONFIG.supportedMethods.bitcoin.statusNotice}
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
                      Statut : Trésorerie Sécurisée
                    </span>
                    <h3 className="font-bold text-base mb-2">Adresse Bitcoin HOJA Network</h3>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto mb-4">
                      Les coordonnées cryptographiques vérifiées vous sont transmises directement avec signature PGP ou confirmation par canal officiel.
                    </p>
                    <a
                      href="mailto:contact@hojanetwork.org?subject=Donation%20Bitcoin%20(BTC)%20-%20HOJA%20Network&body=Bonjour%20la%20direction%20financière%20de%20HOJA%20Network,%0A%0AJe%20souhaite%20effectuer%20une%20contribution%20en%20Bitcoin%20(BTC)%20en%20soutien%20à%20vos%20initiatives.%0AMerci%20de%20me%20transmettre%20l'adresse%20de%20dépôt%20officielle%20et%20la%20procédure%20de%20reçu."
                      className="inline-block w-full py-3 px-4 bg-accent text-background font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
                    >
                      Solliciter l&apos;Adresse Bitcoin Officielle →
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
                      Don en {DONATION_CONFIG.supportedMethods.usdt.title} (Stablecoin)
                    </h2>
                    <p className="text-sm text-foreground/80 mt-1">
                      Idéal pour des transferts rapides et stables indexés sur le dollar américain (USD).
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded text-accent text-xs font-semibold">
                    <span>Sélecteur Multi-Réseau Actif</span>
                  </div>
                </div>

                {/* Network Selection Buttons */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Sélectionnez le Réseau Blockchain :
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
                      <span className="text-xs text-muted-foreground block">Actif &amp; Protocole</span>
                      <strong className="text-lg text-accent">{currentUsdt.symbol}</strong>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-xs text-muted-foreground block">Réseau d&apos;émission</span>
                      <span className="font-semibold text-sm">{currentUsdt.networkName}</span>
                    </div>
                  </div>

                  <p className="text-xs text-foreground/80 leading-relaxed mb-4">
                    {currentUsdt.statusNotice}
                  </p>

                  <div className="p-4 bg-surface-3 rounded border border-border/80 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-muted-foreground">
                      <strong>Recommandation :</strong> Vérifiez toujours le protocole choisi avant tout envoi pour éviter toute perte d&apos;actifs irréversible.
                    </div>
                    <a
                      href={`mailto:contact@hojanetwork.org?subject=Donation%20USDT%20(${currentUsdt.networkName})%20-%20HOJA%20Network&body=Bonjour%20la%20direction%20financière%20de%20HOJA%20Network,%0A%0AJe%20souhaite%20effectuer%20une%20contribution%20en%20USDT%20sur%20le%20réseau%20${currentUsdt.networkName}.%0AMerci%20de%20me%20transmettre%20l'adresse%20officielle%20validée.`}
                      className="shrink-0 px-4 py-2.5 bg-accent text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
                    >
                      Obtenir l&apos;Adresse USDT ({currentUsdt.networkName}) →
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
            Affectation Stratégique de Vos Dons
          </h2>
          <p className="text-sm text-foreground/75 max-w-xl mx-auto">
            Chaque contribution est dirigée avec rigueur vers les priorités environnementales et communautaires identifiées sur le terrain :
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DONATION_CONFIG.impactThemes.map((theme) => (
            <div key={theme.id} className="bg-surface-2 p-6 rounded-sm border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-accent text-background flex items-center justify-center font-bold text-sm mb-4">
                  ✓
                </div>
                <h3 className="font-bold text-base text-accent mb-2">{theme.title}</h3>
                <p className="text-xs text-foreground/80 leading-relaxed mb-4">{theme.description}</p>
              </div>
              <div className="pt-3 border-t border-border text-[11px] font-semibold text-accent/90">
                {theme.allocation}
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
              Transparence, Reçu Officiel &amp; Suivi Philanthropique
            </h3>
            <p className="text-xs text-foreground/80 leading-relaxed">
              HOJA Network fournit une attestation de don officielle pour chaque contribution reçue (virement ou crypto-actifs).
              Pour les dons majeurs et partenariats institutionnels, un rapport d&apos;impact dédié et un suivi d&apos;exécution semestriel sont systématiquement transmis.
            </p>
            <p className="text-xs text-muted-foreground pt-1">
              Contact direct : <a href="mailto:contact@hojanetwork.org" className="text-primary font-semibold underline">contact@hojanetwork.org</a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/who-we-are/governance-team"
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground border border-border bg-background hover:bg-surface-2 rounded-sm text-center"
            >
              Gouvernance &amp; Équipe
            </Link>
            <Link
              href="/get-involved/partner-with-us"
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent/90 rounded-sm text-center"
            >
              Devenir Partenaire →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
