---
colors:
  primary: "#2563eb" # hsl(221.2 83.2% 53.3%)
  primary_dark: "#3b82f6" # hsl(217.2 91.2% 59.8%)
  secondary: "#eab308" # hsl(45 93% 47%)
  background: "#ffffff" # hsl(0 0% 100%)
  background_dark: "#020617" # hsl(222 84% 4.9%)
  foreground: "#020617" # hsl(222.2 84% 4.9%)
  foreground_dark: "#f8fafc" # hsl(210 40% 98%)
  accent: "#f1f5f9" # hsl(210 40% 96.1%)
  accent_dark: "#1e293b" # hsl(217.2 32.6% 17.5%)
  destructive: "#ef4444" # hsl(0 84.2% 60.2%)
  destructive_dark: "#7f1d1d" # hsl(0 62.8% 30.6%)
typography:
  display: "Orbitron"
  sans: "Roboto"
  weights:
    regular: 400
    medium: 500
    bold: 700
    black: 900
spacing:
  container: "1400px"
  section_mobile: "2rem"
  section_desktop: "4rem"
  card_gap: "1.5rem"
radius:
  default: "0.75rem"
shadows:
  card: "shadow-sm"
  hero: "shadow-2xl"
---
# Design System - Envios DosRuedas

Este documento define el sistema de diseño para **Envios DosRuedas**, una plataforma de logística y mensajería de última milla. Está diseñado para ser interpretado por agentes de IA y desarrolladores para mantener la consistencia visual y funcional en todo el proyecto.

## 1. Filosofía de Diseño
Envios DosRuedas es un **Partner Logístico Especializado** para el sector corporativo y E-commerce. Su identidad visual busca proyectar una imagen de "Alta Precisión" y "Confianza Tecnológica", alejándose del concepto tradicional de mensajería para posicionarse como un aliado estratégico de última milla.

### Racional de Diseño
1.  **Confianza a través del Color**: El uso del azul profundo como base establece una base de seriedad y profesionalismo, mientras que el amarillo/oro actúa como un disparador de acción dinámico.
2.  **Estética "High-Tech"**: La implementación de *glassmorphism* y gradientes sutiles refuerza la idea de que la logística es gestionada por software y sistemas avanzados.
3.  **Legibilidad Operativa**: En entornos de gestión (repartidor/admin), la claridad de los datos es la prioridad absoluta, utilizando tipografías sans-serif de alta legibilidad.

## 2. Misión y Visión de Marca

*   **Eslogan**: "Tu Solución Confiable".
*   **Pilares**: Rapidez, Seguridad, Modernidad y Confianza.
*   **Voz**: Profesional, tecnológica, eficiente y cercana.

## 3. Principios de Diseño

1.  **Eficiencia Visual**: El usuario debe encontrar lo que busca rápidamente (seguimiento, cotización, gestión).
2.  **Confianza a través de la Modernidad**: Uso de gradientes sutiles y efectos de cristal (glassmorphism) para transmitir una imagen tecnológica y de vanguardia.
3.  **Accesibilidad**: Alto contraste en elementos críticos y legibilidad clara.
4.  **Consistencia**: Uso riguroso de los tokens definidos en Tailwind.

## 4. Identidad Visual

### 4.1 Paleta de Colores (Tokens HSL)

| Token | HSL (Light Mode) | HSL (Dark Mode) | Uso |
| :--- | :--- | :--- | :--- |
| `primary` | `221.2 83.2% 53.3%` | `217.2 91.2% 59.8%` | Azul principal. Botones primarios, acentos. |
| `secondary` | `45 93% 47%` | `45 93% 47%` | Amarillo/Oro. Llamadas a la acción (CTA), advertencias. |
| `background` | `0 0% 100%` | `222 84% 4.9%` | Fondo principal de la aplicación. |
| `foreground` | `222.2 84% 4.9%` | `210 40% 98%` | Color de texto principal. |
| `accent` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Fondos de sección suaves. |
| `destructive` | `0 84.2% 60.2%` | `0 62.8% 30.6%` | Errores y acciones peligrosas. |

### 4.2 Tipografía (Hierarchy)

- **Display (Headers)**: `Orbitron` (Variable: `--font-orbitron`). Peso `black` (900) para secciones Hero.
- **Sans (Body)**: `Roboto` (Variable: `--font-roboto`). Párrafos, formularios y etiquetas.
- **Voseo Argentino**: Todo el copywriting debe usar el voseo (ej. "Cotizá", "Seguí tu envío").

### 4.3 Elevación y Formas

*   **Border Radius**: Estándar de `0.75rem` (`var(--radius)`).
*   **Sombras**: `shadow-sm` para tarjetas, `shadow-2xl` para elementos destacados como el Hero.

## 5. Diseño de Interfaz y Layout

*   **Contenedor**: Máximo de `1400px` (`2xl` en Tailwind).
*   **Espaciado**: Padding estándar de sección `2rem` móvil / `4rem` desktop. Gap estándar entre elementos de tarjeta: `1.5rem`.
*   **Layout Responsivo**: Mobile-first siempre. Uso intensivo de Flexbox y CSS Grid.

## 6. Patrones de UI y Movimiento

### 6.1 Tratamientos Visuales

*   **Glassmorphism**: Uso de `backdrop-blur-sm` combinado con bordes semi-transparentes (`border-white/20`) para paneles flotantes sobre fondos de color.
*   **Gradientes**:
    *   *Fondo Hero*: `from-slate-900 via-blue-900 to-slate-800`.
    *   *Botón Primario (Yellow)*: `from-yellow-500 to-yellow-600`.

### 6.2 Animaciones (Tailwind Config)

*   `animate-float`: Movimiento vertical suave (6s).
*   `animate-spin-slow`: Rotación lenta para elementos de fondo (8s).
*   `animate-h-scroll`: Scroll horizontal infinito para carruseles de logotipos/redes (45s).

### 6.3 Framer Motion

*   **Entradas**: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`.
*   **Hovers**: `whileHover={{ scale: 1.05 }}` para tarjetas y botones principales.

## 7. Guía de Componentes

### 7.1 Base (shadcn/ui)
*   **Botones (Action Tokens)**:
  - `Primary`: Fondo `primary`, texto blanco.
  - `Conversion (Shimmer)`: Fondo `secondary` con efecto de brillo animado. Uso exclusivo en CTAs de alta jerarquía.
*   **Tarjetas**: `Card` con bordes suaves y sombra mínima para datos operativos; efectos de cristal para landing pages.

### 7.2 Componentes Personalizados
*   **Calculadora de Envíos**: Interactiva, con mapas integrados y feedbacks inmediatos de precio.
*   **Dashboard Repartidor**: Enfocado en la legibilidad bajo la luz del sol, botones grandes y escáner de fácil acceso.

## 8. Do's and Don'ts (Reglas para IA)

### ✅ Do's
*   Usa siempre `cn()` para concatenar clases de Tailwind.
*   Asegura que el texto sobre fondos de color tenga contraste suficiente.
*   Mantén la coherencia entre los portales (Admin, Cliente, Repartidor) usando los mismos tokens de color.
*   Implementa `dark mode` explícitamente en componentes personalizados.
*   Usa exclusivamente `lucide-react` para iconos.

### ❌ Don'ts
*   No uses colores "hardcodeados" (ej. `bg-[#123456]`). Usa siempre variables de CSS o clases de Tailwind (`bg-primary`).
*   No mezcles fuentes. Si no es un header, usa Roboto.
*   No elimines el `focus-visible` de los elementos interactivos.
*   Evita animaciones excesivas que distraigan de la tarea principal de logística.
