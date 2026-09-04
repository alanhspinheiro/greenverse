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
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/15">
      {/* Subtle architectural background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl opacity-60" />
        <div className="absolute -top-32 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide mb-6"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>{t.hero.badge || 'ECOSSISTEMA INTEGRADO DE GESTÃO'}</span>
          </motion.div>

          {/* Impactful Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6"
          >
            {t.hero.titleStart}{' '}
            <span className="text-primary">{t.hero.titleHighlight}</span>.
          </motion.h1>

          {/* Concise 2-line Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Direct, scannable CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto"
          >
            <Button
              size="lg"
              onClick={() => handleScrollTo('servicos')}
              className="w-full sm:w-auto h-13 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all group"
            >
              <span>{t.hero.ctaSecondary || 'Explorar Soluções'}</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollTo('contato')}
              className="w-full sm:w-auto h-13 px-7 text-base font-semibold border-border hover:bg-accent text-foreground transition-all"
            >
              <MessageCircle className="h-4 w-4 mr-2 text-primary" />
              <span>Falar com Especialista</span>
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
          className="max-w-5xl mx-auto pt-8 border-t border-border/80"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-left group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-foreground/90 mt-1">
                  {m.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Subtle scroll down indicator */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handleScrollTo('quem-somos')}
            className="text-muted-foreground/60 hover:text-primary p-2 transition-colors focus:outline-none"
            aria-label="Rolar para Ecossistema"
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
