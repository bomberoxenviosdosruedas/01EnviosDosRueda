# Informe Detallado del Sitio Web: Envíos DosRuedas

Este informe analiza la estructura, el propósito y el contenido de las páginas del proyecto web **Envíos DosRuedas**, proporcionando una visión técnica y estratégica del ecosistema digital basándose en el directorio `src/app`.

---

## # Página de Inicio (`/`)
*   **Propósito**: Puerta de entrada principal diseñada para convertir visitantes en clientes mediante la presentación de la propuesta de valor y la facilitación del acceso a los servicios clave.
*   **Mensajes Clave**: "Tu solución confiable"; Partner logístico líder en Mar del Plata; Especialistas en E-commerce y B2B; Flota ágil y especializada.
*   **Secciones Principales**: Hero animado (LCP), sección de visión corporativa, vista general de servicios, sección de CTA para cotizaciones, carrusel de redes sociales y footer institucional.
*   **Detalles Técnicos**: Next.js 16 (App Router), optimización de rendimiento mediante `next/dynamic` para componentes below-the-fold, Tailwind CSS para el sistema de diseño.

## # Envíos Express (`/servicios/envios-express`)
*   **Propósito**: Presentar y comercializar el servicio premium de entregas inmediatas para necesidades críticas de tiempo.
*   **Mensajes Clave**: Control total del rango de entrega; Rapidez absoluta; La solución definitiva para envíos urgentes en la ciudad.
*   **Secciones Principales**: Hero de servicio unificado, calculadora de precios dinámica, descripción de beneficios premium, carrusel de redes y pie de página.
*   **Detalles Técnicos**: Revalidación incremental (ISR) de 1 hora (`revalidate = 3600`), integración con Prisma ORM para obtener tarifas dinámicas desde la base de datos.

## # Envíos LowCost (`/servicios/envios-lowcost`)
*   **Propósito**: Posicionar la opción más económica basada en ruteo masivo inteligente para envíos programados y de alto volumen.
*   **Mensajes Clave**: Máxima rentabilidad para el negocio; Ruteo inteligente; La mejor tarifa garantizada en Mar del Plata.
*   **Secciones Principales**: Hero de impacto visual, comparador de tarifas dinámico, flujo de trabajo del servicio (How it works), lista de beneficios de costos y CTA de contacto.
*   **Detalles Técnicos**: Uso del componente compartido `HeroSection`, inyección de datos mediante props desde el servidor para optimizar la velocidad de carga.

## # Envíos Flex MercadoLibre (`/servicios/enviosflex`)
*   **Propósito**: Atraer a vendedores de MercadoLibre que requieren logística homologada para cumplir con las entregas en el día y mantener su reputación.
*   **Mensajes Clave**: "Tu medidor siempre en verde"; Especialistas en logística Flex; Potencia tu reputación como vendedor en MeLi.
*   **Secciones Principales**: Hero especializado en MeLi, beneficios del ecosistema Flex, tabla de precios por zonas, requisitos para el servicio y guía operativa paso a paso.
*   **Detalles Técnicos**: `revalidate = 0` para asegurar precisión absoluta en las tarifas mostradas, componentes enfocados en la conformidad con estándares externos.

## # E-Commerce & 3PL (`/servicios/plan-emprendedores`)
*   **Propósito**: Ofrecer una solución logística integral que incluye almacenamiento, gestión de inventario (picking/packing) y distribución.
*   **Mensajes Clave**: Tercerización 3PL; Escalabilidad total para negocios online; Transformación de costos fijos en variables.
*   **Secciones Principales**: Hero corporativo, información detallada del plan de tercerización, beneficios de eficiencia operativa, tabla de precios para emprendedores.
*   **Detalles Técnicos**: Arquitectura React Server Components (RSC) para entrega inmediata de contenido estático sin JavaScript inicial innecesario.

