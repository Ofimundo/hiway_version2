export interface ServiceItem {
  id: string;
  title: string;
  category: 'cybersecurity' | 'infrastructure' | 'workplace' | 'analytics' | 'managed' | 'consulting';
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  specs: { label: string; value: string }[];
  brochureSlug?: string;
  badge?: string;
}

export interface EconomicSector {
  id: string;
  name: string;
  iconName: string;
  description: string;
  challenges: string[];
  solutionsProvided: string[];
  metrics: { label: string; value: string }[];
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  mapCoordinates: string;
  isHQ?: boolean;
}

export interface BrochureItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  fileSize: string;
  pages: number;
}

export interface AlliancePartner {
  name: string;
  tier?: string;
  category: string;
}

export const HIWAY_COMPANY_INFO = {
  name: "HIWAY",
  legalName: "Hiway Networks S.A.",
  hashtag: "#SomosHiway",
  heroHeadline: "Asesoría integral y eficiente",
  heroSubheadline: "Trabajamos en conjunto, peer to peer, los desafíos de tu negocio, potenciando la creación de valor compartido y sostenible.",
  tagline: "Soluciones digitales tecnológicas innovadoras y de alta seguridad",
  heroSubtitle: "Transformamos la infraestructura crítica, ciberseguridad industrial y servicios gestionados para empresas líderes en Chile y Latinoamérica.",
  phoneHQ: "+56 2 2940 7500",
  emailHQ: "consultas@cxhiway.com",
  phoneMexico: "+52 56 1007 7957",
  emailSupport: "asistencia@cxhiway.com",
  phoneSupport: "+56 2 2940 7502",
  mobileSupport: "+56 9 4255 1631",
  linkedin: "https://www.linkedin.com/company/hiway-networks/",
  establishedYear: 2008,

  mission: "Somos una compañía de servicios digitales empresariales enfocada en la construcción conjunta de valor y diferenciación para sus clientes, utilizando la tecnología como motor de transformación.",
  vision: "Ser la empresa que entrega la mejor experiencia de servicios digitales en Latinoamérica.",

  values: [
    {
      title: "Experiencia Exclusiva",
      description: "Experiencia de negocio personalizada y exclusiva para cada cliente."
    },
    {
      title: "Presencia Internacional",
      description: "Mediante nuestra presencia internacional incorporamos diversidad en tu negocio."
    },
    {
      title: "Innovación & Crecimiento",
      description: "Incorporando nuevas ideas que favorezcan el crecimiento de nuestros clientes y colaboradores."
    },
    {
      title: "Valor del Cambio",
      description: "El valor del cambio nos convoca a la adaptación de nuestra cultura descubriendo nuevos desafíos."
    }
  ],

  strategicPillars: [
    {
      title: "Somos el aliado tecnológico que necesitas",
      text: "Dentro de un ecosistema dinámico y ágil, en Hiway creamos una estrategia de crecimiento sostenible que entregue valor y transforme los negocios de nuestros clientes, para generar operaciones de alto rendimiento."
    },
    {
      title: "Desarrollamos innovación para acelerar tu negocio",
      text: "Proyectamos las ideas de nuestros clientes y los motivamos a salir de la zona de confort, creando propuestas basadas en tendencias innovadoras. Somos un eslabón fundamental en la cadena de valor de nuestros clientes, al acelerar el cumplimiento de sus objetivos estratégicos."
    }
  ],

  alliances: [
    { name: "Cisco", tier: "Partner", category: "Redes & Telepresencia" },
    { name: "Fortinet", tier: "Security Partner", category: "Ciberseguridad & Firewalls" },
    { name: "SV Links", tier: "Technology Partner", category: "Conectividad & Enlaces" },
    { name: "Bufete de Soluciones Integrales S.C.", tier: "Strategic Alliance", category: "Consultoría & Cumplimiento" },
    { name: "Archer", tier: "Enterprise Partner", category: "Gestión de Riesgo & GRC" },
    { name: "Microsoft", tier: "Cloud Partner", category: "Cloud & Colaboración" },
    { name: "Trellix", tier: "Cyber Partner", category: "Seguridad de Endpoint & XDR" }
  ],

  certifications: [
    { name: "ITIL", description: "Information Technology Infrastructure Library", code: "ITIL v4" },
    { name: "PMP", description: "Project Management Professional", code: "PMI PMP" },
    { name: "PMI", description: "Project Management Institute Member", code: "PMI Global" },
    { name: "PMI CAPM", description: "Certified Associate in Project Management", code: "CAPM" }
  ],

  methodologies: [
    {
      type: "Tradicional",
      description: "Coordinación de actividades por fases estructuradas que ofrecen claridad, estabilidad y control de inicio a fin."
    },
    {
      type: "Agile",
      description: "Trabajo multidisciplinario y flexible que aumenta la eficiencia, facilita la adaptación a cambios y maximiza la satisfacción del cliente."
    },
    {
      type: "Híbrida",
      description: "Combinación óptima de planificación predecible y sprints ágiles para reducir incertidumbre en entornos dinámicos complejos."
    }
  ],

  caseStudy: {
    client: "Mutual de Seguros",
    title: "Plataforma de Colaboración & Telepresencia Empresarial",
    summary: "Despliegue de salas de telepresencia para Santiago y Valparaíso con arquitectura Cisco + Hiway.",
    impact: "Disminución significativa de costos de traslado entre sucursales y aumento en la agilidad de toma de decisiones entre regiones."
  },

  metrics: [
    { label: "SLA Garantizado en NOC/SOC", value: "99.99%" },
    { label: "Presencia Regional Latam", value: "Chile & México" },
    { label: "Certificaciones Técnicas", value: "ITIL / PMP" },
    { label: "Tiempo de Respuesta Soporte 24/7", value: "< 15 min" },
  ]
};

