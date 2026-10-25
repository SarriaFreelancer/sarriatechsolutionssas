"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Check, 
  Code2, 
  Compass, 
  Layers, 
  PenTool, 
  Rocket, 
  Sparkles 
} from "lucide-react";

export default function MethodologySection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Compass key="compass" className="w-5 h-5 text-[#00E5FF]" />,
    <Layers key="layers" className="w-5 h-5 text-[#145CFF]" />,
    <PenTool key="pen" className="w-5 h-5 text-[#8B3DFF]" />,
    <Code2 key="code" className="w-5 h-5 text-[#FF28D7]" />,
    <Rocket key="rocket" className="w-5 h-5 text-[#39FF72]" />,
  ];

  return (
    <section id="metodologia" className="relative py-24 sm:py-32 overflow-hidden bg-[#03040B]">
      {/* Ambient background light */}
      <div 
        className="absolute top-1/2 left-1/3 w-[650px] h-[400px] rounded-full blur-[170px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #145CFF 0%, #8B3DFF 60%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D1D] border border-[#00E5FF]/30 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.methodology.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.methodology.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {t.methodology.subtitle}
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Cards */}
        <div className="relative">
          
          {/* Progress Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 -translate-y-8 h-[2px] bg-gradient-to-r from-[#00E5FF] via-[#8B3DFF] to-[#39FF72] opacity-30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {t.methodology.steps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0B1025] border-2 border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.35)] -translate-y-2"
                      : "bg-[#080D1D]/90 border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 hover:bg-[#0B1025]"
                  }`}
                >
                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-10 h-10 rounded-xl bg-[#03040B] border border-[#00E5FF]/30 flex items-center justify-center shadow-inner">
                        {stepIcons[idx]}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#A8B3D1]">
                        ETAPA {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.name}
                    </h3>

                    <p className="text-xs text-[#A8B3D1] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-[#00E5FF]/10 flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? "text-[#00E5FF] font-bold" : "text-[#A8B3D1]/60"}>
                      Fase {idx + 1}/5
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#00E5FF] animate-ping" : "bg-[#00E5FF]/40"}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Note on methodology */}
        <div className="mt-12 text-center text-xs font-mono text-[#A8B3D1]/70 max-w-xl mx-auto">
          Enfoque ágil e iterativo: entregas continuas, retroalimentación temprana y control riguroso de calidad en cada fase.
        </div>

      </div>
    </section>
  );
}
