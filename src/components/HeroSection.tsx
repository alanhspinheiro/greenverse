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
    <>
      <section 
        id="inicio"
        className="relative min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-center pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-white text-foreground"
      >
        {/* Background Image - Corporate & Technical */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/hero-bg.jpg"
            alt="GREENVERSE Engenharia, Infraestrutura e Sustentabilidade"
            className="w-full h-full object-cover object-[80%_center] lg:object-[90%_center]"
            loading="eager"
          />

          {/* Degradê suave inferior para transição elegante com a base da seção */}
          <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Main Content Area - High Contrast for White Background */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl lg:max-w-4xl mr-auto text-left">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6"
            >
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>{t.hero.badge || 'Ecossistema empresarial · Brasil e América do Sul'}</span>
            </motion.div>

            {/* Impactful Headline - Crisp dark text with refined scale */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.12] mb-5 sm:mb-6"
            >
              {t.hero.titleStart}{' '}
              <span className="text-primary">
                {t.hero.titleHighlight}
              </span>
              {!t.hero.titleHighlight.endsWith('.') && '.'}
            </motion.h1>

            {/* Subtitle - Refined comfortable scale */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-7 sm:mb-9 font-normal"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 max-w-lg mb-8 sm:mb-10"
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
                <span>{t.hero.ctaPrimary || 'Quero estruturar uma demanda'}</span>
              </Button>
            </motion.div>

            {/* Subtle scroll down indicator */}
            <div className="flex justify-start">
              <button
                onClick={() => handleScrollTo('quem-somos')}
                className="text-slate-600 hover:text-primary p-1.5 transition-colors focus:outline-none flex items-center gap-2 text-xs uppercase tracking-wider font-semibold"
                aria-label="Rolar para Ecossistema"
              >
                <span>Explorar Ecossistema</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de Indicadores Estatísticos - Logo abaixo da Hero Section (Compacta e Discreta) */}
      <section 
        aria-label="Indicadores de Desempenho e Governança"
        className="relative z-20 bg-slate-50/95 border-y border-slate-200/80 py-3.5 sm:py-4 lg:py-5 shadow-xs"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-center border-l-2 border-primary/40 pl-3 sm:pl-4 group"
              >
                <div className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {m.value}
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-slate-800 mt-0.5 leading-snug">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 hidden md:block font-medium leading-tight">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
