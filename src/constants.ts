import { ShieldCheck, Leaf, Recycle, Droplets, FileText, BarChart3, Factory, Tractor, Building2, Sparkles, Bug, Sprout, Truck, Shield, HardHat } from 'lucide-react';

export const SERVICES = [
  {
    id: 'licenciamento',
    title: 'Gestão Ambiental e Soluções ESG',
    description: 'Consultoria estratégica para conformidade normativa e implementação de práticas ESG de alto impacto.',
    icon: ShieldCheck,
    details: [
      {
        category: '1. GESTÃO E REGULARIZAÇÃO AMBIENTAL',
        items: [
          'Licenciamento ambiental (LP, LI, LO)', 'Renovação de licenças', 'Outorgas de uso de água', 'Cadastro Técnico Federal (CTF/IBAMA)',
          'Cadastro Ambiental Rural (CAR)', 'Relatórios ambientais obrigatórios', 'Atendimento a órgãos: IBAMA, IAP, CONAMA'
        ]
      },
      {
        category: '2. ESTUDOS E LAUDOS TÉCNICOS',
        items: [
          'EIA/RIMA (Estudo de Impacto Ambiental)', 'PCA (Plano de Controle Ambiental)', 'PGRS (Plano de Gerenciamento de Resíduos Sólidos)',
          'PRAD (Plano de Recuperação de Áreas Degradadas)', 'Inventário de emissões (GEE)', 'Relatório ESG corporativo', 'Due diligence ambiental'
        ]
      },
      {
        category: '3. SUSTENTABILIDADE E ESG',
        items: [
          'Implantação de políticas ESG', 'Inventário de carbono (GEE Protocol)', 'Certificações ambientais (ISO 14001)',
          'Programas de sustentabilidade corporativa', 'Relatórios de sustentabilidade', 'Economia circular'
        ]
      },
      {
        category: '4. AUDITORIA E COMPLIANCE',
        items: [
          'Auditorias ambientais', 'Auditorias ESG', 'Programas de compliance ambiental', 'Antifraude ambiental',
          'Gestão de riscos ambientais', 'Adequação à legislação ambiental brasileira'
        ]
      },
      {
        category: '5. RECUPERAÇÃO E MONITORAMENTO',
        items: [
          'Recuperação de áreas degradadas', 'Reflorestamento técnico', 'Monitoramento de fauna e flora',
          'Controle de erosão', 'Contenção de encostas', 'Monitoramento de qualidade do ar, solo e água'
        ]
      },
      {
        category: '6. SERVIÇOS ESTRATÉGICOS DIFERENCIADOS',
        items: [
          'Diagnóstico Ambiental Inteligente (Varredura de riscos)', 'Sensores ambientais IoT', 'Monitoramento remoto e Dashboards',
          'Terceirização completa do setor ambiental', 'Gestão ambiental de obras (NR-18)'
        ]
      },
      {
        category: '7. CAPTAÇÃO E APROVEITAMENTO DE ÁGUA DA CHUVA',
        items: [
          'Dimensionamento de sistemas pluviais (NBR 15527)', 'Tratamento de água (Filtração, UV, Cloração, Ozônio)',
          'Uso em descargas, lavagem e irrigação', 'Reuso industrial e em torres de resfriamento',
          'Automação e monitoramento remoto (IoT)', 'Gestão Inteligente de Recursos Hídricos'
        ]
      }
    ]
  },
  {
    id: 'residuos',
    title: 'Gestão de Resíduos',
    description: 'Planos de Gerenciamento de Resíduos Sólidos (PGRS) e soluções para logística reversa.',
    icon: Recycle,
    details: [
      {
        category: '1. COLETA E GERENCIAMENTO',
        items: [
          'Coleta de resíduos industriais, urbanos e hospitalares (RSS)', 'Coleta de resíduos perigosos (Classe I)',
          'PGRS completo', 'Segregação e classificação (NBR 10004)', 'Transporte licenciado e rastreabilidade total'
        ]
      },
      {
        category: '2. TRATAMENTO E DESTINAÇÃO',
        items: [
          'Incineração e autoclavagem', 'Coprocessamento e compostagem', 'Reciclagem e economia circular',
          'Tratamento de efluentes industriais', 'Reuso de água e estações ETE/ETA'
        ]
      },
      {
        category: '3. DOCUMENTAÇÃO E CONFORMIDADE',
        items: [
          'MTR (Manifesto de Transporte)', 'CADRI e inventário de resíduos', 'Certificados de destinação final',
          'Créditos de reciclagem e valorização de resíduos'
        ]
      }
    ]
  },
  {
    id: 'outorgas',
    title: 'Outorgas de Água',
    description: 'Regularização do uso de recursos hídricos para captação superficial e subterrânea.',
    icon: Droplets,
  },
  {
    id: 'projetos',
    title: 'EIA/RIMA e Projetos',
    description: 'Estudos de Impacto Ambiental e Relatórios de Impacto ao Meio Ambiente com rigor técnico.',
    icon: FileText,
  },
  {
    id: 'construcao',
    title: 'Construção Civil',
    description: 'Suporte especializado em conformidade e gestão ambiental para canteiros de obras e empreendimentos.',
    icon: HardHat,
    details: [
      {
        category: '1. PROJETOS E ENGENHARIA',
        items: [
          'Projetos arquitetônicos', 'Projetos estruturais (concreto, metálica, madeira)', 'Projetos elétricos (baixa, média e alta tensão)',
          'Projetos hidrossanitários', 'Projetos de drenagem pluvial', 'Projetos de terraplenagem', 'Projetos de fundações',
          'Projetos de contenção (muros de arrimo, cortinas)', 'Projetos de prevenção e combate a incêndio (PPCI)', 'Projetos de SPDA (para-raios)',
          'Projetos de climatização (HVAC)', 'Projetos de gás (GLP/GN)', 'Projetos de automação predial', 'Projetos de telecomunicações e lógica',
          'Projetos de acessibilidade (NBR 9050)', 'Modelagem BIM (Building Information Modeling)', 'Compatibilização de projetos', 'Regularização e aprovação em órgãos públicos'
        ]
      },
      {
        category: '2. FUNDAÇÕES E INFRAESTRUTURA',
        items: [
          'Sondagem de solo (SPT, CPT)', 'Estaqueamento (hélice contínua, Strauss, pré-moldada)', 'Tubulões', 'Radier', 'Sapatas isoladas e corridas',
          'Blocos de fundação', 'Execução de baldrames', 'Impermeabilização de fundações', 'Reforço de fundações'
        ]
      },
      {
        category: '3. TERRAPLENAGEM E MOVIMENTO DE TERRA',
        items: [
          'Limpeza de terreno', 'Supressão vegetal', 'Escavações', 'Aterros e compactação', 'Nivelamento e regularização',
          'Corte e transporte de solo', 'Estabilização de solo', 'Drenagem superficial e profunda', 'Execução de taludes'
        ]
      },
      {
        category: '4. ESTRUTURA',
        items: [
          'Estrutura em concreto armado', 'Estrutura metálica', 'Estrutura pré-moldada', 'Estrutura em madeira',
          'Lajes (maciças, nervuradas, protendidas)', 'Pilares, vigas e fundações', 'Protensão', 'Recuperação estrutural'
        ]
      },
      {
        category: '5. ALVENARIA E VEDAÇÕES',
        items: [
          'Alvenaria estrutural', 'Alvenaria de vedação', 'Drywall (gesso acartonado)', 'Divisórias modulares',
          'Painéis pré-fabricados', 'Tijolos cerâmicos, blocos de concreto, AAC'
        ]
      },
      {
        category: '6. COBERTURA E TELHADOS',
        items: [
          'Estrutura de telhado (madeira/metálica)', 'Instalação de telhas (cerâmica, metálica, fibrocimento, sanduíche)',
          'Calhas e rufos', 'Isolamento térmico e acústico', 'Impermeabilização de cobertura', 'Telhado verde'
        ]
      },
      {
        category: '7. INSTALAÇÕES ELÉTRICAS',
        items: [
          'Instalações residenciais, comerciais e industriais', 'Entrada de energia', 'Subestações', 'Quadros de distribuição',
          'Cabeamento elétrico', 'Iluminação interna e externa', 'Sistemas de aterramento', 'SPDA (para-raios)', 'Automação elétrica'
        ]
      },
      {
        category: '8. INSTALAÇÕES HIDRÁULICAS E SANITÁRIAS',
        items: [
          'Água fria e quente', 'Esgoto sanitário', 'Drenagem pluvial', 'Reuso de água', 'Sistemas de bombeamento',
          'Instalação de caixas d’água e reservatórios', 'Estações de tratamento (ETE/ETA)'
        ]
      },
      {
        category: '9. INSTALAÇÕES DE GÁS',
        items: [ 'Rede de gás GLP/GN', 'Centrais de gás', 'Tubulações e reguladores', 'Testes de estanqueidade' ]
      },
      {
        category: '10. CLIMATIZAÇÃO E VENTILAÇÃO',
        items: [ 'Ar-condicionado (split, VRF, central)', 'Ventilação mecânica', 'Exaustão industrial', 'Pressurização de escadas', 'Qualidade do ar interno' ]
      },
      {
        category: '11. ACABAMENTOS',
        items: [
          'Reboco e emboço', 'Gesso liso e decorativo', 'Pintura interna e externa', 'Texturas e revestimentos especiais',
          'Pisos (cerâmica, porcelanato, madeira, vinílico, epóxi)', 'Revestimentos de paredes', 'Forros (gesso, PVC, mineral)',
          'Rodapés e acabamentos finais'
        ]
      },
      {
        category: '12. ESQUADRIAS E VIDROS',
        items: [ 'Portas e janelas', 'Esquadrias de alumínio, PVC e madeira', 'Vidros temperados e laminados', 'Fachadas glazing' ]
      },
      {
        category: '13. URBANIZAÇÃO E OBRAS EXTERNAS',
        items: [
          'Pavimentação (asfalto, paver, concreto)', 'Calçadas e acessos', 'Meio-fio e sarjetas', 'Paisagismo', 'Iluminação pública',
          'Redes externas (água, esgoto, energia)', 'Muros e cercamentos'
        ]
      },
      {
        category: '14. OBRAS INDUSTRIAIS E ESPECIAIS',
        items: [
          'Galpões industriais', 'Plantas industriais', 'Bases para equipamentos', 'Obras de infraestrutura pesada',
          'Obras de saneamento', 'Barragens e contenções', 'Obras portuárias'
        ]
      },
      {
        category: '15. REFORMAS E MANUTENÇÃO',
        items: [
          'Reformas gerais', 'Retrofit', 'Manutenção preventiva', 'Manutenção corretiva', 'Manutenção predial',
          'Reforço estrutural', 'Recuperação de fachadas'
        ]
      },
      {
        category: '16. SERVIÇOS TÉCNICOS E ESPECIALIZADOS',
        items: [
          'Perícias técnicas', 'Laudos de engenharia', 'Vistorias técnicas', 'Avaliações imobiliárias', 'Inspeções prediais',
          'Diagnóstico estrutural', 'Ensaios tecnológicos (concreto, solo)', 'Controle de qualidade'
        ]
      },
      {
        category: '17. GESTÃO E CONSULTORIA',
        items: [
          'Gerenciamento de obras', 'Planejamento e cronograma (PERT/CPM)', 'Orçamentação', 'Controle de custos',
          'Gestão de contratos', 'Gestão de riscos', 'Compliance e governança', 'Licitações'
        ]
      },
      {
        category: '18. SEGURANÇA DO TRABALHO (NRs)',
        items: [
          'NR-01 (Gestão de riscos)', 'NR-10 (Instalações elétricas)', 'NR-12 (Máquinas e equipamentos)', 'NR-18 (Construção civil)',
          'NR-35 (Trabalho em altura)', 'Programas: PGR, PCMSO, LTCAT', 'Treinamentos e capacitações'
        ]
      },
      {
        category: '19. SUSTENTABILIDADE E ESG',
        items: [
          'Gestão de resíduos (PGRCC)', 'Licenciamento ambiental', 'Auditorias ESG', 'Construção sustentável',
          'Certificações (LEED, AQUA)', 'Eficiência energética', 'Energia solar'
        ]
      },
      {
        category: '20. TECNOLOGIA E INOVAÇÃO',
        items: [
          'BIM e digital twin', 'Drones para inspeção', 'IoT em obras', 'Automação e smart buildings', 'Monitoramento remoto', 'Sistemas de gestão integrada'
        ]
      }
    ]
  },
  {
    id: 'limpeza',
    title: 'Limpeza e Conservação',
    description: 'Serviços especializados de manutenção e conservação de ambientes corporativos e industriais.',
    icon: Sparkles,
  },
  {
    id: 'compliance',
    title: 'Compliance e Governança',
    description: 'Estruturação de programas de integridade e governança para garantir segurança institucional.',
    icon: Shield,
  },
  {
    id: 'facilities',
    title: 'Facilities e Operações',
    description: 'Gestão integrada de serviços e infraestrutura para otimizar o ambiente corporativo e industrial.',
    icon: Building2,
  },
  {
    id: 'pragas',
    title: 'Controle de Pragas',
    description: 'Monitoramento e controle integrado de pragas com foco em segurança e saúde ambiental.',
    icon: Bug,
    details: [
      {
        category: '1. CONTROLE INTEGRADO (CIP)',
        items: [
          'Desinsetização, desratização e descupinização', 'Controle de baratas, formigas, moscas e mosquitos',
          'Controle de escorpiões, aranhas e pombos urbanos', 'Mapeamento de infestação e Plano de Manejo (PMI)'
        ]
      },
      {
        category: '2. CONTROLE TÉCNICO INDUSTRIAL',
        items: [
          'Controle em indústrias alimentícias e hospitais', 'Monitoramento com armadilhas inteligentes',
          'Controle biológico e térmico', 'Nebulização (ULV) e atomização'
        ]
      },
      {
        category: '3. NORMAS E SEGURANÇA',
        items: [
          'Adequação à ANVISA e auditorias sanitárias', 'Gestão de riscos (NR-01, NR-07)',
          'Relatórios técnicos com rastreabilidade total'
        ]
      }
    ]
  },
  {
    id: 'gestao-prad',
    title: 'Gestão Ambiental e PRAD',
    description: 'Programas de Recuperação de Áreas Degradadas e monitoramento ambiental contínuo.',
    icon: Sprout,
  },
  {
    id: 'logistica',
    title: 'Logística e Transporte',
    description: 'Soluções logísticas integradas e transporte seguro com foco em eficiência operacional.',
    icon: Truck,
    details: [
      {
        category: '1. GESTÃO E OPERAÇÕES LOGÍSTICAS',
        items: [
          'Gestão logística', 'Gestão de transportes', 'Logística integrada', 'Logística corporativa', 'Logística industrial',
          'Logística empresarial', 'Logística operacional', 'Logística sustentável', 'Logística reversa', 'Supply chain management',
          'Gestão da cadeia de suprimentos', 'Planejamento logístico', 'Coordenação logística', 'Operação logística',
          'Gestão de distribuição', 'Gestão de armazenagem', 'Gestão de estoque', 'Controle de inventário'
        ]
      },
      {
        category: '2. INFRAESTRUTURA E ARMAZENAGEM',
        items: [
          'Centro de distribuição (CD)', 'Operação de centros logísticos', 'Armazenagem industrial', 'Movimentação de materiais',
          'Gestão de cargas', 'Consolidação de cargas', 'Expedição de mercadorias', 'Recebimento de mercadorias',
          'Operação de armazéns', 'Gestão de docas', 'Gestão de pátios'
        ]
      },
      {
        category: '3. MODAIS DE TRANSPORTE',
        items: [
          'Transporte rodoviário', 'Transporte ferroviário', 'Transporte marítimo', 'Transporte aéreo',
          'Transporte intermodal', 'Transporte multimodal'
        ]
      },
      {
        category: '4. TRANSPORTES ESPECIAIS E CORPORATIVOS',
        items: [
          'Transporte corporativo', 'Transporte de resíduos', 'Transporte de cargas perigosas', 'Transporte de produtos químicos',
          'Transporte refrigerado', 'Transporte urbano de cargas', 'Transporte executivo', 'Mobilidade corporativa',
          'Gestão de viagens corporativas', 'Gestão de mobilidade urbana'
        ]
      },
      {
        category: '5. GESTÃO DE FROTAS',
        items: [
          'Gestão de frotas', 'Rastreamento de veículos', 'Monitoramento de frota', 'Telemetria veicular', 'Gestão de manutenção de frota',
          'Planejamento de rotas', 'Roteirização inteligente', 'Controle operacional de transportes', 'Torre de controle logística',
          'Gestão de motoristas', 'Gestão de abastecimento', 'Controle de combustível', 'Gestão de pneus', 'Eficiência energética em frotas'
        ]
      },
      {
        category: '6. COMPLIANCE E RISCOS',
        items: [
          'Gestão documental de transporte', 'Gestão de contratos logísticos', 'Gestão de fornecedores logísticos', 'Auditoria logística',
          'Compliance logístico', 'Compliance em transportes', 'Gestão de riscos logísticos', 'Gerenciamento de risco no transporte',
          'Segurança logística', 'Segurança de cargas', 'Controle de avarias', 'Gestão de ocorrências logísticas'
        ]
      },
      {
        category: '7. COMÉRCIO EXTERIOR E ESPECIALIZADO',
        items: [
          'Gestão aduaneira', 'Comércio exterior', 'Importação e exportação', 'Desembaraço aduaneiro', 'Logística portuária',
          'Logística aeroportuária', 'Logística ferroviária', 'Logística urbana', 'Last mile delivery', 'Cross docking',
          'Milk run', 'Fulfillment', 'E-commerce logistics', 'Logística hospitalar', 'Logística farmacêutica',
          'Logística para construção civil', 'Logística industrial integrada', 'Logística para agronegócio', 'Logística de resíduos', 'Logística de facilities'
        ]
      },
      {
        category: '8. ESTRATÉGIA E TECNOLOGIA',
        items: [
          'Gestão de ativos logísticos', 'Gestão de infraestrutura logística', 'Planejamento de demanda', 'S&OP (Sales and Operations Planning)',
          'KPI logísticos', 'BI logístico', 'Analytics logístico', 'Automação logística', 'Transformação digital logística',
          'IoT aplicado à logística', 'Inteligência artificial aplicada à logística', 'WMS (Warehouse Management System)',
          'TMS (Transportation Management System)', 'ERP logístico', 'RFID aplicado à logística', 'Gestão de cargas especiais',
          'Gestão de cargas excedentes', 'Gestão de cargas fracionadas', 'Gestão de encomendas corporativas', 'Planejamento estratégico logístico',
          'Eficiência logística', 'Redução de custos logísticos', 'Sustentabilidade logística', 'ESG aplicado à logística', 'Gestão de emissões no transporte'
        ]
      },
      {
        category: '9. CONSULTORIA E GESTÃO INTEGRADA',
        items: [
          'Planejamento de infraestrutura de transporte', 'Consultoria logística', 'Consultoria em transportes', 'Outsourcing logístico',
          'Operador logístico', 'Gestão integrada de operações logísticas', 'Continuidade operacional logística', 'Gestão de contingência logística',
          'Gestão de indicadores de performance logística', 'Desenvolvimento de soluções logísticas inteligentes'
        ]
      }
    ]
  },
  {
    id: 'seguranca',
    title: 'Segurança e Vigilância',
    description: 'Proteção patrimonial e vigilância especializada para garantir a integridade do seu negócio.',
    icon: Shield,
  },
];

