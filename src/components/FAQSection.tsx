"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  Code2 
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const { lang, scrollToContactWithService } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsEs: FAQItem[] = [
    {
      question: "¿Qué incluye la tarifa base de Landing Pages desde $500.000 COP?",
      answer:
        "La tarifa base desde $500.000 COP incluye una página de aterrizaje moderna de alto impacto visual, arquitectura responsive adaptada a móviles y computadores, velocidad de carga optimizada, integración con formulario de contacto y botón directo a WhatsApp. El valor final depende del alcance, número de secciones, diseño personalizado, funcionalidades e integraciones adicionales que requiera tu negocio.",
      category: "Landing Pages & Web",
    },
    {
      question: "¿Cómo se integra un Agente de Inteligencia Artificial con WhatsApp?",
      answer:
        "Implementamos asistentes inteligentes conectados a la API oficial de WhatsApp Cloud con modelos de lenguaje natural (NLP). El agente se entrena con la información de tus productos o servicios, responde dudas frecuentes en segundos, captura oportunidades comerciales y puede sincronizarse de forma segura con tu base de datos o CRM.",
      category: "Inteligencia Artificial",
    },
    {
      question: "¿Qué tipo de Software a Medida y Sistemas Empresariales desarrollan?",
      answer:
        "Desarrollamos aplicaciones web completas, paneles administrativos, módulos de gestión operativa, sistemas ERP/CRM personalizados, plataformas SaaS y herramientas de automatización. Utilizamos tecnologías modernas y probadas como React, Next.js, Node.js, Python, Java y bases de datos relacionales robustas.",
      category: "Software a Medida",
    },
    {
      question: "¿Quién es el propietario del código fuente y de la solución desarrollada?",
      answer:
        "El cliente es el propietario absoluto de la solución desarrollada. Al culminar el proyecto y formalizar la entrega, transferimos el código fuente completo, accesos y documentación técnica necesaria, respetando la confidencialidad y propiedad intelectual de tu empresa.",
      category: "Garantías & IP",
    },
    {
      question: "¿Ofrecen soporte técnico y mantenimiento después del despliegue?",
      answer:
        "Sí. En SarriaTech Solutions S.A.S. brindamos acompañamiento post-lanzamiento, monitoreo de disponibilidad, resolución de incidencias, actualizaciones de seguridad y paquetes de soporte evolutivo mensual para garantizar que tu plataforma opere sin interrupciones.",
      category: "Soporte de TI",
    },
    {
      question: "¿Cómo puedo solicitar una cotización formal para mi empresa?",
      answer:
        "Puedes completar el formulario de cotización en esta página o comunicarte directamente a nuestro canal de WhatsApp empresarial oficial (+57 322 908 8736). Evaluamos tus requerimientos técnicos y te entregamos una propuesta clara con alcance, cronograma y presupuesto.",
      category: "Cotización & Contratación",
    },
  ];

  const faqsEn: FAQItem[] = [
    {
      question: "What is included in the Landing Pages base price starting at $500,000 COP?",
      answer:
        "The base rate from $500,000 COP includes a high-impact, conversion-focused landing page, fully responsive UI for mobile and desktop, fast loading performance, contact form integration, and direct WhatsApp links. The final quote depends on custom features, number of sections, and required third-party integrations.",
      category: "Landing Pages & Web",
    },
    {
      question: "How are Artificial Intelligence Agents connected to WhatsApp?",
      answer:
        "We engineer intelligent agents connected via the official WhatsApp Cloud API backed by natural language processing (NLP). The AI is trained on your exact business catalog, resolves FAQs 24/7, captures commercial leads, and syncs data directly with your internal CRM or database.",
      category: "Artificial Intelligence",
    },
    {
      question: "What custom software and enterprise systems do you engineer?",
      answer:
        "We build bespoke web applications, administrative dashboards, operational ERP/CRM systems, SaaS platforms, and automated workflow pipelines utilizing battle-tested modern tech like React, Next.js, Node.js, Python, Java, and scalable databases.",
      category: "Custom Software",
    },
    {
      question: "Who owns the source code and intellectual property of the project?",
      answer:
        "The client retains 100% ownership of the developed software and intellectual property. Upon project milestone completion, we hand over clean repositories, documentation, and cloud deployment credentials.",
      category: "Guarantees & IP",
    },
    {
      question: "Do you offer post-launch technical support and maintenance?",
      answer:
        "Yes. SarriaTech Solutions S.A.S. provides post-launch warranty, uptime monitoring, security patching, and ongoing monthly evolutionary maintenance to guarantee system resilience.",
      category: "IT Support",
    },
    {
      question: "How do I request a formal project proposal?",
      answer:
        "You can submit your requirements via the quote form on this landing page or message our direct enterprise WhatsApp (+57 322 908 8736). We analyze your technical scope and deliver a clear proposal with phased deliverables and pricing.",
      category: "Quotes & Onboarding",
    },
  ];

  const faqs = lang === "en" ? faqsEn : faqsEs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-[#03040B]">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[500px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #145CFF 50%, transparent 70%)" }}
      />

      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D1D] border border-[#00E5FF]/30 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "FREQUENT QUESTIONS" : "PREGUNTAS FRECUENTES"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {lang === "en"
              ? "Everything you need to know about our services"
              : "Todo lo que necesitas saber sobre nuestros servicios"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {lang === "en"
              ? "Clear answers regarding pricing, intellectual property, timelines, and technical scope."
              : "Respuestas claras sobre tarifas, propiedad intelectual, plazos de entrega y alcance técnico."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#080D1D] border-[#00E5FF]/60 shadow-[0_0_25px_rgba(0,229,255,0.2)]"
                    : "bg-[#080D1D]/70 border-[#00E5FF]/15 hover:border-[#00E5FF]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#0B1025] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#145CFF] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#A8B3D1] leading-relaxed border-t border-[#00E5FF]/10 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-[#00E5FF]">
                      <span className="px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                        {faq.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => scrollToContactWithService(faq.category)}
                        className="hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>{lang === "en" ? "Inquire about this" : "Consultar este servicio"} &rarr;</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer help callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#080D1D] border border-[#39FF72]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#39FF72]/15 border border-[#39FF72]/40 flex items-center justify-center text-[#39FF72] shrink-0">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === "en" ? "¿Have a custom technical question?" : "¿Tienes una pregunta técnica específica?"}
              </h4>
              <p className="text-xs text-[#A8B3D1]">
                {lang === "en"
                  ? "Chat directly with our lead software engineers."
                  : "Chatea directamente con nuestros ingenieros de software por WhatsApp."}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/573229088736?text=¡Hola%20SarriaTech!%20Tengo%20una%20consulta%20técnica%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#39FF72] text-[#03040B] font-bold text-xs shadow-[0_0_15px_rgba(57,255,114,0.4)] hover:scale-105 transition-all whitespace-nowrap"
          >
            WhatsApp +57 322 908 8736
          </a>
        </div>

      </div>
    </section>
  );
}
