"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowUpRight, 
  BarChart2, 
  Boxes, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink, 
  Filter, 
  Kanban, 
  Layers, 
  LineChart, 
  PieChart, 
  Play, 
  ShieldCheck, 
  Sparkles, 
  Users 
} from "lucide-react";

export default function ProductsSection() {
  const { t, scrollToContactWithService } = useLanguage();
  const [vcaFilter, setVcaFilter] = useState<"trimestre" | "mes" | "semana">("mes");
  const [kanbanFilter, setKanbanFilter] = useState<"todos" | "sprint" | "bugs">("todos");

  return (
    <section id="productos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #145CFF 40%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D1D] border border-[#00E5FF]/30 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Boxes className="w-3.5 h-3.5" />
            <span>{t.products.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.products.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {t.products.subtitle}
          </p>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-12 sm:space-y-16">

          {/* ========================================================== */}
          {/* PRODUCT 1: GNS - Gestión de Negocios SarriaTech */}
          {/* ========================================================== */}
          <div className="group relative rounded-3xl bg-[#080D1D]/90 border border-[#00E5FF]/30 hover:border-[#00E5FF]/70 shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:shadow-[0_0_45px_rgba(0,229,255,0.3)] transition-all duration-300 overflow-hidden">
            {/* Top color bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#145CFF]" />

            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Product Info Left */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#145CFF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                    {t.products.gns.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-[#39FF72] bg-[#39FF72]/15 border border-[#39FF72]/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF72] animate-ping" />
                    {t.products.gns.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#03040B] border border-[#00E5FF]/40 flex items-center justify-center p-1 shadow-md">
                    <Image
                      src="/images/gns-logo.png"
                      alt="GNS Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {t.products.gns.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#A8B3D1] leading-relaxed">
                  {t.products.gns.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {t.products.gns.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F7FAFF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="https://gns.sarriatech.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#145CFF] to-[#00E5FF] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
                  >
                    <span>{t.products.gns.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => scrollToContactWithService("GNS — Demostración y Planes ERP")}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B1025] hover:bg-[#03040B] text-[#F7FAFF] border border-[#00E5FF]/40 text-sm font-semibold transition-all hover:border-[#00E5FF]"
                  >
                    <span>{t.products.gns.demo}</span>
                    <ChevronRight className="w-4 h-4 text-[#00E5FF]" />
                  </button>
                </div>
              </div>

              {/* Product Visual Right - Real GNS Interface Mockup */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-[#0B1025] p-3 sm:p-4 border border-[#00E5FF]/40 shadow-2xl overflow-hidden group-hover:border-[#00E5FF] transition-all">
                  
                  {/* Laptop screen frame */}
                  <div className="rounded-xl overflow-hidden bg-[#03040B] border border-[#00E5FF]/20">
                    {/* App Header */}
                    <div className="flex items-center justify-between px-3 py-2 bg-[#080D1D] border-b border-[#00E5FF]/15 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF28D7]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFC247]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#39FF72]" />
                        <span className="text-[#00E5FF] font-bold ml-1">GNS SARRIATECH ERP</span>
                      </div>
                      <span className="text-[#A8B3D1] text-[10px]">Sede Principal · Multi-usuario</span>
                    </div>

                    {/* Dashboard Metrics inside mockup */}
                    <div className="p-4 space-y-3 font-mono">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="p-2.5 rounded-lg bg-[#080D1D] border border-[#00E5FF]/20">
                          <span className="text-[10px] text-[#A8B3D1] block">Total Productos</span>
                          <span className="text-base font-bold text-white">20 Catálogo</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#080D1D] border border-[#00E5FF]/20">
                          <span className="text-[10px] text-[#A8B3D1] block">Stock Disponible</span>
                          <span className="text-base font-bold text-[#00E5FF]">2.808 Unid.</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#080D1D] border border-[#39FF72]/20 col-span-2 sm:col-span-2">
                          <span className="text-[10px] text-[#A8B3D1] block">Valor Inventario</span>
                          <span className="text-base font-bold text-[#39FF72]">$ 533.120.000</span>
                        </div>
                      </div>

                      {/* Mockup Table */}
                      <div className="rounded-lg bg-[#080D1D] border border-[#00E5FF]/15 p-2 text-[11px] overflow-x-auto">
                        <div className="grid grid-cols-4 text-[#A8B3D1] border-b border-[#00E5FF]/10 pb-1 font-bold">
                          <span>Módulo</span>
                          <span>Estado</span>
                          <span>Operación</span>
                          <span className="text-right">Sincronización</span>
                        </div>
                        <div className="divide-y divide-[#00E5FF]/10 text-white pt-1">
                          <div className="grid grid-cols-4 py-1.5 items-center">
                            <span className="text-[#00E5FF]">Inventario</span>
                            <span className="text-[#39FF72]">En Línea</span>
                            <span>Ajuste Kárdex</span>
                            <span className="text-right text-[#A8B3D1]">Automático</span>
                          </div>
                          <div className="grid grid-cols-4 py-1.5 items-center">
                            <span className="text-[#00E5FF]">Ventas &amp; POS</span>
                            <span className="text-[#39FF72]">Activo</span>
                            <span>Factura #1084</span>
                            <span className="text-right text-[#A8B3D1]">Hace 2 min</span>
                          </div>
                          <div className="grid grid-cols-4 py-1.5 items-center">
                            <span className="text-[#00E5FF]">Proveedores</span>
                            <span className="text-[#39FF72]">Vinculado</span>
                            <span>Órdenes de Compra</span>
                            <span className="text-right text-[#A8B3D1]">Sincronizado</span>
                          </div>
                        </div>
                      </div>

                      {/* Poster Link badge */}
                      <div className="flex items-center justify-between text-[11px] text-[#A8B3D1] pt-1">
                        <span className="text-[#00E5FF]">https://gns.sarriatech.tech/</span>
                        <span className="text-[#39FF72] font-semibold">15 Días de Prueba Gratuita</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* ========================================================== */}
          {/* PRODUCT 2: NEXUS - Gestión de Proyectos de Software */}
          {/* ========================================================== */}
          <div className="group relative rounded-3xl bg-[#080D1D]/90 border border-[#8B3DFF]/30 hover:border-[#8B3DFF]/70 shadow-[0_0_30px_rgba(139,61,255,0.15)] hover:shadow-[0_0_45px_rgba(139,61,255,0.3)] transition-all duration-300 overflow-hidden">
            {/* Top color bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#8B3DFF] via-[#FF28D7] to-[#145CFF]" />

            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Product Visual Left - Interactive Kanban Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl bg-[#0B1025] p-3 sm:p-4 border border-[#8B3DFF]/40 shadow-2xl overflow-hidden group-hover:border-[#8B3DFF] transition-all">
                  
                  <div className="rounded-xl overflow-hidden bg-[#03040B] border border-[#8B3DFF]/20 p-3">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#8B3DFF]/20 pb-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Kanban className="w-4 h-4 text-[#8B3DFF]" />
                        <span className="text-xs font-mono font-bold text-white">NEXUS SPRINT BOARD</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-[#8B3DFF]/20 text-[#FF28D7] border border-[#8B3DFF]/30">
                          Sprint 14 (En curso)
                        </span>
                      </div>
                    </div>

                    {/* Kanban Columns */}
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      
                      {/* Column 1: Por Hacer */}
                      <div className="bg-[#080D1D] p-2 rounded-lg border border-[#8B3DFF]/15">
                        <div className="flex items-center justify-between text-[10px] text-[#A8B3D1] font-bold mb-2">
                          <span>BACKLOG</span>
                          <span className="w-4 h-4 rounded-full bg-[#0B1025] text-center">3</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-2 rounded bg-[#0B1025] border-l-2 border-[#8B3DFF] text-[11px] text-white">
                            <span className="block font-semibold">Integrar OAuth2</span>
                            <span className="text-[9px] text-[#A8B3D1]">Cliente: FinTech</span>
                          </div>
                          <div className="p-2 rounded bg-[#0B1025] border-l-2 border-[#145CFF] text-[11px] text-white">
                            <span className="block font-semibold">Mockup UI Checkout</span>
                            <span className="text-[9px] text-[#A8B3D1]">Prioridad Alta</span>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: En Desarrollo */}
                      <div className="bg-[#080D1D] p-2 rounded-lg border border-[#00E5FF]/20">
                        <div className="flex items-center justify-between text-[10px] text-[#00E5FF] font-bold mb-2">
                          <span>EN DESARROLLO</span>
                          <span className="w-4 h-4 rounded-full bg-[#0B1025] text-center text-[#00E5FF]">2</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-2 rounded bg-[#0B1025] border-l-2 border-[#00E5FF] text-[11px] text-white">
                            <span className="block font-semibold">Bot WhatsApp API</span>
                            <span className="text-[9px] text-[#39FF72]">80% completado</span>
                          </div>
                          <div className="p-2 rounded bg-[#0B1025] border-l-2 border-[#FF28D7] text-[11px] text-white">
                            <span className="block font-semibold">Servicio Facturas</span>
                            <span className="text-[9px] text-[#FF28D7]">Code Review</span>
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Desplegado */}
                      <div className="bg-[#080D1D] p-2 rounded-lg border border-[#39FF72]/20">
                        <div className="flex items-center justify-between text-[10px] text-[#39FF72] font-bold mb-2">
                          <span>DESPLEGADO</span>
                          <span className="w-4 h-4 rounded-full bg-[#0B1025] text-center text-[#39FF72]">5</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-2 rounded bg-[#0B1025] border-l-2 border-[#39FF72] text-[11px] text-white">
                            <span className="block font-semibold">Reportes v2.1</span>
                            <span className="text-[9px] text-[#39FF72]">En Producción</span>
                          </div>
                          <div className="p-2 rounded bg-[#0B1025] border-l-2 border-[#39FF72] text-[11px] text-white">
                            <span className="block font-semibold">Seguridad RBAC</span>
                            <span className="text-[9px] text-[#39FF72]">Verificado</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="mt-3 pt-2 border-t border-[#8B3DFF]/15 flex items-center justify-between text-[10px] font-mono text-[#A8B3D1]">
                      <a
                        href="https://nexus.sarriatech.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF28D7] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>https://nexus.sarriatech.tech/</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[#8B3DFF] font-bold">SarriaTech Studio</span>
                    </div>

                  </div>

                </div>
              </div>

              {/* Product Info Right */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#8B3DFF]/20 text-[#FF28D7] border border-[#8B3DFF]/30">
                    {t.products.nexus.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-[#39FF72] bg-[#39FF72]/15 border border-[#39FF72]/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF72] animate-ping" />
                    {t.products.nexus.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#03040B] border border-[#8B3DFF]/40 flex items-center justify-center p-1 shadow-md">
                    <Image
                      src="/images/nexus-logo.png"
                      alt="Nexus Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {t.products.nexus.name}
                    </h3>
                    <p className="text-xs font-mono text-[#8B3DFF] mt-0.5">
                      SarriaTech Studio | Nexus Enterprise Platform
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#A8B3D1] leading-relaxed">
                  {t.products.nexus.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {t.products.nexus.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F7FAFF]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF28D7] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="https://nexus.sarriatech.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B3DFF] via-[#FF28D7] to-[#145CFF] text-white font-bold text-sm shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:shadow-[0_0_25px_rgba(255,40,215,0.7)] hover:scale-105 transition-all"
                  >
                    <span>{t.products.nexus.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => scrollToContactWithService("NEXUS — Plataforma de Gestión de Proyectos")}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B1025] hover:bg-[#03040B] text-[#F7FAFF] border border-[#8B3DFF]/40 text-sm font-semibold transition-all hover:border-[#8B3DFF]"
                  >
                    <span>{t.products.nexus.demo}</span>
                    <ChevronRight className="w-4 h-4 text-[#8B3DFF]" />
                  </button>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================== */}
          {/* PRODUCT 3: VCA VILLA RICA - Sistema de Analítica */}
          {/* ========================================================== */}
          <div className="group relative rounded-3xl bg-[#080D1D]/90 border border-[#00E5FF]/30 hover:border-[#145CFF]/70 shadow-[0_0_30px_rgba(20,92,255,0.15)] hover:shadow-[0_0_45px_rgba(20,92,255,0.3)] transition-all duration-300 overflow-hidden">
            {/* Top color bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#00E5FF] via-[#145CFF] to-[#39FF72]" />

            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Product Info Left */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                    {t.products.vca.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-[#39FF72] bg-[#39FF72]/15 border border-[#39FF72]/30">
                    {t.products.vca.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#03040B] border border-[#00E5FF]/40 flex items-center justify-center p-2 text-[#00E5FF] shadow-md">
                    <BarChart2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {t.products.vca.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#A8B3D1] leading-relaxed">
                  {t.products.vca.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {t.products.vca.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F7FAFF]">
                      <CheckCircle2 className="w-4 h-4 text-[#39FF72] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="https://encuestas.sarriatech.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] via-[#145CFF] to-[#39FF72] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(20,92,255,0.7)] hover:scale-105 transition-all"
                  >
                    <span>{t.products.vca.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => scrollToContactWithService("VCA VILLA RICA — Solución de Analítica y BI")}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B1025] hover:bg-[#03040B] text-[#F7FAFF] border border-[#00E5FF]/40 text-sm font-semibold transition-all hover:border-[#00E5FF]"
                  >
                    <span>{t.products.vca.demo}</span>
                    <ChevronRight className="w-4 h-4 text-[#00E5FF]" />
                  </button>
                </div>
              </div>

              {/* Product Visual Right - Interactive BI Dashboard Mockup */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-[#0B1025] p-3 sm:p-4 border border-[#00E5FF]/40 shadow-2xl overflow-hidden group-hover:border-[#00E5FF] transition-all">
                  
                  <div className="rounded-xl overflow-hidden bg-[#03040B] border border-[#00E5FF]/20 p-3 sm:p-4 space-y-3 font-mono text-xs">
                    
                    {/* Filter bar */}
                    <div className="flex items-center justify-between border-b border-[#00E5FF]/15 pb-2">
                      <div className="flex items-center gap-2">
                        <Filter className="w-3.5 h-3.5 text-[#00E5FF]" />
                        <span className="text-[#A8B3D1] text-[11px]">Periodo de Consulta:</span>
                      </div>
                      <div className="flex space-x-1 bg-[#080D1D] p-1 rounded-lg border border-[#00E5FF]/20 text-[10px]">
                        {(["trimestre", "mes", "semana"] as const).map((period) => (
                          <button
                            key={period}
                            type="button"
                            onClick={() => setVcaFilter(period)}
                            className={`px-2 py-0.5 rounded capitalize ${
                              vcaFilter === period
                                ? "bg-[#00E5FF] text-[#03040B] font-bold"
                                : "text-[#A8B3D1] hover:text-white"
                            }`}
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 rounded-lg bg-[#080D1D] border border-[#00E5FF]/20">
                        <span className="text-[10px] text-[#A8B3D1] block">Rendimiento</span>
                        <span className="text-sm sm:text-base font-bold text-white">
                          {vcaFilter === "trimestre" ? "+38.4%" : vcaFilter === "mes" ? "+24.2%" : "+12.1%"}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#080D1D] border border-[#39FF72]/20">
                        <span className="text-[10px] text-[#A8B3D1] block">Eficiencia</span>
                        <span className="text-sm sm:text-base font-bold text-[#39FF72]">
                          {vcaFilter === "trimestre" ? "96.5%" : vcaFilter === "mes" ? "94.8%" : "98.2%"}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#080D1D] border border-[#FF28D7]/20">
                        <span className="text-[10px] text-[#A8B3D1] block">Casos Resueltos</span>
                        <span className="text-sm sm:text-base font-bold text-[#FF28D7]">
                          {vcaFilter === "trimestre" ? "1,240" : vcaFilter === "mes" ? "415" : "98"}
                        </span>
                      </div>
                    </div>

                    {/* Visual BI Chart Bars */}
                    <div className="p-3 rounded-lg bg-[#080D1D] border border-[#00E5FF]/20 space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#A8B3D1]">
                        <span>Comportamiento de Operaciones (Datos Ficticios de Demostración)</span>
                        <span className="text-[#39FF72] font-semibold">Tendencia Positiva</span>
                      </div>

                      <div className="grid grid-cols-6 gap-2 items-end h-24 pt-2">
                        {[45, 65, 80, 55, 92, 100].map((val, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1">
                            <div
                              className="w-full rounded-t bg-gradient-to-t from-[#145CFF] to-[#00E5FF] transition-all duration-500 hover:brightness-125"
                              style={{ height: `${val}%` }}
                            />
                            <span className="text-[8px] text-[#A8B3D1]">P{idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#A8B3D1] pt-1">
                      <a
                        href="https://encuestas.sarriatech.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00E5FF] hover:underline flex items-center gap-1 font-mono font-semibold"
                      >
                        <span>https://encuestas.sarriatech.tech/</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[#39FF72] font-semibold">Sistema en Producción</span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
