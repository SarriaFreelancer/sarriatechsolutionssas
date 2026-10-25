"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Cpu, 
  Database, 
  MessageCircle, 
  Network, 
  Sparkles, 
  Workflow, 
  Zap 
} from "lucide-react";

export default function AutomationSection() {
  const { t, scrollToContactWithService } = useLanguage();

  const openAIChat = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-sarriatech-ai-chat"));
    }
  };

  const caseIcons = [
    <MessageCircle key="msg" className="w-6 h-6 text-[#39FF72]" />,
    <Workflow key="wf" className="w-6 h-6 text-[#00E5FF]" />,
    <Network key="net" className="w-6 h-6 text-[#8B3DFF]" />,
  ];

  return (
    <section id="automatizacion" className="relative py-24 sm:py-32 overflow-hidden bg-[#080D1D]">
      {/* Background radial highlights */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[170px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #145CFF 50%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full blur-[170px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B3DFF 0%, #FF28D7 50%, transparent 70%)" }}
      />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03040B] border border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>{t.automation.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.automation.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {t.automation.subtitle}
          </p>
        </div>

        {/* ============================================================== */}
        {/* Visual Animated Pipeline: Solicitud -> Procesamiento -> Integración -> Resultado */}
        {/* ============================================================== */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-[#03040B]/90 border border-[#00E5FF]/30 shadow-[0_0_35px_rgba(0,229,255,0.15)] backdrop-blur-xl">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold font-mono text-white flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              <span>{t.automation.flowTitle}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {t.automation.flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#080D1D] p-5 border border-[#00E5FF]/20 hover:border-[#00E5FF]/70 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-[#00E5FF] px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                      {step.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#39FF72] shadow-[0_0_8px_#39FF72]" />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#A8B3D1] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting arrow for desktop */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#03040B] border border-[#00E5FF]/40 items-center justify-center shadow-lg text-[#00E5FF]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.automation.cases.map((useCase, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#03040B]/85 p-6 sm:p-8 border border-[#00E5FF]/20 hover:border-[#8B3DFF]/70 shadow-lg hover:shadow-[0_0_25px_rgba(139,61,255,0.25)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B1025] border border-[#00E5FF]/20 flex items-center justify-center mb-5">
                  {caseIcons[idx]}
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-3">
                  {useCase.highlight}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>

                <p className="text-sm text-[#A8B3D1] leading-relaxed">
                  {useCase.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#00E5FF]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#39FF72] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Implementación Validada
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <button
            type="button"
            onClick={openAIChat}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-white bg-[#03040B] border-2 border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:bg-[#00E5FF]/10 transition-all duration-300 transform hover:scale-105"
          >
            <Bot className="w-5 h-5 text-[#00E5FF] animate-bounce" />
            <span>Probar Agente IA en vivo (Gemini)</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToContactWithService("Automatización de Procesos & Agentes IA")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#00E5FF] via-[#145CFF] to-[#8B3DFF] hover:from-[#39FF72] hover:to-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_35px_rgba(57,255,114,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 text-white" />
            <span>{t.automation.cta}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
