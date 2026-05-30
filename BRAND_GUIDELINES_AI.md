# BRAND_GUIDELINES_AI.md - Envíos DosRuedas

Este documento contiene el ADN visual completo de la marca "Envíos DosRuedas", optimizado para alimentar modelos de generación de imágenes por inteligencia artificial (como Google Flow, Midjourney o Veo).

## 1. Paleta de Colores Exacta (HEX y RGB)

El sistema de diseño de Envíos DosRuedas se basa en el alto contraste, la modernidad y la eficiencia. El entorno principal es oscuro para resaltar la tecnología, con acentos brillantes para guiar a la acción.

*   **Color Principal (Azul Marino / Trust Blue):**
    *   **HEX:** `#2563EB`
    *   **RGB:** `rgb(37, 99, 235)`
    *   **Emoción/Uso:** Transmite confianza, seguridad corporativa, y tecnología logística. Usado en fondos, acentos principales, y botones por defecto.

*   **Color Secundario (Ámbar / Envíos Flex Gold):**
    *   **HEX:** `#E89A17`
    *   **RGB:** `rgb(232, 154, 23)`
    *   **Nota Mercado Libre / Flex:** En contextos de Mercado Libre, se debe respetar el amarillo característico `#FFF159` y azul `#2D3277`.
    *   **Emoción/Uso:** Transmite velocidad, urgencia, atención y llamadas a la acción críticas (CTAs).

*   **Color de Fondo (Dark Background):**
    *   **HEX:** `#050810`
    *   **RGB:** `rgb(5, 8, 16)`
    *   **Emoción/Uso:** Transmite un entorno moderno, premium, nocturno/urbano y tecnológico (SaaS/Dashboard).

*   **Color de Texto Principal (Foreground Light Mode):**
    *   **HEX:** `#080C14`
    *   **RGB:** `rgb(8, 12, 20)` (Aproximación de HSL 222.2 84% 4.9%)

*   **Color de Texto Secundario (Foreground Dark Mode):**
    *   **HEX:** `#F8FAFC`
    *   **RGB:** `rgb(248, 250, 252)` (Aproximación de HSL 210 40% 98%)

## 2. Tipografía Principal y Secundaria

La tipografía equilibra un estilo industrial y tecnológico con una alta legibilidad funcional.

*   **Tipografía Principal (Display/Headers): Orbitron**
    *   **Estilo:** Sans-Serif geométrica, estilo futurista/tecnológico.
    *   **Pesos:** 400 (Regular), 700 (Bold), 900 (Black).
    *   **Uso Visual:** Para títulos grandes, contadores numéricos de estadísticas, el logotipo tipográfico y hero headers. Transmite la sensación de una interfaz de tablero de control moderno.

*   **Tipografía Secundaria (Sans/Body): Roboto**
    *   **Estilo:** Sans-Serif neo-grotesca, limpia y altamente legible.
    *   **Pesos:** 400 (Regular), 700 (Bold).
    *   **Uso Visual:** Textos de párrafo, formularios de cotización, tarjetas de información operativa y dashboards. Transmite profesionalismo y claridad funcional bajo presión (ej. lectura al aire libre para repartidores).

## 3. Geometría y Estilo UI

El aspecto general es el de un "Modern Glassmorphism" adaptado para un entorno logístico operativo.

*   **Formas y Bordes (Border Radius):**
    *   Se utiliza un radio de borde estándar suave pero no excesivamente redondo: `rounded-lg` o `rounded-xl` (`var(--radius)` aproximado de `0.75rem` / `12px`).
    *   No se usan líneas excesivamente duras (sharp edges), pero tampoco formas de "píldora" (pill/rounded-full) salvo excepciones de botones pequeños o insignias.
*   **Sombras y Elevación (Shadows/Glows):**
    *   Uso de sombras sutiles (`shadow-sm`) en el día a día operativo.
    *   En páginas de destino (Landing Pages/Hero), uso intensivo de brillos (Glows) bajo elementos interactivos: `shadow-[0_0_20px_rgba(37,99,235,0.3)]` sobre botones oscuros.
*   **Transparencias (Glassmorphism):**
    *   Paneles flotantes, barras de navegación y tarjetas destacan sobre el fondo usando desenfoque de fondo: `backdrop-blur-md` o `backdrop-blur-sm` combinado con colores de fondo semitransparentes (ej. `bg-white/5` o `bg-slate-900/80`).
    *   Bordes iluminados semitransparentes: `border-white/10` o `border-white/20`.
*   **Fondos Interconectados:**
    *   Patrones de franjas sutiles o "zebra striping" alterando entre `bg-slate-950` y `bg-slate-900`.

## 4. Inventario de Activos Estáticos (Logos e Imágenes de Referencia)

Rutas clave de los logotipos de la marca para invocar en generaciones de imagen a imagen o inpainting (usando etiquetas de referencia `@` en prompts):

*   **Logotipo Principal a color (Recomendado):**
    *   `public/LogoEnviosDosRuedas.webp`
    *   `public/img/LogoEnviosDosRuedas.png`
*   **Isologotipos/Iconos de App:**
    *   `public/icons/icon-512x512.png`
    *   `public/logo_envios.svg` (Formato vectorial)
*   **Favicons y Logos Minificados:**
    *   `public/favicon.svg`
    *   `public/LogoEnviosDosRuedas-192.png`
*   **Fondos de Landing y Mapas de Referencia:**
    *   `public/hero/mapa_background.jpeg`
    *   `public/hero/delivery_background.jpeg`
    *   `public/servicios/moto_fija.webp`
    *   `public/servicios/enviosexpress.webp`

## 5. Conceptos Visuales Clave (Visual Keywords para Prompts de IA)

Para generar el ambiente, entorno y estilo consistentes en motores de IA, utilizar siempre un subconjunto de estos 7 conceptos clave:

1.  **`high-speed logistics`**: Representa el dinamismo, movimiento fluido y eficiencia.
2.  **`modern glassmorphism UI`**: Especifica el estilo de paneles semitransparentes flotantes sobre fondos oscuros.
3.  **`trust blue and neon amber accents`**: Guía a la IA sobre la iluminación dominante. La luz base debe ser azul profundo y los acentos luminosos deben ser de color ámbar.
4.  **`clean SaaS dashboard`**: Indica una interfaz ordenada, estructurada, sin ruido visual, orientada a la gestión de datos.
5.  **`nighttime urban delivery`**: Sitúa el contexto geográfico y lumínico, dando una vibra moderna y citadina (ideal para la iluminación en Mar del Plata).
6.  **`motorcycle courier in motion`**: Elemento central de la acción operativa de la empresa.
7.  **`tech-enabled dark mode`**: Fuerza un ambiente nocturno que resalte la tecnología.

---
*Nota para uso en Prompts de IA: Al crear imágenes para componentes de Envíos DosRuedas, emplear siempre la "Fórmula de 5 Pilares" incluyendo la ubicación "Mar del Plata, Argentina" y la estética de las Keywords arriba listadas.*
