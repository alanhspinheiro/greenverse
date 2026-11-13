import * as React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, ArrowRight, Eye, CheckCircle2, 
  HardHat, Leaf, Building2, ShieldCheck, Cpu, 
  Layers, Search, Sparkles, PhoneCall, ChevronRight,
  ExternalLink, Check, X, Filter, Target
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

// Component that highlights matched keywords inside any text
export const HighlightText: React.FC<{ text: string; query: string; className?: string }> = ({ 
  text, 
  query, 
  className = '' 
}) => {
  if (!query || !query.trim()) {
    return <span className={className}>{text}</span>;
  }

  const trimmed = query.trim();
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  try {
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);

    return (
      <span className={className}>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark
              key={i}
              className="bg-amber-300 dark:bg-amber-400/30 text-amber-950 dark:text-amber-200 font-extrabold px-1 py-0.5 rounded shadow-2xs border border-amber-400/40"
            >
              {part}
            </mark>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </span>
    );
  } catch {
    return <span className={className}>{text}</span>;
  }
};

// Helper that detects exactly why a service matched the search query
export const getMatchReason = (service: typeof SERVICES[0], query: string) => {
  if (!query || !query.trim()) return null;
  const q = query.toLowerCase().trim();

  // 1. Tag match
  const tags = getTagsForService(service.id);
  const matchedTag = tags.find((t) => t.toLowerCase().includes(q));
  if (matchedTag) {
    return {
      type: 'Tag / Competência',
      snippet: matchedTag,
      inTag: true
    };
  }

  // 2. Title match
  if (service.title.toLowerCase().includes(q)) {
    return {
      type: 'Título do Serviço',
      snippet: service.title,
      inTitle: true
    };
  }

  // 3. Details match
  for (const group of service.details || []) {
    if (group.category?.toLowerCase().includes(q)) {
      return {
        type: 'Pilar Técnico',
        snippet: group.category,
        inDetails: true
      };
    }
    const matchedItem = group.items?.find((item: string) => item.toLowerCase().includes(q));
    if (matchedItem) {
      return {
        type: 'Escopo Detalhado',
        snippet: matchedItem,
        inDetails: true
      };
    }
  }

  // 4. Description match
  if (service.description.toLowerCase().includes(q)) {
    return {
      type: 'Descrição do Serviço',
      snippet: service.description,
      inDesc: true
    };
  }

  // 5. Area match
  const area = getAreaForService(service.id);
  if (area.title.toLowerCase().includes(q) || area.shortTitle.toLowerCase().includes(q)) {
    return {
      type: 'Área Estratégica',
      snippet: area.shortTitle,
      inArea: true
    };
  }

  return {
    type: 'Catálogo de Serviços',
    snippet: query
  };
};

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedAreaId, setSelectedAreaId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewService, setPreviewService] = useState<typeof SERVICES[0] | null>(null);

  // Active strategic area data
  const activeArea = useMemo(() => {
    return STRATEGIC_AREAS.find((a) => a.id === selectedAreaId) || null;
  }, [selectedAreaId]);

  // Total matches across the entire catalog (regardless of selectedAreaId)
  const totalMatchesAcrossCatalog = useMemo(() => {
    if (!searchQuery.trim()) return SERVICES.length;
    const q = searchQuery.toLowerCase().trim();
    return SERVICES.filter((service) => {
      const area = getAreaForService(service.id);
      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = service.description.toLowerCase().includes(q);
      const tags = getTagsForService(service.id);
      const matchTags = tags.some((tag) => tag.toLowerCase().includes(q));
      const matchDetails = service.details?.some((d: any) =>
        d.category?.toLowerCase().includes(q) ||
        d.items?.some((it: string) => it.toLowerCase().includes(q))
      );
      const areaMatch = 
        area.title.toLowerCase().includes(q) ||
        area.shortTitle.toLowerCase().includes(q) ||
        area.description.toLowerCase().includes(q) ||
        area.keyHighlights.some((h) => h.toLowerCase().includes(q));

      return areaMatch || matchTitle || matchDesc || matchTags || matchDetails;
    }).length;
  }, [searchQuery]);

  // Calculate live matching service counts for each strategic area while typing
  const areaMatchCounts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const counts: Record<string, number> = {};

    STRATEGIC_AREAS.forEach((area) => {
      if (!q) {
        counts[area.id] = area.serviceIds.length;
        return;
      }

      const areaSelfMatch = 
        area.title.toLowerCase().includes(q) ||
        area.shortTitle.toLowerCase().includes(q) ||
        area.description.toLowerCase().includes(q) ||
        area.keyHighlights.some((h) => h.toLowerCase().includes(q));

      const matchingServicesInArea = SERVICES.filter((s) => {
        if (!area.serviceIds.includes(s.id)) return false;
        if (areaSelfMatch) return true;
        const matchTitle = s.title.toLowerCase().includes(q);
        const matchDesc = s.description.toLowerCase().includes(q);
        const tags = getTagsForService(s.id);
        const matchTags = tags.some((t) => t.toLowerCase().includes(q));
        const matchDetails = s.details?.some((d: any) =>
          d.category?.toLowerCase().includes(q) ||
          d.items?.some((it: string) => it.toLowerCase().includes(q))
        );
        return matchTitle || matchDesc || matchTags || matchDetails;
      });

      counts[area.id] = matchingServicesInArea.length;
    });

    return counts;
  }, [searchQuery]);

  // Total matching strategic areas
  const matchingAreasCount = useMemo(() => {
    return STRATEGIC_AREAS.filter((area) => (areaMatchCounts[area.id] || 0) > 0).length;
  }, [areaMatchCounts]);

  // Filtered services based on current search query and selected area
  const filteredServices = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return SERVICES.filter((service) => {
      const area = getAreaForService(service.id);

      // If user selected an area, respect it (unless user is in 'all')
      if (selectedAreaId !== 'all' && !area.serviceIds.includes(service.id)) {
        return false;
      }

      // If no search query, then area filter is sufficient
      if (!q) return true;

      // Area-level match
      const areaMatch = 
        area.title.toLowerCase().includes(q) ||
        area.shortTitle.toLowerCase().includes(q) ||
        area.description.toLowerCase().includes(q) ||
        area.keyHighlights.some((h) => h.toLowerCase().includes(q));

      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = service.description.toLowerCase().includes(q);
      const tags = getTagsForService(service.id);
      const matchTags = tags.some((tag) => tag.toLowerCase().includes(q));
      const matchDetails = service.details?.some((d: any) =>
        d.category?.toLowerCase().includes(q) ||
        d.items?.some((it: string) => it.toLowerCase().includes(q))
      );

      return areaMatch || matchTitle || matchDesc || matchTags || matchDetails;
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

  const isSearchActive = Boolean(searchQuery.trim());

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
        <div className="max-w-3xl mb-8">
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

        {/* PROMINENT TOP SEARCH BAR (Permite ao usuário filtrar rapidamente áreas e serviços enquanto digita) */}
        <div className="mb-10 max-w-4xl">
          <div className="relative flex items-center bg-card rounded-2xl border-2 border-border/80 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 shadow-sm transition-all p-1.5 sm:p-2">
            <div className="pl-3 pr-2 text-primary flex items-center pointer-events-none">
              <Search className="h-5 w-5" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por área estratégica, serviço, norma técnica (ex: NR-13, ESG, facilities, segurança, TI)..."
              className="w-full bg-transparent px-2 py-2 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1.5 mr-1 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1 text-xs font-semibold shrink-0"
                title="Limpar busca"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Limpar</span>
              </button>
            )}

            {/* Live Count Indicator Badge */}
            <div className="hidden sm:flex items-center gap-1.5 pr-2.5 pl-2.5 border-l border-border/70 text-xs font-mono text-muted-foreground shrink-0">
              <span className={`px-2 py-0.5 rounded-md font-bold ${
                filteredServices.length > 0 
                  ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {filteredServices.length}
              </span>
              <span>{filteredServices.length === 1 ? 'serviço' : 'serviços'}</span>
            </div>
          </div>

          {/* Quick Filter Tag Suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground/80 flex items-center gap-1 mr-1">
              <Sparkles className="h-3 w-3 text-primary" /> Sugestões rápidas:
            </span>
            {['NR-13', 'ESG & Carbono', 'Facilities', 'PMOC Climatização', 'Vigilância CFTV', 'Licenciamento', 'Obras Industriais', 'TI & Cibersegurança'].map((chip) => {
              const isSelected = searchQuery.toLowerCase() === chip.toLowerCase();
              return (
                <button
                  key={chip}
                  onClick={() => setSearchQuery(isSelected ? '' : chip)}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 border-amber-600 font-extrabold shadow-xs'
                      : 'bg-card hover:bg-muted text-foreground/80 border-border/70 hover:border-primary/40'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>

          {/* Live Search Active Feedback Banner with high visual prominence */}
          {isSearchActive && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border-2 border-amber-500/40 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
                  <Target className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-foreground text-xs sm:text-sm">
                      Resultados destacados para <span className="underline decoration-amber-500 underline-offset-2">"{searchQuery}"</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase">
                      {filteredServices.length} {filteredServices.length === 1 ? 'encontrado' : 'encontrados'}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    As palavras-chave e escopos correspondentes estão realçados visualmente em amarelo nos cards abaixo.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
                {selectedAreaId !== 'all' && totalMatchesAcrossCatalog > filteredServices.length && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedAreaId('all')}
                    className="text-xs font-bold border-amber-500/50 hover:bg-amber-500/15 text-amber-900 dark:text-amber-200"
                  >
                    Ver todas as {matchingAreasCount} áreas ({totalMatchesAcrossCatalog})
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5 mr-1" />
                  Limpar filtro
                </Button>
              </div>
            </motion.div>
          )}
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
                Áreas Estratégicas · Filtre por categoria ou navegue livremente
              </span>
            </div>

            <div className="text-xs font-mono text-muted-foreground">
              {matchingAreasCount} de 5 áreas com serviços disponíveis
            </div>
          </div>

          {/* 5 Clean Strategic Area Cards matching reference image layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STRATEGIC_AREAS.map((area, idx) => {
              const AreaIcon = area.icon;
              const isSelected = selectedAreaId === area.id;
              const matchCount = areaMatchCounts[area.id] ?? area.serviceIds.length;
              const hasMatches = matchCount > 0;

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.08, 
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                  className="h-full"
                >
                  <button
                    onClick={() => setSelectedAreaId(isSelected ? 'all' : area.id)}
                    className={`w-full h-full text-left p-5 rounded-2xl border transition-all duration-300 ease-out transform-gpu hover:scale-105 hover:shadow-xl relative hover:z-20 flex flex-col justify-between group overflow-hidden bg-card ${
                      isSearchActive && !hasMatches
                        ? 'opacity-35 grayscale-[50%] border-border/40 hover:opacity-75'
                        : isSearchActive && hasMatches
                        ? 'border-amber-500 ring-2 ring-amber-400/50 bg-gradient-to-b from-amber-500/[0.08] to-card shadow-[0_0_24px_-4px_rgba(245,158,11,0.35)]'
                        : isSelected
                        ? area.colorClasses.cardActiveBorder
                        : `border-border/80 ${area.colorClasses.cardBorderHover} shadow-xs`
                    }`}
                  >
                    {/* Animated shimmer sweep on matched strategic area */}
                    {isSearchActive && hasMatches && (
                      <motion.div
                        aria-hidden="true"
                        initial={{ x: '-120%' }}
                        animate={{ x: '220%' }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: 'easeInOut',
                        }}
                        className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-300/25 to-transparent -skew-x-12 z-0"
                      />
                    )}
                    <div className="relative z-10">
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
                    <div className="pt-3 border-t border-border/50">
                      {isSearchActive ? (
                        <div className={`py-1 px-2 rounded-lg text-[10px] font-bold flex items-center justify-between ${
                          hasMatches
                            ? 'bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 font-extrabold'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <span>{hasMatches ? `✓ ${matchCount} no filtro` : '0 correspondências'}</span>
                          {hasMatches && <Sparkles className="h-3 w-3 text-amber-600 shrink-0" />}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-muted-foreground">
                            {area.serviceIds.length} serviços
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${
                            isSelected ? 'text-primary font-extrabold' : 'text-muted-foreground/80 group-hover:text-foreground'
                          }`}>
                            {isSelected ? 'Ativo ✓' : 'Explorar'}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Filter Pill for All Services */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
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

            <span className="font-mono text-[11px]">
              {filteredServices.length} {filteredServices.length === 1 ? 'serviço exibido' : 'serviços exibidos'}
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

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="py-16 text-center border rounded-3xl bg-card border-dashed border-border mb-12">
            <Layers className="h-10 w-10 mx-auto text-muted-foreground mb-3 opacity-60" />
            <h4 className="text-base font-bold text-foreground mb-1">Nenhum serviço correspondente</h4>
            <p className="text-xs text-muted-foreground max-w-md mx-auto mb-4">
              Não encontramos resultados para <strong>"{searchQuery}"</strong>{selectedAreaId !== 'all' ? ` dentro de ${activeArea?.shortTitle}` : ''}. Tente outros termos ou redefina o filtro.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery('')}
              >
                Limpar Busca
              </Button>
              {selectedAreaId !== 'all' && (
                <Button
                  size="sm"
                  onClick={() => setSelectedAreaId('all')}
                >
                  Buscar em Todas as Áreas
                </Button>
              )}
            </div>
          </div>
        )}

        {/* 2. SPECIFIC SERVICES GRID (Adopting the reference image card visual concept with diagonal arrow ↗) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            const area = getAreaForService(service.id);
            const tags = getTagsForService(service.id);
            const matchReason = isSearchActive ? getMatchReason(service, searchQuery) : null;

            return (
              <motion.div
                key={`${service.id}-${isSearchActive ? 'matched' : 'default'}`}
                initial={{ opacity: 0, y: 24, scale: isSearchActive ? 0.97 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ 
                  duration: 0.45, 
                  delay: (idx % 4) * 0.06, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="relative"
              >
                {/* Animated luminous outer glow aura behind matched service cards */}
                {isSearchActive && (
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.35, 0.75, 0.35] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none -inset-0.5 absolute rounded-2xl bg-gradient-to-r from-amber-400/40 via-emerald-400/35 to-amber-500/40 blur-md z-0"
                  />
                )}

                {/* High-visibility card with evident search match styling + shimmer animation */}
                <Card className={`h-full flex flex-col justify-between p-5 rounded-2xl border bg-card shadow-xs hover:shadow-xl hover:scale-105 relative hover:z-20 transition-all duration-300 ease-out transform-gpu group overflow-hidden z-10 ${
                  isSearchActive
                    ? 'border-amber-500 ring-2 ring-amber-400/60 bg-gradient-to-b from-amber-500/[0.07] via-card to-card shadow-[0_10px_30px_-8px_rgba(245,158,11,0.35)]'
                    : `border-border/80 ${area.colorClasses.cardBorderHover}`
                }`}>
                  {/* Animated diagonal light-shimmer sweep across matched cards */}
                  {isSearchActive && (
                    <motion.div
                      aria-hidden="true"
                      initial={{ x: '-130%' }}
                      animate={{ x: '240%' }}
                      transition={{
                        duration: 1.8,
                        delay: (idx % 4) * 0.15,
                        repeat: Infinity,
                        repeatDelay: 3.2,
                        ease: 'easeInOut',
                      }}
                      className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-300/30 dark:via-amber-400/20 to-transparent -skew-x-12 z-0"
                    />
                  )}

                  <div className="relative z-10">
                    {/* Evident Match Notification Banner on Matched Cards */}
                    {isSearchActive && matchReason && (
                      <div className="mb-3 px-2.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-950 dark:text-amber-200 text-[11px] font-bold flex items-center justify-between gap-1 shadow-2xs">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
                          </span>
                          <span className="truncate">Resultado correspondente</span>
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/30 text-[9px] font-mono uppercase tracking-wider shrink-0 font-extrabold">
                          {matchReason.type}
                        </span>
                      </div>
                    )}

                    {/* Top row: Category tag + Diagonal Arrow (↗) linking to service */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${area.colorClasses.badge}`}>
                        {area.number} • {area.shortTitle.split(' & ')[0]}
                      </span>

                      {/* Top-right diagonal arrow link */}
                      <Link
                        to={`/servicos/${service.id}`}
                        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                          isSearchActive
                            ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-xs'
                            : 'bg-muted/60 hover:bg-primary hover:text-white text-muted-foreground group-hover:text-foreground'
                        }`}
                        title="Ver escopo completo"
                      >
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Icon and Title (with highlighted search query) */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isSearchActive
                          ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                          : area.colorClasses.iconBg
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <Link
                        to={`/servicos/${service.id}`}
                        className="group/link block min-w-0"
                      >
                        <h3 className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                          isSearchActive ? 'text-foreground group-hover:text-amber-600' : area.colorClasses.title
                        }`}>
                          <HighlightText text={service.title} query={searchQuery} />
                        </h3>
                      </Link>
                    </div>

                    {/* Highlighted Match Snippet Callout (when matched in deep items/normas) */}
                    {isSearchActive && matchReason?.inDetails && matchReason.snippet && (
                      <div className="mb-3.5 p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-[11px]">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300 block mb-0.5">
                          Trecho no escopo técnico:
                        </span>
                        <p className="text-foreground/90 font-medium italic line-clamp-2">
                          "<HighlightText text={matchReason.snippet} query={searchQuery} />"
                        </p>
                      </div>
                    )}

                    {/* Short Objective Description (with highlighted query) */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 font-normal">
                      <HighlightText text={service.description} query={searchQuery} />
                    </p>

                    {/* Capability Tags (Highlighted when matched) */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tags.slice(0, 3).map((tag, tIdx) => {
                        const isTagMatched = isSearchActive && tag.toLowerCase().includes(searchQuery.toLowerCase().trim());
                        return (
                          <span
                            key={tIdx}
                            className={`text-[10px] px-2 py-0.5 rounded-md transition-all ${
                              isTagMatched
                                ? 'bg-amber-500 text-slate-950 font-extrabold border border-amber-600 shadow-xs ring-2 ring-amber-400/40'
                                : 'bg-muted/70 text-foreground/75 border border-border/50 font-medium'
                            }`}
                          >
                            <HighlightText text={tag} query={searchQuery} />
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contextual Action Footer */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2 relative z-10">
                    <button
                      onClick={() => handleScrollToContact(service.title)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                        isSearchActive
                          ? 'bg-amber-500/15 hover:bg-amber-500 hover:text-slate-950 text-amber-900 dark:text-amber-200 border-amber-500/40'
                          : area.colorClasses.ctaButton
                      }`}
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
            {selectedAreaId !== 'all' || isSearchActive ? (
              <Button
                onClick={() => {
                  setSelectedAreaId('all');
                  setSearchQuery('');
                }}
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
                    <HighlightText text={previewService.title} query={searchQuery} />
                  </SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground leading-relaxed">
                    <HighlightText text={previewService.description} query={searchQuery} />
                  </SheetDescription>
                </SheetHeader>

                {/* Scope highlights */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-foreground/80">
                      <HighlightText text={tag} query={searchQuery} />
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
                        <p className="text-xs font-bold text-foreground mb-1">
                          <HighlightText text={d.category} query={searchQuery} />
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <HighlightText text={d.items?.slice(0, 4).join(', ') + '...'} query={searchQuery} />
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
