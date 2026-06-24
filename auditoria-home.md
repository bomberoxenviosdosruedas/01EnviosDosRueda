# Auditoría Técnica: Página de Inicio Dinámica (`src/app/page.tsx`)

## 1. Propósito y Contexto Funcional
La página de inicio de **Envíos DosRuedas** actúa como el hub central y la carta de presentación de la plataforma. Su propósito principal es:
- Comunicar la propuesta de valor: mensajería y delivery confiable en Mar del Plata.
- Segmentar a los usuarios hacia los diferentes servicios (Express, LowCost, Flex, Emprendedores).
- Generar confianza a través de estadísticas, visión corporativa y presencia en redes sociales.
- Facilitar la conversión inmediata mediante el CTA principal de "Cotizar Envío".

## 2. Arquitectura de Archivos y Componentes Actuales
- **Archivo Principal:** `src/app/page.tsx` (Server Component por defecto).
- **Estrategia de Carga:** Utiliza `next/dynamic` para todos los componentes "below the fold" para optimizar el LCP y reducir el tiempo de evaluación de scripts.

### Árbol de Dependencias e Importaciones:
1. **OptimizedHeader** (`src/components/homenew/optimized-header.tsx`) - Client Component (vía `HeaderContainer`).
2. **HeroAnimado** (`src/components/homenew/hero-animado.tsx`) - Server Component que envuelve componentes cliente:
   - `HeroBackground` (`src/components/homenew/hero-background.tsx`)
   - `HeroVisuals` (`src/components/homenew/hero-visuals.tsx`)
   - `HeroScrollIndicator` (`src/components/homenew/hero-scroll-indicator.tsx`)
3. **VisionSection** (`src/components/homenew/vision-section.tsx`) - Client Component (Lazy loaded).
4. **ServicesOverview** (`src/components/homenew/services-overview.tsx`) - Client Component (Lazy loaded).
5. **CtaSection** (`src/components/homenew/cta-section.tsx`) - Client Component (Lazy loaded).
6. **EmprendedoresHome** (`src/components/homenew/emprendedores-home.tsx`) - Client Component (Lazy loaded).
7. **SliderServicios** (`src/components/homenew/slider-servicios.tsx`) - Client Component (Lazy loaded).
8. **CarruselRedes** (`src/components/homenew/carrusel-redes.tsx`) - Client Component (Lazy loaded).
9. **Footer** (`src/components/homenew/footer.tsx`) - Server Component (Lazy loaded).

## 3. Composición de Diseño y UI (Tailwind CSS)
- **Fondo General:** `#050810` (Negro profundo de marca).
- **Tipografía:** Orbitron (para títulos impactantes) y Roboto/Inter (para cuerpos de texto).
- **Paleta de Colores:**
  - Primario: `blue-500` / `blue-600` (Envíos, tecnología).
  - Secundario: `yellow-400` / `yellow-500` (Ahorro, LowCost, rapidez).
- **Layout:**
  - Estructura de gradientes lineales verticales (`bg-gradient-to-b`) para transiciones suaves entre secciones oscuras.
  - Uso intensivo de `backdrop-blur-md` y bordes sutiles `white/10` para un efecto "glassmorphism".
  - Grid system de 12 columnas en el Hero y Vision section.
- **Efectos:**
  - Animaciones de entrada `animate-in fade-in slide-in-from-bottom`.
  - Hover effects con `scale-105` y resplandores radiales (`glow-blue`).
  - Imágenes con opacidad baja (0.15 o 0.05) y filtros `grayscale` como texturas de fondo.

## 4. Estructura de Datos, Estados y Lógica Real
- **Hooks React:** `useScroll`, `useTransform`, `useSpring`, `useMotionValue` (de Framer Motion) para efectos de parallax y scroll-driven animations.
- **Lógica de Navegación:** `navGroups` importado de `@/lib/navigation` para centralizar la estructura del menú.
- **Interactividad:**
  - `HeroVisuals`: Efecto de inclinación 3D basado en la posición del mouse (`rotateX`, `rotateY`).
  - `CarruselRedes`: Animación infinita lineal para el feed de imágenes.
- **Optimización:** `ssr: true` en los componentes dinámicos para mantener el SEO mientras se difiere el JS.

## 5. Textos y Copys Literales Actuales

### Hero Section
- **Badge:** "TU SOLUCIÓN CONFIABLE"
- **H1:** "SERVICIO DE MENSAJERÍA Y DELIVERY ENVIOS DOSRUEDAS"
- **Párrafo:** "Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío."
- **Botón Primario:** "SOLICITAR SERVICIO"
- **Botón Secundario:** "VER SERVICIOS"
- **Features sutiles:** "100% SEGURO", "ULTRA RÁPIDO", "COBERTURA TOTAL"

### Vision Section
- **Badge:** "PARTNER LOGÍSTICO ESPECIALIZADO"
- **H2:** "NUESTRA VISIÓN LOGÍSTICA"
- **Párrafo:** "Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio."
- **Stats:**
  - "+5.000" - Confianza local comprobada
  - "7 Años" - Innovación constante en última milla
  - "Flota Exclusiva" - Motocicletas dedicadas para máxima agilidad urbana
- **Interactive Box:** "Conocé más sobre nosotros" / "¿Listo para formar parte de nuestra familia de clientes satisfechos?"

### Services Overview
- **H2:** "SOLUCIONES LOGÍSTICAS"
- **Servicios:**
  - **Envíos Express:** "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación."
  - **Envíos LowCost:** "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día."
  - **Envíos Flex (MercadoLibre):** "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde."
  - **E-Commerce & 3PL:** "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada."

### CTA Section (Emprendedores)
- **H2:** "¿LISTO PARA ESCALAR LA LOGÍSTICA DE TU E-COMMERCE?"
- **Párrafo:** "Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos."
- **Botón WA:** "CONTACTANOS POR WHATSAPP"
- **Botón Tarifas:** "VER TARIFAS 2026"

### Footer
- **Eslogan:** "tu solución confiable"
- **Descripción:** "Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos."
- **Contacto:** 223-660-2699 / matiascejas@enviosdosruedas.com
- **Copyright:** "© 2026 Envios DosRuedas. Todos los derechos reservados."
