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
    subtitle: "Estrategia digital y aceleración del crecimiento empresarial",
    description: "Evaluamos y diseñamos hojas de ruta tecnológicas alineadas con la estrategia de negocios de nuestros clientes, potenciando la creación de valor compartido y operaciones de alto rendimiento.",
    iconName: "Briefcase",
    badge: "Estratégico",
    features: [
      "Diseño de arquitectura empresarial y transformación digital",
      "Modelado de procesos bajo metodologías ITIL y PMP",
      "Análisis de brechas tecnológicas y retorno de inversión (ROI)",
      "Acompañamiento peer-to-peer en la toma de decisiones"
    ],
    specs: [
      { label: "Metodología", value: "Agile / Tradicional / Híbrida" },
      { label: "Certificación", value: "PMP & PMI Capable" },
      { label: "Enfoque", value: "Estratégico Negocios" }
    ],
    brochureSlug: "security-technology-consulting"
  },
  {
    id: "servicios-gestionados",
    title: "Servicios Gestionados & NOC 24/7",
    category: "managed",
    subtitle: "Operación ininterrumpida de infraestructura de TI y telecomunicaciones",
    description: "Monitoreo continuo de redes, servidores y aplicaciones con ingenieros certificados L1-L3 y cumplimiento de estrictos Acuerdos de Nivel de Servicio (SLA).",
    iconName: "Headphones",
    badge: "NOC 24/7",
    features: [
      "Mesa de Servicios unificada (Teléfono, Email, WhatsApp, Portal)",
      "Gestión de incidentes y problemas bajo estándar ITIL v4",
      "Atención ininterrumpida los 365 días del año",
      "Generación de informes periódicos de desempeño y disponibilidad"
    ],
    specs: [
      { label: "Mesa de Servicios", value: "+56 2 2940 7502" },
      { label: "Atención Urgencias", value: "+56 9 4255 1631" },
      { label: "SLA Nivel 1", value: "Respuesta en < 15 min" }
    ],
    brochureSlug: "servicios-gestionados"
  },
  {
    id: "servicios-profesionales",
    title: "Servicios Profesionales Especializados",
    category: "consulting",
    subtitle: "Ejecución experta de proyectos de ingeniería e infraestructura TI",
    description: "Despliegue de proyectos complejos por parte de un equipo multidisciplinario altamente calificado con certificaciones internacionales.",
    iconName: "UserCheck",
    badge: "Ingeniería Experta",
    features: [
      "Implementación de redes y plataformas de colaboración (Cisco)",
      "Integración de sistemas multimarca y migración de datos",
      "Gestión de proyectos con metodología PMP",
      "Pruebas de aceptación y puesta en marcha asegurada"
    ],
    specs: [
      { label: "Equipo", value: "Ingenieros Certificados" },
      { label: "Calidad", value: "Control de Calidad PMP" },
      { label: "Experiencia", value: "+16 Años en Mercado" }
    ]
  },
  {
    id: "soluciones-digitales",
    title: "Soluciones Tecnológicas Digitales",
    category: "infrastructure",
    subtitle: "Innovación aplicada a los procesos centrales del negocio",
    description: "Desarrollo e integración de herramientas digitales de vanguardia diseñadas para acelerar la innovación y aumentar la competitividad.",
    iconName: "Cpu",
    badge: "Innovación Digital",
    features: [
      "Integración de plataformas cloud e híbridas",
      "Automatización de flujos de trabajo operativos",
      "Soluciones de telefonía IP y colaboración remota",
      "Habilitadores de transformación digital acelerada"
    ],
    specs: [
      { label: "Modelos", value: "Cloud / On-Premise / Híbrido" },
      { label: "Escalabilidad", value: "Empresarial" }
    ]
  },
  {
    id: "cybersecurity-ot-it",
    title: "Ciberseguridad Industrial & OT Risk",
    category: "cybersecurity",
    subtitle: "Protección perimetral y estrategia de riesgo para redes industriales",
    description: "Evaluación de vulnerabilidades, auditorías de riesgo OT, detección proactiva de amenazas e implementación de políticas Zero Trust.",
    iconName: "ShieldCheck",
    badge: "CISO & Ciberdefensa",
    features: [
      "CISO as a Service y consultoría de riesgo tecnológico",
      "Protección de redes SCADA, PLC e infraestructuras críticas",
      "Detección y respuesta ante Ransomware y filtraciones",
      "Estrategia de Seguridad Risk OT alineada a estándares internacionales"
    ],
    specs: [
      { label: "Seguridad", value: "Zero Trust Architecture" },
      { label: "Monitoreo", value: "SOC Dedicado 24/7" },
      { label: "Auditoría", value: "Ethical Hacking" }
    ],
    brochureSlug: "cybersecurity-for-industrial"
  },
  {
    id: "teletrabajo-hi-office",
    title: "Teletrabajo & Hi-Office",
    category: "workplace",
    subtitle: "Ambiente de trabajo colaborativo, remoto y protegido",
    description: "Infraestructura integrada de telefonía IP, escritorios virtuales y túneles seguros para permitir la continuidad operativa de colaboradores remotos.",
    iconName: "Laptop",
    badge: "Destacado Hi-Office",
    features: [
      "Túneles VPN cifrados y acceso ZTNA sin exposición de red",
      "Telefonía corporativa integrada con grabación y anexos en la nube",
      "Protección de datos y control de accesos por roles",
      "Reducción de costos operativos y traslados"
    ],
    specs: [
      { label: "Despliegue", value: "Multi-plataforma" },
      { label: "Cifrado", value: "Grado Militar AES-256" }
    ],
    brochureSlug: "hi-office"
  },
  {
    id: "site-connectivity-iot",
    title: "Industrial Site Connectivity & IoT",
    category: "infrastructure",
    subtitle: "Conectividad robusta para faenas y sitios remotos",
    description: "Enlaces de alta disponibilidad, sensorización IoT y monitoreo de activos geográficamente dispersos en condiciones extremas.",
    iconName: "Radio",
    badge: "Alta Disponibilidad",
    features: [
      "Redes privadas inalámbricas y enlaces satelitales redundantes",
      "Telemetría en tiempo real de sensores y maquinarias industriales",
      "SD-WAN industrial para optimización de ancho de banda",
      "Equipamiento rugerizado de alta tolerancia ambiental"
    ],
    specs: [
      { label: "Uptime", value: "99.99% Garantizado" },
      { label: "Ambientes", value: "Faenas Remotas / Alta Cordillera" }
    ],
    brochureSlug: "industrial-site-connectivity-iot"
  },
  {
    id: "analytics-geoanalytics",
    title: "Analytics & Geoanalytics",
    category: "analytics",
    subtitle: "Inteligencia de datos y analítica espacial de activos",
    description: "Modelos analíticos y dashboards geoespaciales para la visualización de datos de flotas, sensores y puntos de atención en tiempo real.",
    iconName: "BarChart3",
    badge: "Inteligencia de Datos",
    features: [
      "Dashboards ejecutivos georreferenciados en tiempo real",
      "Optimización de rutas logísticas y monitoreo de activos",
      "Modelos predictivos de mantenimiento preventivo",
      "Integración nativa con sistemas ERP y bases de datos"
    ],
    specs: [
      { label: "Procesamiento", value: "En Tiempo Real" },
      { label: "Motor", value: "Geoanalytics Vectorial" }
    ],
    brochureSlug: "analytics"
  }
];

