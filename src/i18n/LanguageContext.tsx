import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, TranslationDictionary, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'greenverse_language_preference';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (saved && (saved === 'pt' || saved === 'es' || saved === 'en')) {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
