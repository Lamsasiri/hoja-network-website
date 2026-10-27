/**
 * Configuration Institutionnelle des Dons — HOJA Network
 *
 * RÈGLE D'OR D'INTÉGRITÉ FINANCIÈRE :
 * Aucune fausse adresse cryptographique (BTC/USDT) ni fausse coordonnée bancaire (RIB/IBAN)
 * ne doit être inventée ou simulée.
 * Tant que les coordonnées officielles ne sont pas validées et signées par la direction
 * financière de HOJA Network, les statuts restent `isConfigured: false` et le donateur
 * est invité à contacter directement la direction à contact@hojanetwork.org.
 */

export interface CryptoNetworkOption {
  networkId: string;
  networkName: string;
  symbol: string;
  memoOrTagRequired: boolean;
  address?: string;
  isConfigured: boolean;
  statusNotice: string;
}

export interface BankTransferAccount {
  currency: string;
  bankName: string;
  accountName: string;
  country: string;
  swiftBic?: string;
  ibanOrAccountNumber?: string;
  isConfigured: boolean;
  statusNotice: string;
}

export interface DonationConfig {
  officialContactEmail: string;
  financeDeskTitle: string;
  headquartersAddressDRC: string;
  representationAddressRwanda: string;
  legalEntityDRC: string;
  legalEntityRwanda: string;
  supportedMethods: {
    bitcoin: {
      enabled: boolean;
      symbol: string;
      title: string;
      network: string;
      isConfigured: boolean;
      statusNotice: string;
      minimumConfirmation: number;
    };
    usdt: {
      enabled: boolean;
      symbol: string;
      title: string;
      networks: CryptoNetworkOption[];
    };
    bankWire: {
      enabled: boolean;
      title: string;
      accounts: BankTransferAccount[];
      wireInstructions: string;
    };
  };
  impactThemes: {
    id: string;
    title: string;
    description: string;
    allocation: string;
  }[];
}

export const DONATION_CONFIG: DonationConfig = {
  officialContactEmail: "contact@hojanetwork.org",
  financeDeskTitle: "Direction Financière & Gouvernance des Fonds — HOJA Network",
  headquartersAddressDRC: "Goma, Nord-Kivu, République Démocratique du Congo",
  representationAddressRwanda: "Rubavu, Western Province, République du Rwanda",
  legalEntityDRC: "ASBL HOJA Network — Autorisation Min. Justice N° JUST.G.S. 112/S-KV/0508/2021",
  legalEntityRwanda: "HOJA Network Regional Branch — RGB N° 058/2024",
  supportedMethods: {
    bitcoin: {
      enabled: true,
      symbol: "BTC",
      title: "Bitcoin (BTC)",
      network: "Bitcoin Mainnet (SegWit / Native SegWit)",
      isConfigured: false,
      statusNotice: "Adresse institutionnelle de trésorerie en cours d'enregistrement par la direction financière. Pour toute contribution en Bitcoin, veuillez contacter notre trésorerie pour obtenir l'adresse signée et vérifiée.",
      minimumConfirmation: 3
    },
    usdt: {
      enabled: true,
      symbol: "USDT",
      title: "Tether (USDT)",
      networks: [
        {
          networkId: "trc20",
          networkName: "TRON (TRC20)",
          symbol: "USDT-TRC20",
          memoOrTagRequired: false,
          isConfigured: false,
          statusNotice: "Adresse TRC20 en cours de validation protocolaire par la direction financière."
        },
        {
          networkId: "erc20",
          networkName: "Ethereum (ERC20)",
          symbol: "USDT-ERC20",
          memoOrTagRequired: false,
          isConfigured: false,
          statusNotice: "Adresse ERC20 en cours de validation protocolaire par la direction financière."
        },
        {
          networkId: "polygon",
          networkName: "Polygon (PoS)",
          symbol: "USDT-POLYGON",
          memoOrTagRequired: false,
          isConfigured: false,
          statusNotice: "Adresse Polygon en cours de configuration pour réduire les frais de transfert réseau."
        }
      ]
    },
    bankWire: {
      enabled: true,
      title: "Virement Bancaire International & Régional",
      wireInstructions: "Afin de garantir la conformité bancaire internationale, la lutte contre le blanchiment (AML/CFT) et la protection contre le détournement de fonds, les coordonnées bancaires officielles (RIB/IBAN/SWIFT) et les références spécifiques de projet sont transmises sur demande écrite officielle à destination de notre direction financière.",
      accounts: [
        {
          currency: "USD ($)",
          bankName: "Banque Partenaire Agréée en RDC / Région des Grands Lacs",
          accountName: "HOJA NETWORK ASBL",
          country: "République Démocratique du Congo",
          isConfigured: false,
          statusNotice: "Attestation de compte bancaire et RIB certifié transmis sur demande officielle préalable."
        },
        {
          currency: "EUR (€)",
          bankName: "Correspondant Bancaire International",
          accountName: "HOJA NETWORK ASBL",
          country: "RDC / Correspondant UE",
          isConfigured: false,
          statusNotice: "Coordonnées de virement SEPA / SWIFT transmises sur demande préalable avec convention de don."
        },
        {
          currency: "CDF (Franc Congolais) & RWF (Franc Rwandais)",
          bankName: "Comptes d'Opérations Locales",
          accountName: "HOJA NETWORK",
          country: "RDC (Goma) & Rwanda (Rubavu)",
          isConfigured: false,
          statusNotice: "Réservé aux opérations de proximité et transferts locaux certifiés."
        }
      ]
    }
  },
  impactThemes: [
    {
      id: "energy",
      title: "Clean Cooking & Énergie Propre",
      description: "Déploiement de foyers améliorés et micro-unités solaires pour réduire la pression sur le bois de chauffe du Parc National des Virunga.",
      allocation: "100% alloué aux ateliers de formation et kits d'énergie propre."
    },
    {
      id: "nature",
      title: "Restauration Écologique & Virunga",
      description: "Corridors de reboisement communautaire, pépinières citoyennes et éducation environnementale pour les enfants riverains.",
      allocation: "100% alloué aux semences locales, pépinières et gardiens communautaires."
    },
    {
      id: "enterprise",
      title: "Entrepreneuriat Vert des Jeunes & Femmes",
      description: "Micro-incubation, coaching en économie circulaire (déchets, compost, upcycling) et autonomie financière.",
      allocation: "100% alloué aux micro-subventions d'amorçage et mentors locaux."
    },
    {
      id: "emergency-resilience",
      title: "Résilience Familiale & Parentalité en Crise",
      description: "Cercles de dialogue psychosocial et protection de l'enfance pour les familles déplacées du Nord-Kivu.",
      allocation: "100% alloué aux espaces de dialogue, accompagnement et sécurité des enfants."
    }
  ]
};