export const OFFICES: OfficeLocation[] = [
  {
    city: "Santiago",
    country: "Chile",
    address: "Isidora Goyenechea 3621, Oficina 201, Las Condes, Santiago, Chile",
    phone: "+56 2 2940 7500",
    email: "consultas@cxhiway.com",
    mapCoordinates: "-33.414, -70.596",
    isHQ: true
  },
  {
    city: "Ciudad de México",
    country: "México",
    address: "Av. Revolución 1267 – piso 19, Los Alpes, Álvaro Obregón, 01040, CDMX, México",
    phone: "+52 56 1007 7957",
    email: "consultas@cxhiway.com",
    mapCoordinates: "19.362, -99.189",
    isHQ: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "consultoria-negocio",
    title: "Servicios de Consultoría de Negocio",
    category: "consulting",
    subtitle: "Hi-Digital Consulting, Transformación Digital & Hi-Revenue Growth",
    description: "Ayudamos a las organizaciones a gestionar las mejores herramientas del mercado, abarcando transformación digital, inmersión tecnológica e Hi-Revenue Growth para externalizar la capacidad de correlación y análisis de datos del negocio de forma segura y confiable.",
    iconName: "Briefcase",
    badge: "Hi-Digital Consulting",
    features: [
      "Transformación Digital e Inmersión Tecnológica alineada al negocio",
      "Hi-Revenue Growth: correlación y análisis de datos para resolver desafíos estratégicos",
      "Centrados en el valor de los resultados y eficiencia operativa",
      "Acompañamiento peer-to-peer bajo estándares ITIL, PMP y PMI"
    ],
    specs: [
      { label: "Enfoque", value: "Transformación Digital" },
      { label: "Solución", value: "Hi-Revenue Growth" },
      { label: "Certificación", value: "ITIL / PMP / PMI" }
    ],
    brochureSlug: "security-technology-consulting"
  },
  {
    id: "servicios-gestionados",
    title: "Servicios Gestionados (Hi-SOC & NOC)",
    category: "managed",
    subtitle: "Administración remota de infraestructura, Hi-SOC y Mesa de Servicios",
    description: "Diseñados para gestionar, administrar y operar la infraestructura tecnológica de nuestros clientes de forma remota, asegurando disponibilidad, eficiencia operacional y seguridad continua.",
    iconName: "Headphones",
    badge: "Hi-SOC / NOC 24/7",
    features: [
      "Hi-SOC (Hi-Security Operations Center): detección, análisis y respuesta rápida ante incidentes",
      "Monitoreo en línea de equipos TIC y continuidad operativa del negocio",
      "Mesa de Servicios unificada (+56 2 2940 7502 / asistencia@cxhiway.com)",
      "Gestión de incidentes y problemas bajo mejores prácticas ITIL"
    ],
    specs: [
      { label: "Mesa de Servicios", value: "+56 2 2940 7502" },
      { label: "Celular Soporte", value: "+56 9 4255 1631" },
      { label: "Operación", value: "Continua 24/7" }
    ],
    brochureSlug: "servicios-gestionados"
  },
  {
    id: "servicios-profesionales",
    title: "Servicios Profesionales",
    category: "consulting",
    subtitle: "Asesoría especializada y consultoría empresarial de alto nivel",
    description: "Orientados a brindar asesoría especializada y consultoría empresarial de la mano de un equipo de destacados profesionales para garantizar la continuidad operativa y el éxito de tus proyectos.",
    iconName: "UserCheck",
    badge: "Ingeniería Certificada",
    features: [
      "Ejecución de proyectos con metodologías Tradicional, Agile o Híbrida",
      "Profesionales certificados en PMI, PMP, PMI-CAPM e ITIL",
      "Integración tecnológica con alianzas líderes (Cisco, Fortinet, Microsoft, Trellix)",
      "Acompañamiento integral desde el diseño hasta la puesta en marcha"
    ],
    specs: [
      { label: "Equipo", value: "Especialistas Certificados" },
      { label: "Metodologías", value: "Tradicional / Agile / Híbrida" },
      { label: "Cobertura", value: "Chile & México" }
    ]
  },
  {
    id: "soluciones-digitales",
    title: "Soluciones Tecnológicas Digitales & Hi-Automation",
    category: "infrastructure",
    subtitle: "Hi-Automation, Cloud Management, Cloud Migration & Industria X",
    description: "Soluciones integrales e innovadoras orientadas a potenciar y proteger los negocios en áreas críticas como Cloud (Hi-Cloud), Automatización de procesos (Hi-Automation) e Industria X.",
    iconName: "Cpu",
    badge: "Hi-Automation & Hi-Cloud",
    features: [
      "Hi-Automation: análisis y automatización de flujos de trabajo según reglas de negocio",
      "Reducción de tiempos, errores y recursos acelerando el retorno de inversión (ROI)",
      "Hi-Cloud: gestión y migración en entornos híbridos, locales y cloud",
      "Habilitación tecnológica para procesos de Industria X"
    ],
    specs: [
      { label: "Automatización", value: "Hi-Automation" },
      { label: "Nube", value: "Hi-Cloud Híbrida/Local" }
    ]
  },
  {
    id: "cybersecurity-ot-it",
    title: "Ciberseguridad: Security Strategy Risk IT / OT",
    category: "cybersecurity",
    subtitle: "Security Strategy Risk IT, Security Strategy Risk OT & Cloud Security",
    description: "Implementamos procesos de seguridad de la información identificando brechas, amenazas y riesgos en recursos tecnológicos corporativos (IT), entornos industriales (OT) e infraestructuras en la nube.",
    iconName: "ShieldCheck",
    badge: "Security Risk IT/OT",
    features: [
      "Security Strategy Risk IT: identificación de brechas, amenazas y riesgos tecnológicos",
      "Security Strategy Risk OT: protección especializada para entornos y procesos industriales",
      "Cloud Security: protección contra amenazas cibernéticas en entornos híbridos y cloud",
      "Security Technology Consulting y operación integrada con Hi-SOC"
    ],
    specs: [
      { label: "Entornos", value: "Convergencia IT / OT" },
      { label: "Centro Seguridad", value: "Hi-SOC Dedicado" },
      { label: "Nube", value: "Cloud Security" }
    ],
    brochureSlug: "cybersecurity-for-industrial"
  },
  {
    id: "teletrabajo-hi-office",
    title: "Teletrabajo & Hi-Office",
    category: "workplace",
    subtitle: "Soluciones digitales colaborativas y continuidad operativa remota",
    description: "Conjunto de herramientas digitales y colaborativas orientadas a optimizar la operatividad de las oficinas y entornos de teletrabajo de forma segura, eficiente y sin interrupciones.",
    iconName: "Laptop",
    badge: "Hi-Office",
    features: [
      "Conectividad remota protegida y acceso seguro a recursos corporativos",
      "Plataformas de colaboración, telepresencia y comunicaciones unificadas",
      "Continuidad operativa para equipos distribuidos y trabajo híbrido",
      "Optimización de costos de traslado y agilidad en la toma de decisiones"
    ],
    specs: [
      { label: "Solución", value: "Hi-Office" },
      { label: "Modalidad", value: "Presencial / Remoto / Híbrido" }
    ],
    brochureSlug: "hi-office"
  },
  {
    id: "site-connectivity-iot",
    title: "Industrial Site Connectivity & IoT (Hi-Connect)",
    category: "infrastructure",
    subtitle: "Arquitectura de redes bajo estándares industriales, movilidad y colaboración",
    description: "Servicio perteneciente a la familia Hi-Connect enfocado en asesorías tecnológicas para el diseño de arquitectura de redes bajo estrictos estándares industriales, integrando tecnologías para la movilidad, la colaboración y la convergencia IT/OT.",
    iconName: "Radio",
    badge: "Hi-Connect & IoT",
    features: [
      "Diseño de arquitectura de redes bajo estándares industriales exigentes",
      "Integración de tecnologías para la movilidad y colaboración en terreno",
      "Convergencia segura entre entornos IT y redes operativas OT",
      "Conectividad IoT para monitoreo y continuidad en sitios industriales"
    ],
    specs: [
      { label: "Familia", value: "Hi-Connect" },
      { label: "Estándar", value: "Redes Industriales IT/OT" }
    ],
    brochureSlug: "industrial-site-connectivity-iot"
  },
  {
    id: "analytics-geoanalytics",
    title: "Hi-Data & Analytics (Hi-Analytics & Geoanalytics)",
    category: "analytics",
    subtitle: "Data Science, Business Intelligence y capas de geolocalización espacial",
    description: "Soluciones respaldadas por especialistas en Data Science y procesamiento de grandes volúmenes de información para ayudar a las empresas a potenciar sus negocios de forma estratégica.",
    iconName: "BarChart3",
    badge: "Hi-Data & Analytics",
    features: [
      "Hi-Analytics: herramientas de marketing y Business Intelligence (BI) para interacciones personalizadas",
      "Geoanalytics: incorporación de detalles de geolocalización y capas espaciales para descubrir nuevos insights",
      "Hi-Revenue Growth: correlación y análisis avanzado de datos de negocio",
      "Modelos de Data Science orientados a la toma de decisiones estratégicas"
    ],
    specs: [
      { label: "Familia", value: "Hi-Data & Analytics" },
      { label: "Especialidad", value: "Hi-Analytics & Geoanalytics" }
    ],
    brochureSlug: "analytics"
  },
  {
    id: "financiamiento-tecnologico",
    title: "Financiamiento Tecnológico",
    category: "consulting",
    subtitle: "Financiamiento total de la solución y flexibilidad de pagos",
    description: "Opciones de financiamiento diseñadas para facilitar la adopción de proyectos tecnológicos manteniendo el control del presupuesto empresarial bajo esquemas flexibles.",
    iconName: "Briefcase",
    badge: "Financiamiento 100%",
    features: [
      "Financiamiento total de la solución: hasta el 100% de los costos de equipamiento",
      "Cobertura de costos indirectos como mantenimiento de software y servicios",
      "Flexibilidad de los pagos: estructuración en modalidad mensual, trimestral o diferida",
      "Adaptación al flujo de ingresos de la empresa manteniendo el control presupuestario"
    ],
    specs: [
      { label: "Cobertura", value: "Hasta 100% Equipamiento y Servicios" },
      { label: "Modalidades", value: "Mensual, Trimestral o Diferida" }
    ]
  }
];

