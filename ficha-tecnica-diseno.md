# Ficha Técnica de Identidad Visual y UI: Envíos DosRuedas

## 1. Mapeo de la Paleta de Colores Actual

### Colores de Fondo (Backgrounds)
- **Principal (Dark Mode Default):** `#050810` (Negro profundo con matiz azulado). Se utiliza como base en el `HeroSection` y secciones principales.
- **Superficies de Tarjetas (Glassmorphism):**
  - `bg-white/[0.03]` con `backdrop-blur-md`: Usado en el Header y elementos de navegación.
  - `glass-card`: Clase personalizada para contenedores con efecto de transparencia.
- **Fondos de Servicios (Semánticos):**
  - **Express:** `bg-gradient-to-br from-zinc-900/90 to-black` con bordes `red-500/20`.
  - **LowCost:** `bg-gradient-to-br from-slate-900/90 to-slate-950/90` con bordes `cyan-500/20`.
  - **Flex (MeLi):** `bg-gradient-to-br from-[#FFFDE7]/95 to-[#FFF9C4]/95` (Amarillo MercadoLibre).
  - **E-Commerce:** `bg-gradient-to-br from-emerald-50/95 to-white/95`.
- **Fondos de Sistema (Variables HSL):**
  - `--background`: `0 0% 100%` (Light) / `222 84% 4.9%` (Dark).
  - `--card`: `0 0% 100%` (Light) / `222 84% 4.9%` (Dark).

### Colores de Texto (Typography Colors)
- **Encabezados (H1, H2, H3):** `text-white` (en secciones oscuras) y `text-[#2D3277]` (Azul oscuro para MeLi/E-Commerce).
- **Cuerpo y Texto Secundario:**
  - `text-gray-400`: Estándar para descripciones en Hero.
  - `text-white/70`: Para navegación no activa.
  - `text-muted-foreground`: Variable HSL mapeada a `215.4 16.3% 46.9%`.
- **Contrastes Críticos:** Se observa el uso de `text-gray-400` sobre fondos `#050810` para cumplir con WCAG.

### Colores de Acento e Identidad
- **Azul Primario (Brand Blue):** `hsl(221.2 83.2% 53.3%)` / `#2563eb`. Aplicado en el logo ("Dosruedas"), botones `variant="gradient"` y glows decorativos.
- **Amarillo/Ámbar Secundario:** `hsl(45 93% 47%)` / `#fbbf24`. Identificado como el color de acción "secondary" en botones de alta conversión y badges de alerta.
- **Acentos Semánticos:**
  - `red-500`: Prioridad Express.
  - `cyan-400`: Eficiencia LowCost.
  - `emerald-600`: Estabilidad E-Commerce.

---

## 2. Sistema Tipográfico y Jerarquías

### Familias Tipográficas
- **Display / Títulos:** `Orbitron` (next/font). Estilo futurista, tecnológico y audaz.
  - Aplicación: `font-display`, `text-orbitron`.
  - Pesos: `font-black` (900) e `italic` son predominantes en H1.
- **Cuerpo / Interfaz:** `Roboto` (next/font). Legibilidad técnica y limpia.
  - Aplicación: `font-sans`.
  - Pesos: `font-light` (300) y `font-normal` (400).

### Jerarquías Estándar
- **H1 (Hero):** `text-3xl` a `text-7xl`, `font-black`, `italic`, `tracking-tighter`, `leading-[0.9]`.
- **H2 (Secciones):** `text-5xl` a `text-7xl` (en `ServicesOverview`).
- **H3 (Tarjetas):** `text-xl` a `text-3xl`.
- **Párrafos:** `text-lg` a `text-xl` para leads; `text-base` para cuerpo.

---

## 3. Componentes Visuales y Patrones de UI Existentes

### Tarjetas (Cards)
- **Base (Shadcn):** `rounded-lg`, `border`, `bg-card`, `shadow-sm`.
- **Premium (Services):** `rounded-[32px]` a `rounded-[40px]`, `glass-card`, bordes sutiles `border-white/10`.
- **Efectos:** Uso extensivo de `backdrop-blur-md` y gradientes radiales internos en el hover.

### Botones (Buttons)
- **Primario (Blue Gradient):** `bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#2563eb]`. Sombra `shadow-[0_0_20px_rgba(37,99,235,0.3)]`.
- **Secundario (Yellow Action):** `bg-secondary` (Amarillo). `shadow-[0_0_20px_rgba(251,191,36,0.3)]`, `animate-pulse-glow`.
- **Ghost/Outline:** `bg-white/5`, `border-white/10`, con efecto de shimmer interno.

### Navegación y Formularios
- **Header:** Flotante, `backdrop-blur-md`, `border-white/10`, `rounded-2xl`. Los links activos usan `bg-primary/20` y `text-blue-400`.
- **Inputs:** `rounded-md`, `border-input`, `bg-background`. Foco con `ring-2 ring-ring`.

---

## 4. Animaciones, Micro-interacciones y Efectos Visuales

### Animaciones de Entrada (Scroll/Load)
- **Framer Motion:** Uso de `staggerChildren` para listas, `y: 20 -> 0` con `opacity: 0 -> 1`.
- **CSS Transitions:** `duration-500` para cambios de color y escala en hovers.

### Efectos Dinámicos
- **Pulse Glow:** Animación personalizada en CSS para botones amarillos (`animate-pulse-glow`).
- **Shimmer:** Efecto de brillo barriendo botones al pasar el cursor (`animate-[shimmer_1.5s_infinite]`).
- **Float:** Keyframes para elementos decorativos (`float 6s ease-in-out infinite`).
- **Glows de Fondo:** Elipses con `blur-[120px]` y opacidad baja (`bg-primary/20`, `bg-blue-500/10`) para dar profundidad al Hero.

---

## 5. Áreas de Oportunidad Estética Detectadas

1. **Inconsistencia de "Dark Mode":** Existen componentes con colores fijos (`#050810`) conviviendo con variables de Shadcn (`hsl(var(--background))`). Esto puede causar "saltos" visuales si se intenta forzar un modo claro total.
2. **Jerarquía de Bordes:** Hay una mezcla de `rounded-lg` (8px) en componentes base y `rounded-[40px]` en componentes de landing. Se recomienda unificar el radio de curvatura para una identidad más cohesiva.
3. **Saturación de Sombras:** Algunos componentes usan `shadow-xl` mientras otros dependen de `drop-shadow` con color (glows). La coexistencia de sombras negras tradicionales con glows de color puede ensuciar la interfaz en monitores de baja fidelidad.
4. **Dependencia de Framer Motion:** El `ServicesOverview` depende fuertemente de Client Components para animaciones, lo cual impacta ligeramente en el LCP comparado con el `HeroSection` que usa CSS puro.
