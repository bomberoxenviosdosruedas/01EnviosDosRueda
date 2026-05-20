---
# Sección de Contacto (`/contacto`)
## 1. Propósito y Contexto Funcional
- Explicación: La página de contacto ofrece a los usuarios un medio directo para comunicarse con el equipo comercial y operativo de "Envios DosRuedas". Además de un formulario interactivo para consultas y solicitudes logísticas, muestra las vías de contacto rápido (email, WhatsApp, teléfono), los horarios de atención y un mapa de la zona de cobertura (Mar del Plata) usando Google Maps.

## 2. Arquitectura de Archivos y Componentes Actuales
- Ruta analizada: `src/app/contacto/page.tsx`
- Tipo de archivo: Server Component que delega la visualización a `ContactPageClient`.
- Dependencias/Importaciones principales:
  - `OptimizedHeader`, `CarruselRedes`, `Footer`.
  - `ContactPageClient` (Client Component):
    - `HeroSection` (compartido en `@/components/ui/HeroSection`).
    - `ContactInfo` (Tarjetas de iconos con info de contacto).
    - `ContactForm` (Formulario interactivo para enviar mensajes).
    - `BusinessHours` (Tarjetas con horarios).
    - `ContactMap` (iframe de Google Maps).

## 3. Composición de Diseño y UI (Tailwind CSS)
- Desglose visual:
  - Intercalado de secciones con `framer-motion` (`initial="hidden" whileInView="visible"`).
  - Fondos alternados: `bg-background` y `bg-accent` / `bg-accent/30` para crear separación visual (Zebra striping).
  - Formularios y Tarjetas (`ContactForm`, `BusinessHours`): Efectos de cristal (`bg-card/50 backdrop-blur-sm`), bordes tenues (`border-border/50`), hover shadows (`hover:shadow-lg`).
  - Mapa (`ContactMap`): Iframe con filtro CSS `grayscale contrast-[1.1] invert dark:invert-0 dark:grayscale-0` para ajustarse al esquema de colores (modo oscuro).
  - Tipografía: Títulos usando `font-display` y cuerpos de texto usando `font-sans`.

## 4. Estructura de Datos, Estados y Lógica Real
- Lógica de formulario (`ContactForm`):
  - Utiliza `useActionState` (hook experimental de React) o similar, pero en el código analizado se ve la estructura de un formulario validado por `zod` o `react-hook-form` con un server action que recibe `state, formAction`.
  - Formulario de campos: `name`, `email`, `message`.
  - Muestra un estado de éxito ("¡Mensaje Enviado!") si `state?.message` es válido.
- Mapa (`ContactMap`):
  - Botón "Ver en Google Maps" que abre un `window.open` a la URL de GMaps de Mar del Plata.

## 5. Textos y Copys Literales Actuales
- Hero:
  - Título: "Contacto Comercial"
  - Descripción: "¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."
- Contact Form:
  - Título: "¿Tenés alguna consulta?"
  - Descripción: "Completá el formulario y te responderemos a la brevedad."
  - Campos: "Nombre *", "Tu nombre"; "Email *", "tu@email.com"; "Mensaje *", "Contanos sobre tu consulta o necesidad de envío...".
- Business Hours:
  - Título: "Horarios de Atención"
  - Descripción: "Estamos disponibles para atenderte en los siguientes horarios."
  - Datos: "Lunes - Viernes" ("9:00 - 18:00"), "Sábados" ("10:00 - 15:00"), "Domingos" ("Cerrado").
- Mapa:
  - Título: "Nuestra Zona de Cobertura"
  - Descripción: "Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites."
  - Botón: "Ver en Google Maps".
- Contact Info (inferido a partir del archivo layout y footers previos):
  - Mar del Plata, WhatsApp/Tel: 223-660-2699, Email: matiascejas@enviosdosruedas.com.
---