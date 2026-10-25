import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SecurityProvider from "@/components/SecurityProvider";
import CyberBackground from "@/components/CyberBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import AIAgentChatModal from "@/components/AIAgentChatModal";

const keywordsList = [
  // Marca y Entidad
  "SarriaTech",
  "SarriaTech Solutions",
  "SarriaTech Solutions S.A.S.",
  "sarriatech.tech",
  "David Sarria",
  // Desarrollo de Software
  "Desarrollo de Software Colombia",
  "Empresa de Desarrollo de Software Colombia",
  "Desarrollo de Software a Medida",
  "Fábrica de Software Colombia",
  "Software Factory Colombia",
  "Desarrollo de Software Bogotá",
  "Desarrollo de Software Cali",
  "Desarrollo de Software Medellín",
  "Desarrollo de Software Popayán",
  "Desarrollo de Aplicaciones Web",
  "Desarrollo Web Profesional",
  "Diseño Web Colombia",
  "Landing Pages Colombia",
  "Desarrollo Full Stack Next.js React",
  // Automatización & IA
  "Automatización de Procesos RPA Colombia",
  "Automatización Empresarial",
  "Agentes de IA para WhatsApp",
  "Chatbot con Inteligencia Artificial WhatsApp",
  "Integración de IA con WhatsApp Business",
  "Automatizaciones con n8n y Python",
  "Integración de APIs y Webhooks",
  // Productos y Plataformas Propias
  "GNS SarriaTech",
  "Gestión de Negocios SarriaTech",
  "ERP Inventarios Colombia",
  "Software POS Punto de Venta",
  "Nexus SarriaTech",
  "Gestión de Proyectos de Software",
  "VCA Villa Rica Encuestas",
  // Analítica de Datos & BI
  "Tableros Analíticos Power BI",
  "Dashboards Power BI Colombia",
  "Analítica de Datos Empresarial",
  "Consultoría en Business Intelligence",
  "Reportes Automatizados SQL",
  // Consultoría & Transformación Digital
  "Consultoría Tecnológica",
  "Transformación Digital Colombia",
  "Sistemas Empresariales Cloud",
  "Soluciones Tecnológicas Colombia",
  "Custom Software Development Latin America"
];

export const metadata: Metadata = {
  metadataBase: new URL("https://sarriatech.tech"),
  title: "SarriaTech Solutions S.A.S. | Desarrollo de Software a Medida, Automatización e IA",
  description:
    "Transformamos ideas en soluciones tecnológicas. Especialistas en desarrollo de software a medida, ERP empresarial GNS, tableros analíticos Power BI, agentes de IA para WhatsApp y automatización de procesos empresariales.",
  keywords: keywordsList,
  authors: [{ name: "SarriaTech Solutions S.A.S.", url: "https://sarriatech.tech" }],
  creator: "SarriaTech Solutions S.A.S.",
  publisher: "SarriaTech Solutions S.A.S.",
  category: "Technology",
  classification: "Desarrollo de Software, Automatización de Procesos e Inteligencia Artificial",
  alternates: {
    canonical: "https://sarriatech.tech",
    languages: {
      "es-CO": "https://sarriatech.tech",
      "en-US": "https://sarriatech.tech",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://sarriatech.tech",
    title: "SarriaTech Solutions S.A.S. | Transformamos ideas en soluciones tecnológicas",
    description:
      "Desarrollo de software a medida, automatización de procesos empresariales, agentes de IA para WhatsApp y plataformas empresariales de alto impacto.",
    siteName: "SarriaTech Solutions",
    images: [
      {
        url: "/images/reference-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "SarriaTech Solutions - Desarrollo de Software, Automatización e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SarriaTech Solutions S.A.S. | Soluciones Tecnológicas de Alto Impacto",
    description: "Desarrollo de software a medida, automatización empresarial y agentes de IA para WhatsApp.",
    images: ["/images/reference-poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "CO",
    "geo.placename": "Colombia",
    "geo.position": "4.570868;-74.297333",
    "ICBM": "4.570868, -74.297333",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sarriatech.tech/#organization",
      name: "SarriaTech Solutions S.A.S.",
      legalName: "SarriaTech Solutions S.A.S.",
      url: "https://sarriatech.tech",
      logo: "https://sarriatech.tech/images/reference-poster.jpeg",
      email: "sarriatech@gmail.com",
      telephone: "+57-322-908-8736",
      sameAs: [
        "https://www.tiktok.com/@sarriatech",
        "https://gns.sarriatech.tech",
        "https://nexus.sarriatech.tech"
      ],
      description: "Empresa tecnológica especializada en desarrollo de software a medida, automatización de procesos empresariales, agentes de inteligencia artificial y tableros analíticos.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Tecnológicos SarriaTech",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo de Software a Medida",
              description: "Sistemas web y empresariales personalizados con arquitecturas escalables."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatización de Procesos & Agentes de IA WhatsApp",
              description: "Integración de IA con WhatsApp Business y automatización de flujos de trabajo."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "GNS — Gestión de Negocios SarriaTech ERP",
              description: "Plataforma empresarial de control de inventarios, ventas y administración."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tableros Analíticos & Business Intelligence",
              description: "Diseño e implementación de dashboards Power BI y analítica de datos en tiempo real."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sarriatech.tech/#website",
      url: "https://sarriatech.tech",
      name: "SarriaTech Solutions",
      description: "Plataforma oficial de SarriaTech Solutions S.A.S. - Ingeniería de software, automatización e IA.",
      publisher: {
        "@id": "https://sarriatech.tech/#organization"
      },
      inLanguage: ["es-CO", "en-US"]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="keywords" content={keywordsList.join(", ")} />
        <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Colombia" />
        <meta name="geo.position" content="4.570868;-74.297333" />
        <meta name="ICBM" content="4.570868, -74.297333" />
        <meta name="theme-color" content="#03040B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#03040B] text-[#F7FAFF] selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] min-h-screen relative antialiased transition-colors duration-300">
        <ThemeProvider>
          <SecurityProvider>
            <LanguageProvider>
              <CyberBackground />
              <Header />
              <main className="relative z-10">{children}</main>
              <Footer />
              <WhatsAppFloatingButton />
              <AIAgentChatModal />
            </LanguageProvider>
          </SecurityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
