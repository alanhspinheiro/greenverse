import { useState, useEffect } from 'react';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, ArrowRight, 
  ChevronRight, Download, Lock, Bell, MessageCircle, CheckCircle2,
  Leaf, BarChart3, FileText, Globe, Users, Target, Briefcase, ArrowLeft, ShieldCheck
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
    { name: 'Quem somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Setores', href: '#setores' },
    { name: 'Diferenciais', href: '#diferenciais' },
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
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Diagnóstico Gratuito
          </Button>
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
                <Button className="w-full">Diagnóstico Gratuito</Button>
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
    href="https://wa.me/5500000000000" 
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
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (48) 99930-3323</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> contato@greenverse.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Florianópolis, SC</li>
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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-center"
            >
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Um ecossistema. Múltiplos serviços. Gestão Inteligente. <span className="text-primary">Operações Integradas</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                O Ecossistema Greenverse integra soluções estratégicas para empresas que não querem apenas operar — querem crescer com inteligência, conformidade e excelência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-10 text-lg gap-2">
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg">
                  Conhecer Nossos Serviços
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1">
                Sobre a Greenverse
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Um ecossistema completo para <span className="text-primary">alta performance empresarial</span>.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Gerenciar múltiplos fornecedores, garantir conformidade regulatória, reduzir impactos ambientais e ainda manter alta performance operacional não é simples — e você sabe disso.
                </p>
                <p className="font-semibold text-foreground">
                  Foi para resolver essa complexidade que nasceu o Ecossistema Greenverse.
                </p>
                <p>
                  Somos uma plataforma empresarial de soluções integradas que centraliza, otimiza e potencializa todas as áreas críticas da sua operação.
                </p>
                <p>
                  Mais do que prestar serviços, atuamos como um parceiro estratégico, unindo estrutura, inteligência e alta capacidade de execução para transformar desafios empresariais em resultados concretos.
                </p>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Compromisso com a Excelência</p>
                  <p className="text-base">
                    Com atuação orientada por <strong>ESG, Compliance, Governança Corporativa e Inovação Sustentável</strong>, entregamos eficiência, conformidade e performance em um único ecossistema.
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
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Escritório Greenverse" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
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
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[#A2B568]/10">
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
      <section id="diferenciais" className="py-24 bg-[#114643] text-white">
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
      <section className="py-24 bg-[#697431]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:row">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Pronto para regularizar seu negócio?</h2>
                  <p className="opacity-80 mb-8">Preencha o formulário e receba um diagnóstico técnico preliminar sem custos.</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-2 rounded-lg"><Phone className="h-5 w-5" /></div>
                      <span>(48) 99930-3323</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-2 rounded-lg"><Mail className="h-5 w-5" /></div>
                      <span>contato@greenverse.com.br</span>
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

  if (!service) {
    return (
      <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Serviço não encontrado</h2>
        <Button onClick={() => navigate('/')}>Voltar para Início</Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
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
