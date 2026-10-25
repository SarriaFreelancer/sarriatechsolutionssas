"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";
import { Language } from "@/types";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.es;
  selectedService: string;
  setSelectedService: (service: string) => void;
  scrollToContactWithService: (serviceName: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sarriatech_lang") as Language;
      if (saved && (saved === "es" || saved === "en")) {
        setLangState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("sarriatech_lang", newLang);
    } catch {
      // ignore
    }
  };

  const scrollToContactWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById("contacto");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const t = translations[lang] || translations.es;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        selectedService,
        setSelectedService,
        scrollToContactWithService,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
