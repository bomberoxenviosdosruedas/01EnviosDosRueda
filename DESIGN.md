# Design System: Envíos DosRuedas (Sovereign Infrastructure & Heritage Logistics)

> **Documento Maestro de Arquitectura Visual, Sistema de Diseño Semántico y Directrices de Generación (2026)**  
> Integra las especificaciones de marca de `AGENTS.md`, tokens de `src/app/globals.css`, fichas de diseño de `docs/diseno/` y los estándares de diseño semántico sin clichés de IA.

---

## 1. Visual Theme & Atmosphere

### 1.1 Metas de Calibración Sensorial (Taste Spectrum)
- **Creativity:** **9/10** — Personalidad urbana costera marplatense, tipografía de signalética vial y tarjetas de profundidad gravitacional.
- **Variance:** **8/10** — Grillas asimétricas Bento (7/5/12 columnas), titulares con acento tipográfico rotado (-1°) y composición offset.
- **Motion:** **7/10** — Coreografía cinemática con física de resortes (`stiffness: 100, damping: 20`), micro-interacciones perpetuas y tilt 3D flotante.
- **Density:** **6/10** — Balance óptimo entre la precisión de un panel de logística en tiempo real y la respiración visual de un servicio premium.

### 1.2 Narrativa de Atmósfera
La experiencia visual de **Envíos DosRuedas** proyecta la solidez y agilidad de una infraestructura logística soberana con 15+ años de trayectoria en las calles de Mar del Plata. El ambiente combina el rigor funcional de la señalética vial con la sofisticación de una plataforma tecnológica moderna. Fondos ultra limpios en Blanco Puro contrastan con bloques monumentales en Azul Egipcio Institucional (`#0636A5`) y acentos de alta energía en Amarillo Vial Eléctrico (`#FFEC01`). La interacción es táctil, responsiva y tangible: cada botón ofrece resistencia física al click y las tarjetas flotan con elevación gravitacional auténtica.

---

## 2. Color Palette & Roles (Ley de Tres Colores)

> ⚠️ **REGLA FUNDAMENTAL DE MARCA:** El sistema cromático utiliza **ÚNICAMENTE TRES COLORES CORPORATIVOS**: Azul Egipcio, Amarillo Vial Eléctrico y Blanco Puro. Quedan terminantemente prohibidas las escalas genéricas de Tailwind (`slate-*`, `gray-*`, `zinc-*`, `neutral-*`) y colores ajenos a la identidad oficial.

### 2.1 Tabla Maestra de Tokens Cromáticos

| Rol Semántico | Nombre Descriptivo | Token CSS / Tailwind | Valor Hex | Función en la Interfaz |
|---|---|---|---|---|
| **Primary Canvas / Trust** | **Egyptian Brand Blue** | `--brand-blue` / `brand-blue-700` | `#0636A5` | Headers, footers, navegación, secciones invertidas oscuras, títulos H1/H2, bordes institucionales. |
| **Accent / Action / CTA** | **Electric Signal Yellow** | `--brand-yellow` / `brand-yellow-500` | `#FFEC01` | Botones de acción primaria (CTAs), badges destacados, status dots activos, anillos de stepper, focus rings. |
| **Surface Base / Canvas** | **Pure Canvas White** | `--brand-white` / `brand-white-50` | `#FFFFFF` | Fondo base de páginas, núcleo interno de tarjetas (inner bezel), campos de formulario, modales y tablas. |
| **Outer Bezel / Soft Canvas** | **Ice Blue Soft Tint** | `--brand-blue-50` / `brand-blue-50` | `#E6EEFE` | Contenedores exteriores de tarjetas Double Bezel, fondos alternados suaves, overlays sutiles. |
| **Structural Border** | **Deep Blueprint Border** | `--brand-blue-100` / `brand-blue-100` | `#BACEFD` | Bordes perimetrales de tarjetas, divisores estructurales de 1px, líneas inactivas de steppers. |
| **Interactive Blue Hover** | **Ultramarine Action** | `--brand-blue-500` / `brand-blue-500` | `#0950F6` | Botones interactivos secundarios, estado activo de navegación, anillos de foco primario. |
| **High-Contrast Text** | **Deep Blue Ink** | `--brand-ink` / `brand-blue-ink` | `#00277C` | Texto de cuerpo de alta legibilidad, párrafos descriptivos, inputs. |
| **Ultra Deep Void** | **Midnight Blue Abyss** | `--brand-blue-950` / `brand-blue-950` | `#021440` | Footer profundo, fondo de modales críticos, contraste extremo. |
| **Pressed Yellow Accent** | **Amber Flare Active** | `--brand-yellow-600` / `brand-yellow-600` | `#E6D400` | Estado presionado (`:active`) de botones CTA y badges de alta prioridad. |

