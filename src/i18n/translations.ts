export type Language = 'pt' | 'es' | 'en';

export interface TranslationDictionary {
  // Navigation & General
  nav: {
    ecosystem: string;
    services: string;
    sectors: string;
    differentials: string;
    mercosul: string;
    approvedNetwork: string;
    blog: string;
    clientArea: string;
  };
  banner: {
    alert: string;
    learnMore: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      projects: string;
      projectsLabel: string;
      retention: string;
      retentionLabel: string;
      savings: string;
      savingsLabel: string;
      compliance: string;
      complianceLabel: string;
    };
  };
  ecosystem: {
    badge: string;
    title: string;
    titleHighlight: string;
    lead: string;
    paragraph1: string;
    positioningBadge: string;
    positioningText: string;
    positioningHighlight: string;
    specialistsBadge: string;
    structureBadge: string;
    structureTitle: string;
    structureTitleHighlight: string;
    structureLead: string;
    structureCards: {
      holding: { title: string; desc: string };
      brasil: { title: string; desc: string };
      mercosul: { title: string; desc: string };
      infra: { title: string; desc: string };
      specialized: { title: string; desc: string };
      approved: { title: string; desc: string };
    };
    visionBadge: string;
    visionTitle: string;
    visionP1: string;
    visionP2: string;
    visionP3: string;
    missionBadge: string;
    missionTitle: string;
    missionDesc: string;
    pillarsBadge: string;
    pillarsTitle: string;
    pillarsTitleHighlight: string;
    pillarsSubtitle: string;
    pillars: Array<{ title: string; subtitle: string }>;
    integratedNetwork: {
      title: string;
      subtitle: string;
      p1: string;
      p2Lead: string;
      p2Highlight: string;
      p2Tail: string;
      p3: string;
      interfaceTitle: string;
      processLead: string;
      steps: string[];
    };
  };
  servicesSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    lead: string;
    exploreBtn: string;
  };
  sectorsSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    lead: string;
    seeScopeBtn: string;
  };
  differentialsSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    lead: string;
  };
  mercosulSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    lead: string;
    strategicMarkets: string;
    countries: {
      brazil: string;
      paraguay: string;
      argentina: string;
      uruguay: string;
      chile: string;
      bolivia: string;
    };
    whatWeDoTitle: string;
    whatWeDoItems: Array<{ title: string; desc: string }>;
    corridorBadge: string;
    corridorTitle: string;
    corridorDesc: string;
    equation: {
      infra: string;
      logistics: string;
      industry: string;
      commerce: string;
      mercosul: string;
    };
  };
  networkSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    lead: string;
    criteriaTitle: string;
    criteriaItems: string[];
    specializationTitle: string;
    specializationAreas: string[];
    forClientsTitle: string;
    forClientsItems: Array<{ title: string; desc: string }>;
    forClientsConclusion: string;
    ctaButton: string;
    detailed: {
      intro: string;
      criteriaIntro: string;
      criteriaList: string[];
      conclusion: string;
    };
  };
  contactSection: {
    title: string;
    subtitle: string;
    addressLabel: string;
    testimonial: string;
    testimonialAuthor: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      state: string;
      statePlaceholder: string;
      city: string;
      cityPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      sending: string;
      successToastTitle: string;
      successToastDesc: string;
      privacyNotice: string;
    };
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    contactTitle: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  langNames: {
    pt: string;
    es: string;
    en: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  pt: {
    nav: {
      ecosystem: 'O Ecossistema',
      services: 'Serviços',
      sectors: 'Setores',
      differentials: 'Diferenciais',
      mercosul: 'Mercosul',
      approvedNetwork: 'Rede Homologada',
      blog: 'Blog',
      clientArea: 'Área do Cliente',
    },
    banner: {
      alert: 'Alerta: Novas diretrizes do CONAMA publicadas.',
      learnMore: 'Saiba mais',
    },
    hero: {
      badge: 'Líder em Gestão Ambiental e ESG Corporativo',
      titleStart: 'Soluções Integradas em',
      titleHighlight: 'Engenharia e Sustentabilidade',
      subtitle: 'Estruturamos projetos completos de infraestrutura, gestão de resíduos, conformidade ambiental e governança corporativa em todo o Brasil e Mercosul.',
      ctaPrimary: 'Solicitar Diagnóstico',
      ctaSecondary: 'Conhecer Serviços',
      metrics: {
        projects: '+450',
        projectsLabel: 'Projetos Concluídos',
        retention: '99.4%',
        retentionLabel: 'Conformidade Legal',
        savings: 'R$ 18M+',
        savingsLabel: 'Economia Gerada aos Clientes',
        compliance: '100%',
        complianceLabel: 'Auditoria Rigorosa',
      },
    },
    ecosystem: {
      badge: 'Ecossistema Empresarial',
      title: 'O Ecossistema',
      titleHighlight: 'Greenverse',
      lead: 'A Greenverse é um ecossistema empresarial criado para conectar empresas, especialistas, tecnologia e capital intelectual na construção de soluções para diferentes mercados.',
      paragraph1: 'Nossa atuação combina estratégia, engenharia, infraestrutura, operações, meio ambiente e logística, permitindo estruturar projetos de forma integrada.',
      positioningBadge: 'Nosso Posicionamento',
      positioningText: 'Não somos apenas um fornecedor.',
      positioningHighlight: 'Somos uma estrutura de integração e execução.',
      specialistsBadge: 'Especialistas Sênior',
      structureBadge: 'Arquitetura Empresarial',
      structureTitle: 'Uma Estrutura Pensada Para',
      structureTitleHighlight: 'Crescer',
      structureLead: 'O ecossistema Greenverse é formado por diferentes empresas, unidades de negócio, especialistas e parceiros estratégicos. Cada estrutura possui competências específicas, enquanto o ecossistema permite integração entre elas.',
      structureCards: {
        holding: { title: 'Greenverse Holding', desc: 'Estrutura estratégica e patrimonial.' },
        brasil: { title: 'Greenverse Brasil', desc: 'Operações e desenvolvimento de negócios no Brasil.' },
        mercosul: { title: 'Greenverse Mercosul', desc: 'Estrutura voltada à expansão e integração de negócios na região.' },
        infra: { title: 'Greenverse Infrastructure & Logistics', desc: 'Infraestrutura, logística e desenvolvimento de ativos.' },
        specialized: { title: 'Empresas Especializadas', desc: 'Operações técnicas e serviços específicos.' },
        approved: { title: 'Rede Homologada', desc: 'Empresas e especialistas integrados ao ecossistema.' },
      },
      visionBadge: 'Nossa Visão',
      visionTitle: 'Construir Conexões que Geram Capacidade.',
      visionP1: 'Acreditamos que grandes projetos não dependem de uma única empresa.',
      visionP2: 'Eles dependem da capacidade de conectar pessoas, conhecimento, tecnologia, infraestrutura e execução.',
      visionP3: 'É essa conexão que orienta a Greenverse.',
      missionBadge: 'Nossa Missão',
      missionTitle: 'Integrar Capacidades para Resolver Problemas Complexos.',
      missionDesc: 'Desenvolver soluções eficientes, responsáveis e escaláveis, conectando diferentes competências para gerar valor aos nossos clientes e parceiros.',
      pillarsBadge: 'Fundamentos',
      pillarsTitle: 'Nossos',
      pillarsTitleHighlight: 'Pilares',
      pillarsSubtitle: 'Os princípios que guiam cada decisão, parceria e entrega no ecossistema Greenverse.',
      pillars: [
        { title: 'Estratégia', subtitle: 'Pensar antes de executar.' },
        { title: 'Especialização', subtitle: 'Mobilizar conhecimento técnico.' },
        { title: 'Integração', subtitle: 'Conectar diferentes competências.' },
        { title: 'Governança', subtitle: 'Controlar riscos e garantir conformidade.' },
        { title: 'Execução', subtitle: 'Transformar planejamento em resultado.' },
        { title: 'Escala', subtitle: 'Construir estruturas capazes de crescer.' },
      ],
      integratedNetwork: {
        title: 'Rede Integrada de Soluções, Serviços e Empresas Homologadas',
        subtitle: 'Conectamos empresas, especialistas e tecnologia para entregar soluções completas em diferentes mercados.',
        p1: 'A GREENVERSE atua como uma plataforma de integração empresarial, conectando clientes a empresas, especialistas, fornecedores e tecnologias homologadas para atender demandas de diferentes níveis de complexidade.',
        p2Lead: 'Nossa atuação combina ',
        p2Highlight: 'gestão, engenharia, tecnologia, infraestrutura, meio ambiente, facilities, logística, manutenção, serviços especializados e soluções empresariais',
        p2Tail: ', formando uma rede capaz de estruturar e executar projetos integrados.',
        p3: 'A GREENVERSE pode atuar diretamente na execução de determinados serviços e, quando necessário, integrar empresas e especialistas homologados de acordo com a natureza, região, escala e exigência técnica de cada projeto.',
        interfaceTitle: 'Uma única interface para múltiplas necessidades empresariais.',
        processLead: 'A partir da demanda do cliente, a GREENVERSE:',
        steps: [
          'identifica a necessidade;',
          'analisa o escopo;',
          'estrutura a solução;',
          'seleciona empresas e especialistas homologados;',
          'coordena fornecedores e equipes;',
          'acompanha a execução;',
          'controla documentação, qualidade e conformidade;',
          'realiza medições e acompanhamento;',
          'consolida informações;',
          'entrega indicadores e resultados.',
        ],
      },
    },
    servicesSection: {
      badge: 'Soluções Integradas',
      title: 'Nossos',
      titleHighlight: 'Serviços Especializados',
      lead: 'Oferecemos soluções completas ponta a ponta com rigor técnico, conformidade legal e governança corporativa.',
      exploreBtn: 'Ver Detalhes do Serviço',
    },
    sectorsSection: {
      badge: 'Mercados de Atuação',
      title: 'Setores',
      titleHighlight: 'Atendidos',
      lead: 'Desenvolvemos soluções personalizadas para atender às exigências regulatórias e operacionais de cada indústria.',
      seeScopeBtn: 'Conhecer Escopo',
    },
    differentialsSection: {
      badge: 'Por Que a Greenverse',
      title: 'Nossos',
      titleHighlight: 'Diferenciais',
      lead: 'Combinamos inteligência técnica, visão de negócios e agilidade operacional para entregar soluções sustentáveis de alto impacto.',
    },
    mercosulSection: {
      badge: 'Plataforma Regional',
      title: 'Greenverse',
      titleHighlight: 'Mercosul',
      subtitle: 'Conectando empresas e oportunidades entre diferentes mercados.',
      lead: 'A Greenverse está estruturando uma plataforma de atuação integrada no Mercosul para apoiar empresas que desejam entrar, expandir ou desenvolver operações na região.',
      strategicMarkets: 'Mercados Estratégicos',
      countries: {
        brazil: 'Brasil',
        paraguay: 'Paraguai',
        argentina: 'Argentina',
        uruguay: 'Uruguai',
        chile: 'Chile',
        bolivia: 'Bolívia',
      },
      whatWeDoTitle: 'O Que Fazemos',
      whatWeDoItems: [
        { title: 'Entrada em novos mercados', desc: 'Apoiamos empresas na estruturação de operações e desenvolvimento de projetos.' },
        { title: 'Infraestrutura', desc: 'Identificação e estruturação de soluções para instalações, galpões, centros logísticos e ativos empresariais.' },
        { title: 'Logística', desc: 'Integração de rotas, operações, armazenagem e infraestrutura.' },
        { title: 'Parceiros locais', desc: 'Conectamos empresas a especialistas e operadores locais.' },
        { title: 'Engenharia', desc: 'Mobilizamos competências técnicas para projetos de diferentes dimensões.' },
        { title: 'Operação', desc: 'Apoiamos a implantação e continuidade das operações.' },
      ],
      corridorBadge: 'Corredor Estratégico',
      corridorTitle: 'BRASIL → PARAGUAI → ARGENTINA → URUGUAI',
      corridorDesc: 'A Greenverse busca participar da construção de novas conexões logísticas e empresariais dentro da América do Sul.',
      equation: {
        infra: 'Infraestrutura',
        logistics: 'Logística',
        industry: 'Indústria',
        commerce: 'Comércio',
        mercosul: 'Mercosul',
      },
    },
    networkSection: {
      badge: 'Rede Homologada',
      title: 'Uma Rede Construída para',
      titleHighlight: 'Ampliar Nossa Capacidade',
      lead: 'A Greenverse trabalha com uma rede de empresas e especialistas homologados.',
      criteriaTitle: 'A seleção considera:',
      criteriaItems: [
        'Capacidade técnica',
        'Experiência',
        'Documentação',
        'Conformidade',
        'Segurança',
        'Capacidade operacional',
        'Histórico de atuação',
      ],
      specializationTitle: 'Áreas de Especialização',
      specializationAreas: [
        'Engenharia',
        'Construção',
        'Elétrica',
        'Ambiental',
        'Estruturas',
        'Caldeiras',
        'Equipamentos',
        'Andaimes',
        'Segurança',
        'Tecnologia',
        'Logística',
        'Manutenção',
      ],
      forClientsTitle: 'Para Nossos Clientes',
      forClientsItems: [
        { title: 'Uma única estrutura de relacionamento.', desc: 'Centralização estratégica de atendimento, gestão e governança de ponta a ponta.' },
        { title: 'Múltiplas capacidades técnicas.', desc: 'Acesso direto a especialistas multidisciplinares em todas as frentes operacionais.' },
      ],
      forClientsConclusion: 'Isso reduz a necessidade de coordenar diversos fornecedores independentes e permite construir soluções integradas.',
      ctaButton: 'Falar com Nosso Time',
      detailed: {
        intro: 'A GREENVERSE está estruturando uma rede de empresas especializadas, fornecedores e profissionais homologados.',
        criteriaIntro: 'A homologação considera, conforme a natureza da atividade:',
        criteriaList: [
          'documentação empresarial;',
          'regularidade fiscal;',
          'capacidade técnica;',
          'registros profissionais;',
          'certificações;',
          'licenças;',
          'experiência;',
          'referências;',
          'capacidade operacional;',
          'equipamentos;',
          'equipe técnica;',
          'segurança do trabalho;',
          'seguros;',
          'compliance;',
          'critérios ambientais;',
          'critérios de qualidade;',
          'capacidade de atendimento;',
          'região de atuação;',
          'histórico de desempenho.',
        ],
        conclusion: 'A rede permite selecionar parceiros de acordo com o perfil de cada projeto, evitando soluções padronizadas para problemas que exigem conhecimento especializado.',
      },
    },
    contactSection: {
      title: 'Pronto para regularizar seu negócio?',
      subtitle: 'Preencha o formulário e receba um diagnóstico técnico preliminar sem custos.',
      addressLabel: 'Rua Caetano Silveira de Matos nº 2455, sala 02, Centro Palhoça/SC, CEP 88130-005',
      testimonial: '"A Greenverse foi fundamental para a expansão da nossa planta industrial em tempo recorde."',
      testimonialAuthor: '— Diretor de Operações, Indústria Metalúrgica',
      form: {
        name: 'Nome Completo',
        namePlaceholder: 'Seu nome',
        email: 'E-mail Corporativo',
        emailPlaceholder: 'email@empresa.com.br',
        service: 'Serviço de Interesse',
        servicePlaceholder: 'Selecione o serviço',
        state: 'Estado (UF)',
        statePlaceholder: 'Selecione o estado',
        city: 'Cidade',
        cityPlaceholder: 'Informe sua cidade',
        message: 'Descreva resumidamente sua necessidade',
        messagePlaceholder: 'Ex: Preciso de licenciamento para nova filial...',
        submitBtn: 'Solicitar Proposta Agora',
        sending: 'Enviando proposta...',
        successToastTitle: 'Solicitação enviada com sucesso!',
        successToastDesc: 'Nossa equipe técnica entrará em contato em até 24 horas.',
        privacyNotice: 'Ao enviar, você concorda com nossa Política de Privacidade e tratamento de dados conforme a LGPD.',
      },
    },
    footer: {
      tagline: 'Sua parceira estratégica em conformidade ambiental e sustentabilidade corporativa. Transformamos desafios regulatórios em vantagens competitivas.',
      servicesTitle: 'Serviços',
      contactTitle: 'Contato',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Receba atualizações sobre legislação ambiental e mercado.',
      newsletterPlaceholder: 'Seu e-mail',
      rights: '© 2026 Greenverse. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
    },
    langNames: {
      pt: 'Português',
      es: 'Español',
      en: 'English',
    },
  },

  es: {
    nav: {
      ecosystem: 'El Ecosistema',
      services: 'Servicios',
      sectors: 'Sectores',
      differentials: 'Diferenciales',
      mercosul: 'Mercosur',
      approvedNetwork: 'Red Homologada',
      blog: 'Blog',
      clientArea: 'Área de Clientes',
    },
    banner: {
      alert: 'Alerta: Nuevas directrices de CONAMA y normativas publicadas.',
      learnMore: 'Conozca más',
    },
    hero: {
      badge: 'Líder en Gestión Ambiental y ESG Corporativo',
      titleStart: 'Soluciones Integradas en',
      titleHighlight: 'Ingeniería y Sostenibilidad',
      subtitle: 'Estructuramos proyectos completos de infraestructura, gestión de residuos, cumplimiento ambiental y gobernanza corporativa en todo Brasil y Mercosur.',
      ctaPrimary: 'Solicitar Diagnóstico',
      ctaSecondary: 'Conocer Servicios',
      metrics: {
        projects: '+450',
        projectsLabel: 'Proyectos Concluidos',
        retention: '99.4%',
        retentionLabel: 'Cumplimiento Legal',
        savings: 'US$ 3.5M+',
        savingsLabel: 'Ahorro Generado a Clientes',
        compliance: '100%',
        complianceLabel: 'Auditoría Rigurosa',
      },
    },
    ecosystem: {
      badge: 'Ecosistema Empresarial',
      title: 'El Ecosistema',
      titleHighlight: 'Greenverse',
      lead: 'Greenverse es un ecosistema empresarial creado para conectar empresas, especialistas, tecnología y capital intelectual en la construcción de soluciones para diferentes mercados.',
      paragraph1: 'Nuestra actuación combina estrategia, ingeniería, infraestructura, operaciones, medio ambiente y logística, permitiendo estructurar proyectos de forma integrada.',
      positioningBadge: 'Nuestro Posicionamiento',
      positioningText: 'No somos sólo un proveedor.',
      positioningHighlight: 'Somos una estructura de integración y ejecución.',
      specialistsBadge: 'Especialistas Senior',
      structureBadge: 'Arquitectura Empresarial',
      structureTitle: 'Una Estructura Pensada Para',
      structureTitleHighlight: 'Crecer',
      structureLead: 'El ecosistema Greenverse está formado por diferentes empresas, unidades de negocio, especialistas y socios estratégicos. Cada estructura posee competencias específicas, mientras el ecosistema permite la integración entre ellas.',
      structureCards: {
        holding: { title: 'Greenverse Holding', desc: 'Estructura estratégica y patrimonial.' },
        brasil: { title: 'Greenverse Brasil', desc: 'Operaciones y desarrollo de negocios en Brasil.' },
        mercosul: { title: 'Greenverse Mercosur', desc: 'Estructura orientada a la expansión e integración de negocios en la región.' },
        infra: { title: 'Greenverse Infrastructure & Logistics', desc: 'Infraestructura, logística y desarrollo de activos.' },
        specialized: { title: 'Empresas Especializadas', desc: 'Operaciones técnicas y servicios específicos.' },
        approved: { title: 'Red Homologada', desc: 'Empresas y especialistas integrados al ecosistema.' },
      },
      visionBadge: 'Nuestra Visión',
      visionTitle: 'Construir Conexiones que Generan Capacidad.',
      visionP1: 'Creemos que los grandes proyectos no dependen de una sola empresa.',
      visionP2: 'Dependen de la capacidad de conectar personas, conocimiento, tecnología, infraestructura y ejecución.',
      visionP3: 'Es esa conexión la que guía a Greenverse.',
      missionBadge: 'Nuestra Misión',
      missionTitle: 'Integrar Capacidades para Resolver Problemas Complejos.',
      missionDesc: 'Desarrollar soluciones eficientes, responsables y escalables, conectando diferentes competencias para generar valor a nuestros clientes y socios.',
      pillarsBadge: 'Fundamentos',
      pillarsTitle: 'Nuestros',
      pillarsTitleHighlight: 'Pilares',
      pillarsSubtitle: 'Los principios que guían cada decisión, alianza y entrega en el ecosistema Greenverse.',
      pillars: [
        { title: 'Estrategia', subtitle: 'Pensar antes de ejecutar.' },
        { title: 'Especialización', subtitle: 'Movilizar conocimiento técnico.' },
        { title: 'Integración', subtitle: 'Conectar diferentes competencias.' },
        { title: 'Gobernanza', subtitle: 'Controlar riesgos y garantizar cumplimiento.' },
        { title: 'Ejecución', subtitle: 'Transformar planificación en resultado.' },
        { title: 'Escala', subtitle: 'Construir estructuras capaces de crecer.' },
      ],
      integratedNetwork: {
        title: 'Red Integrada de Soluciones, Servicios y Empresas Homologadas',
        subtitle: 'Conectamos empresas, especialistas y tecnología para entregar soluciones completas en diferentes mercados.',
        p1: 'GREENVERSE actúa como una plataforma de integración empresarial, conectando clientes a empresas, especialistas, proveedores y tecnologías homologadas para atender demandas de diferentes niveles de complejidad.',
        p2Lead: 'Nuestra actuación combina ',
        p2Highlight: 'gestión, ingeniería, tecnología, infraestructura, medio ambiente, facilities, logística, mantenimiento, servicios especializados y soluciones empresariales',
        p2Tail: ', formando una red capaz de estructurar y ejecutar proyectos integrados.',
        p3: 'GREENVERSE puede actuar directamente en la ejecución de determinados servicios y, cuando sea necesario, integrar empresas y especialistas homologados de acuerdo con la naturaleza, región, escala y exigencia técnica de cada proyecto.',
        interfaceTitle: 'Una única interfaz para múltiples necesidades empresariales.',
        processLead: 'A partir de la demanda del cliente, GREENVERSE:',
        steps: [
          'identifica la necesidad;',
          'analiza el alcance;',
          'estructura la solución;',
          'selecciona empresas y especialistas homologados;',
          'coordina proveedores y equipos;',
          'acompaña la ejecución;',
          'controla documentación, calidad y conformidad;',
          'realiza mediciones y seguimiento;',
          'consolida informaciones;',
          'entrega indicadores e resultados.',
        ],
      },
    },
    servicesSection: {
      badge: 'Soluciones Integradas',
      title: 'Nuestros',
      titleHighlight: 'Servicios Especializados',
      lead: 'Ofrecemos soluciones completas de extremo a extremo con rigor técnico, cumplimiento legal y gobernanza corporativa.',
      exploreBtn: 'Ver Detalles del Servicio',
    },
    sectorsSection: {
      badge: 'Mercados de Actuación',
      title: 'Sectores',
      titleHighlight: 'Atendidos',
      lead: 'Desarrollamos soluciones personalizadas para cumplir con las exigencias regulatorias y operativas de cada industria.',
      seeScopeBtn: 'Conocer Alcance',
    },
    differentialsSection: {
      badge: 'Por Qué Greenverse',
      title: 'Nuestros',
      titleHighlight: 'Diferenciales',
      lead: 'Combinamos inteligencia técnica, visión de negocios y agilidad operativa para entregar soluciones sostenibles de alto impacto.',
    },
    mercosulSection: {
      badge: 'Plataforma Regional',
      title: 'Greenverse',
      titleHighlight: 'Mercosur',
      subtitle: 'Conectando empresas y oportunidades entre diferentes mercados.',
      lead: 'Greenverse está estructurando una plataforma de actuación integrada en el Mercosur para apoyar a empresas que desean ingresar, expandirse o desarrollar operaciones en la región.',
      strategicMarkets: 'Mercados Estratégicos',
      countries: {
        brazil: 'Brasil',
        paraguay: 'Paraguay',
        argentina: 'Argentina',
        uruguay: 'Uruguay',
        chile: 'Chile',
        bolivia: 'Bolivia',
      },
      whatWeDoTitle: 'Qué Hacemos',
      whatWeDoItems: [
        { title: 'Entrada en nuevos mercados', desc: 'Apoyamos a empresas en la estructuración de operaciones y desarrollo de proyectos.' },
        { title: 'Infraestructura', desc: 'Identificación y estructuración de soluciones para instalaciones, naves industriales, centros logísticos y activos empresariales.' },
        { title: 'Logística', desc: 'Integración de rutas, operaciones, almacenamiento e infraestructura.' },
        { title: 'Socios locales', desc: 'Conectamos empresas a especialistas y operadores locales.' },
        { title: 'Ingeniería', desc: 'Movilizamos competencias técnicas para proyectos de diferentes dimensiones.' },
        { title: 'Operación', desc: 'Apoyamos la implantación y continuidad de las operaciones.' },
      ],
      corridorBadge: 'Corredor Estratégico',
      corridorTitle: 'BRASIL → PARAGUAY → ARGENTINA → URUGUAY',
      corridorDesc: 'Greenverse busca participar en la construcción de nuevas conexiones logísticas y empresariales dentro de América del Sur.',
      equation: {
        infra: 'Infraestructura',
        logistics: 'Logística',
        industry: 'Industria',
        commerce: 'Comercio',
        mercosul: 'Mercosur',
      },
    },
    networkSection: {
      badge: 'Red Homologada',
      title: 'Una Red Construida para',
      titleHighlight: 'Ampliar Nuestra Capacidad',
      lead: 'Greenverse trabaja con una red de empresas y especialistas homologados.',
      criteriaTitle: 'La selección considera:',
      criteriaItems: [
        'Capacidad técnica',
        'Experiencia',
        'Documentación',
        'Conformidad',
        'Seguridad',
        'Capacidad operativa',
        'Historial de actuación',
      ],
      specializationTitle: 'Áreas de Especialización',
      specializationAreas: [
        'Ingeniería',
        'Construcción',
        'Eléctrica',
        'Ambiental',
        'Estructuras',
        'Calderas',
        'Equipos',
        'Andamios',
        'Seguridad',
        'Tecnología',
        'Logística',
        'Mantenimiento',
      ],
      forClientsTitle: 'Para Nuestros Clientes',
      forClientsItems: [
        { title: 'Una única estructura de relación.', desc: 'Centralización estratégica de atención, gestión y gobernanza de punta a punta.' },
        { title: 'Múltiples capacidades técnicas.', desc: 'Acceso directo a especialistas multidisciplinarios en todos los frentes operativos.' },
      ],
      forClientsConclusion: 'Esto reduce la necesidad de coordinar diversos proveedores independientes y permite construir soluciones integradas.',
      ctaButton: 'Hablar con Nuestro Equipo',
      detailed: {
        intro: 'GREENVERSE está estructurando una red de empresas especializadas, proveedores y profesionales homologados.',
        criteriaIntro: 'La homologación considera, según la naturaleza de la actividad:',
        criteriaList: [
          'documentación empresarial;',
          'regularidad fiscal;',
          'capacidad técnica;',
          'registros profesionales;',
          'certificaciones;',
          'licencias;',
          'experiencia;',
          'referencias;',
          'capacidad operativa;',
          'equipamiento;',
          'equipo técnico;',
          'seguridad laboral;',
          'seguros;',
          'compliance;',
          'criterios ambientales;',
          'criterios de calidad;',
          'capacidad de atención;',
          'región de actuación;',
          'historial de desempeño.',
        ],
        conclusion: 'La red permite seleccionar socios de acuerdo con el perfil de cada proyecto, evitando soluciones estandarizadas para problemas que exigen conocimiento especializado.',
      },
    },
    contactSection: {
      title: '¿Listo para regularizar su negocio?',
      subtitle: 'Complete el formulario y reciba un diagnóstico técnico preliminar sin costo.',
      addressLabel: 'Rua Caetano Silveira de Matos nº 2455, sala 02, Centro Palhoça/SC, Brasil - CEP 88130-005',
      testimonial: '"Greenverse fue fundamental para la expansión de nuestra planta industrial en tiempo récord."',
      testimonialAuthor: '— Director de Operaciones, Industria Metalúrgica',
      form: {
        name: 'Nombre Completo',
        namePlaceholder: 'Su nombre',
        email: 'Correo Corporativo',
        emailPlaceholder: 'correo@empresa.com',
        service: 'Servicio de Interés',
        servicePlaceholder: 'Seleccione el servicio',
        state: 'Estado / Provincia',
        statePlaceholder: 'Seleccione la región',
        city: 'Ciudad',
        cityPlaceholder: 'Indique su ciudad',
        message: 'Describa brevemente su requerimiento',
        messagePlaceholder: 'Ej: Necesito licenciamiento para una nueva sucursal...',
        submitBtn: 'Solicitar Propuesta Ahora',
        sending: 'Enviando propuesta...',
        successToastTitle: '¡Solicitud enviada con éxito!',
        successToastDesc: 'Nuestro equipo técnico se comunicará en un plazo de 24 horas.',
        privacyNotice: 'Al enviar, usted acepta nuestra Política de Privacidad y el tratamiento de datos según las normativas vigentes.',
      },
    },
    footer: {
      tagline: 'Su socio estratégico en cumplimiento ambiental y sostenibilidad corporativa. Transformamos desafíos regulatorios en ventajas competitivas.',
      servicesTitle: 'Servicios',
      contactTitle: 'Contacto',
      newsletterTitle: 'Boletín',
      newsletterDesc: 'Reciba actualizaciones sobre legislación ambiental y mercado.',
      newsletterPlaceholder: 'Su correo electrónico',
      rights: '© 2026 Greenverse. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
    },
    langNames: {
      pt: 'Português',
      es: 'Español',
      en: 'English',
    },
  },

  en: {
    nav: {
      ecosystem: 'The Ecosystem',
      services: 'Services',
      sectors: 'Sectors',
      differentials: 'Differentials',
      mercosul: 'Mercosur',
      approvedNetwork: 'Approved Network',
      blog: 'Blog',
      clientArea: 'Client Portal',
    },
    banner: {
      alert: 'Alert: New environmental standards and guidelines published.',
      learnMore: 'Learn more',
    },
    hero: {
      badge: 'Leader in Environmental Management & Corporate ESG',
      titleStart: 'Integrated Solutions in',
      titleHighlight: 'Engineering & Sustainability',
      subtitle: 'We structure end-to-end infrastructure projects, waste management, environmental compliance, and corporate governance across Brazil and Mercosur.',
      ctaPrimary: 'Request Diagnostic',
      ctaSecondary: 'Explore Services',
      metrics: {
        projects: '+450',
        projectsLabel: 'Projects Completed',
        retention: '99.4%',
        retentionLabel: 'Legal Compliance',
        savings: '$3.5M+',
        savingsLabel: 'Client Cost Savings',
        compliance: '100%',
        complianceLabel: 'Rigorous Audit',
      },
    },
    ecosystem: {
      badge: 'Business Ecosystem',
      title: 'The',
      titleHighlight: 'Greenverse Ecosystem',
      lead: 'Greenverse is a business ecosystem created to connect companies, specialists, technology, and intellectual capital to build solutions for different markets.',
      paragraph1: 'Our approach combines strategy, engineering, infrastructure, operations, environment, and logistics, enabling the seamless execution of integrated projects.',
      positioningBadge: 'Our Positioning',
      positioningText: 'We are not just a supplier.',
      positioningHighlight: 'We are an integration and execution framework.',
      specialistsBadge: 'Senior Specialists',
      structureBadge: 'Corporate Architecture',
      structureTitle: 'A Structure Built to',
      structureTitleHighlight: 'Grow',
      structureLead: 'The Greenverse ecosystem comprises different companies, business units, specialists, and strategic partners. Each structure possesses specific competencies, while the ecosystem ensures seamless integration.',
      structureCards: {
        holding: { title: 'Greenverse Holding', desc: 'Strategic and asset governance structure.' },
        brasil: { title: 'Greenverse Brazil', desc: 'Operations and business development in Brazil.' },
        mercosul: { title: 'Greenverse Mercosur', desc: 'Structure focused on regional expansion and business integration.' },
        infra: { title: 'Greenverse Infrastructure & Logistics', desc: 'Infrastructure, logistics, and asset development.' },
        specialized: { title: 'Specialized Companies', desc: 'Technical operations and specialized engineering services.' },
        approved: { title: 'Approved Network', desc: 'Vetted companies and specialists integrated into the ecosystem.' },
      },
      visionBadge: 'Our Vision',
      visionTitle: 'Building Connections That Generate Capability.',
      visionP1: 'We believe that major projects do not depend on a single company.',
      visionP2: 'They depend on the ability to connect people, knowledge, technology, infrastructure, and execution.',
      visionP3: 'It is this connection that drives Greenverse.',
      missionBadge: 'Our Mission',
      missionTitle: 'Integrating Capabilities to Solve Complex Problems.',
      missionDesc: 'To develop efficient, responsible, and scalable solutions by connecting diverse competencies to generate long-term value for our clients and partners.',
      pillarsBadge: 'Foundations',
      pillarsTitle: 'Our Core',
      pillarsTitleHighlight: 'Pillars',
      pillarsSubtitle: 'The guiding principles behind every decision, partnership, and delivery across Greenverse.',
      pillars: [
        { title: 'Strategy', subtitle: 'Think before executing.' },
        { title: 'Specialization', subtitle: 'Mobilize technical expertise.' },
        { title: 'Integration', subtitle: 'Connect diverse competencies.' },
        { title: 'Governance', subtitle: 'Control risks and ensure compliance.' },
        { title: 'Execution', subtitle: 'Turn planning into measurable results.' },
        { title: 'Scale', subtitle: 'Build structures capable of growing.' },
      ],
      integratedNetwork: {
        title: 'Integrated Network of Solutions, Services, and Approved Companies',
        subtitle: 'We connect companies, specialists, and technology to deliver comprehensive solutions across diverse markets.',
        p1: 'GREENVERSE acts as an enterprise integration platform, connecting clients with approved companies, specialists, suppliers, and technologies to meet demands across various levels of complexity.',
        p2Lead: 'Our approach combines ',
        p2Highlight: 'management, engineering, technology, infrastructure, environment, facilities, logistics, maintenance, specialized services, and corporate solutions',
        p2Tail: ', creating a robust network capable of structuring and executing integrated projects.',
        p3: 'GREENVERSE can act directly in executing specific services and, when necessary, integrate approved companies and specialists tailored to the nature, region, scale, and technical requirements of each project.',
        interfaceTitle: 'A single interface for multiple enterprise needs.',
        processLead: 'Based on the client’s demand, GREENVERSE:',
        steps: [
          'identifies the necessity;',
          'analyzes the project scope;',
          'structures the solution;',
          'selects approved companies and specialists;',
          'coordinates suppliers and teams;',
          'monitors execution;',
          'controls documentation, quality, and compliance;',
          'conducts measurements and ongoing monitoring;',
          'consolidates operational intelligence;',
          'delivers metrics and actionable results.',
        ],
      },
    },
    servicesSection: {
      badge: 'Integrated Solutions',
      title: 'Our',
      titleHighlight: 'Specialized Services',
      lead: 'We provide comprehensive end-to-end solutions with technical rigor, legal compliance, and corporate governance.',
      exploreBtn: 'View Service Details',
    },
    sectorsSection: {
      badge: 'Industries Served',
      title: 'Target',
      titleHighlight: 'Sectors',
      lead: 'We design tailored solutions to meet the specific operational and regulatory demands of each industry.',
      seeScopeBtn: 'Explore Scope',
    },
    differentialsSection: {
      badge: 'Why Greenverse',
      title: 'Our Key',
      titleHighlight: 'Differentials',
      lead: 'We combine technical intelligence, business acumen, and operational agility to deliver high-impact sustainable solutions.',
    },
    mercosulSection: {
      badge: 'Regional Platform',
      title: 'Greenverse',
      titleHighlight: 'Mercosur',
      subtitle: 'Connecting companies and opportunities across diverse markets.',
      lead: 'Greenverse is structuring an integrated platform across Mercosur to support companies looking to enter, expand, or develop operations in the region.',
      strategicMarkets: 'Strategic Markets',
      countries: {
        brazil: 'Brazil',
        paraguay: 'Paraguay',
        argentina: 'Argentina',
        uruguay: 'Uruguay',
        chile: 'Chile',
        bolivia: 'Bolivia',
      },
      whatWeDoTitle: 'What We Do',
      whatWeDoItems: [
        { title: 'Market Entry', desc: 'We support companies in structuring operations and executing cross-border projects.' },
        { title: 'Infrastructure', desc: 'Identification and structuring of facilities, warehouses, logistics hubs, and commercial assets.' },
        { title: 'Logistics', desc: 'Integration of transportation routes, operations, warehousing, and infrastructure.' },
        { title: 'Local Partners', desc: 'We connect companies with local specialists and certified operators.' },
        { title: 'Engineering', desc: 'Mobilizing technical capabilities for projects of varying scale and complexity.' },
        { title: 'Operations', desc: 'Supporting the rollout, maintenance, and continuity of day-to-day operations.' },
      ],
      corridorBadge: 'Strategic Corridor',
      corridorTitle: 'BRAZIL → PARAGUAY → ARGENTINA → URUGUAY',
      corridorDesc: 'Greenverse actively participates in building new logistics and corporate connections across South America.',
      equation: {
        infra: 'Infrastructure',
        logistics: 'Logistics',
        industry: 'Industry',
        commerce: 'Commerce',
        mercosul: 'Mercosur',
      },
    },
    networkSection: {
      badge: 'Approved Network',
      title: 'A Network Built to',
      titleHighlight: 'Expand Our Capabilities',
      lead: 'Greenverse works with a certified network of vetted companies and specialists.',
      criteriaTitle: 'Selection criteria includes:',
      criteriaItems: [
        'Technical capability',
        'Proven experience',
        'Compliance documentation',
        'Regulatory alignment',
        'Operational safety',
        'Delivery capacity',
        'Track record of execution',
      ],
      specializationTitle: 'Areas of Specialization',
      specializationAreas: [
        'Engineering',
        'Construction',
        'Electrical',
        'Environmental',
        'Structures',
        'Boilers',
        'Heavy Equipment',
        'Scaffolding',
        'Safety & HSE',
        'Technology',
        'Logistics',
        'Maintenance',
      ],
      forClientsTitle: 'For Our Clients',
      forClientsItems: [
        { title: 'A single point of contact.', desc: 'Strategic centralization of client management, governance, and end-to-end execution.' },
        { title: 'Multiple technical capabilities.', desc: 'Direct access to multidisciplinary specialists across all operational fronts.' },
      ],
      forClientsConclusion: 'This eliminates the friction of managing fragmented vendors and enables truly integrated turnkey solutions.',
      ctaButton: 'Contact Our Team',
      detailed: {
        intro: 'GREENVERSE is structuring a network of approved specialized companies, suppliers, and professionals.',
        criteriaIntro: 'Approval evaluation considers, according to the nature of the activity:',
        criteriaList: [
          'corporate documentation;',
          'tax & fiscal regularity;',
          'technical capability;',
          'professional registrations;',
          'certifications;',
          'operating licenses;',
          'proven experience;',
          'client references;',
          'operational capacity;',
          'machinery & equipment;',
          'technical staff;',
          'occupational safety;',
          'insurance coverage;',
          'compliance;',
          'environmental criteria;',
          'quality criteria;',
          'service responsiveness;',
          'geographical coverage;',
          'performance track record.',
        ],
        conclusion: 'The network allows selecting partners aligned with the precise profile of each project, avoiding one-size-fits-all approaches for challenges requiring specialized expertise.',
      },
    },
    contactSection: {
      title: 'Ready to regularize your operations?',
      subtitle: 'Fill out the form below to receive a free preliminary technical diagnostic.',
      addressLabel: 'Rua Caetano Silveira de Matos nº 2455, suite 02, Centro Palhoça/SC, Brazil - ZIP 88130-005',
      testimonial: '"Greenverse was instrumental in expanding our industrial plant in record time with full compliance."',
      testimonialAuthor: '— Director of Operations, Metallurgy Industry',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Corporate Email',
        emailPlaceholder: 'name@company.com',
        service: 'Service of Interest',
        servicePlaceholder: 'Select service',
        state: 'State / Region',
        statePlaceholder: 'Select region',
        city: 'City',
        cityPlaceholder: 'Enter city',
        message: 'Briefly describe your project or need',
        messagePlaceholder: 'E.g., I need environmental licensing for a new facility...',
        submitBtn: 'Request Proposal Now',
        sending: 'Submitting request...',
        successToastTitle: 'Request sent successfully!',
        successToastDesc: 'Our technical engineering team will reach out within 24 hours.',
        privacyNotice: 'By submitting, you agree to our Privacy Policy and data processing terms.',
      },
    },
    footer: {
      tagline: 'Your strategic partner in environmental compliance and corporate sustainability. We transform regulatory challenges into competitive advantages.',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Subscribe to receive updates on environmental regulations and industry insights.',
      newsletterPlaceholder: 'Your email address',
      rights: '© 2026 Greenverse. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    langNames: {
      pt: 'Português',
      es: 'Español',
      en: 'English',
    },
  },
};
