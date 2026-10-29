"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Tv
} from "lucide-react";

export default function CompanyVideoSection() {
  const { lang } = useLanguage();

  const isEn = lang === "en";

  const videoUrl = "https://www.youtube-nocookie.com/embed/eYLu-T3OO-U?start=6&rel=0";
  const youtubeDirectLink = "https://youtu.be/eYLu-T3OO-U?si=39BOhBgt6WJ-I50W&t=6";

  const content = {
    badge: isEn ? "CORPORATE MEDIA" : "VIDEO DE LA EMPRESA",
    titlePrefix: isEn ? "Meet SarriaTech in" : "Conoce a SarriaTech en",
    titleHighlight: isEn ? "Action & Innovation" : "Acción & Innovación",
    subtitle: isEn
      ? "Discover our engineering vision, proprietary platforms, and how we empower modern enterprises through tailored software, intelligent automation, and high-impact artificial intelligence."
      : "Descubre nuestra visión de ingeniería, plataformas propias y cómo impulsamos a empresas modernas mediante desarrollo a medida, automatización e inteligencia artificial de alto impacto.",
    playerBarTitle: "SarriaTech Solutions S.A.S. · Video Oficial HD",
    openYoutubeBtn: isEn ? "Watch on YouTube" : "Ver en YouTube Oficial",
    quoteCta: isEn ? "Start Your Project" : "Cotizar tu Proyecto",
    chips: [
      {
        icon: <Cpu className="w-4 h-4 text-[#00E5FF]" />,
        label: isEn ? "Bespoke Software Development" : "Software a Medida & Arquitectura Cloud",
      },
      {
        icon: <Zap className="w-4 h-4 text-[#4D8CFF]" />,
        label: isEn ? "AI & Intelligent Automation" : "Automatización & Agentes de IA",
      },
      {
        icon: <ShieldCheck className="w-4 h-4 text-[#39FF72]" />,
        label: isEn ? "Enterprise Scalability & Security" : "Escalabilidad & Rendimiento 24/7",
      },
    ],
  };

  return (
    <section 
      id="video-empresa" 
      aria-label={content.badge}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#03040B]"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full blur-[190px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #145CFF 40%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B3DFF 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080D1D] border border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#00E5FF] mb-4 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <Play className="w-3.5 h-3.5 text-[#00E5FF] fill-current" />
            <span className="tracking-widest uppercase">{content.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {content.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#4D8CFF] to-[#FF28D7] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1] leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Video Cinema Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Neon Glow Outer Wrapper */}
          <div className="relative rounded-3xl bg-[#080D1D]/90 border-2 border-[#00E5FF]/40 shadow-[0_0_50px_rgba(0,229,255,0.22)] backdrop-blur-2xl p-2.5 sm:p-4 group hover:border-[#00E5FF]/80 transition-all duration-300">
            
            {/* Top Player Terminal Chrome Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#00E5FF]/20 mb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF28D7]/80 inline-block shadow-[0_0_8px_#FF28D7]" />
                <span className="w-3 h-3 rounded-full bg-[#FFC247]/80 inline-block shadow-[0_0_8px_#FFC247]" />
                <span className="w-3 h-3 rounded-full bg-[#39FF72]/80 inline-block shadow-[0_0_8px_#39FF72]" />
                <span className="ml-2 text-[#A8B3D1] hidden sm:inline-block">
                  {content.playerBarTitle}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#00E5FF]">
                <Tv className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">1080p HD · 60 FPS</span>
              </div>
            </div>

            {/* Responsive 16:9 Aspect Video Player */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#03040B] border border-[#00E5FF]/20 shadow-inner">
              <iframe
                src={videoUrl}
                title="SarriaTech Solutions - Presentación y Video de la Empresa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>

            {/* Bottom Bar: Action buttons and badges */}
            <div className="mt-4 pt-3 border-t border-[#00E5FF]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Feature Chips */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono">
                {content.chips.map((chip, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#03040B] border border-[#00E5FF]/20 text-[#F7FAFF]"
                  >
                    {chip.icon}
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                <a
                  href={youtubeDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#03040B] hover:bg-[#0B1025] text-white border border-[#FF28D7]/40 hover:border-[#FF28D7] text-xs font-mono font-bold transition-all shadow-sm hover:scale-105"
                  aria-label="Abrir video corporativo en YouTube"
                >
                  <Play className="w-3.5 h-3.5 text-[#FF28D7] fill-current" />
                  <span>{content.openYoutubeBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A8B3D1]" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] hover:from-[#00E5FF] hover:to-[#FF28D7] text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(20,92,255,0.4)] hover:scale-105"
                >
                  <span>{content.quoteCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