---

## 3. Typography Rules & Architecture

### 3.1 Familias Tipográficas Oficiales

- **Display / Titulares de Impacto:** `Anton` / `Anton SC` (700-800)
  - *Rol:* Titulares H1 y H2 monumentales, signalética vial de impacto, números de estadísticas clave.
  - *Tratamiento:* Uppercase obligatorio, interlineado ultra compacto (`leading-[0.85-1.0]`), tracking negativo (`-0.05em` a `-0.025em`).
- **Subtitulares / UI Labels / Badges:** `Bebas Neue` (600-700)
  - *Rol:* Subtítulos, botones CTA, etiquetas de navegación, headers de tabla, badges de servicio.
  - *Tratamiento:* Uppercase obligatorio, tracking expandido (`tracking-wider` a `tracking-widest`), presencia bold.
- **Cuerpo / Textos de Lectura:** `Outfit` + `IBM Plex Sans` (400-600)
  - *Rol:* Párrafos, descripciones de servicio, inputs de formulario, textos legales y tooltips.
  - *Tratamiento:* Sentence case natural, interlineado relajado (`leading-relaxed` / 1.625), ancho máximo de lectura de 65 caracteres (`max-w-prose`).
- **Métricas / Tarifas / Rastreo:** `Geist Mono` (500-700)
  - *Rol:* Tarifas en pesos argentinos (`$4.600 ARS`), códigos de tracking, coordenadas, distancias (`tabular-nums`).
  - *Tratamiento:* Monospace estricto, alineación tabular.

### 3.2 Escala Jerárquica

```css
--text-9xl: 9rem;     /* 144px — Hero display monumental */
--text-7xl: 4.5rem;   /* 72px  — H1 principal */
--text-5xl: 3rem;     /* 48px  — H2 de secciones clave */
--text-3xl: 1.875rem; /* 30px  — H3 de tarjetas y bento cards */
--text-xl:  1.25rem;  /* 20px  — Subtítulos y navegación */
--text-base: 1rem;    /* 16px  — Párrafos y descripciones */
--text-sm:  0.875rem; /* 14px  — Textos secundarios y controles */
--text-xs:  0.75rem;  /* 12px  — Badges y micro-copy */
```

### 3.3 Tratamientos de Firma Tipográfica
1. **Knockout Rotado (-1°):** Bloque de texto con fondo Azul 700 y letras en Amarillo 500 con leve inclinación `transform: rotate(-1deg)`.
2. **Titular Outline Transparente:** Texto itálico display con relleno transparente y trazo perimetral `-webkit-text-stroke: 2px #0636A5`.
3. **Kinetic Font Stretch:** Micro-interacción en elementos clave que expande `scaleX(1.08)` y `letter-spacing: 0.04em` en hover.

---

## 4. Component Stylings & Interaction Behaviors

### 4.1 Double Bezel Card (Núcleo de Diseño)
Estructura arquitectónica de doble marco aplicada a todas las tarjetas sobre fondo claro:
```html
<div class="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float transition-all duration-300 hover:shadow-antigravity-deep hover:border-brand-blue-300">
  <div class="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm overflow-hidden">
    <!-- Contenido -->
  </div>
</div>
```
- **Marco Exterior (Outer):** `bg-brand-blue-50/80`, borde `border-brand-blue-100`, radio `rounded-2xl` (16px), padding `p-2` (8px).
- **Marco Interior (Inner):** `bg-white`, radio `rounded-xl` (12px), sombra interna suave `shadow-sm`.
- **Comportamiento Hover:** Elevación de sombra `shadow-antigravity-deep` y transición fluida del borde a `brand-blue-300`.

### 4.2 CTA Nested Pill (Botón de Conversión Primario)
Botón con forma de pastilla redondeada completa (`rounded-full`) que aloja un glifo de acción autónomo:
```html
<a class="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 font-subheading font-bold uppercase tracking-wider px-8 py-3 rounded-full flex items-center justify-between shadow-accent-sm hover:shadow-cta-glow transition-all active:scale-[0.98]" href="/cotizar/express">
  <span>Cotizá tu envío</span>
  <span class="w-8 h-8 rounded-full bg-brand-blue-700/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">→</span>
</a>
```
- **Primary:** Fondo `brand-yellow-500`, texto `brand-blue-900`, icono con traslación `translateX(4px)` en hover.
- **Elevated (sobre fondo azul):** Fondo `white`, texto `brand-blue-700`, borde `brand-blue-100`, icono azul que invierte color en hover.
- **WhatsApp CTA Especial:** Fondo **SIEMPRE** `brand-yellow-500` con hover `brand-yellow-400`. El verde solo se permite en el glifo SVG interior.

