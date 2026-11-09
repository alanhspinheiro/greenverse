import * as React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, ArrowRight, Eye, CheckCircle2, 
  HardHat, Leaf, Building2, ShieldCheck, Cpu, 
  Layers, Search, Sparkles, PhoneCall, ChevronRight,
  ExternalLink, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { SERVICES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export interface StrategicArea {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: 'amber' | 'emerald' | 'blue' | 'indigo' | 'purple';
  colorClasses: {
    title: string;
    arrow: string;
    badge: string;
    iconBg: string;
    iconText: string;
    cardBorderHover: string;
    cardActiveBorder: string;
    ctaButton: string;
    bannerGradient: string;
    pillActive: string;
  };
  serviceIds: string[];
  keyHighlights: string[];
}

export const STRATEGIC_AREAS: StrategicArea[] = [
  {
    id: 'engenharia-infraestrutura',
    number: '01',
    title: 'Engenharia e Infraestrutura',
    shortTitle: 'Engenharia & Infraestrutura',
    description: 'Obras civis e industriais, infraestrutura pesada, instalações prediais, adequações técnicas (NR-13) e fiscalização de ponta a ponta.',
    tagline: 'Execução técnica de alta precisão com conformidade normativa, cronogramas rigorosos e segurança operacional.',
    icon: HardHat,
    accentColor: 'amber',
    colorClasses: {
      title: 'text-amber-700 dark:text-amber-400 group-hover:text-amber-600',
      arrow: 'text-amber-600 dark:text-amber-400 group-hover:text-amber-500',
      badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white',
      iconText: 'text-amber-600 dark:text-amber-400',
      cardBorderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
      cardActiveBorder: 'border-amber-500 shadow-md ring-2 ring-amber-500/20 bg-amber-500/5',
      ctaButton: 'text-amber-700 dark:text-amber-300 hover:bg-amber-500/15 border-amber-500/30 bg-amber-500/5',
      bannerGradient: 'from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30',
      pillActive: 'bg-amber-600 text-white border-amber-600 shadow-xs',
    },
    serviceIds: [
      'engenharia-industrial',
      'infraestrutura-engenharia',
      'construcao',
      'construcao-sustentavel',
      'gestao-obras',
      'terraplanagem',
      'retrofit',
      'instalacoes-eletricas',
      'instalacoes-hidraulicas',
      'barragens-infraestrutura-hidrica',
    ],
    keyHighlights: ['Adequação NR-13 & NBRs', 'Obras Civis & Industriais', 'Fiscalização Técnica', 'Infraestrutura Hídrica'],
  },
  {
    id: 'gestao-ambiental-esg',
    number: '02',
    title: 'Gestão Ambiental e ESG',
    shortTitle: 'Gestão Ambiental & ESG',
    description: 'Consultoria estratégica ESG, inventário de emissões (GEE), licenciamento ambiental, gestão integral de resíduos, água e transição energética.',
    tagline: 'Sustentabilidade corporativa mensurável, conformidade legal contínua e valorização de fluxos industriais circulares.',
    icon: Leaf,
    accentColor: 'emerald',
    colorClasses: {
      title: 'text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600',
      arrow: 'text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500',
      badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white',
      iconText: 'text-emerald-600 dark:text-emerald-400',
      cardBorderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      cardActiveBorder: 'border-emerald-500 shadow-md ring-2 ring-emerald-500/20 bg-emerald-500/5',
      ctaButton: 'text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/15 border-emerald-500/30 bg-emerald-500/5',
      bannerGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30',
      pillActive: 'bg-emerald-600 text-white border-emerald-600 shadow-xs',
    },
    serviceIds: [
      'licenciamento',
      'residuos',
      'ete-tratamento-esgoto',
      'mercado-livre-energia',
      'servicos-ambientais-nr13-instalacoes',
    ],
    keyHighlights: ['Padrões GRI, SASB & IFRS', 'Licenciamento LP / LI / LO', 'PGRS & Logística Reversa', 'Transição Net Zero'],
  },
  {
    id: 'facilities-operacoes',
    number: '03',
    title: 'Facilities e Operações',
    shortTitle: 'Facilities & Operações',
    description: 'Manutenção predial integrada, conservação técnica, PMOC climatização, controle sanitário e governança operacional com SLA único.',
    tagline: 'Gestão operacional contínua, alta disponibilidade de instalações e valorização dos ativos prediais corporativos.',
    icon: Building2,
    accentColor: 'blue',
    colorClasses: {
      title: 'text-blue-700 dark:text-blue-400 group-hover:text-blue-600',
      arrow: 'text-blue-600 dark:text-blue-400 group-hover:text-blue-500',
      badge: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white',
      iconText: 'text-blue-600 dark:text-blue-400',
      cardBorderHover: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
      cardActiveBorder: 'border-blue-500 shadow-md ring-2 ring-blue-500/20 bg-blue-500/5',
      ctaButton: 'text-blue-700 dark:text-blue-300 hover:bg-blue-500/15 border-blue-500/30 bg-blue-500/5',
      bannerGradient: 'from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/30',
      pillActive: 'bg-blue-600 text-white border-blue-600 shadow-xs',
    },
    serviceIds: [
      'facilities',
      'servicos-gerais',
      'pmoc-climatizacao',
      'pintura-predial',
      'paisagismo',
      'pragas',
      'gestao-imobiliaria',
    ],
    keyHighlights: ['SLA Centralizado', 'PMOC Conforme Lei 13.589', 'Auditorias ANVISA', 'Manutenção Preventiva'],
  },
  {
    id: 'logistica-seguranca',
    number: '04',
    title: 'Logística e Segurança',
    shortTitle: 'Logística & Segurança',
    description: 'Segurança patrimonial com inteligência eletrônica, controle de acesso, movimentação de cargas, portos secos e infraestrutura aeroportuária.',
    tagline: 'Proteção patrimonial integrada, rastreabilidade contínua de cargas e operações aduaneiras especializadas.',
    icon: ShieldCheck,
    accentColor: 'indigo',
    colorClasses: {
      title: 'text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-600',
      arrow: 'text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500',
      badge: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/30',
      iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white',
      iconText: 'text-indigo-600 dark:text-indigo-400',
      cardBorderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
      cardActiveBorder: 'border-indigo-500 shadow-md ring-2 ring-indigo-500/20 bg-indigo-500/5',
      ctaButton: 'text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/15 border-indigo-500/30 bg-indigo-500/5',
      bannerGradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent border-indigo-500/30',
      pillActive: 'bg-indigo-600 text-white border-indigo-600 shadow-xs',
    },
    serviceIds: [
      'seguranca',
      'logistica',
      'porto-seco',
      'gestao-aeroportuaria',
    ],
    keyHighlights: ['Vigilância CFTV & Biometria', 'Gestão de Frotas & Rastreamento', 'Terminais Aduaneiros', 'Normas Regulatórias ANAC'],
  },
  {
    id: 'tecnologia-gestao',
    number: '05',
    title: 'Tecnologia e Gestão Corporativa',
    shortTitle: 'Tecnologia & Gestão',
    description: 'Governança corporativa, compliance regulatório, auditorias integradas, arquitetura e infraestrutura de TI, cibersegurança e PMO.',
    tagline: 'Integridade jurídica, proteção de ativos digitais, transparência institucional e inteligência executiva.',
    icon: Cpu,
    accentColor: 'purple',
    colorClasses: {
      title: 'text-purple-700 dark:text-purple-400 group-hover:text-purple-600',
      arrow: 'text-purple-600 dark:text-purple-400 group-hover:text-purple-500',
      badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30',
      iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white',
      iconText: 'text-purple-600 dark:text-purple-400',
      cardBorderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
      cardActiveBorder: 'border-purple-500 shadow-md ring-2 ring-purple-500/20 bg-purple-500/5',
      ctaButton: 'text-purple-700 dark:text-purple-300 hover:bg-purple-500/15 border-purple-500/30 bg-purple-500/5',
      bannerGradient: 'from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30',
      pillActive: 'bg-purple-600 text-white border-purple-600 shadow-xs',
    },
    serviceIds: [
      'tecnologia-da-informacao',
      'compliance',
      'administracao',
      'projetos',
    ],
    keyHighlights: ['Compliance & Integridade', 'LGPD & Cibersegurança', 'Gestão de Riscos ERM', 'PMO & Governança de Projetos'],
  },
];

// Helper to look up which strategic area a service belongs to
export const getAreaForService = (serviceId: string): StrategicArea => {
  return STRATEGIC_AREAS.find((area) => area.serviceIds.includes(serviceId)) || STRATEGIC_AREAS[0];
};

// Tags helper for every service
export const getTagsForService = (id: string): string[] => {
  const map: Record<string, string[]> = {
    // 1 - Engenharia e Infraestrutura
    'engenharia-industrial': ['Adequação NR-13', 'Caldeiras e Vasos', 'Inspeção Técnica'],
    'infraestrutura-engenharia': ['Infraestrutura Pesada', 'Obras de Arte', 'Drenagem & Redes'],
    'construcao': ['Construção Civil', 'Montagens Industriais', 'Turnkey'],
    'construcao-sustentavel': ['LEED & AQUA-HQE', 'Eficiência Hídrica', 'Materiais Verdes'],
    'gestao-obras': ['Fiscalização Técnica', 'Controle de Cronograma', 'Gestão de Custos'],
    'terraplanagem': ['Movimentação de Solo', 'Pavimentação Asfáltica', 'Drenagem'],
    'retrofit': ['Modernização Predial', 'Eficiência Energética', 'Atualização Estrutural'],
    'instalacoes-eletricas': ['Média e Alta Tensão', 'Subestações', 'Quadros & Painéis'],
    'instalacoes-hidraulicas': ['Redes de Distribuição', 'Sistemas de Bombeamento', 'Prevenção de Incêndio'],
    'barragens-infraestrutura-hidrica': ['Segurança de Barragens', 'Obras Hidráulicas', 'Controle de Cheias'],

    // 2 - Gestão Ambiental e ESG
    'licenciamento': ['Padrões ESG (GRI/IFRS)', 'LP, LI e LO', 'Conformidade Legal'],
    'residuos': ['PGRS Corporativo', 'Logística Reversa', 'Coleta & Destinação'],
    'ete-tratamento-esgoto': ['Tratamento de Efluentes', 'Reúso de Água', 'Conformidade CONAMA'],
    'mercado-livre-energia': ['Migração ACL', 'Energia Renovável', 'Gestão de Fatura & I-REC'],
    'servicos-ambientais-nr13-instalacoes': ['Inspeções NR-13', 'Laudos Ambientais', 'Prevenção de Riscos'],

    // 3 - Facilities e Operações
    'facilities': ['Gestão Predial Integrada', 'SLA Centralizado', 'Operações Contínuas'],
    'servicos-gerais': ['Conservação & Limpeza', 'Higienização Técnica', 'Apoio Operacional'],
    'pmoc-climatizacao': ['PMOC Conforme Lei 13.589', 'Qualidade do Ar', 'Manutenção Climatização'],
    'pintura-predial': ['Pintura em Altura (NR-35)', 'Tratamento de Fachadas', 'Impermeabilização'],
    'paisagismo': ['Manutenção Verde', 'Projetos Paisagísticos', 'Poda & Conservação'],
    'pragas': ['CIP - Controle Integrado', 'Auditoria Sanitária', 'Laudos ANVISA'],
    'gestao-imobiliaria': ['Gestão de Ativos', 'Vistorias Técnicas', 'Contratos & Ocupação'],

    // 4 - Logística e Segurança
    'seguranca': ['Vigilância Patrimonial', 'Controle Eletrônico', 'Monitoramento 24/7'],
    'logistica': ['Gestão de Cargas', 'Armazenagem Dedicada', 'Rastreamento & Frota'],
    'porto-seco': ['Operações Aduaneiras', 'Entreposto Tributário', 'Cross-Docking'],
    'gestao-aeroportuaria': ['Ground Handling', 'Operações de Pátio', 'Normas ANAC'],

    // 5 - Tecnologia e Gestão Corporativa
    'tecnologia-da-informacao': ['Cibersegurança', 'Infraestrutura Cloud & TI', 'Adequação LGPD'],
    'compliance': ['Integridade & Ética', 'Due Diligence', 'Canal de Denúncias'],
    'administracao': ['BPO Administrativo', 'Processos Corporativos', 'Auditoria Operacional'],
    'projetos': ['PMO Estratégico', 'Metodologias Ágeis', 'Governança de Projetos'],
  };
  return map[id] || ['Gestão Técnica', 'Conformidade', 'Execução Especializada'];
};

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();
  // By default, show all or default to the first area if preferred
  const [selectedAreaId, setSelectedAreaId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewService, setPreviewService] = useState<typeof SERVICES[0] | null>(null);

  // Active strategic area data
  const activeArea = useMemo(() => {
    return STRATEGIC_AREAS.find((a) => a.id === selectedAreaId) || null;
  }, [selectedAreaId]);

  // Filtered services
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      // Area filter
      if (selectedAreaId !== 'all') {
        const area = STRATEGIC_AREAS.find((a) => a.id === selectedAreaId);
        if (!area || !area.serviceIds.includes(service.id)) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = service.title.toLowerCase().includes(q);
        const matchDesc = service.description.toLowerCase().includes(q);
        const tags = getTagsForService(service.id);
        const matchTags = tags.some((tag) => tag.toLowerCase().includes(q));
        return matchTitle || matchDesc || matchTags;
      }

      return true;
    });
  }, [selectedAreaId, searchQuery]);

  // Smooth scroll to #contato with contextual service prefill
  const handleScrollToContact = (serviceTitle?: string) => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const textarea = document.querySelector<HTMLTextAreaElement>('#contato textarea');
        if (textarea && serviceTitle) {
          textarea.value = `Olá! Gostaria de solicitar proposta e estruturar uma demanda técnica para: ${serviceTitle}.`;
          textarea.focus();
        }
      }, 400);
    }
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20">
      
      {/* Decorative Wave Background Lines (as seen in the reference concept image) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-45 dark:opacity-20 z-0">
        <svg
          className="w-full h-full min-w-[1200px]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 480 C 240 320, 600 580, 1000 420 C 1250 320, 1450 360, 1600 390"
            stroke="currentColor"
            className="text-primary/20"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-80 510 C 260 360, 620 610, 1020 450 C 1270 350, 1470 380, 1620 410"
            stroke="currentColor"
            className="text-blue-500/25"
            strokeWidth="1.5"
          />
          <path
            d="M-60 540 C 280 400, 640 640, 1040 480 C 1290 380, 1490 400, 1640 430"
            stroke="currentColor"
            className="text-emerald-500/20"
            strokeWidth="1.2"
          />
          <path
            d="M-40 570 C 300 440, 660 670, 1060 510 C 1310 410, 1510 420, 1660 450"
            stroke="currentColor"
            className="text-primary/15"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Inspired by reference image "Our Services" layout) */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.servicesSection.badge || 'PORTFÓLIO DE SOLUÇÕES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {t.servicesSection.title}{' '}
            <span className="text-primary">{t.servicesSection.titleHighlight || 'Um modelo para conectar capacidades.'}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3.5 leading-relaxed font-normal">
            {t.servicesSection.lead || 'Cada demanda exige competências diferentes. Nosso papel é entender a necessidade, estruturar o caminho, conectar as partes adequadas e apoiar o acompanhamento conforme o escopo contratado.'}
          </p>
        </div>

        {/* Minimalist Animated Continuous Ribbon (Preserved) */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-3 mb-14 bg-emerald-700 text-white select-none shadow-xs">
          <motion.div
            className="flex whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide text-white"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 35,
            }}
          >
            <div className="flex shrink-0 items-center gap-8 pr-8">
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
            </div>
            <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
            </div>
          </motion.div>
        </div>

        {/* 1. TOP-LEVEL STRATEGIC AREAS CARDS (Directly applying the visual concept from the reference image) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Áreas Estratégicas · Selecione uma categoria para explorar
              </span>
            </div>

            {/* Quick search input */}
            <div className="relative max-w-xs w-full">
              <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por serviço ou norma..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground hover:text-foreground font-semibold"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* 5 Clean Strategic Area Cards matching reference image layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STRATEGIC_AREAS.map((area) => {
              const AreaIcon = area.icon;
              const isSelected = selectedAreaId === area.id;

              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(isSelected ? 'all' : area.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group relative overflow-hidden bg-card ${
                    isSelected
                      ? area.colorClasses.cardActiveBorder
                      : `border-border/80 ${area.colorClasses.cardBorderHover} shadow-xs hover:shadow-sm hover:-translate-y-0.5`
                  }`}
                >
                  <div>
                    {/* Top row: Title + Diagonal Arrow (↗) as shown in the reference image */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-primary text-primary-foreground' : area.colorClasses.iconBg
                        }`}>
                          <AreaIcon className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground">
                          {area.number}
                        </span>
                      </div>
                      
                      {/* Diagonal Arrow Icon ↗ */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isSelected ? 'bg-primary/20 text-primary' : area.colorClasses.arrow
                      }`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Area Title */}
                    <h3 className={`text-sm sm:text-base font-bold mb-2 leading-snug transition-colors ${
                      isSelected ? 'text-primary' : area.colorClasses.title
                    }`}>
                      {area.title}
                    </h3>

                    {/* Short Objective Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed font-normal line-clamp-3 mb-4">
                      {area.description}
                    </p>
                  </div>

                  {/* Card Footer with count and indicator */}
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {area.serviceIds.length} serviços específicos
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-primary font-extrabold' : 'text-muted-foreground/80 group-hover:text-foreground'
                    }`}>
                      {isSelected ? 'Ativo ✓' : 'Explorar'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Filter Pill for All Services */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedAreaId('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
                  selectedAreaId === 'all'
                    ? 'bg-primary text-primary-foreground border-primary shadow-2xs'
                    : 'bg-muted/60 text-muted-foreground border-border hover:text-foreground'
                }`}
              >
                Todas as Áreas ({SERVICES.length})
              </button>
              {selectedAreaId !== 'all' && (
                <button
                  onClick={() => setSelectedAreaId('all')}
                  className="text-xs text-primary hover:underline font-semibold"
                >
                  Mostrar todas as 30 soluções
                </button>
              )}
            </div>

            <span className="font-mono text-[11px] hidden sm:inline">
              {filteredServices.length} serviços exibidos
            </span>
          </div>
        </div>

        {/* Active Category Header Spotlight */}
        <AnimatePresence mode="wait">
          {activeArea && (
            <motion.div
              key={activeArea.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={`p-6 sm:p-7 rounded-3xl border bg-gradient-to-br ${activeArea.colorClasses.bannerGradient} mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs`}
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${activeArea.colorClasses.badge}`}>
                    ÁREA ESTRATÉGICA {activeArea.number}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {activeArea.serviceIds.length} serviços especializados
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5 flex items-center gap-2">
                  <activeArea.icon className={`h-6 w-6 ${activeArea.colorClasses.iconText}`} />
                  <span>{activeArea.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-2xl font-normal">
                  {activeArea.tagline}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {activeArea.keyHighlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[11px] font-medium bg-background/80 border border-border/80 text-foreground/90 px-2.5 py-0.5 rounded-md flex items-center gap-1"
                    >
                      <Check className={`h-3 w-3 ${activeArea.colorClasses.iconText}`} />
                      <span>{hl}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                <Button
                  onClick={() => handleScrollToContact(activeArea.title)}
                  className="font-semibold shadow-xs"
                >
                  <PhoneCall className="h-4 w-4 mr-2" />
                  <span>Estruturar Demanda nesta Área</span>
                </Button>
                <button
                  onClick={() => setSelectedAreaId('all')}
                  className="text-xs text-muted-foreground hover:text-foreground font-medium text-center py-1"
                >
                  Ver todos os serviços
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. SPECIFIC SERVICES GRID (Adopting the reference image card visual concept with diagonal arrow ↗) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            const area = getAreaForService(service.id);
            const tags = getTagsForService(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.25) }}
                viewport={{ once: true }}
              >
                {/* Clean, high-fidelity card concept directly matching reference image */}
                <Card className={`h-full flex flex-col justify-between p-5 rounded-2xl border border-border/80 bg-card ${area.colorClasses.cardBorderHover} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group`}>
                  <div>
                    {/* Top row: Category tag + Diagonal Arrow (↗) linking to service */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${area.colorClasses.badge}`}>
                        {area.number} • {area.shortTitle.split(' & ')[0]}
                      </span>

                      {/* Top-right diagonal arrow link */}
                      <Link
                        to={`/servicos/${service.id}`}
                        className={`w-7 h-7 rounded-xl flex items-center justify-center bg-muted/60 hover:bg-primary hover:text-white transition-all text-muted-foreground group-hover:text-foreground`}
                        title="Ver escopo completo"
                      >
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center transition-colors ${area.colorClasses.iconBg}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <Link
                        to={`/servicos/${service.id}`}
                        className="group/link block"
                      >
                        <h3 className={`text-sm sm:text-base font-bold leading-snug transition-colors ${area.colorClasses.title}`}>
                          {service.title}
                        </h3>
                      </Link>
                    </div>

                    {/* Short Objective Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 font-normal">
                      {service.description}
                    </p>

                    {/* Capability Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-muted/70 px-2 py-0.5 rounded-md text-foreground/75 border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contextual Action Footer */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleScrollToContact(service.title)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${area.colorClasses.ctaButton}`}
                      title={`Solicitar atendimento para ${service.title}`}
                    >
                      <span>Estruturar Demanda</span>
                    </button>

                    <button
                      onClick={() => setPreviewService(service)}
                      className="text-xs text-muted-foreground hover:text-foreground font-medium flex items-center gap-1 py-1 px-1.5 rounded-lg hover:bg-muted"
                      title="Prévia técnica rápida"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span className="text-[11px]">Resumo</span>
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* 3. PROMINENT BOTTOM ACTION BUTTON (Matching the "View all services" button in the reference image) */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            {selectedAreaId !== 'all' ? (
              <Button
                onClick={() => setSelectedAreaId('all')}
                size="lg"
                className="px-8 py-3 rounded-2xl font-bold text-sm bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:opacity-95 transition-all"
              >
                <span>Ver todos os {SERVICES.length} serviços</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={() => handleScrollToContact('Demanda Integrada Multi-Áreas')}
                size="lg"
                className="px-8 py-3 rounded-2xl font-bold text-sm bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:opacity-95 transition-all"
              >
                <span>Solicitar Estruturação de Demanda</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.getElementById('contato');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-2xl font-semibold text-sm border-border hover:bg-muted"
            >
              Falar com um Especialista
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-normal">
            Soluções estruturadas conforme as diretrizes regulatórias e operacionais de cada cliente.
          </p>
        </div>

      </div>

      {/* Quick Preview Sheet / Technical Scope Drawer */}
      <Sheet open={!!previewService} onOpenChange={(open) => !open && setPreviewService(null)}>
        <SheetContent side="right" className="w-full sm:max-w-lg p-6 flex flex-col justify-between overflow-y-auto">
          {previewService && (() => {
            const area = getAreaForService(previewService.id);
            const tags = getTagsForService(previewService.id);
            const Icon = previewService.icon;

            return (
              <div className="space-y-6">
                <SheetHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${area.colorClasses.badge}`}>
                      {area.number} • {area.title}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 ${area.colorClasses.iconBg}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <SheetTitle className="text-xl font-bold text-foreground">
                    {previewService.title}
                  </SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground leading-relaxed">
                    {previewService.description}
                  </SheetDescription>
                </SheetHeader>

                {/* Scope highlights */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Scope details */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Pilares Técnicos e Entregáveis
                  </h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                    {previewService.details?.slice(0, 4).map((d: any, dIdx: number) => (
                      <div key={dIdx} className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                        <p className="text-xs font-bold text-foreground mb-1">{d.category}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {d.items?.slice(0, 4).join(', ')}...
                        </p>
                      </div>
                    )) || (
                      <p className="text-xs text-muted-foreground">
                        Solução personalizada estruturada conforme as normas técnicas específicas da sua planta ou instalação.
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-border flex flex-col gap-3">
                  <Button
                    onClick={() => {
                      const title = previewService.title;
                      setPreviewService(null);
                      handleScrollToContact(title);
                    }}
                    className="w-full font-semibold"
                  >
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Solicitar Proposta para este Serviço
                  </Button>

                  <Link
                    to={`/servicos/${previewService.id}`}
                    onClick={() => setPreviewService(null)}
                  >
                    <Button variant="outline" className="w-full font-semibold">
                      <span>Abrir Página Completa de Engenharia</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })()}
        </SheetContent>
      </Sheet>
    </section>
  );
};
