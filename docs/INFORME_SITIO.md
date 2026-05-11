# Informe Detallado del Sitio Web: Envios DosRuedas

Este documento proporciona un análisis exhaustivo de las páginas que componen el ecosistema de **Envios DosRuedas**, abarcando tanto el sitio público (landing, servicios, herramientas) como las áreas operativas (administración y repartidores).

---

## 1. Páginas Principales (Públicas)

### # Inicio / Home (`src/app/page.tsx`)
* **Rol**: Es la página de aterrizaje (landing page) principal y el punto de entrada al sitio. Su objetivo es captar la atención del usuario, presentar la propuesta de valor y dirigirlo a los distintos servicios.
* **Mensaje Principal**: Presentación de servicios de mensajería, la visión de la empresa y una introducción a los beneficios para emprendedores.
* **Estructura Visual**: Utiliza componentes como `<OptimizedHeader>`, un `<HeroAnimado>` para captar atención, `<VisionSection>`, `<ServicesOverview>`, `<CtaSection>` (Llamado a la acción), `<EmprendedoresHome>`, `<SliderServicios>`, el `<CarruselRedes>` y el `<Footer>`.
* **Stack Tecnológico**: Next.js con Server Components, implementando **Lazy Loading (Code Splitting)** usando `next/dynamic` para mejorar la velocidad de carga inicial. TailwindCSS para los estilos.

### # Contacto (`src/app/contacto/page.tsx`)
* **Rol**: Canal directo de comunicación entre los clientes y la empresa.
* **Mensaje Principal**: "Respuesta rápida y atención personalizada", proporcionando acceso fácil a canales como WhatsApp, teléfono y correo electrónico.
* **Estructura Visual**: Encabezado `<OptimizedHeader>`, componente principal `<ContactPageClient>` (que gestiona el formulario o enlaces interactivos), `<CarruselRedes>` y `<Footer>`.
* **Stack Tecnológico**: Next.js (Client Components).

---

## 2. Herramientas Interactivos

### # Seguimiento de Envíos (`src/app/seguimiento/page.tsx`)
* **Rol**: Herramienta interactiva clave para que los clientes puedan rastrear el estado de sus pedidos en tiempo real.
* **Mensaje Principal**: Brindar transparencia y control al usuario, mostrando exactamente dónde está su paquete y quién lo entrega.
* **Estructura Visual**: Buscador con `<Input>` y `<Button>`, estado general con `<OrderStatus>`, detalles del repartidor en `<DriverInfo>`, línea de tiempo en `<UpdatesTimeline>`, datos del pedido en `<OrderDetails>`, y un mapa interactivo `<InteractiveTrackingMap>`.
* **Stack Tecnológico**: Next.js (Client Component `use client`), React Hooks (`useState`, `useEffect`), integración de mapas y librerías de fechas (`date-fns`).

### # Generar Orden (`src/app/ordenes/page.tsx`)
* **Rol**: Permite a los clientes (o usuarios registrados) generar y cargar nuevas órdenes de envío directamente desde la web.
* **Mensaje Principal**: Formulario guiado para la carga de datos del paquete, origen y destino.
* **Estructura Visual**: `<OptimizedHeader>`, el componente central `<GenerarEnvioForm>` que maneja la lógica de la orden, `<CarruselRedes>` y `<Footer>`.
* **Stack Tecnológico**: Next.js (Client Component), React.

### # Cotizador Express (`src/app/cotizar/express/page.tsx`)
* **Rol**: Herramienta de ventas que permite a los usuarios calcular instantáneamente el costo de un envío urgente.
* **Mensaje Principal**: "Calcula el precio de tus envíos express en Mar del Plata de forma rápida y sencilla".
* **Estructura Visual**: `<CalculatorHero>`, `<ExpressCalculator>` (lógica del cotizador), `<MapFeatures>`, `<PricingInfo>`, `<CalculatorTips>` y `<CalculatorContact>`.
* **Stack Tecnológico**: Next.js.

### # Cotizador LowCost (`src/app/cotizar/lowcost/page.tsx`)
* **Rol**: Herramienta de cotización similar a la Express, pero orientada a los envíos económicos y programados.
* **Mensaje Principal**: Cálculo transparente para la opción más conveniente en envíos no urgentes.
* **Estructura Visual**: `<LowCostCalculatorHero>`, `<LowCostCalculator>`, `<MapFeatures>`, `<PricingInfo>` y componentes de contacto/tips.
* **Stack Tecnológico**: Next.js.

---

## 3. Oferta de Servicios

### # Envíos Express (`src/app/servicios/envios-express/page.tsx`)
* **Rol**: Landing page específica para la venta del servicio de alta prioridad.
* **Mensaje Principal**: Solución premium para operaciones con alta criticidad horaria. El cliente tiene "control total y certeza absoluta".
* **Estructura Visual**: `<OptimizedHeader>`, el contenido principal en `<ExpressPageClient>`, seguido de `<CarruselRedes>` y `<Footer>`.
* **Stack Tecnológico**: Next.js con validación de caché ISR (`revalidate = 3600`) optimizado y uso de base de datos con **Prisma** para traer los rangos de precios dinámicos.

