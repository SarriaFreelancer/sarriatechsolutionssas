"use client";

import React from "react";
import HeroVisual from "./HeroVisual";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  ShieldCheck, 
  Workflow 
} from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const capabilityIcons = [
    <Code2 key="code" className="w-4 h-4 text-[#00E5FF]" />,
    <Workflow key="wf" className="w-4 h-4 text-[#145CFF]" />,
    <Cpu key="cpu" className="w-4 h-4 text-[#8B3DFF]" />,
    <Database key="db" className="w-4 h-4 text-[#FF28D7]" />,
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Eyebrow Tag: Angular brackets < SOFTWARE DEV > style */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080D1D] border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.25)]">
              <span className="font-mono text-[#00E5FF] font-bold text-xs">&lt;</span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#F7FAFF] uppercase">
                {t.hero.badge}
              </span>
              <span className="font-mono text-[#FF28D7] font-bold text-xs">&gt;</span>
            </div>

            {/* Main Headline with Animated Gradient */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12]">
              {t.hero.titlePrefix}{" "}
              <span className="block mt-1 bg-gradient-to-r from-[#00E5FF] via-[#145CFF] to-[#FF28D7] bg-clip-text text-transparent animate-gradient-text drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#A8B3D1] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] hover:from-[#00E5FF] hover:to-[#FF28D7] shadow-[0_0_25px_rgba(20,92,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#productos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-[#F7FAFF] bg-[#0B1025] hover:bg-[#080D1D] border border-[#00E5FF]/30 hover:border-[#00E5FF]/70 shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300"
              >
                <Layers className="w-4 h-4 text-[#00E5FF]" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Capabilities badges */}
            <div className="pt-4 border-t border-[#00E5FF]/10">
              <p className="text-xs font-mono uppercase tracking-wider text-[#A8B3D1] mb-3 text-center lg:text-left">
                Capacidades Principales
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                {t.hero.capabilities.map((capability, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080D1D]/90 border border-[#00E5FF]/20 text-xs font-medium text-[#F7FAFF] shadow-sm hover:border-[#00E5FF]/50 transition-colors"
                  >
                    {capabilityIcons[idx % capabilityIcons.length]}
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust metric chips */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center lg:text-left">
              <div className="p-2.5 rounded-lg bg-[#0B1025]/50 border border-[#145CFF]/20">
                <div className="text-base sm:text-xl font-bold font-mono text-[#00E5FF]">
                  {t.hero.stats.uptime}
                </div>
                <div className="text-[10px] text-[#A8B3D1] leading-tight">
                  {t.hero.stats.uptimeLabel}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B1025]/50 border border-[#8B3DFF]/20">
                <div className="text-base sm:text-xl font-bold font-mono text-[#A870FF]">
                  {t.hero.stats.automation}
                </div>
                <div className="text-[10px] text-[#A8B3D1] leading-tight">
                  {t.hero.stats.automationLabel}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B1025]/50 border border-[#39FF72]/20">
                <div className="text-base sm:text-xl font-bold font-mono text-[#39FF72]">
                  {t.hero.stats.support}
                </div>
                <div className="text-[10px] text-[#A8B3D1] leading-tight">
                  {t.hero.stats.supportLabel}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Cyberpunk Visual Mockup */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
