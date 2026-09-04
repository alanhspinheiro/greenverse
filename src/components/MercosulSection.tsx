import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ArrowRight, CheckCircle2, Target, Building2, Truck, ShieldCheck, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../i18n/LanguageContext';

export const MercosulSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<string>('brazil');

  const countries = [
    { id: 'brazil', name: t.mercosulSection.countries.brazil || 'Brasil', flag: '🇧🇷', role: 'Hub de origem industrial, agronegócio e portos de escoamento no Atlântico.' },
    { id: 'paraguay', name: t.mercosulSection.countries.paraguay || 'Paraguai', flag: '🇵🇾', role: 'Ponto neurálgico da hidrovia e entroncamento do Corredor Bioceânico.' },
    { id: 'argentina', name: t.mercosulSection.countries.argentina || 'Argentina', flag: '🇦🇷', role: 'Corredores logísticos do Norte e conexão com os nós industriais do Cone Sul.' },
    { id: 'chile', name: t.mercosulSection.countries.chile || 'Chile', flag: '🇨🇱', role: 'Portos de Antofagasta, Iquique e Mejillones para acesso direto ao mercado Asiático.' },
    { id: 'uruguay', name: t.mercosulSection.countries.uruguay || 'Uruguai', flag: '🇺🇾', role: 'Hub financeiro, logístico e portuário com regimes aduaneiros simplificados.' },
    { id: 'bolivia', name: t.mercosulSection.countries.bolivia || 'Bolívia', flag: '🇧🇴', role: 'Integração de matriz energética, minerais estratégicos e rotas complementares.' },
  ];

  const currentCountry = countries.find(c => c.id === selectedCountry) || countries[0];

  const strategicPillars = [
    {
      title: 'Infraestrutura & Obras',
      desc: 'Adequação de plataformas industriais, terminais intermodais e instalações técnicas transfronteiriças.',
      icon: Building2,
    },
    {
      title: 'Logística & Aduana',
      desc: 'Estruturação de fluxos de importação/exportação, portos secos e otimização de tempo em fronteiras.',
      icon: Truck,
    },
    {
      title: 'Compliance Internacional',
      desc: 'Segurança regulatória e harmonização tributária e contratual sob o arcabouço do Mercosul.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="mercosul" data-dark-section="true" className="py-24 lg:py-32 bg-[#06140D] text-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-4 border-emerald-400/40 text-emerald-300 bg-emerald-950/60 px-3.5 py-1 text-xs font-semibold tracking-wider">
            {t.mercosulSection.badge || 'INTEGRAÇÃO REGIONAL'}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            {t.mercosulSection.title}{' '}
            <span className="text-emerald-400">{t.mercosulSection.titleHighlight || 'Corredor Bioceânico'}</span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
            {t.mercosulSection.subtitle || 'Conectando os oceanos Atlântico e Pacífico através de inteligência operacional integrada.'}
          </p>
        </div>

        {/* Interactive Country Grid / Selector */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 mb-4">
            {t.mercosulSection.strategicMarkets || 'Mercados e Conexões Estratégicas'} (Selecione para ver o papel regional)
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {countries.map((c) => {
              const isSelected = selectedCountry === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c.id)}
                  className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-[#06140D] font-bold border-emerald-400 shadow-sm scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:border-emerald-400/40 text-white'
                  }`}
                >
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-xs sm:text-sm font-semibold">{c.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Country Detail Callout */}
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <span className="text-2xl">{currentCountry.flag}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Atuação em {currentCountry.name}
              </p>
              <p className="text-sm text-emerald-100/85 leading-relaxed mt-0.5">
                {currentCountry.role}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {strategicPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-emerald-100/70 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Simplified Bioceanic Formula Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-emerald-950/80 border border-emerald-500/20 text-center max-w-4xl mx-auto">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full inline-block mb-3">
            {t.mercosulSection.corridorBadge || 'VETOR DE COMPETITIVIDADE'}
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
            A Fórmula Estratégica do Corredor
          </h4>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-[#06140D] border border-emerald-500/30 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-emerald-300">
            <span>Infraestrutura</span>
            <span className="text-white/40">+</span>
            <span>Logística</span>
            <span className="text-white/40">+</span>
            <span>Indústria</span>
            <span className="text-white/40">+</span>
            <span>Comércio</span>
            <span className="text-white/40">=</span>
            <span className="text-white font-bold">Liderança Mercosul</span>
          </div>
        </div>

      </div>
    </section>
  );
};
