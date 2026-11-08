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
        className="relative min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 overflow-hidden bg-white text-foreground"
      >
        {/* Fundo com iluminação sutil corporativa */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-slate-100/70 rounded-full blur-2xl" />
        </div>

        {/* Alinhamento de 2 Colunas com espaçamento aproximado e globo ampliado */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl lg:max-w-6xl xl:max-w-[1240px] flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 xl:gap-8 items-center">
            
            {/* Coluna Esquerda: Mensagem Institucional, Descrição e Botões de Ação */}
            <div className="text-left flex flex-col justify-center max-w-lg xl:max-w-xl">
              {/* Eyebrow badge discreto */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide mb-4 w-fit"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{t.hero.badge || 'Ecossistema empresarial · Brasil e América do Sul'}</span>
              </motion.div>

              {/* Título Principal com escala proporcional */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.16] mb-4 sm:mb-5"
              >
                {t.hero.titleStart}{' '}
                {t.hero.titleHighlight && (
                  <span className="text-primary">
                    {t.hero.titleHighlight}
                  </span>
                )}
                {!t.hero.titleHighlight && !t.hero.titleStart.endsWith('.') && '.'}
              </motion.h1>

              {/* Descrição Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="text-sm sm:text-base lg:text-[1.05rem] text-slate-600 leading-relaxed mb-6 sm:mb-7 font-normal max-w-lg"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Botões CTA em linha com o estilo da referência */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5"
              >
                <Button
                  size="lg"
                  onClick={() => handleScrollTo('servicos')}
                  className="h-11 px-6 text-sm sm:text-base font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-sm hover:shadow transition-all group"
                >
                  <span>{t.hero.ctaSecondary || 'Explorar Soluções'}</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleScrollTo('contato')}
                  className="h-11 px-6 text-sm sm:text-base font-semibold bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 rounded-xl transition-all"
                >
                  <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                  <span>{t.hero.ctaPrimary || 'Quero estruturar uma demanda'}</span>
                </Button>
              </motion.div>
            </div>

            {/* Coluna Direita: Globo 3D em Destaque Ampliado */}
            <div className="relative flex justify-center lg:justify-end items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full max-w-md sm:max-w-lg lg:max-w-[520px] xl:max-w-[570px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/15 border border-slate-200/80 bg-slate-50 group"
              >
                <img
                  src="/hero-globe-zoomed.jpg"
                  alt="GREENVERSE Ecossistema Sustentável"
                  className="w-full h-full object-cover object-center scale-115 sm:scale-120 group-hover:scale-125 transition-transform duration-700"
                  loading="eager"
                />

                {/* Brilho e profundidade sutis */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Indicador sutil de rolagem no rodapé da seção */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-8 sm:mt-10">
          <button
            onClick={() => handleScrollTo('quem-somos')}
            className="text-slate-500 hover:text-primary transition-colors focus:outline-none inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold"
            aria-label="Rolar para Ecossistema"
          >
            <span>Explorar Ecossistema</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </button>
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
