---
# Sección Informativa Corporativa (`/nosotros/*`)
## 1. Propósito y Contexto Funcional
- Explicación: La sección "Nosotros" engloba tres áreas clave: `sobre-nosotros` (construye confianza y autoridad narrando la historia, valores y equipo de la empresa), `preguntas-frecuentes` (FAQ estructurado para resolver dudas operativas sobre servicios, precios y procesos de envío, reduciendo la fricción y carga de atención al cliente), y `nuestras-redes` (conecta al usuario con la comunidad, mostrando feeds sociales, links de WhatsApp/Instagram/Facebook y newsletter para fidelización).

## 2. Arquitectura de Archivos y Componentes Actuales
- Rutas analizadas:
  - `src/app/nosotros/sobre-nosotros/page.tsx`
  - `src/app/nosotros/preguntas-frecuentes/page.tsx`
  - `src/app/nosotros/nuestras-redes/page.tsx`
- Tipo de archivos principales: Server Components (Nuestras Redes obtiene `getAllPosts()`).
- Dependencias/Importaciones principales:
  - Compartidos: `OptimizedHeader`, `CarruselRedes`, `Footer`.
  - Sobre Nosotros: `AboutHero`, `WhoWeAre`, `CompanyValues`, `CompanyStory`, `TeamSection`, `MissionVision`.
  - Preguntas Frecuentes: `FaqHero`, `FaqCategories`, `FaqContactCta`.
  - Nuestras Redes: `SocialHero`, `SocialConnect`, `SocialBenefits`, `SocialFeed`, `NewsletterSignup`. Utiliza `getAllPosts` de `@/lib/social/posts`.

## 3. Composición de Diseño y UI (Tailwind CSS)
- Desglose visual:
  - Diseño base similar a servicios: `OptimizedHeader` y `Footer` en todos.
  - Héroes (`HeroSection` o `AboutHero`/`FaqHero` específicos): Uso de imágenes `/bannerenvios.png`.
  - `FaqCategories` (Client Component): Grid de 3 columnas para botones de categorías (Servicios Generales, Precios y Pagos, Proceso de Envío). Uso de `bg-accent/30` para sección, y botones que cambian de `outline` a `default` (`bg-primary`) al estar activos. Acordeones para FAQ (`FaqItem`).
  - `SocialConnect`: Tarjetas de cristal (`bg-background/40 backdrop-blur-md border-border/10 rounded-3xl`) con efecto hover `hover:-translate-y-2`. Iconos con colores de marca nativos de cada red (`bg-[#1877F2]` Facebook, `bg-gradient-to-tr` Instagram, `bg-[#25D366]` WhatsApp).

## 4. Estructura de Datos, Estados y Lógica Real
- `FaqCategories`:
  - Hook: `useState("servicios")` para manejar la categoría activa.
  - Estructura de datos `faqData`: Array de objetos con `category`, `icon`, y `questions` (Array de `{question, answer}`).
- `Nuestras Redes`:
  - Variable `posts` inyectada vía Server Component `getAllPosts()`. Tiene `revalidate = 0`.
  - Variable estática `socialNetworks` en `SocialConnect` con `name, handle, description, color, url, followers`.

## 5. Textos y Copys Literales Actuales
- Preguntas Frecuentes (selección):
  - "Servicios Generales" (`Truck`), "Precios y Pagos" (`DollarSign`), "Proceso de Envío" (`Clock`).
  - Pregunta: "¿Cuáles son sus horarios de atención/servicio?" -> "Nuestro horario de atención es de lunes a viernes de 8 a 18 hs y sábados de 9 a 15 hs. Consulta por WhatsApp para el servicio de delivery nocturno."
  - Pregunta: "¿Cómo calculan el costo del envío?" -> "El costo de envío se calcula según la distancia entre el retiro y la entrega..."
  - Pregunta: "¿Qué sucede si el destinatario no está presente o rechaza el producto?" -> "...la devolución del paquete a tu tienda o local se realiza totalmente SIN CARGO."
- Nuestras Redes:
  - Hero: "Comunidad DosRuedas", "Conectate con nuestra red logística. Seguí nuestro día a día, novedades y casos de éxito corporativo en Mar del Plata."
  - SocialConnect Título: "¡Seguí el Movimiento!", "Unite a nuestra comunidad para acceder a beneficios exclusivos y estar al tanto de todo."
  - Redes:
    - Facebook: "@enviosdosruedas", "Seguinos en Facebook para ofertas exclusivas y actualizaciones diarias de nuestros servicios en Mar del Plata." (2.5K+)
    - Instagram: "@enviosdosruedas", "Mirá nuestro día a día en Instagram, fotos de entregas y promociones especiales diseñadas para vos." (3.2K+)
    - WhatsApp: "+54 9 223 660-2699", "Atención directa por WhatsApp. Canal personalizado para cotizaciones y pedidos inmediatos." (Atención 24/7)
- Sobre Nosotros (Metadata):
  - "Conoce la historia de Envios DosRuedas, tu aliado confiable en mensajería y delivery en Mar del Plata. 4.9 estrellas en Google Reviews. Compromiso, rapidez y confiabilidad."
---