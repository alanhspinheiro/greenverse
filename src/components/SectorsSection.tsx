import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SECTORS } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const SectorsSection: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Show 8 sectors initially, or all if toggled
  const displayedSectors = showAll ? SECTORS : SECTORS.slice(0, 8);

  return (
    <section id="setores" className="py-24 lg:py-32 bg-secondary/10 scroll-mt-20">
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
            className="self-start md:self-auto text-xs sm:text-sm font-semibold"
          >
            {showAll ? 'Mostrar Menos' : `Ver Todos (${SECTORS.length})`}
          </Button>
        </div>

        {/* Clean, Scannable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedSectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (idx % 4) * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border/70 hover:border-primary/50 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-muted-foreground">
                      SET-0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed font-normal line-clamp-2">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-muted-foreground/80">Soluções Dedicadas</span>
                  <button
                    onClick={() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1"
                  >
                    <span>Consultar</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
