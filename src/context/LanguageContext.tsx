import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  isRtl: boolean;
  t: (enText: string, arText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    const isRtl = lang === "ar";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const isRtl = lang === "ar";

  const t = (enText: string, arText: string) => {
    return lang === "ar" ? arText : enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
