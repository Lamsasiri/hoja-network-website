export type Language = 'en' | 'fr';

export interface Translations {
  common: {
    language: string;
    rwandaDrc: string;
    partnerCta: string;
    donateCta: string;
    readMore: string;
    backHome: string;
    searchPlaceholder: string;
    searchAria: string;
    menuButton: string;
    closeButton: string;
    allRightsReserved: string;
    tagline: string;
  };
  nav: {
    network: string;
    impact: string;
    greenEconomy: string;
    academy: string;
    farm: string;
    donate: string;
  };
  home: {
    hero: {
      title: string;
      whatWeDoLabel: string;
      whatWeDoText: string;
      ctaExplore: string;
      ctaPartner: string;
    };
    whyHoja: {
      title: string;
      subtitle: string;
      card1Title: string;
      card1Text: string;
      card2Title: string;
      card2Text: string;
      card3Title: string;
      card3Text: string;
      card4Title: string;
      card4Text: string;
      card5Title: string;
      card5Text: string;
      card5LinkText: string;
    };
    localRoots: {
      title: string;
      description: string;
    };
    keyFigures: {
      title: string;
      periodNote: string;
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    capacities: {
      title: string;
      description: string;
      description2: string;
      cta: string;
    };
    approach: {
      title: string;
      description: string;
      card1Title: string;
      card1Text: string;
      card2Title: string;
      card2Text: string;
      card3Title: string;
      card3Text: string;
      cardLinkText: string;
    };
    partners: {
      kicker: string;
      title: string;
      description: string;
      items: {
        category: string;
        status: string;
        title: string;
        description: string;
        relationship: string;
      }[];
      cta: string;
    };
    news: {
      title: string;
      description: string;
      item1Title: string;
      item1Desc: string;
      item2Title: string;
      item2Desc: string;
      item3Title: string;
      item3Desc: string;
      readArticle: string;
    };
  };
  networkPage: {
    title: string;
    intro: string;
    collaborationText: string;
    presenceTitle: string;
    rwandaTitle: string;
    rwandaPoints: string[];
    drcTitle: string;
    drcPoints: string[];
    networkIncludesTitle: string;
    networkPoints: string[];
    ctaTitle: string;
    ctaButton: string;
  };
  impactPage: {
    title: string;
    subtitle: string;
    intro: string;
    approachTitle: string;
    dim1Title: string;
    dim1Points: string[];
    dim2Title: string;
    dim2Points: string[];
    dim3Title: string;
    dim3Points: string[];
    transparencyTitle: string;
    transparencyText: string;
    targetsTitle: string;
    targets: string[];
    ctaTitle: string;
    ctaButton: string;
  };
  greenEconomyPage: {
    title: string;
    subtitle: string;
    mainContent: string;
    domainsTitle: string;
    domain1Title: string;
    domain1Points: string[];
    domain2Title: string;
    domain2Points: string[];
    domain3Title: string;
    domain3Points: string[];
    domain4Title: string;
    domain4Points: string[];
    domain5Title: string;
    domain5Points: string[];
    howWeActTitle: string;
    howWeActPoints: { step: string; desc: string }[];
    concreteExamplesTitle: string;
    concreteExamplesText: string;
    ctaTitle: string;
    ctaButton: string;
  };
  moringaPage: {
    title: string;
    subtitle: string;
    intro: string;
    whyTitle: string;
    whyIntro: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    benefit4Title: string;
    benefit4Desc: string;
    approachTitle: string;
    step1Title: string;
    step1Points: string[];
    step2Title: string;
    step2Points: string[];
    step3Title: string;
    step3Points: string[];
    step4Title: string;
    step4Points: string[];
    expectedImpactTitle: string;
    impactPoints: string[];
    importantNoticeTitle: string;
    importantNoticeText: string;
    ctaTitle: string;
    ctaButton: string;
  };
  academyPage: {
    title: string;
    subtitle: string;
    intro: string;
    offerTitle: string;
    aiTrainingTitle: string;
    aiTrainingDescription: string;
    offer1Title: string;
    offer1Points: string[];
    offer2Title: string;
    offer2Points: string[];
    offer3Title: string;
    offer3Points: string[];
    offer4Title: string;
    offer4Points: string[];
    targetAudienceTitle: string;
    targetPoints: string[];
    resultsTitle: string;
    results: string[];
    howToApplyTitle: string;
    howToApplyText: string;
    ctaTitle: string;
    ctaButton: string;
  };
  farmPage: {
    title: string;
    subtitle: string;
    intro: string;
    approachTitle: string;
    approachText: string;
    porcineTitle: string;
    porcineDescription: string;
    domainsTitle: string;
    domain1Title: string;
    domain1Points: string[];
    domain2Title: string;
    domain2Points: string[];
    domain3Title: string;
    domain3Points: string[];
    domain4Title: string;
    domain4Points: string[];
    expectedImpactTitle: string;
    impactPoints: string[];
    ctaTitle: string;
    ctaButton: string;
  };
  donatePage: {
    title: string;
    subtitle: string;
    intro: string;
    whySupportTitle: string;
    whyPoints: string[];
    howToContributeTitle: string;
    way1Title: string;
    way1Desc: string;
    way2Title: string;
    way2Desc: string;
    way3Title: string;
    way3Desc: string;
    way4Title: string;
    way4Desc: string;
    transparencyTitle: string;
    transparencyText: string;
    ctaTitle: string;
    ctaButton: string;
  };
  footer: {
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterButton: string;
    accreditationText: string;
    leadershipLink: string;
    quickLinksTitle: string;
    programsTitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    common: {
      language: "Français",
      rwandaDrc: "Rwanda & République démocratique du Congo",
      partnerCta: "Devenir partenaire",
      donateCta: "Faire un don",
      readMore: "En savoir plus",
      backHome: "Retour à l'accueil",
      searchPlaceholder: "Rechercher sur le site",
      searchAria: "Formulaire de recherche",
      menuButton: "Menu",
      closeButton: "Fermer",
      allRightsReserved: "Tous droits réservés. Entrepreneuriat, autonomisation et action climatique.",
      tagline: "Former les entrepreneurs. Autonomiser les femmes et les jeunes. Agir pour le climat au Rwanda et en RDC.",
    },
    nav: {
      network: "Notre réseau",
      impact: "Impact",
      greenEconomy: "Économie verte",
      academy: "HOJA Academy",
      farm: "HOJA Farm",
      donate: "Donate",
    },
    home: {
      hero: {
        title: "Entrepreneuriat, Autonomisation économique & Action climatique",
        whatWeDoLabel: "Ce que nous faisons",
        whatWeDoText: "Nous formons et accompagnons les jeunes et les femmes au Rwanda et en RDC pour développer des entreprises et des solutions utiles aux communautés et à l’environnement.",
        ctaExplore: "Explorer nos actions",
        ctaPartner: "Devenir partenaire",
      },
      whyHoja: {
        title: "Pourquoi Hoja Network ? Nous combinons entrepreneuriat, innovation et action climatique pour aider les jeunes et les femmes à créer une valeur durable au Rwanda et en RDC. Chaque programme est conçu pour rendre nos communautés plus autonomes, résilientes et prospères.",
        subtitle: "",
        card1Title: "Autonomisation économique",
        card1Text: "Nous proposons des programmes d’entrepreneuriat et de leadership. Créer des espaces d’incubation pour les jeunes innovateurs. Offrir du mentorat et du réseautage.",
        card2Title: "Entrepreneuriat",
        card2Text: "Former les entrepreneurs à la gestion, la finance et la commercialisation. Accompagner la création et la croissance d’entreprises viables et durables.",
        card3Title: "Action climatique",
        card3Text: "Développer des solutions entrepreneuriales pour le climat : réduction d’émissions, restauration d’écosystèmes, résilience communautaire face aux changements.",
        card4Title: "Éducation & innovation",
        card4Text: "Utiliser l’IA et les outils numériques pour renforcer les capacités entrepreneuriales. Favoriser l’innovation locale adaptée aux réalités du Rwanda et RDC.",
        card5Title: "Économie verte et solutions durables",
        card5Text: "Identifier et développer des solutions entrepreneuriales environnementales — du moringa à l’agroforesterie. Créer des entreprises régénératives et résilientes.",
        card5LinkText: "Découvrir la page Économie verte",
      },
      localRoots: {
        title: "Ancrés dans les réalités locales",
        description: "Nous proposons des formats pratiques et accompagnons afin de renforcer les capacités des individus à repérer des opportunités porteuses de valeur autour d’eux, d’entreprendre, d’innover et de contribuer à l’action environnementale, sociale et professionnelle au Rwanda et en République démocratique du Congo.",
      },
      keyFigures: {
        title: "Nos Chiffres Clés",
        periodNote: "Les périodes de référence et les rapports justificatifs de ces chiffres ne sont pas indiqués ici. Contactez HOJA pour demander les informations de suivi disponibles.",
        line1: "Plus de 10 000 parents formés, 5,6 millions de personnes touchées par les campagnes.",
        line2: "Plus de 1 000 jeunes femmes soutenues, 500 entreprises créées, ayant un impact sur 10 000 femmes et jeunes.",
        line3: "Plus de 10 000 personnes sensibilisées, 3 000 bénéficiaires ayant accès aux soins de santé, 500 victimes soutenues.",
        line4: "Plus de 500 leaders formés, 1 000 jeunes engagés pour la transparence et la défense des droits.",
      },
      capacities: {
        title: "Économie verte et solutions durables",
        description: "Hoja Network encourage la plantation d’arbres utiles, comme le moringa, dont les feuilles et graines sont riches en nutriments. L’agroforesterie, qui associe arbres et cultures, fait partie de nos actions. Nous accompagnons la création d’entreprises régénératives et résilientes qui créent des emplois, protègent les sols et renforcent les communautés du Rwanda et de la RDC. Nos projets génèrent des revenus durables, préservant les ressources naturelles.",
        description2: "",
        cta: "Devenir partenaire",
      },
      approach: {
        title: "Ensemble, nous changeons des vies",
        description: "Grâce à nos programmes, des milliers de jeunes, de femmes et de leaders progressent vers un avenir plus autonome et durable.",
        card1Title: "Formation et développement des compétences",
        card1Text: "Formations pratiques et compétences transversales pour préparer les individus au marché du travail et à l’entrepreneuriat au Rwanda et en RDC.",
        card2Title: "Coaching et mentorat",
        card2Text: "Accompagnement personnalisé des jeunes entrepreneurs avec formation en gestion et mise en réseau pour la réussite au Rwanda et en RDC.",
        card3Title: "Insertion professionnelle et entrepreneuriat",
        card3Text: "Encourager le travail indépendant et l’innovation comme alternatives efficaces à la recherche d’emploi traditionnel au Rwanda et en RDC.",
        cardLinkText: "Découvrir HOJA Academy",
      },
      partners: {
        kicker: "Alliances stratégiques et ancrage légal",
        title: "Nos partenaires",
        description: "HOJA Network collabore avec des réseaux d’entrepreneuriat social, les autorités de tutelle en RDC et au Rwanda, des regroupements économiques locaux et les communautés de la région.",
        items: [
          { category: "Tutelle publique — RDC", status: "Agrément officiel", title: "Ministère de la Justice (RDC)", description: "Autorisation ministérielle d’exercice N° JUST.G.S. 112/S-KV/0508/2021 pour les actions d’utilité publique dans l’Est de la RDC.", relationship: "Siège : Goma, Nord-Kivu" },
          { category: "Régulation — Rwanda", status: "Enregistrement RGB", title: "Rwanda Governance Board (RGB)", description: "Enregistrement via e-Imiryango sous le N° 058/2024 pour les activités de HOJA Network au Rwanda.", relationship: "Antenne : Rubavu" },
          { category: "Réseau économique", status: "Concertation", title: "RAVEC RDC", description: "Réseau des Acteurs de la Valorisation de l’Entrepreneuriat au Congo, présidé par Héritier Kitumaini, qui soutient l’insertion économique et l’incubation de micro-entreprises.", relationship: "Écosystème entrepreneurial" },
          { category: "Cadre multilatéral", status: "Références historiques", title: "Référents techniques de projets", description: "Des missions et collaborations ont été menées en dialogue avec des bailleurs de développement, notamment Enabel, GIZ et USAID, selon les projets concernés.", relationship: "Dialogue avec les bailleurs" },
          { category: "Base communautaire", status: "Ancrage local", title: "Coopératives riveraines et femmes commerçantes", description: "Les activités s’appuient sur les coopératives, les pépiniéristes communautaires et les femmes commerçantes transfrontalières de Goma et Rubavu.", relationship: "Communautés partenaires" },
        ],
        cta: "Rejoindre notre écosystème partenaire",
      },
      news: {
        title: "Actualités & Dépêches de terrain",
        description: "Actualités, possibilités de carrière et nouvelles de nos équipes à Goma et Rubavu.",
        item1Title: "50 jeunes entrepreneurs lancent leurs premiers projets verts au Rwanda et en RDC",
        item1Desc: "Accompagnés par HOJA Academy, ces porteurs de projets allient valorisation de la biomasse, circuits courts et rentabilité économique.",
        item2Title: "Sécurité alimentaire : le moringa change les vies dans 10 villages au Rwanda et en RDC",
        item2Desc: "HOJA Farm accélère la distribution équitable de semences et plants de moringa, créant 200 emplois communautaires pérennes.",
        item3Title: "HOJA Academy : 100 femmes formées à l’IA et l’entrepreneuriat au Rwanda et en RDC",
        item3Desc: "Une cohorte intensive dédiée aux cheffes d'entreprises locales pour automatiser leur gestion et conquérir de nouveaux marchés.",
        readArticle: "Lire la dépêche",
      },
    },
    networkPage: {
      title: "Notre réseau",
      intro: "HOJA Network opère au Rwanda et en République démocratique du Congo, bâtissant un écosystème d’entrepreneuriat, d’innovation et d’action climatique.",
      collaborationText: "Nous croyons que le changement durable vient quand les entrepreneurs locaux, les communautés, les institutions publiques, les organisations de la société civile et les partenaires techniques collaborent pour identifier et déployer des solutions adaptées.",
      presenceTitle: "Notre présence régionale",
      rwandaTitle: "Rwanda (Rubavu & Écosystème Régional)",
      rwandaPoints: [
        "Formation entrepreneuriale et incubation d’entreprises locales",
        "Programmes d’autonomisation des jeunes et des femmes commerçantes",
        "Solutions d’énergie renouvelable et agriculture durable régénérative",
        "Partenariats actifs avec universités, instituts techniques et écoles",
      ],
      drcTitle: "République démocratique du Congo (Goma & Kinshasa)",
      drcPoints: [
        "Accompagnement entrepreneurial en zones rurales et corridors urbains",
        "Production et distribution durable du moringa (HOJA Farm)",
        "Programmes de restauration écologique, agroforesterie et clubs verts",
        "Mobilisation citoyenne et sensibilisation environnementale d'envergure",
      ],
      networkIncludesTitle: "Notre réseau comprend :",
      networkPoints: [
        "Entrepreneurs et micro-entrepreneurs de terrain",
        "Jeunes et femmes innovatrices",
        "Organisations communautaires et associations de base",
        "Institutions publiques et collectivités territoriales",
        "Partenaires techniques et financiers internationaux",
        "Universités et centres d'excellence de formation",
        "Médias et acteurs engagés de la société civile",
      ],
      ctaTitle: "Rejoignez notre réseau. Ensemble, nous construisons une économie verte et inclusive.",
      ctaButton: "Devenir partenaire",
    },
    impactPage: {
      title: "Impact",
      subtitle: "Mesurer ce qui compte",
      intro: "HOJA Network s’engage à mesurer et rendre compte de ses résultats auprès de ses partenaires, bénéficiaires et de la société, avec une exigence de transparence totale.",
      approachTitle: "Notre approche de mesure : 3 dimensions complémentaires",
      dim1Title: "1. Impact économique",
      dim1Points: [
        "Entreprises créées, structurées et accompagnées",
        "Revenus nets générés pour les entrepreneurs locaux",
        "Emplois durables créés ou soutenus sur le terrain",
        "Accès facilité au financement responsable et aux marchés",
      ],
      dim2Title: "2. Impact social",
      dim2Points: [
        "Jeunes et femmes formés et autonomisés financièrement",
        "Amélioration mesurable des compétences en gestion et numérique",
        "Accès continu à des mentors qualifiés et à des réseaux d'affaires",
        "Participation citoyenne, plaidoyer et mobilisation communautaire",
      ],
      dim3Title: "3. Impact environnemental",
      dim3Points: [
        "Hectares de terres dégradées restaurées au Rwanda et en RDC",
        "Arbres productifs et forestiers plantés avec suivi du taux de survie",
        "Réduction prouvée des émissions de carbone et valorisation des déchets",
        "Biodiversité protégée et promotion de pratiques régénératives",
      ],
      transparencyTitle: "À propos des chiffres et des rapports",
      transparencyText: "Les chiffres d’activité affichés sur le site n’indiquent pas encore leur période de référence ni les documents qui les étayent. Les cibles stratégiques sont présentées séparément ci-dessous. Contactez HOJA pour demander les informations de suivi disponibles.",
      targetsTitle: "Nos cibles prioritaires à 3 ans :",
      targets: [
        "500 entreprises locales accompagnées et viables",
        "5 000 jeunes et femmes formés à l'entrepreneuriat et à l'IA",
        "10 000 hectares restaurés ou intégrés en agroforesterie",
        "50 000 personnes touchées directement au Rwanda et en RDC",
      ],
      ctaTitle: "Demander les documents de suivi disponibles",
      ctaButton: "Demander les rapports d’impact",
    },
    greenEconomyPage: {
      title: "Économie verte et solutions durables",
      subtitle: "Transformer les défis environnementaux en opportunités économiques",
      mainContent: "L’économie verte relie la protection de l’environnement à la création de valeur et d’emplois. HOJA Network accompagne les entrepreneurs au Rwanda et en République démocratique du Congo à identifier et développer des solutions qui génèrent des revenus tout en préservant les ressources naturelles.",
      domainsTitle: "Nos domaines d’action prioritaires :",
      domain1Title: "Entrepreneuriat vert et économie circulaire",
      domain1Points: [
        "Entreprises qui réduisent les déchets et valorisent les ressources",
        "Jeunes innovateurs engagés dans les filières de recyclage vert",
        "Chaînes de valeur durables, éthiques et inclusives",
      ],
      domain2Title: "Agriculture durable et agroforesterie",
      domain2Points: [
        "Pratiques agricoles régénératives et respectueuses des sols",
        "Intégration d’arbres productifs à haute valeur nutritionnelle",
        "Sécurité alimentaire durable et diversification des revenus paysans",
      ],
      domain3Title: "Énergie renouvelable",
      domain3Points: [
        "Solutions solaires décentralisées adaptées aux milieux ruraux",
        "Entreprises locales dans la distribution et la maintenance technique",
        "Réduction drastique de la dépendance aux combustibles fossiles",
      ],
      domain4Title: "Restauration écologique",
      domain4Points: [
        "Restauration de terres dégradées et protection des berges et bassins",
        "Implication directe des communautés dans la sauvegarde de la biodiversité",
        "Création d’emplois verts pérennes pour la jeunesse locale",
      ],
      domain5Title: "Biodiversité et gestion durable des ressources",
      domain5Points: [
        "Conservation active des espèces locales et de leurs habitats",
        "Modèles d'entreprises certifiés nature-positive",
        "Résilience accrue face aux chocs climatiques récurrents",
      ],
      howWeActTitle: "Comment nous agissons sur le terrain :",
      howWeActPoints: [
        { step: "Diagnostic", desc: "Identifier les opportunités vertes rentables dans chaque territoire." },
        { step: "Formation", desc: "Renforcer les capacités entrepreneuriales, managériales et techniques." },
        { step: "Accompagnement", desc: "Mentorer les entrepreneurs et faciliter l’accès aux débouchés et marchés." },
        { step: "Financement", desc: "Connecter les initiatives viables avec des sources de financement adaptées." },
        { step: "Mesure", desc: "Documenter et auditer rigoureusement les résultats économiques et écologiques." },
      ],
      concreteExamplesTitle: "Exemple concret : La vitrine du Moringa",
      concreteExamplesText: "Le moringa est l’un de nos projets phares — une plante qui améliore la nutrition, renforce la sécurité alimentaire et crée des emplois dans 10 villages au Rwanda et en RDC. C’est une illustration vivante de la façon dont l’économie verte fonctionne : une ressource locale, des bienfaits multiples et une chaîne de valeur qui enrichit directement les communautés.",
      ctaTitle: "En savoir plus sur le moringa et son modèle économique",
      ctaButton: "Découvrir le projet Moringa",
    },
    moringaPage: {
      title: "Moringa",
      subtitle: "Nourrir les communautés. Créer des opportunités. Cultiver un avenir durable.",
      intro: "HOJA Farm promeut la culture et la distribution du moringa au Rwanda et en République démocratique du Congo afin de contribuer à l’amélioration de la nutrition, à la lutte contre la malnutrition et au développement économique des communautés rurales.",
      whyTitle: "Pourquoi le moringa ?",
      whyIntro: "Le moringa est une plante remarquable, exceptionnellement riche en nutriments essentiels : protéines végétales, vitamines, minéraux et antioxydants. Intégrées à une alimentation diversifiée, les feuilles de moringa contribuent à :",
      benefit1Title: "Améliorer la nutrition",
      benefit1Desc: "Les feuilles de moringa contiennent des nutriments essentiels pour les enfants, les femmes enceintes et allaitantes, et les populations vulnérables. Elles complètent une alimentation diversifiée et contribuent à réduire la malnutrition.",
      benefit2Title: "Renforcer la sécurité alimentaire",
      benefit2Desc: "Le moringa peut être récolté plusieurs fois par an dans les conditions appropriées. Sa production locale diversifie les sources d’aliments disponibles pour les ménages et renforce leur autonomie alimentaire.",
      benefit3Title: "Protéger l’environnement",
      benefit3Desc: "La culture du moringa s’inscrit dans une approche agroécologique. Elle utilise des méthodes durables, économes en eau et adaptées aux conditions climatiques locales. Elle participe aussi activement à la régénération des sols.",
      benefit4Title: "Créer des emplois et des revenus",
      benefit4Desc: "Le moringa génère des opportunités économiques pour les jeunes et les femmes dans la production, la récolte, le séchage, la transformation, le conditionnement et la distribution. Ces activités se développent sous forme de micro-entreprises.",
      approachTitle: "Notre approche en 4 axes intégrés :",
      step1Title: "1. Production locale (Rwanda et RDC)",
      step1Points: [
        "Culture du moringa dans 10 villages pilotes sélectionnés",
        "Méthodes de culture agroécologiques durables et économes en eau",
        "Formation approfondie des producteurs aux bonnes pratiques agronomiques",
        "Production locale de semences et plants de haute qualité biologique",
      ],
      step2Title: "2. Distribution équitable",
      step2Points: [
        "Identification rigoureuse et transparente des ménages bénéficiaires",
        "Priorité accordée aux enfants, femmes enceintes et familles vulnérables",
        "Distribution accompagnée de sessions de sensibilisation nutritionnelle",
        "Suivi informatisé des volumes distribués et des bénéficiaires atteints",
      ],
      step3Title: "3. Création de valeur",
      step3Points: [
        "Création d'emplois rémunérateurs directs pour les jeunes et les femmes",
        "Développement de petites entreprises de transformation communautaires",
        "Maîtrise complète de la chaîne : production → séchage → conditionnement → vente",
        "Accès facilité aux marchés locaux, régionaux et transfrontaliers",
      ],
      step4Title: "4. Sensibilisation & éducation",
      step4Points: [
        "Ateliers culinaires pratiques sur les bonnes pratiques alimentaires",
        "Intégration du moringa dans la cuisine quotidienne sans perte de vitamines",
        "Implication active des leaders communautaires, coopératives et écoles",
        "Documentation scientifique et partage ouvert des retours d'expérience",
      ],
      expectedImpactTitle: "Impact attendu vérifiable :",
      impactPoints: [
        "10 villages ruraux transformés au Rwanda et en RDC",
        "5 000+ ménages bénéficiaires directs d'une nutrition améliorée",
        "Création de 200+ emplois stables sur l'ensemble de la chaîne de valeur",
        "Amélioration documentée des indicateurs nutritionnels chez les enfants",
        "Modèle économique reproductible et extensible à d'autres bassins",
      ],
      importantNoticeTitle: "Précision sanitaire importante",
      importantNoticeText: "Le moringa complète une alimentation saine et équilibrée. Il ne remplace en aucun cas une diversification alimentaire globale ni les soins et consultations médicales nécessaires. HOJA Farm travaille en étroite collaboration avec les autorités sanitaires et les experts en nutrition au Rwanda et en RDC afin de s’assurer que cette initiative s’intègre harmonieusement dans les stratégies nationales de lutte contre la malnutrition.",
      ctaTitle: "Soutenir et déployer le projet Moringa",
      ctaButton: "Devenir partenaire",
    },
    academyPage: {
      title: "HOJA Academy",
      subtitle: "Former. Accompagner. Innover.",
      intro: "HOJA Academy est notre centre d’excellence de formation, d’incubation et d’accompagnement entrepreneurial au Rwanda et en République démocratique du Congo. Nous formons les jeunes et les femmes à devenir des entrepreneurs confiants, outillés et compétents, capables de bâtir des entreprises viables.",
      offerTitle: "Notre offre d'accompagnement :",
      aiTrainingTitle: "AI Training to Job Creation",
      aiTrainingDescription: "Former les jeunes aux métiers de l’intelligence artificielle et les connecter à l’emploi : compétences IA pratiques, accompagnement vers des missions et des emplois rémunérés.",
      offer1Title: "Formation entrepreneuriale pratique",
      offer1Points: [
        "Création et structuration juridique et opérationnelle d'entreprise",
        "Gestion financière simplifiée, trésorerie et comptabilité pratique",
        "Marketing de terrain, stratégies commerciales et vente directe",
        "Leadership, gestion d'équipe et négociation commerciale",
      ],
      offer2Title: "IA et innovation numérique",
      offer2Points: [
        "Utilisation concrète de l'intelligence artificielle pour la gestion quotidienne",
        "Outils numériques automatisés pour la facturation et les prévisions",
        "Présence numérique, e-commerce et prospection client ciblée",
        "Collecte de données et mesure rigoureuse d'impact",
      ],
      offer3Title: "Incubation et accélération",
      offer3Points: [
        "Validation de la proposition de valeur et tests terrain de l'offre",
        "Accompagnement personnalisé et immersif de 6 à 12 mois",
        "Accès direct à des réseaux de mentors, chefs d'entreprise et pairs",
        "Préparation rigoureuse au financement et à la levée de fonds",
      ],
      offer4Title: "Mentorat individuel et coaching",
      offer4Points: [
        "Suivi hebdomadaire sur-mesure pour chaque entrepreneur",
        "Résolution collaborative des blocages opérationnels et réglementaires",
        "Développement du réseau d'affaires et synergies inter-entreprises",
        "Mesure de la croissance du chiffre d'affaires et de la rentabilité",
      ],
      targetAudienceTitle: "À qui s'adresse l'Académie :",
      targetPoints: [
        "Jeunes de 18 à 35 ans déterminés à lancer une entreprise viable",
        "Femmes entrepreneures en phase de démarrage, formalisation ou accélération",
        "Porteurs de projets en économie verte, circulaire et énergies propres",
        "Innovateurs technologiques et leaders communautaires locaux",
      ],
      resultsTitle: "Nos résultats probants :",
      results: [
        "Plus de 1 000 jeunes et femmes formés avec assiduité",
        "500 entreprises locales accompagnées et structurées",
        "Taux de survie des entreprises de 80% après 2 ans d'activité",
        "Plus de 2 000 emplois directs et indirects pérennisés",
      ],
      howToApplyTitle: "Comment postuler à nos promotions :",
      howToApplyText: "HOJA Academy accueille des demandes toute l’année au Rwanda et en RDC. La sélection prend en compte le potentiel économique de l’initiative, l’engagement de l’équipe et son adéquation aux besoins du territoire. Pour demander les modalités de candidature, écrivez à contact@hojanetwork.org.",
      ctaTitle: "Rejoignez la prochaine cohorte de HOJA Academy",
      ctaButton: "Contacter HOJA Academy pour candidater",
    },
    farmPage: {
      title: "HOJA Farm",
      subtitle: "Nourrir. Créer. Cultiver.",
      intro: "HOJA Farm promeut la production agricole durable et la distribution de produits nutritifs au Rwanda et en République démocratique du Congo. Nous travaillons aux côtés des communautés rurales pour restaurer la nutrition, dynamiser l’économie locale et renforcer la résilience face aux dérèglements climatiques.",
      approachTitle: "Notre démarche agroécologique :",
      approachText: "HOJA Farm identifie des cultures et des pratiques agricoles qui profitent simultanément à la santé humaine, à la prospérité paysanne et à la régénération des sols. Le moringa en constitue la première illustration concrète, démontrant qu'une agriculture respectueuse de l'environnement peut être un moteur économique puissant.",
      porcineTitle: "Élevage porcin",
      porcineDescription: "HOJA Farm développe l'élevage porcin durable aux côtés des communautés rurales : formation des éleveurs, amélioration des pratiques d'élevage et création de revenus stables pour les femmes et les jeunes.",
      domainsTitle: "Nos domaines d’intervention :",
      domain1Title: "Production locale durable",
      domain1Points: [
        "Sélection variétale adaptée aux microclimats du Rwanda et de RDC",
        "Méthodes agroécologiques à très faible consommation d'eau",
        "Formations directes des producteurs aux biofertilisants et compostage",
        "Multiplication et diffusion de semences et plants certifiés",
      ],
      domain2Title: "Distribution équitable",
      domain2Points: [
        "Ciblage transparent des familles exposées à l'insécurité alimentaire",
        "Approvisionnement prioritaire des cantines et centres de santé ruraux",
        "Accompagnement pédagogique sur la préparation des aliments nutritifs",
        "Traçabilité rigoureuse et mesure des impacts sanitaires",
      ],
      domain3Title: "Création de valeur locale",
      domain3Points: [
        "Emplois stables pour les femmes et jeunes dans la récolte et le séchage",
        "Création d'ateliers coopératifs de transformation et conditionnement",
        "Approvisionnement des marchés urbains et régionaux en circuit court",
        "Valorisation des co-produits agricoles en alimentation animale",
      ],
      domain4Title: "Sensibilisation et éducation",
      domain4Points: [
        "Programmes d'éducation nutritionnelle dans les écoles et villages",
        "Démonstrations culinaires valorisant les cultures locales nutritives",
        "Mobilisation des coopératives agricoles et chefs traditionnels",
        "Capitalisation et diffusion des meilleures pratiques agronomiques",
      ],
      expectedImpactTitle: "Impacts attendus :",
      impactPoints: [
        "Accès garanti à des aliments nutritifs et abordables produits localement",
        "Revenus paysans sécurisés et création d'emplois décents en milieu rural",
        "Réduction prouvée de la malnutrition infantile dans les zones couvertes",
        "Préservation des ressources en eau et régénération biologique des sols",
      ],
      ctaTitle: "Soutenir le développement de HOJA Farm",
      ctaButton: "Devenir partenaire",
    },
    donatePage: {
      title: "Soutenir HOJA Network",
      subtitle: "Votre soutien crée le changement",
      intro: "HOJA Network transforme les défis environnementaux en opportunités économiques durables. Chaque contribution — quelle que soit son envergure — finance la formation d’entrepreneurs, la création d’emplois verts et la régénération des écosystèmes au Rwanda et en République démocratique du Congo.",
      whySupportTitle: "Pourquoi soutenir notre action ?",
      whyPoints: [
        "Financer des formations pratiques qui sortent durablement de la précarité",
        "Créer des emplois verts et inclusifs pour les jeunes et les femmes",
        "Restaurer les sols, protéger les écosystèmes et lutter contre la malnutrition",
        "Bâtir des communautés autonomes et résilientes face aux crises climatiques",
      ],
      howToContributeTitle: "Comment vous pouvez contribuer :",
      way1Title: "Donations individuelles",
      way1Desc: "Contribuez selon vos moyens par virement ou don récurrent. Chaque don est un investissement direct dans le potentiel des entrepreneurs locaux.",
      way2Title: "Partenariats d'entreprises",
      way2Desc: "Engagez votre responsabilité sociétale par des subventions, du mécénat de compétences ou des partenariats en équipement et technologie.",
      way3Title: "Investissement à impact",
      way3Desc: "Participez au financement d'amorçage de micro-entreprises sociales à fort potentiel de rendement environnemental et social.",
      way4Title: "Bénévolat et mentorat",
      way4Desc: "Partagez vos compétences en finance, marketing, agronomie ou IA pour coacher nos promotions d'entrepreneurs.",
      transparencyTitle: "Transparence & Redevabilité intégrale",
      transparencyText: "Chaque ressource mobilisée est gérée avec une rigueur comptable absolue. Nous publions des rapports financiers et d'impact réguliers, vérifiés par des tiers indépendants, documentant précisément chaque dollar investi.",
      ctaTitle: "Chaque contribution compte pour bâtir l'autonomie.",
      ctaButton: "Faire un don maintenant",
    },
    footer: {
      newsletterTitle: "Abonnez-vous à la lettre HOJA",
      newsletterDesc: "Recevez directement nos récits de terrain, nos données d'impact et nos initiatives novatrices au Rwanda et en RDC.",
      newsletterButton: "S'inscrire",
      accreditationText: "HOJA Network est une organisation à but non lucratif enregistrée et autorisée à opérer au Rwanda (RGB) et en République démocratique du Congo (ASBL).",
      leadershipLink: "Consulter notre gouvernance et équipe",
      quickLinksTitle: "Navigation",
      programsTitle: "Nos Piliers",
    },
  },

  en: {
    common: {
      language: "English",
      rwandaDrc: "Rwanda & Democratic Republic of Congo",
      partnerCta: "Partner with Us",
      donateCta: "Donate Now",
      readMore: "Learn More",
      backHome: "Back to Home",
      searchPlaceholder: "Search our website",
      searchAria: "Website search form",
      menuButton: "Menu",
      closeButton: "Close",
      allRightsReserved: "All Rights Reserved. Entrepreneurship, empowerment, and climate action.",
      tagline: "Training entrepreneurs. Empowering youth and women. Taking bold climate action in Rwanda and the DRC.",
    },
    nav: {
      network: "Our Network",
      impact: "Impact",
      greenEconomy: "Green Economy",
      academy: "HOJA Academy",
      farm: "HOJA Farm",
      donate: "Donate",
    },
    home: {
      hero: {
        title: "Entrepreneurship, Economic Empowerment & Climate Action",
        whatWeDoLabel: "What We Do",
        whatWeDoText: "We train and support young people and women in Rwanda and the DRC to build businesses and solutions that serve communities and the environment.",
        ctaExplore: "Explore Our Actions",
        ctaPartner: "Partner with Us",
      },
      whyHoja: {
        title: "Why HOJA Network? We combine entrepreneurship, innovation, and climate action to help young people and women create lasting value in Rwanda and the DRC. Every program is designed to make our communities more empowered, resilient, and prosperous.",
        subtitle: "",
        card1Title: "Economic Empowerment",
        card1Text: "We deliver entrepreneurship and leadership programs. Creating incubation hubs for young innovators while offering mentorship and network access across communities.",
        card2Title: "Entrepreneurship",
        card2Text: "Training entrepreneurs in management, financial modeling, and marketing. Supporting the creation and growth of viable, sustainable, and resilient businesses.",
        card3Title: "Climate Action",
        card3Text: "Developing entrepreneurial climate solutions: emission reduction, ecosystem restoration, and building local community resilience against environmental changes.",
        card4Title: "Education & Innovation",
        card4Text: "Leveraging AI and digital tools to strengthen entrepreneurial capacities. Fostering grassroots innovation tailored to realities in Rwanda and DRC.",
        card5Title: "Green Economy & Sustainable Solutions",
        card5Text: "Identifying and expanding environmental enterprise solutions—from moringa to agroforestry. Creating regenerative, climate-resilient businesses that prosper.",
        card5LinkText: "Explore the Green Economy Page",
      },
      localRoots: {
        title: "Rooted in Local Realities",
        description: "We deliver practical hands-on programs and tailored support to empower individuals to identify high-value opportunities, build enterprises, innovate, and drive environmental, social, and professional impact across Rwanda and the Democratic Republic of Congo.",
      },
      keyFigures: {
        title: "Key Impact Figures",
        periodNote: "Reference periods and supporting reports for these figures are not listed here. Contact HOJA to request the available monitoring information.",
        line1: "Over 10,000 parents trained · 5.6 million people reached through awareness campaigns",
        line2: "Over 1,000 young women supported · 500 enterprises created · Impact across 10,000 women and youth",
        line3: "Over 10,000 people reached with awareness campaigns, 3,000 beneficiaries with access to healthcare, and 500 survivors supported.",
        line4: "Over 500 leaders trained, with 1,000 young people engaged in transparency and rights advocacy.",
      },
      capacities: {
        title: "Green Economy and Sustainable Solutions",
        description: "HOJA Network promotes planting useful trees such as moringa, whose leaves and seeds are rich in nutrients. Agroforestry, which combines trees and crops, is part of our work. We support regenerative, resilient businesses that create jobs, protect soils, and strengthen communities in Rwanda and the DRC. Our projects generate lasting income while preserving natural resources.",
        description2: "",
        cta: "Partner with Us",
      },
      approach: {
        title: "Together, we change lives",
        description: "Through our programs, thousands of young people, women, and leaders move toward a more independent and sustainable future.",
        card1Title: "Skills Training & Development",
        card1Text: "Practical vocational trainings and transversal skills preparing individuals for the modern job market and entrepreneurial success across Rwanda and DRC.",
        card2Title: "Coaching & Mentorship",
        card2Text: "Personalized coaching for emerging entrepreneurs, providing management training and strategic networking essential for lasting business success in Rwanda and DRC.",
        card3Title: "Professional Insertion & Entrepreneurship",
        card3Text: "Promoting self-employment and grassroots innovation as highly effective, dignified alternatives to traditional job seeking in Rwanda and the DRC.",
        cardLinkText: "Discover HOJA Academy",
      },
      partners: {
        kicker: "Strategic Alliances & Legal Standing",
        title: "Our Partners",
        description: "HOJA Network works with social enterprise networks, the relevant authorities in the DRC and Rwanda, local economic groups, and communities across the region.",
        items: [
          { category: "Public Oversight — DRC", status: "Official Authorization", title: "Ministry of Justice (DRC)", description: "Ministerial authorization No. JUST.G.S. 112/S-KV/0508/2021 for public-interest work in eastern DRC.", relationship: "Headquarters: Goma, North Kivu" },
          { category: "Regulation — Rwanda", status: "RGB Registration", title: "Rwanda Governance Board (RGB)", description: "Registration through e-Imiryango under No. 058/2024 for HOJA Network’s activities in Rwanda.", relationship: "Office: Rubavu" },
          { category: "Economic Network", status: "Coordination", title: "RAVEC DRC", description: "The Network of Actors for the Promotion of Entrepreneurship in Congo, chaired by Héritier Kitumaini, supports economic inclusion and microenterprise incubation.", relationship: "Entrepreneurship ecosystem" },
          { category: "Multilateral Framework", status: "Historical References", title: "Project Technical Counterparts", description: "Missions and collaborations have included dialogue with development funders such as Enabel, GIZ, and USAID, depending on the project.", relationship: "Funder dialogue" },
          { category: "Community Base", status: "Local Presence", title: "Local Cooperatives & Women Traders", description: "Work draws on cooperatives, community nurseries, and cross-border women traders in Goma and Rubavu.", relationship: "Community partners" },
        ],
        cta: "Join our partner ecosystem",
      },
      news: {
        title: "News & Field Dispatches",
        description: "News, career opportunities, and updates from our teams in Goma and Rubavu.",
        item1Title: "50 Young Entrepreneurs Launch Their First Green Ventures in Rwanda and DRC",
        item1Desc: "Mentored by HOJA Academy, these emerging founders unite biomass valorization, local supply chains, and solid financial viability.",
        item2Title: "Food Security: Moringa Transforms Lives Across 10 Villages in Rwanda and DRC",
        item2Desc: "HOJA Farm accelerates equitable distribution of moringa seeds and saplings, creating 200 sustainable grassroots jobs.",
        item3Title: "HOJA Academy: 100 Women Trained in AI and Entrepreneurship in Rwanda and DRC",
        item3Desc: "An intensive cohort empowering local women business owners to automate business operations and expand into regional markets.",
        readArticle: "Read Dispatch",
      },
    },
    networkPage: {
      title: "Our Network",
      intro: "HOJA Network operates in Rwanda and the Democratic Republic of Congo, building a thriving ecosystem of entrepreneurship, innovation, and bold climate action.",
      collaborationText: "We believe lasting change happens when local entrepreneurs, communities, public institutions, civil society organizations, and technical partners collaborate to design and deploy tailored solutions.",
      presenceTitle: "Our Regional Presence",
      rwandaTitle: "Rwanda (Rubavu & Regional Corridor)",
      rwandaPoints: [
        "Entrepreneurial training and business incubation for local changemakers",
        "Empowerment programs tailored for young people and women micro-merchants",
        "Renewable energy solutions and regenerative agricultural practices",
        "Active institutional partnerships with universities, polytechnics, and schools",
      ],
      drcTitle: "Democratic Republic of Congo (Goma & Kinshasa)",
      drcPoints: [
        "Entrepreneurial coaching in rural communities and dynamic urban corridors",
        "Sustainable production and equitable distribution of moringa (HOJA Farm)",
        "Ecological restoration initiatives, agroforestry, and student green clubs",
        "Large-scale civic mobilization and environmental awareness campaigns",
      ],
      networkIncludesTitle: "Our Network Encompasses:",
      networkPoints: [
        "Grassroots entrepreneurs and micro-business leaders",
        "Youth and women innovators shaping new solutions",
        "Community-based organizations and neighborhood associations",
        "Public institutions and regional authorities",
        "International technical and financial development partners",
        "Universities and centers of technical excellence",
        "Independent media outlets and dedicated civil society actors",
      ],
      ctaTitle: "Join our network. Together, we build an inclusive green economy.",
      ctaButton: "Partner with Us",
    },
    impactPage: {
      title: "Impact",
      subtitle: "Measuring What Matters",
      intro: "HOJA Network is deeply committed to rigorous impact measurement and full accountability to our partners, beneficiaries, and society at large.",
      approachTitle: "Our Measurement Methodology: 3 Core Dimensions",
      dim1Title: "1. Economic Impact",
      dim1Points: [
        "Viable enterprises created, structured, and scaled",
        "Measurable net revenue growth for local entrepreneurs",
        "Decent, long-term jobs created and sustained on the ground",
        "Equitable access to responsible financing and trade markets",
      ],
      dim2Title: "2. Social Impact",
      dim2Points: [
        "Youth and women empowered with financial independence",
        "Demonstrated mastery of financial and digital management skills",
        "Continuous access to executive mentors and supportive peer networks",
        "Active civic engagement, rights awareness, and grassroots leadership",
      ],
      dim3Title: "3. Environmental Impact",
      dim3Points: [
        "Hectares of degraded land restored in Rwanda and the DRC",
        "Nutritious and native trees planted with monitored survival rates (≥85%)",
        "Direct carbon emission reductions through biomass and clean energy",
        "Biodiversity preserved through regenerative, nature-positive practices",
      ],
      transparencyTitle: "About the figures and reports",
      transparencyText: "The activity figures shown on this website do not yet list their reference periods or supporting documents. Strategic targets are presented separately below. Contact HOJA to request the available monitoring information.",
      targetsTitle: "Our 3-Year Strategic Targets:",
      targets: [
        "500 local enterprises incubated and economically thriving",
        "5,000 young leaders and women trained in entrepreneurship & AI",
        "10,000 hectares restored or enriched through agroforestry",
        "50,000 people directly impacted across Rwanda and the DRC",
      ],
      ctaTitle: "Request available impact monitoring documents",
      ctaButton: "Request impact reports",
    },
    greenEconomyPage: {
      title: "Green Economy & Sustainable Solutions",
      subtitle: "Transforming Environmental Challenges into Economic Opportunities",
      mainContent: "The green economy bridges environmental conservation with value creation and job generation. HOJA Network equips entrepreneurs in Rwanda and the Democratic Republic of Congo to develop commercial solutions that generate dignified income while regenerating vital natural ecosystems.",
      domainsTitle: "Our Core Action Pillars:",
      domain1Title: "Green Entrepreneurship & Circular Economy",
      domain1Points: [
        "Enterprises minimizing waste and valorizing local bio-resources",
        "Youth innovators building circular recycling and upcycling ventures",
        "Sustainable, fair, and inclusive grassroots supply chains",
      ],
      domain2Title: "Sustainable Agriculture & Agroforestry",
      domain2Points: [
        "Regenerative farming techniques that enrich soil microbiomes",
        "Integration of high-nutrition, drought-resistant productive trees",
        "Long-term food security and diversified agricultural family incomes",
      ],
      domain3Title: "Renewable Energy & Clean Tech",
      domain3Points: [
        "Decentralized solar micro-utilities suited for off-grid rural areas",
        "Local micro-enterprises handling clean installation and maintenance",
        "Substantial reduction in fossil fuel and charcoal dependency",
      ],
      domain4Title: "Ecological Restoration",
      domain4Points: [
        "Restoration of degraded soils, lake basins, and vulnerable watersheds",
        "Direct community stewardship protecting indigenous biodiversity",
        "Creation of durable, dignified green employment for local youth",
      ],
      domain5Title: "Biodiversity & Resource Governance",
      domain5Points: [
        "Active conservation of endemic species and natural ecosystems",
        "Nature-positive, regenerative business standards",
        "Enhanced community resilience against volatile climate shocks",
      ],
      howWeActTitle: "How We Deliver on the Ground:",
      howWeActPoints: [
        { step: "Diagnostic", desc: "Pinpointing profitable green market opportunities in each targeted region." },
        { step: "Training", desc: "Building practical entrepreneurial, managerial, and ecological capacities." },
        { step: "Mentorship", desc: "Guiding entrepreneurs to optimize operations and secure market linkages." },
        { step: "Financing", desc: "Connecting verified initiatives to responsible capital and impact funds." },
        { step: "Auditing", desc: "Rigorous measurement and independent reporting of economic and green outcomes." },
      ],
      concreteExamplesTitle: "Tangible Showcase: The Moringa Initiative",
      concreteExamplesText: "Moringa stands as one of our flagship models—a resilient tree that enriches nutrition, boosts food security, and generates employment across 10 rural villages in Rwanda and the DRC. It exemplifies the green economy in practice: a native resource delivering multi-fold benefits and a prosperous value chain managed by local communities.",
      ctaTitle: "Learn more about our moringa model and economic impact",
      ctaButton: "Discover the Moringa Project",
    },
    moringaPage: {
      title: "Moringa",
      subtitle: "Nourishing Communities. Creating Opportunities. Cultivating a Sustainable Future.",
      intro: "HOJA Farm spearheads the cultivation and equitable distribution of moringa across Rwanda and the Democratic Republic of Congo, directly targeting malnutrition while igniting rural economic development.",
      whyTitle: "Why Moringa?",
      whyIntro: "Moringa oleifera is an exceptional plant packed with bioavailable nutrients: complete plant proteins, essential vitamins, vital minerals, and powerful antioxidants. Incorporated into a diverse diet, moringa leaves deliver decisive benefits:",
      benefit1Title: "Boosting Essential Nutrition",
      benefit1Desc: "Moringa leaves supply critical micronutrients for children, expectant and nursing mothers, and vulnerable community members, combating hidden hunger effectively.",
      benefit2Title: "Strengthening Food Security",
      benefit2Desc: "Moringa yields multiple harvests annually under suitable conditions. Local cultivation diversifies dietary staples and enhances household nutritional autonomy.",
      benefit3Title: "Protecting the Environment",
      benefit3Desc: "Moringa cultivation follows rigorous agroecological standards. It thrives with minimal water, withstands climate stress, and actively restores exhausted soils.",
      benefit4Title: "Generating Jobs and Dignified Incomes",
      benefit4Desc: "Moringa unlocks employment for youth and women across planting, harvesting, solar drying, processing, packaging, and commercial retail.",
      approachTitle: "Our 4-Stage Operational Model:",
      step1Title: "1. Local Production (Rwanda & DRC)",
      step1Points: [
        "Cultivation active across 10 selected rural village clusters",
        "Water-efficient, organic agroecological farming methods",
        "Farmer masterclasses on high-yield organic cultivation standards",
        "Propagation of high-grade, resilient certified seed varieties",
      ],
      step2Title: "2. Equitable Distribution",
      step2Points: [
        "Transparent, community-validated beneficiary selection audits",
        "Direct allocation priority for malnourished children and vulnerable mothers",
        "Distribution bundled with practical dietary educational workshops",
        "Strict digital record-keeping tracking volumes and health outcomes",
      ],
      step3Title: "3. Local Value Creation",
      step3Points: [
        "Living-wage job creation for women and youth cooperatives",
        "Incubation of localized community transformation workshops",
        "Mastery of the complete value chain: harvest → drying → packaging → sale",
        "Unlocking regional and cross-border commercial trade corridors",
      ],
      step4Title: "4. Civic Awareness & Education",
      step4Points: [
        "Culinary workshops teaching everyday usage without vitamin degradation",
        "Seamless integration into traditional family meal preparations",
        "Active involvement of rural teachers, healthcare staff, and chiefs",
        "Open-source documentation and sharing of agricultural field lessons",
      ],
      expectedImpactTitle: "Targeted Measurable Outcomes:",
      impactPoints: [
        "10 rural villages transformed across Rwanda and the DRC",
        "5,000+ households with direct access to enhanced nutrition",
        "200+ sustainable, long-term jobs anchored in the value chain",
        "Documented reductions in child micronutrient deficiencies",
        "Scalable model ready for expansion across neighboring regions",
      ],
      importantNoticeTitle: "Essential Health Notice",
      importantNoticeText: "Moringa serves as a nutrient-dense dietary supplement within a balanced diet. It is never intended as a substitute for diverse food intake or professional medical care. HOJA Farm coordinates closely with public healthcare agencies and nutrition specialists in Rwanda and the DRC to align this grassroots program with national maternal and child health directives.",
      ctaTitle: "Support and scale the Moringa Initiative",
      ctaButton: "Partner with Us",
    },
    academyPage: {
      title: "HOJA Academy",
      subtitle: "Train. Mentor. Innovate.",
      intro: "HOJA Academy is our flagship entrepreneurial education, incubation, and acceleration hub operating in Rwanda and the Democratic Republic of Congo. We equip youth and women with the concrete skills, tools, and confidence required to build enduring businesses.",
      offerTitle: "Our Core Curriculum & Support:",
      aiTrainingTitle: "AI Training to Job Creation",
      aiTrainingDescription: "Train young people for careers in artificial intelligence and connect them with work through practical AI skills and support toward paid assignments and jobs.",
      offer1Title: "Practical Entrepreneurship Training",
      offer1Points: [
        "Business launch, registration, and operational compliance",
        "Cash flow management, financial modeling, and simple bookkeeping",
        "Grassroots marketing, digital sales, and customer acquisition",
        "Team leadership, ethical management, and negotiation tactics",
      ],
      offer2Title: "AI & Digital Innovation",
      offer2Points: [
        "Applied artificial intelligence tools for routine business efficiency",
        "Digital automation for inventory, billing, and financial forecasts",
        "E-commerce presence and targeted customer outreach strategies",
        "Impact data monitoring and performance tracking systems",
      ],
      offer3Title: "Incubation & Acceleration",
      offer3Points: [
        "Rigorous value proposition testing and real-market validation",
        "6 to 12 months of structured, milestone-driven business coaching",
        "Direct connection to experienced corporate mentors and peers",
        "Investor pitch preparation and access to seed funding rounds",
      ],
      offer4Title: "Individual Mentorship & Growth Tracking",
      offer4Points: [
        "Weekly one-on-one advisory sessions with seasoned entrepreneurs",
        "Solving operational bottlenecks, supply issues, and legal questions",
        "Cross-border networking and regional trade partnerships",
        "Continuous monitoring of revenue growth and operating profitability",
      ],
      targetAudienceTitle: "Who We Serve:",
      targetPoints: [
        "Young women and men (aged 18–35) launching ambitious ventures",
        "Women entrepreneurs seeking business formalization and scaling",
        "Green economy, circular tech, and clean energy founders",
        "Grassroots community leaders driving social innovation",
      ],
      resultsTitle: "Our Demonstrated Track Record:",
      results: [
        "Over 1,000 youth and women graduated from intensive programs",
        "500 local enterprises launched, structured, and active",
        "80% business survival rate at the 2-year operational milestone",
        "Over 2,000 direct and indirect jobs created and preserved",
      ],
      howToApplyTitle: "Application Process:",
      howToApplyText: "HOJA Academy receives inquiries throughout the year in Rwanda and the DRC. Selection considers the venture’s economic potential, the team’s commitment, and alignment with local needs. To request application instructions, email contact@hojanetwork.org.",
      ctaTitle: "Join the next cohort of HOJA Academy",
      ctaButton: "Contact HOJA Academy about applying",
    },
    farmPage: {
      title: "HOJA Farm",
      subtitle: "Nourish. Create. Cultivate.",
      intro: "HOJA Farm champions regenerative farming and the production of nutrient-dense staples across Rwanda and the Democratic Republic of Congo. We work alongside rural communities to defeat malnutrition, foster green jobs, and establish resilience against harsh climate shocks.",
      approachTitle: "Our Agroecological Approach:",
      approachText: "HOJA Farm identifies agricultural crops and regenerative methods that advance human nutrition, rural farmer earnings, and soil restoration all at once. Moringa is our pioneering showcase, proving that ecological agriculture can serve as an engine of regional prosperity.",
      porcineTitle: "Pig Farming",
      porcineDescription: "HOJA Farm develops sustainable pig farming alongside rural communities through farmer training, improved husbandry practices, and stable income opportunities for women and young people.",
      domainsTitle: "Our Key Action Areas:",
      domain1Title: "Sustainable Local Production",
      domain1Points: [
        "Crop varieties specifically adapted to Rwandan and Congolese soils",
        "Water-smart agroecological cultivation minimizing input costs",
        "Farmer workshops on natural bio-fertilizers and composting",
        "Local distribution of high-germination certified seeds and plants",
      ],
      domain2Title: "Equitable Distribution",
      domain2Points: [
        "Transparent identification of households facing food insecurity",
        "Priority deliveries to rural schools, daycare centers, and clinics",
        "Nutrition awareness campaigns on wholesome food preparation",
        "Rigorous verification ensuring aid reaches intended beneficiaries",
      ],
      domain3Title: "Local Economic Value",
      domain3Points: [
        "Decent jobs for women and youth in harvesting, drying, and milling",
        "Farmer cooperatives equipped for post-harvest packaging",
        "Direct connection to regional and urban supermarket buyers",
        "Valorization of agricultural by-products into high-grade compost",
      ],
      domain4Title: "Civic Education & Outreach",
      domain4Points: [
        "Interactive nutrition masterclasses in local schools and town halls",
        "Cooking demonstrations promoting indigenous nutrient-rich crops",
        "Cooperation with traditional village leaders and farmer groups",
        "Open publication of agronomic findings and crop yield studies",
      ],
      expectedImpactTitle: "Targeted Long-Term Impact:",
      impactPoints: [
        "Reliable access to wholesome, locally grown food at fair prices",
        "Elevated rural family incomes and durable employment creation",
        "Substantial, verifiable decrease in chronic child malnutrition",
        "Soil microbiome regeneration and conservation of freshwater basins",
      ],
      ctaTitle: "Partner with HOJA Farm to expand rural nutrition",
      ctaButton: "Partner with Us",
    },
    donatePage: {
      title: "Support HOJA Network",
      subtitle: "Your Support Powers Lasting Change",
      intro: "HOJA Network turns pressing ecological and social hurdles into viable economic engines. Every contribution—large or small—directly funds grassroots entrepreneurship training, green job creation, and climate resilience in Rwanda and the Democratic Republic of Congo.",
      whySupportTitle: "Why Support HOJA Network?",
      whyPoints: [
        "Fund hands-on vocational programs that break generational poverty",
        "Create viable green jobs for underprivileged youth and women",
        "Restore vital ecosystems, enrich soils, and eradicate malnutrition",
        "Foster self-reliant communities capable of withstanding climate shocks",
      ],
      howToContributeTitle: "Ways You Can Support:",
      way1Title: "Individual Donations",
      way1Desc: "Contribute according to your means through one-time or monthly donations. Every dollar invests directly into the potential of emerging African leaders.",
      way2Title: "Corporate Partnerships",
      way2Desc: "Advance your ESG and CSR mandates through philanthropic grants, pro-bono skill-sharing, or donations of equipment and technology.",
      way3Title: "Impact Investing",
      way3Desc: "Provide catalytic seed funding to social micro-enterprises with proven environmental restoration and steady revenue potential.",
      way4Title: "Volunteering & Mentorship",
      way4Desc: "Lend your professional expertise in finance, agronomy, marketing, or AI to coach our enthusiastic cohorts of founders.",
      transparencyTitle: "Uncompromising Transparency & Accountability",
      transparencyText: "Every dollar received is governed under strict financial accounting standards. We publish regular, audited financial statements and verifiable field impact metrics, documenting exactly how your backing drives community transformation.",
      ctaTitle: "Every contribution strengthens local self-reliance.",
      ctaButton: "Donate Now",
    },
    footer: {
      newsletterTitle: "Subscribe to the HOJA Dispatch",
      newsletterDesc: "Get uplifting field stories, verified impact data, and innovation updates from Rwanda and the DRC straight to your inbox.",
      newsletterButton: "Sign Up Now",
      accreditationText: "HOJA Network is an accredited non-profit organization registered and operating in Rwanda (RGB) and the Democratic Republic of Congo (ASBL).",
      leadershipLink: "View our leadership & governance team",
      quickLinksTitle: "Quick Navigation",
      programsTitle: "Key Pillars",
    },
  },
};
