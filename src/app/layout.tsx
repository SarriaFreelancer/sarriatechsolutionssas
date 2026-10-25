import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import CyberBackground from "@/components/CyberBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarriatech.tech"),
  title: "SarriaTech Solutions S.A.S. | Desarrollo de Software, Automatización e IA",
  description:
    "Transformamos ideas en soluciones tecnológicas. Especialistas en desarrollo de software a medida, ERP empresarial GNS, tableros analíticos, agentes de IA para WhatsApp y automatización de procesos.",
  keywords: [
    "SarriaTech",
    "SarriaTech Solutions",
    "Desarrollo de Software Colombia",
    "Automatización de procesos",
    "Agentes de IA para WhatsApp",
    "GNS SarriaTech",
    "ERP inventarios",
    "Landing pages Colombia",
    "Software a medida",
    "Sistemas empresariales",
    "Power BI dashboards",
    "David Sarria",
  ],
  authors: [{ name: "SarriaTech Solutions S.A.S." }],
  creator: "SarriaTech Solutions S.A.S.",
  publisher: "SarriaTech Solutions S.A.S.",
  alternates: {
    canonical: "https://sarriatech.tech",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://sarriatech.tech",
    title: "SarriaTech Solutions S.A.S. | Transformamos ideas en soluciones tecnológicas",
    description:
      "Desarrollo de software a medida, automatización de procesos, agentes de inteligencia artificial y soluciones empresariales de alto rendimiento.",
    siteName: "SarriaTech Solutions",
    images: [
      {
        url: "/images/reference-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "SarriaTech Solutions - Software Development, Automation & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SarriaTech Solutions S.A.S. | Soluciones Tecnológicas",
    description: "Desarrollo de software, automatización empresarial y agentes de IA para WhatsApp.",
    images: ["/images/reference-poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sarriatech.tech/#organization",
      name: "SarriaTech Solutions S.A.S.",
      url: "https://sarriatech.tech",
      logo: "https://sarriatech.tech/images/reference-poster.jpeg",
      email: "sarriatech@gmail.com",
      telephone: "+57-322-908-8736",
      sameAs: [
        "https://www.tiktok.com/@sarriatech",
        "https://gns.sarriatech.tech"
      ],
      description: "Empresa tecnológica especializada en desarrollo de software a medida, automatización e IA.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sarriatech.tech/#website",
      url: "https://sarriatech.tech",
      name: "SarriaTech Solutions",
      publisher: {
        "@id": "https://sarriatech.tech/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#03040B] text-[#F7FAFF] selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] min-h-screen relative antialiased">
        <LanguageProvider>
          <CyberBackground />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
