import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      company,
      email,
      phone,
      country,
      service,
      estimatedBudget,
      description,
      preferredChannel,
      privacyAccepted,
      honeypot,
    } = body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Request received" }, { status: 200 });
    }

    // Required fields validation
    if (!fullName || !email || !service || !description || !privacyAccepted) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios para procesar la cotización." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato de correo electrónico no es válido." },
        { status: 400 }
      );
    }

    // Structured lead payload
    const leadData = {
      timestamp: new Date().toISOString(),
      fullName: String(fullName).trim(),
      company: company ? String(company).trim() : "No especificada",
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "No especificado",
      country: String(country || "Colombia").trim(),
      service: String(service).trim(),
      estimatedBudget: estimatedBudget ? String(estimatedBudget).trim() : "No especificado",
      description: String(description).trim(),
      preferredChannel: preferredChannel || "whatsapp",
      targetCompany: "SarriaTech Solutions S.A.S.",
    };

    // Log the lead for server runtime logs
    console.log("[NUEVO LEAD RECIBIDO - SARRIA TECH]:", JSON.stringify(leadData, null, 2));

    // If an external SMTP or webhook URL is configured via environment variable, trigger it safely
    if (process.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.error("Error al despachar webhook de lead:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Cotización recibida con éxito por SarriaTech Solutions S.A.S.",
        leadId: `ST-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API /api/contact:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar la solicitud." },
      { status: 500 }
    );
  }
}
