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
        className="relative min-h-[82vh] lg:min-h-[86vh] flex flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-18 overflow-hidden bg-white text-foreground"
      >
        {/* Fundo com iluminação sutil corporativa */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-100/80 rounded-full blur-2xl" />
        </div>

        {/* Grid de 2 Colunas: Esquerda (Texto & CTAs) | Direita (Imagem) - Alturas Equalizadas */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
            
            {/* Coluna Esquerda: Mensagem Institucional, Descrição, CTAs */}
            <div className="lg:col-span-7 text-left flex flex-col justify-between py-1">
              <div>
                {/* Eyebrow badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide mb-4 w-fit"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{t.hero.badge || 'Ecossistema empresarial · Brasil e América do Sul'}</span>
                </motion.div>

                {/* Impactful Headline - Scaled harmoniously to match visual height */}
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] font-bold tracking-tight text-foreground leading-[1.16] mb-4"
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
                  className="text-sm sm:text-[15px] lg:text-base text-muted-foreground max-w-xl leading-relaxed mb-6 font-normal"
                >
                  {t.hero.subtitle}
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.24 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 max-w-lg mb-6 sm:mb-8"
                >
                  <Button
                    size="lg"
                    onClick={() => handleScrollTo('servicos')}
                    className="w-full sm:w-auto h-11 px-6 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all group"
                  >
                    <span>{t.hero.ctaSecondary || 'Explorar Soluções'}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleScrollTo('contato')}
                    className="w-full sm:w-auto h-11 px-5 text-sm font-semibold border-border hover:bg-accent text-foreground transition-all"
                  >
                    <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                    <span>{t.hero.ctaPrimary || 'Quero estruturar uma demanda'}</span>
                  </Button>
                </motion.div>
              </div>

              {/* Subtle scroll down indicator */}
              <div className="flex justify-start pt-1">
                <button
                  onClick={() => handleScrollTo('quem-somos')}
                  className="text-slate-600 hover:text-primary p-1 transition-colors focus:outline-none flex items-center gap-2 text-xs uppercase tracking-wider font-semibold"
                  aria-label="Rolar para Ecossistema"
                >
                  <span>Explorar Ecossistema</span>
                  <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                </button>
              </div>
            </div>

            {/* Coluna Direita: Imagem Institucional Enquadrada - Altura perfeitamente igualada */}
            <div className="lg:col-span-5 relative flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg shadow-slate-200/50 bg-slate-100 group w-full h-[320px] sm:h-[380px] lg:h-full min-h-[350px] flex flex-col justify-end"
              >
                <img
                  src="/hero-bg.jpg"
                  alt="GREENVERSE Engenharia, Infraestrutura e Sustentabilidade"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Overlay sutil para realce das formas */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Selo/Etiqueta institucional sobre a imagem */}
                <div className="relative p-3.5 sm:p-4 m-3.5 sm:m-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      Engenharia · Infraestrutura · ESG
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    Governança e conformidade técnica para operações no Brasil e Mercosul.
                  </p>
                </div>
              </motion.div>
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
