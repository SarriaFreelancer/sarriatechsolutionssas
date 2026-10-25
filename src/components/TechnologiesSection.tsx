"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Cloud, 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  LineChart, 
  Network, 
  Server, 
  Terminal 
} from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "databases" | "analytics" | "integrations" | "infrastructure";
  tag: string;
  glowColor: string;
}

export default function TechnologiesSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const techStack: TechItem[] = [
    // Frontend
    { name: "React", category: "frontend", tag: "UI Library", glowColor: "#00E5FF" },
    { name: "Next.js", category: "frontend", tag: "App Router / SSR", glowColor: "#FFFFFF" },
    { name: "TypeScript", category: "frontend", tag: "Type-Safe", glowColor: "#145CFF" },
    { name: "Tailwind CSS", category: "frontend", tag: "Modern Styling", glowColor: "#00E5FF" },

    // Backend
    { name: "Node.js", category: "backend", tag: "Runtime", glowColor: "#39FF72" },
    { name: "Python", category: "backend", tag: "AI & Fast Services", glowColor: "#FFC247" },
    { name: "Java", category: "backend", tag: "Enterprise Core", glowColor: "#FF28D7" },
    { name: "RESTful APIs", category: "backend", tag: "Architecture", glowColor: "#8B3DFF" },

    // Databases
    { name: "PostgreSQL", category: "databases", tag: "Relational", glowColor: "#145CFF" },
    { name: "MySQL", category: "databases", tag: "Relational", glowColor: "#00E5FF" },
    { name: "SQL Server", category: "databases", tag: "Enterprise DB", glowColor: "#FF28D7" },
    { name: "Oracle DB", category: "databases", tag: "Corporate Data", glowColor: "#FF28D7" },

    // Analytics
    { name: "Power BI", category: "analytics", tag: "Business Intelligence", glowColor: "#FFC247" },
    { name: "SQL Analytics", category: "analytics", tag: "Queries & KPIs", glowColor: "#00E5FF" },
    { name: "Data Visualization", category: "analytics", tag: "Interactive Charts", glowColor: "#39FF72" },

    // Integrations
    { name: "WhatsApp Cloud API", category: "integrations", tag: "Conversational AI", glowColor: "#39FF72" },
    { name: "Webhooks", category: "integrations", tag: "Real-time Events", glowColor: "#8B3DFF" },
    { name: "Payment Gateways", category: "integrations", tag: "E-Commerce", glowColor: "#145CFF" },

    // Infrastructure
    { name: "Docker", category: "infrastructure", tag: "Containers", glowColor: "#00E5FF" },
    { name: "Cloud VPS & Linux", category: "infrastructure", tag: "High Availability", glowColor: "#FFC247" },
    { name: "CI / CD Pipelines", category: "infrastructure", tag: "Automated Deploy", glowColor: "#39FF72" },
    { name: "SSL & Security", category: "infrastructure", tag: "Hardening", glowColor: "#8B3DFF" },
  ];

  const categories = [
    { id: "all", label: "Todas" },
    { id: "frontend", label: t.technologies.categories.frontend },
    { id: "backend", label: t.technologies.categories.backend },
    { id: "databases", label: t.technologies.categories.databases },
    { id: "analytics", label: t.technologies.categories.analytics },
    { id: "integrations", label: t.technologies.categories.integrations },
    { id: "infrastructure", label: t.technologies.categories.infrastructure },
  ];

  const filteredTech = selectedCategory === "all"
    ? techStack
    : techStack.filter((item) => item.category === selectedCategory);

  return (
    <section id="tecnologias" className="relative py-24 sm:py-32 overflow-hidden bg-[#080D1D]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-1/4 w-[600px] h-[500px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #145CFF 50%, transparent 70%)" }}
      />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03040B] border border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.technologies.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.technologies.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {t.technologies.subtitle}
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#145CFF] text-white shadow-[0_0_15px_rgba(20,92,255,0.6)] border border-[#00E5FF]"
                  : "bg-[#03040B] text-[#A8B3D1] hover:text-white border border-[#00E5FF]/20 hover:border-[#00E5FF]/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#03040B]/90 border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 hover:bg-[#0B1025] transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  {tech.name}
                </span>
                <span 
                  className="w-2 h-2 rounded-full shadow-sm"
                  style={{ backgroundColor: tech.glowColor, boxShadow: `0 0 8px ${tech.glowColor}` }}
                />
              </div>

              <div className="text-[11px] font-mono text-[#A8B3D1]">
                {tech.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
