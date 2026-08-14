import { useState, useEffect } from 'react';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, ArrowRight, 
  ChevronRight, Download, Lock, Bell, MessageCircle, CheckCircle2,
  Leaf, BarChart3, FileText, Globe, Users, Target, Briefcase, ArrowLeft, ShieldCheck,
  Waves, Activity, FlaskConical, FileSpreadsheet, BookOpen, Wrench, Cpu, Construction, Lightbulb, AlertTriangle,
  Droplets, Factory, Heart, Home, Building2, Sprout
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Logo } from './components/Logo';
import SEO from './components/SEO';
import { SERVICES, SECTORS, DIFFERENTIALS, BLOG_POSTS, BRAZIL_STATES } from './constants';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium relative">
      <span className="flex items-center justify-center gap-2">
        <Bell className="h-4 w-4" />
        Alerta: Novas diretrizes do CONAMA publicadas. <Link to="/blog" className="underline hover:opacity-80">Saiba mais</Link>
      </span>
      <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Ecossistema', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Setores', href: '#setores' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Mercosul', href: '#mercosul' },
    { name: 'Rede Homologada', href: '#rede-homologada' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-bottom py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-border mx-2" />
          <Link to="/area-cliente">
            <Button variant="ghost" size="sm" className="gap-2">
              <Lock className="h-4 w-4" />
              Área do Cliente
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-lg font-semibold hover:text-primary transition-colors">
                    {link.name}
                  </a>
                ))}
                <Link to="/area-cliente" className="text-lg font-semibold hover:text-primary transition-colors">
                  Área do Cliente
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/554899303323" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="mb-6 block group">
            <Logo light />
          </Link>
          <p className="text-background/60 text-sm leading-relaxed">
            Sua parceira estratégica em conformidade ambiental e sustentabilidade corporativa. Transformamos desafios regulatórios em vantagens competitivas.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Serviços</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>Gestão Ambiental e Soluções ESG</li>
            <li>Gestão de Resíduos</li>
            <li>Construção Civil</li>
            <li>Compliance e Governança</li>
            <li>Facilities e Operações</li>
            <li>Limpeza e Conservação</li>
            <li>Controle de Pragas</li>
            <li>Gestão Ambiental e PRAD</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contato</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /> (48) 9930-3323</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> contato@greenverse.com.br</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-1" /> <span>Rua Caetano Silveira de Matos nº 2455, sala 02, Centro Palhoça/SC, CEP 88130-005</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-background/60 mb-4">Receba atualizações sobre legislação ambiental.</p>
          <div className="flex gap-2">
            <Input className="bg-background/10 border-background/20 text-background placeholder:text-background/40" placeholder="Seu e-mail" />
            <Button size="icon" className="shrink-0"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:row items-center justify-between gap-4 text-xs text-background/40">
        <p>© 2026 Greenverse. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Política de Privacidade</a>
          <a href="#" className="hover:text-primary">Termos de Uso</a>
          <span className="text-primary font-semibold">ESG Certified</span>
        </div>
      </div>
    </div>
  </footer>
);

