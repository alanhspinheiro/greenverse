import * as React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { BRAZIL_STATES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    state: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success(t.contactSection.form.successToastTitle || 'Solicitação enviada com sucesso! Entraremos em contato em até 24h.');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', state: '', notes: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary/15 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-6xl mx-auto bg-card rounded-3xl border border-border/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Direct Channels & Corporate Information */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-primary text-primary-foreground flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block mb-3">
                CANAIS CORPORATIVOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                {t.contactSection.title || 'Inicie seu Atendimento'}
              </h2>
              <p className="text-emerald-50/85 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                {t.contactSection.subtitle || 'Nossos consultores técnicos e diretores de engenharia estão à disposição para estruturar sua proposta.'}
              </p>

              {/* Direct channels list */}
              <div className="space-y-5 text-sm">
                <a 
                  href="tel:4899303323" 
                  className="flex items-center gap-3.5 hover:text-emerald-200 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold">(48) 9930-3323</span>
                </a>

                <a 
                  href="mailto:contato@greenverse.com.br" 
                  className="flex items-center gap-3.5 hover:text-emerald-200 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold">contato@greenverse.com.br</span>
                </a>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm leading-relaxed text-emerald-50/90">
                    Rua Caetano Silveira de Matos nº 2455, sala 02, Centro Palhoça/SC, CEP 88130-005
                  </span>
                </div>

                {/* Social links */}
                <div className="pt-3 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/greenverse26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                    title="Instagram @greenverse26"
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/greenverse-ecossistema/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                    title="LinkedIn Greenverse"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="https://wa.me/554899303323?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20GREENVERSE."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                    title="WhatsApp Direto"
                  >
                    <MessageCircle className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-10 p-5 rounded-2xl bg-white/10 border border-white/10">
              <p className="text-xs sm:text-sm italic text-emerald-50/95 leading-relaxed">
                "A gestão integrada da Greenverse nos permitiu acelerar a adequação normativa e a entrega de instalações industriais sem fricção."
              </p>
              <p className="text-[11px] font-bold text-emerald-200 mt-3">
                — Diretor de Operações e Engenharia
              </p>
            </div>
          </div>

          {/* Right Panel: Clean Form */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Solicite um Contato Técnico
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Preencha os dados e receba uma análise inicial da nossa equipe.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name" className="text-xs font-semibold text-foreground">
                    Nome Completo *
                  </Label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="Seu nome ou cargo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-email" className="text-xs font-semibold text-foreground">
                    E-mail Corporativo *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="nome@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground">
                    Área de Interesse
                  </Label>
                  <Select onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger className="h-11 rounded-xl text-sm">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engenharia-industrial">Engenharia Industrial e NR-13</SelectItem>
                      <SelectItem value="licenciamento">Gestão Ambiental e ESG</SelectItem>
                      <SelectItem value="facilities">Facilities e Manutenção Predial</SelectItem>
                      <SelectItem value="residuos">Gestão de Resíduos (PGRS)</SelectItem>
                      <SelectItem value="construcao">Construção Civil e Bases</SelectItem>
                      <SelectItem value="compliance">Compliance e Governança</SelectItem>
                      <SelectItem value="seguranca">Segurança e Vigilância</SelectItem>
                      <SelectItem value="logistica">Logística e Transporte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground">
                    Estado da Operação
                  </Label>
                  <Select onValueChange={(v) => setFormData({ ...formData, state: v })}>
                    <SelectTrigger className="h-11 rounded-xl text-sm">
                      <SelectValue placeholder="Selecione o Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      {BRAZIL_STATES.map((st) => (
                        <SelectItem key={st.value} value={st.value}>
                          {st.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitted}
                className="w-full h-12 rounded-xl text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-xs"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Enviado!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" /> Enviar Mensagem
                  </span>
                )}
              </Button>

              <p className="text-[11px] text-center text-muted-foreground">
                Seus dados serão utilizados estritamente para retorno comercial conforme a LGPD.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