export const ECONOMIC_SECTORS: EconomicSector[] = [
  {
    id: "mining",
    name: "Minería & Extractivas",
    iconName: "Pickaxe",
    description: "Infraestructura de comunicaciones y ciberseguridad adaptada a entornos extremos y faenas mineras remotas a gran altitud.",
    challenges: [
      "Cobertura inalámbrica en rajos y subterránea de alta interferencia",
      "Protección de redes SCADA y sistemas de camiones autónomos",
      "Polvo, vibraciones extremos y oscilaciones térmicas"
    ],
    solutionsProvided: [
      "Redes mesh LTE/5G industriales ultra-resistentes",
      "Ciberseguridad OT con aislamiento de componentes críticos",
      "Telemetría geotécnica en tiempo real"
    ],
    metrics: [
      { label: "Disponibilidad Faena", value: "99.99%" },
      { label: "Reducción Incidentes", value: "-45%" }
    ]
  },
  {
    id: "telecom",
    name: "Telecomunicaciones & Proveedores TI",
    iconName: "Signal",
    description: "Soporte de infraestructura de transporte, interconexiones de datos y servicios profesionales gestionados de alto volumen.",
    challenges: [
      "Garantizar disponibilidad ante cortes de energía o enlaces",
      "Escalabilidad inmediata de capacidad de datos",
      "Cumplimiento riguroso de normativas de regulación telco"
    ],
    solutionsProvided: [
      "Monitoreo NOC proactivo 24/7",
      "Consultoría de optimización de redes IP/MPLS",
      "Auditorías de ciberseguridad perimetral BGP"
    ],
    metrics: [
      { label: "MTTR Promedio", value: "18 min" },
      { label: "Nodos Monitoreados", value: "+1,200" }
    ]
  },
  {
    id: "government",
    name: "Gobierno & Sector Público",
    iconName: "Landmark",
    description: "Plataformas seguras de comunicación e interconexión interinstitucional alineadas a la Ley de Transformación Digital y Ciberseguridad.",
    challenges: [
      "Cumplimiento estricto de estándares de privacidad de datos de ciudadanos",
      "Resistencia frente a ataques DDoS y phishing masivo",
      "Continuidad operativa ante contingencias nacionales"
    ],
    solutionsProvided: [
      "Arquitecturas ZTNA para personal público en teletrabajo",
      "Protección contra exfiltración de información confidencial",
      "Sistemas de contingencia y respaldos cifrados immutable cloud"
    ],
    metrics: [
      { label: "Cumplimiento ISO 27001", value: "100%" },
      { label: "Exposición a Amenazas", value: "0 Fugas" }
    ]
  },
  {
    id: "finance",
    name: "Banca, Finanzas & Seguros",
    iconName: "Building2",
    description: "Ambientes hiperseguros para transacciones financieras de baja latencia con respaldo multi-datacenter.",
    challenges: [
      "Riesgos de fraude y filtración de datos crediticios o de tarjetas",
      "Requerimiento de baja latencia e interconexión PCI-DSS",
      "Seguimiento minucioso de accesos privileged"
    ],
    solutionsProvided: [
      "Cifrado de datos en reposo y en tránsito con HSM/KMS",
      "Monitoreo de actividad de usuarios privilegiados (PAM)",
      "Conexiones dedicadas punto a punto redundantes"
    ],
    metrics: [
      { label: "Certificación PCI-DSS", value: "Compatible" },
      { label: "Latencia Internodo", value: "< 2 ms" }
    ]
  },
  {
    id: "energy",
    name: "Energía & Utilities",
    iconName: "Zap",
    description: "Protección y monitoreo de parques fotovoltaicos, eólicos, subestaciones eléctricas y redes de distribución de agua/gas.",
    challenges: [
      "Aislamiento de instalaciones geográficamente dispersas",
      "Protección de PLC/RTU frente a intrusiones externas",
      "Continuidad de suministro ininterrumpido"
    ],
    solutionsProvided: [
      "Conectividad satelital y celular híbrida para plantas remotas",
      "Sistema de alerta temprana de ciberataques industriales",
      "Tele-control remoto cifrado de subestaciones"
    ],
    metrics: [
      { label: "Plantas Conectadas", value: "+90" },
      { label: "Uptime de Red", value: "99.98%" }
    ]
  },
  {
    id: "retail",
    name: "Retail, Logística & Comercio",
    iconName: "ShoppingBag",
    description: "Integración de sucursales, centros de distribución y trazabilidad de la cadena de suministro en tiempo real.",
    challenges: [
      "Caídas de puntos de venta en horas pico de alta demanda",
      "Gestión de inventarios y flotas distribuidas nacionalmente",
      "Ciberdefensa de tiendas online y pasarelas de pago"
    ],
    solutionsProvided: [
      "SD-WAN con failover 4G/5G instantáneo para tiendas",
      "Plataforma de Geoanalytics para optimización de logística",
      "Mesa de ayuda express para cajas y terminales POS"
    ],
    metrics: [
      { label: "Sucursales Conectadas", value: "+350" },
      { label: "Falla de Transacción", value: "0.01%" }
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
    feature: "Exposición de Claves & Código",
    legacyWP: "⚠️ Alta. Scripts y credenciales visibles en código HTML/JS cliente.",
    hiwayNextJS: "🛡️ Cero. Procesamiento Server-Side (SSR/API Routes) sin fugas de datos."
  },
  {
    feature: "Tiempo de Respuesta (TTFB)",
    legacyWP: "🐢 1.8s - 3.5s debido a múltiples plugins y Visual Composer.",
    hiwayNextJS: "⚡ < 150ms con Next.js App Router y assets ultraligeros."
  },
  {
    feature: "Riesgo de Inyección (SQLi / XSS)",
    legacyWP: "⚠️ Constantes fallos por plugins de formularios (Contact Form 7 anticuados).",
    hiwayNextJS: "🛡️ Sanitización estricta de inputs con esquemas TypeScript en el servidor."
  },
  {
    feature: "Seguridad de Formularios",
    legacyWP: "⚠️ Vulnerable a bots y spam sin Rate Limiting efectivo.",
    hiwayNextJS: "🛡️ Tokens sanitizados, headers de rate-limit y validación API REST."
  },
  {
    feature: "Cumplimiento Normativo",
    legacyWP: "❌ Estándares web básicos anticuados.",
    hiwayNextJS: "✅ Alineado con directrices ISO 27001, SOC2 y Ley de Ciberseguridad."
  }
];