export const ECONOMIC_SECTORS: EconomicSector[] = [
  {
    id: "finance",
    name: "Financiero",
    iconName: "Landmark",
    description: "Las instituciones financieras han evolucionado con gran velocidad mediante procesos de transformación digital, incorporando tecnologías Fintech, actualizando sus modelos de servicio omnicanal (presencial-digital) y enfocándose en la analítica, la personalización y la adopción tecnológica por parte de sus colaboradores.",
    challenges: [
      "Evolución acelerada hacia modelos de servicio omnicanal (presencial-digital)",
      "Integración ágil y segura de nuevas tecnologías Fintech",
      "Necesidad de analítica avanzada, personalización y adopción por los colaboradores"
    ],
    solutionsProvided: [
      "Hi-Automation, Hi-Cloud y Servicios Gestionados 24/7",
      "Security Strategy Risk IT y Security Technology Consulting",
      "Hi-Data & Analytics, Infraestructura y Financiamiento"
    ],
    metrics: [
      { label: "Enfoque", value: "Omnicanal" },
      { label: "Seguridad", value: "Hi-SOC 24/7" }
    ]
  },
  {
    id: "retail",
    name: "Retail",
    iconName: "ShoppingBag",
    description: "En el nuevo retail, la satisfacción del cliente es un pilar fundamental para asegurar la recurrencia de compra, por lo que el sector debe dar un salto adelante para adaptarse permanentemente a las nuevas necesidades del mercado.",
    challenges: [
      "Asegurar la satisfacción del cliente y la recurrencia de compra",
      "Adaptación continua a las nuevas necesidades y hábitos del mercado",
      "Disponibilidad e integración de canales físicos y digitales"
    ],
    solutionsProvided: [
      "Hi-Data & Analytics (Hi-Analytics y Geoanalytics) para conocer al cliente",
      "Hi-Automation y Hi-Cloud para optimizar procesos operativos",
      "Servicios Gestionados, Ciberseguridad, Infraestructura y Financiamiento"
    ],
    metrics: [
      { label: "Foco", value: "Experiencia Cliente" },
      { label: "Analítica", value: "Geoanalytics" }
    ]
  },
  {
    id: "mining",
    name: "Minería",
    iconName: "Pickaxe",
    description: "La incorporación de tecnologías digitales es una prioridad para potenciar la productividad y la sustentabilidad en la industria minera, ayudando a minimizar diversos desafíos operacionales y ambientales.",
    challenges: [
      "Mejorar continuamente la productividad y la sustentabilidad operacional",
      "Minimizar desafíos operativos en entornos industriales exigentes",
      "Convergencia y protección de redes operativas (OT) y corporativas (IT)"
    ],
    solutionsProvided: [
      "Industrial Site Connectivity & IoT (Hi-Connect) bajo estándares industriales",
      "Security Strategy Risk OT / IT y monitoreo continuo Hi-SOC",
      "Hi-Automation, Hi-Data & Analytics y Servicios Gestionados"
    ],
    metrics: [
      { label: "Prioridad", value: "Productividad" },
      { label: "Conectividad", value: "IT / OT & IoT" }
    ]
  },
  {
    id: "health",
    name: "Digitalización en Salud",
    iconName: "Building2",
    description: "La tecnología digital aporta un gran abanico de posibilidades para mejorar la atención médica, optimizar operaciones y ofrecer experiencias superiores a los pacientes, considerando siempre la seguridad y los requisitos reglamentarios para mitigar riesgos.",
    challenges: [
      "Mejorar la atención médica y ofrecer experiencias superiores a los pacientes",
      "Optimizar las operaciones clínicas y administrativas",
      "Cumplir estrictos requisitos reglamentarios y de seguridad para mitigar riesgos"
    ],
    solutionsProvided: [
      "Hi-Automation, Hi-Cloud y Hi-Data & Analytics",
      "Security Strategy Risk IT y Security Technology Consulting",
      "Servicios Gestionados, Infraestructura y Financiamiento"
    ],
    metrics: [
      { label: "Atención", value: "Digitalizada" },
      { label: "Protección", value: "Cumplimiento" }
    ]
  },
  {
    id: "education",
    name: "Educación",
    iconName: "Signal",
    description: "Acompañamos a las instituciones educativas en su transformación digital mediante infraestructura robusta, colaboración remota, ciberseguridad y analítica de datos para potenciar el aprendizaje y la gestión institucional.",
    challenges: [
      "Continuidad de plataformas digitales y colaboración a distancia",
      "Protección de datos e infraestructura académica ante amenazas cibernéticas",
      "Modernización tecnológica con control presupuestario"
    ],
    solutionsProvided: [
      "Hi-Office, Colaboración y Conectividad de alta disponibilidad",
      "Hi-Cloud, Cloud Security y Servicios Gestionados",
      "Financiamiento flexible hasta el 100% de la solución"
    ],
    metrics: [
      { label: "Entorno", value: "Colaborativo" },
      { label: "Soporte", value: "Gestionado" }
    ]
  },
  {
    id: "industry",
    name: "Energía & Industria X",
    iconName: "Zap",
    description: "Impulsamos la transformación hacia la Industria X integrando automatización avanzada, conectividad industrial IoT, analítica espacial y ciberseguridad OT/IT para operaciones de alto rendimiento.",
    challenges: [
      "Integración segura entre tecnologías de operación (OT) y de información (IT)",
      "Automatización de flujos de trabajo para reducir tiempos y errores",
      "Visibilidad y control de activos distribuidos geográficamente"
    ],
    solutionsProvided: [
      "Industrial Site Connectivity & IoT y Geoanalytics",
      "Security Strategy Risk OT y Centro de Operaciones Hi-SOC",
      "Hi-Automation y Consultoría Tecnológica Especializada"
    ],
    metrics: [
      { label: "Evolución", value: "Industria X" },
      { label: "Seguridad", value: "Risk IT / OT" }
    ]
  }
];

