"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Phone, 
  Layers, 
  HelpCircle 
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  deliveryTime: string;
}

interface ExtraFeature {
  id: string;
  name: string;
  price: number;
}

export default function BudgetEstimator() {
  const { lang, scrollToContactWithService } = useLanguage();

  const services: ServiceOption[] = [
    {
      id: "landing",
      name: "Landing Page de Alto Impacto",
      basePrice: 500000,
      deliveryTime: "3 a 5 días hábiles",
    },
    {
      id: "web",
      name: "Diseño y Desarrollo Web Corporativo",
      basePrice: 1200000,
      deliveryTime: "7 a 14 días hábiles",
    },
    {
      id: "software",
      name: "Desarrollo de Software a Medida",
      basePrice: 2500000,
      deliveryTime: "Por fases ágiles",
    },
    {
      id: "enterprise",
      name: "Sistemas Empresariales & ERP",
      basePrice: 3800000,
      deliveryTime: "Por hitos acordados",
    },
    {
      id: "ai-whatsapp",
      name: "Agente de IA para WhatsApp",
      basePrice: 1500000,
      deliveryTime: "5 a 10 días hábiles",
    },
    {
      id: "automation",
      name: "Automatización de Procesos",
      basePrice: 1200000,
      deliveryTime: "5 a 8 días hábiles",
    },
    {
      id: "analytics",
      name: "Tablero Analítico & Dashboards BI",
      basePrice: 900000,
      deliveryTime: "4 a 7 días hábiles",
    },
  ];

  const features: ExtraFeature[] = [
    { id: "payments", name: "Pasarela de pagos (Wompi, Stripe, PSE)", price: 300000 },
    { id: "auth", name: "Autenticación segura y roles de usuario", price: 350000 },
    { id: "api", name: "Integración con API externa / Webhooks", price: 250000 },
    { id: "i18n", name: "Multi-idioma (Español / Inglés)", price: 180000 },
    { id: "support", name: "Paquete de soporte y monitoreo mensual", price: 200000 },
  ];

  const [selectedServiceId, setSelectedServiceId] = useState<string>("landing");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const calculatedTotal =
    selectedService.basePrice +
    selectedFeatures.reduce((acc, fId) => {
      const feat = features.find((f) => f.id === fId);
      return acc + (feat ? feat.price : 0);
    }, 0);

  const handleApplyToQuote = () => {
    const featNames = selectedFeatures
      .map((fId) => features.find((f) => f.id === fId)?.name)
      .filter(Boolean)
      .join(", ");

    const summary = `${selectedService.name} (Estimado base: $${calculatedTotal.toLocaleString("es-CO")} COP${featNames ? " con " + featNames : ""})`;
    scrollToContactWithService(summary);
  };

  return (
    <section id="estimador" className="relative py-24 sm:py-32 overflow-hidden bg-[#080D1D]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[500px] rounded-full blur-[170px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B3DFF 0%, #00E5FF 50%, transparent 70%)" }}
      />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03040B] border border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>ESTIMADOR DE PROYECTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calcula una estimación para tu solución tecnológica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            Selecciona el tipo de solución y los componentes adicionales para obtener una referencia presupuestal inmediata.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#03040B]/90 border border-[#00E5FF]/30 shadow-[0_0_40px_rgba(20,92,255,0.25)] backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Options Left */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Select Core Service */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF] mb-3">
                  1. Selecciona la solución base
                </label>
                <div className="space-y-2">
                  {services.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        selectedServiceId === srv.id
                          ? "bg-[#080D1D] border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                          : "bg-[#080D1D]/50 border-[#00E5FF]/15 hover:border-[#00E5FF]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedServiceId === srv.id
                              ? "border-[#00E5FF] bg-[#00E5FF]"
                              : "border-[#A8B3D1]"
                          }`}
                        >
                          {selectedServiceId === srv.id && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#03040B]" />
                          )}
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white block">
                            {srv.name}
                          </span>
                          <span className="text-[11px] font-mono text-[#A8B3D1]">
                            Tiempo: {srv.deliveryTime}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-bold text-[#00E5FF]">
                        Desde ${srv.basePrice.toLocaleString("es-CO")} COP
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Extra Add-ons */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A78BFA] mb-3">
                  2. Módulos o integraciones adicionales
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);

                    return (
                      <div
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`cursor-pointer p-3 rounded-xl border transition-all flex items-start gap-2.5 ${
                          isChecked
                            ? "bg-[#080D1D] border-[#8B3DFF] shadow-sm text-white"
                            : "bg-[#080D1D]/40 border-[#00E5FF]/15 hover:border-[#8B3DFF]/40 text-[#A8B3D1]"
                        }`}
                      >
                        <div
                          className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? "bg-[#8B3DFF] border-[#8B3DFF] text-white"
                              : "border-[#A8B3D1]/50"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-semibold block leading-tight">
                            {feat.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#39FF72] mt-0.5 block">
                            +${feat.price.toLocaleString("es-CO")} COP
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Breakdown & Action Right */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080D1D] border border-[#00E5FF]/30 space-y-5">
              <div className="border-b border-[#00E5FF]/15 pb-4">
                <span className="text-xs font-mono text-[#A8B3D1] block mb-1">
                  Resumen de la estimación
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedService.name}
                </h3>
              </div>

              {/* Included items */}
              <div className="space-y-2 text-xs font-mono text-[#A8B3D1]">
                <div className="flex justify-between">
                  <span>Base:</span>
                  <span className="text-white">
                    ${selectedService.basePrice.toLocaleString("es-CO")} COP
                  </span>
                </div>
                {selectedFeatures.map((fId) => {
                  const feat = features.find((f) => f.id === fId);
                  if (!feat) return null;
                  return (
                    <div key={fId} className="flex justify-between text-[#A78BFA]">
                      <span className="truncate pr-2">+ {feat.name}</span>
                      <span className="shrink-0 font-bold">
                        ${feat.price.toLocaleString("es-CO")}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Total Display */}
              <div className="p-4 rounded-xl bg-[#03040B] border border-[#00E5FF]/40 text-center space-y-1">
                <span className="text-[11px] font-mono text-[#A8B3D1] block">
                  Presupuesto Referencial Estimado
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#00E5FF] font-mono">
                  ${calculatedTotal.toLocaleString("es-CO")} COP
                </div>
                <span className="text-[9px] font-mono text-[#39FF72] block">
                  * Tarifa estimada sujeta al alcance final
                </span>
              </div>

              <p className="text-[11px] text-[#A8B3D1] italic leading-tight">
                * Este cálculo es referencial. El valor y cronograma definitivo se formalizan en una propuesta técnica según los requerimientos exactos de tu empresa.
              </p>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleApplyToQuote}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] hover:from-[#00E5FF] hover:to-[#FF28D7] shadow-[0_0_20px_rgba(20,92,255,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Cotizar con esta configuración</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/573229088736?text=${encodeURIComponent(
                    `¡Hola SarriaTech Solutions! Calculé un presupuesto estimado de *$${calculatedTotal.toLocaleString(
                      "es-CO"
                    )} COP* para *${selectedService.name}*. Me gustaría recibir asesoría técnica y cotización formal.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-[#03040B] bg-[#39FF72] hover:bg-[#39FF72]/90 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Enviar estimación a WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
