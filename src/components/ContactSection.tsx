"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import LegalModal from "./LegalModal";
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  ShieldCheck 
} from "lucide-react";

export default function ContactSection() {
  const { t, selectedService, setSelectedService } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "Colombia",
    service: "",
    estimatedBudget: "",
    description: "",
    preferredChannel: "whatsapp" as "whatsapp" | "email" | "call",
    privacyAccepted: false,
    honeypot: "", // anti-spam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showLegalModal, setShowLegalModal] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic validation
    if (!formData.fullName.trim()) {
      setErrorMessage("Por favor ingresa tu nombre completo.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor ingresa un correo electrónico válido.");
      return;
    }
    if (!formData.service) {
      setErrorMessage("Por favor selecciona un servicio de interés.");
      return;
    }
    if (!formData.description.trim()) {
      setErrorMessage("Por favor cuéntanos brevemente acerca de tu proyecto.");
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMessage("Debes aceptar el tratamiento de datos personales para continuar.");
      return;
    }

    // Bot honeypot check
    if (formData.honeypot) {
      // Silently ignore bot submission
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("No se pudo procesar la solicitud en el servidor");
      }

      setSubmitStatus("success");
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00E5FF", "#145CFF", "#FF28D7", "#39FF72"],
        });
      } catch {
        // ignore if not loaded
      }
    } catch (err: unknown) {
      const error = err as Error;
      setSubmitStatus("error");
      setErrorMessage(error.message || t.contact.form.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate direct WhatsApp link with prefilled form details
  const getWhatsAppLink = () => {
    const serviceText = formData.service || "Desarrollo de Software / Soluciones Tecnológicas";
    const nameText = formData.fullName ? `Mi nombre es ${formData.fullName}. ` : "";
    const descText = formData.description ? `Requerimiento: ${formData.description}. ` : "";
    const budgetText = formData.estimatedBudget ? `Presupuesto estimado: ${formData.estimatedBudget}. ` : "";
    
    const message = encodeURIComponent(
      `¡Hola SarriaTech Solutions! ${nameText}Estoy interesado en cotizar el servicio de *${serviceText}*. ${descText}${budgetText}`
    );
    return `https://wa.me/573229088736?text=${message}`;
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden bg-[#080D1D]">
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full blur-[190px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, #145CFF 50%, transparent 70%)" }}
      />
      <div 
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B3DFF 0%, #FF28D7 50%, transparent 70%)" }}
      />

      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03040B] border border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#00E5FF] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3D1]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Direct Channels & Verified Business Details (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#03040B]/90 border border-[#00E5FF]/30 shadow-[0_0_25px_rgba(0,229,255,0.15)] backdrop-blur-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider block mb-1">
                  SarriaTech Solutions S.A.S.
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {t.contact.directContact.title}
                </h3>
                <p className="text-sm text-[#A8B3D1] mt-2">
                  {t.contact.directContact.personalizedAttention}
                </p>
              </div>

              {/* Direct WhatsApp Callout - Exact official number 322 908 8736 */}
              <a
                href="https://wa.me/573229088736"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#080D1D] border-2 border-[#39FF72]/40 hover:border-[#39FF72] shadow-[0_0_20px_rgba(57,255,114,0.2)] hover:shadow-[0_0_30px_rgba(57,255,114,0.4)] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#39FF72]/15 border border-[#39FF72]/40 flex items-center justify-center text-[#39FF72] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#39FF72] block font-bold">
                    WHATSAPP EMPRESARIAL
                  </span>
                  <span className="text-lg font-black text-white font-mono">
                    322 908 8736
                  </span>
                  <span className="text-[11px] text-[#A8B3D1] block">
                    (+57 322 908 8736) · Respuesta ágil
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sarriatech@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#080D1D] border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#145CFF]/15 border border-[#145CFF]/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00E5FF] block">
                    CORREO EMPRESARIAL
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    sarriatech@gmail.com
                  </span>
                  <span className="text-[11px] text-[#A8B3D1] block">
                    contacto@sarriatech.tech
                  </span>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@sarriatech"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#080D1D] border border-[#FF28D7]/30 hover:border-[#FF28D7] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF28D7]/15 border border-[#FF28D7]/40 flex items-center justify-center text-[#FF28D7] group-hover:scale-110 transition-transform font-black">
                  TT
                </div>
                <div>
                  <span className="text-xs font-mono text-[#FF28D7] block font-bold">
                    TIKTOK OFICIAL
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    @sarriatech
                  </span>
                  <span className="text-[11px] text-[#A8B3D1] block">
                    Contenido tecnológico y proyectos
                  </span>
                </div>
              </a>

              {/* Official Domain */}
              <div className="p-4 rounded-2xl bg-[#080D1D] border border-[#00E5FF]/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#A8B3D1] block">
                    DOMINIO OFICIAL VERIFICADO
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    https://sarriatech.tech
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Contact & Quote Form (Right Column) */}
          <div className="lg:col-span-7">
            
            <div className="p-6 sm:p-10 rounded-3xl bg-[#03040B]/90 border border-[#00E5FF]/30 shadow-[0_0_35px_rgba(20,92,255,0.2)] backdrop-blur-xl">
              
              {submitStatus === "success" ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#39FF72]/15 border-2 border-[#39FF72] text-[#39FF72] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(57,255,114,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-base text-[#A8B3D1] max-w-md mx-auto">
                    {t.contact.form.successMessage}
                  </p>
                  
                  <div className="pt-4">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#39FF72] to-[#00E5FF] text-[#03040B] font-bold text-sm shadow-[0_0_20px_rgba(57,255,114,0.5)] hover:scale-105 transition-all"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>{t.contact.form.whatsappDirectBtn}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Row 1: Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                        {t.contact.form.fullName} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.fullNamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.form.companyPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Country and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                        {t.contact.form.country} *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.countryPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                        {t.contact.form.service} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        aria-label="Servicio de interés"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                      >
                        <option value="">{t.contact.form.servicePlaceholder}</option>
                        <option value="Landing Pages">Landing Pages (Desde $500.000 COP)</option>
                        <option value="Diseño y Desarrollo Web">Diseño y Desarrollo Web</option>
                        <option value="Desarrollo de Software a Medida">Desarrollo de Software a Medida</option>
                        <option value="Sistemas Empresariales (ERP/CRM)">Sistemas Empresariales (ERP / CRM)</option>
                        <option value="GNS — Gestión de Negocios SarriaTech">GNS — Gestión de Negocios SarriaTech</option>
                        <option value="NEXUS — Gestión de Proyectos">NEXUS — Gestión de Proyectos</option>
                        <option value="VCA VILLA RICA — Analítica">VCA VILLA RICA — Analítica</option>
                        <option value="Automatización de Procesos">Automatización de Procesos</option>
                        <option value="Agentes de IA para WhatsApp">Agentes de IA para WhatsApp</option>
                        <option value="Consultoría de Software">Consultoría de Software</option>
                        <option value="Tarjetas Digitales y Branding">Tarjetas Digitales y Branding</option>
                        <option value="Soporte y Mantenimiento de TI">Soporte y Mantenimiento de TI</option>
                        <option value="Asesorías Tecnológicas">Asesorías Tecnológicas</option>
                        <option value="Tableros Analíticos y BI">Tableros Analíticos y BI</option>
                        <option value="APIs e Integraciones">APIs e Integraciones</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label htmlFor="estimatedBudget" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                      {t.contact.form.estimatedBudget}
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      aria-label="Rango de presupuesto"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all"
                    >
                      <option value="">Selecciona un rango...</option>
                      {t.contact.form.budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                      {t.contact.form.description} *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.form.descriptionPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Preferred Channel */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#A8B3D1] mb-1.5">
                      {t.contact.form.preferredChannel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["whatsapp", "email", "call"] as const).map((channel) => (
                        <button
                          key={channel}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, preferredChannel: channel }))}
                          className={`py-2 px-3 rounded-lg text-xs font-mono border transition-all ${
                            formData.preferredChannel === channel
                              ? "bg-[#145CFF]/20 text-[#00E5FF] border-[#00E5FF] font-bold"
                              : "bg-[#080D1D] text-[#A8B3D1] border-[#00E5FF]/20 hover:text-white"
                          }`}
                        >
                          {t.contact.form.channels[channel]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Privacy policy checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded bg-[#080D1D] border-[#00E5FF]/40 text-[#00E5FF] focus:ring-[#00E5FF]"
                    />
                    <label htmlFor="privacyAccepted" className="text-xs text-[#A8B3D1] leading-relaxed cursor-pointer">
                      {t.contact.form.privacyText}{" "}
                      <button
                        type="button"
                        onClick={() => setShowLegalModal(true)}
                        className="text-[#00E5FF] underline font-semibold hover:text-white"
                      >
                        (Ver política de tratamiento)
                      </button>
                    </label>
                  </div>

                  {/* Error display */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#145CFF] via-[#00E5FF] to-[#8B3DFF] hover:from-[#00E5FF] hover:to-[#FF28D7] shadow-[0_0_20px_rgba(20,92,255,0.45)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.contact.form.sendingBtn : t.contact.form.submitBtn}</span>
                    </button>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-sm text-[#03040B] bg-[#39FF72] hover:bg-[#39FF72]/90 shadow-[0_0_20px_rgba(57,255,114,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>

      <LegalModal
        isOpen={showLegalModal}
        onClose={() => setShowLegalModal(false)}
        initialDoc="dataTreatment"
      />
    </section>
  );
}
