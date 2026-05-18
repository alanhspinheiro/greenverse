import { ShieldCheck, Leaf, Recycle, Droplets, FileText, BarChart3, Factory, Tractor, Building2, Sparkles, Bug, Sprout, Truck, Shield, HardHat, Briefcase, Camera, Zap, Paintbrush, Wind, RefreshCcw, Mountain, Plane, Warehouse, Home, Users, Wrench, Construction } from 'lucide-react';

export const SERVICES = [
  {
    id: 'licenciamento',
    title: 'Gestão Ambiental e Soluções ESG',
    description: 'Consultoria estratégica para conformidade normativa e implementação de práticas ESG de alto impacto.',
    icon: ShieldCheck,
    details: [
      {
        category: '1. ESG (ENVIRONMENTAL, SOCIAL AND GOVERNANCE)',
        items: [
          '1.1 Estruturação ESG Corporativa:', 'Implantação de estratégia ESG corporativa', 'Diagnóstico de maturidade ESG', 
          'Definição de políticas ambientais, sociais e de governança', 'Integração ESG ao planejamento estratégico empresarial', 'Estruturação de comitês ESG',
          '1.2 Relatórios e Indicadores ESG:', 'Elaboração de relatórios ESG (padrões GRI, SASB, IFRS S1/S2)', 'Definição de KPIs ESG corporativos', 
          'Monitoramento de indicadores ambientais, sociais e de governança', 'Auditoria de performance ESG', 'Relatórios para investidores e stakeholders',
          '1.3 Gestão Ambiental ESG:', 'Gestão de resíduos sólidos e efluentes', 'Eficiência energética e hídrica', 
          'Controle de emissões atmosféricas', 'Licenciamento ambiental e conformidade legal', 'Programas de compensação ambiental',
          '1.4 Pilar Social (S do ESG):', 'Programas de responsabilidade social corporativa (RSC)', 'Saúde e segurança do trabalho (SST)', 
          'Inclusão social e diversidade', 'Relações comunitárias e impacto social', 'Programas de capacitação e desenvolvimento humano',
          '1.5 Pilar Governança (G do ESG):', 'Estruturação de conselhos administrativos e consultivos', 'Código de ética e conduta corporativa', 
          'Políticas anticorrupção e integridade', 'Transparência corporativa e prestação de contas', 'Gestão de riscos corporativos'
        ]
      },
      {
        category: '2. GOVERNANÇA CORPORATIVA',
        items: [
          '2.1 Estrutura de Governança:', 'Implementação de modelo de governança corporativa', 'Definição de estatutos sociais e regulamentos internos', 
          'Estruturação de holdings e subsidiárias', 'Organização societária e planejamento estratégico', 'Governança em empresas familiares e grandes grupos',
          '2.2 Gestão de Riscos:', 'Mapeamento de riscos corporativos (ERM – Enterprise Risk Management)', 'Gestão de riscos operacionais, financeiros e reputacionais', 
          'Planos de contingência e continuidade de negócios', 'Auditoria de riscos e controles internos', 'Monitoramento contínuo de riscos estratégicos',
          '2.3 Transparência e Controles:', 'Auditorias internas e externas', 'Compliance regulatório e normativo', 
          'Controles financeiros e contábeis', 'Gestão de conflitos de interesse', 'Relatórios de governança corporativa'
        ]
      },
      {
        category: '3. COMPLIANCE CORPORATIVO',
        items: [
          '3.1 Programas de Compliance:', 'Implantação de programa de integridade', 'Código de ética e conduta', 
          'Canal de denúncias e ouvidoria', 'Políticas anticorrupção (Lei Anticorrupção / FCPA / UK Bribery Act)', 'Treinamentos de compliance corporativo',
          '3.2 Compliance Regulatório:', 'Adequação a normas nacionais e internacionais', 'Conformidade com órgãos reguladores setoriais', 
          'Auditoria de contratos e operações', 'Due diligence de fornecedores e parceiros', 'Gestão de licenças e autorizações',
          '3.3 Compliance Contratual:', 'Revisão de contratos corporativos', 'Gestão de riscos contratuais', 
          'Padronização de cláusulas de integridade', 'Controle de obrigações contratuais', 'Monitoramento de execução contratual'
        ]
      },
      {
        category: '4. GEE (GASES DE EFEITO ESTUFA) E CARBONO',
        items: [
          '4.1 Inventário de Emissões:', 'Inventário de GEE (Escopos 1, 2 e 3)', 'Mapeamento de fontes emissoras', 
          'Quantificação de emissões de carbono equivalente (CO₂e)', 'Relatórios de emissões corporativas', 'Auditoria de dados ambientais',
          '4.2 Gestão de Carbono:', 'Planos de descarbonização corporativa', 'Estratégias de neutralização de carbono', 
          'Compensação de emissões (carbon offset)', 'Créditos de carbono e mercado regulado/voluntário', 'Monitoramento contínuo de emissões',
          '4.3 Transição Energética e Sustentável:', 'Migração para energia renovável', 'Eficiência energética industrial e corporativa', 
          'Redução de pegada de carbono', 'Estratégias Net Zero e Carbon Neutral', 'Integração com Mercado Livre de Energia'
        ]
      },
      {
        category: '5. SUSTENTABILIDADE CORPORATIVA',
        items: [
          '5.1 Estratégia de Sustentabilidade:', 'Planejamento estratégico sustentável', 'Integração da sustentabilidade ao modelo de negócio', 
          'Análise de ciclo de vida de produtos e serviços', 'Economia circular e reaproveitamento de recursos', 'Inovação sustentável corporativa',
          '5.2 Gestão Ambiental:', 'Licenciamento ambiental (LP, LI, LO)', 'Gestão de resíduos sólidos (PGRS)', 
          'Controle de poluição e emissões', 'Recuperação de áreas degradadas (PRAD)', 'Monitoramento ambiental contínuo',
          '5.3 Sustentabilidade Operacional:', 'Eficiência hídrica e energética', 'Redução de desperdícios operacionais', 
          'Cadeia de suprimentos sustentável', 'Certificações ambientais (ISO 14001, LEED, AQUA)', 'Indicadores de desempenho ambiental'
        ]
      },
      {
        category: '6. AUDITORIA E CERTIFICAÇÕES',
        items: [
          'Auditorias ESG e de sustentabilidade', 'Certificação de sistemas de gestão ambiental', 'Auditorias de compliance e governança', 
          'Certificação de carbono neutro', 'Verificação independente de relatórios ESG', 'Due diligence ambiental e social'
        ]
      },
      {
        category: '7. CONSULTORIA ESTRATÉGICA INTEGRADA',
        items: [
          'Estruturação ESG para grandes corporações e holdings', 'Transformação corporativa sustentável', 
          'Integração ESG + Governança + Compliance + Energia', 'Gestão de reputação corporativa', 
          'Preparação para investidores e mercado financeiro', 'Estruturação de relatórios para IPO e fusões/aquisições'
        ]
      },
      {
        category: '8. TECNOLOGIA E MONITORAMENTO ESG',
        items: [
          'Sistemas digitais de gestão ESG', 'Plataformas de monitoramento de carbono', 'Dashboards corporativos de sustentabilidade', 
          'Inteligência de dados ambientais', 'Automação de relatórios ESG', 'Integração com ERP corporativo'
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
        category: '1. GESTÃO INTEGRADA DE RESÍDUOS (GERAL)',
        items: [
          '1.1 Planejamento e Gestão de Resíduos:', 'Elaboração de Plano de Gerenciamento de Resíduos Sólidos (PGRS)', 'Diagnóstico de geração de resíduos', 'Classificação de resíduos (Classe I, II A e II B)', 'Mapeamento de fluxos de resíduos', 'Estruturação de sistemas de coleta e destinação',
          '1.2 Controle e Monitoramento:', 'Rastreabilidade de resíduos', 'Controle de geração e destinação final', 'Relatórios ambientais e de conformidade', 'Auditoria de resíduos em empresas e obras', 'Indicadores ambientais (KPIs de resíduos)'
        ]
      },
      {
        category: '2. COLETA E TRANSPORTE DE RESÍDUOS',
        items: [
          '2.1 Coleta Convencional:', 'Coleta de resíduos sólidos urbanos (RSU)', 'Coleta seletiva (recicláveis e orgânicos)', 'Coleta de resíduos comerciais e industriais', 'Coleta de resíduos hospitalares (RSS)', 'Coleta de resíduos de construção civil (RCC)',
          '2.2 Transporte Especializado:', 'Transporte de resíduos perigosos (Classe I)', 'Transporte de resíduos químicos e contaminantes', 'Transporte de resíduos industriais pesados', 'Logística reversa de resíduos', 'Transporte de resíduos volumosos e especiais'
        ]
      },
      {
        category: '3. TRATAMENTO DE RESÍDUOS',
        items: [
          '3.1 Tratamento Físico, Químico e Biológico:', 'Triagem e separação de resíduos', 'Tratamento de resíduos orgânicos', 'Compostagem industrial', 'Incineração controlada de resíduos perigosos', 'Neutralização química de resíduos contaminantes',
          '3.2 Tratamento de Resíduos Especiais:', 'Tratamento de resíduos hospitalares (autoclave e incineração)', 'Tratamento de resíduos industriais tóxicos', 'Descontaminação de solos e materiais', 'Tratamento de efluentes industriais', 'Processamento de resíduos oleosos'
        ]
      },
      {
        category: '4. DESTINAÇÃO FINAL DE RESÍDUOS',
        items: [
          '4.1 Aterros e Disposição Final:', 'Aterros sanitários controlados', 'Aterros industriais', 'Aterros de resíduos da construção civil', 'Disposição final de resíduos inertes', 'Encerramento e recuperação de áreas de aterro',
          '4.2 Reciclagem e Reaproveitamento:', 'Centros de triagem de recicláveis', 'Reciclagem de plástico, papel, vidro e metais', 'Reutilização de resíduos da construção civil', 'Coprocessamento em cimenteiras', 'Economia circular aplicada a resíduos'
        ]
      },
      {
        category: '5. RESÍDUOS DA CONSTRUÇÃO CIVIL (RCC)',
        items: [
          'Coleta de entulho de obras', 'Triagem de materiais recicláveis de obra', 'Britagem e reaproveitamento de concreto', 'Gestão de resíduos de demolição', 'Destinação ambientalmente correta de RCC', 'Logística de caçambas e transporte de entulho'
        ]
      },
      {
        category: '6. RESÍDUOS INDUSTRIAIS',
        items: [
          'Gestão de resíduos de processos industriais', 'Tratamento de resíduos químicos e perigosos', 'Gestão de lodos industriais', 'Resíduos metálicos e sucatas industriais', 'Resíduos de óleo e graxa industrial', 'Controle de resíduos contaminantes'
        ]
      },
      {
        category: '7. RESÍDUOS HOSPITALARES E SAÚDE',
        items: [
          'Coleta de resíduos infectantes (Grupo A)', 'Coleta de resíduos químicos (Grupo B)', 'Coleta de resíduos perfurocortantes (Grupo E)', 'Tratamento por autoclave e incineração', 'Gestão de resíduos farmacêuticos', 'Conformidade com normas da ANVISA'
        ]
      },
      {
        category: '8. RESÍDUOS ESPECIAIS E PERIGOSOS',
        items: [
          'Resíduos químicos industriais', 'Resíduos inflamáveis e tóxicos', 'Resíduos de combustíveis e óleos', 'Resíduos eletrônicos (e-waste)', 'Pilhas, baterias e materiais contaminados', 'Descontaminação de materiais perigosos'
        ]
      },
      {
        category: '9. LOGÍSTICA REVERSA',
        items: [
          'Recolhimento de produtos pós-consumo', 'Retorno de embalagens e materiais industriais', 'Gestão de resíduos de eletroeletrônicos', 'Logística reversa de pneus e lubrificantes', 'Sistemas de reaproveitamento industrial', 'Conformidade com legislação ambiental'
        ]
      },
      {
        category: '10. TRATAMENTO DE EFLUENTES E LODOS',
        items: [
          'Estações de tratamento de efluentes (ETE)', 'Tratamento de efluentes industriais', 'Desidratação e tratamento de lodos', 'Reuso de água tratada', 'Controle de carga poluidora', 'Monitoramento de qualidade de efluentes'
        ]
      },
      {
        category: '11. CONSULTORIA E GESTÃO AMBIENTAL DE RESÍDUOS',
        items: [
          'Implantação de sistemas de gestão de resíduos', 'Auditoria ambiental de resíduos', 'Adequação à legislação ambiental', 'Licenciamento de operações de resíduos', 'Certificação ambiental (ISO 14001)', 'Estratégias ESG aplicadas à gestão de resíduos'
        ]
      },
      {
        category: '12. TECNOLOGIA E INOVAÇÃO EM RESÍDUOS',
        items: [
          'Sistemas digitais de rastreamento de resíduos', 'Automação de centrais de triagem', 'Inteligência artificial para classificação de resíduos', 'Sensores e IoT para monitoramento ambiental', 'Plataformas de gestão de resíduos em tempo real', 'Economia circular digitalizada'
        ]
      },
      {
        category: '13. SUSTENTABILIDADE E ECONOMIA CIRCULAR',
        items: [
          'Implantação de economia circular corporativa', 'Redução de resíduos na origem', 'Reutilização de materiais industriais', 'Valorização energética de resíduos', 'Projetos de carbono neutro', 'Sustentabilidade aplicada à cadeia produtiva'
        ]
      }
    ]
  },
  {
    id: 'administracao',
    title: 'Administração Corporativa',
    description: 'Gestão estratégica e suporte administrativo completo para otimizar processos e governança corporativa.',
    icon: Briefcase,
    details: [
      {
        category: '1. ADMINISTRAÇÃO CORPORATIVA',
        items: [
          '1.1 Gestão Executiva:', 'Administração geral de empresas e grupos econômicos', 'Direção estratégica corporativa', 
          'Planejamento empresarial de curto, médio e longo prazo', 'Gestão de unidades de negócios (Business Units)', 'Coordenação de operações multiempresas',
          '1.2 Estrutura Organizacional:', 'Desenho organizacional corporativo', 'Definição de organogramas e hierarquias', 
          'Estruturação de holdings e subsidiárias', 'Governança entre matriz e filiais', 'Integração de empresas do grupo econômico'
        ]
      },
      {
        category: '2. GOVERNANÇA CORPORATIVA',
        items: [
          '2.1 Estrutura de Governança:', 'Implantação de modelo de governança corporativa', 'Criação de conselhos administrativos e consultivos', 
          'Definição de estatuto social e regulamentos internos', 'Gestão de assembleias e reuniões societárias', 'Compliance com normas societárias',
          '2.2 Transparência e Controle:', 'Prestação de contas corporativa (accountability)', 'Relatórios de gestão executiva', 
          'Auditoria interna de governança', 'Controle de conflitos de interesse', 'Gestão de integridade corporativa'
        ]
      },
      {
        category: '3. PLANEJAMENTO ESTRATÉGICO',
        items: [
          '3.1 Estratégia Empresarial:', 'Planejamento estratégico corporativo', 'Definição de metas e indicadores (KPIs e OKRs)', 
          'Expansão de mercado e internacionalização', 'Estratégia de crescimento de grupos empresariais', 'Análise de competitividade e posicionamento',
          '3.2 Inteligência de Negócios:', 'Business Intelligence (BI) corporativo', 'Análise de dados empresariais', 
          'Estudos de viabilidade econômica', 'Inteligência de mercado e concorrência', 'Modelagem de negócios (Business Model Canvas)'
        ]
      },
      {
        category: '4. GESTÃO FINANCEIRA CORPORATIVA',
        items: [
          '4.1 Controladoria:', 'Gestão financeira corporativa integrada', 'Controle orçamentário e fluxo de caixa', 
          'Planejamento financeiro estratégico', 'Consolidação de balanços de grupo econômico', 'Gestão de centros de custo e resultados',
          '4.2 Investimentos e Capital:', 'Gestão de investimentos corporativos', 'Estruturação de captação de recursos', 
          'Avaliação de ativos e empresas (valuation)', 'Fusões e aquisições (M&A)', 'Gestão de participações societárias'
        ]
      },
      {
        category: '5. GESTÃO OPERACIONAL',
        items: [
          '5.1 Operações Empresariais:', 'Gestão de operações multiunidade', 'Padronização de processos operacionais', 
          'Otimização de produtividade empresarial', 'Controle de desempenho operacional', 'Integração de processos entre empresas',
          '5.2 Cadeia de Valor:', 'Gestão da cadeia de suprimentos corporativa', 'Logística integrada empresarial', 
          'Gestão de fornecedores estratégicos', 'Controle de contratos operacionais', 'Otimização de processos produtivos'
        ]
      },
      {
        category: '6. RECURSOS HUMANOS CORPORATIVOS',
        items: [
          '6.1 Gestão de Pessoas:', 'Gestão estratégica de capital humano', 'Recrutamento e seleção corporativa', 
          'Desenvolvimento organizacional', 'Avaliação de desempenho', 'Cultura organizacional e clima corporativo',
          '6.2 Desenvolvimento Organizacional:', 'Treinamento e capacitação executiva', 'Programas de liderança corporativa', 
          'Gestão de talentos e sucessão', 'Estruturação de planos de carreira', 'Engajamento e retenção de talentos'
        ]
      },
      {
        category: '7. COMPLIANCE E CONTROLE INTERNO',
        items: [
          '7.1 Programas de Integridade:', 'Implantação de programas de compliance', 'Código de ética e conduta corporativa', 
          'Políticas anticorrupção e governança ética', 'Canal de denúncias e auditoria interna', 'Conformidade regulatória empresarial',
          '7.2 Controle Interno:', 'Auditoria de processos corporativos', 'Gestão de riscos empresariais', 
          'Monitoramento de controles internos', 'Prevenção de fraudes corporativas', 'Gestão de conformidade legal'
        ]
      },
      {
        category: '8. GESTÃO JURÍDICA CORPORATIVA',
        items: [
          'Estruturação societária de empresas', 'Contratos corporativos e empresariais', 'Planejamento societário e tributário', 
          'Fusões, aquisições e reorganizações societárias', 'Gestão de passivos jurídicos', 'Suporte jurídico estratégico empresarial'
        ]
      },
      {
        category: '9. MARKETING CORPORATIVO E POSICIONAMENTO',
        items: [
          '9.1 Branding Corporativo:', 'Gestão de marca institucional', 'Posicionamento estratégico de empresas', 
          'Comunicação corporativa integrada', 'Gestão de reputação empresarial', 'Identidade visual corporativa',
          '9.2 Comunicação Estratégica:', 'Relações institucionais e públicas', 'Comunicação com investidores (Investor Relations)', 
          'Comunicação interna corporativa', 'Gestão de crise e reputação', 'Marketing institucional de grupo econômico'
        ]
      },
      {
        category: '10. TECNOLOGIA E TRANSFORMAÇÃO DIGITAL',
        items: [
          'Digitalização de processos corporativos', 'Implantação de ERPs empresariais', 'Automação de gestão corporativa', 
          'Inteligência artificial aplicada à administração', 'Business analytics e data-driven management', 'Sistemas integrados de gestão (ERP, CRM, BI)'
        ]
      },
      {
        category: '11. EXPANSÃO E INTERNACIONALIZAÇÃO',
        items: [
          'Estruturação de operações internacionais', 'Abertura de subsidiárias no exterior', 'Planejamento de expansão global', 
          'Gestão de multinacionais e holdings globais', 'Adaptação a legislações internacionais', 'Estratégia de entrada em novos mercados'
        ]
      },
      {
        category: '12. SUSTENTABILIDADE E ESG CORPORATIVO',
        items: [
          'Implantação de ESG em nível corporativo', 'Relatórios de sustentabilidade empresarial', 'Estratégias de descarbonização corporativa', 
          'Governança ambiental e social integrada', 'Economia circular em operações corporativas', 'Certificações ESG e ISO'
        ]
      },
      {
        category: '13. CONSULTORIA E ASSESSORIA CORPORATIVA',
        items: [
          'Consultoria de alta gestão (C-Level advisory)', 'Estruturação de grupos empresariais', 'Otimização de holdings e conglomerados', 
          'Reestruturação empresarial e turnaround', 'Assessoria estratégica para expansão', 'Diagnóstico corporativo completo'
        ]
      }
    ]
  },
  {
    id: 'projetos',
    title: 'AEROFOTOGRAMETRIA COM DRONES (UAVs)',
    description: 'Levantamentos aéreos de alta precisão, mapeamento 2D/3D e monitoramento técnico com drones.',
    icon: Camera,
    details: [
      {
        category: '1. MAPEAMENTO AÉREO E MODELAGEM 3D',
        items: [
          '1.1 Mapeamento Aéreo:', 'Levantamento aerofotogramétrico de áreas urbanas e rurais', 'Mapeamento topográfico de alta precisão', 
          'Geração de ortofotos georreferenciadas', 'Modelagem 2D e 3D de terrenos e estruturas', 'Mapeamento de grandes áreas de infraestrutura',
          '1.2 Modelagem e Processamento:', 'Criação de modelos digitais de terreno (MDT) e superfície (MDS)', 'Nuvem de pontos (point cloud)', 
          'Curvas de nível automatizadas', 'Reconstrução 3D de ambientes e estruturas',
          '1.3 Fotogrametria Avançada:', 'Fotogrametria de alta resolução', 'Processamento de imagens multiespectrais', 
          'Integração com GIS e BIM', 'Análise volumétrica de áreas', 'Comparação temporal de terrenos (antes/depois)'
        ]
      },
      {
        category: '2. GEOREFERENCIAMENTO E TOPOGRAFIA COM DRONES',
        items: [
          '2.1 Georreferenciamento de Imóveis:', 'Georreferenciamento rural e urbano', 'Regularização fundiária (INCRA e cartórios)', 
          'Certificação de imóveis rurais', 'Levantamento de limites e confrontações', 'Integração com cadastro técnico multifinalitário',
          '2.2 Topografia Aérea:', 'Levantamento planialtimétrico com drones', 'Apoio a obras de engenharia civil', 
          'Medição de áreas e perímetros', 'Controle de movimentação de terra', 'Atualização de bases cartográficas',
          '2.3 Precisão Geodésica:', 'Uso de RTK e PPK em drones', 'Apoio GNSS de alta precisão', 
          'Correção diferencial de dados geoespaciais', 'Controle de pontos de apoio em solo', 'Validação topográfica para engenharia'
        ]
      },
      {
        category: '3. ENGENHARIA E INFRAESTRUTURA COM DRONES',
        items: [
          '3.1 Obras Civis e Pesadas:', 'Monitoramento de obras de construção civil', 'Controle de avanço físico de obras', 
          'Inspeção de estruturas complexas', 'Acompanhamento de terraplenagem e pavimentação', 'Fiscalização técnica de grandes empreendimentos',
          '3.2 Infraestrutura Urbana e Rodoviária:', 'Monitoramento de rodovias e estradas', 'Inspeção de pontes e viadutos', 
          'Mapeamento de áreas urbanas', 'Planejamento de expansão urbana', 'Análise de ocupação territorial',
          '3.3 Infraestrutura Pesada:', 'Inspeção de barragens e áreas industriais', 'Monitoramento de portos e aeroportos', 
          'Levantamento de grandes áreas logísticas', 'Controle de obras de energia e mineração', 'Mapeamento de áreas de risco'
        ]
      },
      {
        category: '4. MEIO AMBIENTE E MONITORAMENTO ECOLÓGICO',
        items: [
          '4.1 Monitoramento Ambiental:', 'Monitoramento de áreas de preservação ambiental (APPs)', 'Fiscalização de desmatamento e degradação', 
          'Acompanhamento de reflorestamento e PRAD', 'Mapeamento de queimadas e áreas afetadas', 'Controle de expansão urbana irregular',
          '4.2 Recursos Naturais:', 'Monitoramento de rios, lagos e bacias hidrográficas', 'Controle de erosão e assoreamento', 
          'Análise de vegetação e biodiversidade', 'Inventário florestal com drones', 'Gestão ambiental de grandes áreas'
        ]
      },
      {
        category: '5. MINERAÇÃO E TERRAPLENAGEM',
        items: [
          'Medição volumétrica de pilhas de material', 'Controle de extração mineral', 'Monitoramento de cava e taludes', 
          'Cálculo de movimentação de solo (cut & fill)', 'Planejamento de lavra com dados geoespaciais', 'Segurança operacional em áreas de mineração'
        ]
      },
      {
        category: '6. AGRICULTURA DE PRECISÃO',
        items: [
          'Mapeamento de lavouras e culturas agrícolas', 'Monitoramento de produtividade agrícola', 'Identificação de pragas e doenças em plantações', 
          'Análise de solo e vegetação (NDVI e índices espectrais)', 'Planejamento de irrigação e manejo agrícola', 'Pulverização aérea controlada (drones agrícolas)'
        ]
      },
      {
        category: '7. INSPEÇÃO INDUSTRIAL E TÉCNICA',
        items: [
          'Inspeção de torres de energia e telecomunicações', 'Inspeção de linhas de transmissão elétrica', 'Inspeção de telhados e estruturas elevadas', 
          'Inspeção de torres eólicas', 'Inspeção de fachadas prediais e industriais', 'Detecção de falhas estruturais visuais'
        ]
      },
      {
        category: '8. SEGURANÇA, VIGILÂNCIA E MONITORAMENTO',
        items: [
          'Vigilância de áreas industriais e logísticas', 'Monitoramento de perímetros extensos', 'Segurança de canteiros de obras', 
          'Controle de acesso aéreo em grandes áreas', 'Monitoramento de eventos e operações críticas', 'Apoio a segurança patrimonial corporativa'
        ]
      },
      {
        category: '9. ENGENHARIA DIGITAL E MODELAGEM AVANÇADA',
        items: [
          'Integração com BIM (Building Information Modeling)', 'Digital twin (gêmeo digital de obras e cidades)', 'Simulações 3D de terrenos e estruturas', 
          'Planejamento urbano digital', 'Análise espacial avançada com GIS', 'Inteligência artificial aplicada a imagens aéreas'
        ]
      },
      {
        category: '10. FOTOGRAFIA E PRODUÇÃO AÉREA',
        items: [
          'Fotografias aéreas de alta resolução', 'Filmagens institucionais e corporativas', 'Produção audiovisual para engenharia e marketing', 
          'Registro de obras e empreendimentos', 'Conteúdo visual para relatórios e apresentações', 'Imagens promocionais de projetos e infraestrutura'
        ]
      },
      {
        category: '11. CONSULTORIA E GESTÃO GEOESPACIAL',
        items: [
          'Consultoria em geotecnologias e drones', 'Gestão de dados geográfico corporativos', 'Implantação de sistemas GIS empresariais', 
          'Estruturação de banco de dados geoespacial', 'Análise estratégica territorial', 'Suporte técnico para engenharia e obras'
        ]
      },
      {
        category: '12. CONFORMIDADE E REGULAMENTAÇÃO',
        items: [
          'Operação de drones conforme ANAC (RBAC-E 94)', 'Registro e certificação de aeronaves remotamente pilotadas', 
          'Licenciamento para operações especiais', 'Conformidade ambiental e urbana', 'Segurança operacional de voo', 'Gestão de risco em operações UAV'
        ]
      }
    ]
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
    id: 'construcao-sustentavel',
    title: 'Construção Ecológica (Sustentável)',
    description: 'Projetos e execução de obras com foco em sustentabilidade, materiais ecológicos e máxima eficiência energética.',
    icon: Leaf,
    details: [
      {
        category: '1. CONSTRUÇÃO ECOLÓGICA (SUSTENTÁVEL)',
        items: [
          '1.1 Edificações Sustentáveis:', 'Construção de residências sustentáveis', 'Construções comerciais de baixo impacto ambiental', 
          'Edificações industriais ecoeficientes', 'Projetos com certificações ambientais (LEED, AQUA, EDGE)', 'Integração de soluções de eficiência energética',
          '1.2 Métodos Construtivos Sustentáveis:', 'Construção a seco (dry construction)', 'Estruturas em steel frame', 
          'Wood frame (madeira engenheirada)', 'Sistemas modulares e pré-fabricados', 'Construção off-site (industrializada)',
          '1.3 Eficiência de Recursos:', 'Redução de consumo de água na obra', 'Reaproveitamento de materiais de construção', 
          'Uso de materiais recicláveis e reciclados', 'Otimização de energia durante a obra', 'Minimização de resíduos de construção (RCC reduzido)'
        ]
      },
      {
        category: '2. DRYWALL E SISTEMAS CONSTRUTIVOS A SECO',
        items: [
          '2.1 Estruturas em Drywall:', 'Paredes internas em drywall', 'Divisórias corporativas e residenciais', 
          'Forros em gesso acartonado', 'Revestimentos internos leves', 'Sistemas de isolamento termoacústico',
          '2.2 Acabamentos em Drywall:', 'Tratamento de juntas e emendas', 'Pintura e acabamento fino', 
          'Integração com iluminação embutida', 'Nichos e elementos decorativos', 'Revestimentos especiais (antiumidade e acústico)',
          '2.3 Vantagens Técnicas:', 'Redução significativa de resíduos de obra', 'Execução mais rápida e limpa', 
          'Menor uso de água na construção', 'Alta flexibilidade arquitetônica', 'Facilidade de manutenção e modificação'
        ]
      },
      {
        category: '3. REFORMAS ECOLÓGICAS (GREEN RETROFIT)',
        items: [
          '3.1 Reformas Residenciais Sustentáveis:', 'Reformas com redução de resíduos (low waste renovation)', 'Substituição de materiais por alternativas sustentáveis', 
          'Modernização energética de residências', 'Reuso de estruturas existentes', 'Atualização de sistemas hidráulicos e elétricos eficientes',
          '3.2 Reformas Comerciais Sustentáveis:', 'Retrofit sustentável de escritórios e lojas', 'Readequação de espaços com materiais recicláveis', 
          'Eficiência energética em ambientes corporativos', 'Redução de impacto ambiental em reformas', 'Reconfiguração de layout com drywall e sistemas leves',
          '3.3 Reformas Industriais Sustentáveis:', 'Modernização de plantas industriais com menor impacto ambiental', 'Reutilização de estruturas existentes', 
          'Redução de geração de entulho industrial', 'Otimização de processos construtivos industriais', 'Adequação a normas ambientais e ESG'
        ]
      },
      {
        category: '4. MATERIAIS SUSTENTÁVEIS E TECNOLOGIAS VERDES',
        items: [
          '4.1 Materiais de Baixo Impacto:', 'Concreto reciclado e ecoeficiente', 'Madeiras certificadas (FSC/PEFC)', 
          'Blocos ecológicos e solo-cimento', 'Tintas e revestimentos de baixa emissão (VOC reduzido)', 'Isolantes térmicos recicláveis',
          '4.2 Tecnologias Construtivas:', 'Impressão 3D na construção civil', 'BIM para redução de desperdício', 
          'Construção modular inteligente', 'Sistemas construtivos pré-fabricados', 'Automação de processos construtivos'
        ]
      },
      {
        category: '5. GESTÃO DE RESÍDUOS EM OBRAS VERDES',
        items: [
          'Plano de gerenciamento de resíduos da construção (PGRCC)', 'Separação e reciclagem de resíduos na obra', 
          'Reutilização de materiais de demolição', 'Logística reversa de materiais construtivos', 'Redução de entulho e desperdício', 'Destinação ambientalmente correta de resíduos'
        ]
      },
      {
        category: '6. EFICIÊNCIA ENERGÉTICA E HÍDRICA EM OBRAS',
        items: [
          'Instalação de sistemas de energia solar', 'Uso de iluminação LED eficiente', 'Sistemas de captação e reuso de água da chuva', 
          'Equipamentos hidráulicos de baixo consumo', 'Automação predial sustentável', 'Monitoramento de consumo energético'
        ]
      },
      {
        category: '7. ARQUITETURA SUSTENTÁVEL E BIOCLIMÁTICA',
        items: [
          'Projetos arquitetônicos bioclimáticos', 'Aproveitamento de luz e ventilação natural', 'Redução de necessidade de climatização artificial', 
          'Integração com paisagismo e natureza', 'Conforto térmico e eficiência ambiental', 'Design passivo de edificações'
        ]
      },
      {
        category: '8. CERTIFICAÇÕES E CONFORMIDADE AMBIENTAL',
        items: [
          'Certificação LEED (Leadership in Energy and Environmental Design)', 'Certificação AQUA-HQE', 'Certificação EDGE (IFC – Banco Mundial)', 
          'Conformidade com ISO 14001', 'Avaliação de ciclo de vida (ACV) de edificações', 'Auditorias ambientais de construção'
        ]
      },
      {
        category: '9. CONSULTORIA EM CONSTRUÇÃO SUSTENTÁVEL',
        items: [
          'Planejamento de obras ecológicas', 'Estratégias de redução de impacto ambiental', 'Implementação de políticas ESG em obras', 
          'Avaliação de viabilidade sustentável de projetos', 'Otimização de custos com sustentabilidade', 'Integração de inovação e sustentabilidade construtiva'
        ]
      },
      {
        category: '10. DEMOLIÇÃO CONTROLADA E REUTILIZAÇÃO',
        items: [
          'Demolição seletiva (desmontagem sustentável)', 'Reaproveitamento estrutural de materiais', 'Redução de poeira e impacto ambiental', 
          'Gestão de resíduos de demolição', 'Reciclagem de concreto, metals e madeira', 'Descarte ambientalmente correta'
        ]
      }
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance e Governança',
    description: 'Estruturação de programas de integridade e governança para garantir segurança institucional.',
    icon: Shield,
    details: [
      {
        category: '1. ESG (ENVIRONMENTAL, SOCIAL AND GOVERNANCE)',
        items: [
          '1.1 Estruturação ESG Corporativa:', 'Implantação de estratégia ESG corporativa', 'Diagnóstico de maturidade ESG', 'Definição de políticas ambientais, sociais e de governança', 'Integração ESG ao planejamento estratégico empresarial', 'Estruturação de comitês ESG',
          '1.2 Relatórios e Indicadores ESG:', 'Elaboração de relatórios ESG (padrões GRI, SASB, IFRS S1/S2)', 'Definição de KPIs ESG corporativos', 'Monitoramento de indicadores ambientais, sociais e de governança', 'Auditoria de performance ESG', 'Relatórios para investidores e stakeholders',
          '1.3 Gestão Ambiental ESG:', 'Gestão de resíduos sólidos e efluentes', 'Eficiência energética e hídrica', 'Controle de emissões atmosféricas', 'Licenciamento ambiental e conformidade legal', 'Programas de compensação ambiental',
          '1.4 Pilar Social (S do ESG):', 'Programas de responsabilidade social corporativa (RSC)', 'Saúde e segurança do trabalho (SST)', 'Inclusão social e diversidade', 'Relações comunitárias e impacto social', 'Programas de capacitação e desenvolvimento humano',
          '1.5 Pilar Governança (G do ESG):', 'Estruturação de conselhos administrativos e consultivos', 'Código de ética e conduta corporativa', 'Políticas anticorrupção e integridade', 'Transparência corporativa e prestação de contas', 'Gestão de riscos corporativos'
        ]
      },
      {
        category: '2. GOVERNANÇA CORPORATIVA',
        items: [
          '2.1 Estrutura de Governança:', 'Implementação de modelo de governança corporativa', 'Definição de estatutos sociais e regulamentos internos', 'Estruturação de holdings e subsidiárias', 'Organização societária e planejamento estratégico', 'Governança em empresas familiares e grandes grupos',
          '2.2 Gestão de Riscos:', 'Mapeamento de riscos corporativos (ERM – Enterprise Risk Management)', 'Gestão de riscos operacionais, financeiros e reputacionais', 'Planos de contingência e continuidade de negócios', 'Auditoria de riscos e controles internos', 'Monitoramento contínuo de riscos estratégicos',
          '2.3 Transparência e Controles:', 'Auditorias internas e externas', 'Compliance regulatório e normativo', 'Controles financeiros e contábeis', 'Gestão de conflitos de interesse', 'Relatórios de governança corporativa'
        ]
      },
      {
        category: '3. COMPLIANCE CORPORATIVO',
        items: [
          '3.1 Programas de Compliance:', 'Implantação de programa de integridade', 'Código de ética e conduta', 'Canal de denúncias e ouvidoria', 'Políticas anticorrupção (Lei Anticorrupção / FCPA / UK Bribery Act)', 'Treinamentos de compliance corporativo',
          '3.2 Compliance Regulatório:', 'Adequação a normas nacionais e internacionais', 'Conformidade com órgãos reguladores setoriais', 'Auditoria de contratos e operações', 'Due diligence de fornecedores e parceiros', 'Gestão de licenças e autorizações',
          '3.3 Compliance Contratual:', 'Revisão de contratos corporativos', 'Gestão de riscos contratuais', 'Padronização de cláusulas de integridade', 'Controle de obrigações contratuais', 'Monitoramento de execução contratual'
        ]
      },
      {
        category: '4. GEE (GASES DE EFEITO ESTUFA) E CARBONO',
        items: [
          '4.1 Inventário de Emissões:', 'Inventário de GEE (Escopos 1, 2 e 3)', 'Mapeamento de fontes emissoras', 'Quantificação de emissões de carbono equivalente (CO₂e)', 'Relatórios de emissões corporativas', 'Auditoria de dados ambientais',
          '4.2 Gestão de Carbono:', 'Planos de descarbonização corporativa', 'Estratégias de neutralização de carbono', 'Compensação de emissões (carbon offset)', 'Créditos de carbono e mercado regulado/voluntário', 'Monitoramento contínuo de emissões',
          '4.3 Transição Energética e Sustentável:', 'Migração para energia renovável', 'Eficiência energética industrial e corporativa', 'Redução de pegada de carbono', 'Estratégias Net Zero e Carbon Neutral', 'Integração com Mercado Livre de Energia'
        ]
      },
      {
        category: '5. SUSTENTABILIDADE CORPORATIVA',
        items: [
          '5.1 Estratégia de Sustentabilidade:', 'Planejamento estratégico sustentável', 'Integração da sustentabilidade ao modelo de negócio', 'Análise de ciclo de vida de produtos e serviços', 'Economia circular e reaproveitamento de recursos', 'Inovação sustentável corporativa',
          '5.2 Gestão Ambiental:', 'Licenciamento ambiental (LP, LI, LO)', 'Gestão de resíduos sólidos (PGRS)', 'Controle de poluição e emissões', 'Recuperação de áreas degradadas (PRAD)', 'Monitoramento ambiental contínuo',
          '5.3 Sustentabilidade Operacional:', 'Eficiência hídrica e energética', 'Redução de desperdícios operacionais', 'Cadeia de suprimentos sustentável', 'Certificações ambientais (ISO 14001, LEED, AQUA)', 'Indicadores de desempenho ambiental'
        ]
      },
      {
        category: '6. AUDITORIA E CERTIFICAÇÕES',
        items: [
          'Auditorias ESG e de sustentabilidade', 'Certificação de sistemas de gestão ambiental', 'Auditorias de compliance e governança', 'Certificação de carbono neutro', 'Verificação independente de relatórios ESG', 'Due diligence ambiental e social'
        ]
      },
      {
        category: '7. CONSULTORIA ESTRATÉGICA INTEGRADA',
        items: [
          'Estruturação ESG para grandes corporações e holdings', 'Transformação corporativa sustentável', 'Integração ESG + Governança + Compliance + Energia', 'Gestão de reputação corporativa', 'Preparação para investidores e mercado financeiro', 'Estruturação de relatórios para IPO e fusões/aquisições'
        ]
      },
      {
        category: '8. TECNOLOGIA E MONITORAMENTO ESG',
        items: [
          'Sistemas digitais de gestão ESG', 'Plataformas de monitoramento de carbono', 'Dashboards corporativos de sustentabilidade', 'Inteligência de dados ambientais', 'Automação de relatórios ESG', 'Integração com ERP corporativo'
        ]
      }
    ]
  },
  {
    id: 'facilities',
    title: 'Facilities e Gestão Integrada',
    description: 'Gestão integrada de serviços e infraestrutura para otimizar o ambiente corporativo e industrial.',
    icon: Building2,
    details: [
      {
        category: '1. FACILITIES MANAGEMENT (GESTÃO INTEGRADA DE FACILITIES)',
        items: [
          '1.1 Gestão Operacional Integrada:', 'Gestão completa de facilities corporativos', 'Administração operacional de unidades empresariais', 'Coordenação de serviços terceirizados', 'Gestão de contratos operacionais', 'Planejamento e controle de operações prediais',
          '1.2 Gestão Administrativa de Facilities:', 'Administração de infraestrutura corporativa', 'Gestão de custos operacionais', 'Controle de fornecedores e prestadores', 'Gestão documental e compliance operacional', 'Indicadores de desempenho operacional (KPIs e SLAs)'
        ]
      },
      {
        category: '2. LIMPEZA, CONSERVAÇÃO E HIGIENIZAÇÃO',
        items: [
          '2.1 Limpeza Corporativa:', 'Limpeza predial e corporativa', 'Limpeza industrial pesada', 'Limpeza hospitalar e sanitária', 'Limpeza pós-obra e pós-reforma', 'Limpeza técnica especializada',
          '2.2 Higienização Técnica:', 'Sanitização de ambientes', 'Controle microbiológico ambiental', 'Higienização de áreas críticas', 'Desinfecção de ambientes corporativos', 'Limpeza de áreas alimentícias e industriais'
        ]
      },
      {
        category: '3. MANUTENÇÃO PREDIAL E INFRAESTRUTURA',
        items: [
          '3.1 Manutenção Civil:', 'Reparos prediais gerais', 'Pintura predial e industrial', 'Pequenas reformas e retrofit', 'Manutenção de fachadas', 'Conservação estrutural predial',
          '3.2 Manutenção Elétrica:', 'Manutenção elétrica preventiva e corretiva', 'Instalações elétricas prediais', 'Iluminação corporativa e industrial', 'Sistemas de energia e backup', 'Painéis elétricos e automação predial',
          '3.3 Manutenção Hidrossanitária:', 'Manutenção hidráulica predial', 'Redes de água e esgoto', 'Sistemas de bombeamento', 'Caixas d’água e reservatórios', 'Sistemas de drenagem e saneamento'
        ]
      },
      {
        category: '4. PMOC E CLIMATIZAÇÃO',
        items: [
          'Gestão de PMOC (Lei 13.589/2018)', 'Manutenção de sistemas HVAC', 'Instalação de ar-condicionado', 'Limpeza e higienização de dutos', 'Climatização corporativa e industrial', 'Controle de qualidade do ar interno (QAI)'
        ]
      },
      {
        category: '5. SEGURANÇA E CONTROLE DE ACESSO',
        items: [
          '5.1 Segurança Patrimonial:', 'Vigilância patrimonial armada e desarmada', 'Monitoramento eletrônico (CFTV)', 'Controle de acesso e portarias', 'Rondas operacionais', 'Segurança de infraestrutura crítica',
          '5.2 Controle Operacional:', 'Portaria física e remota', 'Gestão de visitantes e prestadores', 'Controle de entrada e saída de veículos', 'Sistemas biométricos e inteligentes', 'Monitoramento centralizado'
        ]
      },
      {
        category: '6. RECEPÇÃO E APOIO ADMINISTRATIVO',
        items: [
          'Recepção corporativa', 'Atendimento institucional', 'Serviços administrativos terceirizados', 'Gestão documental e arquivos', 'Apoio operacional de escritório', 'Secretariado e suporte executivo'
        ]
      },
      {
        category: '7. COPA, COZINHA E ALIMENTAÇÃO',
        items: [
          'Serviços de copa corporativa', 'Apoio em refeitórios industriais', 'Preparação e distribuição de alimentos leves', 'Organização de áreas de alimentação', 'Higienização de cozinhas e utensílios'
        ]
      },
      {
        category: '8. JARDINAGEM, PAISAGISMO E ÁREAS VERDES',
        items: [
          'Jardinagem corporativa', 'Paisagismo empresarial', 'Poda e manutenção de árvores', 'Irrigação e manejo de áreas verdes', 'Conservação de parques e jardins', 'PRAD e recuperação paisagística'
        ]
      },
      {
        category: '9. GESTÃO DE RESÍDUOS E SUSTENTABILIDADE',
        items: [
          '9.1 Gestão de Resíduos:', 'Coleta e gerenciamento de resíduos', 'Segregação e reciclagem', 'Destinação ambientalmente correta', 'Logística reversa', 'Gestão de resíduos industriais e hospitalares',
          '9.2 ESG e Sustentabilidade:', 'Implantação de práticas ESG', 'Redução de consumo de água e energia', 'Facilities sustentáveis', 'Eficiência operacional ambiental', 'Certificações ambientais e ISO 14001'
        ]
      },
      {
        category: '10. APOIO LOGÍSTICO E OPERACIONAL',
        items: [
          'Controle de almoxarifado', 'Movimentação de materiais', 'Apoio logístico interno', 'Gestão de estoques operacionais', 'Expedição e recebimento de mercadorias', 'Apoio operacional em grandes eventos e operações'
        ]
      },
      {
        category: '11. GESTÃO DE OBRAS E INFRAESTRUTURA',
        items: [
          'Gestão operacional de obras', 'Apoio em canteiros de obras', 'Controle de fornecedores de engenharia', 'Coordenação de manutenção de ativos', 'Facilities para obras e empreendimentos', 'Gestão de infraestrutura corporativa integrada'
        ]
      },
      {
        category: '12. TECNOLOGIA E SMART FACILITIES',
        items: [
          'Sistemas CAFM e IWMS', 'Automação predial (BMS)', 'Monitoramento inteligente de ativos', 'IoT aplicado a facilities', 'Controle digital de ordens de serviço', 'Dashboards operacionais em tempo real'
        ]
      },
      {
        category: '13. GESTÃO DE CONTRATOS E TERCEIRIZAÇÃO',
        items: [
          'Administração de contratos terceirizados', 'Gestão de SLA e desempenho operacional', 'Homologação de fornecedores', 'Gestão de equipes terceirizadas', 'Auditoria operacional de serviços', 'Compliance trabalhista e operacional'
        ]
      },
      {
        category: '14. FACILITIES PARA SEGMENTOS ESPECÍFICOS',
        items: [
          '14.1 Facilities Industriais:', 'Gestão de plantas industriais', 'Facilities para mineração e energia', 'Operações integradas industriais', 'Apoio técnico-operacional pesado',
          '14.2 Facilities Hospitalares:', 'Higienização hospitalar', 'Gestão de áreas críticas', 'Operação de suporte clínico e técnico', 'Controle sanitário especializado',
          '14.3 Facilities Corporativos:', 'Gestão de escritórios e sedes administrativas', 'Operação de coworkings e centros empresariais', 'Gestão de espaços corporativos inteligentes'
        ]
      },
      {
        category: '15. CONSULTORIA ESTRATÉGICA EM FACILITIES',
        items: [
          'Diagnóstico operacional corporativo', 'Reestruturação de operações de facilities', 'Otimização de custos e eficiência', 'Planejamento estratégico operacional', 'Consultoria em infraestrutura corporativa', 'Gestão integrada de grandes operações'
        ]
      },
      {
        category: '16. PERFORMANCE E GOVERNANÇA OPERACIONAL',
        items: [
          'Indicadores de performance operacional', 'Auditoria de facilities management', 'Gestão integrada de riscos operacionais', 'Governança operacional corporativa', 'Monitoramento de produtividade e eficiência', 'Planejamento de continuidade operacional'
        ]
      }
    ]
  },
  {
    id: 'pragas',
    title: 'Controle de Pragas',
    description: 'Monitoramento e controle integrado de pragas com foco em segurança e saúde ambiental.',
    icon: Bug,
    details: [
      {
        category: '1. CONTROLE DE PRAGAS URBANAS (DESINSETIZAÇÃO E DESRATIZAÇÃO)',
        items: [
          '1.1 Controle de Insetos Rasteiros:', 'Controle de baratas (Blattella germanica, Periplaneta americana)', 'Controle de formigas urbanas e industriais', 
          'Controle de pulgas e carrapatos', 'Controle de traças e insetos de roupas e grãos', 'Controle de percevejos (bed bugs)', 'Controle de escorpiões',
          '1.2 Controle de Insetos Voadores:', 'Controle de mosquitos (Aedes aegypti e outros vetores)', 'Controle de moscas domésticas e industriais', 
          'Controle de mariposas e insetos noturnos', 'Nebulização ambiental (fumacê técnico)', 'Controle de vetores em áreas externas',
          '1.3 Controle de Roedores:', 'Desratização de áreas urbanas e industriais', 'Controle de ratos de telhado (Rattus rattus)', 
          'Controle de ratazanas (Rattus norvegicus)', 'Controle de camundongos', 'Monitoramento de pontos críticos e iscas rodenticidas'
        ]
      },
      {
        category: '2. CONTROLE DE PRAGAS INDUSTRIAIS E ALIMENTÍCIAS',
        items: [
          'Controle integrado de pragas (MIP – Manejo Integrado de Pragas)', 'Controle em indústrias alimentícias e frigoríficos', 
          'Controle em armazéns e centros logísticos', 'Monitoramento em áreas de produção e estoque', 
          'Barreiras sanitárias e controle de contaminação cruzada', 'Inspeção e rastreabilidade de pragas'
        ]
      },
      {
        category: '3. CONTROLE DE PRAGAS EM AMBIENTES RURAIS',
        items: [
          '3.1 Agricultura:', 'Controle de pragas agrícolas (lagartas, gafanhotos, etc.)', 'Controle de insetos em lavouras', 
          'Manejo integrado de pragas (MIP agrícola)', 'Proteção de grãos armazenados', 'Pulverização técnica controlada',
          '3.2 Pecuária:', 'Controle de moscas em áreas de criação animal', 'Controle de carrapatos em bovinos e equinos', 
          'Desinfestação de currais e instalações rurais', 'Controle de pragas em silos e alimentos animais'
        ]
      },
      {
        category: '4. DESINFECÇÃO E SANITIZAÇÃO AMBIENTAL',
        items: [
          'Desinfecção de ambientes comerciais e industriais', 'Sanitização de hospitais, clínicas e laboratórios', 
          'Controle microbiológico ambiental', 'Aplicação de produtos bactericidas e virucidas', 
          'Nebulização ultrafina (ULV)', 'Higienização de sistemas de ar-condicionado'
        ]
      },
      {
        category: '5. CONTROLE DE PRAGAS EM EDIFICAÇÕES E INFRAESTRUTURAS',
        items: [
          'Controle de pragas em condomínios residenciais', 'Controle em prédios comerciais e corporativos', 
          'Controle em escolas e instituições públicas', 'Controle em shoppings, hotéis e restaurantes', 
          'Inspeção de redes de esgoto e áreas técnicas', 'Tratamento de caixas de gordura e redes subterrâneas'
        ]
      },
      {
        category: '6. CONTROLE DE PRAGAS EM INFRAESTRUTURA PESADA',
        items: [
          'Controle em canteiros de obras', 'Controle em obras de infraestrutura (rodovias, portos, aeroportos)', 
          'Controle em túneis, galerias e obras subterrâneas', 'Controle em áreas industriais de grande porte', 'Monitoramento ambiental de áreas críticas'
        ]
      },
      {
        category: '7. CONTROLE DE PRAGAS ESPECIAIS',
        items: [
          'Controle de pombos urbanos (aves sinantrópicas)', 'Controle de morcegos em estruturas industriais e urbanas', 
          'Controle de abelhas e vespas (remoção técnica segura)', 'Manejo de fauna sinantrópica urbana', 'Controle de animais invasores em áreas industriais'
        ]
      },
      {
        category: '8. PREVENÇÃO E MANEJO INTEGRADO DE PRAGAS (MIP)',
        items: [
          'Diagnóstico ambiental e sanitário de áreas críticas', 'Monitoramento contínuo de infestação', 
          'Implantação de barreiras físicas e químicas', 'Gestão preventiva de risco biológico', 
          'Planos de controle integrado de pragas (PCIP)', 'Relatórios técnicos e indicadores de infestação'
        ]
      },
      {
        category: '9. LIMPEZA TÉCNICA E DESINFESTAÇÃO',
        items: [
          'Limpeza técnica de áreas contaminadas', 'Remoção de colônias de pragas', 'Higienização profunda de ambientes críticos', 
          'Limpeza de reservatórios e áreas de difícil acesso', 'Desobstrução sanitária associada ao controle de pragas'
        ]
      },
      {
        category: '10. CONSULTORIA E GESTÃO SANITÁRIA',
        items: [
          'Auditoria sanitária e ambiental', 'Certificação de controle de pragas (normas ANVISA e vigilância sanitária)', 
          'Planos de controle integrado para empresas', 'Adequação a normas sanitárias e ambientais', 
          'Treinamento de equipes internas de controle preventivo', 'Gestão de risco biológico corporativo'
        ]
      },
      {
        category: '11. TECNOLOGIAS E MÉTODOS MODERNOS',
        items: [
          'Monitoramento digital de armadilhas inteligentes', 'Sistemas de controle automatizado de pragas', 
          'Uso de sensores ambientais e IoT', 'Aplicação de produtos de baixa toxicidade e ecológicos', 
          'Técnicas de controle biológico de pragas', 'Mapeamento digital de áreas infestadas'
        ]
      },
      {
        category: '12. SUSTENTABILIDADE E CONTROLE AMBIENTAL',
        items: [
          'Controle de pragas com impacto ambiental reduzido', 'Uso de produtos biodegradáveis e certificados', 
          'Gestão ambiental integrada ao controle de pragas', 'Conformidade com ESG e normas ambientais', 
          'Minimização de impacto em fauna e flora', 'Programas de controle sustentável de vetores'
        ]
      }
    ]
  },
  {
    id: 'gestao-obras',
    title: 'Gestão Integral de Obras',
    description: 'Gerenciamento completo de obras e infraestrutura, garantindo eficiência, controle técnico e conformidade em todas as etapas.',
    icon: HardHat,
    details: [
      {
        category: '1. GESTÃO INTEGRAL DE OBRAS (PROJECT & CONSTRUCTION MANAGEMENT)',
        items: [
          '1.1 Planejamento e Estruturação de Obras:', 'Planejamento global de empreendimentos (EAP – Estrutura Analítica do Projeto)', 'Definição de escopo técnico e executivo', 'Estudos de viabilidade técnica, econômica e operacional (EVTE)', 'Planejamento de fases construtivas', 'Definição de metodologia executiva da obra',
          '1.2 Gestão de Cronograma e Prazo:', 'Elaboração de cronogramas físico-financeiros', 'Controle de caminho crítico (CPM)', 'Reprogramação de obras e recuperação de prazo', 'Monitoramento de avanço físico mensal e diário', 'Gestão de marcos contratuais (milestones)',
          '1.3 Gestão de Custos e Orçamentos:', 'Orçamento executivo e analítico de obras', 'Controle de custos diretos e indiretos', 'Gestão de BDI (Benefícios e Despesas Indiretas)', 'Controle de aditivos contratuais', 'Análise de viabilidade financeira contínua'
        ]
      },
      {
        category: '2. GESTÃO DE EXECUÇÃO E FISCALIZAÇÃO DE OBRAS',
        items: [
          '2.1 Coordenação de Obra:', 'Coordenação de equipes multidisciplinares', 'Gestão de empreiteiros e subcontratados', 'Controle de produtividade em campo', 'Distribuição de frentes de serviço', 'Gestão de conflitos operacionais',
          '2.2 Fiscalização Técnica:', 'Acompanhamento de execução conforme projeto', 'Verificação de qualidade de materiais e serviços', 'Inspeções técnicas periódicas', 'Relatórios de conformidade técnica', 'Auditoria de execução em campo',
          '2.3 Controle Tecnológico:', 'Ensaios de solo, concreto e asfalto', 'Controle de compactação e resistência', 'Testes laboratoriais e de campo', 'Certificação de qualidade dos materiais', 'Monitoramento de desempenho estrutural'
        ]
      },
      {
        category: '3. GESTÃO CONTRATUAL E ADMINISTRATIVA',
        items: [
          '3.1 Gestão de Contratos:', 'Administração de contratos de engenharia', 'Gestão de medições e pagamentos', 'Elaboração de aditivos contratuais', 'Controle de escopo e mudanças contratuais (change orders)', 'Gestão de riscos contratuais',
          '3.2 Suporte Jurídico-Técnico:', 'Análise técnica de disputas contratuais', 'Suporte em arbitragem e mediação', 'Gestão de claims (reivindicações técnicas)', 'Conformidade regulatória e normativa', 'Apoio documental para auditorias',
          '3.3 Gestão Documental:', 'Controle de projetos e revisões técnicas', 'Organização de documentação de obra', 'Dossiê técnico de execução', 'Relatórios gerenciais e executivos', 'Histórico completo do empreendimento'
        ]
      },
      {
        category: '4. GESTÃO DE QUALIDADE, SEGURANÇA E MEIO AMBIENTE (QSMS)',
        items: [
          '4.1 Qualidade:', 'Implantação de sistema de qualidade (ISO 9001)', 'Controle de inspeções e checklists técnicos', 'Gestão de não conformidades', 'Auditorias internas e externas', 'Padronização de processos construtivos',
          '4.2 Segurança do Trabalho:', 'Gestão de SST (NRs aplicáveis)', 'Treinamentos obrigatórios de segurança', 'Análise de riscos operacionais (APR)', 'Gestão de EPIs e EPCs', 'Investigação de incidentes e acidentes',
          '4.3 Gestão Ambiental:', 'Licenciamento ambiental de obras', 'Controle de resíduos (PGRS)', 'Monitoramento de impactos ambientais', 'PRAD e compensação ambiental', 'Conformidade ESG em obras'
        ]
      },
      {
        category: '5. GESTÃO DE SUPRIMENTOS E LOGÍSTICA DE OBRA',
        items: [
          'Planejamento de compras e suprimentos', 'Gestão de fornecedores e homologação técnica', 'Controle de estoque de materiais', 'Logística de canteiro de obras', 'Transporte e recebimento de materiais', 'Otimização de cadeia de suprimentos'
        ]
      },
      {
        category: '6. GESTÃO DE CANTEIRO DE OBRAS',
        items: [
          'Implantação e organização de canteiros', 'Infraestrutura temporária de obra', 'Controle de acesso e segurança perimetral', 'Gestão de áreas operacionais e armazenagem', 'Logística interna de equipamentos e materiais'
        ]
      },
      {
        category: '7. GESTÃO DE PERFORMANCE E INDICADORES',
        items: [
          'KPIs de produtividade e avanço físico', 'Indicadores de custo, prazo e qualidade', 'Relatórios gerenciais executivos', 'Dashboards de acompanhamento de obra', 'Análise de eficiência operacional'
        ]
      },
      {
        category: '8. GESTÃO DE ENCERRAMENTO DE PROJETO',
        items: [
          'Comissionamento de sistemas e estruturas', 'Entrega técnica da obra (as built)', 'Termos de recebimento provisório e definitivo', 'Dossiê final de engenharia', 'Avaliação de desempenho pós-obra'
        ]
      },
      {
        category: '9. CONSULTORIA E GESTÃO ESTRATÉGICA',
        items: [
          'Gestão integrada de portfólios de obras', 'Planejamento estratégico de expansão de projetos', 'Apoio a investidores e incorporadoras', 'Estruturação de grandes empreendimentos', 'Modelagem operacional de projetos complexos'
        ]
      }
    ]
  },
  {
    id: 'logistica',
    title: 'Logística e Transporte',
    description: 'Soluções logísticas integradas e transporte seguro com foco em eficiência operacional.',
    icon: Truck,
    details: [
      {
        category: '1. TRANSPORTE RODOVIÁRIO',
        items: [
          '1.1 Transporte de Cargas:', 'Transporte de carga geral fracionada (LTL)', 'Transporte de carga fechada (FTL)', 'Transporte de cargas pesadas e superdimensionadas (carga especial)', 'Transporte de produtos industriais e materiais de construção', 'Transporte de cargas perigosas (químicos, combustibles, etc.)', 'Transporte de cargas refrigeradas (cadeia fria)',
          '1.2 Transporte Urbano e Regional:', 'Distribuição urbana (last mile delivery)', 'Transporte regional e intermunicipal de cargas', 'Logística de abastecimento de centros urbanos', 'Entregas programadas e roteirizadas', 'Transporte expresso e emergencial',
          '1.3 Transporte de Passageiros (quando aplicável):', 'Transporte corporativo e fretamento', 'Transporte executivo', 'Transporte escolar e institucional', 'Mobilidade para equipes operacionais'
        ]
      },
      {
        category: '2. TRANSPORTE MULTIMODAL',
        items: [
          '2.1 Integração Logística:', 'Integração rodoviária, ferroviária, aérea e marítima', 'Operações de transbordo entre modais', 'Planejamento de rotas multimodais otimizadas', 'Gestão integrada de cadeia logística', 'Consolidação de cargas em hubs logísticos',
          '2.2 Operação Multimodal:', 'Coordenação de transporte porta a porta', 'Gestão de operadores logísticos (3PL e 4PL)', 'Integração de sistemas de rastreamento', 'Controle de tempo de trânsito entre modais', 'Otimização de custos logísticos'
        ]
      },
      {
        category: '3. TRANSPORTE FERROVIÁRIO',
        items: [
          'Transporte de cargas em vagões ferroviários', 'Logística de grãos, minérios e combustibles', 'Integração com portos e terminais intermodais', 'Operação de terminais ferroviários de carga', 'Expansão e manutenção de infraestrutura ferroviária'
        ]
      },
      {
        category: '4. TRANSPORTE AÉREO (CARGA AÉREA)',
        items: [
          'Transporte de cargas urgentes e de alto valor', 'Logística internacional via carga aérea', 'Consolidação e desconsolidação de cargas aéreas', 'Operação em terminais de carga (cargo terminals)', 'Distribuição expressa nacional e internacional'
        ]
      },
      {
        category: '5. TRANSPORTE MARÍTIMO E FLUVIAL',
        items: [
          '5.1 Transporte Marítimo:', 'Transporte de contêineres (FCL/LCL)', 'Transporte de granel sólido e líquido', 'Operações de cabotagem', 'Frete internacional marítimo', 'Logística portuária integrada',
          '5.2 Transporte Fluvial:', 'Transporte em hidrovias internas', 'Logística de grãos, combustibles e insumos', 'Integração com portos secos e terminais logísticos', 'Operação de balsas e embarcações de carga'
        ]
      },
      {
        category: '6. LOGÍSTICA INTEGRADA',
        items: [
          '6.1 Supply Chain Management:', 'Gestão completa da cadeia de suprimentos', 'Planejamento de demanda e abastecimento', 'Gestão de estoque e armazenagem', 'Coordenação de fornecedores e distribuição', 'Otimização de fluxo logístico',
          '6.2 Centros Logísticos:', 'Centros de distribuição (CDs)', 'Armazéns alfandegados (portos secos – EADI)', 'Cross docking e hubs logísticos', 'Gestão de estoques avançados', 'Automação de armazenagem',
          '6.3 Logística Operacional:', 'Roteirização inteligente de entregas', 'Gestão de frota e telemetria', 'Controle de combustible e eficiência logística', 'Monitoramento em tempo real (tracking)', 'Gestão de SLA de entregas'
        ]
      },
      {
        category: '7. ENTREGAS E LAST MILE',
        items: [
          'Entregas expressas urbanas', 'Entregas programadas B2B e B2C', 'Logística de e-commerce', 'Entregas críticas (same day / next day)', 'Logística reversa (devoluções e reciclagem)', 'Serviços de motofrete e pequenas cargas'
        ]
      },
      {
        category: '8. TRANSPORTE ESPECIALIZADO',
        items: [
          'Transporte de cargas indivisíveis', 'Transporte de máquinas e equipamentos pesados', 'Transporte de estruturas industriais', 'Transporte de materiais perigosos (conforme regulamentação)', 'Transporte de obras de engenharia e infraestrutura'
        ]
      },
      {
        category: '9. ARMAZENAGEM E OPERAÇÕES LOGÍSTICAS',
        items: [
          'Armazenagem geral e industrial', 'Armazenagem refrigerada e climatizada', 'Gestão de estoques em tempo real', 'Movimentação interna de cargas', 'Embalagem, etiquetagem e separação de pedidos', 'Inventário e controle logístico'
        ]
      },
      {
        category: '10. TECNOLOGIA E GESTÃO LOGÍSTICA',
        items: [
          'Sistemas TMS (Transportation Management System)', 'Sistemas WMS (Warehouse Management System)', 'Rastreamento via GPS e IoT', 'Inteligência artificial para otimização térmica', 'Big data para otimização de rotas', 'Automação de operações logísticas'
        ]
      },
      {
        category: '11. SUSTENTABILIDADE LOGÍSTICA',
        items: [
          'Logística verde (Green Logistics)', 'Redução de emissões de CO₂ no transporte', 'Otimização de rotas para eficiência energética', 'Uso de veículos elétricos e híbridos', 'Gestão de carbono na cadeia logística', 'Certificação ambiental de operações logísticas'
        ]
      },
      {
        category: '12. GESTÃO E CONSULTORIA LOGÍSTICA',
        items: [
          'Planejamento estratégico logístico', 'Implantação de operações logísticas completas', 'Auditoria de cadeia de suprimentos', 'Consultoria em redução de custos logísticos', 'Estruturação de redes de distribuição', 'Integração logística para grandes grupos corporativos'
        ]
      }
    ]
  },
  {
    id: 'seguranca',
    title: 'Segurança e Vigilância',
    description: 'Proteção patrimonial e vigilância especializada para garantir a integridade do seu negócio.',
    icon: Shield,
    details: [
      {
        category: '1. SEGURANÇA PATRIMONIAL (PROTEÇÃO DE BENS)',
        items: [
          '1.1 Vigilância Patrimonial:', 'Vigilância armada e desarmada', 'Controle de acesso em portarias', 'Rondas internas e externas', 'Monitoramento de perímetro', 'Proteção de instalações industriais e comerciais',
          '1.2 Segurança de Instalações:', 'Segurança de edifícios corporativos', 'Segurança de condomínios residenciais e comerciais', 'Segurança de galpões e centros logísticos', 'Segurança de obras e canteiros de construção', 'Proteção de áreas críticas e estratégicas'
        ]
      },
      {
        category: '2. CONTROLE DE ACESSO',
        items: [
          'Controle de entrada e saída de pessoas', 'Controle de veículos e cargas', 'Identificação biométrica e digital', 'Gestão de visitantes e prestadores de serviço', 'Sistemas de catracas e barreiras físicas', 'Integração com sistemas eletrônicos de segurança'
        ]
      },
      {
        category: '3. MONITORAMENTO ELETRÔNICO',
        items: [
          '3.1 Sistemas de CFTV:', 'Monitoramento por câmeras (CFTV analógico e IP)', 'Central de monitoramento 24h', 'Gravação e armazenamento de imagens', 'Análise inteligente de vídeo (IA)', 'Reconhecimento facial e de placas',
          '3.2 Alarmes e Sensores:', 'Sistemas de alarme contra intrusão', 'Sensores de presença e movimento', 'Alarmes perimetrais', 'Monitoramento remoto de segurança', 'Integração com centrais de resposta'
        ]
      },
      {
        category: '4. SEGURANÇA ARMADA E DESARMADA',
        items: [
          '4.1 Segurança Armada:', 'Vigilância armada em instalações críticas', 'Escolta armada de valores e cargas', 'Proteção de executivos e autoridades', 'Segurança em eventos de alto risco', 'Patrulhamento armado preventivo',
          '4.2 Segurança Desarmada:', 'Controle de acesso corporativo', 'Vigilância preventiva em ambientes internos', 'Recepção e triagem de visitantes', 'Segurança em eventos e feiras', 'Apoio à segurança operacional'
        ]
      },
      {
        category: '5. SEGURANÇA ELETRÔNICA INTEGRADA',
        items: [
          'Sistemas de segurança integrados (PSIM)', 'Monitoramento em tempo real via centro de controle', 'Integração de CFTV, alarmes e controle de acesso', 'Automação de respostas de segurança', 'Inteligência artificial aplicada à vigilância', 'Segurança baseada em análise de dados'
        ]
      },
      {
        category: '6. SEGURANÇA DE EVENTOS',
        items: [
          'Segurança de shows e eventos corporativos', 'Controle de multidões e acessos', 'Gestão de fluxos de pessoas', 'Segurança VIP e camarotes', 'Planejamento de segurança preventiva', 'Coordenação com órgãos públicos'
        ]
      },
      {
        category: '7. SEGURANÇA CORPORATIVA',
        items: [
          'Proteção de executivos (Executive Protection)', 'Segurança de informações e inteligência corporativa', 'Gestão de riscos corporativos', 'Segurança de ativos estratégicos', 'Investigação interna corporativa', 'Prevenção de fraudes e ameaças internas'
        ]
      },
      {
        category: '8. ESCOLTA E TRANSPORTE DE VALORES',
        items: [
          'Escolta armada de cargas de alto valor', 'Transporte seguro de numerário', 'Proteção de cargas sensíveis e estratégicas', 'Roteirização segura de transporte', 'Monitoramento em tempo real de deslocamentos', 'Logística segura de ativos'
        ]
      },
      {
        category: '9. SEGURANÇA INDUSTRIAL E CRÍTICA',
        items: [
          'Segurança em plantas industriais', 'Proteção de áreas de risco elevado', 'Segurança em refinarias, usinas e mineradoras', 'Controle de acesso em áreas restritas', 'Segurança de infraestrutura crítica (energia, água, telecom)', 'Protocolos de segurança operacional (SOP)'
        ]
      },
      {
        category: '10. SEGURANÇA EM OBRAS E INFRAESTRUTURA',
        items: [
          'Vigilância de canteiros de obras', 'Controle de acesso de trabalhadores e máquinas', 'Proteção de materiais e equipamentos', 'Monitoramento de áreas de risco', 'Segurança em obras de grande porte', 'Integração com engenharia de segurança'
        ]
      },
      {
        category: '11. INTELIGÊNCIA E ANÁLISE DE RISCO',
        items: [
          'Análise de risco operacional', 'Mapeamento de vulnerabilidades', 'Inteligência preventiva de ameaças', 'Monitoramento de comportamento suspeito', 'Relatórios de segurança estratégica', 'Gestão de crise e resposta rápida'
        ]
      },
      {
        category: '12. SEGURANÇA TECNOLÓGICA AVANÇADA',
        items: [
          'Reconhecimento facial e biometria', 'Inteligência artificial para vigilância', 'Drones de monitoramento de segurança', 'Geolocalização de ativos e equipes', 'Análise preditiva de riscos', 'Automação de segurança integrada'
        ]
      },
      {
        category: '13. SEGURANÇA PRIVADA RESIDENCIAL',
        items: [
          'Segurança em condomínios residenciais', 'Rondas motorizadas e a pé', 'Monitoramento de residências de alto padrão', 'Controle de acesso de visitantes', 'Segurança perimetral residencial', 'Apoio a sistemas de alarme doméstico'
        ]
      },
      {
        category: '14. CONSULTORIA EM SEGURANÇA PRIVADA',
        items: [
          'Planejamento de segurança corporativa', 'Auditoria de sistemas de segurança', 'Estruturação de planos de segurança patrimonial', 'Adequação a normas da Polícia Federal (segurança privada)', 'Treinamento de equipes de segurança', 'Gestão integrada de segurança corporativa'
        ]
      },
      {
        category: '15. SEGURANÇA SUSTENTÁVEL E INTEGRADA',
        items: [
          'Segurança integrada a ESG corporativo', 'Redução de impacto operacional em segurança', 'Eficiência energética em sistemas de vigilância', 'Segurança inteligente (smart security)', 'Integração com cidades inteligentes', 'Gestão sustentável de operações de segurança'
        ]
      }
    ]
  },
  {
    id: 'mercado-livre-energia',
    title: 'Mercado Livre de Energia (ACL)',
    description: 'Migração, gestão e otimização de custos no Ambiente de Contratação Livre para empresas e indústrias.',
    icon: Zap,
    details: [
      {
        category: '1. MERCADO LIVRE DE ENERGIA (ACL – AMBIENTE DE CONTRATAÇÃO LIVRE)',
        items: [
          '1.1 Estruturação e Migração:', 'Análise de viabilidade para migração ao Mercado Livre', 'Gestão do processo de migração junto à CCEE', 'Adequação regulatória e documental do consumidor livre', 'Estratégia de contratação de energia (curto, médio e longo prazo)', 'Planejamento de demanda contratada',
          '1.2 Gestão de Contratos de Energia:', 'Negociação de contratos bilaterais de energia (PPAs)', 'Gestão de preços, indexadores e sazonalização', 'Administração de contratos no ACL', 'Renegociação de contratos energéticos', 'Gestão de riscos de exposição ao PLD',
          '1.3 Gestão Operacional e Financeira:', 'Monitoramento de consumo e medição (medição fiscal CCEE)', 'Gestão de liquidação financeira na CCEE', 'Otimização de custos de energia', 'Gestão de crédito e exposição de mercado', 'Relatórios de performance energética',
          '1.4 Consultoria e Inteligência Energética:', 'Estudos de mercado e projeção de preços (PLD)', 'Estratégias de hedge energético', 'Modelagem de portfólio de energia', 'Auditoria energética corporativa', 'Planejamento energético estratégico'
        ]
      },
      {
        category: '2. ENERGIA SOLAR (FOTOVOLTAICA)',
        items: [
          '2.1 Geração Solar:', 'Projetos de usinas solares (UFV)', 'Instalação de sistemas fotovoltaicos industriais e residenciais', 'Fazendas solares (solar farms)', 'Sistemas híbridos (solar + rede + baterias)', 'Expansão e retrofit de usinas solares',
          '2.2 Engenharia Solar:', 'Estudos de irradiação solar e viabilidade', 'Projetos elétricos de conexão à rede', 'Dimensionamento de sistemas fotovoltaicos', 'Engenharia de integração com subestações', 'Automação e monitoramento de geração',
          '2.3 Operação e Manutenção Solar:', 'Limpeza e manutenção de módulos fotovoltaicos', 'Monitoramento remoto de performance (SCADA solar)', 'Manutenção preventiva e corretiva', 'Diagnóstico de falhas e degradação', 'Gestão de eficiência energética'
        ]
      },
      {
        category: '3. ENERGIA TERMOELÉTRICA',
        items: [
          '3.1 Geração Termoelétrica:', 'Usinas a gás natural', 'Usinas a biomassa', 'Usinas a óleo combustível ou diesel', 'Ciclos combinados (CCGT)', 'Cogeração de energia industrial',
          '3.2 Engenharia e Implantação:', 'Projetos de plantas termoelétricas', 'Sistemas de geração e caldeiras industriais', 'Turbinas a vapor e a gás', 'Sistemas de controle térmico e automação', 'Integração com rede elétrica nacional',
          '3.3 Operação e Eficiência:', 'Otimização de consumo de combustível', 'Controle de emissões atmosféricas', 'Eficiência térmica e energética', 'Manutenção de turbinas e geradores', 'Gestão ambiental e licenciamento'
        ]
      },
      {
        category: '4. ENERGIA HIDRELÉTRICA',
        items: [
          '4.1 Geração Hidrelétrica:', 'Pequenas Centrais Hidrelétricas (PCH)', 'Usinas hidrelétricas de médio e grande porte', 'Sistemas de turbinas hidráulicas', 'Aproveitamento de recursos hídricos', 'Expansão de capacidade instalada',
          '4.2 Engenharia Hidrelétrica:', 'Estudos hidrológicos e de vazão', 'Projetos de barragens e reservatórios', 'Casas de força e sistemas geradores', 'Integração com transmissão de energia', 'Controle de fluxo e segurança hídrica',
          '4.3 Operação e Manutenção:', 'Monitoramento de nível de reservatórios', 'Manutenção de turbinas e comportas', 'Controle de geração energética', 'Gestão de segurança de barragens', 'Eficiência operacional hidrelétrica'
        ]
      },
      {
        category: '5. ENERGIA EÓLICA',
        items: [
          '5.1 Geração Eólica:', 'Parques eólicos onshore (em terra)', 'Parques eólicos offshore (marítimos)', 'Turbinas e aerogeradores', 'Expansão de parques existentes', 'Integração com redes elétricas',
          '5.2 Engenharia Eólica:', 'Estudos de vento (anemometria e mapeamento eólico)', 'Projetos de layout de parques eólicos', 'Instalação de torres e aerogeradores', 'Infraestrutura elétrica de geração', 'Subestações e conexão à rede',
          '5.3 Operação e Manutenção:', 'Monitoramento de performance dos aerogeradores', 'Manutenção preventiva de turbinas', 'Substituição de componentes críticos', 'Gestão de eficiência energética eólica', 'Diagnóstico remoto e SCADA'
        ]
      },
      {
        category: '6. ENERGIAS HÍBRIDAS E SISTEMAS INTEGRADOS',
        items: [
          'Sistemas híbridos (solar + eólica + térmica + rede)', 'Microgrids industriais e urbanos', 'Sistemas de armazenamento de energia (baterias – BESS)', 'Integração com geração distribuída (GD)', 'Gestão inteligente de múltiplas fontes energéticas'
        ]
      },
      {
        category: '7. INFRAESTRUTURA ELÉTRICA ASSOCIADA',
        items: [
          'Subestações de média e alta tensão', 'Linhas de transmissão e distribuição', 'Sistemas de proteção e controle', 'Integração com redes da concessionária', 'Sistemas SCADA e automação energética'
        ]
      },
      {
        category: '8. CONSULTORIA ESTRATÉGICA ENERGÉTICA',
        items: [
          'Planejamento energético corporativo', 'Estruturação de autoprodução de energia', 'Projetos de redução de custo energético', 'Modelagem de investimentos em energia', 'ESG e transição energética corporativa', 'Certificados de energia renovável (I-REC)'
        ]
      },
      {
        category: '9. SUSTENTABILIDADE E REGULAÇÃO',
        items: [
          'Licenciamento ambiental energético', 'Conformidade com ANEEL e CCEE', 'Créditos de carbono e energia limpa', 'Estudos de impacto ambiental energético', 'Estratégias ESG para geração de energia'
        ]
      }
    ]
  },
  {
    id: 'pintura-predial',
    title: 'Pintura Predial',
    description: 'Serviços especializados de pintura e restauração de fachadas para condomínios e edifícios comerciais.',
    icon: Paintbrush,
    details: [
      {
        category: '1. PINTURA PREDIAL (EDIFICAÇÕES EM GERAL)',
        items: [
          '1.1 Pintura Externa:', 'Pintura de fachadas prediais', 'Pintura de muros e áreas externas', 'Aplicação de texturas e revestimentos acrílicos', 'Impermeabilização com pintura elastomérica', 'Pintura de estruturas expostas (concreto e alvenaria)',
          '1.2 Pintura Interna:', 'Pintura de paredes internas residenciais e comerciais', 'Aplicação de massa corrida e nivelamento', 'Pintura de tetos e forros', 'Pintura decorativa e acabamento fino', 'Reparo de superfícies antes da pintura',
          '1.3 Recuperação e Manutenção Predial:', 'Repintura geral de edifícios', 'Correção de fissuras e trincas', 'Tratamento de umidade e infiltrações', 'Restauração estética de fachadas', 'Manutenção periódica de pintura predial'
        ]
      },
      {
        category: '2. PINTURA INDUSTRIAL',
        items: [
          '2.1 Estruturas Metálicas:', 'Pintura anticorrosiva em estruturas metálicas', 'Proteção contra oxidação (galvanização e primers especiais)', 'Pintura de galpões industriais e estruturas pesadas', 'Pintura de torres, tubulações e equipamentos industriais', 'Aplicação de epóxi e poliuretano industrial',
          '2.2 Equipamentos Industriais:', 'Pintura de máquinas e equipamentos', 'Pintura de tanques de armazenamento', 'Pintura de dutos industriais', 'Revestimentos de alta resistência química', 'Pintura de pisos industriais (epóxi e PU)',
          '2.3 Proteção Técnica Industrial:', 'Revestimentos anticorrosivos especiais', 'Proteção contra produtos químicos e abrasão', 'Pintura resistente a altas temperaturas', 'Sistemas de proteção industrial pesada', 'Normas técnicas de pintura industrial (ABNT e NRs)'
        ]
      },
      {
        category: '3. PINTURA COMERCIAL',
        items: [
          '3.1 Ambientes Comerciais:', 'Pintura de lojas e shoppings', 'Pintura de escritórios corporativos', 'Pintura de fachadas comerciais', 'Pintura de vitrines e áreas de exposição', 'Padronização visual de marcas e franquias',
          '3.2 Ambientes Institucionais:', 'Pintura de escolas e universidades', 'Pintura de hospitais e clínicas', 'Pintura de prédios públicos', 'Pintura de ambientes administrativos', 'Pintura de áreas de atendimento ao público',
          '3.3 Pintura Decorativa Comercial:', 'Pintura com identidade visual corporativa', 'Efeitos decorativos e texturas especiais', 'Pintura de sinalização interna', 'Pintura artística e branding ambiental', 'Ambientação visual de espaços comerciais'
        ]
      },
      {
        category: '4. PINTURA RESIDENCIAL',
        items: [
          '4.1 Pintura Interna Residencial:', 'Pintura de salas, quartos e cozinhas', 'Aplicação de tintas acrílicas e laváveis', 'Pintura decorativa personalizada', 'Texturas e efeitos decorativos', 'Reforma estética de interiores',
          '4.2 Pintura Externa Residencial:', 'Pintura de fachadas residenciais', 'Pintura de muros e cercas', 'Impermeabilização de áreas externas', 'Proteção contra intempéries', 'Recuperação estética de residências',
          '4.3 Acabamentos Residenciais:', 'Correção de imperfeições em paredes', 'Aplicação de massa corrida e gesso', 'Preparação de superfícies', 'Retoques e manutenção periódica', 'Pintura de portões, grades e estruturas metálicas'
        ]
      },
      {
        category: '5. PREPARAÇÃO DE SUPERFÍCIES',
        items: [
          'Lixamento e limpeza técnica de superfícies', 'Remoção de tintas antigas', 'Tratamento de mofo e umidade', 'Correção de trincas e fissuras', 'Aplicação de seladores e primers', 'Nivelamento de superfícies'
        ]
      },
      {
        category: '6. REVESTIMENTOS E ACABAMENTOS ESPECIAIS',
        items: [
          'Pintura epóxi (pisos industriais e comerciais)', 'Pintura poliuretano (alta durabilidade)', 'Texturas acrílicas e projetadas', 'Revestimentos impermeabilizantes', 'Pintura térmica e refletiva', 'Pintura acústica e funcional'
        ]
      },
      {
        category: '7. PINTURA TÉCNICA E ESPECIALIZADA',
        items: [
          'Pintura hospitalar com padrão sanitário', 'Pintura para ambientes alimentícios (ANVISA)', 'Pintura para salas limpas (clean rooms)', 'Pintura em áreas de alta exigência técnica', 'Pintura resistente a produtos químicos', 'Pintura para áreas industriais críticas'
        ]
      },
      {
        category: '8. IMPERMEABILIZAÇÃO E PROTEÇÃO SUPERFICIAL',
        items: [
          'Impermeabilização de fachadas', 'Selagem de concreto e alvenaria', 'Proteção contra infiltrações', 'Revestimentos hidrorrepelentes', 'Proteção UV para superfícies externas', 'Sistemas de proteção prolongada de pintura'
        ]
      },
      {
        category: '9. PINTURA EM INFRAESTRUTURAS E OBRAS PESADAS',
        items: [
          'Pintura de pontes e viadutos', 'Pintura de estruturas metálicas pesadas', 'Pintura de obras rodoviárias e urbanas', 'Pintura de aeroportos e terminais logísticos', 'Pintura de portos e estruturas marítimas', 'Pintura de obras industriais de grande porte'
        ]
      },
      {
        category: '10. CONSULTORIA E GESTÃO DE PINTURA',
        items: [
          'Especificação técnica de sistemas de pintura', 'Escolha de materiais e tintas adequadas', 'Gestão de manutenção preventiva de pintura', 'Inspeção técnica de revestimentos', 'Auditoria de qualidade em pintura', 'Planejamento de cronogramas de pintura'
        ]
      },
      {
        category: '11. SUSTENTABILIDADE EM PINTURA',
        items: [
          'Uso de tintas de baixa emissão (VOC reduzido)', 'Materiais ecológicos e sustentáveis', 'Redução de resíduos na aplicação', 'Sistemas de pintura de alta durabilidade', 'Eficiência energética em revestimentos (tintas térmicas)', 'Conformidade com normas ambientais (ESG)'
        ]
      }
    ]
  },
  {
    id: 'pmoc-climatizacao',
    title: 'PMOC e sistemas de climatização',
    description: 'Plano de Manutenção Operação e Controle conforme legislação sanitária e gestão completa de sistemas de climatização.',
    icon: Wind,
    details: [
      {
        category: '1. PMOC – PLANO DE MANUTENÇÃO, OPERAÇÃO E CONTROLE',
        items: [
          '1.1 Estruturação do PMOC:', 'Elaboração do PMOC conforme Lei nº 13.589/2018', 'Diagnóstico inicial dos sistemas de climatização', 'Inventário completo dos equipamentos de ar-condicionado', 'Definição de rotinas de manutenção preventiva', 'Adequação às normas da ANVISA e ABNT',
          '1.2 Gestão do PMOC:', 'Controle documental e técnico do sistema', 'Relatórios periódicos de manutenção', 'Monitoramento de qualidade do ar interno (QAI)', 'Registro de intervenções técnicas', 'Auditoria de conformidade do PMOC'
        ]
      },
      {
        category: '2. SISTEMAS DE AR-CONDICIONADO RESIDENCIAL',
        items: [
          '2.1 Instalação e Manutenção:', 'Instalação de split e multi-split', 'Instalação de ar-condicionado inverter', 'Instalação de aparelhos de janela', 'Manutenção preventiva e corretiva residencial', 'Limpeza e higienização de filtros e evaporadoras',
          '2.2 Serviços Técnicos:', 'Reposição de gás refrigerante', 'Detecção e correção de vazamentos', 'Troca de compressores e peças', 'Otimização de consumo energético', 'Avaliação de desempenho térmico'
        ]
      },
      {
        category: '3. SISTEMAS COMERCIAIS E CORPORATIVOS',
        items: [
          '3.1 Sistemas de Médio Porte:', 'Instalação de sistemas split dutado', 'Sistemas VRF/VRV (fluxo de refrigerante variável)', 'Climatização de escritórios e lojas', 'Sistemas de controle centralizado', 'Balanceamento de carga térmica',
          '3.2 Manutenção Corporativa:', 'PMOC em edifícios comerciais', 'Manutenção preventiva programada', 'Higienização de dutos e evaporadoras', 'Troca de filtros e componentes críticos', 'Monitoramento de eficiência energética'
        ]
      },
      {
        category: '4. SISTEMAS INDUSTRIAIS E DE GRANDE PORTE',
        items: [
          '4.1 Climatização Industrial:', 'Sistemas centrais de água gelada (chillers)', 'Torres de resfriamento industriais', 'Sistemas HVAC industriais completos', 'Climatização de galpões e fábricas', 'Controle de temperatura em áreas críticas',
          '4.2 Engenharia de Sistemas:', 'Projetos de climatização industrial', 'Dimensionamento térmico de grandes ambientes', 'Automação de sistemas HVAC', 'Integração com sistemas elétricos e BMS', 'Otimização de eficiência energética industrial',
          '4.3 Manutenção Avançada:', 'Manutenção preditiva de sistemas HVAC', 'Análise de vibração e desempenho de compressores', 'Limpeza técnica de dutos industriais', 'Substituição de equipamentos de grande porte', 'Gestão de operação contínua 24/7'
        ]
      },
      {
        category: '5. SISTEMAS ESPECIAIS DE CLIMATIZAÇÃO',
        items: [
          '5.1 Ambientes Críticos:', 'Climatização de hospitais e clínicas', 'Salas limpas (clean rooms)', 'Data centers e servidores', 'Laboratórios farmacêuticos e químicos', 'Ambientes de alta precisão industrial',
          '5.2 Controle Avançado:', 'Controle de umidade e temperatura precisos', 'Filtragem HEPA e ultrafiltração do ar', 'Pressurização de ambientes controlados', 'Sistemas de ar positivo e negativo', 'Monitoramento contínuo da qualidade do ar (IAQ)'
        ]
      },
      {
        category: '6. QUALIDADE DO AR INTERNO (QAI)',
        items: [
          'Análise da qualidade do ar interno', 'Controle de fungos, bactérias e partículas', 'Medição de CO₂ e contaminantes', 'Higienização ambiental técnica', 'Certificação de ambientes saudáveis', 'Conformidade com normas da ANVISA e ABNT'
        ]
      },
      {
        category: '7. LIMPEZA E HIGIENIZAÇÃO TÉCNICA',
        items: [
          'Limpeza de evaporadoras e condensadoras', 'Desinfecção de sistemas de climatização', 'Higienização de dutos de ar', 'Remoção de biofilme e contaminantes', 'Limpeza química e mecânica de sistemas HVAC', 'Sanitização de ambientes climatizados'
        ]
      },
      {
        category: '8. EFICIÊNCIA ENERGÉTICA EM CLIMATIZAÇÃO',
        items: [
          'Redução de consumo energético de HVAC', 'Substituição por sistemas inverter e eficientes', 'Automação de controle térmico', 'Otimização de carga térmica', 'Monitoramento de consumo em tempo real', 'Integração com energia solar e mercado livre'
        ]
      },
      {
        category: '9. ENGENHARIA E PROJETOS DE HVAC',
        items: [
          'Projetos completos de climatização (HVAC)', 'Cálculo de carga térmica', 'Projetos de dutos e distribuição de ar', 'Integração com arquitetura e engenharia elétrica', 'Compatibilização BIM de sistemas HVAC', 'Estudos de viabilidade técnica'
        ]
      },
      {
        category: '10. SUSTENTABILIDADE E REFRIGERAÇÃO VERDE',
        items: [
          'Uso de gases refrigerantes ecológicos (baixo GWP)', 'Sistemas de climatização de baixa emissão', 'Reciclagem de componentes e fluidos refrigerantes', 'Redução de impacto ambiental em HVAC', 'Certificação ambiental de sistemas de climatização', 'Integração com ESG corporativo'
        ]
      },
      {
        category: '11. AUTOMAÇÃO E MONITORAMENTO INTELIGENTE',
        items: [
          'Sistemas BMS (Building Management System)', 'Controle remoto de climatização', 'Sensores de temperatura e umidade inteligentes', 'Monitoramento em tempo real de HVAC', 'Inteligência artificial para otimização térmica', 'Manutenção preditiva baseada em dados'
        ]
      },
      {
        category: '12. CONSULTORIA E GESTÃO PMOC',
        items: [
          'Implantação de programas PMOC completos', 'Auditoria técnica de sistemas HVAC', 'Adequação legal e normativa', 'Gestão de contratos de manutenção', 'Treinamento de equipes técnicas', 'Certificação de conformidade sanitária'
        ]
      }
    ]
  },
  {
    id: 'retrofit',
    title: 'RETROFIT (Modernização de edificações)',
    description: 'Restauração e modernização completa de edifícios para elevar o padrão tecnológico, estético e funcional.',
    icon: RefreshCcw,
    details: [
      {
        category: '1. RETROFIT (MODERNIZAÇÃO DE EDIFICAÇÕES)',
        items: [
          '1.1 Retrofit Estrutural e Funcional:', 'Reforço estrutural de edificações antigas', 'Substituição e modernização de sistemas construtivos', 'Adequação de estruturas para novas cargas e usos', 'Recuperação de concreto armado e estruturas metálicas', 'Correção de patologias construtivas (fissuras, corrosão, recalques)',
          '1.2 Retrofit Arquitetônico:', 'Modernização de fachadas', 'Redesign de interiores e layouts corporativos', 'Atualização estética de edificações antigas', 'Requalificação de espaços comerciais e industriais', 'Integração de novos padrões arquitetônicos',
          '1.3 Retrofit Técnico (Instalações):', 'Atualização de instalações elétricas e hidráulicas', 'Substituição de sistemas antigos por tecnologias modernas', 'Automação predial (BMS)', 'Adequação às normas atuais (NRs, ABNT, segurança)', 'Eficiência energética e hídrica'
        ]
      },
      {
        category: '2. CONSTRUÇÕES EM GERAL',
        items: [
          '2.1 Construção Civil Residencial:', 'Construção de casas e condomínios residenciais', 'Edificações multifamiliares (prédios e residenciais verticais)', 'Obras de alto padrão e luxo', 'Ampliações residenciais',
          '2.2 Construção Comercial:', 'Lojas, shoppings e centros comerciais', 'Escritórios corporativos e edifícios empresariais', 'Hotéis, pousadas e empreendimentos turísticos', 'Restaurantes e estruturas gastronômicas',
          '2.3 Construção Industrial:', 'Galpões industriais e logísticos', 'Fábricas e plantas produtivas', 'Centros de distribuição (CDs)', 'Estruturas metálicas e pré-moldadas industriais'
        ]
      },
      {
        category: '3. REFORMAS EM GERAL',
        items: [
          '3.1 Reformas Residenciais:', 'Reformas completas de casas e apartamentos', 'Reformas de cozinhas, banheiros e áreas externas', 'Troca de revestimentos, pisos e acabamentos', 'Ampliação de ambientes',
          '3.2 Reformas Comerciais:', 'Reformas de lojas e escritórios', 'Adequação de layout comercial', 'Rebranding físico de espaços', 'Atualização de infraestrutura para operação',
          '3.3 Reformas Industriais:', 'Adequação de plantas industriais', 'Reorganização de linhas de produção', 'Modernização de áreas operacionais', 'Adequação de segurança e normas técnicas'
        ]
      },
      {
        category: '4. MÉTODOS CONSTRUTIVOS',
        items: [
          '4.1 Métodos Tradicionais:', 'Alvenaria estrutural', 'Concreto armado convencional', 'Estruturas metálicas tradicionais', 'Obras moldadas in loco',
          '4.2 Métodos Industrializados:', 'Pré-moldados de concreto', 'Estruturas metálicas industrializadas', 'Sistemas modularizados (off-site construction)', 'Construção seca (drywall e steel frame)',
          '4.3 Métodos Sustentáveis:', 'Construção sustentável e ecológica', 'Uso de materiais recicláveis e de baixo impacto', 'Eficiência energética integrada ao projeto', 'Sistemas de reuso de água e energia solar', 'Certificações ambientais (LEED, AQUA, EDGE)'
        ]
      },
      {
        category: '5. REQUALIFICAÇÃO E MODERNIZAÇÃO URBANA',
        items: [
          'Reurbanização de áreas degradadas', 'Revitalização de centros urbanos', 'Recuperação de patrimônios históricos', 'Requalificação de espaços públicos', 'Reestruturação de áreas industriais desativadas'
        ]
      },
      {
        category: '6. SERVIÇOS TÉCNICOS DE APOIO À OBRA',
        items: [
          'Diagnóstico estrutural e laudos técnicos', 'Engenharia diagnóstica (patologias construtivas)', 'Planejamento e gestão de obras', 'Orçamento e controle físico-financeiro', 'Compatibilização de projetos (BIM)', 'Fiscalização e gerenciamento de obra'
        ]
      },
      {
        category: '7. ACABAMENTOS E FINALIZAÇÃO DE OBRAS',
        items: [
          'Revestimentos internos e externos', 'Pintura industrial, comercial e residencial', 'Instalação de pisos, forros e divisórias', 'Acabamento arquitetônico de alto padrão', 'Detalhamento de interiores'
        ]
      },
      {
        category: '8. INFRAESTRUTURA DE REFORMA E SUPORTE',
        items: [
          'Demolições controladas', 'Remoção e descarte de entulho', 'Adequação de canteiro de obras', 'Logística de materiais e equipamentos', 'Segurança do trabalho em reformas (NR-18 e NR-35)'
        ]
      }
    ]
  },
  {
    id: 'terraplanagem',
    title: 'Terraplanagem e Movimentação',
    description: 'Execução técnica de escavação, nivelamento e movimentação de grandes volumes de terra para infraestrutura.',
    icon: Mountain,
    details: [
      {
        category: '1. Serviços de Levantamento e Preparação do Terreno',
        items: [
          'Limpeza e destocamento de área (remoção de vegetação, raízes e materiais orgânicos)', 'Remoção de entulho superficial', 'Sondagem e análise preliminar do solo', 'Locação topográfica da obra', 'Marcação de níveis e cotas de projeto'
        ]
      },
      {
        category: '2. Corte, Escavação e Remoção de Solo',
        items: [
          'Escavação mecanizada (retroescavadeira, escavadeira hidráulica)', 'Escavação manual (áreas restritas ou de precisão)', 'Corte de terreno em solo natural', 'Abertura de valas, trincheiras e fundações', 'Escavação em rocha (com rompedor hidráulico ou detonação controlada, quando aplicável)'
        ]
      },
      {
        category: '3. Aterro e Compactação',
        items: [
          'Transporte e lançamento de material de aterro', 'Espalhamento de solo em camadas', 'Compactação com rolo compactador liso, pé de carneiro ou placa vibratória', 'Controle de umidade do solo para compactação ideal', 'Execução de aterros estruturais'
        ]
      },
      {
        category: '4. Movimentação e Transporte de Terras',
        items: [
          'Carga e descarga de material', 'Transporte interno em obra (bota-fora e áreas de empréstimo)', 'Transporte externo de solo e entulho', 'Gerenciamento de bota-fora licenciado', 'Reaproveitamento de material escavado'
        ]
      },
      {
        category: '5. Regularização e Nivelamento de Terreno',
        items: [
          'Terraplenagem de corte e aterro balanceado', 'Nivelamento fino de áreas industriais e residenciais', 'Conformação de taludes', 'Execução de platôs e plataformas', 'Ajuste de greide (nível final do terreno)'
        ]
      },
      {
        category: '6. Drenagem e Estabilização do Solo',
        items: [
          'Execução de valas de drenagem', 'Instalação de drenos subterrâneos', 'Controle de erosão e assoreamento', 'Aplicação de materiais estabilizantes (cal, cimento, geotêxteis)', 'Proteção de taludes (hidrossemeadura, contenções leves)'
        ]
      },
      {
        category: '7. Serviços Complementares de Engenharia de Solo',
        items: [
          'Ensaios de compactação (Proctor)', 'Controle tecnológico do solo', 'Relatórios geotécnicos de execução', 'Monitoramento de recalques', 'Adequação ambiental da área (licenciamento e PRAD quando aplicável)'
        ]
      },
      {
        category: '8. Infraestrutura de Apoio à Obra',
        items: [
          'Abertura de acessos provisórios', 'Plataformas para máquinas e canteiro de obras', 'Estradas internas de obra', 'Limpeza e manutenção de vias de acesso'
        ]
      }
    ]
  },
  {
    id: 'gestao-aeroportuaria',
    title: 'Gestão Aeroportuária',
    description: 'Soluções especializadas em administração, infraestrutura e segurança para operações aeroportuárias.',
    icon: Plane,
    details: [
      {
        category: '1. GESTÃO E ADMINISTRAÇÃO AEROPORTUÁRIA',
        items: [
          'Gestão aeroportuária', 'Administração aeroportuária', 'Operação aeroportuária', 'Gestão de aeroportos', 'Gestão de terminais aeroportuários', 'Gestão de infraestrutura aeroportuária', 'Planejamento aeroportuário', 'Coordenação operacional aeroportuária'
        ]
      },
      {
        category: '2. INFRAESTRUTURA E OPERAÇÕES DE PÁTIO',
        items: [
          'Gestão de pátio aeroportuário', 'Gestão de hangares', 'Gestão de pistas e taxiways', 'Gestão de slots aeroportuários', 'Controle operacional aeroportuário', 'Centro de operações aeroportuárias (COA)', 'Gestão de manutenção aeroportuária', 'Manutenção de infraestrutura aeroportuária', 'Operação de equipamentos aeroportuários', 'Gestão de frota aeroportuária'
        ]
      },
      {
        category: '3. FLUXO DE PASSAGEIROS E BAGAGENS',
        items: [
          'Gestão de fluxo de passageiros', 'Gestão de fluxo de bagagens', 'Atendimento ao passageiro', 'Customer experience aeroportuária', 'Gestão de lojas e áreas comerciais aeroportuárias'
        ]
      },
      {
        category: '4. CARGAS E LOGÍSTICA',
        items: [
          'Gestão de cargas aéreas', 'Logística aeroportuária', 'Gestão de carga aérea internacional', 'Operação de terminais de carga aérea', 'Gestão aduaneira aeroportuária', 'Gestão alfandegária aeroportuária'
        ]
      },
      {
        category: '5. SEGURANÇA E EMERGÊNCIA (AVSEC)',
        items: [
          'Segurança aeroportuária', 'AVSEC (Aviation Security)', 'Controle de acesso aeroportuário', 'Monitoramento aeroportuário', 'CFTV aeroportuário', 'Gestão de riscos aeroportuários', 'Plano de emergência aeroportuária', 'Gestão de crises aeroportuárias', 'Brigada de emergência aeroportuária', 'Prevenção e combate a incêndio aeroportuário'
        ]
      },
      {
        category: '6. SEGURANÇA OPERACIONAL (SAFETY) E COMPLIANCE',
        items: [
          'Gestão de segurança operacional (SGSO)', 'Safety management system (SMS)', 'Gestão de compliance aeronáutico', 'Compliance regulatório aeroportuário', 'Gestão documental aeronáutica', 'Auditoria aeroportuária', 'Auditoria operacional aeronáutica', 'Gestão de contratos aeroportuários', 'Gestão de concessionárias aeroportuárias'
        ]
      },
      {
        category: '7. FACILITIES E SUSTENTABILIDADE',
        items: [
          'Gestão de facilities aeroportuários', 'Facilities para aeroportos', 'Gestão de utilidades aeroportuárias', 'Gestão de energia aeroportuária', 'Gestão hídrica aeroportuária', 'Gestão de resíduos aeroportuários', 'Sustentabilidade aeroportuária', 'ESG aplicado à aviação'
        ]
      },
      {
        category: '8. GROUND HANDLING E SERVIÇOS DE RAMPA',
        items: [
          'Ground handling', 'Serviços de rampa', 'Pushback e towing', 'Gestão de abastecimento aeronáutico', 'Gestão de combustível aeronáutico', 'Gestão de catering aeroportuário', 'Gestão de limpeza aeroportuária'
        ]
      },
      {
        category: '9. MOBILIDADE E SERVIÇOS AUXILIARES',
        items: [
          'Gestão de estacionamento aeroportuário', 'Gestão de mobilidade aeroportuária', 'Gestão de transporte interno aeroportuário', 'Gestão de companhias aéreas parceiras'
        ]
      },
      {
        category: '10. TECNOLOGIA E ESTRATÉGIA NO FUTURO',
        items: [
          'Eficiência operacional aeroportuária', 'Gestão de receitas aeroportuárias', 'Gestão financeira aeroportuária', 'KPI aeroportuários', 'BI aeroportuário', 'Analytics operacional aeroportuário', 'Automação aeroportuária', 'Smart airports', 'IoT aplicado à aviação', 'Inteligência artificial aplicada à gestão aeroportuária', 'Sistemas integrados aeroportuários', 'Transformação digital aeroportuária'
        ]
      },
      {
        category: '11. PLANEJAMENTO E MEIO AMBIENTE',
        items: [
          'Gestão de slots e capacidade operacional', 'Planejamento de expansão aeroportuária', 'Gestão de obras aeroportuárias', 'Retrofit aeroportuário', 'Gestão ambiental aeroportuária', 'Monitoramento de ruído aeronáutico', 'Gestão de impactos ambientais aeroportuários', 'Gestão de fauna aeroportuária', 'Controle de risco aviário'
        ]
      },
      {
        category: '12. RELACIONAMENTO INSTITUCIONAL E CONSULTORIA',
        items: [
          'Gestão de continuidade operacional aeroportuária', 'Plano de contingência aeroportuária', 'Gestão de incidentes aeronáuticos', 'Interface com ANAC', 'Interface com Receita Federal', 'Interface com órgãos reguladores', 'Operador aeroportuário', 'Consultoria aeroportuária', 'Consultoria em aviação e operações aeroportuárias', 'Outsourcing aeroportuário', 'Gestão integrada de operações aeroportuárias', 'Coordenação multisserviços aeroportuários', 'Gestão patrimonial aeroportuária', 'Desenvolvimento de infraestrutura aeroportuária', 'Estratégia de competitividade aeroportuária', 'Operações inteligentes aeroportuárias'
        ]
      }
    ]
  },
  {
    id: 'instalacoes-eletricas',
    title: 'Instalações de Energia Elétrica',
    description: 'Projetos, execução e manutenção de infraestrutura elétrica de baixa, média e alta tensão com máxima segurança.',
    icon: Zap,
    details: [
      {
        category: '1. INSTALAÇÕES ELÉTRICAS DE PEQUENO PORTE',
        items: [
          '1.1 Residencial e Comercial Leve:', 'Instalações elétricas residenciais completas', 'Quadros de distribuição (QDC) e circuitos internos', 'Instalação de tomadas, interruptores e iluminação', 'Substituição e modernização de redes elétricas antigas', 'Instalação de chuveiros, ar-condicionado e cargas dedicadas', 'Correção de falhas elétricas e curtos-circuitos',
          '1.2 Pequenas Adequações e Manutenções:', 'Manutenção preventiva e corretiva elétrica', 'Adequação de carga elétrica residencial/comercial', 'Instalação de disjuntores e dispositivos de proteção (DR, DPS)', 'Pequenas ampliações de rede elétrica'
        ]
      },
      {
        category: '2. INSTALAÇÕES ELÉTRICAS DE MÉDIO PORTE',
        items: [
          '2.1 Comercial e Corporativo:', 'Projetos e execução elétrica para lojas, escritórios e prédios comerciais', 'Distribuição de energia em ambientes corporativos', 'Montagem de quadros gerais de baixa tensão (QGBT)', 'Sistemas de iluminação técnica e decorativa', 'Infraestrutura para redes de dados e energia integrada',
          '2.2 Condomínios e Edificações:', 'Instalações elétricas prediais completas', 'Sistemas de energia para áreas comuns (elevadores, bombas, portões)', 'Iluminação de emergência e sistemas de segurança elétrica', 'Cabeamento estruturado básico integrado',
          '2.3 Sistemas de Eficiência e Automação Básica:', 'Automação predial simples (sensores, temporizadores)', 'Correção de fator de potência', 'Adequação para eficiência energética', 'Sistemas de proteção elétrica intermediários'
        ]
      },
      {
        category: '3. INSTALAÇÕES ELÉTRICAS DE GRANDE PORTE',
        items: [
          '3.1 Indústrias e Complexos Industriais:', 'Projetos elétricos industriais completos', 'Subestações elétricas de média e alta tensão', 'Distribuição de energia em plantas industriais', 'Instalação de painéis de controle e CCM (Centro de Controle de Motores)', 'Sistemas de alta demanda energética',
          '3.2 Infraestrutura de Energia:', 'Linhas de transmissão e distribuição de energia', 'Redes de média e alta tensão', 'Expansão de sistemas elétricos regionais', 'Integração com concessionárias de energia', 'Obras energéticas para infraestrutura pesada',
          '3.3 Sistemas de Energia Crítica:', 'Instalação de geradores industriais e redundância energética', 'UPS (nobreaks) de grande porte', 'Sistemas de energia para hospitais, data centers e aeroportos', 'Proteção contra falhas críticas de energia',
          '3.4 Energia Renovável e Sistemas Avançados:', 'Instalação de usinas solares (fotovoltaicas)', 'Parques eólicos (infraestrutura elétrica de geração)', 'Sistemas híbridos de energia (solar + rede + gerador)', 'Integração com redes inteligentes (smart grid)'
        ]
      },
      {
        category: '4. PROJETOS E ENGENHARIA ELÉTRICA',
        items: [
          'Projetos elétricos de baixa, média e alta tensão', 'Estudos de demanda e carga instalada', 'Diagramas unifilares e multifilares', 'Análise de proteção e seletividade elétrica', 'Estudos de eficiência energética', 'Compatibilização com projetos civis e industriais (BIM)'
        ]
      },
      {
        category: '5. MANUTENÇÃO E GESTÃO ELÉTRICA',
        items: [
          'Manutenção preventiva, corretiva e preditiva', 'Inspeções técnicas e laudos elétricos (NR-10)', 'Testes de isolamento e continuidade elétrica', 'Auditoria de instalações elétricas', 'Gestão de energia e redução de consumo', 'Adequação às normas técnicas (ABNT e concessionárias)'
        ]
      }
    ]
  },
  {
    id: 'instalacoes-hidraulicas',
    title: 'Instalações Hidráulicas e Sanitárias',
    description: 'Projetos e execução de redes de água fria, quente, esgoto e águas pluviais com alta eficiência técnica.',
    icon: Droplets,
    details: [
      {
        category: '1. SISTEMAS HIDROSSANITÁRIOS (HIDRÁULICA SANITÁRIA)',
        items: [
          '1.1 Abastecimento de Água:', 'Redes de distribuição de água potável', 'Instalação de reservatórios superiores e inferiores', 'Sistemas de recalque (bombas hidráulicas)', 'Dimensionamento de consumo hídrico', 'Instalação de cavaletes e ligações prediais',
          '1.2 Esgotamento Sanitário:', 'Redes coletoras de esgoto sanitário', 'Interligações prediais ao sistema público', 'Estações elevatórias de esgoto', 'Sistemas de tratamento primário e secundário', 'Adequação a normas ambientais e sanitárias',
          '1.3 Drenagem Pluvial:', 'Redes de águas pluviais urbanas e industriais', 'Bueiros, galerias e bocas de lobo', 'Sistemas de retenção e detenção de águas pluviais', 'Controle de enchentes e escoamento superficial', 'Canais e canalizações de drenagem'
        ]
      },
      {
        category: '2. SISTEMAS HIDRÁULICOS (INFRAESTRUTURA HIDRÁULICA)',
        items: [
          '2.1 Redes Hidráulicas Prediais:', 'Instalação de tubulações de água fria e quente', 'Sistemas de pressurização hidráulica', 'Bombas de recalque e pressurizadores', 'Distribuição hidráulica interna em edificações', 'Manutenção de redes hidráulicas residenciais e comerciais',
          '2.2 Sistemas Industriais Hidráulicos:', 'Redes hidráulicas industriais de alta pressão', 'Sistemas de refrigeração e circulação de fluidos', 'Linhas de transporte de água industrial', 'Sistemas hidráulicos para máquinas e equipamentos', 'Controle e automação de sistemas hidráulicos',
          '2.3 Infraestrutura Hidráulica Pesada:', 'Adutoras de grande porte', 'Barragens e reservatórios de acumulação', 'Canais de irrigação e transposição de água', 'Sistemas de controle hídrico em larga escala'
        ]
      },
      {
        category: '3. HIDROELÉTRICA (SISTEMAS DE ENERGIA HÍDRICA)',
        items: [
          '3.1 Geração Hidrelétrica:', 'Projetos de pequenas centrais hidrelétricas (PCH)', 'Usinas hidrelétricas de médio e grande porte', 'Turbinas hidráulicas e sistemas de geração', 'Estudos hidrológicos e de vazão', 'Integração com redes de transmissão de energia',
          '3.2 Infraestrutura de Geração:', 'Barragens e represamento de água para energia', 'Casas de força e estruturas de geração', 'Sistemas de controle de fluxo hídrico', 'Linhas de transmissão associadas', 'Automação e controle de geração energética'
        ]
      },
      {
        category: '4. HIDROLOGIA E ENGENHARIA DE RECURSOS HÍDRICOS',
        items: [
          'Estudos hidrológicos de bacias e rios', 'Modelagem de comportamento de águas superficiais', 'Estudos de cheias e inundações', 'Gestão integrada de recursos hídricos', 'Monitoramento de qualidade da água', 'Licenciamento ambiental hídrico'
        ]
      },
      {
        category: '5. SISTEMAS DE TRATAMENTO DE ÁGUA E ESGOTO',
        items: [
          'Estações de Tratamento de Água (ETA)', 'Estações de Tratamento de Esgoto (ETE)', 'Sistemas de filtragem e purificação', 'Tratamento físico-químico e biológico', 'Reuso de água industrial e urbana', 'Controle de efluentes e conformidade ambiental'
        ]
      },
      {
        category: '6. SISTEMAS HIDRÁULICOS ESPECIAIS',
        items: [
          'Combate a incêndio (hidrantes, sprinklers e pressurização)', 'Sistemas de irrigação agrícola e paisagística', 'Piscinas, fontes e sistemas ornamentais', 'Redes hidráulicas de alta precisão', 'Sistemas de água gelada para climatização (chiller)', 'Infraestrutura hidráulica para hospitais e data centers'
        ]
      },
      {
        category: '7. MANUTENÇÃO E GESTÃO HIDRÁULICA',
        items: [
          'Manutenção preventiva, corretiva e peditiva', 'Inspeção de redes de água e esgoto', 'Detecção de vazamentos e perdas hídricas', 'Limpeza e desobstrução de redes', 'Auditoria de consumo hídrico', 'Adequação às normas técnicas (ABNT e ambientais)'
        ]
      }
    ]
  },
  {
    id: 'porto-seco',
    title: 'Gestão de Porto Seco',
    description: 'Operações logísticas integradas em recintos alfandegados para otimização do comércio exterior.',
    icon: Warehouse,
    details: [
      {
        category: '1. ADMINISTRAÇÃO E GESTÃO ADUANEIRA',
        items: [
          'Gestão de porto seco', 'Administração de EADI (Estação Aduaneira do Interior)', 'Operação aduaneira', 'Gestão aduaneira', 'Gestão logística integrada', 'Gestão de armazenagem alfandegada', 'Armazenagem aduaneira', 'Controle de cargas alfandegadas', 'Gestão operacional logística'
        ]
      },
      {
        category: '2. COMPLIANCE E DOCUMENTAÇÃO',
        items: [
          'Compliance aduaneiro', 'Compliance regulatório aduaneiro', 'Gestão documental aduaneira', 'Controle documental de cargas', 'Auditoria aduaneira', 'Auditoria logística', 'Gestão de licenças e autorizações'
        ]
      },
      {
        category: '3. INSPEÇÃO E CONTROLE OPERACIONAL',
        items: [
          'Conferência aduaneira', 'Inspeção de cargas', 'Gestão de pátio alfandegado', 'Gestão de terminais logísticos', 'Operação de centros logísticos alfandegados', 'Gestão de operações portuárias secas', 'Gestão de docas', 'Gestão de fluxo operacional'
        ]
      },
      {
        category: '4. TRANSPORTE E LOGÍSTICA ADUANEIRA',
        items: [
          'Gestão de transporte aduaneiro', 'Transporte de cargas alfandegadas', 'Gestão de trânsito aduaneiro', 'Consolidação e desconsolidação de cargas', 'Cross docking aduaneiro'
        ]
      },
      {
        category: '5. ESTOQUE E MONITORAMENTO',
        items: [
          'Controle de estoque alfandegado', 'Inventário aduaneiro', 'Rastreamento de cargas', 'Monitoramento logístico'
        ]
      },
      {
        category: '6. SEGURANÇA E RISCO',
        items: [
          'Gestão de riscos aduaneiros', 'Gestão de segurança patrimonial', 'Segurança de cargas', 'Segurança portuária e aduaneira', 'Controle de acesso alfandegado', 'Monitoramento eletrônico', 'CFTV', 'Segurança integrada de instalações alfandegadas'
        ]
      },
      {
        category: '7. REGIMES ESPECIAIS E TRIBUTAÇÃO',
        items: [
          'Gestão tributária aduaneira', 'Regimes aduaneiros especiais', 'Drawback', 'Entreposto aduaneiro', 'Admissão temporária', 'Exportação temporária', 'Classificação fiscal de mercadorias', 'Gestão de NCM', 'Gestão de impostos de importação e exportação'
        ]
      },
      {
        category: '8. CARGAS ESPECIAIS E OPERAÇÕES',
        items: [
          'Gestão de importação e exportação', 'Desembaraço aduaneiro', 'Gestão de cargas especiais', 'Gestão de cargas perigosas', 'Gestão de cargas refrigeradas', 'Gestão de contêineres'
        ]
      },
      {
        category: '9. TECNOLOGIA E TRANSFORMAÇÃO DIGITAL',
        items: [
          'KPI logísticos e aduaneiros', 'BI logístico', 'Analytics logístico', 'WMS (Warehouse Management System)', 'TMS (Transportation Management System)', 'ERP logístico', 'Automação logística', 'Transformação digital logística', 'IoT aplicado à logística alfandegada', 'Inteligência artificial aplicada à logística', 'Operação inteligente de porto seco', 'Smart logistics operations'
        ]
      },
      {
        category: '10. CONFORMIDADE E RELAÇÕES INSTITUCIONAIS',
        items: [
          'Gestão de compliance fiscal', 'Gestão de conformidade regulatória', 'Gestão de obrigações legais aduaneiras', 'Interface com Receita Federal', 'Interface com órgãos anuentes'
        ]
      },
      {
        category: '11. CONTINGÊNCIA E SINISTROS',
        items: [
          'Gestão de armazenagem temporária', 'Gestão de cargas retidas', 'Gestão de cargas em perdimento', 'Gestão de avarias e sinistros', 'Gestão de ocorrências logísticas', 'Gestão de seguros logísticos', 'Gestão de continuidade operacional', 'Plano de contingência logística'
        ]
      },
      {
        category: '12. SUSTENTABILIDADE E ESTRATÉGIA',
        items: [
          'Gestão ambiental em porto seco', 'Gestão de resíduos operacionais', 'Sustentabilidade logística', 'ESG aplicado à logística aduaneira', 'Eficiência operacional logística', 'Planejamento estratégico logístico', 'Desenvolvimento de infraestrutura logística', 'Planejamento de expansão operacional aduaneira', 'Gestão estratégica de operações logísticas e alfandegárias', 'Planejamento operacional aduaneiro'
        ]
      },
      {
        category: '13. CONSULTORIA E GESTÃO PATRIMONIAL',
        items: [
          'Operador logístico alfandegado', 'Outsourcing logístico aduaneiro', 'Consultoria em porto seco', 'Consultoria aduaneira', 'Consultoria logística integrada', 'Gestão integrada de operações alfandegadas', 'Coordenação multisserviços logísticos', 'Gestão patrimonial de áreas alfandegadas', 'Gestão de ativos logísticos', 'Gestão de facilities logísticos', 'Gestão de contratos logísticos', 'Gestão de fornecedores logísticos'
        ]
      }
    ]
  },
  {
    id: 'paisagismo',
    title: 'Paisagismo, Jardinagem e PRAD',
    description: 'Projetos e execução de paisagismo, manutenção de jardins e recuperação de áreas degradadas (PRAD).',
    icon: Sprout,
    details: [
      {
        category: '1. PAISAGISMO (PROJETO E EXECUÇÃO)',
        items: [
          '1.1 Paisagismo Urbano e Corporativo:', 'Projetos paisagísticos para áreas urbanas', 'Paisagismo de condomínios residenciais e comerciais', 'Paisagismo para shoppings, hotéis e empresas', 'Integração paisagística em empreendimentos imobiliários', 'Requalificação estética de áreas externas',
          '1.2 Paisagismo Residencial:', 'Projetos de jardins residenciais', 'Criação de áreas verdes e jardins temáticos', 'Implantação de jardins verticais e telhados verdes', 'Espaços de lazer e convivência ao ar livre', 'Ornamentação de áreas externas',
          '1.3 Paisagismo Industrial e Infraestrutura:', 'Paisagismo em áreas industriais', 'Barreiras verdes e cinturões ecológicos', 'Recuperação paisagística de áreas operacionais', 'Integração verde em rodovias, portos e aeroportos', 'Mitigação de impacto ambiental visual'
        ]
      },
      {
        category: '2. JARDINAGEM (EXECUÇÃO E MANUTENÇÃO)',
        items: [
          '2.1 Implantação de Jardins:', 'Plantio de árvores, arbustos e gramados', 'Preparação e correção de solo para plantio', 'Instalação de sistemas de irrigação automatizada', 'Criação de jardins ornamentais e funcionais', 'Plantio de espécies nativas e exóticas',
          '2.2 Manutenção de Áreas Verdes:', 'Poda de árvores e arbustos', 'Corte e manutenção de gramados', 'Adubação e controle fitossanitário', 'Replantio e substituição de espécies', 'Limpeza e conservação de áreas verdes',
          '2.3 Jardinagem Técnica:', 'Controle de pragas e doenças em plantas', 'Manejo de vegetação urbana', 'Arborização de vias públicas', 'Tratamento de solos degradados', 'Gestão de áreas verdes institucionais'
        ]
      },
      {
        category: '3. PRAD (PLANO DE RECUPERAÇÃO DE ÁREAS DEGRADADAS)',
        items: [
          '3.1 Diagnóstico Ambiental:', 'Avaliação de áreas degradadas', 'Identificação de impactos ambientais', 'Estudos de solo e vegetação', 'Mapeamento de erosão e assoreamento', 'Análise de recuperação ecológica',
          '3.2 Recuperação Ambiental:', 'Reflorestamento de áreas degradadas', 'Reintrodução de espécies nativas', 'Estabilização de solos erodidos', 'Controle de processos erosivos', 'Recuperação de matas ciliares',
          '3.3 Reabilitação de Áreas Impactadas:', 'Recuperação de áreas de mineração', 'Recuperação de áreas industriais desativadas', 'Recuperação de margens de rios e encostas', 'Recuperação de áreas de obras civis', 'Recuperação de áreas de disposição de resíduos',
          '3.4 Monitoramento Ambiental:', 'Monitoramento da regeneração vegetal', 'Indicadores de recuperação ambiental', 'Controle de biodiversidade local', 'Relatórios ambientais periódicos', 'Adequação a órgãos ambientais'
        ]
      },
      {
        category: '4. ARBORIZAÇÃO URBANA E FLORESTAMENTO',
        items: [
          'Planejamento de arborização urbana', 'Plantio e manejo de árvores em vias públicas', 'Inventário arbóreo urbano', 'Substituição de árvores em risco', 'Criação de corredores ecológicos urbanos', 'Reflorestamento urbano e periurbano'
        ]
      },
      {
        category: '5. SISTEMAS DE IRRIGAÇÃO E TECNOLOGIA VERDE',
        items: [
          'Instalação de sistemas de irrigação automatizada', 'Irrigação por gotejamento e aspersão', 'Sistemas inteligentes de controle hídrico', 'Eficiência hídrica em áreas verdes', 'Monitoramento remoto de irrigação', 'Reuso de água para irrigação'
        ]
      },
      {
        category: '6. ENGENHARIA PAISAGÍSTICA E AMBIENTAL',
        items: [
          'Projetos integrados de paisagismo e urbanismo', 'Compatibilização com obras civis e infraestrutura', 'Modelagem de espaços verdes urbanos', 'Planejamento ambiental de empreendimentos', 'Integração com drenagem e urbanização'
        ]
      },
      {
        category: '7. RECUPERAÇÃO ECOLÓGICA E CONSERVAÇÃO',
        items: [
          'Recuperação de ecossistemas naturais', 'Conservação de áreas de preservação permanente (APP)', 'Recuperação de nascentes e cursos d’água', 'Controle de espécies invasoras', 'Restauração ecológica de longo prazo'
        ]
      },
      {
        category: '8. SUSTENTABILIDADE E INFRAESTRUTURA VERDE',
        items: [
          'Criação de áreas verdes sustentáveis', 'Jardins filtrantes e biorretenção', 'Telhados verdes e paredes vivas', 'Soluções baseadas na natureza (SbN)', 'Redução de ilhas de calor urbanas', 'Certificações ambientais (LEED, AQUA)'
        ]
      },
      {
        category: '9. MANEJO AMBIENTAL E SERVIÇOS CORRELATOS',
        items: [
          'Supressão vegetal controlada com licenciamento', 'Remoção e destinação de resíduos verdes', 'Compostagem de resíduos orgânicos', 'Controle de erosão e drenagem natural', 'Limpeza de áreas verdes degradadas'
        ]
      },
      {
        category: '10. CONSULTORIA E GESTÃO AMBIENTAL VERDE',
        items: [
          'Planos de gestão de áreas verdes corporativas', 'Auditoria ambiental de paisagismo', 'Licenciamento ambiental para intervenções vegetais', 'Planejamento de sustentabilidade urbana', 'Integração ESG com áreas verdes', 'Gestão de projetos de compensação ambiental'
        ]
      }
    ]
  },
  {
    id: 'gestao-imobiliaria',
    title: 'Gestão Imobiliária',
    description: 'Soluções completas para gestão, regularização e valorização de ativos imobiliários.',
    icon: Home,
    details: [
      {
        category: '1. GESTÃO IMOBILIÁRIA (ASSET MANAGEMENT IMOBILIÁRIO)',
        items: [
          '1.1 Administração de Imóveis:', 'Gestão de imóveis residenciais, comerciais e industriais', 'Administração de locações (locação tradicional e corporativa)', 'Gestão de contratos de aluguel', 'Controle de inadimplência e cobrança', 'Gestão de manutenção e conservação de imóveis',
          '1.2 Gestão Patrimonial Imobiliária:', 'Administração de carteiras imobiliárias (portfólio de ativos)', 'Otimização de rentabilidade de imóveis', 'Avaliação de desempenho de ativos imobiliários', 'Planejamento de valorização imobiliária', 'Gestão de holdings patrimoniais'
        ]
      },
      {
        category: '2. COMPRA, VENDA E INTERMEDIAÇÃO DE IMÓVEIS',
        items: [
          '2.1 Comercialização Imobiliária:', 'Intermediação na compra e venda de imóveis', 'Venda de imóveis residenciais', 'Venda de imóveis comerciais', 'Venda de imóveis industriais e logísticos', 'Venda de terrenos urbanos e rurais',
          '2.2 Prospecção e Captação:', 'Captação de imóveis para venda e locação', 'Avaliação de mercado imobiliário', 'Estudo de viabilidade de venda', 'Precificação estratégica de imóveis', 'Marketing imobiliário e divulgação'
        ]
      },
      {
        category: '3. INCORPORAÇÃO E DESENVOLVIMENTO IMOBILIÁRIO',
        items: [
          '3.1 Incorporação Imobiliária:', 'Desenvolvimento de empreendimentos residenciais', 'Desenvolvimento de empreendimentos comerciais', 'Planejamento de loteamentos e condomínios', 'Estruturação de projetos imobiliários', 'Gestão de viabilidade técnica e econômica',
          '3.2 Desenvolvimento de Projetos:', 'Estudos urbanísticos e arquitetônicos', 'Coordenação de projetos de engenharia', 'Aprovação em órgãos públicos', 'Regularização de empreendimentos', 'Planejamento de obras imobiliárias'
        ]
      },
      {
        category: '4. LOCAÇÃO E ADMINISTRAÇÃO DE ALUGUÉIS',
        items: [
          'Locação residencial e comercial', 'Locação de imóveis industriais e galpões', 'Gestão de contratos de locação', 'Renovação e reajuste contratual', 'Garantias locatícias (fiador, seguro-fiança, caução)', 'Administração de condomínios alugados'
        ]
      },
      {
        category: '5. AVALIAÇÃO E CONSULTORIA IMOBILIÁRIA',
        items: [
          'Avaliação mercadológica de imóveis (laudos técnicos)', 'Avaliação para compra, venda e locação', 'Análise de valorização imobiliária', 'Due diligence imobiliária', 'Consultoria em investimentos imobiliários', 'Análise de viabilidade de empreendimentos'
        ]
      },
      {
        category: '6. GESTÃO DE CONDOMÍNIOS',
        items: [
          '6.1 Administração Condominial:', 'Gestão financeira de condomínios', 'Controle de taxas condominiais', 'Prestação de contas condominial', 'Gestão de fornecedores e contratos', 'Organização de assembleias',
          '6.2 Operação Condominial:', 'Manutenção predial', 'Segurança e portaria', 'Limpeza e conservação', 'Gestão de facilities', 'Controle de áreas comuns'
        ]
      },
      {
        category: '7. REGULARIZAÇÃO E DOCUMENTAÇÃO IMOBILIÁRIA',
        items: [
          'Regularização de imóveis urbanos e rurais', 'Averbação e escrituração imobiliária', 'Registro de imóveis em cartório', 'Legalização de construções', 'Desmembramento e unificação de terrenos', 'Certidões e documentação imobiliária'
        ]
      },
      {
        category: '8. MARKETING IMOBILIÁRIO E VENDAS',
        items: [
          'Estratégias de venda de imóveis', 'Marketing digital imobiliário', 'Captação de leads imobiliários', 'Produção de material publicitário', 'Tour virtual e imagens aéreas (drone)', 'Gestão de funil de vendas imobiliário'
        ]
      },
      {
        category: '9. INVESTIMENTOS IMOBILIÁRIOS',
        items: [
          'Estruturação de portfólios imobiliários', 'Fundos imobiliários (FIIs – estrutura consultiva)', 'Análise de retorno sobre investimento (ROI)', 'Compra estratégica para valorização', 'Desenvolvimento de ativos de renda', 'Gestão de patrimônio imobiliário corporativo'
        ]
      },
      {
        category: '10. ENGENHARIA E APOIO TÉCNICO IMOBILIÁRIO',
        items: [
          'Avaliação estrutural de imóveis', 'Inspeção predial e laudos técnicos', 'Vistorias de entrada e saída de imóveis', 'Compatibilização de projetos arquitetônicos', 'Reformas e retrofit imobiliário', 'Gestão de obras vinculadas a imóveis'
        ]
      },
      {
        category: '11. TECNOLOGIA IMOBILIÁRIA (PROPTECH)',
        items: [
          'Sistemas de gestão imobiliária (CRM imobiliário)', 'Plataformas digitais de venda de imóveis', 'Assinatura eletrônica de contratos', 'Visitas virtuais e realidade aumentada', 'Big data imobiliário e precificação inteligente', 'Automação de gestão de imóveis'
        ]
      },
      {
        category: '12. SUSTENTABILIDADE IMOBILIÁRIA',
        items: [
          'Imóveis sustentáveis e verdes', 'Certificações ambientais (LEED, AQUA)', 'Eficiência energética em edificações', 'Gestão de resíduos em empreendimentos', 'Construção sustentável aplicada ao mercado imobiliário', 'Valorização de imóveis sustentáveis'
        ]
      },
      {
        category: '13. CONSULTORIA ESTRATÉGICA IMOBILIÁRIA',
        items: [
          'Estruturação de empresas imobiliárias', 'Planejamento de expansão imobiliária', 'Reestruturação de carteiras de imóveis', 'Estratégia de investimento e desinvestimento', 'Consultoria para incorporadoras e holdings', 'Gestão de grandes portfólios imobiliários'
        ]
      }
    ]
  },
  {
    id: 'servicos-gerais',
    title: 'Serviços Gerais Terceirizados',
    description: 'Soluções em mão de obra especializada para suporte operacional e administrativo.',
    icon: Users,
    details: [
      {
        category: '1. SERVIÇOS GERAIS TERCEIRIZADOS (FACILITIES MANAGEMENT)',
        items: [
          '1.1 Limpeza e Conservação:', 'Limpeza predial corporativa', 'Limpeza industrial pesada', 'Limpeza hospitalar e clínica (sanitária)', 'Limpeza pós-obra e pós-reforma', 'Limpeza de fachadas e vidros em altura', 'Conservação contínua de ambientes internos e externos',
          '1.2 Higienização Técnica:', 'Higienização de ambientes críticos', 'Sanitização de áreas corporativas', 'Desinfecção de superfícies e ambientes', 'Controle microbiológico ambiental', 'Limpeza de áreas alimentícias (conformidade ANVISA)'
        ]
      },
      {
        category: '2. PORTARIA E CONTROLE DE ACESSO',
        items: [
          'Portaria presencial 24h', 'Portaria remota e virtual', 'Controle de entrada e saída de pessoas', 'Controle de veículos e cargas', 'Cadastro de visitantes e prestadores', 'Monitoramento de fluxo de acesso'
        ]
      },
      {
        category: '3. RECEPÇÃO E ATENDIMENTO CORPORATIVO',
        items: [
          'Recepção administrativa e institucional', 'Atendimento ao público em empresas', 'Apoio administrativo em portarias e escritórios', 'Triagem de visitantes e correspondências', 'Gestão de agendamentos e fluxo interno'
        ]
      },
      {
        category: '4. COPA, COZINHA E APOIO OPERACIONAL',
        items: [
          'Serviços de copa corporativa', 'Preparação e distribuição de café e refeições leves', 'Apoio em eventos internos', 'Organização de áreas de alimentação', 'Higienização de utensílios e áreas de apoio'
        ]
      },
      {
        category: '5. JARDINAGEM E ÁREAS VERDES',
        items: [
          'Manutenção de jardins corporativos', 'Corte de grama e poda de árvores', 'Paisagismo de áreas externas', 'Irrigação e conservação de plantas', 'Limpeza de áreas verdes e pátios', 'Controle básico de pragas vegetais'
        ]
      },
      {
        category: '6. MANUTENÇÃO PREDIAL BÁSICA',
        items: [
          'Pequenos reparos elétricos', 'Pequenos reparos hidráulicos', 'Manutenção civil leve', 'Pintura de manutenção', 'Substituição de peças e componentes simples', 'Conservação de instalações prediais'
        ]
      },
      {
        category: '7. APOIO LOGÍSTICO E OPERACIONAL',
        items: [
          'Movimentação interna de materiais', 'Carga e descarga de mercadorias', 'Organização de almoxarifados', 'Apoio em expedição e recebimento', 'Controle básico de estoque operacional'
        ]
      },
      {
        category: '8. SERVIÇOS DE APOIO ADMINISTRATIVO',
        items: [
          'Digitação e suporte administrativo', 'Arquivamento físico e digital', 'Organização documental', 'Apoio em rotinas administrativas', 'Controle de planilhas e registros internos'
        ]
      },
      {
        category: '9. LIMPEZA TÉCNICA ESPECIALIZADA',
        items: [
          'Limpeza de dutos de ar-condicionado (PMOC)', 'Limpeza de caixas d’água e reservatórios', 'Limpeza industrial pesada', 'Limpeza de áreas contaminadas', 'Limpeza de equipamentos e maquinários', 'Desengraxe e desinfecção técnica'
        ]
      },
      {
        category: '10. SERVIÇOS DE APOIO EM OBRAS',
        items: [
          'Apoio operacional em canteiros de obras', 'Limpeza de obra e organization de materiais', 'Apoio logístico para engenharia e construção', 'Controle de acesso de trabalhadores', 'Apoio à segurança operacional de obra'
        ]
      },
      {
        category: '11. SERVIÇOS DE SEGURANÇA DE APOIO (NÃO ARMADA)',
        items: [
          'Rondas de apoio operacional', 'Controle de acesso básico', 'Monitoramento visual de áreas', 'Apoio à segurança patrimonial', 'Comunicação com equipes de segurança principal'
        ]
      },
      {
        category: '12. SERVIÇOS DE MANUTENÇÃO E FACILITIES INTEGRADOS',
        items: [
          'Gestão integrada de facilities (FM)', 'Planejamento de manutenção predial', 'Coordenação de serviços terceirizados', 'Controle de qualidade operacional', 'Gestão de contratos de facilities', 'Otimização de custos operacionais'
        ]
      },
      {
        category: '13. SERVIÇOS DE HIGIENE E SAÚDE AMBIENTAL',
        items: [
          'Higienização de ambientes corporativos', 'Controle sanitário de áreas comuns', 'Apoio em biossegurança', 'Desinfecção preventiva de ambientes', 'Conformidade com normas sanitárias'
        ]
      },
      {
        category: '14. TERCEIRIZAÇÃO DE MÃO DE OBRA ESPECIALIZADA',
        items: [
          'Alocação de profissionais operacionais', 'Terceirização de equipes de facilities', 'Fornecimento de mão de obra contínua', 'Gestão de equipes multi-serviços', 'Substituição e cobertura de postos de trabalho', 'Treinamento e padronização de equipes'
        ]
      },
      {
        category: '15. QUALIDADE, CERTIFICAÇÃO E HOMOLOGAÇÃO',
        items: [
          'Certificação de processos operacionais', 'Padronização de serviços terceirizados', 'Auditoria de qualidade em facilities', 'Conformidade com normas trabalhistas e técnicas', 'Homologação de fornecedores e prestadores', 'Indicadores de desempenho (SLAs e KPIs)'
        ]
      },
      {
        category: '16. TECNOLOGIA APLICADA A SERVIÇOS GERAIS',
        items: [
          'Sistemas de gestão de facilities (CAFM)', 'Controle digital de ordens de serviço', 'Monitoramento de equipes em tempo real', 'Aplicativos de gestão operacional', 'Automação de tarefas administrativas', 'Relatórios digitais de desempenho'
        ]
      },
      {
        category: '17. SUSTENTABILIDADE EM SERVIÇOS GERAIS',
        items: [
          'Limpeza ecológica (produtos biodegradáveis)', 'Redução de consumo de água e energia', 'Gestão sustentável de resíduos operacionais', 'Práticas ESG em facilities', 'Eficiência operacional sustentável', 'Certificações ambientais aplicadas a serviços gerais'
        ]
      }
    ]
  },
];

export const SECTORS = [
  {
    id: 'infraestrutura',
    title: 'Infraestrutura',
    description: 'Gestão e operação de grandes projetos de infraestrutura urbana e industrial.',
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'engenharia',
    title: 'Engenharia',
    description: 'Soluções técnicas de engenharia civil, elétrica e ambiental para diversos segmentos.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'facilities',
    title: 'Facilities',
    description: 'Gestão completa de serviços e manutenção para ambientes corporativos e industriais.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'energia',
    title: 'Energia',
    description: 'Eficiência energética e gestão de ativos para o setor de energia e utilities.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'logistica',
    title: 'Logística',
    description: 'Soluções integradas para armanezamento, movimentação e distribuição de materiais.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    description: 'Monitoramento e controle de acesso para garantir a integridade de ativos e pessoas.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'manutencao',
    title: 'Manutenção',
    description: 'Programas de manutenção preventiva e corretiva de alta performance operacional.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'consultoria',
    title: 'Consultoria',
    description: 'Assessoria estratégica em ESG, compliance e processos administrativos complexos.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'gestao',
    title: 'Gestão',
    description: 'Inteligência de dados e gestão executiva para otimização de resultados empresariais.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
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
    title: 'Administração Corporativa e Eficiência Operacional',
    excerpt: 'Como uma gestão estruturada pode transformar a produtividade e a saúde financeira da sua empresa.',
    date: '28 Mar, 2026',
    category: 'Gestão',
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
