import { NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `Eres el Agente de Inteligencia Artificial oficial de SarriaTech Solutions S.A.S. (https://sarriatech.tech), empresa especializada en desarrollo de software a medida, soluciones tecnológicas, automatización, inteligencia artificial y analítica.

Tu rol:
- Asesorar a empresas y clientes sobre los 12 servicios tecnológicos de SarriaTech.
- Brindar respuestas técnicas claras, directas, profesionales y con lenguaje tecnológico moderno.
- Guiar a los usuarios para que coticen su proyecto en el formulario de la landing o mediante el WhatsApp oficial (+57 322 908 8736).

Catálogo de Servicios de SarriaTech:
1. Landing Pages: Páginas de alto impacto y conversión. Tarifa base desde $500.000 COP (el valor final depende del alcance, diseño, funcionalidades e integraciones requeridas).
2. Diseño y Desarrollo Web: Sitios corporativos interactivos, diseño responsive y arquitectura moderna.
3. Desarrollo de Software a Medida: Aplicaciones web y de escritorio diseñadas específicamente para la operación del cliente.
4. Sistemas Empresariales: ERP, CRM y plataformas de control a la medida.
5. Automatización de Procesos: Flujos de trabajo automáticos que eliminan tareas repetitivas y reducen tiempos operativos.
6. Agentes de IA para WhatsApp: Asistentes conversacionales inteligentes conectados 24/7 para atención, consultas y captura de clientes.
7. Consultoría de Software: Diagnóstico de arquitectura, selección tecnológica y acompañamiento estratégico.
8. Tarjetas Digitales y Branding: Identidad digital interactiva con QR y perfiles de contacto corporativos.
9. Soporte y Mantenimiento de TI: Monitoreo, actualizaciones, correcciones y alta disponibilidad.
10. Asesorías Tecnológicas: Mentoría para directivos y líderes en transformación digital.
11. Tableros Analíticos y Reportes: Business Intelligence, dashboards y visualización de KPIs para toma de decisiones.
12. APIs e Integraciones: Conexión segura entre sistemas, pasarelas de pago y plataformas de terceros.

REGLA ESTRICTA SOBRE GNS:
- Si el usuario pregunta por GNS (Gestión de Negocios SarriaTech / Inventarios), aclara cordialmente que GNS cuenta con su propia plataforma dedicada en https://gns.sarriatech.tech/ y que en SarriaTech atendemos el desarrollo de software a medida y los servicios tecnológicos arriba descritos.

Contacto Oficial:
- WhatsApp Empresarial: +57 322 908 8736 (322 908 8736)
- Correo: sarriatech@gmail.com
- Web: https://sarriatech.tech
- Sede: Valle del Cauca, Colombia.

Formato de respuestas:
- Máximo 2 a 3 párrafos o puntos clave concisos.
- Sé cordial, tecnológico y resolutivo. Invita amablemente al usuario a iniciar su cotización o escribir al WhatsApp oficial.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "No se proporcionaron mensajes para procesar." },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_AI_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // If an API key is present, invoke Google Gemini API
    if (apiKey) {
      try {
        // Map messages into Gemini's contents format
        const contents = messages.slice(-8).map((m: { role: string; content: string }) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

        const candidateModels = ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
        
        for (const model of candidateModels) {
          try {
            const response = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  systemInstruction: {
                    parts: [{ text: SYSTEM_INSTRUCTION }],
                  },
                  contents: contents,
                  generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 600,
                  },
                }),
              }
            );

            if (response.ok) {
              const data = await response.json();
              const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (aiReply) {
                return NextResponse.json({ reply: aiReply, provider: model });
              }
            } else {
              const errBody = await response.text();
              console.warn(`[Gemini API ${model} failed]:`, response.status, errBody);
            }
          } catch (modelErr) {
            console.warn(`[Gemini API ${model} request error]:`, modelErr);
          }
        }
      } catch (geminiErr) {
        console.warn("Fallo temporal en llamada directa a Gemini API:", geminiErr);
      }
    }

    // Knowledge-based Intelligent Fallback Engine (runs if no key or API temporarily unavailable)
    const lower = lastUserMessage.toLowerCase();
    let reply = "";

    if (lower.includes("gns") || lower.includes("inventario")) {
      reply =
        "Para todo lo relacionado con la plataforma GNS (Gestión de Negocios e Inventarios), puedes acceder directamente a su sitio web oficial en https://gns.sarriatech.tech/. Aquí en SarriaTech Solutions nos enfocamos exclusivamente en desarrollo de software a medida, automatizaciones, analítica y servicios tecnológicos.";
    } else if (lower.includes("landing") || lower.includes("500") || lower.includes("precio") || lower.includes("cuanto cuesta") || lower.includes("costo")) {
      reply =
        "En SarriaTech desarrollamos Landing Pages de alto impacto visual y conversión desde $500.000 COP base. El valor final depende del alcance, número de secciones, diseño e integraciones requeridas. Para proyectos de software a medida o sistemas empresariales, evaluamos el requerimiento para entregarte una propuesta precisa.";
    } else if (lower.includes("whatsapp") || lower.includes("bot") || lower.includes("agente") || lower.includes("ia")) {
      reply =
        "Desarrollamos Agentes de Inteligencia Artificial conectados a WhatsApp con procesamiento de lenguaje natural y conexión a tus bases de datos o sistemas. Atienden 24/7, responden consultas frecuentes, capturan prospectos y gestionan solicitudes en tiempo real.";
    } else if (lower.includes("tiempo") || lower.includes("plazo") || lower.includes("cuanto demora")) {
      reply =
        "El tiempo de desarrollo depende de la complejidad de la solución. Una Landing Page suele tomar entre 3 y 7 días hábiles, mientras que un sistema a medida o automatización se planifica mediante entregas ágiles semanales con revisiones continuas.";
    } else if (lower.includes("contacto") || lower.includes("telefono") || lower.includes("correo")) {
      reply =
        "Puedes comunicarte directamente con el equipo de SarriaTech Solutions S.A.S. a través de nuestro WhatsApp empresarial oficial al +57 322 908 8736 o por correo a sarriatech@gmail.com. También puedes completar el formulario de cotización en esta página.";
    } else {
      reply =
        `En SarriaTech Solutions S.A.S. diseñamos y desarrollamos soluciones tecnológicas a medida: Landing Pages, aplicaciones web, automatización de procesos, agentes de IA para WhatsApp, tableros de analítica y sistemas empresariales.\n\n¿Tienes un proyecto en mente? Cuéntame los detalles o contáctanos por WhatsApp al +57 322 908 8736 para asesorarte de inmediato.`;
    }

    return NextResponse.json({ reply, provider: "knowledge-engine" });
  } catch (error) {
    console.error("Error en API /api/chat:", error);
    return NextResponse.json(
      { error: "Error interno en el servidor de chat." },
      { status: 500 }
    );
  }
}
