import * as React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, CheckCircle2, Zap, ArrowRight, TrendingUp, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../i18n/LanguageContext';

export const DifferentialsSection: React.FC = () => {
  const { t } = useLanguage();

  const differentials = [
    {
      title: 'Governança & Interface Única',
      desc: 'Um único contrato, um único ponto de contato e relatórios consolidados para toda a operação.',
      icon: Layers,
    },
    {
      title: 'Redução Comprovada de Riscos',
      desc: 'Due diligence minuciosa e conformidade contínua com órgãos reguladores (IBAMA, ANVISA, MTE, Cetesb).',
      icon: ShieldCheck,
    },
    {
      title: 'Agilidade Operacional com SLA',
      desc: 'Mobilização rápida de equipes e monitoramento em tempo real de prazos e padrões de entrega.',
      icon: Zap,
    },
    {
      title: 'Expertise Multidisciplinar',
      desc: 'Engenheiros, consultores jurídicos e especialistas setoriais integrados na mesma mesa técnica.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="diferenciais" data-dark-section="true" className="py-24 lg:py-32 bg-[#0A1A12] text-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Differentiators */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
                {t.differentialsSection.badge || 'POR QUE A GREENVERSE'}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
                {t.differentialsSection.title || 'Por que o modelo Greenverse é diferente?'}
              </h2>
              <p className="text-emerald-100/80 text-base sm:text-lg leading-relaxed font-normal">
                {t.differentialsSection.lead || 'Eliminamos os gargalos tradicionais de contratação descentralizada para garantir previsibilidade e alta performance.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {differentials.map((diff, idx) => {
                const Icon = diff.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {diff.title}
                      </h4>
                    </div>
                    <p className="text-sm text-emerald-100/70 leading-relaxed pl-11 font-normal">
                      {diff.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Performance Metrics */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                    Indicador Chave
                  </span>
                  <div className="text-4xl font-bold text-white">
                    98.5%
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center ml-auto mb-1">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-emerald-100/70">Conformidade e Sucesso</span>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-100/90">Agilidade no Ciclo de Contratação</span>
                    <span className="text-emerald-400">+40%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[85%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-100/90">Redução de Exposição a Passivos</span>
                    <span className="text-emerald-400">-65%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[92%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-100/90">Retenção e Fidelidade de Contratos</span>
                    <span className="text-emerald-400">96.8%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[96%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => {
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#061e14] font-bold text-sm h-12"
                >
                  Solicitar Diagnóstico Preliminar
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
