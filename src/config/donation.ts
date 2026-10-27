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
  statusNoticeEn: string;
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
  statusNoticeEn: string;
  bankNameEn: string;
  countryEn: string;
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
      titleEn: string;
      network: string;
      isConfigured: boolean;
      statusNotice: string;
      statusNoticeEn: string;
      minimumConfirmation: number;
    };
    usdt: {
      enabled: boolean;
      symbol: string;
      title: string;
      titleEn: string;
      networks: CryptoNetworkOption[];
    };
    bankWire: {
      enabled: boolean;
      title: string;
      titleEn: string;
      accounts: BankTransferAccount[];
      wireInstructions: string;
      wireInstructionsEn: string;
    };
  };
  impactThemes: {
    id: string;
    title: string;
    description: string;
    allocation: string;
    titleEn: string;
    descriptionEn: string;
    allocationEn: string;
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
      titleEn: "Bitcoin (BTC)",
      network: "Bitcoin Mainnet (SegWit / Native SegWit)",
      isConfigured: false,
      statusNotice: "Adresse institutionnelle de trésorerie en cours d'enregistrement par la direction financière. Pour toute contribution en Bitcoin, veuillez contacter notre trésorerie pour obtenir l'adresse signée et vérifiée.",
      statusNoticeEn: "The institutional treasury address is being registered by the finance team. For Bitcoin contributions, contact the finance team to receive a signed and verified address.",
      minimumConfirmation: 3
    },
    usdt: {
      enabled: true,
      symbol: "USDT",
      title: "Tether (USDT)",
      titleEn: "Tether (USDT)",
      networks: [
        {
          networkId: "trc20",
          networkName: "TRON (TRC20)",
          symbol: "USDT-TRC20",
          memoOrTagRequired: false,
          isConfigured: false,
          statusNotice: "Adresse TRC20 en cours de validation protocolaire par la direction financière.",
          statusNoticeEn: "The TRC20 address is undergoing protocol validation by the finance team."
        },
        {
          networkId: "erc20",
          networkName: "Ethereum (ERC20)",
          symbol: "USDT-ERC20",
          memoOrTagRequired: false,
          isConfigured: false,
          statusNotice: "Adresse ERC20 en cours de validation protocolaire par la direction financière.",
          statusNoticeEn: "The ERC20 address is undergoing protocol validation by the finance team."
        },
        {
          networkId: "polygon",
          networkName: "Polygon (PoS)",
          symbol: "USDT-POLYGON",
          memoOrTagRequired: false,
          isConfigured: false,
          statusNotice: "Adresse Polygon en cours de configuration pour réduire les frais de transfert réseau.",
          statusNoticeEn: "The Polygon address is being configured to reduce network transfer fees."
        }
      ]
    },
    bankWire: {
      enabled: true,
      title: "Virement Bancaire International & Régional",
      titleEn: "International & Regional Bank Transfer",
      wireInstructions: "Afin de garantir la conformité bancaire internationale, la lutte contre le blanchiment (AML/CFT) et la protection contre le détournement de fonds, les coordonnées bancaires officielles (RIB/IBAN/SWIFT) et les références spécifiques de projet sont transmises sur demande écrite officielle à destination de notre direction financière.",
      wireInstructionsEn: "To support international banking compliance, anti-money laundering and counter-terrorist financing (AML/CFT) requirements, and protection against diversion of funds, official bank details (account number/IBAN/SWIFT) and project references are provided upon formal written request to HOJA Network's finance team.",
      accounts: [
        {
          currency: "USD ($)",
          bankName: "Banque Partenaire Agréée en RDC / Région des Grands Lacs",
          accountName: "HOJA NETWORK ASBL",
          country: "République Démocratique du Congo",
          isConfigured: false,
          statusNotice: "Attestation de compte bancaire et RIB certifié transmis sur demande officielle préalable.",
          bankNameEn: "Licensed partner bank in the DRC / Great Lakes region",
          countryEn: "Democratic Republic of the Congo",
          statusNoticeEn: "Bank account confirmation and certified account details are provided upon prior formal request."
        },
        {
          currency: "EUR (€)",
          bankName: "Correspondant Bancaire International",
          accountName: "HOJA NETWORK ASBL",
          country: "RDC / Correspondant UE",
          isConfigured: false,
          statusNotice: "Coordonnées de virement SEPA / SWIFT transmises sur demande préalable avec convention de don.",
          bankNameEn: "International correspondent bank",
          countryEn: "DRC / EU correspondent bank",
          statusNoticeEn: "SEPA / SWIFT transfer details are provided upon request with a donation agreement."
        },
        {
          currency: "CDF (Franc Congolais) & RWF (Franc Rwandais)",
          bankName: "Comptes d'Opérations Locales",
          accountName: "HOJA NETWORK",
          country: "RDC (Goma) & Rwanda (Rubavu)",
          isConfigured: false,
          statusNotice: "Réservé aux opérations de proximité et transferts locaux certifiés.",
          bankNameEn: "Local operating accounts",
          countryEn: "DRC (Goma) & Rwanda (Rubavu)",
          statusNoticeEn: "For local operations and certified local transfers."
        }
      ]
    }
  },
  impactThemes: [
    {
      id: "energy",
      title: "Clean Cooking & Énergie Propre",
      titleEn: "Clean Cooking & Clean Energy",
      description: "Déploiement de foyers améliorés et micro-unités solaires pour réduire la pression sur le bois de chauffe du Parc National des Virunga.",
      descriptionEn: "Deploying improved cookstoves and small solar units to reduce pressure on firewood resources in Virunga National Park.",
      allocation: "100% alloué aux ateliers de formation et kits d'énergie propre.",
      allocationEn: "100% allocated to training workshops and clean energy kits."
    },
    {
      id: "nature",
      title: "Restauration Écologique & Virunga",
      titleEn: "Ecological Restoration & Virunga",
      description: "Corridors de reboisement communautaire, pépinières citoyennes et éducation environnementale pour les enfants riverains.",
      descriptionEn: "Community reforestation corridors, local nurseries, and environmental education for children living near the park.",
      allocation: "100% alloué aux semences locales, pépinières et gardiens communautaires.",
      allocationEn: "100% allocated to local seeds, nurseries, and community stewards."
    },
    {
      id: "enterprise",
      title: "Entrepreneuriat Vert des Jeunes & Femmes",
      titleEn: "Green Enterprise for Youth & Women",
      description: "Micro-incubation, coaching en économie circulaire (déchets, compost, upcycling) et autonomie financière.",
      descriptionEn: "Small-scale incubation and circular economy coaching (waste recovery, composting, upcycling) to support financial independence.",
      allocation: "100% alloué aux micro-subventions d'amorçage et mentors locaux.",
      allocationEn: "100% allocated to startup microgrants and local mentors."
    },
    {
      id: "emergency-resilience",
      title: "Résilience Familiale & Parentalité en Crise",
      titleEn: "Family Resilience & Parenting in Crisis",
      description: "Cercles de dialogue psychosocial et protection de l'enfance pour les familles déplacées du Nord-Kivu.",
      descriptionEn: "Psychosocial dialogue circles and child protection support for displaced families in North Kivu.",
      allocation: "100% alloué aux espaces de dialogue, accompagnement et sécurité des enfants.",
      allocationEn: "100% allocated to dialogue spaces, family support, and child safety."
    }
  ]
};