## # Seguimiento de Pedidos (`/seguimiento`)
*   **Propósito**: Herramienta de autoservicio para proporcionar tranquilidad al cliente final mediante la visibilidad total del estado de su envío.
*   **Mensajes Clave**: Rastrear pedido en tiempo real; Transparencia en la logística; Información del repartidor y tiempos estimados de llegada.
*   **Secciones Principales**: Formulario de búsqueda por ID, estado del envío, perfil del repartidor, línea de tiempo de actualizaciones y mapa interactivo.
*   **Detalles Técnicos**: Componente de cliente ("use client"), integración con Server Actions para consultas seguras a la base de datos, visualización de mapas dinámica.

## # Cotizador Express (`/cotizar/express`)
*   **Propósito**: Herramienta interactiva para la conversión rápida de prospectos interesados en conocer el costo de envíos urgentes.
*   **Mensajes Clave**: Cotizá en segundos; Transparencia total de precios; Sin sorpresas ni costos ocultos.
*   **Secciones Principales**: Hero de calculadora, selector de puntos en el mapa, desglose de costos detallado, consejos para envíos eficientes y contacto directo.
*   **Detalles Técnicos**: Lógica de geolocalización avanzada, integración con la API de precios de la base de datos para cálculos basados en kilometraje.

## # Cotizador LowCost (`/cotizar/lowcost`)
*   **Propósito**: Herramienta de autoservicio para planificar envíos económicos y ruteos masivos de forma autónoma.
*   **Mensajes Clave**: Ahorrá en logística; Planificá tus envíos de forma inteligente; La opción más conveniente para envíos no urgentes.
*   **Secciones Principales**: Calculadora optimizada para rutas múltiples, información de ahorro estimado, tips de embalaje y soporte de contacto.
*   **Detalles Técnicos**: Reutilización de lógica de mapas y geocodificación para garantizar una experiencia de usuario consistente en todo el sitio.

## # Sobre Nosotros (`/nosotros/sobre-nosotros`)
*   **Propósito**: Humanizar la marca y establecer autoridad y confianza compartiendo la trayectoria y los valores de la empresa.
*   **Mensajes Clave**: Pasión por la logística; Historia de confianza en Mar del Plata; Equipo altamente especializado y dedicado.
*   **Secciones Principales**: Historia de la empresa, valores corporativos, presentación del equipo de trabajo, misión y visión institucional.
*   **Detalles Técnicos**: Optimización de imágenes con `next/image` y uso de `HeroSection` unificado para coherencia visual absoluta.

## # Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`)
*   **Propósito**: Resolver de forma autónoma las dudas recurrentes de los usuarios para agilizar el embudo de conversión.
*   **Mensajes Clave**: Respuestas claras y directas; Soporte informativo; Todo lo que necesitás saber antes de contratar.
*   **Secciones Principales**: Hero de ayuda, categorías de preguntas frecuentes, acordeones interactivos y CTA de contacto para dudas adicionales.
*   **Detalles Técnicos**: Animaciones fluidas mediante `framer-motion` y `AnimatePresence` para una experiencia de usuario moderna y pulida.

## # Nuestras Redes (`/nosotros/nuestras-redes`)
*   **Propósito**: Integrar la presencia social de la marca, mostrar actividad reciente y fomentar la fidelización de la audiencia.
*   **Mensajes Clave**: Conectate con nosotros; Noticias y promociones exclusivas para seguidores; El día a día de DosRuedas.
*   **Secciones Principales**: Enlaces directos a perfiles sociales, feed dinámico de publicaciones recientes, beneficios de la comunidad y suscripción al newsletter.
*   **Detalles Técnicos**: Integración dinámica para mostrar contenido social actualizado, configurado con `revalidate = 0` para evitar contenido obsoleto.

