import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ShieldCheck, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../i18n/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { value: '+500', label: 'Operações Atendidas', detail: 'Indústria, facilities e infraestrutura' },
    { value: '98.5%', label: 'Índice de Conformidade', detail: 'Rigor técnico e legal assegurado' },
    { value: '-65%', label: 'Mitigação de Riscos', detail: 'Governança e interface unificada' },
    { value: '6 Países', label: 'Alcance Mercosul', detail: 'Corredor Bioceânico e integração' },
  ];

  return (
    <section 
      id="inicio"
      data-dark-section="true"
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-[#061e14] text-white"
    >
      {/* Background Image with Right-Side Emphasis & Clean Top for Logo and Navigation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/hero-bg.jpg"
          alt="GREENVERSE Engenharia, Infraestrutura e Sustentabilidade"
          className="w-full h-full object-cover object-right lg:object-[80%_center] scale-105 opacity-65 lg:opacity-80 brightness-[0.92] contrast-[1.10] transition-opacity duration-700"
          loading="eager"
        />

        {/* Subtle, soft top vignette only for text contrast - does NOT mask or darken the image behind logo/menus */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
        
        {/* Soft bottom blending gradient for smooth flow into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#061e14] via-[#061e14]/75 to-transparent" />
        
        {/* Subtle ambient emerald glow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[450px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Area - Left Aligned */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl lg:max-w-4xl mr-auto text-left relative">
          {/* Gradiente direcional de leitura restrito exclusivamente à área do headline e subheadline */}
          <div 
            className="absolute -top-8 -bottom-8 -left-6 sm:-left-10 -right-4 sm:-right-20 -z-10 bg-gradient-to-r from-[#061e14]/95 via-[#061e14]/85 via-60% to-transparent rounded-3xl blur-2xl pointer-events-none" 
            aria-hidden="true"
          />
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>{t.hero.badge || 'Ecossistema empresarial · Brasil e América do Sul'}</span>
          </motion.div>

          {/* Impactful Headline - Left Aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-sm"
          >
            {t.hero.titleStart}{' '}
            <span className="text-emerald-400 drop-shadow-[0_2px_14px_rgba(52,211,153,0.35)]">
              {t.hero.titleHighlight}
            </span>
            {!t.hero.titleHighlight.endsWith('.') && '.'}
          </motion.h1>

          {/* Light, clear Subtitle - Left Aligned */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg sm:text-xl text-emerald-50/90 max-w-2xl leading-relaxed mb-10 font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Action CTAs - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 max-w-lg"
          >
            <Button
              size="lg"
              onClick={() => handleScrollTo('servicos')}
              className="w-full sm:w-auto h-13 px-8 text-base font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all group"
            >
              <span>{t.hero.ctaSecondary || 'Explorar Soluções'}</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollTo('contato')}
              className="w-full sm:w-auto h-13 px-7 text-base font-semibold border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm transition-all"
            >
              <MessageCircle className="h-4 w-4 mr-2 text-emerald-300" />
              <span>{t.hero.ctaPrimary || 'Quero estruturar uma demanda'}</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Minimalist Executive Metric Strip */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="pt-8 border-t border-white/15"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-left group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-emerald-100/90 mt-1">
                  {m.label}
                </div>
                <div className="text-xs text-emerald-200/65 mt-0.5 hidden sm:block">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Subtle scroll down indicator */}
        <div className="flex justify-start mt-10">
          <button
            onClick={() => handleScrollTo('quem-somos')}
            className="text-white/60 hover:text-emerald-400 p-2 transition-colors focus:outline-none flex items-center gap-2 text-xs uppercase tracking-wider font-semibold"
            aria-label="Rolar para Ecossistema"
          >
            <span>Explorar Ecossistema</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
