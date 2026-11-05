import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Workflow, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause, 
  ChevronRight, 
  Cog,
  HardHat,
  Factory,
  Wrench,
  Construction,
  Activity,
  Sparkles,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../i18n/LanguageContext';

export const DifferentialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      num: '01',
      stationCode: 'ESTAÇÃO // 01',
      phaseName: 'DIAGNÓSTICO & ESPECIFICAÇÃO',
      title: '1 - Entender a demanda',
      description: 'Objetivo, local, prazo, restrições, documentação e critérios de sucesso.',
      icon: Search,
      industrialIcon: HardHat,
      badge: 'Entrada de Engenharia',
      tags: ['Objetivo', 'Local', 'Prazo', 'Restrições', 'Documentação', 'Critérios de Sucesso'],
    },
    {
      num: '02',
      stationCode: 'ESTAÇÃO // 02',
      phaseName: 'ARQUITETURA & MATRIZ TÉCNICA',
      title: '2 - Estruturar a solução',
      description: 'Definição preliminar de escopo, interfaces, competências e responsabilidades.',
      icon: Workflow,
      industrialIcon: Construction,
      badge: 'Modelagem do Escopo',
      tags: ['Escopo Preliminar', 'Interfaces', 'Competências', 'Matriz RACI', 'Análise de Riscos'],
    },
    {
      num: '03',
      stationCode: 'ESTAÇÃO // 03',
      phaseName: 'HOMOLOGAÇÃO & SINERGIA',
      title: '3 - Conectar os participantes',
      description: 'Identificação e avaliação de fornecedores ou especialistas adequados ao caso.',
      icon: Users,
      industrialIcon: Wrench,
      badge: 'Alocação Técnica',
      tags: ['Especialistas Sênior', 'Due Diligence', 'Avaliação Técnica', 'Homologação'],
    },
    {
      num: '04',
      stationCode: 'ESTAÇÃO // 04',
      phaseName: 'GOVERNANÇA & ENTREGA',
      title: '4 - Propor e acompanhar',
      description: 'Condições comerciais, responsáveis, marcos e modelo de acompanhamento formalizados.',
      icon: CheckCircle2,
      industrialIcon: Factory,
      badge: 'Operação & SLA',
      tags: ['Condições Comerciais', 'Responsáveis Diretos', 'Marcos e Cronograma', 'Auditoria Contínua'],
    },
  ];

  // Auto-cycle through the 4 steps dynamically like an assembly conveyor
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section 
      id="diferenciais" 
      data-dark-section="true" 
      className="py-24 lg:py-32 bg-[#061e14] text-white scroll-mt-20 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Engineering Blueprint & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industrial-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#34d399" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="#34d399" />
              <circle cx="40" cy="40" r="1.5" fill="#34d399" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industrial-grid)" />
        </svg>
      </div>

      {/* Rotating Mechanical Gear in the Background Accent */}
      <div className="absolute -top-16 -right-16 pointer-events-none opacity-[0.06] text-emerald-300">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <Cog className="w-96 h-96" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
            <Factory className="h-3.5 w-3.5 text-emerald-400" />
            <span>{t.differentialsSection.badge || 'ESTEIRA DE ENGENHARIA & GOVERNANÇA'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            {t.differentialsSection.title}{' '}
            <span className="text-emerald-400">
              {t.differentialsSection.titleHighlight}
            </span>
          </h2>

          <p className="text-emerald-100/85 text-base sm:text-lg leading-relaxed font-normal">
            {t.differentialsSection.lead || 'Eliminamos a incerteza e a fragmentação operacional com uma esteira estruturada em quatro etapas fundamentais.'}
          </p>
        </div>

        {/* Industrial Conveyor Belt Line (Linha de Montagem Industrial) */}
        <div className="relative mb-6 hidden lg:block">
          <div className="h-2 w-full bg-emerald-950/90 rounded-full overflow-hidden border border-emerald-500/20 relative">
            {/* Animated Conveyor Track Treads */}
            <motion.div
              className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_16px,#34d399_16px,#34d399_24px)] opacity-30"
              animate={{ x: ['0px', '-48px'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Laser Packet Beacon Moving Along the Line */}
            <motion.div
              className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399]"
              animate={{ left: `${activeStep * 25}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Assembly Line Markers */}
          <div className="grid grid-cols-4 mt-2 text-[10px] font-mono tracking-widest text-emerald-400/60 uppercase">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeStep === idx ? 'bg-emerald-400 animate-ping' : 'bg-emerald-700/60'}`} />
                <span className={activeStep === idx ? 'text-emerald-300 font-bold' : ''}>
                  {s.stationCode}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Cards da Sequência Operacional (Movidos para cima) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const StepIcon = step.icon;
            const IndustrialIcon = step.industrialIcon;

            return (
              <motion.div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between overflow-hidden border ${
                  isCurrent
                    ? 'bg-gradient-to-b from-emerald-950/70 via-[#08291c] to-[#061e14] border-emerald-400 shadow-xl shadow-emerald-950/70 ring-1 ring-emerald-400/60'
                    : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/25'
                }`}
              >
                {/* CAD / Engineering Technical Corner Accent */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors ${
                  isCurrent ? 'border-emerald-300' : 'border-white/20'
                }`} />
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors ${
                  isCurrent ? 'border-emerald-300' : 'border-white/20'
                }`} />

                {/* Laser Scan Beam Animation on the Active Card */}
                {isCurrent && (
                  <motion.div
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399] pointer-events-none"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}

                <div>
                  {/* Top Industrial Telemetry Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-white/30'
                      }`} />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                        {step.stationCode}
                      </span>
                    </div>

                    {/* Rotating Gear / Mechanical Icon */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                      isCurrent 
                        ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40 shadow-sm' 
                        : 'bg-white/5 text-white/50 border-white/10 group-hover:text-white'
                    }`}>
                      <motion.div
                        animate={isCurrent ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      >
                        <IndustrialIcon className="h-4.5 w-4.5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Station Title */}
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 transition-colors ${
                    isCurrent ? 'text-white' : 'text-white/90 group-hover:text-white'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Clean Description (sem colchetes) */}
                  <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-normal mb-5">
                    {step.description}
                  </p>

                  {/* Engineering Deliverable Checklist Tags */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10 mb-5">
                    {step.tags.slice(0, 3).map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-[11px] text-emerald-200/70">
                        <span className={`w-1 h-1 rounded-full ${isCurrent ? 'bg-emerald-400' : 'bg-white/40'}`} />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Industrial Status Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className={`font-mono uppercase tracking-wider ${
                    isCurrent ? 'text-emerald-300 font-bold' : 'text-white/40'
                  }`}>
                    {isCurrent ? '● Em Operação' : 'Aguardando Linha'}
                  </span>

                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="text-[10px] font-semibold">{isCurrent ? 'Ativa' : 'Ver'}</span>
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${isCurrent ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industrial SCADA Control & Telemetry Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <motion.div
                animate={!isPaused ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <Cog className="h-5 w-5" />
              </motion.div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  FLUXO INDUSTRIAL ATIVO:
                </span>
                <span className="text-xs text-white font-semibold">
                  {steps[activeStep].title}
                </span>
              </div>
              <p className="text-[11px] text-emerald-100/70 font-normal">
                Esteira de engenharia sincronizada com monitoramento de marcos e garantia técnica contínua.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title={isPaused ? 'Iniciar rotação contínua' : 'Pausar rotação'}
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              <span className="hidden md:inline font-mono">{isPaused ? 'Pausado' : 'Automático'}</span>
            </button>

            {/* Direct CTA */}
            <Button
              size="sm"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#061e14] font-bold text-xs h-10 px-5 shadow-sm"
            >
              <span>Quero estruturar uma demanda</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