### 4.3 Campos de Formulario e Inputs
- **Altura estándar:** `44px` (`h-11`) para garantizar touch targets accesibles.
- **Borde base:** `border-2 border-brand-blue-100`, esquinas `rounded-xl` (12px).
- **Focus State:** `border-brand-blue-700 ring-2 ring-brand-blue-500/20` con fondo blanco inmaculado.
- **Etiquetas:** Superiores, en `font-subheading uppercase text-xs tracking-wider text-brand-blue-700 font-bold`.

### 4.4 Steppers & Estados de Progreso
- **Horizontal (Cotizadores):** Círculos de 40px. Paso completado: `brand-yellow-500` con glifo Check y línea conectora en `brand-yellow-500`. **Prohibido el verde**.
- **Vertical (How It Works):** Línea vertical `brand-blue-100`. Dots de 24px: completado=`brand-yellow-500` + anillo `brand-yellow-100`; activo=`brand-yellow-500` + pulso suave (`pulse-subtle`).

### 4.5 Loaders y Estados Vacíos
- **Skeleton Loaders:** Bloques con efecto shimmer en gradiente `brand-blue-50 → brand-blue-100 → brand-blue-50` con animación continua a 2.5s.
- **Empty States:** Composiciones ilustradas con iconografía técnica en azul y llamados a la acción concretos.

---

## 5. Layout Principles & Responsive Architecture

### 5.1 Grilla Asimétrica Bento (12 Columnas)
- **Estructura Desktop:** Grilla de 12 columnas con `gap-6 lg:gap-8` y `auto-rows-[380px]`.
  - Tarjetas Hero de Servicio (Express, E-Commerce 3PL): `lg:col-span-7`.
  - Tarjetas Estándar (LowCost, Flex): `lg:col-span-5`.
  - Paneles Anchos de Cotizador / CTA: `col-span-12`.
- **Colapso Responsive (< 768px):** Todas las grillas colapsan obligatoriamente a columna única (`grid-cols-1`). Cero desbordamiento horizontal.

### 5.2 Alternancia de Secciones
1. **Hero:** Fondo Azul 700 (`brand-blue-700`), tipografía monumental blanca, Tilt Cards 3D y acentos amarillos.
2. **Trust Bar:** Fondo Azul Suave (`brand-blue-50`), 4 métricas en Geist Mono animadas, insignias de certificación.
3. **Servicios:** Fondo Blanco Puro (`#FFFFFF`), Bento Grid con tarjetas Double Bezel.
4. **Cómo Funciona:** Fondo Azul 700, Stepper Vertical en Amarillo 500.
5. **Prueba Social:** Fondo Blanco Puro, carrusel infinito de logos con máscara lineal y tarjetas de clientes.
6. **CTA Final:** Panel contenedor en Azul 700 con tarjeta central blanca `rounded-3xl` y botón de alta conversión.
7. **Footer:** Fondo Azul Profundo con barra superior de 6px en Amarillo 500.

---

## 6. Motion Philosophy & Spring Physics

### 6.1 Especificaciones de Animación (Framer Motion / Tailwind)
- **Física de Resortes (Spring):** `stiffness: 100, damping: 20` para aperturas de menú, dropdowns y modales. Sensación de peso mecánico sin rebotes plásticos.
- **Micro-Interacciones Perpetuas:**
  - `float-slow`: Traslación sinusoidal vertical `translateY(-5px)` a 4s infinito.
  - `pulse-subtle`: Escalado sutil `scale(1.03)` con opacidad a 3s infinito en status dots.
  - `logos-scroll`: Desplazamiento horizontal continuo lineal a 30s con pausa automática en hover y focus.
- **Hardware Acceleration:** Animaciones restringidas exclusivamente a `transform` y `opacity` con `will-change`.

---

## 7. Anti-Patterns (Banned AI Clichés — CERO TOLERANCIA)

> ❌ **LISTA EXPRESA DE ELEMENTOS PROHIBIDOS:**

