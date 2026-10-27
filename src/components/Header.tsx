"use client";

import React, { useState, useEffect } from "react";
import SarriaTechLogo from "./SarriaTechLogo";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Globe, MessageSquare, Sun, Moon } from "lucide-react";

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ["inicio", "productos", "servicios", "automatizacion", "metodologia", "nosotros", "contacto"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      href: "#inicio", 
      label: t.nav.home, 
      id: "inicio",
      seoTitle: "SarriaTech Solutions - Desarrollo de Software, Automatización e Inteligencia Artificial"
    },
    { 
      href: "#productos", 
      label: t.nav.products, 
      id: "productos",
      seoTitle: "Plataformas Propias: GNS ERP Inventarios, Nexus Software, VCA Villa Rica"
    },
    { 
      href: "#servicios", 
      label: t.nav.services, 
      id: "servicios",
      seoTitle: "Servicios de Desarrollo de Software a Medida, Web, Analítica y APIs en Colombia"
    },
    { 
      href: "#automatizacion", 
      label: t.nav.automation, 
      id: "automatizacion",
      seoTitle: "Automatización de Procesos RPA y Agentes de Inteligencia Artificial para WhatsApp"
    },
    { 
      href: "#metodologia", 
      label: t.nav.methodology, 
      id: "metodologia",
      seoTitle: "Metodología de Ingeniería de Software Ágil y Calidad Tecnológica"
    },
    { 
      href: "#nosotros", 
      label: t.nav.about, 
      id: "nosotros",
      seoTitle: "Sobre SarriaTech Solutions S.A.S. - Empresa de Tecnología y Software en Colombia"
    },
    { 
      href: "#contacto", 
      label: t.nav.contact, 
      id: "contacto",
      seoTitle: "Contactar a SarriaTech Solutions - Cotizar Proyectos de Software e Inteligencia Artificial"
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#03040B]/85 backdrop-blur-lg border-b border-[#00E5FF]/20 shadow-[0_10px_30px_rgba(3,4,11,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <SarriaTechLogo size="md" showTagline={false} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.seoTitle}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-[#00E5FF] font-semibold"
                      : "text-[#A8B3D1] hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#FF28D7] rounded-full shadow-[0_0_8px_#00E5FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle, Language Selector & CTA */}
          <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
            {/* Theme Toggle (Dark / Light) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#0B1025] text-[#00E5FF] border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-200"
              title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
              aria-label="Alternar tema de color"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#FFC247] hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-[#00E5FF] hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Language toggle */}
            <div className="flex items-center bg-[#0B1025] p-1 rounded-lg border border-[#00E5FF]/20">
              <Globe className="w-3.5 h-3.5 text-[#00E5FF] ml-1.5 mr-1" />
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-all ${
                  lang === "es"
                    ? "bg-gradient-to-r from-[#145CFF] to-[#00E5FF] text-white shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                    : "text-[#A8B3D1] hover:text-white"
                }`}
                aria-label="ES - Cambiar idioma a Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-all ${
                  lang === "en"
                    ? "bg-gradient-to-r from-[#145CFF] to-[#00E5FF] text-white shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                    : "text-[#A8B3D1] hover:text-white"
                }`}
                aria-label="EN - Change language to English"
              >
                EN
              </button>
            </div>

            {/* Glowing CTA Button */}
            <a
              href="#contacto"
              title="Hablemos de tu proyecto - Cotización de software y automatización con SarriaTech Solutions S.A.S."
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white overflow-hidden transition-all duration-300 transform hover:scale-[1.03] active:scale-95 bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] hover:from-[#00E5FF] hover:to-[#FF28D7] shadow-[0_0_20px_rgba(20,92,255,0.45)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)]"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span className="text-white font-bold">{t.nav.talkCta}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-[#0B1025] text-[#00E5FF] border border-[#00E5FF]/30"
              aria-label="Alternar tema de color"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-[#FFC247]" /> : <Moon className="w-4 h-4 text-[#00E5FF]" />}
            </button>

            {/* Mobile language switch */}
            <button
              type="button"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="p-1.5 text-xs font-bold text-[#00E5FF] bg-[#0B1025] rounded-lg border border-[#00E5FF]/30 flex items-center gap-1"
              aria-label={`${lang.toUpperCase()} - Cambiar idioma`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0B1025] text-[#A8B3D1] hover:text-white border border-[#00E5FF]/20 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00E5FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080D1D]/95 backdrop-blur-2xl border-b border-[#00E5FF]/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                title={link.seoTitle}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? "bg-[#145CFF]/15 text-[#00E5FF] border border-[#00E5FF]/30"
                    : "text-[#A8B3D1] hover:bg-[#0B1025] hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-[#00E5FF]/15">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] text-white font-bold text-center shadow-[0_0_20px_rgba(0,229,255,0.5)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.talkCta}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
