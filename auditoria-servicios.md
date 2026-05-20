# Auditoría Técnica: Sección de Servicios Detallados (`src/app/servicios/`)

## 1. Propósito y Contexto Funcional
Esta sección constituye el núcleo de la oferta comercial de **Envíos DosRuedas**. Su objetivo es educar al cliente sobre las diferentes modalidades de envío, permitiéndole elegir la que mejor se adapte a su urgencia y presupuesto.
- **Express:** Para urgencias inmediatas con control total del tiempo.
- **LowCost:** Para ruteo masivo eficiente y económico.
- **Flex:** Solución especializada para vendedores de MercadoLibre.
- **3PL/Emprendedores:** Soluciones integrales para empresas (almacenamiento, picking, cuentas corrientes).

## 2. Arquitectura de Archivos y Componentes Actuales
Todas las páginas de servicios siguen un patrón de diseño unificado, utilizando el componente `HeroSection` y secciones de beneficios/tarifas.

### Rutas Analizadas:
1. **Envíos Express:** `src/app/servicios/envios-express/page.tsx`
2. **Envíos LowCost:** `src/app/servicios/envios-lowcost/page.tsx`
3. **Envíos Flex:** `src/app/servicios/enviosflex/page.tsx`
4. **Plan Emprendedores:** `src/app/servicios/plan-emprendedores/page.tsx`

### Componentes de UI Compartidos:
- `HeroSection` (`src/components/ui/HeroSection.tsx`): Componente base para todos los héroes de servicio.
- `OptimizedHeader`, `CarruselRedes`, `Footer`.

### Componentes Específicos por Servicio:
- **Express:** `ExpressHero`, `ExpressContent`, `ExpressPricingRanges`, `ExpressBenefits`, `UrgentScenarios`, `ExpressCta`.
- **LowCost:** `LowcostHero`, `LowcostContent`, `PricingComparison`, `LowcostBenefits`, `HowLowcostWorks`, `LowcostCta`.
- **Flex:** `EnviosFlexHero`, `EnviosFlexContent`, `MercadoLibreBenefits`, `FlexPricingRanges`, `HowItWorks`, `Requirements`, `EnviosFlexCta`.
- **Emprendedores:** `EntrepreneurHero`, `PlanInformation`, `EntrepreneurBenefits`, `EntrepreneurPricingRanges`, `EntrepreneurCta`.

## 3. Composición de Diseño y UI (Tailwind CSS)
- **Héroes Unificados:** Uso de `HeroSection` con fondos de imagen (`/bannerenvios.webp`), superposiciones de gradientes (`#050810`) y botones con efectos de pulso (`animate-pulse-glow`) para CTAs secundarios.
- **Tarjetas de Tarifas:** Diseño tipo "Glassmorphism" con `bg-white/5`, `border-white/10`, y efectos hover que iluminan los bordes con el color primario (`hover:border-primary/50`).
- **Iconografía:** Lucide React (`Zap`, `Clock`, `Package`, `Truck`, `MapPin`).
- **Secciones de Contenido:** Alternancia de fondos entre `#050810` (negro) y `#0a0d16` (azul muy oscuro) para separar visualmente los bloques.
- **Tipografía:** Orbitron para títulos en itálica y negrita extrema (`font-black italic`), Roboto para descripciones técnicas.

## 4. Estructura de Datos, Estados y Lógica Real
- **Prisma & DB:** Las páginas son Server Components que realizan fetching de datos mediante `prisma.priceRange.findMany`.
  - `Express` filtra por `serviceType: EXPRESS`.
  - `LowCost`, `Flex` y `Entrepreneur` filtran por `serviceType: LOW_COST`.
- **Interfaces TS:** `PriceRangeClient` maneja la conversión de tipos `Decimal` de Prisma a `number` para los componentes cliente.
- **Lógica de Negocio:**
  - **Express:** Requiere 2 horas de anticipación mínima.
  - **LowCost:** Punto de corte a las 13:00 hs para entrega en el día (Same Day).
  - **Flex/3PL:** Introducen el concepto de "Niveles" o "Planes" (Crecimiento, Pro, Elite) basados en volumen de envíos diarios.
- **Hooks:** Uso de `useScroll` y `whileInView` de Framer Motion para animaciones de entrada en las cuadrículas de beneficios.

## 5. Textos y Copys Literales Actuales

### Envíos Express
- **H1:** "ENVÍOS EXPRESS INMEDIATOS"
- **Descripción:** "La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."
- **Condiciones:** "Tolerancia: 10 min en puerta", "Recargo lluvia: 50%", "Bulto excedente: +$1.800 (5kg/40cm)".
- **CTA:** "COTIZÁ TU ENVÍO EXPRESS"

### Envíos LowCost
- **H1:** "ENVÍOS LOWCOST: MÁXIMA RENTABILIDAD"
- **Descripción:** "Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."
- **Promesa:** "Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día."
- **CTA:** "COTIZAR ENVÍO LOWCOST"

### Envíos Flex (MercadoLibre)
- **H1:** "ENVÍOS FLEX MERCADOLIBRE: POTENCIÁ TU REPUTACIÓN"
- **Descripción:** "Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde."
- **Beneficio Clima:** "Recargo por lluvia: SOLO 30% para clientes Flex."
- **Niveles:** Nivel 1 (1-4 envíos), Nivel 2 (+5 envíos), Nivel 3 (Grandes Cuentas +10).

### E-Commerce & 3PL (Emprendedores)
- **H1:** "LOGÍSTICA 3PL Y CUENTAS CORRIENTES PARA E-COMMERCE"
- **Descripción:** "Tercerización integral con integración vertical. Transformá tu estructura de gasto fijo en soluciones escalables."
- **Planes:** "3PL Fulfillment ($6.000)", "Plan 24HS ($3.800)", "Cta. Cte. Flexible (Híbrido)".
- **CTA:** "HABLAR CON UN ASESOR"
