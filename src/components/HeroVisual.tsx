"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Activity, 
  BarChart3, 
  Bot, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Database, 
  Flame, 
  Globe2, 
  Layers, 
  Lock, 
  Play, 
  Rocket, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Terminal, 
  TrendingUp, 
  Zap 
} from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "automation" | "code">("dashboard");
  const [salesMetric, setSalesMetric] = useState(14820);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#145CFF]/30 via-[#00E5FF]/20 to-[#FF28D7]/30 rounded-3xl blur-3xl opacity-60 -z-10 animate-pulse-slow" />

      {/* Main Desktop Window Container */}
      <div className="relative rounded-2xl bg-[#080D1D]/90 border border-[#00E5FF]/30 shadow-[0_0_50px_rgba(20,92,255,0.35)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#00E5FF]/60 hover:shadow-[0_0_60px_rgba(0,229,255,0.4)]">
        
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B1025]/90 border-b border-[#00E5FF]/15">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#FF28D7]/80 inline-block shadow-[0_0_6px_#FF28D7]" />
            <span className="w-3 h-3 rounded-full bg-[#FFC247]/80 inline-block shadow-[0_0_6px_#FFC247]" />
            <span className="w-3 h-3 rounded-full bg-[#39FF72]/80 inline-block shadow-[0_0_6px_#39FF72]" />
            <span className="ml-2 text-xs font-mono text-[#A8B3D1] hidden sm:inline-flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#00E5FF]" />
              https://cloud.sarriatech.tech/enterprise-core
            </span>
          </div>

          {/* Interactive view switchers */}
          <div className="flex items-center space-x-1 bg-[#03040B] p-1 rounded-lg border border-[#00E5FF]/20 text-xs font-mono">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                activeTab === "dashboard"
                  ? "bg-[#145CFF] text-white shadow-[0_0_10px_#145CFF]"
                  : "text-[#A8B3D1] hover:text-white"
              }`}
            >
              <BarChart3 className="w-3 h-3" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("automation")}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                activeTab === "automation"
                  ? "bg-[#8B3DFF] text-white shadow-[0_0_10px_#8B3DFF]"
                  : "text-[#A8B3D1] hover:text-white"
              }`}
            >
              <Zap className="w-3 h-3" />
              <span className="hidden sm:inline">IA & Flows</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                activeTab === "code"
                  ? "bg-[#00E5FF] text-[#03040B] font-bold shadow-[0_0_10px_#00E5FF]"
                  : "text-[#A8B3D1] hover:text-white"
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span className="hidden sm:inline">API</span>
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-4 sm:p-6 bg-[#080D1D] min-h-[340px]">
          {activeTab === "dashboard" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Header metrics bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#00E5FF]/10 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#39FF72]/15 text-[#39FF72] border border-[#39FF72]/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39FF72] animate-ping" />
                      SISTEMA ONLINE
                    </span>
                    <span className="text-xs text-[#A8B3D1] font-mono">Cluster Bogotá · Latencia 14ms</span>
                  </div>
                  <h3 className="hero-dashboard-title text-base sm:text-lg font-bold text-white mt-1">
                    Control Operativo &amp; Métricas en Tiempo Real
                  </h3>
                </div>

                <button
                  onClick={() => setSalesMetric((prev) => prev + Math.floor(Math.random() * 450 + 100))}
                  className="px-2.5 py-1 rounded bg-[#145CFF]/20 hover:bg-[#145CFF]/40 border border-[#145CFF]/50 text-xs font-mono text-[#00E5FF] flex items-center gap-1 transition-all"
                  title="Simular nueva transacción"
                >
                  <Play className="w-3 h-3 fill-current" />
                  + Simular Evento
                </button>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#0B1025] border border-[#00E5FF]/20 shadow-sm">
                  <div className="text-[11px] font-mono text-[#A8B3D1] flex items-center justify-between">
                    <span>Transacciones</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#39FF72]" />
                  </div>
                  <div className="hero-metric-price text-lg sm:text-2xl font-black text-white font-mono mt-1">
                    ${(salesMetric * 100).toLocaleString("es-CO")}
                  </div>
                  <div className="text-[10px] text-[#39FF72] font-mono mt-0.5">+24.8% hoy</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B1025] border border-[#8B3DFF]/30 shadow-sm">
                  <div className="text-[11px] font-mono text-[#A8B3D1] flex items-center justify-between">
                    <span>IA Queries</span>
                    <Bot className="w-3.5 h-3.5 text-[#00E5FF]" />
                  </div>
                  <div className="hero-metric-val text-lg sm:text-2xl font-black text-white font-mono mt-1">
                    {(salesMetric / 8).toFixed(0)}
                  </div>
                  <div className="text-[10px] text-[#00E5FF] font-mono mt-0.5">Respuestas WhatsApp</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B1025] border border-[#FF28D7]/30 shadow-sm">
                  <div className="text-[11px] font-mono text-[#A8B3D1] flex items-center justify-between">
                    <span>Uptime SLA</span>
                    <Activity className="w-3.5 h-3.5 text-[#FF28D7]" />
                  </div>
                  <div className="hero-metric-val text-lg sm:text-2xl font-black text-white font-mono mt-1">
                    99.98%
                  </div>
                  <div className="text-[10px] text-[#FF28D7] font-mono mt-0.5">0 fallos críticos</div>
                </div>
              </div>

              {/* Mini Chart Mockup with SVG */}
              <div className="p-3 rounded-xl bg-[#0B1025]/80 border border-[#00E5FF]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#A8B3D1]">Rendimiento de Procesamiento (req/sec)</span>
                  <span className="text-xs font-mono text-[#00E5FF] font-bold">Pico: 3,420 req/s</span>
                </div>
                
                {/* SVG Visual Waveform */}
                <div className="relative h-20 w-full overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#145CFF" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#8B3DFF" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="50%" stopColor="#145CFF" />
                        <stop offset="100%" stopColor="#FF28D7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,70 Q 50,40 100,55 T 200,30 T 300,45 T 400,20 T 500,40 L 500,100 L 0,100 Z"
                      fill="url(#cyberGradient)"
                    />
                    <path
                      d="M 0,70 Q 50,40 100,55 T 200,30 T 300,45 T 400,20 T 500,40"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2.5"
                    />
                    {/* Data Points */}
                    <circle cx="200" cy="30" r="4" fill="#00E5FF" className="animate-ping" />
                    <circle cx="400" cy="20" r="4" fill="#FF28D7" />
                  </svg>
                </div>
              </div>

              {/* Submodule pills matching reference image */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[
                  { label: "Innovación", color: "border-[#00E5FF]/40 text-[#00E5FF]" },
                  { label: "Rendimiento", color: "border-[#145CFF]/40 text-[#145CFF]" },
                  { label: "Seguridad", color: "border-[#8B3DFF]/40 text-[#8B3DFF]" },
                  { label: "Escalabilidad", color: "border-[#FF28D7]/40 text-[#FF28D7]" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`py-1.5 px-2 rounded-lg bg-[#03040B] border ${item.color} text-center font-mono text-[11px] font-semibold`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "automation" && (
            <div className="space-y-3 font-mono text-xs animate-in fade-in duration-300">
              <div className="text-[#A8B3D1] pb-2 border-b border-[#8B3DFF]/20 flex items-center justify-between">
                <span>Flujo Activo: WhatsApp AI Agent &rarr; ERP SarriaTech</span>
                <span className="text-[#39FF72] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Pipeline Activo
                </span>
              </div>

              {/* Pipeline Nodes */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-[#0B1025] border-l-4 border-l-[#39FF72] border border-[#00E5FF]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">1. Inbound Event:</span>
                    <span className="text-[#A8B3D1]">Cliente solicita cotización por WhatsApp (+57 322...)</span>
                  </div>
                  <span className="text-[#39FF72]">200 OK</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0B1025] border-l-4 border-l-[#8B3DFF] border border-[#8B3DFF]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">2. NLP Engine:</span>
                    <span className="text-[#00E5FF]">Intención: `cotizar_software_medida`, Presupuesto estimado extraído</span>
                  </div>
                  <span className="text-[#8B3DFF]">98% Confidence</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0B1025] border-l-4 border-l-[#145CFF] border border-[#145CFF]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">3. Database Sync:</span>
                    <span className="text-[#A8B3D1]">Creación de Lead en GNS CRM + Alerta en tiempo real</span>
                  </div>
                  <span className="text-[#145CFF]">Sync 12ms</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0B1025] border-l-4 border-l-[#FF28D7] border border-[#FF28D7]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">4. WhatsApp Response:</span>
                    <span className="text-[#FF28D7]">Asistente responde en 1.2s con propuesta y enlace interactivo</span>
                  </div>
                  <span className="text-[#39FF72]">Delivered</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="p-3 rounded-lg bg-[#03040B] border border-[#00E5FF]/20 font-mono text-xs overflow-x-auto text-[#A8B3D1] space-y-1 animate-in fade-in duration-300">
              <div className="text-[#A8B3D1]/60">// SarriaTech Cloud SDK & API Endpoint</div>
              <div>
                <span className="text-[#FF28D7]">import</span> &#123; SarriaTechClient &#125; <span className="text-[#FF28D7]">from</span> <span className="text-[#39FF72]">&quot;@sarriatech/core&quot;</span>;
              </div>
              <div className="py-1">
                <span className="text-[#145CFF]">const</span> client = <span className="text-[#FF28D7]">new</span> <span className="text-[#00E5FF]">SarriaTechClient</span>(&#123;
              </div>
              <div className="pl-4">
                apiKey: process.env.<span className="text-[#FFC247]">SARRIATECH_API_KEY</span>,
              </div>
              <div className="pl-4">
                cluster: <span className="text-[#39FF72]">&quot;colombia-enterprise-01&quot;</span>,
              </div>
              <div className="pl-4">
                modules: [<span className="text-[#39FF72]">&quot;gns-erp&quot;</span>, <span className="text-[#39FF72]">&quot;whatsapp-ai&quot;</span>, <span className="text-[#39FF72]">&quot;analytics&quot;</span>]
              </div>
              <div>&#125;);</div>
              <div className="pt-2">
                <span className="text-[#145CFF]">await</span> client.automations.<span className="text-[#00E5FF]">deployPipeline</span>(&#123;
              </div>
              <div className="pl-4">
                target: <span className="text-[#39FF72]">&quot;https://sarriatech.tech&quot;</span>,
              </div>
              <div className="pl-4">
                status: <span className="text-[#39FF72]">&quot;PRODUCTION_READY&quot;</span>
              </div>
              <div>&#125;);</div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Smartphone Mockup (Inspired by reference visual) */}
      <div className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-8 w-56 rounded-3xl bg-[#080D1D] p-2.5 border-2 border-[#00E5FF]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.35)] backdrop-blur-xl animate-float">
        {/* Notch / Speaker */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-3 bg-[#03040B] rounded-full border border-[#00E5FF]/20" />
        </div>

        {/* Screen */}
        <div className="rounded-2xl bg-[#0B1025] p-3 border border-[#00E5FF]/20 space-y-2">
          {/* Logo header inside phone */}
          <div className="flex items-center justify-between text-[11px] font-bold text-white border-b border-[#00E5FF]/15 pb-1.5">
            <span className="flex items-center gap-1">
              <span className="text-[#00E5FF]">&lt;/&gt;</span> SarriaTech
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF72] shadow-[0_0_5px_#39FF72]" />
          </div>

          <div className="text-center py-1">
            <p className="text-[11px] font-black text-white leading-tight">
              Llevamos tu negocio al siguiente nivel
            </p>
            <p className="text-[9px] text-[#A8B3D1] mt-0.5">
              Tecnología a medida para resultados reales
            </p>
          </div>

          <a
            href="#contacto"
            className="block text-center w-full py-1.5 rounded-lg bg-gradient-to-r from-[#145CFF] to-[#00E5FF] text-[10px] font-bold text-white shadow-[0_0_12px_rgba(0,229,255,0.5)] hover:scale-105 transition-transform"
          >
            Empezar ahora
          </a>

          {/* 3 micro badges */}
          <div className="grid grid-cols-3 gap-1 pt-1 text-center">
            <div className="p-1 rounded bg-[#03040B] border border-[#00E5FF]/30">
              <span className="text-[8px] text-[#00E5FF] block font-mono">Diseño</span>
              <span className="text-[8px] text-white font-bold">Moderno</span>
            </div>
            <div className="p-1 rounded bg-[#03040B] border border-[#8B3DFF]/30">
              <span className="text-[8px] text-[#8B3DFF] block font-mono">Multi</span>
              <span className="text-[8px] text-white font-bold">Device</span>
            </div>
            <div className="p-1 rounded bg-[#03040B] border border-[#39FF72]/30">
              <span className="text-[8px] text-[#39FF72] block font-mono">Carga</span>
              <span className="text-[8px] text-white font-bold">Rápida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge Left: GNS ERP Status */}
      <div className="hidden md:flex absolute -top-6 -left-6 items-center gap-2.5 px-3 py-2 rounded-xl bg-[#080D1D]/90 border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.3)] backdrop-blur-md animate-float-delayed">
        <div className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-[#03040B] border border-[#00E5FF]/40">
          <Image
            src="/images/gns-logo.png"
            alt="GNS Logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <div className="leading-tight">
          <span className="text-[10px] font-mono text-[#00E5FF] block">PRODUCTO PROPIO</span>
          <span className="text-xs font-bold text-white">GNS Cloud ERP</span>
        </div>
      </div>

      {/* Floating Badge Right Top: Nexus */}
      <div className="hidden lg:flex absolute top-12 -right-8 items-center gap-2.5 px-3 py-2 rounded-xl bg-[#080D1D]/90 border border-[#8B3DFF]/40 shadow-[0_0_20px_rgba(139,61,255,0.3)] backdrop-blur-md animate-float">
        <div className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-[#03040B] border border-[#8B3DFF]/40">
          <Image
            src="/images/nexus-logo.png"
            alt="Nexus Logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <div className="leading-tight">
          <span className="text-[10px] font-mono text-[#8B3DFF] block">DEV OPERATIONS</span>
          <span className="text-xs font-bold text-white">NEXUS Platform</span>
        </div>
      </div>
    </div>
  );
}