const AuthoritySection = () => (
  <section className="py-24 bg-primary relative overflow-hidden">
    {/* Decorative background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-[100px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/10"
        >
          <Target className="h-4 w-4" />
          <span>Autoridade Greenverse</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Não somos apenas prestadores de serviço.
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 font-medium italic">
            "Somos parceiros estratégicos na evolução da sua empresa."
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Transformamos desafios complexos em operações organizadas, sustentáveis e altamente eficientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-3 gap-8 text-white/60 text-sm uppercase tracking-[0.2em] font-bold">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-white text-2xl">01</span>
              <span>Inteligência</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-white text-2xl">02</span>
              <span>Estratégia</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center col-span-2 md:col-span-1">
              <span className="text-white text-2xl">03</span>
              <span>Execução</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Pages ---

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    state: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Solicitação enviada! Um consultor entrará em contato em breve.');
    setFormData({ name: '', email: '', service: '', state: '' });
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Greenverse | Ecossistema de Soluções Corporativas Integradas"
        description="Reduza a complexidade de múltiplos fornecedores. O Ecossistema Greenverse unifica Engenharia Industrial, Facilities, ESG, Compliance, Infraestrutura e Mercado Livre de Energia."
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 md:pt-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-center"
            >
              <h1 className="text-3xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Conectamos empresas, especialistas e tecnologia para entregar <span className="text-primary">soluções complexas em diferentes mercados</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Estratégia, engenharia, infraestrutura, operações, meio ambiente e logística integradas em um único ecossistema empresarial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  Conhecer Nossos Serviços
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quem Somos / O Ecossistema Section */}
      <section id="quem-somos" className="py-24 overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          
          {/* Top Intro with Interactive Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-semibold uppercase tracking-wider">
                O Ecossistema
              </Badge>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight uppercase tracking-tight text-foreground">
                Um Ecossistema. <span className="text-primary">Múltiplas Capacidades.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  A Greenverse é um ecossistema empresarial criado para conectar empresas, especialistas, tecnologia e capital intelectual na construção de soluções para diferentes mercados.
                </p>
                <p className="text-base md:text-lg">
                  Nossa atuação combina estratégia, engenharia, infraestrutura, operações, meio ambiente e logística, permitindo estruturar projetos de forma integrada.
                </p>
                
                <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">Nosso Posicionamento</p>
                  <p className="text-lg md:text-xl font-bold text-foreground">
                    Não somos apenas um fornecedor. <span className="text-primary">Somos uma estrutura de integração e execução.</span>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-green-900 via-green-600 to-green-400 p-4 flex items-center justify-center border border-primary/20 group relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-30 from-white/20" />
                <img 
                  src="/img001.png" 
                  alt="Ecossistema de Integração Greenverse" 
                  className="w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-all duration-700 brightness-110 contrast-125"
                  referrerPolicy="no-referrer"
                />
                
                {/* Simulated Integration Points */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { top: '25%', left: '35%' }, 
                    { top: '35%', left: '60%' },
                    { top: '40%', left: '45%' },
                    { top: '55%', left: '25%' },
                    { top: '50%', left: '75%' },
                    { top: '65%', left: '40%' },
                    { top: '80%', left: '50%' },
                    { top: '15%', left: '40%' },
                    { top: '45%', left: '85%' },
                    { top: '70%', left: '65%' },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2.5 h-2.5 bg-emerald-300 rounded-full shadow-[0_0_15px_rgba(110,231,183,0.8)]"
                      style={pos}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                      <div className="absolute inset-0 bg-white blur-[2px] opacity-40 rounded-full" />
                    </motion.div>
                  ))}
                  
                  {/* Connection Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                    <motion.path
                      d="M35 25 L45 40 L60 35 L75 50 L85 45 L65 70 L50 80 L40 65 L25 55 Z M45 40 L40 15 L35 25 M60 35 L40 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      className="text-emerald-300"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-border">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-2xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">+15</p>
                    <p className="text-sm text-muted-foreground">Especialistas Sênior</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Uma Estrutura Pensada Para Crescer */}
          <div className="mb-24 pt-12 border-t border-border">
            <div className="max-w-4xl mb-12">
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-semibold uppercase tracking-wider">
                Arquitetura Empresarial
              </Badge>
              <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-4">
                Uma Estrutura Pensada Para <span className="text-primary">Crescer</span>
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                O ecossistema Greenverse é formado por diferentes empresas, unidades de negócio, especialistas e parceiros estratégicos. Cada estrutura possui competências específicas, enquanto o ecossistema permite integração entre elas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Greenverse Holding',
                  desc: 'Estrutura estratégica e patrimonial.',
                  icon: <Building2 className="h-6 w-6" />,
                },
                {
                  title: 'Greenverse Brasil',
                  desc: 'Operações e desenvolvimento de negócios no Brasil.',
                  icon: <Globe className="h-6 w-6" />,
                },
                {
                  title: 'Greenverse Mercosul',
                  desc: 'Estrutura voltada à expansão e integração de negócios na região.',
                  icon: <Target className="h-6 w-6" />,
                },
                {
                  title: 'Greenverse Infrastructure & Logistics',
                  desc: 'Infraestrutura, logística e desenvolvimento de ativos.',
                  icon: <Construction className="h-6 w-6" />,
                },
                {
                  title: 'Empresas Especializadas',
                  desc: 'Operações técnicas e serviços específicos.',
                  icon: <Briefcase className="h-6 w-6" />,
                },
                {
                  title: 'Rede Homologada',
                  desc: 'Empresas e especialistas integrados ao ecossistema.',
                  icon: <ShieldCheck className="h-6 w-6" />,
                },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-card hover:bg-card/80 p-7 rounded-2xl border border-border shadow-sm hover:border-primary/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="bg-primary/10 p-3 rounded-xl w-fit text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visão e Missão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Visão */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-3.5 py-1.5 rounded-full inline-block mb-6">
                  Nossa Visão
                </span>
                <h4 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
                  Construir Conexões que Geram Capacidade.
                </h4>
                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Acreditamos que grandes projetos não dependem de uma única empresa.
                  </p>
                  <p>
                    Eles dependem da capacidade de conectar pessoas, conhecimento, tecnologia, infraestrutura e execução.
                  </p>
                  <p className="text-primary font-semibold">
                    É essa conexão que orienta a Greenverse.
                  </p>
                </div>
              </div>
            </div>

            {/* Missão */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/20 px-3.5 py-1.5 rounded-full inline-block mb-6">
                  Nossa Missão
                </span>
                <h4 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
                  Integrar Capacidades para Resolver Problemas Complexos.
                </h4>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Desenvolver soluções eficientes, responsáveis e escaláveis, conectando diferentes competências para gerar valor aos nossos clientes e parceiros.
                </p>
              </div>
            </div>
          </div>

          {/* Nossos Pilares */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-semibold uppercase tracking-wider">
                Fundamentos
              </Badge>
              <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                Nossos <span className="text-primary">Pilares</span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Os princípios que guiam cada decisão, parceria e entrega no ecossistema Greenverse.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Estratégia', subtitle: 'Pensar antes de executar.', icon: <Target className="h-5 w-5" /> },
                { title: 'Especialização', subtitle: 'Mobilizar conhecimento técnico.', icon: <Lightbulb className="h-5 w-5" /> },
                { title: 'Integração', subtitle: 'Conectar diferentes competências.', icon: <Users className="h-5 w-5" /> },
                { title: 'Governança', subtitle: 'Controlar riscos e garantir conformidade.', icon: <ShieldCheck className="h-5 w-5" /> },
                { title: 'Execução', subtitle: 'Transformar planejamento em resultado.', icon: <Activity className="h-5 w-5" /> },
                { title: 'Escala', subtitle: 'Construir estruturas capazes de crescer.', icon: <Building2 className="h-5 w-5" /> },
              ].map((pilar, idx) => (
                <div 
                  key={idx}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/40 transition-all flex items-start gap-4"
                >
                  <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0 mt-1">
                    {pilar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">{pilar.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{pilar.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-muted-foreground">Oferecemos um portfólio completo para atender às demandas mais complexas do mercado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-none bg-background group">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/servicos/${service.id}`}>
                      <Button variant="link" className="p-0 h-auto text-primary gap-1 group/btn">
                        Saiba Mais <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="setores" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Setores de Atuação</h2>
              <p className="text-muted-foreground">Expertise nichada para entregar resultados específicos para cada realidade de mercado.</p>
            </div>
            <Button variant="outline">Ver Todos os Setores</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {SECTORS.map((sector) => (
              <div key={sector.id} className="group relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-square shadow-sm">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-primary/30 backdrop-blur-sm w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                    <sector.icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">{sector.title}</h3>
                  <p className="text-white/70 text-[10px] md:text-xs line-clamp-2 mb-2 group-hover:line-clamp-none transition-all">
                    {sector.description}
                  </p>
                  <Button variant="secondary" size="sm" className="w-full h-8 text-[10px] md:text-xs px-2">Especialista</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-24 bg-chart-5 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Por que o Ecossistema Greenverse é diferente?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {DIFFERENTIALS.map((diff) => (
                  <div key={diff.title} className="space-y-2 group">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-1 rounded-md group-hover:bg-primary transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">{diff.title}</h4>
                    </div>
                    <p className="text-primary-foreground/70 text-sm pl-8">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-background/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Taxa de Sucesso</p>
                    <p className="text-3xl font-bold">98.5%</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Agilidade em Processos</span>
                      <span>+40%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[85%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Redução de Riscos</span>
                      <span>-65%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercosul Section */}
      <section id="mercosul" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-semibold uppercase tracking-wider">
              Plataforma Regional
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-4 text-white">
              Greenverse <span className="text-primary">Mercosul</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-primary/90 mb-6">
              Conectando empresas e oportunidades entre diferentes mercados.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
              A Greenverse está estruturando uma plataforma de atuação integrada no Mercosul para apoiar empresas que desejam entrar, expandir ou desenvolver operações na região.
            </p>

            {/* Mercados Estratégicos */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Mercados Estratégicos
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Brasil', flag: '🇧🇷' },
                  { name: 'Paraguai', flag: '🇵🇾' },
                  { name: 'Argentina', flag: '🇦🇷' },
                  { name: 'Uruguai', flag: '🇺🇾' },
                  { name: 'Chile', flag: '🇨🇱' },
                  { name: 'Bolívia', flag: '🇧🇴' },
                ].map((country, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 px-4 py-2.5 rounded-xl transition-colors"
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span className="font-semibold text-sm md:text-base text-slate-200">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* O Que Fazemos */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/20 p-2 rounded-xl text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                O Que Fazemos
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/50 transition-all group">
                <div className="bg-primary/20 p-3 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Entrada em novos mercados</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Apoiamos empresas na estruturação de operações e desenvolvimento de projetos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/50 transition-all group">
                <div className="bg-primary/20 p-3 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Building2 className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Infraestrutura</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Identificação e estruturação de soluções para instalações, galpões, centros logísticos e ativos empresariais.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/50 transition-all group">
                <div className="bg-primary/20 p-3 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Activity className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Logística</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integração de rotas, operações, armazenagem e infraestrutura.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/50 transition-all group">
                <div className="bg-primary/20 p-3 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Parceiros locais</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Conectamos empresas a especialistas e operadores locais.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/50 transition-all group">
                <div className="bg-primary/20 p-3 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Construction className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Engenharia</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Mobilizamos competências técnicas para projetos de diferentes dimensões.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/50 transition-all group">
                <div className="bg-primary/20 p-3 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Operação</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Apoiamos a implantação e continuidade das operações.
                </p>
              </div>
            </div>
          </div>

          {/* Corredor Estratégico */}
          <div className="bg-gradient-to-r from-primary/20 via-slate-900 to-primary/20 border border-primary/30 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block">
                Corredor Estratégico
              </span>
              
              <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                BRASIL <span className="text-primary">→</span> PARAGUAI <span className="text-primary">→</span> ARGENTINA <span className="text-primary">→</span> URUGUAI
              </h3>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
                A Greenverse busca participar da construção de novas conexões logísticas e empresariais dentro da América do Sul.
              </p>

              <div className="pt-4">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-950/80 border border-primary/40 px-6 py-3.5 rounded-2xl text-sm md:text-base font-semibold text-primary">
                  <span>Infraestrutura</span>
                  <span className="text-slate-400">+</span>
                  <span>Logística</span>
                  <span className="text-slate-400">+</span>
                  <span>Indústria</span>
                  <span className="text-slate-400">+</span>
                  <span>Comércio</span>
                  <span className="text-slate-400">+</span>
                  <span className="text-white">Mercosul</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Rede Homologada Section */}
      <section id="rede-homologada" className="py-24 bg-background border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-semibold uppercase tracking-wider">
              Rede Homologada
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-6 text-foreground">
              Uma Rede Construída para <span className="text-primary">Ampliar Nossa Capacidade</span>.
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              A Greenverse trabalha com uma rede de empresas e especialistas homologados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Critérios de Seleção */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
                    A seleção considera:
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Capacidade técnica',
                    'Experiência',
                    'Documentação',
                    'Conformidade',
                    'Segurança',
                    'Capacidade operacional',
                    'Histórico de atuação',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm md:text-base font-medium text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Áreas de Especialização */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
                    Áreas de Especialização
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Engenharia',
                    'Construção',
                    'Elétrica',
                    'Ambiental',
                    'Estruturas',
                    'Caldeiras',
                    'Equipamentos',
                    'Andaimes',
                    'Segurança',
                    'Tecnologia',
                    'Logística',
                    'Manutenção',
                  ].map((area, idx) => (
                    <span 
                      key={idx}
                      className="bg-primary/10 hover:bg-primary/20 text-foreground border border-primary/20 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Para Nossos Clientes */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-2.5 rounded-xl text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    Para Nossos Clientes
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="font-bold text-base text-primary mb-1">Uma única estrutura de relacionamento.</p>
                    <p className="text-xs md:text-sm text-slate-300">Centralização estratégica de atendimento, gestão e governança de ponta a ponta.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="font-bold text-base text-primary mb-1">Múltiplas capacidades técnicas.</p>
                    <p className="text-xs md:text-sm text-slate-300">Acesso direto a especialistas multidisciplinares em todas as frentes operacionais.</p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  Isso reduz a necessidade de coordenar diversos fornecedores independentes e permite construir soluções integradas.
                </p>
              </div>

              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white" 
                  onClick={() => {
                    const el = document.getElementById('contato');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Falar com Nosso Time
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthoritySection />

      {/* Blog Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Central de Inteligência Ambiental</h2>
            <Link to="/blog">
              <Button variant="ghost" className="gap-2">Ver Blog <ChevronRight className="h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{post.category}</Badge>
                    <span className="text-[10px] text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl leading-snug hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">Ler Artigo</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:row">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Pronto para regularizar seu negócio?</h2>
                  <p className="opacity-80 mb-8">Preencha o formulário e receba um diagnóstico técnico preliminar sem custos.</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-2 rounded-lg shrink-0"><Phone className="h-5 w-5" /></div>
                      <span>(48) 9930-3323</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-2 rounded-lg shrink-0"><Mail className="h-5 w-5" /></div>
                      <span>contato@greenverse.com.br</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg shrink-0 mt-0.5"><MapPin className="h-5 w-5" /></div>
                      <span className="text-sm leading-relaxed">Rua Caetano Silveira de Matos nº 2455, sala 02, Centro Palhoça/SC, CEP 88130-005</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-sm italic">"A Greenverse foi fundamental para a expansão da nossa planta industrial em tempo recorde."</p>
                  <p className="text-xs mt-4 font-bold">— Diretor de Operações, Indústria Metalúrgica</p>
                </div>
              </div>
              <div className="p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Corporativo</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="email@empresa.com.br" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Serviço de Interesse</Label>
                      <Select onValueChange={(v) => setFormData({...formData, service: v})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="licenciamento">Gestão Ambiental e Soluções ESG</SelectItem>
                          <SelectItem value="residuos">Resíduos</SelectItem>
                          <SelectItem value="construcao">Construção Civil</SelectItem>
                          <SelectItem value="compliance">Compliance e Governança</SelectItem>
                          <SelectItem value="facilities">Facilities e Operações</SelectItem>
                          <SelectItem value="outorgas">Outorgas</SelectItem>
                          <SelectItem value="limpeza">Limpeza e Conservação</SelectItem>
                          <SelectItem value="pragas">Controle de Pragas</SelectItem>
                          <SelectItem value="gestao-prad">Gestão Ambiental e PRAD</SelectItem>
                          <SelectItem value="logistica">Logística e Transporte</SelectItem>
                          <SelectItem value="seguranca">Segurança e Vigilância</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Estado (UF)</Label>
                      <Select onValueChange={(v) => setFormData({...formData, state: v})}>
                        <SelectTrigger>
                          <SelectValue placeholder="UF" />
                        </SelectTrigger>
                        <SelectContent>
                          {BRAZIL_STATES.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg">Enviar Solicitação</Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    Ao enviar, você concorda com nossa Política de Privacidade e tratamento de dados conforme a LGPD.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-12 border-y">
        <div className="container mx-auto px-4 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-muted p-4 rounded-2xl hidden sm:block">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Guia de Gestão Ambiental e ESG</h3>
              <p className="text-sm text-muted-foreground">Baixe gratuitamente nosso guia completo de conformidade.</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Baixar Material Gratuito
          </Button>
        </div>
      </section>
    </div>
  );
};

const BlogPage = () => (
  <div className="pt-32 pb-24 min-h-screen">
    <SEO 
      title="Blog & Notícias Ambientais | Novidades e Sustentabilidade"
      description="Fique por dentro das últimas regulamentações do CONAMA, gestão de resíduos perigosos, transição para o mercado livre de energia e inovação em engenharia sustentável."
    />
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">Blog & Notícias Ambientais</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...BLOG_POSTS, ...BLOG_POSTS].map((post, i) => (
          <Card key={i} className="overflow-hidden group">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${post.id + i}/800/450`} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2">{post.category}</Badge>
              <CardTitle className="leading-tight">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <Button variant="outline" className="w-full">Ler Mais</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const ClientAreaPage = () => (
  <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-muted/30">
    <SEO 
      title="Portal do Cliente | Acesso Seguro"
      description="Acesse com segurança seus documentos, relatórios técnicos, laudos integrados de engenharia, status de condicionantes ambientais e cronogramas operacionais no Portal de Clientes Greenverse."
    />
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Portal do Cliente</CardTitle>
        <CardDescription>Acesse seus documentos e status de processos.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>E-mail</Label>
          <Input type="email" placeholder="seu@email.com" />
        </div>
        <div className="space-y-2">
          <Label>Senha</Label>
          <Input type="password" />
        </div>
        <Button className="w-full">Entrar no Painel</Button>
        <div className="text-center">
          <Button variant="link" className="text-xs">Esqueceu a senha?</Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === serviceId);
  const [activePillar, setActivePillar] = useState('all');

  if (!service) {
    return (
      <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Serviço não encontrado</h2>
        <Button onClick={() => navigate('/')}>Voltar para Início</Button>
      </div>
    );
  }

  if (serviceId === 'engenharia-industrial') {
    return (
      <div className="pt-32 pb-24 min-h-screen">
        <SEO 
          title="Engenharia Industrial, Caldeiras, Vasos de Pressão e NR-13" 
          description="Soluções completas de engenharia industrial na Greenverse. Projetos, montagem eletromecânica, tubulações industriais, comissionamento e adequação rigorosa à NR-13."
          keywords="engenharia industrial, caldeiras, vasos de pressão, tubulações industriais, adequação NR-13, montagem eletromecânica, comissionamento, central de GLP, vapor"
        />
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Início
          </Button>

          <div className="max-w-5xl mx-auto">
            {/* Custom Header for Engenharia Industrial */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
              <div className="bg-primary/10 p-6 rounded-2xl">
                <service.icon className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">Solução Especializada</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Greenverse Engenharia Industrial</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6 leading-relaxed">
                  Soluções Completas em Caldeiras, Vasos de Pressão, Tubulações Industriais e Adequação NR-13
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    A Greenverse oferece soluções integradas para implantação, adequação, modernização e gestão de sistemas industriais, atuando desde a engenharia inicial até a operação assistida dos equipamentos.
                  </p>
                  <p>
                    Nossa equipe desenvolve projetos completos para caldeiras, vasos de pressão, tubulações industriais, centrais de GLP, sistemas térmicos, utilidades industriais e instalações sujeitas à NR-13, garantindo segurança operacional, eficiência energética e conformidade legal.
                  </p>
                </div>
              </div>
            </div>

            {/* Structured Sections */}
            <div className="space-y-12">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3 text-foreground">
                  <FileText className="h-5 w-5 text-primary" />
                  Escopo Detalhado do Serviço
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                  Do projeto à operação: entregamos máxima performance com conformidade técnica e legal
                </p>
              </div>

              {/* Grid of the 9 areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. Engenharia e Projetos */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      Engenharia e Projetos
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Desenvolvemos projetos completos e personalizados para cada empreendimento, contemplando:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Engenharia conceitual, básica e executiva',
                        'Projetos mecânicos industriais',
                        'Projetos estruturais e fundações',
                        'Projetos de tubulação industrial',
                        'Projetos elétricos e de instrumentação',
                        'Projetos de automação e controle',
                        'Layout industrial e arranjo físico',
                        'Projetos de centrais de GLP',
                        'Adequação técnica conforme NR-13'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Todos os projetos são desenvolvidos visando máxima segurança, eficiência operacional e facilidade de manutenção.
                  </p>
                </motion.div>

                {/* 2. Obras Civis e Fundações */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      Obras Civis e Fundações
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Executamos toda a infraestrutura necessária para instalação dos equipamentos industriais:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Terraplenagem',
                        'Escavações',
                        'Bases de concreto armado',
                        'Radiers',
                        'Sapatas e blocos de fundação',
                        'Bases para caldeiras e vasos de pressão',
                        'Estruturas de apoio',
                        'Casas de caldeiras',
                        'Canaletas técnicas'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    As fundações são dimensionadas de acordo com as características dos equipamentos e condições do solo.
                  </p>
                </motion.div>

                {/* 3. Montagem Eletromecânica */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      Montagem Eletromecânica
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Realizamos a instalação completa dos sistemas industriais, incluindo:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Montagem de caldeiras',
                        'Instalação de vasos de pressão',
                        'Instalação de compressores',
                        'Sistemas de geração de vapor',
                        'Sistemas térmicos industriais',
                        'Equipamentos auxiliares',
                        'Bombas industriais',
                        'Trocadores de calor',
                        'Chaminés e sistemas de exaustão'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Todos os serviços seguem rigorosos padrões de qualidade, segurança e rastreabilidade.
                  </p>
                </motion.div>

                {/* 4. Tubulações Industriais */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        4
                      </span>
                      Tubulações Industriais
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Projetamos e executamos sistemas completos de tubulação para:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Vapor',
                        'Condensado',
                        'Água industrial',
                        'Ar comprimido',
                        'GLP',
                        'Gás natural',
                        'Produtos químicos',
                        'Fluidos térmicos'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Nossos serviços incluem fabricação, montagem, testes, isolamento térmico e identificação das linhas.
                  </p>
                </motion.div>

                {/* 5. Automação e Instrumentação */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        5
                      </span>
                      Automação e Instrumentação
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Implementamos sistemas inteligentes para controle e monitoramento dos processos industriais:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Painéis elétricos',
                        'PLCs e controladores industriais',
                        'Sistemas supervisórios',
                        'Monitoramento remoto',
                        'Controle de combustão',
                        'Instrumentação de campo',
                        'Sensores de pressão e temperatura',
                        'Medidores de vazão',
                        'Alarmes e intertravamentos de segurança'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    A automação proporciona maior eficiência operacional, redução de custos e aumento da confiabilidade dos processos.
                  </p>
                </motion.div>

                {/* 6. Comissionamento e Start-up */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        6
                      </span>
                      Comissionamento e Start-up
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Antes da entrega final, realizamos todas as etapas de validação do sistema:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Inspeções técnicas',
                        'Testes hidrostáticos',
                        'Testes operacionais',
                        'Calibração de instrumentos',
                        'Testes de segurança',
                        'Partida assistida',
                        'Validação de desempenho',
                        'Entrega técnica ao cliente'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Garantimos que cada sistema entre em operação com total segurança e desempenho.
                  </p>
                </motion.div>

                {/* 7. Adequação e Documentação NR-13 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        7
                      </span>
                      Adequação e Documentação NR-13
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Oferecemos suporte completo para atendimento às exigências da NR-13:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Inventário de equipamentos',
                        'Prontuários técnicos',
                        'Registros de segurança',
                        'Relatórios de inspeção',
                        'Planos de manutenção',
                        'Gestão documental',
                        'Cronograma de inspeções',
                        'Adequação de instalações existentes'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Nosso objetivo é garantir a conformidade legal e a integridade dos ativos industriais.
                  </p>
                </motion.div>

                {/* 8. Treinamentos Técnicos */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        8
                      </span>
                      Treinamentos Técnicos
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Capacitamos operadores, supervisores e equipes de manutenção por meio de treinamentos voltados para:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Operação segura de caldeiras',
                        'Operação de vasos de pressão',
                        'Procedimentos operacionais',
                        'Segurança industrial',
                        'Boas práticas de manutenção',
                        'Conscientização sobre NR-13'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Investir em treinamento significa reduzir riscos e aumentar a produtividade.
                  </p>
                </motion.div>

                {/* 9. Assistência Técnica e Suporte Continuado */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md md:col-span-2 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        9
                      </span>
                      Assistência Técnica e Suporte Continuado
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Após a entrega do projeto, permanecemos ao lado de nossos clientes oferecendo:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        {[
                          'Manutenção preventiva',
                          'Manutenção corretiva',
                          'Inspeções periódicas',
                          'Monitoramento operacional'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {[
                          'Consultoria técnica',
                          'Suporte emergencial',
                          'Gestão da integridade dos ativos'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Nosso compromisso é garantir o desempenho contínuo e a segurança das instalações ao longo de toda sua vida útil.
                  </p>
                </motion.div>
              </div>

              {/* Bottom institutional section specifically for Engenharia Industrial */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center space-y-4 max-w-4xl mx-auto mt-16 shadow-inner">
                <h4 className="font-bold text-2xl text-foreground">Greenverse: Engenharia, Segurança e Inovação</h4>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  Mais do que executar obras industriais, a Greenverse entrega soluções completas, integrando engenharia, tecnologia, conformidade regulatória e excelência operacional.
                </p>
                <p className="text-primary font-semibold text-sm md:text-base">
                  Do projeto à operação, oferecemos uma única solução para todas as etapas do seu empreendimento industrial.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-16 bg-foreground text-background rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">Precisa de um orçamento específico?</h3>
                <p className="text-background/70 mb-8 max-w-xl mx-auto">Nossos engenheiros e consultores estão prontos para analisar seu projeto e entregar uma proposta personalizada sob medida.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white" onClick={() => navigate('/#contato')}>
                    Solicitar Proposta Agora
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-transparent hover:bg-white/10 text-white" onClick={() => navigate('/#contato')}>
                    Falar com Especialista
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  if (serviceId === 'infraestrutura-engenharia') {
    const specialties = [
      "Infraestrutura Urbana e Rural",
      "Pontes, Viadutos e Passarelas",
      "Barragens e Recursos Hídricos",
      "Drenagem e Saneamento",
      "Pavimentação e Obras Viárias",
      "Escolas, Creches e Unidades de Saúde",
      "Habitação Popular e Desenvolvimento Urbano",
      "Galpões Industriais e Centros Logísticos",
      "Obras para Papel e Celulose, Agroindústria e Mineração",
      "Estruturas Pré-Moldadas e Moldadas in Loco",
      "Construções Modulares Permanentes e Temporárias",
      "Parques Industriais, Energéticos e Operacionais",
      "Centros de Distribuição e Armazenagem",
      "Obras de Defesa Civil e Reconstrução",
      "Retrofit, Ampliações e Modernizações Industriais",
      "ESG, Compliance, Governança e Sustentabilidade"
    ];

    const businessUnits = [
      {
        id: "edificacoes-industriais",
        num: "01",
        title: "EDIFICAÇÕES INDUSTRIAIS E LOGÍSTICAS",
        icon: Factory,
        description: "Galpões e centros operacionais projetados sob medida com alta eficiência estrutural e velocidade de montagem.",
        items: [
          "Galpões industriais", "Centros de distribuição", "Armazéns logísticos", 
          "Condomínios logísticos", "Centros de manutenção", "Frigoríficos", 
          "Hangares", "Centros operacionais", "Oficinas industriais"
        ]
      },
      {
        id: "infraestrutura-publica",
        num: "02",
        title: "INFRAESTRUTURA PÚBLICA",
        icon: Building2,
        description: "Soluções robustas e completas para o desenvolvimento urbano e rural de cidades e rodovias.",
        items: [
          "Pontes", "Passarelas", "Viadutos", "Aduelas", "Galerias pluviais", 
          "Bueiros celulares", "Muros de contenção", "Reservatórios", "Canalizações", "Drenagem urbana"
        ],
        frequentItems: [
          "Pontes rurais", "Cabeceiras de pontes", "Galerias pré-moldadas", "Bueiros", 
          "Abrigos de ônibus", "Cemitérios verticais", "Jazigos pré-moldados", "Muros pré-moldados", 
          "Escolas", "UBS", "Creches"
        ]
      },
      {
        id: "habitacao-popular",
        num: "03",
        title: "HABITAÇÃO POPULAR",
        icon: Home,
        description: "Estruturas modulares e de alvenaria estrutural focadas em programas habitacionais nas esferas municipal, estadual e federal.",
        items: [
          "Casas pré-moldadas", "Conjuntos habitacionais", "Condomínios populares", 
          "Habitação rural", "Habitação emergencial"
        ]
      },
      {
        id: "saneamento",
        num: "04",
        title: "SANEAMENTO",
        icon: Waves,
        description: "Estações de tratamento e redes de distribuição/drenagem que apoiam municípios, estatais e concessionárias privadas.",
        items: [
          "ETA (Estação de Tratamento de Água)", "ETE (Estação de Tratamento de Esgoto)", "Reservatórios", 
          "Caixas de retenção", "Estações elevatórias", "Redes de drenagem", "Galerias celulares", 
          "Poços de visita", "Canaletas técnicas"
        ]
      },
      {
        id: "agronegocio",
        num: "05",
        title: "AGRONEGÓCIO",
        icon: Sprout,
        description: "Estruturas rurais e operacionais projetadas especificamente para apoiar cooperativas, produtores e indústrias agroalimentares.",
        items: [
          "Silos", "Galpões agrícolas", "Armazéns", "Bases operacionais", "Currais", 
          "Estruturas para cooperativas", "Centros de recebimento de grãos"
        ]
      },
      {
        id: "energia-mineracao",
        num: "06",
        title: "ENERGIA E MINERAÇÃO",
        icon: Cpu,
        description: "Infraestrutura operacional de alto desempenho para usinas de energias renováveis e suporte a campos de mineração.",
        items: [
          "Bases para subestações", "Casas de comando", "Estruturas para usinas solares", 
          "Estruturas para parques eólicos", "Canteiros industriais", "Galpões provisórios", 
          "Oficinas", "Bases de mineração"
        ]
      },
      {
        id: "mobiliario-urbano",
        num: "07",
        title: "MOBILIÁRIO URBANO PRÉ-MOLDADO",
        icon: Wrench,
        description: "Mobiliário de alta durabilidade e utilitários urbanos encomendados continuamente por administrações públicas.",
        items: [
          "Abrigos de ônibus", "Banheiros públicos", "Quiosques", "Praças", "Arquibancadas", 
          "Quadras esportivas", "Portais municipais", "Monumentos", "Lixeiras", "Floreiras", "Bancos", "Ciclovias"
        ]
      }
    ];

    const pipelineSteps = [
      { step: "Projeto", desc: "Estudos preliminares, modelagem 3D, cálculos e engenharia de valor." },
      { step: "Engenharia", desc: "Dimensionamento e compatibilização de todas as disciplinas técnicas." },
      { step: "Fabricação", desc: "Produção industrial de peças pré-moldadas e sob rigoroso controle de qualidade." },
      { step: "Suprimentos", desc: "Logística integrada e fornecimento homologado de insumos." },
      { step: "Construção", desc: "Trabalhos de infraestrutura, terraplenagem e fundações in loco." },
      { step: "Montagem", desc: "Içamento, fixação e montagem de alta precisão das estruturas." },
      { step: "Gestão", desc: "Gerenciamento total de cronograma e conformidade técnico-financeira." },
      { step: "Operação Assistida", desc: "Acompanhamento nos primeiros ciclos para garantir o perfeito comissionamento." },
      { step: "Manutenção", desc: "Planos preditivos, preventivos e corretivos estruturados." }
    ];

    const targetAudience = [
      "Governos", "Prefeituras", "Concessionárias", "Cooperativas", "Indústrias", "Incorporadoras", 
      "Setor Logístico", "Agronegócio", "Energia", "Papel e Celulose", "Mineração", "Grandes Empreendimentos"
    ];

    return (
      <div className="pt-32 pb-24 min-h-screen bg-slate-50/50">
        <SEO 
          title="Infraestrutura, Engenharia e Desenvolvimento | Greenverse" 
          description="Soluções integradas de engenharia e infraestrutura para o setor público, industrial, logístico, habitacional, energético, ambiental e de infraestrutura."
          keywords="infraestrutura, engenharia civil, pré-moldados, obras industriais, saneamento, prefeituras, defensas civis, kits municipais, habitação popular"
        />
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-8 gap-2 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Início
          </Button>

          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-16 pb-12 border-b border-border/80">
              <div className="bg-primary/10 p-6 rounded-2xl text-primary shrink-0">
                <Construction className="h-14 w-14" />
              </div>
              <div>
                <Badge className="mb-4 bg-primary/15 text-primary hover:bg-primary/20 border-none px-3 py-1 font-semibold text-xs tracking-wider">
                  GREENVERSE INFRAESTRUTURA, ENGENHARIA E DESENVOLVIMENTO
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 leading-tight">
                  Infraestrutura, Engenharia e Desenvolvimento
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mb-6">
                  Soluções Integradas para Obras Públicas, Indústria, Logística, Habitação, Energia, Saneamento e Infraestrutura.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-4xl">
                  A Greenverse atua na concepção, engenharia, fabricação, construção, montagem e gerenciamento de empreendimentos de pequeno, médio e grande porte, oferecendo soluções completas em estruturas pré-moldadas, construções modulares, obras industriais, infraestrutura pública e desenvolvimento urbano.
                </p>
                <div className="mt-6 inline-flex flex-col items-start p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1">GREENVERSE</span>
                  <span className="font-semibold text-slate-800 italic">"Construindo Infraestrutura. Desenvolvendo Comunidades. Transformando o Futuro."</span>
                </div>
              </div>
            </div>

            {/* Soluções Completas - Pipeline Flow */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900">Soluções Completas</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Nossa cadeia de valor integrada atende desde os estudos conceituais até o ciclo final de manutenção:</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {pipelineSteps.map((step, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-border/60 hover:shadow-sm transition-all text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary/25 group-hover:bg-primary transition-colors" />
                    <span className="text-2xl font-black text-primary/10 font-mono mb-1 block">{(idx + 1).toString().padStart(2, '0')}</span>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{step.step}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties Checklist */}
            <div className="bg-white rounded-3xl p-8 border border-border/80 shadow-sm mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" /> Nossas Especialidades
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                {specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 group">
                    <span className="text-emerald-500 shrink-0 mt-0.5 select-none font-bold text-lg leading-none">✓</span>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed group-hover:text-primary transition-colors">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 Business Units Grid */}
            <div className="mb-16">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900">Unidades de Negócio</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">Atuamos com soluções integradas que maximizam o valor técnico, logístico e financeiro do seu empreendimento.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {businessUnits.map((bu, idx) => {
                  const Icon = bu.icon;
                  return (
                    <motion.div
                      key={bu.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-3xl p-8 border border-border/70 hover:border-primary/20 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                            <Icon className="h-8 w-8" />
                          </div>
                          <span className="text-3xl font-black font-mono text-slate-200">{bu.num}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{bu.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{bu.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Soluções e Escopo:</h4>
                            <div className="flex flex-wrap gap-2">
                              {bu.items.map((item, iIdx) => (
                                <Badge key={iIdx} variant="secondary" className="bg-slate-100 hover:bg-primary/10 hover:text-primary text-slate-700 font-medium px-2.5 py-1 text-xs border border-slate-200/50 transition-colors">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {bu.frequentItems && (
                            <div className="pt-4 border-t border-slate-100">
                              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                                <span>🎯</span> {bu.frequentItems ? "Procura Frequente por Municípios:" : ""}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {bu.frequentItems.map((fItem, fIdx) => (
                                  <Badge key={fIdx} variant="outline" className="border-emerald-200/60 bg-emerald-50/20 text-emerald-800 font-medium px-2.5 py-1 text-xs hover:bg-emerald-50 transition-colors">
                                    {fItem}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Special Lines: Greenverse Municipal & Defesa Civil */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Greenverse Municipal */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                      <Building2 className="h-7 w-7" />
                    </div>
                    <div>
                      <Badge className="bg-primary text-white hover:bg-primary/90 border-none font-bold text-xs tracking-wider px-2 py-0.5 mb-1">LINHA EXCLUSIVA</Badge>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">GREENVERSE MUNICIPAL</h3>
                    </div>
                  </div>
                  <p className="text-slate-700 font-medium mb-4">
                    Voltada exclusivamente para prefeituras e órgãos públicos de administração direta e indireta.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Prefeituras gostam de soluções prontas, ágeis e estruturadas. Oferecemos pacotes padronizados fornecidos com memorial descritivo completo, projeto padrão em BIM, orçamento detalhado e cronogramas padrão para acelerar licitações e contratações diretas em todo o país.
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Pacotes Padronizados (Kits Disponíveis):</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Kit Ponte Rural", "Kit Travessia Urbana", "Kit Drenagem Urbana", 
                        "Kit Escola Modular", "Kit UBS Modular", "Kit Praça Pública", 
                        "Kit Pavilhão Municipal", "Kit Centro Comunitário", 
                        "Kit Abrigo de Ônibus", "Kit Mercado Público"
                      ].map((kit, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 p-2 bg-white/80 rounded-xl border border-slate-200/50 hover:bg-white transition-colors">
                          <span className="text-primary text-xs font-bold">●</span>
                          <span className="text-xs text-slate-800 font-semibold">{kit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Defesa Civil */}
              <div className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-3xl p-8 border border-amber-500/20 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-amber-500/20 p-3 rounded-2xl text-amber-700">
                      <AlertTriangle className="h-7 w-7" />
                    </div>
                    <div>
                      <Badge className="bg-amber-600 text-white hover:bg-amber-700 border-none font-bold text-xs tracking-wider px-2 py-0.5 mb-1">ATENDIMENTO ÁGIL</Badge>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">DEFESA CIVIL & RECONSTRUÇÃO</h3>
                    </div>
                  </div>
                  <p className="text-slate-700 font-medium mb-4">
                    Respostas estratégicas e imediatas em situações emergenciais, sinistros ou desastres naturais.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Após eventos climáticos extremos ou situações de calamidade pública, as administrações públicas precisam de velocidade absoluta. Fornecemos estruturas pré-calculadas de altíssima rapidez de montagem para abrigar populações, garantir pronto atendimento e recuperar travessias vitais.
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Soluções de Restabelecimento:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Pontes emergenciais", "Habitações temporárias", "Abrigos provisórios", 
                        "Escolas temporárias", "UBS temporárias", "Centros de acolhimento", 
                        "Recuperação de infra", "Reconstrução de pontes", "Reconstrução urbana", 
                        "Contenções encostas"
                      ].map((civil, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 p-2 bg-white/80 rounded-xl border border-amber-500/10 hover:bg-white transition-colors">
                          <span className="text-amber-500 text-xs font-bold">●</span>
                          <span className="text-xs text-slate-800 font-semibold">{civil}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience Badge list */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 text-center mb-16">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-slate-400">Atendemos de Forma Personalizada</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">Entregamos qualidade, segurança técnica, conformidade com as normas vigentes e estrito cumprimento dos cronogramas físicos:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {targetAudience.map((audience, idx) => (
                  <Badge key={idx} variant="outline" className="border-white/10 bg-white/5 hover:bg-white/15 text-white/90 text-xs px-3.5 py-1.5 font-semibold transition-colors">
                    {audience}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Value Proposition: Engenharia que Viabiliza Grandes Projetos */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border/80 shadow-sm mb-16">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none px-3 py-1 font-semibold text-xs tracking-wider">
                  MODELAGEM DE COMPRA E EXECUÇÃO
                </Badge>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Engenharia que Viabiliza Grandes Projetos</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Do estudo inicial à entrega final, desenvolvemos soluções técnicas e comerciais que tornam empreendimentos de infraestrutura, habitação, indústria e desenvolvimento urbano mais acessíveis, previsíveis e sustentáveis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 pt-8 border-t border-slate-100">
                {[
                  {
                    title: "Planejamento estruturado",
                    desc: "Análise técnica robusta, engenharia de valor e soluções de fomento financeiro."
                  },
                  {
                    title: "Cronogramas personalizados",
                    desc: "Sincronia físico-financeira que garante a previsibilidade de desembolsos."
                  },
                  {
                    title: "Execução por etapas",
                    desc: "Modelagem escalável que se adapta à captação ou orçamento público anual."
                  },
                  {
                    title: "Soluções mistas",
                    desc: "Contratações, convênios ou parcerias público-privadas perfeitamente modeladas."
                  },
                  {
                    title: "Gestão ponta a ponta",
                    desc: "Supervisão integral desde as fundações até o comissionamento final."
                  }
                ].map((val, idx) => (
                  <div key={idx} className="space-y-2 text-center md:text-left">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto md:mx-0 font-bold text-sm">
                      ✔
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm leading-snug">{val.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slogan & Posicionamento Institucional Section */}
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/15 text-center space-y-6 max-w-4xl mx-auto mb-16 shadow-inner">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto text-primary">
                <Globe className="h-6 w-6 animate-pulse" />
              </div>
              <h4 className="font-bold text-xl md:text-2xl text-foreground tracking-tight uppercase">
                Posicionamento Institucional
              </h4>
              <blockquote className="text-foreground/90 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-medium italic">
                "A Greenverse desenvolve soluções integradas de engenharia, infraestrutura, habitação, saneamento, indústria, energia e desenvolvimento urbano, atuando desde a concepção do projeto até a fabricação, construção, montagem, operação assistida e manutenção, atendendo governos, concessionárias, cooperativas, indústrias e organizações de grande porte."
              </blockquote>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-slate-900 text-white rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Pronto para estruturar seu projeto?</h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto text-sm md:text-base">Nossos engenheiros e consultores de infraestrutura e desenvolvimento urbano estão prontos para analisar as necessidades da sua prefeitura, concessionária ou empresa.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white" onClick={() => navigate('/#contato')}>
                  Solicitar Proposta Comercial
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-transparent hover:bg-white/10 text-white" onClick={() => navigate('/#contato')}>
                  Falar com Engenheiro Responsável
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  if (serviceId === 'barragens-infraestrutura-hidrica') {
    const specialties = [
      "Construção de Barragens",
      "Reforma e Recuperação Estrutural",
      "Alteamentos e Ampliações",
      "Obras Hidráulicas e Vertedouros",
      "Contenções e Estabilização de Taludes",
      "Segurança de Barragens (PSB e PAEBM)",
      "Monitoramento e Instrumentação",
      "Desassoreamento e Dragagem",
      "ESG, Compliance e Governança",
      "Infraestrutura Pública e Industrial"
    ];

    const pillars = [
      {
        id: "all",
        title: "Todos os Serviços"
      },
      {
        id: "planejamento",
        title: "Planejamento e Projetos"
      },
      {
        id: "construcao",
        title: "Construção Pesada"
      },
      {
        id: "manutencao",
        title: "Recuperação e Manutenção"
      },
      {
        id: "monitoramento",
        title: "Segurança e Monitoramento"
      }
    ];

    const divisions = [
      {
        id: "estudos-projetos",
        num: "01",
        title: "ESTUDOS E PROJETOS",
        pillar: "planejamento",
        description: "Estudos de viabilidade técnica e econômica integrados com as disciplinas de hidrologia, hidráulica, geotecnia e engenharia consultiva em modelo BIM.",
        items: [
          "Estudos de viabilidade técnica e econômica", "Estudos hidrológicos", "Estudos hidráulicos", "Estudos geológicos", 
          "Estudos geotécnicos", "Estudos topográficos", "Batimetria", "Levantamentos com drone", 
          "Modelagem BIM", "Modelagem 3D", "Projetos conceituais", "Projetos básicos", 
          "Projetos executivos", "Projetos as built", "Engenharia consultiva", "Due diligence técnica"
        ]
      },
      {
        id: "licenciamento-regularizacao",
        num: "02",
        title: "LICENCIAMENTO E REGULARIZAÇÃO",
        pillar: "planejamento",
        description: "Garantimos a plena conformidade ambiental e legal com processos ágeis de licenciamento, outorgas, estudos técnicos e gestão ambiental da obra.",
        items: [
          "Licenciamento ambiental", "Outorga de uso da água", "Estudos ambientais", "EIA/RIMA", 
          "PCA", "PRAD", "PGRS", "Gestão ambiental da obra", 
          "Regularização fundiária", "Cadastro junto aos órgãos reguladores"
        ]
      },
      {
        id: "construcao-barragens",
        num: "03",
        title: "CONSTRUÇÃO DE BARRAGENS",
        pillar: "construcao",
        description: "Construção de maciços de terra, enrocamento e concreto CCR, além de diques, bacias de retenção e reservatórios especiais.",
        subsections: [
          {
            title: "Barragens de Terra",
            items: ["Compactação de aterros", "Núcleo impermeável", "Drenos internos", "Taludes de montante e jusante", "Proteção superficial"]
          },
          {
            title: "Barragens de Enrocamento",
            items: ["Enrocamento compactado", "Filtros drenantes", "Proteção de taludes com rip-rap"]
          },
          {
            title: "Barragens de Concreto",
            items: ["Concreto Compactado a Rolo (CCR)", "Gravidade", "Arco", "Contrafortes"]
          },
          {
            title: "Outros Reservatórios",
            items: ["Diques", "Açudes", "Reservatórios industriais e de processo", "Reservatórios de irrigação", "Reservatórios de água potável", "Reservatórios para combate a incêndio", "Lagoas artificiais"]
          }
        ]
      },
      {
        id: "terraplenagem-pesada",
        num: "04",
        title: "TERRAPLENAGEM PESADA",
        pillar: "construcao",
        description: "Movimentação de terra e rocha em grande escala com frota de última geração e precisão topográfica.",
        items: [
          "Escavação mecanizada", "Escavação em rocha", "Desmonte controlado", "Aterro compactado", 
          "Reaterro", "Regularização de terreno", "Movimentação de solo", "Transporte de material", "Jazidas de empréstimo"
        ]
      },
      {
        id: "obras-concreto",
        num: "05",
        title: "OBRAS DE CONCRETO",
        pillar: "construcao",
        description: "Execução de estruturas hidráulicas especiais, bacias de dissipação, tomadas d'água e vertedouros em concreto armado.",
        items: [
          "Estruturas hidráulicas complexas", "Muros de contenção", "Vertedouros de soleira livre ou controlada", 
          "Tomadas d'água", "Galerias celulares", "Bacias de dissipação", "Escadas hidráulicas", 
          "Dissipadores de energia", "Canaletas de concreto", "Canalizações abertas ou fechadas"
        ]
      },
      {
        id: "sistemas-drenagem",
        num: "06",
        title: "SISTEMAS DE DRENAGEM",
        pillar: "construcao",
        description: "Dimensionamento e execução de drenos profundos, superficiais e filtros especiais de proteção estrutural do maciço.",
        items: [
          "Drenagem superficial", "Drenagem profunda", "Drenos horizontais profundos (DHP)", 
          "Drenos verticais", "Filtros drenantes de areia e brita", "Canaletas de drenagem", "Poços de inspeção"
        ]
      },
      {
        id: "impermeabilizacao",
        num: "07",
        title: "IMPERMEABILIZAÇÃO",
        pillar: "construcao",
        description: "Aplicação de geomembranas PEAD, mantas bentoníticas (GCL) e revestimentos especiais para retenção de fluidos.",
        items: [
          "Geomembranas (PEAD/PVC)", "Geotêxteis tecidos e não-tecidos", "Mantas Bentoníticas (GCL)", 
          "Argila compactada (núcleos de argila)", "Mantas impermeabilizantes de alto desempenho", "Revestimentos especiais anticorrosivos"
        ]
      },
      {
        id: "contencao-estabilizacao",
        num: "08",
        title: "CONTENÇÃO E ESTABILIZAÇÃO",
        pillar: "construcao",
        description: "Soluções estruturais e geotécnicas para estabilização de taludes, encostas e contenção em bacias hídricas.",
        items: [
          "Solo grampeado", "Cortinas atirantadas", "Estacas-prancha metálicas", "Muros de gabião", 
          "Muros de concreto armado", "Rip-rap (enrocamento arrumado)", "Enrocamentos de proteção", "Bioengenharia de solos"
        ]
      },
      {
        id: "recuperacao-barragens",
        num: "09",
        title: "RECUPERAÇÃO DE BARRAGENS",
        pillar: "manutencao",
        description: "Reabilitação corretiva de anomalias, reforço estrutural de concreto, injeções em maciços e intervenções emergenciais pós-sinistros.",
        items: [
          "Reforço estrutural de galerias e tomadas d'água", "Alteamento corretivo", "Recuperação de taludes erodidos", 
          "Recuperação e desobstrução de drenos internos", "Recuperação de vertedouros erodidos", "Recuperação de estruturas hidráulicas e comportas", 
          "Recuperação pós-enchente", "Intervenções e obras emergenciais"
        ]
      },
      {
        id: "ampliacoes-alteamentos",
        num: "10",
        title: "AMPLIAÇÕES E ALTEAMENTOS",
        pillar: "manutencao",
        description: "Engenharia de ampliação de capacidade hídrica e alteamento do maciço principal de forma segura.",
        items: [
          "Ampliação de capacidade de reservatórios", "Aumento de capacidade volumétrica", "Alteamento de maciço (jusante/montante/linha de centro)", 
          "Ampliação e redimensionamento de vertedouros", "Ampliação de sistemas de drenagem pluvial", "Adequação normativa (ajustes de borda livre)"
        ]
      },
      {
        id: "monitoramento-instrumentacao",
        num: "11",
        title: "MONITORAMENTO E INSTRUMENTAÇÃO",
        pillar: "monitoramento",
        description: "Soluções integradas de telemetria, sensores IoT e instrumentos geotécnicos para controle de performance e segurança em tempo real.",
        items: [
          "Piezômetros (casagrande, corda vibrante, pneumáticos)", "Inclinômetros de precisão", "Medidores de vazão de infiltração (vertedores triangular/trapezoidal)", 
          "Marcos superficiais de recalque (geodesia)", "Estações meteorológicas dedicadas", "Sensores conectados via IoT", 
          "Sistemas de monitoramento remoto 24/7", "Telemetria via satélite/GSM", "Centro de controle operacional integrado"
        ]
      },
      {
        id: "inspecoes-seguranca",
        num: "12",
        title: "INSPEÇÕES E SEGURANÇA",
        pillar: "monitoramento",
        description: "Cumprimento rigoroso da Política Nacional de Segurança de Barragens (PNSB) com inspeções regulares (ISR) e auditorias especializadas.",
        items: [
          "Inspeção de segurança regular (ISR)", "Inspeção especial (ISE)", "Inspeção emergencial pós-eventos críticos", 
          "Auditorias técnicas de estabilidade", "Avaliação qualitativa e quantitativa de risco", "Plano de Segurança de Barragem (PSB)", 
          "Revisão periódica de segurança de barragem (RPSB)"
        ]
      },
      {
        id: "paebm",
        num: "13",
        title: "PLANO DE AÇÃO DE EMERGÊNCIA (PAEBM)",
        pillar: "monitoramento",
        description: "Concepção do PAEBM com estudos computacionais de Dam Break, delimitação de manchas de inundação e instalação de infraestrutura de alerta.",
        items: [
          "Desenvolvimento e atualização do PAEBM", "Simulados práticos de evacuação", "Treinamento de equipes de emergência e Defesa Civil", 
          "Sistemas de alerta de massa com sirenes direcionais", "Sistemas de backup de energia para alertas", 
          "Comunicação social e engajamento comunitário", "Planos de gestão de crises e contingências"
        ]
      },
      {
        id: "operacao-manutencao",
        num: "14",
        title: "OPERAÇÃO E MANUTENÇÃO",
        pillar: "manutencao",
        description: "Operação continuada ou assistida de barragens e canais, conservando ativos mecânicos e controlando as erosões.",
        items: [
          "Operação assistida em fase de comissionamento", "Operação integral terceirizada", "Manutenção preventiva de adufas e registros", 
          "Manutenção corretiva mecânica e estrutural", "Limpeza de reservatórios e bacias de retenção", "Desassoreamento local", 
          "Gestão de vegetação de taludes e margens", "Controle de erosões marginais"
        ]
      },
      {
        id: "desassoreamento",
        num: "15",
        title: "DESASSOREAMENTO",
        pillar: "manutencao",
        description: "Serviços especializados de dragagem de sedimentos, remoção de lodo e reestabelecimento da capacidade volumétrica do reservatório.",
        items: [
          "Dragagem por sucção e recalque", "Limpeza mecanizada com escavadeiras anfíbias", "Limpeza subaquática especializada", 
          "Remoção e desidratação de sedimentos (geotubos/filtros-prensa)", "Transporte seguro e destinação final licenciada de rejeitos"
        ]
      },
      {
        id: "obras-ambientais",
        num: "16",
        title: "OBRAS AMBIENTAIS",
        pillar: "manutencao",
        description: "Mitigação e compensação de impactos hídricos, reflorestamento de Áreas de Preservação Permanente (APP) e bioengenharia de solos.",
        items: [
          "Recuperação de áreas degradadas (PRAD)", "Reflorestamento de mata ciliar", "Controle de processos erosivos com biomantas", 
          "Revegetação e hidrossemeadura", "Proteção e cercamento de APP", "Projetos de compensação ambiental estruturada", 
          "Gestão, monitoramento e afugentamento de fauna e flora"
        ]
      },
      {
        id: "esg-compliance-governanca",
        num: "17",
        title: "ESG, COMPLIANCE E GOVERNANÇA",
        pillar: "planejamento",
        description: "Certificamos a responsabilidade e governança nos projetos hídricos com compliance legal, rastreabilidade de materiais e relatórios de sustentabilidade.",
        items: [
          "Gestão ESG aplicada ao canteiro de obras", "Compliance ambiental e de condicionantes de licença", 
          "Compliance regulatório com órgãos fiscalizadores (ANA/órgãos estaduais)", "Governança corporativa de projetos e investimentos", 
          "Gestão documental digital e rastreabilidade total", "Auditorias ambientais e técnicas de terceira parte", 
          "Due diligence técnica-ambiental para fusões e aquisições", "Gestão de stakeholders e relacionamento social", 
          "Relatórios técnicos estruturados de sustentabilidade"
        ]
      }
    ];

    const specializedHubs = [
      {
        title: "Segurança de Barragens",
        icon: ShieldCheck,
        items: [
          "PAEBM", "PSB (Plano de Segurança de Barragem)", "Revisão Periódica de Segurança", 
          "Análise de ruptura hipotética (Dam Break)", "Estudos de inundação e escoamento", 
          "Mapas de mancha de inundação georreferenciados", "Sistemas integrados de alerta e evacuação"
        ]
      },
      {
        title: "Obras Hidráulicas Complementares",
        icon: Waves,
        items: [
          "Canais de adução e desvio", "Sistemas de adução de água bruta", "Estações de bombeamento de alta vazão", 
          "Comportas, adufas, válvulas e stoplogs", "Reservatórios industriais e de processo", 
          "Lagoas de tratamento de efluentes", "Bacias de contenção de segurança", "Piscinões urbanos de retenção"
        ]
      },
      {
        title: "Recuperação Ambiental",
        icon: Leaf,
        items: [
          "Recuperação de Áreas de Preservação Permanente (APP)", "Controle de processos erosivos acelerados", 
          "Hidrossemeadura e revegetação de taludes", "Bioengenharia de solos para contenção de margens", 
          "Ações estruturadas de compensação ambiental", "Neutralização de passivos ambientais e monitoramento"
        ]
      },
      {
        title: "Obras Públicas",
        icon: Building2,
        items: [
          "Barragens para abastecimento público", "Controle de cheias e amortecimento de picos de vazão", 
          "Macrodrenagem urbana e canalizações", "Proteção de áreas urbanas contra enchentes", 
          "Contenção de encostas e taludes municipais", "Reservatórios municipais de água tratada", 
          "Infraestrutura hídrica e barramentos rurais"
        ]
      },
      {
        title: "Atendimento Industrial",
        icon: Factory,
        items: [
          "Barragens industriais de captação e acumulação", "Lagoas de estabilização e tratamento de efluentes", 
          "Sistemas de retenção de emergência em plantas industriais", "Bacias de contenção para produtos químicos", 
          "Reservatórios de água de combate a incêndio de alta capacidade", "Infraestrutura hídrica integrada para plantas de papel e celulose"
        ]
      }
    ];

    const potentialClients = [
      "Klabin", "Suzano", "Arauco", "CMPC", "Vale", "CSN", "ArcelorMittal", "Petrobras", "Eletrobras", 
      "Concessionárias de saneamento", "Companhias de irrigação", "Cooperativas agrícolas", "Usinas hidrelétricas", 
      "Prefeituras", "Governos estaduais", "Governo Federal", "Defesa Civil", "Portos", "Ferrovias", 
      "Complexos industriais", "Mineradoras", "Agronegócio", "Condomínios rurais", "Loteamentos", "Parques industriais"
    ];

    const clientDifferentiators = [
      { title: "ESG aplicado à obra", desc: "Redução de emissões, gestão rígida de resíduos e contratação local qualificada." },
      { title: "Compliance de fornecedores", desc: "Homologação rigorosa de prestadores sob políticas robustas antissuborno e de direitos humanos." },
      { title: "Gestão documental digital", desc: "Repositórios seguros na nuvem para acesso rápido a licenças, projetos e relatórios de fiscalização." },
      { title: "Rastreabilidade de materiais", desc: "Controle de qualidade e origem do concreto, aço, argila e materiais geotêxteis aplicados." },
      { title: "Indicadores de desempenho (KPIs)", desc: "Transparência total com indicadores semanais de avanço físico-financeiro, segurança e sustentabilidade." },
      { title: "Auditorias internas constantes", desc: "Processo contínuo de verificação da qualidade construtiva e atendimento aos memoriais." },
      { title: "Gestão de riscos corporativos", desc: "Aplicação de matrizes de riscos técnicos, geotécnicos e regulatórios desde o início do projeto." },
      { title: "Sistema integrado de qualidade", desc: "Rigor máximo em conformidade com as normas ABNT NBR aplicáveis à engenharia civil e hídrica." },
      { title: "Planejamento executivo estruturado", desc: "Controle rigoroso de cronogramas e sincronia física para mitigar riscos de estouro de orçamento." }
    ];

    const actionScopes = [
      "Estudos e projetos", "Licenciamento", "Construção", "Reforma", "Ampliação", "Alteamento", 
      "Recuperação", "Monitoramento", "Operação", "Manutenção", "Desassoreamento", "Segurança de barragens", 
      "Obras hidráulicas", "Contenção e estabilização", "Infraestrutura pública", "Infraestrutura industrial", "ESG, Compliance e Governança"
    ];

    return (
      <div className="pt-32 pb-24 min-h-screen">
        <SEO 
          title="Barragens e Infraestrutura Hídrica | Projetos, Construção, Segurança e Obras" 
          description="Construímos, ampliamos, recuperamos e modernizamos barragens, reservatórios e estruturas hidráulicas de alta complexidade. Da concepção do projeto à operação assistida, entregamos soluções completas."
          keywords="construção de barragens, segurança de barragens, paebm, psb, obras hidráulicas, terraplenagem pesada, desassoreamento, dragagem, contenção, dambrake"
        />
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Início
          </Button>

          <div className="max-w-6xl mx-auto">
            {/* Custom Header */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
              <div className="bg-primary/10 p-6 rounded-2xl">
                <service.icon className="h-12 w-12 text-primary animate-pulse" />
              </div>
              <div className="flex-1">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 font-semibold">DIVISÃO CORPORATIVA</Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-foreground uppercase">
                  Barragens e Infraestrutura Hídrica
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 leading-relaxed">
                  Engenharia de Barragens, Recursos Hídricos e Infraestrutura Estratégica
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed font-semibold mb-4">
                  Transformamos desafios hídricos em soluções seguras, duráveis e sustentáveis.
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Construímos, ampliamos, recuperamos e modernizamos barragens, reservatórios e estruturas hidráulicas de alta complexidade.
                  </p>
                  <p>
                    Da concepção do projeto à operação assistida, entregamos soluções completas em terraplenagem pesada, drenagem, contenções, vertedouros, monitoramento, segurança de barragens, recuperação ambiental e infraestrutura hídrica para os setores público, industrial, florestal, minerário, energético e agroindustrial. Nossa atuação cobre desde a engenharia e licenciamento até a execução, manutenção e gestão de ativos hídricos.
                  </p>
                  <p>
                    Atuamos na construção, recuperação, ampliação e modernização de barragens, reservatórios, diques, canais, sistemas de drenagem e estruturas hidráulicas de grande porte, integrando engenharia pesada, segurança operacional, gestão ambiental, ESG e governança corporativa. Nossa expertise atende governos, concessionárias, indústrias, mineradoras, empresas florestais e grandes empreendimentos de infraestrutura.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Block */}
            <div className="my-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <p className="text-xl md:text-2xl font-semibold text-foreground/90 italic max-w-4xl mx-auto leading-relaxed">
                "Mais do que construir barragens. Construímos segurança hídrica, desenvolvimento econômico e legado para as próximas gerações."
              </p>
              <div className="mt-4 text-xs font-bold text-primary tracking-wider uppercase">
                GREENVERSE | Engenharia que protege recursos hídricos, fortalece infraestruturas e impulsiona o desenvolvimento sustentável.
              </div>
            </div>

            {/* Key Specialties Checklist */}
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm mb-16">
              <h3 className="font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Destaques da Nossa Atuação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 bg-muted/30 p-3 rounded-xl border border-border/40 hover:bg-muted/50 transition-colors">
                    <span className="text-primary font-extrabold text-lg">✓</span>
                    <span className="text-sm font-medium text-foreground/90">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DIVISÃO COMPLETA DE SERVIÇOS EM BARRAGENS */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <Badge className="bg-primary text-white border-none px-4 py-1.5 uppercase font-bold tracking-wider text-xs mb-3">Divisão Completa</Badge>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground uppercase">
                  Divisão Completa de Serviços em Barragens
                </h3>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm md:text-base">
                  Explore as nossas 17 especialidades estruturadas para grandes corporações e governos. Selecione uma categoria para filtrar.
                </p>
              </div>

              {/* Interactive Tabs/Pillars */}
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {pillars.map((p) => (
                  <Button
                    key={p.id}
                    variant={activePillar === p.id ? "default" : "outline"}
                    className={`rounded-full px-5 py-2 h-auto text-xs md:text-sm transition-all font-medium ${
                      activePillar === p.id 
                        ? "bg-primary text-white shadow-md shadow-primary/20" 
                        : "hover:bg-primary/5 hover:text-primary text-muted-foreground border-border/60"
                    }`}
                    onClick={() => setActivePillar(p.id)}
                  >
                    {p.title}
                  </Button>
                ))}
              </div>

              {/* Divisions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {divisions
                  .filter((div) => activePillar === "all" || div.pillar === activePillar)
                  .map((div, index) => (
                    <motion.div
                      key={div.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-card hover:bg-card/90 rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-3xl font-black text-primary/10 tracking-wider">{div.num}</span>
                          <span className="text-[10px] font-bold tracking-widest text-primary/60 bg-primary/5 uppercase px-2.5 py-1 rounded-full border border-primary/10">
                            {div.pillar === "planejamento" ? "Planejamento" : div.pillar === "construcao" ? "Construção" : div.pillar === "manutencao" ? "Recuperação" : "Monitoramento"}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg text-foreground mb-3 tracking-tight border-b border-border pb-3">
                          {div.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                          {div.description}
                        </p>

                        {div.items && (
                          <ul className="space-y-2">
                            {div.items.map((it, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                                <span className="text-primary font-bold mt-0.5">•</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {div.subsections && (
                          <div className="space-y-4">
                            {div.subsections.map((sub, idx) => (
                              <div key={idx} className="border-t border-muted pt-3">
                                <h5 className="text-xs font-bold text-primary mb-1.5 uppercase tracking-wider">{sub.title}</h5>
                                <ul className="space-y-1.5">
                                  {sub.items.map((it, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-2 text-[11px] text-foreground/80">
                                      <span className="text-primary font-bold mt-0.5">•</span>
                                      <span>{it}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Interactive Hubs Section */}
            <div className="mb-16 bg-muted/20 p-8 rounded-3xl border border-border/40">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground uppercase">
                  Hubs de Soluções Integradas
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Soluções completas e customizadas para as demandas mais exigentes do mercado hídrico nacional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializedHubs.map((hub, idx) => {
                  const Icon = hub.icon;
                  return (
                    <div key={idx} className="bg-card p-6 rounded-2xl border border-border/50 flex flex-col justify-between">
                      <div>
                        <div className="bg-primary/5 p-3 rounded-xl w-fit mb-4 border border-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-base text-foreground mb-3">{hub.title}</h4>
                        <ul className="space-y-2">
                          {hub.items.map((item, id) => (
                            <li key={id} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                              <span className="text-primary text-xs font-extrabold mt-0.5">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Escopo Completo de Atuação */}
            <div className="mb-16 bg-primary/5 border border-primary/10 p-8 rounded-3xl">
              <h3 className="font-bold text-2xl text-foreground mb-6 text-center uppercase tracking-tight">
                Escopo Completo de Atuação
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {actionScopes.map((scope, index) => (
                  <span key={index} className="bg-card text-foreground px-4 py-2 rounded-xl text-xs font-semibold border border-border/60 hover:border-primary/30 transition-all shadow-sm">
                    {scope}
                  </span>
                ))}
              </div>
            </div>

            {/* Diferenciais Section */}
            <div className="mb-16 bg-card p-8 rounded-3xl border border-border/50">
              <h3 className="font-bold text-2xl text-foreground text-center mb-2 uppercase tracking-tight">
                Diferenciais que Impressionam Grandes Clientes
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-10 max-w-2xl mx-auto">
                Adotamos metodologias modernas de governança e engenharia que agregam conformidade total e segurança jurídica.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clientDifferentiators.map((diff, index) => (
                  <div key={index} className="bg-muted/30 p-5 rounded-2xl border border-border/40 hover:bg-muted/50 transition-all">
                    <h4 className="font-bold text-sm md:text-base text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary text-base font-bold">✓</span>
                      {diff.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clientes Potenciais Section */}
            <div className="bg-card p-8 rounded-3xl border border-border/50 mb-16">
              <h3 className="font-bold text-2xl text-foreground text-center mb-2 uppercase tracking-tight flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Matriz de Clientes Potenciais e Atendidos
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-8">
                Desenvolvemos soluções integradas de alto padrão para empresas, indústrias, prefeituras, governos e concessionárias do Brasil.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {potentialClients.map((client, index) => (
                  <span key={index} className="bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 transition-colors px-3.5 py-1.5 rounded-full text-xs font-semibold">
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-slate-950 text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight uppercase">Pronto para estruturar sua infraestrutura hídrica?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Nossos engenheiros geotécnicos e consultores regulatórios estão à disposição para projetar, auditar ou executar seu empreendimento com conformidade máxima.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white" onClick={() => navigate('/#contato')}>
                  Solicitar Proposta Comercial
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-transparent hover:bg-white/10 text-white" onClick={() => navigate('/#contato')}>
                  Falar com Engenheiro Responsável
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (serviceId === 'servicos-ambientais-nr13-instalacoes') {
    return (
      <>
        <SEO 
          title="Serviços Ambientais | Licenciamento, Gestão de Resíduos e Saneamento" 
          description="A Greenverse oferece soluções completas em consultoria, gestão e engenharia ambiental, auxiliando empresas, empreendimentos e organizações a atenderem às exigências legais, reduzirem riscos ambientais e desenvolverem suas atividades de forma sustentável e segura."
          keywords="licenciamento ambiental, gestão de resíduos, logística reversa, estudos ambientais, remediação de áreas contaminadas, perícia ambiental, auditoria ambiental, ETE, ETA, tratamento de esgoto"
        />
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Início
          </Button>

          <div className="max-w-5xl mx-auto">
            {/* Custom Header for Serviços Ambientais */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
              <div className="bg-primary/10 p-6 rounded-2xl">
                <service.icon className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">Solução Especializada</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Greenverse Ambiental</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6 leading-relaxed">
                  Licenciamento, Gestão Ambiental, Resíduos, Estudos Técnicos e Remediação Ambiental
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    A Greenverse oferece soluções completas em consultoria, gestão e engenharia ambiental, auxiliando empresas, empreendimentos e organizações a atenderem às exigências legais, reduzirem riscos ambientais e desenvolverem suas atividades de forma sustentável e segura.
                  </p>
                  <p>
                    Atuamos desde o licensing ambiental até a gestão de resíduos, elaboração de estudos técnicos, auditorias ambientais e recuperação de áreas contaminadas, garantindo conformidade com a legislação vigente e excelência técnica em todas as etapas dos projetos.
                  </p>
                </div>
              </div>
            </div>

            {/* Avaliação Técnica Callout */}
            <div className="bg-primary/10 rounded-3xl p-8 border border-primary/20 text-center space-y-4 max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
                <ShieldCheck className="h-6 w-6" />
                Solicite uma Avaliação Técnica
              </h3>
              <p className="text-foreground max-w-2xl mx-auto leading-relaxed">
                A Greenverse oferece atendimento especializado para empresas que buscam regularização ambiental, licenciamento, gestão de resíduos e soluções sustentáveis para seus empreendimentos.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white mt-2" onClick={() => navigate('/#contato')}>
                Agendar Avaliação Técnica
              </Button>
            </div>

            {/* Standard Professional Grid of Sections */}
            <div className="space-y-16">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3 text-foreground">
                  <FileText className="h-5 w-5 text-primary" />
                  Escopo Detalhado do Serviço de Gestão Ambiental
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                  Serviços Ambientais da Greenverse, mantendo o mesmo padrão profissional da página de Engenharia Industrial, NR-13 e Instalações
                </p>
              </div>

              {/* Grid of the 7 main areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. Licenciamento Ambiental */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      Licenciamento Ambiental
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      O licenciamento ambiental é uma etapa fundamental para implantação, ampliação e operação de empreendimentos que utilizam recursos naturais ou possuem potencial de impacto ambiental. A Greenverse conduz todo o processo junto aos órgãos ambientais competentes, proporcionando agilidade, segurança jurídica e acompanhamento técnico especializado.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Licença Ambiental Prévia (LAP)',
                        'Licença Ambiental de Instalação (LAI)',
                        'Licença Ambiental de Operação (LAO)',
                        'Autorização Ambiental (AuA)',
                        'Certidão de Conformidade Ambiental (CCA)',
                        'Declaração de Atividade Não Constante (DANC)',
                        'Acompanhamento de processos ambientais',
                        'Atendimento a exigências técnicas dos órgãos fiscalizadores',
                        'Renovação e regularização de licenças ambientais'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Nossa equipe acompanha cada etapa do processo até a obtenção da autorização necessária para o empreendimento.
                  </p>
                </motion.div>

                {/* 2. Logística Reversa */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      Logística Reversa
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      A logística reversa tornou-se uma exigência estratégica para empresas que buscam atender às legislações ambientais e fortalecer suas práticas de sustentabilidade. A Greenverse desenvolve programas completos para gestão, rastreabilidade e comprovação do retorno adequado de materiais e resíduos pós-consumo.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Geração de créditos de logística reversa',
                        'Planejamento e implementação de sistemas de logística reversa',
                        'Elaboração de procedimentos operacionais',
                        'Assessoria para adequação à Política Nacional de Resíduos Sólidos',
                        'Gestão documental e comprovação de resultados',
                        'Rastreabilidade e controle do fluxo de materiais',
                        'Monitoramento de metas ambientais',
                        'Apoio em auditorias e fiscalizações'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Oferecemos soluções que transformam obrigações legais em oportunidades de fortalecimento da responsabilidade ambiental corporativa.
                  </p>
                </motion.div>

                {/* 3. Programa de Gerenciamento de Resíduos */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      Programa de Gerenciamento de Resíduos
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      A correta gestão de resíduos reduz riscos ambientais, otimiza processos e garante conformidade legal para empresas de diversos segmentos. Desenvolvemos programas personalizados para identificação, segregação, armazenamento, transporte e destinação adequada dos resíduos gerados.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
                        'Plano de Gerenciamento de Resíduos da Construção Civil (PGRCC)',
                        'Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS)',
                        'Diagnóstico e classificação de resíduos',
                        'Inventário de resíduos sólidos',
                        'Mapeamento de fontes geradoras',
                        'Orientação para segregação e acondicionamento',
                        'Definição de rotas de destinação ambientalmente adequada',
                        'Treinamento de equipes operacionais'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Promovemos uma gestão eficiente dos resíduos, alinhada às melhores práticas ambientais e às exigências legais.
                  </p>
                </motion.div>

                {/* 4. Estudos Ambientais */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        4
                      </span>
                      Estudos Ambientais
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Os estudos ambientais fornecem suporte técnico para processos de licenciamento, regularização e tomada de decisão em empreendimentos públicos e privados. A Greenverse desenvolve estudos completos com base em critérios científicos e normativos, garantindo informações confiáveis para análise ambiental.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Relatório Ambiental Prévio (RAP)',
                        'Estudo Ambiental Simplificado (EAS)',
                        'Estudo de Conformidade Ambiental (ECA)',
                        'Caracterização de corpos hídricos',
                        'Estudos de modelagem matemática de autodepuração',
                        'Avaliação técnica de poços',
                        'Diagnósticos ambientais',
                        'Levantamentos de campo',
                        'Relatórios técnicos especializados'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Nossos estudos são elaborados por profissionais qualificados, atendendo às exigências dos órgãos ambientais e dos empreendedores.
                  </p>
                </motion.div>

                {/* 5. Remediação de Áreas Contaminadas */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        5
                      </span>
                      Remediação de Áreas Contaminadas
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Áreas impactadas por atividades industriais, comerciais ou de armazenamento de produtos químicos exigem ações técnicas específicas para recuperação ambiental. A Greenverse realiza investigações ambientais e desenvolve soluções eficientes para remediação de solos e águas subterrâneas contaminadas.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Investigação ambiental preliminar e confirmatória',
                        'Diagnóstico de áreas contaminadas',
                        'Amostragem de solo e água subterrânea',
                        'Identificação e caracterização de contaminantes',
                        'Avaliação de risco ambiental',
                        'Biorremediação de contaminantes orgânicos',
                        'Biorremediação in situ e ex situ',
                        'Monitoramento ambiental pós-remediação',
                        'Avaliação de eficiência dos processos aplicados',
                        'Relatórios técnicos de conformidade',
                        'Encerramento de passivos ambientais'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Nosso objetivo é recuperar áreas impactadas de forma segura, economicamente viável e ambientalmente responsável.
                  </p>
                </motion.div>

                {/* 6. Perícia e Auditoria Ambiental */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        6
                      </span>
                      Perícia e Auditoria Ambiental
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      A Greenverse oferece serviços especializados para avaliação técnica, investigação de passivos ambientais e suporte a processos judiciais e extrajudiciais. Atuamos com independência técnica, rigor metodológico e foco na geração de informações confiáveis para tomada de decisão.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Auditoria ambiental de conformidade legal e regulatória',
                        'Perícia ambiental judicial',
                        'Perícia ambiental extrajudicial',
                        'Assistência técnica em processos judiciais',
                        'Elaboração de laudos periciais',
                        'Due diligence ambiental para aquisição de imóveis e empresas',
                        'Avaliação de passivos ambientais',
                        'Avaliação de riscos ambientais',
                        'Investigação de causas e responsabilidades ambientais',
                        'Pareceres técnicos especializados'
                      ].map((item, id) => (
                        <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Fornecemos suporte técnico estratégico para empresas, investidores, instituições financeiras e escritórios jurídicos.
                  </p>
                </motion.div>

                {/* 7. Relatórios Técnicos Ambientais */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md md:col-span-2 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold">
                        7
                      </span>
                      Relatórios Técnicos Ambientais
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
                      Os relatórios técnicos são instrumentos essenciais para monitoramento ambiental, avaliação de desempenho e atendimento às exigências legais. A Greenverse produz relatórios claros, objetivos e tecnicamente fundamentados para auxiliar gestores e órgãos reguladores.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Serviços Incluídos:</div>
                        <ul className="space-y-2 mb-6">
                          {[
                            'Relatório técnico de avaliação da qualidade de efluentes',
                            'Relatório técnico de avaliação da qualidade de água bruta',
                            'Interpretação de resultados laboratoriais',
                            'Análise de parâmetros ambientais',
                            'Avaliação de conformidade normativa'
                          ].map((item, id) => (
                            <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3 sm:mt-0 mt-2">&nbsp;</div>
                        <ul className="space-y-2 mb-6">
                          {[
                            'Diagnósticos ambientais específicos',
                            'Propostas de ações corretivas',
                            'Recomendações de adequação ambiental',
                            'Relatórios para processos de licenciamento e fiscalização'
                          ].map((item, id) => (
                            <li key={id} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">
                    Todos os documentos são elaborados com base em critérios técnicos, legislações vigentes e padrões reconhecidos de qualidade ambiental.
                  </p>
                </motion.div>
              </div>

              {/* 8. Large Featured Section: Monitoramento e Operação de Estações de Tratamento */}
              <div className="border border-primary/20 bg-primary/5 rounded-3xl p-8 md:p-12 space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <Badge className="bg-primary/20 text-primary border-none text-xs hover:bg-primary/30">Destaque Saneamento</Badge>
                  <h3 className="text-3xl font-bold tracking-tight text-foreground">
                    Monitoramento e Operação de Estações de Tratamento
                  </h3>
                  <h4 className="text-lg font-medium text-primary">
                    Soluções Completas em Saneamento Ambiental
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Oferecemos serviços especializados de operação, monitoramento, manutenção e gestão de Estações de Tratamento de Esgoto (ETE), Estações de Tratamento de Água (ETA) e sistemas de tratamento de efluentes industriais, garantindo eficiência operacional, conformidade ambiental e segurança para nossos clientes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Nossa equipe é formada por profissionais qualificados e experientes, preparados para atender condomínios, loteamentos, indústrias, empreendimentos comerciais, hotéis, hospitais, agroindústrias e órgãos públicos.
                  </p>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                  {/* Sub item 1 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-primary" />
                        Operação de ETEs
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Realizamos a operação completa de sistemas de tratamento sanitário, assegurando o funcionamento adequado das unidades e o atendimento às exigências ambientais.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Operação diária de ETEs.',
                          'Controle e monitoramento de processos biológicos, físicos e químicos.',
                          'Inspeções operacionais periódicas.',
                          'Controle de vazão e eficiência do tratamento.',
                          'Operação de sistemas aeróbios e anaeróbios.',
                          'Controle de recirculação e aeração.',
                          'Gestão de lodo gerado no processo.',
                          'Monitoramento de parâmetros operacionais.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 2 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Factory className="h-4 w-4 text-primary" />
                        Operação de ETEIs
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Atuamos na gestão e operação de sistemas industriais, adequando os processos às características específicas de cada atividade produtiva.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Controle de processos físico-químicos.',
                          'Operação de sistemas biológicos industriais.',
                          'Dosagem de produtos químicos.',
                          'Ajustes operacionais.',
                          'Controle da qualidade do efluente tratado.',
                          'Otimização de desempenho e redução de custos operacionais.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 3 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Waves className="h-4 w-4 text-primary" />
                        Operação de ETAs
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Executamos a operação e monitoramento de sistemas de tratamento de água para abastecimento e uso industrial.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Controle de coagulação, floculação, decantação e filtração.',
                          'Monitoramento da qualidade da água.',
                          'Controle de dosagem química.',
                          'Inspeção de equipamentos e reservatórios.',
                          'Atendimento às normas de potabilidade.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 4 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        Monitoramento e Qualidade
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Acompanhamos continuamente o desempenho dos sistemas de tratamento para garantir eficiência operacional e conformidade legal.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'pH.',
                          'DBO.',
                          'DQO.',
                          'Sólidos Suspensos.',
                          'Óleos e Graxas.',
                          'Oxigênio Dissolvido.',
                          'Vazão.',
                          'Turbidez.',
                          'Demais parâmetros exigidos pelos órgãos ambientais.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 5 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <FlaskConical className="h-4 w-4 text-primary" />
                        Amostras e Laboratório
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Coleta qualificada e análise precisa para a total segurança nos processos de descarte.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Coleta de amostras de água e efluentes.',
                          'Encaminhamento para laboratórios credenciados.',
                          'Interpretação de resultados.',
                          'Emissão de pareceres técnicos.',
                          'Acompanhamento da eficiência dos processos.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 6 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <FileSpreadsheet className="h-4 w-4 text-primary" />
                        Relatórios e Conformidade
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Controle rígido e transparência técnica total para prestação de contas perante auditorias.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Relatórios mensais de operação.',
                          'Relatórios de monitoramento ambiental.',
                          'Controle de indicadores de desempenho.',
                          'Registro de ocorrências operacionais.',
                          'Apoio em auditorias e fiscalizações.',
                          'Atendimento às condicionantes ambientais.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 7 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Licenciamento e Regularização
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Segurança jurídica permanente para sua estação de tratamento.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Apoio em processos de licenciamento.',
                          'Renovação de licenças ambientais.',
                          'Atendimento a exigências dos órgãos ambientais.',
                          'Elaboração de documentos técnicos.',
                          'Acompanhamento de condicionantes.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 8 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-primary" />
                        Manutenção Operacional
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Conservação de ativos eletromecânicos essenciais para o Saneamento.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Inspeção de bombas e motores.',
                          'Verificação de sopradores e compressores.',
                          'Manutenção de painéis elétricos.',
                          'Limpeza de equipamentos.',
                          'Identificação preventiva de falhas.',
                          'Coordenação de manutenções corretivas.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 9 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-primary" />
                        Automação e Telemetria
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Inteligência de ponta e controle em tempo real da performance hídrica.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Monitoramento remoto.',
                          'Supervisão operacional em tempo real.',
                          'Controle de alarmes.',
                          'Telemetria de equipamentos.',
                          'Relatórios automatizados.',
                          'Gestão digital de indicadores.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 10 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Construction className="h-4 w-4 text-primary" />
                        Construção e Ampliação
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Implantação física, redimensionamento hídrico e acréscimo de eficiência.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Construção de novas estações.',
                          'Reformas e adequações.',
                          'Ampliação de capacidade.',
                          'Retrofit de sistemas existentes.',
                          'Instalação de equipamentos.',
                          'Comissionamento e partida assistida.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 11 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        Consultoria e Engenharia
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Auditorias profundas para diminuição contínua de custos e otimização.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Diagnósticos operacionais.',
                          'Auditorias ambientais.',
                          'Estudos de viabilidade.',
                          'Otimização de processos.',
                          'Redução de custos operacionais.',
                          'Projetos de reúso de água.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sub item 12 */}
                  <div className="bg-card p-6 rounded-xl border border-border/50 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                        Suporte de Emergências
                      </h5>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Equipes prontas para contenção de acidentes ecológicos ou hídricos.
                      </p>
                      <ul className="space-y-1.5">
                        {[
                          'Falhas operacionais.',
                          'Extravasamentos.',
                          'Não conformidades ambientais.',
                          'Quebras de equipamentos.',
                          'Situações emergenciais de saneamento.'
                        ].map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segmentos Atendidos Section */}
            <div className="mt-16 bg-card p-8 rounded-3xl border border-border/50">
              <h4 className="font-bold text-2xl mb-6 text-foreground text-center flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Segmentos Atendidos
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Condomínios residenciais.',
                  'Loteamentos.',
                  'Indústrias.',
                  'Agroindústrias.',
                  'Frigoríficos.',
                  'Hotéis e pousadas.',
                  'Hospitais e clínicas.',
                  'Centros comerciais.',
                  'Shoppings.',
                  'Empresas de logística.',
                  'Órgãos públicos.',
                  'Estações municipais de tratamento.'
                ].map((item, index) => (
                  <div key={index} className="bg-primary/5 p-3 rounded-xl border border-primary/10 text-center text-xs md:text-sm font-medium hover:bg-primary/10 transition-colors">
                    {item.replace('.', '')}
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais Section */}
            <div className="mt-12 bg-card p-8 rounded-3xl border border-border/50">
              <h4 className="font-bold text-2xl mb-6 text-foreground text-center flex items-center justify-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Nossos Diferenciais
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Equipe técnica especializada.',
                  'Atendimento personalizado.',
                  'Conformidade com a legislação ambiental.',
                  'Relatórios técnicos completos.',
                  'Suporte operacional e ambiental.',
                  'Atendimento emergencial.',
                  'Foco em eficiência e redução de custos.',
                  'Soluções sustentáveis e inovadoras.',
                  'Compromisso com qualidade, segurança e responsabilidade ambiental.'
                ].map((item, index) => (
                  <div key={index} className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex items-center gap-2 text-xs md:text-sm text-foreground/90 font-medium">
                    <span className="text-primary text-lg font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compromisso com a Sustentabilidade */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center space-y-4 max-w-4xl mx-auto mt-16 shadow-inner">
              <h4 className="font-bold text-2xl text-foreground flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-primary animate-pulse" />
                Compromisso com a Sustentabilidade
              </h4>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                Trabalhamos para garantir que os sistemas de tratamento operem com máxima eficiência, reduzindo impactos ambientais, preservando os recursos hídricos e promovendo o desenvolvimento sustentável.
              </p>
              <p className="text-primary font-semibold text-sm md:text-base">
                Nossa missão é oferecer soluções completas em saneamento ambiental, assegurando tranquilidade, segurança operacional e conformidade legal para nossos clientes.
              </p>
            </div>

            {/* Institutional conclusion */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center space-y-4 max-w-4xl mx-auto mt-8">
              <h4 className="font-bold text-xl text-primary">Greenverse Ambiental</h4>
              <p className="text-muted-foreground text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
                A Greenverse atua como parceira estratégica de empresas, indústrias, construtoras, empreendedores rurais, instituições públicas e organizações privadas, oferecendo soluções ambientais completas com foco em conformidade legal, sustentabilidade e segurança operacional. Da regularização ambiental à gestão de resíduos, dos estudos técnicos à recuperação de áreas contaminadas, entregamos conhecimento, responsabilidade e resultados para o desenvolvimento sustentável dos nossos clientes.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-foreground text-background rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">Pronto para regularizar sua operação?</h3>
              <p className="text-background/70 mb-8 max-w-xl mx-auto">Converse com nossos especialistas de meio ambiente e engenharia hídrica para estruturar seu plano de atendimento.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white" onClick={() => navigate('/#contato')}>
                  Solicitar Proposta Agora
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-transparent hover:bg-white/10 text-white">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <SEO 
        title={`${service.title} | Soluções Especializadas`} 
        description={service.description}
      />
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para Início
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="bg-primary/10 p-6 rounded-2xl">
              <service.icon className="h-12 w-12 text-primary" />
            </div>
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">Solução Especializada</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{service.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>

          {service.details ? (
            <div className="space-y-12">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  Escopo Detalhado do Serviço
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                  Lista completa de especificações técnicas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {service.details.map((section: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all shadow-sm hover:shadow-md"
                  >
                    <h4 className="font-bold text-lg text-primary flex items-center gap-3 border-b border-primary/10 pb-4 mb-4">
                      <span className="flex-shrink-0 bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </span>
                      {section.category}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 bg-foreground text-background rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-6">Precisa de um orçamento específico?</h3>
                <p className="text-background/70 mb-8 max-w-xl mx-auto">Nossos engenheiros e consultores estão prontos para analisar seu projeto e entregar uma proposta personalizada sob medida.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white" onClick={() => navigate('/#contato')}>
                    Solicitar Proposta Agora
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-transparent hover:bg-white/10 text-white">
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-muted/50 rounded-3xl p-12 text-center border-2 border-dashed border-border">
              <p className="text-muted-foreground">Conteúdo detalhado em desenvolvimento para este serviço.</p>
              <Button variant="link" className="mt-4 text-primary" onClick={() => navigate('/')}>Consultar nossa equipe</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/area-cliente" element={<ClientAreaPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
