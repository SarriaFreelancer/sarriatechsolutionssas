"use client";

import React, { useState } from "react";
import { X, ShieldCheck, FileText, Lock } from "lucide-react";

export type LegalDocType = "privacy" | "dataTreatment" | "terms";

export default function LegalModal({
  isOpen,
  onClose,
  initialDoc = "dataTreatment",
}: {
  isOpen: boolean;
  onClose: () => void;
  initialDoc?: LegalDocType;
}) {
  const [activeDoc, setActiveDoc] = useState<LegalDocType>(initialDoc);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-3xl bg-[#03040B] border border-[#00E5FF]/40 shadow-[0_0_50px_rgba(20,92,255,0.3)] overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080D1D] border-b border-[#00E5FF]/20">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#39FF72]" />
            <div>
              <h3 className="text-base font-bold text-white leading-none">
                Marco Legal Corporativo
              </h3>
              <span className="text-[10px] font-mono text-[#A8B3D1]">
                SarriaTech Solutions S.A.S. · República de Colombia
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A8B3D1] hover:text-white hover:bg-[#0B1025] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-[#00E5FF]/15 bg-[#0B1025] px-6 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveDoc("dataTreatment")}
            className={`py-3 px-4 border-b-2 font-bold transition-all ${
              activeDoc === "dataTreatment"
                ? "border-[#00E5FF] text-[#00E5FF]"
                : "border-transparent text-[#A8B3D1] hover:text-white"
            }`}
          >
            Tratamiento de Datos (Ley 1581)
          </button>
          <button
            type="button"
            onClick={() => setActiveDoc("terms")}
            className={`py-3 px-4 border-b-2 font-bold transition-all ${
              activeDoc === "terms"
                ? "border-[#00E5FF] text-[#00E5FF]"
                : "border-transparent text-[#A8B3D1] hover:text-white"
            }`}
          >
            Términos del Servicio
          </button>
          <button
            type="button"
            onClick={() => setActiveDoc("privacy")}
            className={`py-3 px-4 border-b-2 font-bold transition-all ${
              activeDoc === "privacy"
                ? "border-[#00E5FF] text-[#00E5FF]"
                : "border-transparent text-[#A8B3D1] hover:text-white"
            }`}
          >
            Garantías &amp; Propiedad Intelectual
          </button>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#A8B3D1] leading-relaxed font-sans">
          {activeDoc === "dataTreatment" && (
            <div className="space-y-4 text-justify">
              <h4 className="text-base font-bold text-white">
                POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
              </h4>
              <p>
                En cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong> y sus decretos reglamentarios, <strong>SarriaTech Solutions S.A.S.</strong>, con domicilio en el departamento del Valle del Cauca, Colombia, informa a los usuarios y clientes que los datos suministrados a través de los formularios web, cotizadores y canales digitales serán tratados de manera confidencial y segura.
              </p>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                1. Finalidad del Tratamiento
              </h5>
              <p>
                Los datos recolectados (nombre, empresa, correo, teléfono, país y descripción del proyecto) serán utilizados estrictamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Elaborar y remitir propuestas técnico-comerciales y cotizaciones de servicios solicitadas.</li>
                <li>Establecer contacto directo por correo, llamada o WhatsApp empresarial para el seguimiento del requerimiento.</li>
                <li>Formalizar contratos de prestación de servicios de software, consultoría y soporte de TI.</li>
              </ul>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                2. Derechos del Titular (Habeas Data)
              </h5>
              <p>
                El titular de los datos tiene derecho a conocer, actualizar, rectificar y suprimir su información de nuestras bases de datos, así como revocar la autorización otorgada, enviando una comunicación al correo oficial <strong>sarriatech@gmail.com</strong>.
              </p>
            </div>
          )}

          {activeDoc === "terms" && (
            <div className="space-y-4 text-justify">
              <h4 className="text-base font-bold text-white">
                TÉRMINOS Y CONDICIONES DE CONTRATACIÓN
              </h4>
              <p>
                Los servicios ofrecidos por <strong>SarriaTech Solutions S.A.S.</strong> (Landing Pages, desarrollo de software a medida, automatizaciones, sistemas empresariales y agentes de IA) se rigen por acuerdos comerciales y propuestas técnicas detalladas:
              </p>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                1. Alcance y Cotizaciones
              </h5>
              <p>
                Las tarifas publicadas como referencia (incluyendo la tarifa base de Landing Pages desde $500.000 COP) representan el punto de partida estándar y su valor definitivo estará condicionado al alcance, funcionalidades, integraciones y cronograma convenido en la propuesta formal.
              </p>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                2. Metodología y Entregas
              </h5>
              <p>
                Los desarrollos se ejecutan bajo metodologías ágiles por hitos verificables con entregas de avance, pruebas de aceptación y control de calidad antes de la puesta en producción.
              </p>
            </div>
          )}

          {activeDoc === "privacy" && (
            <div className="space-y-4 text-justify">
              <h4 className="text-base font-bold text-white">
                PROPIEDAD INTELECTUAL, CONFIDENCIALIDAD Y GARANTÍA
              </h4>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                1. Propiedad Intelectual del Cliente
              </h5>
              <p>
                Todo desarrollo de software a medida contratado con SarriaTech Solutions S.A.S. otorga al cliente la titularidad total de los derechos patrimoniales sobre el código fuente, bases de datos y entregables una vez liquidado el proyecto.
              </p>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                2. Acuerdos de Confidencialidad (NDA)
              </h5>
              <p>
                SarriaTech Solutions S.A.S. garantiza estricta reserva sobre la información comercial, modelos de negocio, bases de datos y propiedad industrial a los que tenga acceso durante el desarrollo.
              </p>
              <h5 className="font-bold text-white text-xs uppercase tracking-wide">
                3. Período de Garantía Técnica
              </h5>
              <p>
                Todo proyecto entregado cuenta con un período formal de garantía post-despliegue para corrección de anomalías o incidencias técnicas sin costo adicional para el cliente.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#080D1D] border-t border-[#00E5FF]/20 flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#A8B3D1]">
            SarriaTech Solutions S.A.S. · NIT Registrado
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#00E5FF] text-[#03040B] font-bold text-xs hover:bg-white transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
