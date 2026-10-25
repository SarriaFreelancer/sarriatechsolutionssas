"use client";

import React from "react";
import SarriaTechLogo from "./SarriaTechLogo";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowUp, 
  Globe, 
  Mail, 
  MessageSquare, 
  Phone, 
  ShieldCheck 
} from "lucide-react";

export default function Footer() {
  const { t, scrollToContactWithService } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03040B] border-t border-[#00E5FF]/20 pt-16 pb-12 overflow-hidden">
      {/* Top gradient border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <SarriaTechLogo size="lg" showTagline={true} />
            
            <p className="text-sm text-[#A8B3D1] max-w-sm leading-relaxed mt-2">
              {t.footer.tagline}. Ingeniería de software a medida, inteligencia artificial, analítica y automatización para empresas de alto rendimiento.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#39FF72] bg-[#39FF72]/10 border border-[#39FF72]/30 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#39FF72] animate-ping" />
                <span>Empresa Legalmente Constituida en Colombia</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00E5FF]">
              {t.footer.columns.products}
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B3D1]">
              <li>
                <a
                  href="https://gns.sarriatech.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>GNS — Gestión Negocios</span>
                  <span className="text-[10px] font-mono text-[#39FF72]">En vivo</span>
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="hover:text-white transition-colors"
                >
                  NEXUS — Project DevOps
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="hover:text-white transition-colors"
                >
                  VCA VILLA RICA — Analítica
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors text-xs text-[#00E5FF]"
                >
                  + Desarrollos a Medida
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
              {t.footer.columns.services}
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B3D1]">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToContactWithService("Landing Pages")}
                  className="hover:text-white transition-colors text-left"
                >
                  Landing Pages (Desde $500k)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToContactWithService("Software a Medida")}
                  className="hover:text-white transition-colors text-left"
                >
                  Desarrollo de Software
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToContactWithService("Agentes de IA para WhatsApp")}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentes IA para WhatsApp
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToContactWithService("Automatización de Procesos")}
                  className="hover:text-white transition-colors text-left"
                >
                  Automatización de Procesos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToContactWithService("Tableros Analíticos")}
                  className="hover:text-white transition-colors text-left"
                >
                  Analítica &amp; BI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#39FF72]">
              {t.footer.columns.contact}
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B3D1]">
              <li>
                <a
                  href="https://wa.me/573229088736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF72] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#39FF72]" />
                  <span>322 908 8736</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sarriatech@gmail.com"
                  className="hover:text-[#00E5FF] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>sarriatech@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@sarriatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF28D7] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs font-mono font-bold text-[#FF28D7]">TT</span>
                  <span>@sarriatech</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sarriatech.tech"
                  className="hover:text-white transition-colors flex items-center gap-2 font-mono text-xs text-[#00E5FF]"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>sarriatech.tech</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-[#00E5FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8B3D1]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-white font-bold">{t.footer.company}</span>
            <span>&copy; {new Date().getFullYear()} {t.footer.rights}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <a href="#contacto" className="hover:text-white transition-colors">
              {t.footer.legal.privacy}
            </a>
            <span>·</span>
            <a href="#contacto" className="hover:text-white transition-colors">
              {t.footer.legal.dataTreatment}
            </a>
            <span>·</span>
            <a href="#contacto" className="hover:text-white transition-colors">
              {t.footer.legal.terms}
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#080D1D] border border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/20 transition-all"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
