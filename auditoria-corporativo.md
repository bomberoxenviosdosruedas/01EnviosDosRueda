# Auditoría Técnica: Sección Informativa Corporativa (`src/app/nosotros/`)

## 1. Propósito y Contexto Funcional
Esta sección humaniza la marca **Envíos DosRuedas** y proporciona el soporte informativo necesario para cerrar el ciclo de confianza del cliente.
- **Sobre Nosotros:** Presenta la historia, misión, visión y valores de la empresa.
- **Preguntas Frecuentes (FAQ):** Resuelve dudas operativas comunes para reducir la carga de soporte en canales directos.
- **Nuestras Redes:** Integra la presencia digital (Instagram, Facebook, WhatsApp) y muestra un feed dinámico de actividad.

## 2. Arquitectura de Archivos y Componentes Actuales
La sección corporativa utiliza un diseño limpio con componentes cliente para la interactividad (acordeones, tabs, feeds).

### Rutas Analizadas:
1. **Sobre Nosotros:** `src/app/nosotros/sobre-nosotros/page.tsx`
2. **Preguntas Frecuentes:** `src/app/nosotros/preguntas-frecuentes/page.tsx`
3. **Nuestras Redes:** `src/app/nosotros/nuestras-redes/page.tsx`

### Componentes Clave:
- **About:** `AboutHero`, `WhoWeAre`, `CompanyValues`, `CompanyStory`, `TeamSection`, `MissionVision`.
- **FAQ:** `FaqHero`, `FaqCategories` (usa `FaqItem`), `FaqContactCta`.
- **Social:** `SocialHero`, `SocialConnect`, `SocialFeed`, `SocialBenefits`, `NewsletterSignup`.

## 3. Composición de Diseño y UI (Tailwind CSS)
- **Fondos:** Uso de `bg-accent/50` y `bg-accent/30` para crear una diferenciación visual con las secciones de servicios, manteniendo la elegancia.
- **Componentes de Glass:** Uso de `backdrop-blur-sm`, `bg-background/50` y `border-border/50` en tarjetas de testimonios y feeds.
- **Interactividad FAQ:** Sistema de categorías basado en estados de React (`useState`) que cambia el set de preguntas mostrado. Los ítems usan animaciones de apertura/cierre.
- **Feed Social:** Grid de tarjetas responsivas con efectos hover (`group-hover:scale-105`) y colores temáticos según la plataforma (Azul Facebook, Degradado Instagram, Verde WhatsApp).

## 4. Estructura de Datos, Estados y Lógica Real
- **Fetching Social:** La página de redes es un Server Component que invoca `getAllPosts()` de `src/lib/social/posts.ts`. Esta función consulta la tabla `socialPost` en Prisma, mapeando los datos al tipo `SocialPostType`.
- **Tipado:** Uso riguroso de interfaces en `src/types/social-post.ts` para asegurar la consistencia del feed.
- **Lógica de FAQ:** Los datos están hardcodeados en el componente `FaqCategories`, organizados en 3 categorías principales: "servicios", "precios" y "proceso".
- **Reputación:** Inclusión de un bloque de "4.9 estrellas en Google Reviews" con íconos de estrellas (`Star`) de Lucide.

## 5. Textos y Copys Literales Actuales

### Sobre Nosotros
- **Título Hero:** "Sobre Nosotros"
- **Eslogan WhoWeAre:** "Tu aliado confiable en mensajería y delivery en Mar del Plata"
- **Párrafo Visión:** "Envíos DosRuedas se posiciona en el mercado como tu Partner Logístico Especializado. Entendemos que la eficiencia operativa en la entrega es el pilar fundamental de la experiencia del cliente final."

### Preguntas Frecuentes (Muestras)
- **Categorías:** "Servicios Generales", "Precios y Pagos", "Proceso de Envío".
- **Pregunta clave:** "¿Qué sucede si el destinatario no está presente o rechaza el producto?"
- **Respuesta:** "Si tu comprador rechaza el producto en el domicilio, la devolución del paquete a tu tienda o local se realiza totalmente SIN CARGO."

### Comunidad DosRuedas
- **H1 Hero:** "Comunidad DosRuedas"
- **Descripción:** "Conectate con nuestra red logística. Seguí nuestro día a día, novedades y casos de éxito corporativo en Mar del Plata."
- **Botón Feed:** "Ver Original" / "Ver Publicación en [Plataforma]".
- **Llamado a la acción:** "Seguir todas nuestras cuentas →"
