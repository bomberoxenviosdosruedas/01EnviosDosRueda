---
tokens:
  colors:
    primary:
      light: "hsl(221.2 83.2% 53.3%)" # Vibrant Cobalt Blue
      dark: "hsl(217.2 91.2% 59.8%)"  # Electric Neon Blue
    secondary:
      brand: "hsl(45 93% 47%)"        # Industrial Gold
    background:
      light: "hsl(0 0% 100%)"         # Crisp Studio White
      dark: "hsl(222 84% 4.9%)"       # Deep Midnight Space (#050810 equivalent)
    foreground:
      light: "hsl(222.2 84% 4.9%)"    # Deep Charcoal Slate
      dark: "hsl(210 40% 98%)"        # Ice White
    accent:
      light: "hsl(210 40% 96.1%)"     # Soft Lavender Grey
      dark: "hsl(217.2 32.6% 17.5%)"  # Slate Core
    destructive:
      light: "hsl(0 84.2% 60.2%)"     # Alert Crimson Red
      dark: "hsl(0 62.8% 30.6%)"      # Deep Crimson
  typography:
    display:
      family: "Orbitron"
      variable: "--font-orbitron"
      weights: [700, 800]
    sans:
      family: "Roboto"
      variable: "--font-roboto"
      weights: [400, 500]
  spacing:
    container: "1400px"
    section_padding_mobile: "2rem"
    section_padding_desktop: "4rem"
    standard_gap: "1.5rem"
  radius:
    base: "0.75rem"
  shadows:
    sm: "shadow-sm"
    xl: "shadow-2xl"
    glow_blue: "0 0 20px rgba(37, 99, 235, 0.3)"
    glow_yellow: "0 0 20px rgba(251, 191, 36, 0.3)"
---

# Design System - Envíos DosRuedas

Este documento define el sistema de diseño para **Envíos DosRuedas**, una plataforma de logística y mensajería de última milla. Actúa como un contrato visual para mantener la consistencia en el desarrollo de la aplicación.

## 1. Identidad y Propósito

*   **Misión**: Proporcionar soluciones logísticas confiables, rápidas y modernas.
*   **Voz de Marca**: Profesional, tecnológica y cercana. Se utiliza estrictamente el **voseo argentino** (ej. "Hablá con nosotros", "Cotizá tu envío").
*   **Atmósfera**: Visualmente limpia, de alta precisión, con toques futuristas proporcionados por la tipografía Orbitron y efectos de cristal.

## 2. Principios de Diseño

1.  **Mobile-First**: Todos los componentes se diseñan primero para dispositivos móviles y escalan hacia desktop.
2.  **Consistencia de Tokens**: No se utilizan colores "hardcodeados". Se emplean exclusivamente variables de CSS y clases de Tailwind basadas en el tema.
3.  **Eficiencia Visual**: Los elementos críticos de conversión (Tracking, Cotización) deben tener el mayor peso visual (uso de Industrial Gold).
4.  **Maquetación A4**: Los reportes y propuestas deben usar unidades `mm` y evitar desbordamientos para asegurar una exportación a PDF idéntica a la vista web.

## 3. Guía de Componentes

### 3.1 HeroSection (Modular)
*   **Estructura**: Server Component que soporta diferentes layouts (`center-stacked`, `split-visual-right/left`).
*   **Tratamiento**: Utiliza gradientes de fondo sutiles, overlays de imagen al 20% de opacidad y acentos de brillo (`blue-500/10` con blur).
*   **Animación**: Entradas suaves con `animate-fade-in-up` de forma estática (CSS) para optimizar el LCP.

### 3.2 Botones
*   **Primario**: Azul Cobalto (`bg-primary`).
*   **CTA Secundario (Crítico)**: Oro Industrial (`bg-secondary`), a menudo acompañado de un efecto `animate-pulse-glow`.
*   **Elite Gradient**: Gradiente azul animado para secciones premium o de alta visibilidad.

### 3.3 Glassmorphism
*   **Aplicación**: Paneles flotantes sobre fondos oscuros o imágenes.
*   **Clases**: `backdrop-blur-sm`, `bg-white/10` (o equivalente oscuro), `border-white/20`.

## 4. Layout y Espaciado

*   **Ancho Máximo**: El contenido principal se limita a `1400px` (`2xl`).
*   **Ritmo Vertical**: Las secciones mantienen un respiro claro con `pt-24 pb-12` en móvil y `md:pt-32 md:pb-20` en desktop para evitar solapamientos con el header.
*   **Grillas**: Uso estándar de `gap-6` (`1.5rem`) para separar tarjetas y elementos de formulario.

## 5. Reglas Operativas para IA

*   **Accesibilidad**: En el fondo oscuro de marca (#050810), usar `text-gray-400` o más claro para cumplir con WCAG.
*   **Imágenes**: Usar el atributo `priority` solo para elementos LCP (Above-the-fold). No usar para elementos ocultos o móviles.
*   **SVG**: No usar patrones SVG externos. Preferir Base64 local para eliminar peticiones de red y optimizar carga.
