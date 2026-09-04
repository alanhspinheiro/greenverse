import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Building2, Users, ArrowRight, ChevronDown, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../i18n/LanguageContext';

export const ApprovedNetworkSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'beneficios' | 'criterios' | 'areas'>('beneficios');

  const vettingPipeline = [
    { step: '01', title: 'Due Diligence Jurídica', desc: 'Conformidade fiscal, trabalhista, anticorrupção e idoneidade.' },
    { step: '02', title: 'Auditoria Técnica', desc: 'Avaliação de acervo técnico, certificações (ISO, CREA) e capacidade instalada.' },
    { step: '03', title: 'Gestão por SLA', desc: 'Homologação e acompanhamento contínuo dos padrões Greenverse.' },
  ];

  const clientBenefits = [
    {
      title: 'Eliminação de Riscos Trabalhistas',
      desc: 'Responsabilidade subsidiária mitigada através de fiscalização documental contínua.',
    },
    {
      title: 'Velocidade de Mobilização',
      desc: 'Equipes técnicas qualificadas prontas para entrar em operação sem burocracia.',
    },
    {
      title: 'Preço Competitivo e Transparência',
      desc: 'Economia de escala através do poder de compra e negociação do ecossistema.',
    },
  ];

  const criteria = t.networkSection.criteriaItems || [
    'Capacidade Técnica Comprovada',
    'Conformidade Legal e Fiscal',
    'Certificações de Qualidade e Segurança',
    'Auditoria de Sustentabilidade e ESG',
    'Experiência e Portfólio Consolidado',
    'Idoneidade e Compliance Corporativo',
  ];

  const areas = t.networkSection.specializationAreas || [
    'Engenharia Industrial',
    'Facilities e Manutenção',
    'Meio Ambiente e Licenciamento',
    'Segurança e Vigilância',
    'Construção Civil',
    'Logística Especializada',
    'Energia e Utilidades',
    'Tecnologia da Informação',
  ];

  return (
    <section id="rede-homologada" className="py-24 lg:py-32 bg-background border-t border-border/40 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/5 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
            {t.networkSection.badge || 'SEGURANÇA E AUDITORIA'}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            {t.networkSection.title}{' '}
            <span className="text-primary">{t.networkSection.titleHighlight || 'Rigorosamente Auditada'}</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
            {t.networkSection.lead || 'Conectamos sua operação a especialistas e empresas previamente homologados sob os mais altos padrões de compliance e qualidade técnica.'}
          </p>
        </div>

        {/* 3-Step Vetting Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {vettingPipeline.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  ETAPA {item.step}
                </span>
                <h4 className="text-base font-bold text-foreground">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Info in Clean Interactive Tabs (less text by default) */}
        <div className="bg-muted/40 rounded-3xl p-6 sm:p-8 border border-border/60">
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-border/60">
            <button
              onClick={() => setActiveTab('beneficios')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'beneficios'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Vantagens para Contratantes
            </button>
            <button
              onClick={() => setActiveTab('criterios')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'criterios'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Critérios de Seleção
            </button>
            <button
              onClick={() => setActiveTab('areas')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'areas'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Áreas de Especialização
            </button>
          </div>

          {/* Tab 1: Benefícios */}
          {activeTab === 'beneficios' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {clientBenefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-card border border-border/60">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-1.5">{b.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">{b.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Critérios */}
          {activeTab === 'criterios' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {criteria.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border/50 text-xs sm:text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Áreas */}
          {activeTab === 'areas' && (
            <div className="flex flex-wrap gap-2.5">
              {areas.map((area: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-card border border-border/60 text-xs sm:text-sm font-semibold text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          )}

          {/* Call to Action Row */}
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Sua empresa presta serviços especializados e deseja integrar a rede?
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs h-10 px-5"
              >
                Candidatar à Homologação
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