## # Contacto (`/contacto`)
*   **Propósito**: Facilitar la comunicación directa para soporte técnico, consultas comerciales o atención personalizada.
*   **Mensajes Clave**: Estamos para ayudarte; Respuesta inmediata; Contactanos a través del canal que prefieras.
*   **Secciones Principales**: Formulario de contacto inteligente, botones de acceso rápido a WhatsApp, mapa de ubicación de oficina y datos de contacto legal.
*   **Detalles Técnicos**: Validación de formularios robusta en el cliente y notificaciones instantáneas mediante el sistema de Toasts.

## # Legales (`/terminos-y-condiciones` / `/politica-de-privacidad`)
*   **Propósito**: Garantizar la seguridad jurídica de la empresa y proporcionar transparencia absoluta sobre el tratamiento de datos.
*   **Mensajes Clave**: Reglas del juego claras; Protección integral de tus datos personales; Transparencia y confianza mutua.
*   **Secciones Principales**: Hero temático con iconografía de seguridad, contenido estructurado por cláusulas, fechas de última actualización y tarjetas informativas.
*   **Detalles Técnicos**: Uso de componentes de tipografía optimizados para la lectura de documentos largos y técnicos (sistema `prose`).

## # Gestión de Ordenes (`/ordenes`)
*   **Propósito**: Interfaz optimizada para la creación rápida y manual de solicitudes de envío, orientada a clientes corporativos o recurrentes.
*   **Mensajes Clave**: Generá tu envío de forma simple; Gestión logística eficiente; Control de tus solicitudes.
*   **Secciones Principales**: Formulario multi-paso de generación de envíos, buscador de direcciones y validación de datos logísticos.
*   **Detalles Técnicos**: Interfaz de alta densidad de información protegida, diseñada para la eficiencia en la carga de datos.

## # Panel de Repartidores (`/repartidor` / `/repartidor/[id]`)
*   **Propósito**: Centro operativo móvil diseñado específicamente para la gestión diaria de entregas por parte del personal de calle.
*   **Mensajes Clave**: Selección de perfil; Tu hoja de ruta digital; Gestión de entregas en tiempo real; Actualización instantánea de estados.
*   **Secciones Principales**: Selector de repartidor, listado inteligente de paquetes asignados, acciones rápidas de cambio de estado (Entregado/No Entregado) y resumen de cobros.
*   **Detalles Técnicos**: Diseño "Mobile-First", actualizaciones de base de datos optimizadas para conexiones móviles, alta legibilidad en entornos exteriores.

## # Administración Central (`/admin` y Subpáginas)
*   **Propósito**: Cerebro operativo del sistema para la monitorización global y gestión de todas las entidades del ecosistema DosRuedas.
*   **Mensajes Clave**: Control administrativo total; Monitorización de operaciones; Gestión estratégica de clientes y tarifas.
*   **Secciones Visuales o Funcionales**:
    *   **Dashboard**: Estadísticas generales del negocio.
    *   **Clientes**: Gestión de base de datos de usuarios comerciales.
    *   **Ordenes/Etiquetas**: Control de envíos y generación de documentos de despacho.
    *   **Repartidores**: Gestión del equipo de logística.
    *   **Cotizaciones**: Editor masivo de rangos de precios por KM.
    *   **Prompts/Contenido**: Herramientas de IA para generación de componentes y gestión de imágenes/posts.
*   **Detalles Técnicos**: Acceso restringido por autenticación de servidor, integración profunda con Prisma ORM y utilidades de productividad interna.

## # Prototipos y Diseño (`/prototypes`)
*   **Propósito**: Entorno de pruebas y previsualización de nuevas interfaces y componentes en desarrollo.
*   **Mensajes Clave**: Preview de Design V2; Pruebas de componentes operativos y de soporte.
*   **Secciones Principales**: Selector de prototipos (v2, hero, services, ops, support), visualizador de Landing Page V2.
*   **Detalles Técnicos**: Página "use client" con estados para intercambio rápido de componentes experimentales.

---
*Informe generado detalladamente para el proyecto Envíos DosRuedas - 2024.*
