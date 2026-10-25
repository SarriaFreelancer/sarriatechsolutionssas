"use client";

import React, { useState } from "react";
import { Phone, X, MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#080D1D] border border-[#39FF72]/50 shadow-[0_0_20px_rgba(57,255,114,0.3)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#39FF72] animate-ping" />
          <span className="text-xs font-mono text-white">
            ¿Tienes dudas? <strong className="text-[#39FF72]">¡Chatea con nosotros!</strong>
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#A8B3D1] hover:text-white ml-1 p-0.5"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Action Button */}
      <a
        href="https://wa.me/573229088736?text=%C2%A1Hola%20SarriaTech%20Solutions!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#39FF72] text-[#03040B] shadow-[0_0_25px_rgba(57,255,114,0.6)] hover:shadow-[0_0_40px_rgba(57,255,114,0.9)] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp a SarriaTech Solutions (+57 322 908 8736)"
      >
        {/* Glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#39FF72] opacity-30 animate-ping pointer-events-none" />
        
        {/* Phone Icon */}
        <Phone className="w-7 h-7 fill-current relative z-10 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
