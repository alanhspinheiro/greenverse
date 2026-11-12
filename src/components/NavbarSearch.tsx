import * as React from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, X, ArrowUpRight, Sparkles, ChevronRight, 
  Layers, CornerDownLeft, Command
} from 'lucide-react';
import { SERVICES } from '../constants';
import { getAreaForService, getTagsForService } from './SolutionsSection';

interface NavbarSearchProps {
  isDark?: boolean;
  onSelect?: () => void;
  variant?: 'desktop' | 'mobile';
}

export const NavbarSearch: React.FC<NavbarSearchProps> = ({ 
  isDark = false, 
  onSelect,
  variant = 'desktop' 
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Curated featured services when query is empty
  const featuredServices = useMemo(() => {
    const featuredIds = [
      'engenharia-industrial',
      'licenciamento',
      'facilities',
      'seguranca',
      'tecnologia-da-informacao',
      'pmoc-climatizacao'
    ];
    return SERVICES.filter((s) => featuredIds.includes(s.id));
  }, []);

  // Filtered services matching the query
  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return featuredServices;

    return SERVICES.filter((service) => {
      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = service.description.toLowerCase().includes(q);
      const tags = getTagsForService(service.id);
      const matchTags = tags.some((t) => t.toLowerCase().includes(q));
      const matchDetails = service.details?.some((d: any) =>
        d.category?.toLowerCase().includes(q) ||
        d.items?.some((it: string) => it.toLowerCase().includes(q))
      );
      const area = getAreaForService(service.id);
      const matchArea = area.title.toLowerCase().includes(q) || area.shortTitle.toLowerCase().includes(q);

      return matchTitle || matchDesc || matchTags || matchDetails || matchArea;
    }).slice(0, 6);
  }, [query, featuredServices]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Global keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle service selection
  const handleSelectService = (serviceId: string) => {
    setIsOpen(false);
    setQuery('');
    navigate(`/servicos/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSelect?.();
  };

  // Keyboard navigation within results
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(searchResults.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + Math.max(searchResults.length, 1)) % Math.max(searchResults.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length > 0 && searchResults[selectedIndex]) {
        handleSelectService(searchResults[selectedIndex].id);
      } else {
        handleGoToAllServices();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleGoToAllServices = () => {
    setIsOpen(false);
    setQuery('');
    if (location.pathname !== '/') {
      navigate('/#servicos');
    } else {
      const el = document.getElementById('servicos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onSelect?.();
  };

  // Mobile full-width drawer version
  if (variant === 'mobile') {
    return (
      <div ref={containerRef} className="w-full space-y-2">
        <div className="relative flex items-center bg-muted/60 rounded-xl border border-border/80 focus-within:border-primary focus-within:bg-card focus-within:ring-2 focus-within:ring-primary/10 transition-all p-1">
          <Search className="h-4 w-4 ml-2.5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Buscar serviços (ex: NR-13, ESG, TI)..."
            className="w-full bg-transparent px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 mr-1 text-muted-foreground hover:text-foreground rounded-lg"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Mobile Live Results Accordion */}
        {isOpen && (
          <div className="bg-card border border-border/80 rounded-xl overflow-hidden shadow-lg max-h-72 overflow-y-auto divide-y divide-border/50">
            <div className="px-3 py-1.5 bg-muted/50 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
              <span>{query ? `Resultados (${searchResults.length})` : 'Sugestões do Catálogo'}</span>
              <span className="text-[10px] lowercase text-primary font-sans">{SERVICES.length} total</span>
            </div>

            {searchResults.length > 0 ? (
              searchResults.map((service) => {
                const area = getAreaForService(service.id);
                const Icon = service.icon;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleSelectService(service.id)}
                    className="w-full p-2.5 text-left hover:bg-muted/60 active:bg-muted transition-colors flex items-center justify-between gap-2.5 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${area.colorClasses.iconBg}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-foreground leading-tight truncate group-hover:text-primary transition-colors">
                          {service.title}
                        </p>
                        <p className="text-[10px] text-muted-foreground truncate">
                          {area.shortTitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 group-hover:text-primary transition-transform" />
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-muted-foreground">
                <p>Nenhum serviço encontrado para "{query}".</p>
                <button
                  type="button"
                  onClick={handleGoToAllServices}
                  className="mt-2 text-primary text-xs font-bold hover:underline"
                >
                  Ver todos os 30 serviços
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Desktop Sleek Dropdown Bar
  return (
    <div ref={containerRef} className="relative">
      <div 
        className={`flex items-center rounded-xl transition-all duration-200 border ${
          isDark
            ? 'bg-white/10 hover:bg-white/15 text-white border-white/20 focus-within:border-emerald-400 focus-within:bg-white/[0.14] focus-within:ring-2 focus-within:ring-emerald-400/20'
            : 'bg-muted/70 hover:bg-muted text-foreground border-border/80 focus-within:border-primary focus-within:bg-background focus-within:ring-2 focus-within:ring-primary/10'
        } ${isOpen ? 'w-64 xl:w-72 shadow-sm' : 'w-44 xl:w-56'} p-1`}
      >
        <Search className={`h-3.5 w-3.5 ml-2 mr-1.5 shrink-0 ${isDark ? 'text-white/60' : 'text-muted-foreground'}`} />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleInputKeyDown}
          placeholder="Buscar serviços..."
          className={`w-full bg-transparent px-1 py-1 text-xs focus:outline-none ${
            isDark ? 'text-white placeholder:text-white/50' : 'text-foreground placeholder:text-muted-foreground/70'
          }`}
        />

        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className={`p-1 mr-1 rounded-md transition-colors ${
              isDark ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
            title="Limpar busca"
          >
            <X className="h-3 w-3" />
          </button>
        ) : (
          <div className="hidden xl:flex items-center mr-1.5 pointer-events-none">
            <kbd className={`text-[9px] font-mono font-semibold px-1 py-0.5 rounded border ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white/60' 
                : 'bg-background border-border text-muted-foreground'
            }`}>
              ⌘K
            </kbd>
          </div>
        )}
      </div>

      {/* Floating Dynamic Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-card rounded-2xl border border-border shadow-2xl overflow-hidden z-50 text-foreground animate-in fade-in-0 zoom-in-95 duration-150">
          {/* Header */}
          <div className="px-3.5 py-2.5 border-b border-border/80 bg-muted/40 flex items-center justify-between text-xs">
            <span className="font-semibold text-muted-foreground text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-primary" />
              {query ? `Resultados para "${query}"` : 'Serviços em Destaque'}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              {searchResults.length} de {SERVICES.length}
            </span>
          </div>

          {/* List of matching services */}
          <div className="max-h-80 overflow-y-auto divide-y divide-border/40 p-1.5 space-y-0.5">
            {searchResults.length > 0 ? (
              searchResults.map((service, idx) => {
                const area = getAreaForService(service.id);
                const Icon = service.icon;
                const isItemActive = idx === selectedIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleSelectService(service.id)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start justify-between gap-3 group ${
                      isItemActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-muted/70 text-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isItemActive ? 'bg-primary text-primary-foreground' : area.colorClasses.iconBg
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border ${area.colorClasses.badge}`}>
                            {area.shortTitle.split(' & ')[0]}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold leading-snug truncate group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground line-clamp-1 font-normal mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 mt-1">
                      {isItemActive && (
                        <CornerDownLeft className="h-3 w-3 text-primary hidden sm:inline" />
                      )}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-6 text-center text-xs text-muted-foreground space-y-2">
                <Layers className="h-8 w-8 mx-auto text-muted-foreground/50 mb-1" />
                <p className="font-semibold text-foreground">
                  Nenhum serviço correspondente
                </p>
                <p className="text-[11px] leading-relaxed">
                  Tente buscar por normas como <strong>NR-13</strong>, ou áreas como <strong>ESG, Facilities, Segurança ou TI</strong>.
                </p>
              </div>
            )}
          </div>

          {/* Footer with Catalog Redirect */}
          <div className="p-2 border-t border-border/80 bg-muted/30 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleGoToAllServices}
              className="w-full py-1.5 px-3 rounded-lg text-primary hover:bg-primary/10 text-center font-bold text-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>Explorar catálogo completo de 30 serviços</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
