import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Sparkles, Filter, Check, Eye, X, 
  ShieldCheck, FileText, CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { SERVICES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewService, setPreviewService] = useState<typeof SERVICES[0] | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Soluções' },
    { id: 'engenharia', label: 'Engenharia & Infra', match: ['engenharia-industrial', 'construcao'] },
    { id: 'esg', label: 'ESG & Ambiental', match: ['licenciamento', 'resíduos', 'gestao-prad', 'outorgas'] },
    { id: 'facilities', label: 'Facilities & Apoio', match: ['facilities', 'limpeza', 'pragas', 'seguranca'] },
    { id: 'governanca', label: 'Governança & Tech', match: ['compliance', 'logistica', 'tecnologia-da-informacao'] },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === 'all') return true;
    const cat = categories.find((c) => c.id === selectedCategory);
    return cat?.match?.includes(service.id);
  });

  // Highlight keywords or key tags for each service
  const getTagsForService = (id: string) => {
    switch (id) {
      case 'engenharia-industrial':
        return ['Adequação NR-13', 'Caldeiras e Vasos', 'Comissionamento'];
      case 'licenciamento':
        return ['Padrões ESG (GRI/IFRS)', 'Relatórios & KPIs', 'Licenças LP/LI/LO'];
      case 'residuos':
        return ['PGRS', 'Logística Reversa', 'Destinação Final'];
      case 'construcao':
        return ['Obras Civis', 'Bases Industriais', 'Infraestrutura'];
      case 'compliance':
        return ['Integridade & Ética', 'Auditorias', 'Due Diligence'];
      case 'facilities':
        return ['Gestão Predial', 'SLA Unificado', 'Operações'];
      case 'outorgas':
        return ['Recursos Hídricos', 'Outorga Superficial', 'Regularização'];
      case 'limpeza':
        return ['Conservação Técnica', 'Áreas Críticas', 'Higienização'];
      case 'pragas':
        return ['CIP Integrado', 'Auditoria Sanitária', 'Laudos ANVISA'];
      case 'gestao-prad':
        return ['Recuperação Ambiental', 'Florestal', 'Monitoramento'];
      case 'logistica':
        return ['Cargas Especiais', 'Frota Dedicada', 'Rastreamento'];
      case 'seguranca':
        return ['Vigilância Patrimonial', 'Controle de Acesso', 'CFTV'];
      default:
        return ['Gestão Integrada', 'Auditoria', 'Governança'];
    }
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
              {t.servicesSection.badge || 'PORTFÓLIO DE SOLUÇÕES'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {t.servicesSection.title}{' '}
              <span className="text-primary">{t.servicesSection.titleHighlight || 'Integradas'}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed font-normal">
              {t.servicesSection.lead || 'Soluções integradas com rigor técnico e conformidade de ponta a ponta.'}
            </p>
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            {filteredServices.length} serviços disponíveis
          </div>
        </div>

        {/* Minimalist Animated Continuous Ribbon (Green with white letters, as requested) */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-3 mb-12 bg-emerald-700 text-white select-none shadow-xs">
          <motion.div
            className="flex whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide text-white"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 35,
            }}
          >
            <div className="flex shrink-0 items-center gap-8 pr-8">
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
            </div>
            <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
              <span>Facilities | Segurança | Manutenção | Paisagismo | Conservação | Ambiental | Serviços Técnicos | Apoio Operacional</span>
              <span className="text-emerald-300 font-bold">•</span>
            </div>
          </motion.div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'bg-muted/80 text-foreground/80 hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            const tags = getTagsForService(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col justify-between p-6 rounded-2xl border border-border/70 hover:border-primary/40 transition-all hover:shadow-sm bg-card group">
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <button
                        onClick={() => setPreviewService(service)}
                        className="text-xs font-semibold text-muted-foreground hover:text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Ver resumo rápido"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Resumo</span>
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {service.title}
                    </h3>

                    {/* Concise 2-line Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4 font-normal">
                      {service.description}
                    </p>

                    {/* Capability Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium bg-muted px-2.5 py-1 rounded-md text-foreground/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <Link
                      to={`/servicos/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Ver Escopo Completo</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => setPreviewService(service)}
                      className="text-xs text-muted-foreground hover:text-foreground font-medium md:hidden"
                    >
                      Prévia
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Preview Sheet / Drawer (avoiding navigation if user just wants a scan) */}
      <Sheet open={!!previewService} onOpenChange={(open) => !open && setPreviewService(null)}>
        <SheetContent side="right" className="w-full sm:max-w-lg p-6 flex flex-col justify-between overflow-y-auto">
          {previewService && (
            <div className="space-y-6">
              <SheetHeader>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <previewService.icon className="h-6 w-6" />
                </div>
                <SheetTitle className="text-xl font-bold text-foreground">
                  {previewService.title}
                </SheetTitle>
                <SheetDescription className="text-sm text-muted-foreground leading-relaxed">
                  {previewService.description}
                </SheetDescription>
              </SheetHeader>

              {/* Scope details */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Pilares de Atuação
                </h4>
                <div className="space-y-3">
                  {previewService.details?.slice(0, 4).map((d: any, dIdx: number) => (
                    <div key={dIdx} className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                      <p className="text-xs font-bold text-foreground mb-1">{d.category}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {d.items?.slice(0, 3).join(', ')}...
                      </p>
                    </div>
                  )) || (
                    <p className="text-xs text-muted-foreground">
                      Solução personalizada estruturada conforme as normas técnicas específicas da sua planta ou instalação.
                    </p>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-border flex flex-col gap-3">
                <Link
                  to={`/servicos/${previewService.id}`}
                  onClick={() => setPreviewService(null)}
                >
                  <Button className="w-full font-semibold">
                    Abrir Página Completa de Engenharia
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setPreviewService(null);
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full"
                >
                  Solicitar Proposta Técnica
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};
