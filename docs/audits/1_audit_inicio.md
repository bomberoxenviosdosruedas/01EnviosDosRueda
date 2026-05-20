---
# Página de Inicio Dinámica (Home)
## 1. Propósito y Contexto Funcional
- Explicación: La página de inicio es el punto de entrada principal a "Envios DosRuedas". Su objetivo es presentar la propuesta de valor ("Tu solución confiable"), destacar los servicios clave (Envíos Express, LowCost, Flex, y Emprendedores), mostrar credibilidad mediante estadísticas y visión, y guiar al usuario hacia la cotización o contacto. Utiliza una carga diferida (Lazy Loading) de componentes por debajo del "fold" para maximizar la velocidad inicial (Script Evaluation y TBT).

## 2. Arquitectura de Archivos y Componentes Actuales
- Ruta: `src/app/page.tsx`
- Tipo: Server Component por defecto (aunque importa componentes cliente).
- Dependencias/Importaciones:
  - `next/dynamic` para Lazy Loading.
  - `OptimizedHeader` desde `@/components/homenew/optimized-header`
  - `HeroAnimado` desde `@/components/homenew/hero-animado`
  - `VisionSection` desde `@/components/homenew/vision-section` (Lazy loaded)
  - `ServicesOverview` desde `@/components/homenew/services-overview` (Lazy loaded)
  - `CtaSection` desde `@/components/homenew/cta-section` (Lazy loaded)
  - `EmprendedoresHome` desde `@/components/homenew/emprendedores-home` (Lazy loaded)
  - `SliderServicios` desde `@/components/homenew/slider-servicios` (Lazy loaded)
  - `CarruselRedes` desde `@/components/homenew/carrusel-redes` (Lazy loaded)
  - `Footer` desde `@/components/homenew/footer` (Lazy loaded)

## 3. Composición de Diseño y UI (Tailwind CSS)
- Desglose visual:
  - Background principal: La página utiliza fondos oscuros profundos con gradientes, ej: `bg-[#050810]`, `bg-gradient-to-b from-[#050810] via-[#0a0a0a] to-[#121212]`, y transiciones hacia verde oscuro y azul (e.g., `from-[#0a1a14] via-[#050810] to-[#050810]`).
  - `HeroAnimado`: Pantalla completa, tipografía Orbitron, botones con `backdrop-blur-sm`, glows (`hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]`), e iconos Lucide (`Play`, `ShieldCheck`, `Zap`, `Globe`). Contiene `HeroVisuals` y `HeroScrollIndicator`. Usa imágenes pero abstraídas en sub-componentes.
  - `VisionSection`: Estructura en grid (`grid-cols-1 lg:grid-cols-12`). Efectos de cristal (`glass-card`), imagen `/hero/mapa_background.jpeg` en un marco curvo (`rounded-[60px]`), efectos hover con framer-motion y decoraciones visuales de luz (`mix-blend-screen`).

## 4. Estructura de Datos, Estados y Lógica Real
- `page.tsx`: No usa hooks directamente, utiliza `next/dynamic` para importación condicional.
- `VisionSection` (Client Component):
  - Utiliza `framer-motion` hooks: `useScroll`, `useTransform` (animación parallax).
  - Variable `features`: Array con objetos `{ icon, title, text }`.
  - Variable `stats`: Array con objetos `{ label, value, color }`.

## 5. Textos y Copys Literales Actuales
- Header/Hero (desde `VisionSection` e inferidos):
  - "100% SEGURO", "ULTRA RÁPIDO", "COBERTURA TOTAL", "Ver Servicios".
- Vision Section:
  - Título: "Nuestra Visión Logística"
  - Subtítulo: "Partner Logístico Especializado"
  - Párrafo: "Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio."
  - Features: "Entregas a Tiempo" ("Puntualidad garantizada en cada envío"), "Envíos Seguros" ("Protección total de tus paquetes").
  - Stats: "Confianza local comprobada" (+5.000), "Innovación constante en última milla" (7 Años), "Motocicletas dedicadas para máxima agilidad urbana" (Flota Exclusiva).
  - Tarjeta de imagen: "Conocé más sobre nosotros", "¿Listo para formar parte de nuestra familia de clientes satisfechos?", "EN LÍNEA".
- Footer:
  - Título: "Envios DosRuedas", "tu solución confiable".
  - Descripción: "Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos."
  - Secciones: "Nosotros" (Sobre Nosotros, Preguntas Frecuentes, Nuestras Redes, Términos y Condiciones, Política de Privacidad), "Servicios" (Envíos Express, Envíos LowCost, Envíos Flex (MeLi), E-Commerce & 3PL), "Contacto Rápido".
  - Contactos: "Ubicación" (Mar del Plata, Argentina), "Teléfono" (223-660-2699), "Email" (matiascejas@enviosdosruedas.com).
  - Banner Trust: "SEGURIDAD CERTIFICADA", "VELOCIDAD MÁXIMA", "COBERTURA DISTRITAL", "STATUS ONLINE".
  - Copyright: "© 2026 Envios DosRuedas. Todos los derechos reservados."
---