export const BROCHURES: BrochureItem[] = [
  {
    slug: "cybersecurity-for-industrial",
    title: "Brochure Cybersecurity for Industrial & OT Networks",
    category: "Ciberseguridad",
    description: "Guía completa con estándares IEC 62443, estrategias de segmentación SCADA y centro de operaciones de seguridad.",
    fileSize: "2.4 MB PDF",
    pages: 12
  },
  {
    slug: "industrial-site-connectivity-iot",
    title: "Brochure Industrial Site Connectivity & IoT Solutions",
    category: "Infraestructura",
    description: "Detalles técnicos de hardware rugerizado, enlaces satelitales LEO y sensorización de activos críticos.",
    fileSize: "3.1 MB PDF",
    pages: 16
  },
  {
    slug: "hi-office",
    title: "Brochure Hi-Office Enterprise Remote Workplace",
    category: "Teletrabajo",
    description: "Especificaciones de arquitectura ZTNA, VPN empresarial cifrada y central de telefonía IP.",
    fileSize: "1.8 MB PDF",
    pages: 8
  },
  {
    slug: "analytics",
    title: "Brochure Analytics & Spatial Intelligence Solutions",
    category: "Analytics",
    description: "Casos de éxito en analítica predictiva de mantenimiento y trazabilidad geoespacial de flotas.",
    fileSize: "2.9 MB PDF",
    pages: 14
  },
  {
    slug: "security-technology-consulting",
    title: "Brochure Security Technology Consulting & Risk OT",
    category: "Consultoría",
    description: "Metodologías de evaluación de riesgo tecnológico y consultoría CISO as a Service para empresas.",
    fileSize: "2.1 MB PDF",
    pages: 10
  },
  {
    slug: "servicios-gestionados",
    title: "Brochure Servicios Gestionados & Mesa de Servicios 24/7",
    category: "Servicios Gestionados",
    description: "Estructura de atención NOC, soporte L1-L3 bajo marco ITIL y acuerdos de nivel de servicio SLA.",
    fileSize: "2.5 MB PDF",
    pages: 14
  }
];

