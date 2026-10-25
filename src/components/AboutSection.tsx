"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Building2, 
  CheckCircle2, 
  Compass, 
  Lightbulb, 
  ShieldCheck, 
  Target, 
  TrendingUp 
} from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  const principleIcons = [
    <Target key="target" className="w-6 h-6 text-[#00E5FF]" />,
    <Lightbulb key="bulb" className="w-6 h-6 text-[#8B3DFF]" />,
    <TrendingUp key="trend" className="w-6 h-6 text-[#39FF72]" />,
  ];

  return (
    <section id="nosotros" className="relative py-24 sm:py-32 overflow-hidden bg-[#03040B]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full blur-[170px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #145CFF 0%, #00E5FF 50%, transparent 70%)" }}
      />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D1D] border border-[#00E5FF]/30 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-[#080D1D]/90 border border-[#00E5FF]/30 shadow-[0_0_30px_rgba(20,92,255,0.2)] backdrop-blur-xl">
          <div className="space-y-4 text-base sm:text-lg text-[#F7FAFF] leading-relaxed">
            <p>{t.about.p1}</p>
            <p className="text-[#A8B3D1]">{t.about.p2}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#00E5FF]/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
              <ShieldCheck className="w-4 h-4 text-[#39FF72]" />
              <span>{t.about.legalNote}</span>
            </div>
            <div className="text-xs font-mono text-[#A8B3D1]">
              Sede Principal · Valle del Cauca, Colombia
            </div>
          </div>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.about.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#080D1D]/80 border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B1025] border border-[#00E5FF]/30 flex items-center justify-center mb-5">
                  {principleIcons[idx]}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#A8B3D1] leading-relaxed">
                  {principle.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#00E5FF]/10 flex items-center gap-1.5 text-xs font-mono text-[#00E5FF]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF72]" />
                <span>Pilar Corporativo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
