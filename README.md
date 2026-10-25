# SarriaTech Solutions S.A.S. — Landing Page Oficial

> **"Transformamos ideas en soluciones tecnológicas"**  
> Dominio oficial: [https://sarriatech.tech](https://sarriatech.tech)

Landing page futurista, interactiva y de alto impacto visual desarrollada para **SarriaTech Solutions S.A.S.**, empresa colombiana especializada en desarrollo de software a medida, plataformas empresariales, automatización de procesos, inteligencia artificial y analítica de datos.

---

## 🎨 1. Dirección Artística: Cyberpunk Empresarial Premium

Inspirada directamente en la identidad visual de la empresa:
- **Fondo principal:** `#03040B` (Negro profundo espacial)
- **Fondo secundario:** `#080D1D` (Azul medianoche oscuro)
- **Superficie de tarjetas:** `#0B1025` (Vidrio oscuro y paneles de datos)
- **Azul eléctrico:** `#145CFF` (Estructura y confianza)
- **Cian brillante:** `#00E5FF` (Acentos de código, luces y enlaces activos)
- **Violeta profundo:** `#8B3DFF` (Profundidad, arquitectura y consultoría)
- **Magenta neón:** `#FF28D7` (Acentos dinámicos y estados de foco)
- **Verde neón:** `#39FF72` (WhatsApp empresarial y estados de alta disponibilidad)
- **Dorado tecnológico:** `#FFC247` (Asesorías y capas ejecutivas)

---

## 🚀 2. Productos Propios Integrados

1. **GNS — Gestión de Negocios SarriaTech:**
   - URL en vivo: [https://gns.sarriatech.tech/](https://gns.sarriatech.tech/)
   - Módulos verificados: Control de inventarios, gestión de productos, ventas POS, proveedores, compras y analítica multi-usuario.
   - Mockup con indicadores reales ($533.120.000 valor inventario, 2.808 unidades de stock).
2. **NEXUS — Gestión de Proyectos de Software:**
   - URL en vivo: [https://nexus.sarriatech.tech/](https://nexus.sarriatech.tech/) (*SarriaTech Studio | Nexus Enterprise Platform*)
   - Solución operativa para equipos de ingeniería, sprints ágiles, tableros Kanban, seguimiento de entregables y gestión de clientes.
3. **VCA VILLA RICA — Sistema de Analítica:**
   - URL en vivo: [https://encuestas.sarriatech.tech/](https://encuestas.sarriatech.tech/)
   - Plataforma de Business Intelligence y encuestas con visualización gráfica interactiva y filtros por períodos para toma de decisiones gerenciales.

---

## 🛠️ 3. Catálogo de Servicios (12 Especialidades)

Cada tarjeta cuenta con su gradiente de color representativo, elevación hover y botón directo que auto-selecciona el servicio en el formulario de cotización:

1. **Landing Pages** (Azul eléctrico) — *Tarifa de referencia: Desde $500.000 COP (sujeto a alcance, diseño e integraciones)*
2. **Diseño y Desarrollo Web** (Violeta)
3. **Desarrollo de Software a Medida** (Magenta y Violeta)
4. **Sistemas Empresariales** (Azul)
5. **Automatización de Procesos** (Cian)
6. **Agentes de IA para WhatsApp** (Violeta y Cian)
7. **Consultoría de Software** (Violeta)
8. **Tarjetas Digitales y Branding** (Magenta)
9. **Soporte y Mantenimiento de TI** (Azul-Cian)
10. **Asesorías Tecnológicas** (Dorado moderado)
11. **Tableros Analíticos y Reportes** (Verde-Cian)
12. **APIs e Integraciones** (Azul eléctrico)

---

## 🤖 4. Agente de IA en Vivo & Módulos Interactivos

- **Agente de IA Oficial (Google Gemini API):**  
  Asistente conversacional en tiempo real integrado mediante la API route `/api/chat` con modelos **Gemini 2.0 / 1.5 Flash**. Asesora a visitantes sobre los 12 servicios tecnológicos, responde dudas técnicas y canaliza oportunidades a WhatsApp. *(Las consultas sobre la plataforma GNS se redirigen cortésmente a su web oficial https://gns.sarriatech.tech).*
- **Estimador Interactivo de Presupuestos (`BudgetEstimator`):**  
  Calculadora cibernética donde el cliente combina servicios base y módulos adicionales (pasarelas, autenticación, APIs) con cálculo dinámico y envío directo a WhatsApp.
- **Preguntas Frecuentes de Alta Conversión (`FAQSection`):**  
  Acordeón con respuestas concretas sobre precios base ($500.000 COP), metodología, propiedad intelectual y soporte.
- **Marco Legal Corporativo (`LegalModal`):**  
  Visualización modal de la Política de Tratamiento de Datos (Ley 1581 de 2012 de Colombia), Términos de Servicio y Garantías Técnicas.

---

## ⚙️ 5. Arquitectura Técnica

- **Framework:** Next.js 15 (App Router)
- **Librería de UI:** React 19 + TypeScript
- **Motor de Inteligencia Artificial:** Google Gemini API (REST Endpoint `/api/chat`)
- **Estilos:** Tailwind CSS v4 con variables personalizadas y animaciones
- **Iconografía:** Lucide React
- **Internacionalización:** Contexto reactivo Español (ES) / Inglés (EN)
- **SEO & Rendimiento:** Metadatos completos Open Graph, Twitter Cards, JSON-LD Schema.org (`Organization`, `WebSite`), `robots.ts` y `sitemap.ts`
- **Seguridad:** Formulario con honeypot anti-spam, sanitización de inputs y API routes `/api/contact` y `/api/chat`

---

## 💻 6. Puesta en Marcha Local

### Prerrequisitos
- Node.js >= 18.17 (Recomendado Node 20 o 22)
- npm o pnpm

### Instalación
```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre en tu navegador [http://localhost:3000](http://localhost:3000).

---

## 🌐 6. Despliegue a Producción y Dominio Oficial

### Dominio: `sarriatech.tech`

#### Despliegue en Vercel (Recomendado):
1. Sube este repositorio a GitHub.
2. Importa el proyecto en [Vercel](https://vercel.com).
3. Añade el dominio personalizado `sarriatech.tech` y `www.sarriatech.tech` en la pestaña **Settings > Domains**.
4. Configura los registros DNS en tu proveedor de dominio:
   - **Registro A:** `@` apuntando a `76.76.21.21`
   - **Registro CNAME:** `www` apuntando a `cname.vercel-dns.com`

#### Despliegue en VPS Linux (Docker / PM2):
```bash
# Generar build de producción
npm run build

# Iniciar servidor en segundo plano
npm run start
```

---

## 📞 Canales Oficiales Verificados

- **WhatsApp Empresarial:** [+57 322 908 8736](https://wa.me/573229088736)
- **Correo Electrónico:** [sarriatech@gmail.com](mailto:sarriatech@gmail.com)
- **TikTok Oficial:** [@sarriatech](https://www.tiktok.com/@sarriatech)
- **Web Oficial:** [https://sarriatech.tech](https://sarriatech.tech)
- **Plataforma ERP:** [https://gns.sarriatech.tech](https://gns.sarriatech.tech)
