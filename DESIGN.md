---
version: alpha
name: Envíos DosRuedas
colors:
  primary: "#2563EB" # Primary Blue / Steel Azure
  secondary: "#E89A17" # Secondary Gold / Sunflower Gold
  background: "#050810" # Brand Dark / Floor
  surface: "#0A0D16" # Surface / Steel Azure Dark
  neutral: "#FFFFFF" # High Visibility White
  error: "#EF4444"
  success: "#22C55E"
  warning: "#FDE400"
  outline-variant: "rgba(255, 255, 255, 0.1)"
typography:
  display-lg:
    fontFamily: Orbitron
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.02em
  display-md:
    fontFamily: Orbitron
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Orbitron
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Orbitron
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.1em
  code-tracking:
    fontFamily: Orbitron
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.1em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  extreme: 40px
  super: 60px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin: 32px
  container-max: 1400px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    typography: "{typography.label-md}"
  button-cta:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    typography: "{typography.label-md}"
  input:
    backgroundColor: "rgba(0, 0, 0, 0.2)"
    rounded: "{rounded.md}"
    borderColor: "{colors.outline-variant}"
---

## Overview

Envíos DosRuedas es una plataforma de logística y mensajería de última milla líder en Mar del Plata. Nuestra identidad visual comunica **rapidez, seguridad, modernidad y confianza**.

La personalidad de la marca es **autoritaria y enérgica**, inspirada en la señalética industrial y los tableros de alto rendimiento. Adoptamos una estética "Corporate / Modern" caracterizada por capas tonales, bordes nítidos y un alto contraste que transmite precisión tecnológica y urgencia controlada.

### Principios de Diseño
1.  **Eficiencia Visual y Densidad**: Priorizamos la densidad de datos sobre los espacios abiertos para captar información clave de un solo vistazo (Cockpit Dense).
2.  **Modernidad de Alto Contraste**: Uso de fondos oscuros profundos (Brand Dark) combinados con acentos en Azul Primario y Oro Secundario.
3.  **Profundidad por Capas Tonales**: La jerarquía se establece mediante cambios de color de fondo y bordes nítidos (Ghost Borders) en lugar de sombras pesadas.
4.  **Precisión Geométrica**: Diseños estructurados alineados a una grilla de línea base de 4px que transmite precisión milimétrica.

## Colors

Nuestra paleta está optimizada para reducir la fatiga visual durante turnos operativos prolongados, manteniendo una visibilidad crítica para alertas y estados.

- **Primary Blue (#2563EB):** Representa tecnología y fiabilidad. Usado para navegación, botones primarios y estados activos.
- **Secondary Gold (#E89A17):** El color de "acción". Reservado para CTAs críticos, alertas de urgencia y estados de advertencia.
- **Brand Dark (#050810):** El "suelo" de la aplicación. Un fondo profundo que proporciona el máximo contraste.
- **Steel Azure (#0A0D16):** Color de superficie para tarjetas y contenedores.
- **Neutral White (#FFFFFF):** Utilizado para texto de cuerpo y legibilidad máxima.

## Typography

Utilizamos una estrategia de doble fuente para equilibrar el carácter de la marca con la utilidad operativa.

- **Orbitron (Display & Branding):** Tipografía geométrica y técnica. Reservada para encabezados, logotipos, códigos de seguimiento y branding.
- **Roboto (Sans / Body):** Nuestra fuente de trabajo para todo el texto de la interfaz, formularios y descripciones. Asegura legibilidad excepcional en densidades altas.
- **JetBrains Mono:** Reservada para datos técnicos, coordenadas, marcas de tiempo y dashboards de alta densidad.

## Layout

El sistema sigue un modelo de **Grilla Técnica** con una unidad base de 4px.

- **Grilla:** 12 columnas fluidas para escritorio y 4 columnas para móvil.
- **Contenedor:** Ancho máximo de 1400px con márgenes laterales de 32px.
- **Escala de Espaciado:** Todos los márgenes y rellenos deben ser múltiplos de 4 (4, 8, 12, 16, 24, 32).

## Elevation & Depth

La profundidad se comunica a través de **Capas Tonales** y **Luminiscencia**, evitando sombras difusas que ensucian el diseño oscuro.

1.  **Nivel 0 (Floor)**: Fondo base `#050810`.
2.  **Nivel 1 (Surface)**: Tarjetas sobre fondo base usando `#0A0D16`.
3.  **Nivel 2 (Raised)**: Bordes nítidos de 1px (`white/10`) para definir límites de componentes.
4.  **Efecto Glow**: Sutiles resplandores exteriores en Azul Primario o Oro para indicar estados activos o selección.

## Shapes

El lenguaje de formas es **Estructurado y Técnico**, equilibrando la precisión con la modernidad.

- **Radio de Bordes:**
    - Estándar: `0.5rem` (8px) para elementos interactivos.
    - Contenedores: `0.75rem` (12px) para tarjetas operativas.
    - Grandes: `2.5rem` (40px) para secciones decorativas o contenedores de landing.
- **Botones:** Deben ser rectangulares con puntas suavizadas; evitar formas de píldora completas (`rounded-full`) para mantener el rigor industrial.

## Components

### Botones
- **Primario**: Fondo Azul Primario con texto blanco.
- **CTA**: Fondo Oro Secundario con texto oscuro (`#050810`).
- **Ghost/Outline**: Sin fondo con borde de 1px y texto en color de acento.

### Campos de Entrada (Inputs)
Fondo oscuro con borde de 1px (`white/10`). Al enfocarse, el borde cambia a Azul Primario con un anillo de enfoque sutil. Etiquetas siempre posicionadas arriba del campo.

### Badges de Estado
- **Express**: Gradiente rojo/naranja.
- **Lowcost**: Cyan / Azul claro.
- **Flex**: Amarillo / Oro.
- **E-Commerce**: Verde Esmeralda.

## Do's and Don'ts

### ✅ Do's
- Usa siempre múltiplos de 4px para espaciado.
- Prioriza el contraste AAA para texto crítico.
- Utiliza Orbitron solo para branding y títulos cortos de alto impacto.
- Mantén los bordes nítidos (1px) para simular una interfaz de instrumentos (Cockpit).

### ❌ Don'ts
- No uses la fuente 'Inter' o serifas genéricas.
- No uses negro puro (#000000); usa Brand Dark (#050810).
- No uses sombras pesadas o difusas sobre fondos oscuros.
- No uses botones tipo píldora en el dashboard operativo.