### # Envíos LowCost (`src/app/servicios/envios-lowcost/page.tsx`)
* **Rol**: Landing page específica para vender el servicio económico mediante rutas optimizadas.
* **Mensaje Principal**: Máxima rentabilidad y variabilización de costos logísticos sin sacrificar seguridad.
* **Estructura Visual**: `<LowcostHero>`, `<LowcostContent>`, `<PricingComparison>`, `<LowcostBenefits>`, `<HowLowcostWorks>`, y un llamado a la acción `<LowcostCta>`.
* **Stack Tecnológico**: Next.js Server Components, consultas a base de datos usando **Prisma**.

### # Envíos Flex MercadoLibre (`src/app/servicios/enviosflex/page.tsx`)
* **Rol**: Página enfocada en un nicho B2B específico (vendedores de MercadoLibre).
* **Mensaje Principal**: Potenciar la reputación del vendedor asegurando entregas "Same-Day" eficientes (medidor en verde).
* **Estructura Visual**: `<EnviosFlexHero>`, `<EnviosFlexContent>`, `<MercadoLibreBenefits>`, `<FlexPricingRanges>`, `<HowItWorks>` y `<Requirements>`.
* **Stack Tecnológico**: Next.js Server Components y **Prisma** para inyección de precios.

### # Plan Emprendedores (`src/app/servicios/plan-emprendedores/page.tsx`)
* **Rol**: Página dirigida a e-commerce y tiendas que buscan tercerizar logística (3PL).
* **Mensaje Principal**: Soluciones escalables, transformación de gastos fijos en variables, fulfillment y cuentas corrientes corporativas.
* **Estructura Visual**: `<EntrepreneurHero>`, `<PlanInformation>`, `<EntrepreneurBenefits>`, `<EntrepreneurPricingRanges>` y `<EntrepreneurCta>`.
* **Stack Tecnológico**: Next.js Server Components e integración con **Prisma**.

---

## 4. Institucional (Nosotros)

### # Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)
* **Rol**: Humanizar la marca y generar confianza contando el trasfondo de la empresa.
* **Mensaje Principal**: Historia de la empresa, valores, misión, visión y validación social ("4.9 estrellas en Google Reviews").
* **Estructura Visual**: `<AboutHero>`, `<WhoWeAre>`, `<CompanyValues>`, `<CompanyStory>`, `<TeamSection>` y `<MissionVision>`.
* **Stack Tecnológico**: Next.js y React para maquetación modular.

### # Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)
* **Rol**: Auto-asistencia y soporte al usuario para aliviar la carga de atención al cliente.
* **Mensaje Principal**: Respuestas rápidas a consultas sobre tarifas, tiempos, cobertura operativa y normativas de envío.
* **Estructura Visual**: `<FaqHero>`, acordeones divididos por `<FaqCategories>` y un `<FaqContactCta>` para derivar las dudas no resueltas.
* **Stack Tecnológico**: Next.js y componentes interactivos UI (posiblemente Radix UI / shadcn).

### # Nuestras Redes (`src/app/nosotros/nuestras-redes/page.tsx`)
* **Rol**: Centro de la comunidad digital de la marca para fidelizar clientes.
* **Mensaje Principal**: Invitación a conectar para obtener promociones, noticias y consejos.
* **Estructura Visual**: `<SocialHero>`, `<SocialConnect>`, `<SocialBenefits>`, previsualización visual `<SocialFeed>` y `<NewsletterSignup>`.
* **Stack Tecnológico**: Next.js.

---

## 5. Áreas Legales

### # Términos y Condiciones (`src/app/terminos-y-condiciones/page.tsx`)
* **Rol**: Documento legal que protege a la empresa y establece las reglas del servicio.
* **Mensaje Principal**: Políticas, procedimientos operativos y reglas de uso del servicio "Envios DosRuedas".
* **Estructura Visual**: Presentación formal mediante `<HeroSection>` y estructura de tarjetas (`<Card>`, `<CardHeader>`, `<CardContent>`) con iconos de `lucide-react`.
* **Stack Tecnológico**: Next.js estático.

### # Política de Privacidad (`src/app/politica-de-privacidad/page.tsx`)
* **Rol**: Cumplimiento legal de protección de datos personales.
* **Mensaje Principal**: Explicación de cómo se recopilan, protegen y gestionan los datos de los usuarios.
* **Estructura Visual**: Similar a Términos, usando `<HeroSection>` y componentes modulares de tarjetas para mejorar la legibilidad.
* **Stack Tecnológico**: Next.js estático.

---

## 6. Portales de Operaciones Internas (Privados)

### # Acceso Repartidor (`src/app/repartidor/page.tsx`)
* **Rol**: Portal de acceso para que el personal de campo inicie su jornada.
* **Mensaje Principal**: "Selecciona tu perfil para acceder a tu panel de entregas".
* **Estructura Visual**: Layout minimalista que renderiza el componente `<RepartidorSelection>`.
* **Stack Tecnológico**: Next.js Server Components. Deshabilita el prerendering (`revalidate = 0`) para siempre consultar datos frescos en vivo de la base de datos (**Prisma**).

### # Panel de Administración (`src/app/admin/page.tsx`)
* **Rol**: Dashboard de control general de toda la aplicación para los operadores y gerentes de la empresa.
* **Mensaje Principal**: Espacio privado y centralizado para la gestión operativa (órdenes, clientes, tarifas, etc).
* **Estructura Visual**: Navegación de administrador `<AdminHeader>`, el dashboard principal `<AdminDashboard>` y `<Footer>`.
* **Stack Tecnológico**: Next.js y React, con exclusión de indexación en buscadores (`robots: noindex, nofollow`).
