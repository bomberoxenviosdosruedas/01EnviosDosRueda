---
# Ficha Técnica de Identidad Visual y UI: Envíos DosRuedas

## 1. Mapeo de la Paleta de Colores Actual

- **Colores de Fondo (Backgrounds):**
  - **Global:** La aplicación usa esquemas oscuros por defecto definidos en `src/app/globals.css`.
    - Modo claro (base): `--background: 0 0% 100%` (`bg-white`), `--card: 0 0% 100%`.
    - Modo oscuro (dark): `--background: 222% 84% 4.9%` (`bg-slate-950` equivalente), `--card: 222% 84% 4.9%`.
  - **Componentes y Secciones:**
    - Fondos neutros/informativos: `bg-muted/50`, `bg-destructive/10`.
    - Tarjetas temáticas (`services-overview.tsx`):
      - Express: `bg-gradient-to-br from-zinc-900/90 to-black`
      - LowCost: `bg-gradient-to-br from-slate-900/90 to-slate-950/90`
      - Meli: `bg-gradient-to-br from-[#FFFDE7]/95 to-[#FFF9C4]/95`
      - E-Commerce: `bg-gradient-to-br from-emerald-50/95 to-white/95`
    - Elementos de navegación (Header): `bg-white/[0.03]` combinado con `backdrop-blur-md`.

- **Colores de Texto (Typography Colors):**
  - **Global:**
    - Texto principal (modo oscuro): `--foreground: 210% 40% 98%` (blanco/slate-50).
    - Texto secundario: `--muted-foreground: 215 20.2% 65.1%` (grisáceo).
  - **Jerarquías en uso:**
    - Títulos y encabezados: `text-white`, `text-[#2D3277]` (Meli), `text-emerald-900` (E-commerce).
    - Cuerpos de texto y letra chica: `text-gray-400`, `text-slate-700`, `text-[10px]`.
    - Estados de error: `text-destructive` (rojo).

- **Colores de Acento e Identidad:**
  - **Brand Colors:**
    - **Primary (Azul DosRuedas):** Definido en CSS como `--primary: 217.2 91.2% 59.8%`. Usado intensivamente en acentos visuales (`text-primary`), glows (`drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]`), y botones.
    - **Secondary (Amarillo/Naranja):** Definido como `--secondary: 45 93% 47%`.
  - **Tokens de Servicio (Tematización Específica):**
    - **Express:** Acento `text-red-500`, bordes `border-red-500/20`, glows `rgba(239,68,68,0.2)`.
    - **LowCost:** Acento `text-cyan-400`, bordes `border-cyan-500/20`, glows `rgba(6,182,212,0.15)`.
    - **Mercado Libre (Flex):** Amarillo de fondo (`#FFFDE7`, `#FFE600`) y azul oscuro institucional de ML para acentos/texto (`#2D3277`).
    - **E-Commerce:** Tonos esmeralda (`emerald-500`, `emerald-700`).

## 2. Sistema Tipográfico y Jerarquías

- **Familias Tipográficas:**
  - **Sans-serif (Cuerpo):** Definida a través de la variable CSS `--font-roboto` (extendida en Tailwind como `font-sans`).
  - **Display / Monospace (Títulos y Acentos):** Definida mediante `--font-orbitron` (extendida en Tailwind como `font-display`).

- **Escala y Pesos:**
  - **Títulos Hero:** Extremadamente grandes (`text-5xl md:text-7xl`), pesos máximos (`font-black`), a menudo con estilos `uppercase italic tracking-tighter leading-[0.9]`.
  - **Títulos de Tarjetas (H3):** `text-xl md:text-2xl lg:text-3xl`, `font-black`, `uppercase tracking-tight leading-tight`.
  - **Bajadas y Badges (Micro-copy):** Estilo altamente técnico y espaciado: `text-[10px]`, `font-black`, `uppercase`, `tracking-[0.2em]`.
  - **Cuerpo de texto:** Tamaños base (`text-xs md:text-sm lg:text-base`), peso ligero (`font-light`), altura de línea relajada (`leading-relaxed`).

## 3. Componentes Visuales y Patrones de UI Existentes

- **Tarjetas (Cards):**
  - **Estilo Base:** Uso extensivo del componente estandarizado (`src/components/ui/card.tsx`) con bordes (`border`), redondeados (`rounded-lg` a `rounded-[40px]`), y sombras (`shadow-md`, `shadow-xl`).
  - **Glassmorphism ("glass-card"):** Patrón muy repetido en el sitio público. Combina fondos translúcidos (`bg-white/[0.03]`), desenfoque (`backdrop-blur-md`), y bordes sutiles (`border-white/10`).

