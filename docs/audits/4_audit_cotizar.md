---
# Cotizadores de Envíos Interactivos (`/cotizar/*`)
## 1. Propósito y Contexto Funcional
- Explicación: Las páginas de cotizadores (`express` y `lowcost`) proporcionan una herramienta interactiva para que los usuarios calculen el costo de un envío ingresando una dirección de origen y otra de destino en Mar del Plata. Utilizan la API de Google Maps (vía acciones de servidor) para calcular distancia y tiempo, y luego cruzan esa información con la base de datos de rangos de precios (`PriceRange`) para devolver una tarifa dinámica. Si la distancia excede los rangos estándar, se solicita al usuario que consulte manualmente.

## 2. Arquitectura de Archivos y Componentes Actuales
- Rutas analizadas:
  - `src/app/cotizar/express/page.tsx`
  - `src/app/cotizar/lowcost/page.tsx`
- Tipo de archivos principales: Server Components (las páginas) que importan Client Components complejos (`ExpressCalculator` y `LowCostCalculator`).
- Dependencias/Importaciones principales:
  - Compartidos: `OptimizedHeader`, `CarruselRedes`, `Footer`.
  - Compartidos de UI/Cotizador: `MapFeatures`, `PricingInfo`, `CalculatorTips`, `CalculatorContact`, `RouteMap`.
  - Express: `CalculatorHero`, `ExpressCalculator`.
  - LowCost: `LowCostCalculatorHero`, `LowCostCalculator`.
  - Lógica: Ambos calculadores importan el Server Action `quoteShipment` desde `@/app/ordenes/actions.ts` y usan el enum `ServiceTypeEnum` generado por Prisma.

## 3. Composición de Diseño y UI (Tailwind CSS)
- Desglose visual:
  - Estructura: Diseño centrado con contenedor `max-w-2xl lg:max-w-3xl` para mantener el foco en la calculadora. Fondo `bg-background`.
  - Tarjetas (`Card`): Uso extensivo de las Cards de `shadcn/ui` con `shadow-xl`. Encabezados con `font-display` y texto primario (`text-primary`).
  - Inputs y Botones: Campos de texto claros y botones grandes (`size="lg"`). Botón primario para calcular y un botón verde (`bg-green-600 hover:bg-green-700`) para el "Call to Action" de confirmar envío (actualmente muestra un alert).
  - Resultados: La tarjeta de resultado aparece abajo, con un fondo sutil (`bg-primary/5 border-primary/20`) destacando precio, distancia y tiempo de viaje.
  - Tipografía: Uso explícito de la clase `font-sans` para los textos del formulario y descripción, y `font-display` (Orbitron) para títulos y precios.

## 4. Estructura de Datos, Estados y Lógica Real
- Hooks React (`ExpressCalculator` / `LowCostCalculator`):
  - `useState`: `origin`, `destination`, `isCalculating`, `quoteDetails` (tipo `QuoteDetails` o null).
  - `useMemo`: `mapCoordinates` (extrae `{lat, lng}` de `quoteDetails` para pasarlo al componente `RouteMap`).
  - `useToast`: Para feedback del usuario (error si faltan campos, success al cotizar o error si falla la API).
- Lógica de Cálculo:
  - Evento `handleSubmit`: Cancela comportamiento por defecto, valida inputs vacíos y llama a `quoteShipment({originAddress, destinationAddress, serviceType})`.
  - Si `result.success` es true, actualiza `quoteDetails` y dispara Toast.
  - Si `result.data.price === null`, el botón "Confirmar Envío" se deshabilita (`disabled={quoteDetails.price === null}`).

## 5. Textos y Copys Literales Actuales
- Express (Metadata y Calculadora):
  - Metadata: "Cotizador de Envíos Express - Envios DosRuedas", "Calcula el precio de tus envíos express en Mar del Plata..."
  - Formulario: "Calcula tu Envío Express", "Ingresa las direcciones de origen y destino para obtener una cotización instantánea.", "Dirección de Origen" ("Ej: Av. Colón 1234, Mar del Plata"), "Dirección de Destino" ("Ej: Juan B. Justo 5678, Mar del Plata").
  - Botón: "Calcular Ruta y Precio" / "Calculando...".
  - Resultados: "Tu Cotización Express", "Basado en la distancia y tiempo estimados.", "Distancia:", "Tiempo Estimado:", "Precio Estimado:". Si no hay precio: "Consultar", "Distancia excede rangos estándar o no pudo ser calculada. Contáctanos para cotización."
  - Acciones: "Confirmar Envío Express", "Nueva Cotización".
- LowCost (Metadata y Calculadora):
  - Metadata: "Cotizador de Envíos Low Cost - Envios DosRuedas", "Calcula el precio de tus envíos económicos y programados en Mar del Plata..."
  - Formulario: "Calcula tu Envío Low Cost", "Ingresa las direcciones de origen y destino para obtener una cotización para envíos programados."
  - Botón: "Calcular Ruta y Precio Low Cost".
  - Resultados: Similar a Express, pero mensaje de no precio dice: "La distancia excede nuestros rangos de precios estándar o no pudo ser calculada. Por favor, contáctanos para una cotización personalizada."
  - Acciones: "Confirmar Envío Low Cost", "Nueva Cotización".
---