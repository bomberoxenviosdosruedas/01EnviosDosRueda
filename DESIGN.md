---
colors:
  primary:
    DEFAULT: "#2563EB"
    foreground: "#F8FAFC"
    dark: "#3B82F6"
    dark_foreground: "#020817"
  secondary:
    DEFAULT: "#EAB308"
    foreground: "#020817"
    dark: "#EAB308"
    dark_foreground: "#020817"
  background:
    light: "#FFFFFF"
    dark: "#050810"
  foreground:
    light: "#020817"
    dark: "#F8FAFC"
  muted:
    light: "#F1F5F9"
    dark: "#1E293B"
  accent:
    light: "#F1F5F9"
    dark: "#1E293B"
  destructive:
    light: "#EF4444"
    dark: "#991B1B"
  brand:
    mercado_libre_bg: "#FFF159"
    mercado_libre_text: "#333333"
    mercado_libre_accent: "#2D3277"

typography:
  fonts:
    display: "Orbitron, monospace"
    body: "Roboto, sans-serif"
  weights:
    regular: 400
    medium: 500
    bold: 700
  sizes:
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    2xl: "1.5rem"
    3xl: "1.875rem"
    4xl: "2.25rem"

spacing:
  container: "1400px"
  section_padding_mobile: "2rem"
  section_padding_desktop: "4rem"
  gap_standard: "1.5rem"

shadows:
  card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
  hero: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  glass_border: "rgba(255, 255, 255, 0.1)"

borders:
  radius:
    sm: "0.5rem"
    md: "0.625rem"
    lg: "0.75rem"
---

# Sistema de Diseño: Envios DosRuedas

Este documento establece el contrato visual y arquitectónico para **Envios DosRuedas**, una plataforma de logística y mensajería de última milla operando en Mar del Plata, Argentina.

Este estándar de diseño está estructurado en dos capas para facilitar la interpretabilidad tanto por agentes de inteligencia artificial como por ingenieros humanos. La capa superior (YAML) define los tokens exactos del diseño, mientras que este documento (Markdown) detalla la semántica y las reglas de aplicación de dichos tokens.

## Filosofía de Diseño

La identidad visual de **Envios DosRuedas** se centra en proyectar cuatro pilares fundamentales: **Rapidez, Seguridad, Modernidad y Confianza**. El eslogan "Tu Solución Confiable" sirve como ancla para todas las decisiones de diseño.

1.  **Modernidad Glassmorphism**: Implementamos un estética que combina fondos oscuros (`#050810`) con paneles translúcidos (`backdrop-blur-md`, `bg-white/5`), bordes semi-transparentes (`border-white/10`) y brillos sutiles. Esto proyecta una imagen altamente tecnológica, distinguiéndonos de los servicios de mensajería tradicionales.
2.  **Jerarquía Cromática Clara**: Utilizamos un Azul vibrante (`#2563EB`) como color primario para transmitir profesionalidad y un Amarillo/Oro enérgico (`#EAB308`) como color secundario para los llamados a la acción (CTAs) críticos, asegurando que las acciones principales resalten invariablemente sobre los fondos oscuros.
3.  **Contraste Tipográfico**: Combinamos la tipografía **Orbitron** para los encabezados y visuales de gran formato (display), infundiendo una sensación de progreso y tecnología futurista; junto con **Roboto** para el cuerpo de texto, garantizando máxima legibilidad en interfaces densas de datos.

## Reglas de Componentes y UI/UX

### 1. Botones y Llamados a la Acción (CTAs)
- **Primarios**: Los botones de acción principal deben utilizar el color secundario (`#EAB308`) y estar diseñados para destacar en la jerarquía visual.
- **Secundarios/Operativos**: Utilizar el azul principal (`#2563EB`) para acciones estandarizadas del sistema.
- **Interacciones**: Todos los botones interactivos deben incluir un estado visual de *hover*, como una ligera traslación superior (`-translate-y-1`) y escalado (`scale-105`), utilizando Framer Motion cuando sea aplicable.

### 2. Tarjetas (Cards) y Contenedores
- **Glassmorphism en Portales Públicos**: Las tarjetas en la página de aterrizaje (landing) deben hacer uso intensivo de Glassmorphism.
- **Dashboard Operativo**: En las vistas para repartidores y administración, las tarjetas deben priorizar el contraste y la legibilidad reduciendo las transparencias extremas.
- **Elevación**: Utilizar sombras ligeras (`shadow-sm`) en reposo y sombras intensas (`shadow-xl` o `shadow-2xl`) durante los estados de *hover* activo o para elementos destacados como el *Hero section*.

### 3. Fondos y Secciones (Zebra Striping)
- Para facilitar la lectura en el desplazamiento vertical largo (scrolling), las secciones principales deben alternar sutilmente sus fondos (ej. entre `bg-slate-950` y `bg-slate-900` para un efecto "zebra striping").
- Integrar animaciones sutiles de fondo (como rotaciones lentas `animate-spin-slow` o elementos flotantes `animate-float`) únicamente en zonas donde no compitan con la lectura de datos vitales.

### 4. Directrices Específicas de Branding
- **Mercado Libre / Envíos Flex**: Cualquier sección, tarjeta o indicador asociado con *Mercado Libre* o *Envíos Flex* DEBE acatar estrictamente los colores de la marca:
  - Fondo: `#FFF159`
  - Texto: `#333333` (Slate-900)
  - Acentos/Iconografía: `#2D3277`

### 5. Accesibilidad y Usabilidad
- Asegurar alto contraste en el texto sobre cualquier fondo.
- No omitir los estados `focus-visible` (anillo de foco en `#2563EB` o equivalente) para asegurar navegación fluida mediante teclado.
- Todas las animaciones que usen `framer-motion` deben estar encapsuladas en directivas de `"use client"`.