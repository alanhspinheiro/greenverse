import { ShieldCheck, Leaf, Recycle, Droplets, FileText, BarChart3, Factory, Tractor, Building2, Sparkles, Bug, Sprout, Truck, Shield } from 'lucide-react';

export const SERVICES = [
  {
    id: 'licenciamento',
    title: 'Licenciamento Ambiental',
    description: 'Assessoria completa para obtenção de LP, LI e LO, garantindo conformidade com órgãos ambientais.',
    icon: ShieldCheck,
  },
  {
    id: 'residuos',
    title: 'Gestão de Resíduos',
    description: 'Planos de Gerenciamento de Resíduos Sólidos (PGRS) e soluções para logística reversa.',
    icon: Recycle,
  },
  {
    id: 'outorgas',
    title: 'Outorgas de Água',
    description: 'Regularização do uso de recursos hídricos para captação superficial e subterrânea.',
    icon: Droplets,
  },
  {
    id: 'projetos',
    title: 'EIA/RIMA e Projetos',
    description: 'Estudos de Impacto Ambiental e Relatórios de Impacto ao Meio Ambiente com rigor técnico.',
    icon: FileText,
  },
  {
    id: 'limpeza',
    title: 'Limpeza e Conservação',
    description: 'Serviços especializados de manutenção e conservação de ambientes corporativos e industriais.',
    icon: Sparkles,
  },
  {
    id: 'pragas',
    title: 'Controle de Pragas',
    description: 'Monitoramento e controle integrado de pragas com foco em segurança e saúde ambiental.',
    icon: Bug,
  },
  {
    id: 'gestao-prad',
    title: 'Gestão Ambiental e PRAD',
    description: 'Programas de Recuperação de Áreas Degradadas e monitoramento ambiental contínuo.',
    icon: Sprout,
  },
  {
    id: 'logistica',
    title: 'Logística e Transporte',
    description: 'Soluções logísticas integradas e transporte seguro com foco em eficiência operacional.',
    icon: Truck,
  },
  {
    id: 'seguranca',
    title: 'Segurança e Vigilância',
    description: 'Proteção patrimonial e vigilância especializada para garantir a integridade do seu negócio.',
    icon: Shield,
  },
];

export const SECTORS = [
  {
    id: 'industria',
    title: 'Indústria',
    description: 'Soluções para o setor fabril, focadas em continuidade operacional e redução de riscos.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'agro',
    title: 'Agronegócio',
    description: 'Regularização de propriedades rurais, CAR e gestão sustentável da produção.',
    icon: Tractor,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'imobiliario',
    title: 'Imobiliário',
    description: 'Licenciamento para loteamentos e construções civis com agilidade e segurança.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Equipe Multidisciplinar',
    description: 'Engenheiros, biólogos e advogados trabalhando em sinergia.',
  },
  {
    title: 'Tecnologia GIS',
    description: 'Mapeamento de precisão e análise de dados geoespaciais.',
  },
  {
    title: 'Agilidade Regulatória',
    description: 'Experiência consolidada junto aos principais órgãos públicos.',
  },
  {
    title: 'Visão ESG',
    description: 'Alinhamento com as melhores práticas de governança e sustentabilidade.',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Novas Resoluções do CONAMA para 2026',
    excerpt: 'Entenda como as mudanças na legislação podem impactar o licenciamento da sua indústria.',
    date: '05 Abr, 2026',
    category: 'Legislação',
  },
  {
    id: 2,
    title: 'Guia Prático: Gestão de Resíduos Perigosos',
    excerpt: 'Passo a passo para a correta destinação e armazenamento de resíduos classe I.',
    date: '02 Abr, 2026',
    category: 'Gestão',
  },
  {
    id: 3,
    title: 'A Importância da Outorga no Agronegócio',
    excerpt: 'Como garantir a segurança hídrica da sua produção em períodos de escassez.',
    date: '28 Mar, 2026',
    category: 'Recursos Hídricos',
  },
];

export const BRAZIL_STATES = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];