export const SECTORS = [
  {
    id: 'industria',
    title: 'Indústria',
    description: 'Soluções para o setor fabril, focadas em continuidade operacional e redução de riscos.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'agro',
    title: 'Agronegócio',
    description: 'Regularização de propriedades rurais, CAR e gestão sustentável da produção.',
    icon: Tractor,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'imobiliario',
    title: 'Imobiliário',
    description: 'Licenciamento para loteamentos e construções civis com agilidade e segurança.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Foco em ESG + GEE + Compliance',
    description: 'Atuação técnica alinhada aos mais altos padrões de sustentabilidade e conformidade normativa.',
  },
  {
    title: 'Sistema Antifraude e Rastreabilidade',
    description: 'Controle total da operação com transparência e segurança jurídica em todos os processos.',
  },
  {
    title: 'Atendimento a Grandes Corporações',
    description: 'Expertise comprovada no atendimento a setores de energia, indústria de base e construção civil.',
  },
  {
    title: 'Linguagem Técnica de Engenharia',
    description: 'Relatórios e diagnósticos com rigor acadêmico e técnico, prontos para auditorias e certificações.',
  },
  {
    title: 'Padronização Legal e de Normas',
    description: 'Segurança total com atendimento rigoroso a todas as NRs, resoluções CONAMA e legislações locais.',
  },
  {
    title: 'Visão Estratégica e Inteligência',
    description: 'Transformação de dados operacionais em inteligência estratégica para o crescimento do seu negócio.',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Novas Resoluções do CONAMA para 2026',
    excerpt: 'Entenda como as mudanças na legislação podem impactar o licenciamento da sua indústria.',
    date: '05 Abr, 2026',
    category: 'Legislação',
  },
  {
    id: 2,
    title: 'Guia Prático: Gestão de Resíduos Perigosos',
    excerpt: 'Passo a passo para a correta destinação e armazenamento de resíduos classe I.',
    date: '02 Abr, 2026',
    category: 'Gestão',
  },
  {
    id: 3,
    title: 'A Importância da Outorga no Agronegócio',
    excerpt: 'Como garantir a segurança hídrica da sua produção em períodos de escassez.',
    date: '28 Mar, 2026',
    category: 'Recursos Hídricos',
  },
];

export const BRAZIL_STATES = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];
