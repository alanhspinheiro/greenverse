import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';
import { FlagBrazil, FlagSpain, FlagEngland } from './Flags';
import { ChevronDown, Check } from 'lucide-react';

interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flagName: string;
  FlagComponent: React.FC<{ className?: string }>;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'pt',
    label: 'Português (Brasil)',
    shortLabel: 'PT',
    flagName: 'Bandeira do Brasil',
    FlagComponent: FlagBrazil,
  },
  {
    code: 'es',
    label: 'Español (España)',
    shortLabel: 'ES',
    flagName: 'Bandeira da Espanha',
    FlagComponent: FlagSpain,
  },
  {
    code: 'en',
    label: 'English (UK / Inglaterra)',
    shortLabel: 'EN',
    flagName: 'Bandeira da Inglaterra',
    FlagComponent: FlagEngland,
  },
];

interface LanguageSelectorProps {
  variant?: 'dropdown' | 'segmented' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  variant = 'dropdown',
  className = '' 
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];
  const CurrentFlag = currentOption.FlagComponent;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (variant === 'segmented') {
    return (
      <div 
        className={`inline-flex items-center bg-muted/60 p-1 rounded-xl border border-border/50 shadow-inner ${className}`}
        role="group"
        aria-label="Seleção de Idioma"
      >
        {LANGUAGE_OPTIONS.map((opt) => {
          const Flag = opt.FlagComponent;
          const isSelected = language === opt.code;
          return (
            <button
              key={opt.code}
              onClick={() => setLanguage(opt.code)}
              title={`${opt.flagName} - ${opt.label}`}
              aria-label={`${opt.flagName} - ${opt.label}`}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isSelected 
                  ? 'bg-background text-foreground shadow-sm scale-105 ring-1 ring-border' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              }`}
            >
              <Flag className="w-5 h-3.5 shadow-sm" />
              <span>{opt.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 pt-4 border-t border-border/60 ${className}`}>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
          Idioma / Language / Idioma
        </p>
        <div className="grid grid-cols-1 gap-2">
          {LANGUAGE_OPTIONS.map((opt) => {
            const Flag = opt.FlagComponent;
            const isSelected = language === opt.code;
            return (
              <button
                key={opt.code}
                onClick={() => setLanguage(opt.code)}
                className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isSelected 
                    ? 'bg-primary/10 text-primary border border-primary/30 font-bold' 
                    : 'bg-card hover:bg-accent border border-border/50 text-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Flag className="w-6 h-4 shadow-sm" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Default: Interactive Dropdown Button beside main nav
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/80 hover:bg-background shadow-sm hover:border-primary/50 transition-all text-xs md:text-sm font-semibold text-foreground"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Mudar idioma do site"
        title="Mudar idioma do site"
      >
        <CurrentFlag className="w-5 h-3.5 shadow-sm" />
        <span>{currentOption.shortLabel}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 rounded-2xl shadow-xl bg-popover border border-border/80 p-1.5 z-50 animate-in fade-in-50 zoom-in-95"
          role="menu"
        >
          <div className="px-2.5 py-1.5 text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
            Selecione o Idioma
          </div>
          {LANGUAGE_OPTIONS.map((opt) => {
            const Flag = opt.FlagComponent;
            const isSelected = language === opt.code;
            return (
              <button
                key={opt.code}
                onClick={() => {
                  setLanguage(opt.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2.5">
                  <Flag className="w-5 h-3.5" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
