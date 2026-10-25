"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowRight, 
  BarChart3, 
  Bot, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  Headphones, 
  Layout, 
  Monitor, 
  Network, 
  Rocket, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  Wrench, 
  Zap 
} from "lucide-react";

interface ServiceConfig {
  id: string;
  nameKey: keyof typeof import("@/data/translations").translations.es.services.items;
  icon: React.ReactNode;
  colorBorder: string;
  glowClass: string;
  badge?: string;
  isFeatured?: boolean;
}

export default function ServicesSection() {
  const { t, scrollToContactWithService } = useLanguage();

  const servicesList: ServiceConfig[] = [
    {
      id: "landing-pages",
      nameKey: "landingPages",
      icon: <Rocket className="w-8 h-8 text-[#00E5FF]" />,
      colorBorder: "border-[#145CFF]/50 hover:border-[#00E5FF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(20,92,255,0.4)]",
      badge: t.services.featuredBadge,
      isFeatured: true,
    },
    {
      id: "diseno-desarrollo-web",
      nameKey: "webDev",
      icon: <Monitor className="w-8 h-8 text-[#8B3DFF]" />,
      colorBorder: "border-[#8B3DFF]/50 hover:border-[#8B3DFF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(139,61,255,0.4)]",
    },
    {
      id: "software-a-medida",
      nameKey: "customSoftware",
      icon: <Cpu className="w-8 h-8 text-[#FF28D7]" />,
      colorBorder: "border-[#FF28D7]/50 hover:border-[#FF28D7]",
      glowClass: "hover:shadow-[0_0_30px_rgba(255,40,215,0.4)]",
    },
    {
      id: "sistemas-empresariales",
      nameKey: "enterpriseSystems",
      icon: <Briefcase className="w-8 h-8 text-[#145CFF]" />,
      colorBorder: "border-[#145CFF]/50 hover:border-[#145CFF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(20,92,255,0.4)]",
    },
    {
      id: "automatizacion-procesos",
      nameKey: "processAutomation",
      icon: <Zap className="w-8 h-8 text-[#00E5FF]" />,
      colorBorder: "border-[#00E5FF]/50 hover:border-[#00E5FF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]",
    },
    {
      id: "agentes-ia-whatsapp",
      nameKey: "aiAgents",
      icon: <Bot className="w-8 h-8 text-[#8B3DFF]" />,
      colorBorder: "border-[#8B3DFF]/50 hover:border-[#00E5FF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(139,61,255,0.4)]",
    },
    {
      id: "consultoria-software",
      nameKey: "consulting",
      icon: <UserCheck className="w-8 h-8 text-[#8B3DFF]" />,
      colorBorder: "border-[#8B3DFF]/50 hover:border-[#8B3DFF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(139,61,255,0.4)]",
    },
    {
      id: "tarjetas-digitales-branding",
      nameKey: "digitalCards",
      icon: <Layout className="w-8 h-8 text-[#FF28D7]" />,
      colorBorder: "border-[#FF28D7]/50 hover:border-[#FF28D7]",
      glowClass: "hover:shadow-[0_0_30px_rgba(255,40,215,0.4)]",
    },
    {
      id: "soporte-mantenimiento-ti",
      nameKey: "itSupport",
      icon: <Headphones className="w-8 h-8 text-[#00E5FF]" />,
      colorBorder: "border-[#145CFF]/50 hover:border-[#00E5FF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]",
    },
    {
      id: "asesorias-tecnologicas",
      nameKey: "techAdvisory",
      icon: <GraduationCap className="w-8 h-8 text-[#FFC247]" />,
      colorBorder: "border-[#FFC247]/50 hover:border-[#FFC247]",
      glowClass: "hover:shadow-[0_0_30px_rgba(255,194,71,0.4)]",
    },
    {
      id: "tableros-analiticos-reportes",
      nameKey: "analyticsDashboards",
      icon: <BarChart3 className="w-8 h-8 text-[#39FF72]" />,
      colorBorder: "border-[#39FF72]/50 hover:border-[#00E5FF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(57,255,114,0.4)]",
    },
    {
      id: "apis-integraciones",
      nameKey: "apisIntegrations",
      icon: <Network className="w-8 h-8 text-[#145CFF]" />,
      colorBorder: "border-[#145CFF]/50 hover:border-[#00E5FF]",
      glowClass: "hover:shadow-[0_0_30px_rgba(20,92,255,0.4)]",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden bg-[#03040B]">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B3DFF 0%, #145CFF 50%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-10 left-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #FF28D7 50%, transparent 70%)" }}
      />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D1D] border border-[#00E5FF]/30 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid (Inspired by the neon cards in reference poster) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((srv) => {
            const itemText = t.services.items[srv.nameKey];

            return (
              <div
                key={srv.id}
                className={`group relative rounded-2xl bg-[#080D1D]/90 p-6 sm:p-7 border ${srv.colorBorder} ${srv.glowClass} backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between`}
              >
                {/* Glow accent pill when featured */}
                {srv.isFeatured && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#145CFF] to-[#00E5FF] text-[11px] font-mono font-bold text-white shadow-[0_0_15px_rgba(0,229,255,0.7)] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#39FF72]" />
                    <span>{srv.badge}</span>
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-[#0B1025] border border-[#00E5FF]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#00E5FF]/60 transition-all duration-300 shadow-inner">
                    {srv.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {itemText.name}
                  </h3>

                  {/* Featured Price Callout (Landing Pages) */}
                  {srv.isFeatured && (
                    <div className="my-3 p-3 rounded-xl bg-[#03040B] border border-[#00E5FF]/30 space-y-1">
                      <div className="text-sm font-mono font-bold text-[#00E5FF] flex items-center justify-between">
                        <span>{t.services.fromPrice}</span>
                        <span className="text-[10px] text-[#39FF72] bg-[#39FF72]/15 px-2 py-0.5 rounded">Tarifa Base</span>
                      </div>
                      <p className="text-[11px] text-[#A8B3D1] italic leading-tight">
                        {t.services.priceDisclaimer}
                      </p>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-[#A8B3D1] leading-relaxed mt-2.5">
                    {itemText.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-[#00E5FF]/15 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToContactWithService(itemText.name)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00E5FF] group-hover:text-white transition-colors"
                  >
                    <span>{t.services.quoteBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[10px] font-mono text-[#A8B3D1]/50 group-hover:text-[#A8B3D1] transition-colors">
                    SarriaTech Dev
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
