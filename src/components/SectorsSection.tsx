import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SECTORS } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const SectorsSection: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(true);

  // Show all 9 sectors in a balanced 3x3 grid, or 6 if toggled
  const displayedSectors = showAll ? SECTORS : SECTORS.slice(0, 6);

  return (
    <section id="setores" className="py-24 lg:py-32 bg-secondary/15 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
              {t.sectorsSection.badge || 'SEGMENTOS ATENDIDOS'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {t.sectorsSection.title || 'Setores de Atuação'}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed font-normal">
              {t.sectorsSection.lead || 'Expertise nichada para entregar resultados específicos para cada realidade de mercado.'}
            </p>
          </div>

          <Button 
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="self-start md:self-auto text-xs sm:text-sm font-semibold border-border hover:bg-accent"
          >
            {showAll ? 'Mostrar Menos (6)' : `Ver Todos (${SECTORS.length})`}
          </Button>
        </div>

        {/* Rich Photo Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedSectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border/70 hover:border-primary/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Sector Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Floating Icon Badge */}
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-background/90 backdrop-blur-md text-primary flex items-center justify-center shadow-md border border-white/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Sector Tag */}
                  <span className="absolute top-3.5 right-3.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10 tracking-wider">
                    SET-0{idx + 1}
                  </span>

                  {/* Title Overlaid on Image Base */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:text-emerald-300 transition-colors">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal line-clamp-3">
                    {sector.description}
                  </p>

                  <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-muted-foreground/90 uppercase tracking-wider">
                      Soluções Dedicadas
                    </span>
                    <button
                      onClick={() => {
                        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-primary hover:text-primary/80 group-hover:translate-x-0.5 transition-all flex items-center gap-1 focus:outline-none"
                    >
                      <span>Consultar</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