- **Botones (Buttons):**
  - Configurados mediante `class-variance-authority` (CVA) en `button.tsx`.
  - **Variantes Principales:**
    - `default`: Fondo sólido primario (`bg-primary text-primary-foreground`).
    - `gradient`: Variante especial altamente estilizada: `bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#2563eb]`, animada en hover (`bg-[length:200%_auto]`, `hover:bg-[right_center]`), con sombras luminosas (`shadow-[0_0_20px_rgba(37,99,235,0.3)]`).
    - Otras: `destructive`, `outline`, `secondary`, `ghost`, `link`.
  - **Estructura base:** `inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors`.

- **Componentes de Navegación y Formularios:**
  - **Header (OptimizedHeader):** Uso avanzado de utilidades compositivas. El contenedor de navegación usa `bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-1.5 shadow-2xl`. Los enlaces activos resaltan con `bg-primary/20 text-blue-400 border border-primary/30 shadow-lg`.
  - **Formularios/Inputs:** Estilo base enfocado en usabilidad: `border-input`, anillos de enfoque visibles (`focus-visible:ring-2 focus-visible:ring-ring`).

## 4. Animaciones, Micro-interacciones y Efectos Visuales

- **Tailwind Transitions:**
  - Uso constante de `transition-all` y `duration-500` en tarjetas interactivas.
  - Efectos Hover comunes: Transformaciones sutiles (`hover:-translate-y-1`, `hover:scale-105`, `hover:scale-110`, `hover:rotate-6` en íconos).
  - Alteración de opacidad en estado inactivo vs activo (`opacity-0 group-hover:opacity-100`).

- **Framer Motion (Animaciones de Montaje):**
  - Ampliamente utilizado para revelar contenido al hacer scroll (`whileInView`).
  - Patrones comunes:
    - `initial={{ opacity: 0, x: -30 }}` a `whileInView={{ opacity: 1, x: 0 }}` (Deslizamiento lateral).
    - `initial="hidden" whileInView="visible"` usando `Variants` para generar efectos "stagger" (cascada) en listas o grillas de tarjetas (`staggerChildren: 0.1`).
    - Efectos hover declarativos: `whileHover={{ y: -10, transition: { duration: 0.3 } }}`.

- **Tailwind Keyframes Específicos (tailwind.config.ts):**
  - `accordion-down` / `accordion-up`: Transiciones de altura para menús plegables.
  - `h-scroll`: Desplazamiento horizontal infinito.
  - `float`: Movimiento vertical suave continuo (`translateY(-10px)`).
  - `spin-slow`: Rotación lenta y continua.
  - Utilidades adicionales: `animate-pulse` usada en indicadores visuales (ej. el punto azul de "Nuestros Servicios").

- **Efectos de Luminosidad (Glows & Gradients):**
  - Uso frecuente de sombras extendidas para simular brillo (`drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]`).
  - Gradientes radiales interactivos inyectados vía estilos en línea en tarjetas: `background: radial-gradient(circle at top right, ${theme.glowColor}, transparent)`.
  - Fondos ambientales globales usando elementos absolutos desenfocados (`bg-primary/5 blur-[160px]`).

## 5. Áreas de Oportunidad Estética Detectadas

1. **Gestión de Tokens Hardcodeados:**
   Existen valores de color hardcodeados directamente en los componentes, especialmente en la tematización de tarjetas (ej. `#FFFDE7`, `#2D3277` en `services-overview.tsx` y `#2563eb` en el botón variante `gradient`). Estos colores deberían consolidarse dentro del objeto `theme.extend.colors` en `tailwind.config.ts` para mantener una única fuente de verdad y facilitar futuros cambios en la paleta.

2. **Inconsistencia entre "Glassmorphism" vs Componentes UI Estándar:**
   Mientras las áreas públicas (landing, secciones de servicios) utilizan un estilo "Glassmorphism" altamente pulido (fondos translúcidos, desenfoque profundo, alto contraste, sombras luminosas), los componentes estandarizados importados desde Radix UI / Shadcn (como `route-map.tsx`) tienden a recurrir a esquemas planos (`bg-muted/50`, `border-destructive`, `bg-destructive/10`). Esta dualidad visual puede hacer que la interfaz se perciba desarticulada entre las páginas de conversión y las herramientas interactivas.

3. **Sobrecarga Cognitiva por Efectos Compuestos:**
   El uso simultáneo de animaciones Framer Motion (ej. `whileHover={{ y: -10 }}`), combinadas con transiciones de Tailwind (`group-hover:scale-110 group-hover:rotate-6`), sombras dinámicas, y gradientes de revelación por hover, crea micro-interacciones muy ricas pero potencialmente abrumadoras en grillas densas. Podría considerarse una simplificación de los estados interactivos para mejorar el rendimiento y la elegancia general del sistema.

4. **Legibilidad en Contrastes Dinámicos:**
   En componentes con gradientes o estados hover complejos, algunos textos (especialmente los descritos como `text-gray-400 [&>span]:text-gray-200`) podrían enfrentar desafíos puntuales de accesibilidad (contraste mínimo WCAG) si el gradiente de fondo en modo hover no oscurece lo suficiente la base.
---