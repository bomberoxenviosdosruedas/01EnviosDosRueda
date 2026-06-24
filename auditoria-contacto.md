# Auditoría Técnica: Sección de Contacto (`src/app/contacto/`)

## 1. Propósito y Contexto Funcional
La página de contacto es el punto final de conversión para consultas personalizadas y soporte directo. Su propósito es:
- Ofrecer múltiples canales de comunicación (WhatsApp, Email, Redes Sociales).
- Capturar leads mediante un formulario de contacto validado.
- Informar sobre la zona de cobertura y los horarios de atención física/operativa.
- Reforzar la imagen de profesionalismo y cercanía con el cliente.

## 2. Arquitectura de Archivos y Componentes Actuales
La página utiliza un cliente de página (`ContactPageClient`) para gestionar animaciones de scroll y la estructura modular.

### Archivos Principales:
- `src/app/contacto/page.tsx`: Punto de entrada (Metadata).
- `src/components/contact/contact-page-client.tsx`: Layout principal con animaciones de Framer Motion.

### Componentes de UI:
- `HeroSection`: Reutilizado para consistencia visual.
- `ContactInfo`: Tarjeta principal de contacto y links a redes.
- `ContactForm`: Formulario basado en `react-hook-form` y `zod`.
- `BusinessHours`: Horarios de atención.
- `ContactMap`: Mapa de Google Maps embebido vía `iframe`.

## 3. Composición de Diseño y UI (Tailwind CSS)
- **Animaciones:** Uso de `custom` variants en Framer Motion para orquestar la aparición secuencial de secciones (`delay: i * 0.2`).
- **Formulario:** Diseño limpio con inputs de Shadcn, labels con íconos de Lucide (`User`, `Mail`, `MessageSquare`) y un botón de envío con estado de carga (`Loader2`).
- **Mapa:** Iframe personalizado con filtros CSS (`grayscale contrast-[1.1] invert`) para integrarse estéticamente con el tema oscuro/profundo de la web.
- **Tarjetas Informativas:** Uso de `backdrop-blur-sm`, `bg-card/50` y efectos hover con traslación vertical (`hover:-translate-y-1.5`).

## 4. Estructura de Datos, Estados y Lógica Real
- **Validación de Formulario:** Esquema Zod (`contactSchema`) que exige nombre (min 2), email válido y mensaje (10-1000 caracteres).
- **Server Action:** El formulario utiliza `submitContactForm` de `src/app/actions.ts` mediante el hook `useActionState`.
- **Feedback:** Integración con `useToast` para mostrar notificaciones de éxito o error tras el envío.
- **WhatsApp Directo:** Función `handleWhatsAppClick` que construye una URL con un mensaje predefinido ("Hola, me gustaría obtener información...").

## 5. Textos y Copys Literales Actuales

### Hero de Contacto
- **Título:** "Contacto Comercial"
- **Descripción:** "¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."

### Información de Contacto
- **Título Marca:** "Envios DosRuedas"
- **Teléfono Principal:** "223-660-2699"
- **Botón WA:** "Contactar por WhatsApp"
- **Métodos:** "Email", "Facebook", "Instagram".

### Formulario
- **Título:** "¿Tenés alguna consulta?"
- **Subtítulo:** "Completá el formulario y te responderemos a la brevedad."
- **Campos:** "Nombre *", "Email *", "Mensaje *".
- **Botón:** "Enviar Mensaje" / "Enviando...".

### Horarios y Mapa
- **Horarios:** Lunes - Viernes (9:00 - 18:00), Sábados (10:00 - 15:00), Domingos (Cerrado).
- **Mapa:** "Nuestra Zona de Cobertura - Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites."