export const SECURITY_COMPARISON = [
  {
    feature: "Financiamiento Total de la Solución",
    legacyWP: "Inversión inicial elevada solo para hardware sin cubrir servicios asociados.",
    hiwayNextJS: "Financiamiento de hasta el 100% de los costos de equipamiento, mantenimiento de software y servicios."
  },
  {
    feature: "Flexibilidad de los Pagos",
    legacyWP: "Esquemas rígidos que presionan el flujo de caja de la organización.",
    hiwayNextJS: "Pagos en modalidad mensual, trimestral o diferida según el flujo de ingresos de la empresa."
  },
  {
    feature: "Hi-SOC (Hi-Security Operations Center)",
    legacyWP: "Reacción tardía ante incidentes y falta de visibilidad centralizada.",
    hiwayNextJS: "Detección, análisis y respuesta rápida ante incidentes para garantizar la continuidad del negocio."
  },
  {
    feature: "Security Strategy Risk IT / OT",
    legacyWP: "Brechas de seguridad entre redes corporativas (IT) y entornos industriales (OT).",
    hiwayNextJS: "Procesos integrales que identifican brechas, amenazas y riesgos tecnológicos e industriales."
  },
  {
    feature: "Cloud Security & Servicios Gestionados",
    legacyWP: "Administración aislada sin monitoreo continuo 24/7.",
    hiwayNextJS: "Protección en entornos híbridos/cloud y operación remota continua (NOC/SOC) bajo estándares ITIL."
  }
];
