"use client";

import React from "react";
import Link from "next/link";

interface SarriaTechLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
}

export default function SarriaTechLogo({
  size = "md",
  showTagline = false,
  className = "",
}: SarriaTechLogoProps) {
  const sizeClasses = {
    sm: {
      badge: "w-7 h-7 text-xs",
      text: "text-lg",
      slash: "text-xs",
      sub: "text-[9px]",
    },
    md: {
      badge: "w-9 h-9 text-sm",
      text: "text-2xl",
      slash: "text-sm",
      sub: "text-[10px]",
    },
    lg: {
      badge: "w-12 h-12 text-base",
      text: "text-3xl",
      slash: "text-base",
      sub: "text-xs",
    },
    xl: {
      badge: "w-16 h-16 text-xl",
      text: "text-4xl md:text-5xl",
      slash: "text-xl",
      sub: "text-sm",
    },
  }[size];

  return (
    <Link
      href="#inicio"
      className={`group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] focus:outline-none ${className}`}
      aria-label="SarriaTech Solutions - Inicio"
    >
      {/* Hexagonal / Angular Code Badge */}
      <div className="relative flex items-center justify-center">
        {/* Glow behind badge */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />
        
        {/* Outer badge box */}
        <div
          className={`${sizeClasses.badge} relative flex items-center justify-center rounded-lg bg-[#080D1D] border border-[#00E5FF]/60 shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.7)] transition-all`}
          style={{
            clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
          }}
        >
          {/* Inner Code glyph < / > */}
          <div className="flex items-center font-mono font-black tracking-tighter">
            <span className="text-[#00E5FF]">&lt;</span>
            <span className="text-[#FF28D7] mx-[1px]">/</span>
            <span className="text-[#00E5FF]">&gt;</span>
          </div>
        </div>
      </div>

      {/* Typography: Sarria in white, Tech in cyan-blue gradient */}
      <div className="flex flex-col leading-none">
        <div className={`font-black tracking-tight ${sizeClasses.text} flex items-baseline`}>
          <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
            Sarria
          </span>
          <span className="bg-gradient-to-r from-[#00E5FF] via-[#145CFF] to-[#8B3DFF] bg-clip-text text-transparent font-extrabold ml-[1px] drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]">
            Tech
          </span>
        </div>
        {showTagline && (
          <span className={`text-[#A8B3D1] tracking-widest uppercase font-semibold font-mono ${sizeClasses.sub} mt-1`}>
            SOLUTIONS S.A.S.
          </span>
        )}
      </div>
    </Link>
  );
}