1. **PROHIBIDO el uso de Emojis** en cualquier parte de la interfaz o copywriting (usar exclusivamente iconos Lucide SVG oficiales).
2. **PROHIBIDO el uso de la fuente `Inter`** o serifs genéricas (`Times New Roman`, `Georgia`, `Garamond`) en contextos de impacto.
3. **PROHIBIDO el Negro Puro (`#000000`)**: utilizar únicamente Deep Ink (`#00277C`) o Midnight Abyss (`#021440`).
4. **PROHIBIDO el "AI Purple/Blue Neon"**: sombras o brillos violetas, púrpuras, degradados de neón cibernéticos o bordes fluorescentes.
5. **PROHIBIDO el Verde en steppers o CTAs de WhatsApp**: el fondo de los botones siempre usa Amarillo Marca (`#FFEC01`).
6. **PROHIBIDO el diseño de 3 tarjetas idénticas horizontales**: usar Grillas Asimétricas Bento (7/5) o composición de eje vertical.
7. **PROHIBIDO inventar métricas falsas o estadísticas ficticias** ("99.99% Uptime", "18.5k Deploys", "124ms Response").
8. **PROHIBIDO el formato cliché `SISTEMA // 2026`**: usar jerarquía tipográfica limpia sin barras dobles decorativas vacías.
9. **PROHIBIDO el copywriting genérico de IA**: palabras como *"Seamless"*, *"Unleash"*, *"Elevate"*, *"Next-Gen"*. Usar voseo rioplatense concreto y orientado a garantías operativas.
10. **PROHIBIDO el texto de relleno para scroll**: *"Scroll to explore"*, *"Deslizá hacia abajo"*, flechas parpadeantes o chevrons rebotando en el Hero.

---

## 8. Bloque de Sistema de Diseño para Stitch & Subagentes

```markdown
**DESIGN SYSTEM SPECIFICATION — ENVIOS DOSRUEDAS (2026):**
- **Brand Colors (STRICT 3-COLOR RULE):**
  - Primary: Egyptian Blue `#0636A5` (`brand-blue-700`) — dark section canvas, nav, footer, borders, H1/H2 titles.
  - Accent / CTA: Electric Signal Yellow `#FFEC01` (`brand-yellow-500`) — all primary CTA buttons, badges, completed stepper dots, live status glow.
  - Surface Base: Pure White `#FFFFFF` (`brand-white-50`) — page background, card inner cores, form inputs, modal bodies.
  - Soft Outer Tint: Ice Blue `#E6EEFE` (`brand-blue-50`) — outer card bezel, section tint, info panels.
  - Ink Body Text: Deep Ink `#00277C` (`brand-ink`).
  - FORBIDDEN: Generic grays (slate, zinc, gray, neutral), unbranded green CTAs, ad-hoc inline hex.
- **Typography:**
  - Headlines (H1/H2): `Anton` / `Anton SC`, uppercase, tight line-height `0.85-1.0`, letter-spacing `-0.05em`.
  - Subtitles, Badges, Labels, Button Text: `Bebas Neue`, uppercase, tracking `0.05em-0.1em`.
  - Body & UI: `Outfit` & `IBM Plex Sans`, sentence case, line-height `1.625`.
  - Metrics, Prices & Tracking: `Geist Mono`, tabular numbers (`$4.600 ARS`).
- **Signature UI Components:**
  - Double Bezel Cards: Outer `bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float` wrapping Inner `bg-white rounded-xl p-6 border border-brand-blue-50/50`.
  - CTA Nested Pill: `rounded-full uppercase font-subheading bg-brand-yellow-500 text-brand-blue-900 px-8 py-3` with nested circular icon pill `w-8 h-8 rounded-full bg-brand-blue-700/10` translating `translateX(4px)` on hover.
  - Steppers: Completed state uses `brand-yellow-500` ring & dot (NEVER green).
  - WhatsApp CTA: Background is ALWAYS `brand-yellow-500`, hover `brand-yellow-400` (green is restricted to the internal SVG icon path).
  - Glass on Blue: `rgba(255,255,255,0.06)` + `border: 1px solid rgba(255,255,255,0.12)` + `backdrop-filter: blur(12px)`.
- **Language & Tone:**
  - Argentinian Spanish with strict voseo: "Cotizá tu envío", "Ingresá origen y destino", "Contactanos".
  - Mar del Plata local geographic anchors: "Friuli 1972", "Zona Güemes", "Playa Grande", "Punta Mogotes".
  - Reference Year: 2026.
```