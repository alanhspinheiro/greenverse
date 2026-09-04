import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Globe, Target, Construction, Briefcase, ShieldCheck, 
  Lightbulb, Activity, CheckCircle2, ChevronRight, Layers, ArrowRight,
  Sparkles, FileText, Check, ChevronDown
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../i18n/LanguageContext';
import ecosystemBg from '../assets/images/ecosystem_panoramic_bg_1787333228456.jpg';

export const EcosystemSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hub' | 'estrutura' | 'esteira' | 'pilares'>('hub');
  const [isDeepTextOpen, setIsDeepTextOpen] = useState(false);
  const [selectedStructureId, setSelectedStructureId] = useState<number | null>(null);

  const tabs = [
    { id: 'hub', label: 'Hub Integrado', icon: Layers },
    { id: 'estrutura', label: 'Estrutura Corporativa', icon: Building2 },
    { id: 'esteira', label: 'Esteira Operacional', icon: Activity },
    { id: 'pilares', label: 'Pilares & Diretrizes', icon: Target },
  ] as const;

  const corePillars = [
    {
      verb: 'CONNECT',
      title: 'Conexão Especializada',
      desc: 'Mapeamos e mobilizamos as melhores competências técnicas para cada demanda.',
      icon: Globe,
    },
    {
      verb: 'INTEGRATE',
      title: 'Gestão Unificada',
      desc: 'Substituímos dezenas de contratos dispersos por uma única interface de controle.',
      icon: Layers,
    },
    {
      verb: 'CONTROL',
      title: 'Auditoria & SLAs',
      desc: 'Monitoramento contínuo de cronogramas, conformidade legal, segurança e custos.',
      icon: ShieldCheck,
    },
    {
      verb: 'DELIVER',
      title: 'Entrega de Alto Impacto',
      desc: 'Garantia técnica e comprovação de resultados operacionais com conformidade.',
      icon: CheckCircle2,
    },
  ];

  const structureItems = [
    {
      num: '01',
      title: t.ecosystem.structureCards.holding.title,
      desc: t.ecosystem.structureCards.holding.desc,
      icon: Building2,
      details: 'Unidade central de estratégia, investimentos, controle corporativo e governança de capital.',
    },
    {
      num: '02',
      title: t.ecosystem.structureCards.brasil.title,
      desc: t.ecosystem.structureCards.brasil.desc,
      icon: Globe,
      details: 'Operação nacional com foco em indústrias, infraestrutura, concessões e facilities em escala.',
    },
    {
      num: '03',
      title: t.ecosystem.structureCards.mercosul.title,
      desc: t.ecosystem.structureCards.mercosul.desc,
      icon: Target,
      details: 'Plataforma transfronteiriça com presença no Corredor Bioceânico e operações multinacionais.',
    },
    {
      num: '04',
      title: t.ecosystem.structureCards.infra.title,
      desc: t.ecosystem.structureCards.infra.desc,
      icon: Construction,
      details: 'Braço técnico de engenharia civil, montagem eletromecânica, tubulações e NR-13.',
    },
    {
      num: '05',
      title: t.ecosystem.structureCards.specialized.title,
      desc: t.ecosystem.structureCards.specialized.desc,
      icon: Briefcase,
      details: 'Empresas do grupo com know-how vertical em facilities, energia, resíduos e licenciamento.',
    },
    {
      num: '06',
      title: t.ecosystem.structureCards.approved.title,
      desc: t.ecosystem.structureCards.approved.desc,
      icon: ShieldCheck,
      details: 'Rede credenciada e auditada com conformidade jurídica, técnica e de segurança rigorosas.',
    },
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Diagnóstico Integrado',
      desc: 'Análise técnica de necessidades, riscos operacionais e requisitos de conformidade.',
    },
    {
      step: '02',
      title: 'Estruturação & Alocação',
      desc: 'Seleção das empresas e especialistas ideais para o escopo contratado.',
    },
    {
      step: '03',
      title: 'Compliance & Mitigação',
      desc: 'Validação prévia de documentações, normas vigentes e exigências ambientais.',
    },
    {
      step: '04',
      title: 'Execução Técnica',
      desc: 'Implementação em campo sob supervisão direta e padronização operacional.',
    },
    {
      step: '05',
      title: 'Gestão de SLAs',
      desc: 'Monitoramento contínuo de entregas, indicadores de qualidade e desempenho.',
    },
    {
      step: '06',
      title: 'Validação & Entrega',
      desc: 'Comissionamento final, entrega técnica e emissão de laudos conclusivos.',
    },
  ];

  const pillarsList = [
    { title: t.ecosystem.pillars[0]?.title || 'Eficiência Operacional', subtitle: t.ecosystem.pillars[0]?.subtitle || 'Processos ágeis e controle rigoroso', icon: Target },
    { title: t.ecosystem.pillars[1]?.title || 'Sustentabilidade Aplicada', subtitle: t.ecosystem.pillars[1]?.subtitle || 'Soluções que equilibram economia e meio ambiente', icon: Lightbulb },
    { title: t.ecosystem.pillars[2]?.title || 'Inteligência Coletiva', subtitle: t.ecosystem.pillars[2]?.subtitle || 'Integração de múltiplos especialistas', icon: Building2 },
    { title: t.ecosystem.pillars[3]?.title || 'Conformidade e Segurança', subtitle: t.ecosystem.pillars[3]?.subtitle || 'Rigor técnico e legal inegociáveis', icon: ShieldCheck },
    { title: t.ecosystem.pillars[4]?.title || 'Agilidade e Escala', subtitle: t.ecosystem.pillars[4]?.subtitle || 'Capacidade de resposta e mobilização rápida', icon: Activity },
    { title: t.ecosystem.pillars[5]?.title || 'Visão de Longo Prazo', subtitle: t.ecosystem.pillars[5]?.subtitle || 'Parcerias perenes com geração contínua de valor', icon: Globe },
  ];

  return (
    <section id="quem-somos" data-dark-section="true" className="relative py-28 lg:py-36 overflow-hidden bg-[#061e14] text-white">
      {/* High-legibility background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={ecosystemBg} 
          alt="Ecossistema Greenverse" 
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061e14] via-[#061e14]/95 to-[#061e14]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-400/40 text-emerald-300 bg-emerald-950/60 px-3.5 py-1 text-xs font-semibold tracking-wider">
            {t.ecosystem.badge || 'ARQUITETURA DE VALOR'}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            {t.ecosystem.title}{' '}
            <span className="text-emerald-400">{t.ecosystem.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
            {t.ecosystem.lead}
          </p>
        </div>

        {/* Minimalist Segmented Navigation (Tabs) */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-white/5 border border-white/10 rounded-2xl max-w-2xl backdrop-blur-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-[#061e14] shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[380px]">
          {/* TAB 1: HUB INTEGRADO */}
          {activeTab === 'hub' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              {/* The 4 Action Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {corePillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                            {item.verb}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-[#061e14] transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-emerald-100/75 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contrast: Traditional Model vs. Greenverse Ecosystem */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="space-y-3 pb-6 lg:pb-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Modelo Tradicional Fragmentado
                  </div>
                  <h4 className="text-lg font-bold text-white">Múltiplos Fornecedores e Riscos Dispersos</h4>
                  <ul className="space-y-2 text-sm text-emerald-100/70 pt-2">
                    <li className="flex items-center gap-2.5">
                      <span className="text-rose-400 font-mono text-xs">✕</span>
                      Contratos isolados sem integração técnica
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-rose-400 font-mono text-xs">✕</span>
                      Dificuldade de controle de SLAs e conformidade legal
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-rose-400 font-mono text-xs">✕</span>
                      Dispersão de responsabilidade em caso de inconformidades
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 lg:pl-8">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Ecossistema Greenverse
                  </div>
                  <h4 className="text-lg font-bold text-white">Gestão Centralizada de Ponta a Ponta</h4>
                  <ul className="space-y-2 text-sm text-emerald-100/90 pt-2">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      Interface única para contratação, gestão e faturamento
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      Auditoria técnica contínua e garantia contratual
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      Redução comprovada de passivos trabalhistas e operacionais
                    </li>
                  </ul>
                </div>
              </div>

              {/* Expandable full strategic statement (less text visible by default) */}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => setIsDeepTextOpen(!isDeepTextOpen)}
                  className="flex items-center justify-between w-full py-4 text-left text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {isDeepTextOpen ? 'Ocultar declaração estratégica' : 'Ver declaração de posicionamento completa'}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDeepTextOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDeepTextOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden space-y-4 pt-2 pb-6 text-sm text-emerald-100/80 leading-relaxed"
                    >
                      <p>{t.ecosystem.paragraph1}</p>
                      <p>{t.ecosystem.integratedNetwork.p1}</p>
                      <p>{t.ecosystem.integratedNetwork.p2Lead} <span className="text-emerald-300 italic">{t.ecosystem.integratedNetwork.p2Highlight}</span> {t.ecosystem.integratedNetwork.p2Tail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ESTRUTURA CORPORATIVA */}
          {activeTab === 'estrutura' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="max-w-2xl mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.ecosystem.structureTitle} <span className="text-emerald-400">{t.ecosystem.structureTitleHighlight}</span>
                </h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  {t.ecosystem.structureLead}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {structureItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedStructureId === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedStructureId(isSelected ? null : idx)}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-emerald-950/80 border-emerald-400/80 ring-1 ring-emerald-400/50' 
                          : 'bg-white/5 border-white/10 hover:border-emerald-400/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-mono text-xs font-bold text-emerald-400">
                            {item.num}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        
                        <p className="text-sm text-emerald-100/75 leading-relaxed font-normal mb-4">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-300">
                        <span>{isSelected ? 'Ocultar detalhes' : 'Ver escopo técnico'}</span>
                        <ChevronRight className={`h-3.5 w-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                      </div>

                      {isSelected && (
                        <p className="mt-3 pt-3 border-t border-emerald-500/20 text-xs text-emerald-100/90 leading-relaxed">
                          {item.details}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 3: ESTEIRA OPERACIONAL */}
          {activeTab === 'esteira' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="max-w-2xl mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.ecosystem.integratedNetwork.interfaceTitle || 'Interface Única em 6 Etapas'}
                </h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  {t.ecosystem.integratedNetwork.processLead || 'Um fluxo estruturado do diagnóstico até a validação técnica final.'}
                </p>
              </div>

              {/* 6-Step Pipeline in clean scannable horizontal grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pipelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                        {step.step}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm text-emerald-100/75 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-emerald-200">
                  Precisa de uma esteira customizada para as operações da sua planta?
                </p>
                <Button
                  size="sm"
                  onClick={() => {
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-[#061e14] font-bold text-xs shrink-0"
                >
                  Consultar Engenharia
                </Button>
              </div>
            </motion.div>
          )}

          {/* TAB 4: PILARES & DIRETRIZES */}
          {activeTab === 'pilares' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              {/* Visão & Missão Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 block">
                      {t.ecosystem.visionBadge}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {t.ecosystem.visionTitle}
                    </h4>
                    <p className="text-sm text-emerald-100/80 leading-relaxed mb-4">
                      {t.ecosystem.visionP1}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-xs font-semibold text-emerald-300">
                    {t.ecosystem.visionP3}
                  </div>
                </div>

                <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 block">
                      {t.ecosystem.missionBadge}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {t.ecosystem.missionTitle}
                    </h4>
                    <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
                      {t.ecosystem.missionDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-xs font-semibold text-emerald-300">
                    Compromisso corporativo contínuo
                  </div>
                </div>
              </div>

              {/* 6 Pilares in an airy 3x2 grid */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6">
                  {t.ecosystem.pillarsTitle} <span className="text-emerald-400">{t.ecosystem.pillarsTitleHighlight}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {pillarsList.map((pilar, idx) => {
                    const Icon = pilar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white mb-1">
                            {pilar.title}
                          </h5>
                          <p className="text-xs text-emerald-100/70 leading-relaxed">
                            {pilar.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
