import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Language, content, type Content } from '../data';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'zh-TW' || saved === 'en') ? saved : 'zh-TW';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh-TW' ? 'en' : 'zh-TW'));
  };

  const value = {
    lang,
    toggleLanguage,
    t: content[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
