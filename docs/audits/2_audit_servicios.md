---
# Sección de Servicios Detallados (`/servicios/*`)
## 1. Propósito y Contexto Funcional
- Explicación: La sección de servicios detalla las cuatro ofertas principales de "Envios DosRuedas": Envíos Express (urgentes e inmediatos con cotización dinámica), Envíos LowCost (ruteo masivo con tarifa económica), Envíos Flex (especializado en MercadoLibre con reputación garantizada), y Plan Emprendedores / E-Commerce 3PL (tercerización logística y fulfillment). Sirven como páginas de destino (landing pages) para la conversión y SEO específico para cada segmento de mercado en Mar del Plata.

## 2. Arquitectura de Archivos y Componentes Actuales
- Rutas analizadas:
  - `src/app/servicios/envios-express/page.tsx`
  - `src/app/servicios/envios-lowcost/page.tsx`
  - `src/app/servicios/enviosflex/page.tsx`
  - `src/app/servicios/plan-emprendedores/page.tsx`
- Tipo de archivos principales: Server Components con obtención de datos asíncrona (`prisma.priceRange.findMany`).
- Dependencias/Importaciones principales:
  - `OptimizedHeader`, `CarruselRedes`, `Footer` en todas las páginas.
  - Componentes específicos por servicio (Client Components):
    - Express: `ExpressPageClient` (que a su vez contiene subcomponentes como Hero y rangos de precio).
    - LowCost: `LowcostHero`, `LowcostContent`, `PricingComparison`, `LowcostBenefits`, `HowLowcostWorks`, `LowcostCta`.
    - Flex: `EnviosFlexHero`, `EnviosFlexContent`, `MercadoLibreBenefits`, `FlexPricingRanges`, `HowItWorks`, `Requirements`, `EnviosFlexCta`.
    - Emprendedores: `EntrepreneurHero`, `PlanInformation`, `EntrepreneurBenefits`, `EntrepreneurPricingRanges`, `EntrepreneurCta`.
  - Base de datos: `prisma` (exportado de `@/lib/prisma`) y enums (`ServiceTypeEnum`).

## 3. Composición de Diseño y UI (Tailwind CSS)
- Desglose visual (Patrones compartidos):
  - Fondo oscuro profundo (`bg-[#050810]`, `bg-[#0a0d16]`).
  - Héroes (`HeroSection` compartido o implementaciones similares): Uso de imágenes de fondo (`/bannerenvios.webp`), gradientes y botones con variantes `secondary` (Amarillo) y `outline`. Textos en Orbitron itálica.
  - Secciones de contenido: Uso intensivo de `framer-motion` para animaciones `whileInView`, `staggerChildren`. Tarjetas de cristal (`bg-white/5 backdrop-blur-sm`), bordes semi-transparentes (`border-white/10`).
  - Distintivos: Grandes textos en opacidad baja (e.g., "ENVIOS LOWCOST", "FLEX SAME-DAY") en el fondo como marca de agua.
  - Elementos Flex (Mercado Libre): Los componentes (aunque no leídos completos aquí, según las reglas de memoria) deben incorporar el amarillo `#FFF159`.

## 4. Estructura de Datos, Estados y Lógica Real
- Llamadas a Base de Datos (Server Side):
  - `getPriceRanges()` en cada página consulta a Prisma filtrando por `ServiceTypeEnum` (EXPRESS, LOW_COST) y mapea `Decimal` a `number`.
  - Express revalida cada 3600s (`revalidate = 3600`).
  - LowCost revalida cada 3600s (`revalidate = 3600`).
  - Flex y Emprendedores tienen `revalidate = 0` (dinámico total) y hacen fallback a `LOW_COST` en la tabla de precios.
- Hooks/React:
  - Uso de `framer-motion` (Client components).
  - Listas estáticas para features (`features` arrays).

## 5. Textos y Copys Literales Actuales
- Express (metadata y content inferido):
  - "Envíos Express Inmediatos en Mar del Plata | Tu solución confiable"
  - "La solución premium para operaciones de alta criticidad horaria..."
  - Condiciones: "Tolerancia: 10 min en puerta", "Recargo lluvia: 50% sobre el valor", "Bulto excedente: +$1.800 (5kg/40cm)", "Anticipación: Mínimo 2 horas".
- LowCost:
  - Hero: "TARIFA OPTIMIZADA", "ENVÍOS LOWCOST: MÁXIMA RENTABILIDAD", "COTIZAR ENVÍO LOWCOST".
  - Content: "Eficiencia en Ruteo" ("Ruteo diario masivo optimizado. NO se elige rango horario para maximizar eficiencia."), "Corte y Entrega" ("Pedidos antes de las 13:00 hs se entregan garantizados antes de las 19:00 hs."), "Tarifa Económica". Marca de agua: "ENVIOS LOWCOST".
- Flex:
  - Hero: "ENVÍOS FLEX MERCADOLIBRE: POTENCIÁ TU REPUTACIÓN", "ACTIVAR ENVÍOS FLEX".
  - Content: "Reputación Garantizada" ("Cumplimos con los estrictos horarios..."), "Corte 15:00 hs", "Seguimiento App". Marca de agua: "FLEX SAME-DAY".
- Plan Emprendedores (3PL):
  - Hero: "E-COMMERCE 3PL", "LOGÍSTICA 3PL Y CUENTAS CORRIENTES", "SOLICITAR PLAN CORPORATIVO".
  - Content: "Soluciones 3PL" ("Terceriza tu logística con nosotros..."), "Fulfillment" ("Picking y packing profesional..."), "Cuentas Corrientes" ("Esquemas de pago flexibles..."). Marca de agua: "CORE BUSINESS".
---