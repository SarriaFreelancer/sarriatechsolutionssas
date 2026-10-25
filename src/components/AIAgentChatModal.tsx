"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  Phone, 
  User, 
  RotateCcw, 
  MessageSquare,
  ShieldAlert,
  ChevronDown
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time?: string;
}

export default function AIAgentChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy el Agente de Inteligencia Artificial de SarriaTech Solutions S.A.S. ¿En qué solución tecnológica o servicio puedo asesorarte hoy?",
      time: "Ahora",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-sarriatech-ai-chat", handleOpen);
    return () => window.removeEventListener("open-sarriatech-ai-chat", handleOpen);
  }, []);

  const quickPrompts = [
    "¿Cuánto cuesta una Landing Page?",
    "¿Cómo conectan un Agente de IA a WhatsApp?",
    "¿Qué incluye el software a medida?",
    "¿Cómo es el proceso de contratación?",
  ];

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      role: "user",
      content: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo obtener respuesta del agente.");
      }

      const data = await response.json();
      const replyText =
        data.reply ||
        "Disculpa, no pude procesar la consulta en este momento. Por favor escríbenos directamente a nuestro WhatsApp oficial: +57 322 908 8736.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "En este momento estamos experimentando alta demanda. Puedes consultar directamente con nuestro equipo técnico al WhatsApp +57 322 908 8736 o escribirnos a sarriatech@gmail.com.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Conversación reiniciada. ¿En qué servicio o solución tecnológica de SarriaTech te puedo orientar?",
        time: "Ahora",
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Trigger (bottom-left or alongside WhatsApp button) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#080D1D] text-white border-2 border-[#00E5FF]/60 shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Hablar con el Agente de IA de SarriaTech"
        >
          {/* Pulsing ring */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
          <Bot className="w-5 h-5 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-mono font-bold tracking-wide hidden sm:inline">
            SarriaTech AI · Gemini
          </span>
          <span className="text-xs font-mono font-bold sm:hidden">AI</span>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:left-6 sm:w-[420px] sm:h-[580px] z-50 flex flex-col rounded-none sm:rounded-3xl bg-[#03040B]/95 sm:bg-[#03040B]/95 border-0 sm:border border-[#00E5FF]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,229,255,0.3)] backdrop-blur-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#080D1D] border-b border-[#00E5FF]/20">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-xl bg-[#03040B] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-inner">
                <Bot className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#39FF72] border border-[#080D1D]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5 leading-none">
                  <span>SarriaTech AI</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                    Gemini AI
                  </span>
                </h4>
                <p className="text-[10px] font-mono text-[#39FF72] mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF72] animate-ping" />
                  Asesor de Servicios en línea
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                className="p-1.5 rounded-lg text-[#A8B3D1] hover:text-white hover:bg-[#0B1025] transition-colors"
                title="Reiniciar conversación"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#A8B3D1] hover:text-white hover:bg-[#0B1025] transition-colors"
                title="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-2 bg-[#080D1D]/70 border-b border-[#00E5FF]/10 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0B1025] hover:bg-[#145CFF]/20 border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 text-[#A8B3D1] hover:text-white transition-all shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs sm:text-sm">
            {messages.map((m, idx) => {
              const isAssistant = m.role === "assistant";

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isAssistant ? "items-start" : "items-end"} space-y-1`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                      isAssistant
                        ? "bg-[#080D1D] text-[#F7FAFF] border border-[#00E5FF]/25 shadow-sm rounded-tl-sm"
                        : "bg-gradient-to-r from-[#145CFF] to-[#00E5FF] text-white font-medium rounded-tr-sm shadow-[0_0_15px_rgba(20,92,255,0.3)]"
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.time && (
                    <span className="text-[9px] font-mono text-[#A8B3D1]/60 px-1">
                      {m.time}
                    </span>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#080D1D] border border-[#00E5FF]/25 w-32">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#145CFF] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#FF28D7] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono text-[#A8B3D1] ml-1">Escribiendo</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className="px-3 py-1.5 bg-[#080D1D]/90 border-t border-[#00E5FF]/10 flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#A8B3D1]">¿Prefieres atención humana?</span>
            <a
              href="https://wa.me/573229088736?text=¡Hola%20SarriaTech!%20Vengo%20del%20chat%20de%20la%20página%20y%20quiero%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39FF72] hover:underline flex items-center gap-1 font-bold"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#080D1D] border-t border-[#00E5FF]/20 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre servicios, cotizaciones o tecnología..."
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#03040B] border border-[#00E5FF]/20 focus:border-[#00E5FF] focus:outline-none text-white text-xs sm:text-sm placeholder-[#A8B3D1]/50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#145CFF] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#FF28D7] text-white disabled:opacity-40 transition-all shadow-md"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
