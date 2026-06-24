# Auditoría Técnica: Cotizadores de Envíos Interactivos (`src/app/cotizar/`)

## 1. Propósito y Contexto Funcional
Los cotizadores son la herramienta de autoservicio más crítica de la plataforma. Permiten al usuario:
- Calcular el costo exacto de un envío basado en la geolocalización.
- Visualizar la ruta óptima en un mapa interactivo.
- Comparar tiempos estimados entre el servicio **Express** y **LowCost**.
- Iniciar el proceso de solicitud de envío con datos precisos de distancia.

## 2. Arquitectura de Archivos y Componentes Actuales
La lógica de cotización está centralizada en componentes cliente que interactúan con Server Actions para el cálculo pesado y la consulta a la base de datos.

### Rutas Analizadas:
1. **Cotizador Express:** `src/app/cotizar/express/page.tsx`
2. **Cotizador LowCost:** `src/app/cotizar/lowcost/page.tsx`

### Componentes de Ingeniería:
- `ExpressCalculator` / `LowCostCalculator`: Manejan el estado del formulario (`origin`, `destination`, `isCalculating`).
- `RouteMap` (`src/components/calculator/route-map.tsx`): Integración con la API de Google Maps (`@react-google-maps/api`).
- `MapFeatures` y `PricingInfo`: Componentes informativos sobre los beneficios del cotizador y la lógica de precios.

## 3. Composición de Diseño y UI (Tailwind CSS)
- **Cards de Shadcn/ui:** Uso de `Card`, `CardHeader`, `CardTitle` con sombras (`shadow-xl`) y bordes sutiles.
- **Feedback Visual:** Uso de `Loader2` con animación `animate-spin` durante el cálculo.
- **Colores:**
  - Primario (`text-primary`) para títulos y botones de acción principal.
  - Verde (`bg-green-600`) para el botón de "Confirmar Envío".
  - Ámbar (`text-amber-600`) para advertencias cuando el precio debe ser consultado manualmente.
- **Tipografía:** Mezcla de Orbitron para títulos de tarjetas y Roboto para inputs y descripciones de campos.

## 4. Estructura de Datos, Estados y Lógica Real
- **Server Action:** Los componentes llaman a `quoteShipment` (`src/app/ordenes/actions.ts`).
  - **Inputs:** `originAddress`, `destinationAddress`, `serviceType`.
  - **Outputs:** `QuoteDetails` (distancia, duración, precio, coordenadas).
- **Google Maps API:**
  - Utiliza `useJsApiLoader` con la clave de API desde `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
  - `DirectionsService` para trazar la ruta y obtener métricas de conducción.
- **Manejo de Errores:**
  - `useToast` para notificar al usuario sobre campos incompletos o errores de la API.
  - Validaciones para distancias que exceden los rangos estándar de la base de datos (Precio: "Consultar").

## 5. Textos y Copys Literales Actuales

### Cotizador Express
- **H2:** "Calcula tu Envío Express"
- **Descripción:** "Ingresa las direcciones de origen y destino para obtener una cotización instantánea."
- **Inputs:** "Dirección de Origen", "Dirección de Destino".
- **Botón:** "Calcular Ruta y Precio Express"
- **Resultados:** "Distancia", "Tiempo Estimado", "Precio Estimado".

### Cotizador Low Cost
- **H2:** "Calcula tu Envío Low Cost"
- **Descripción:** "Ingresa las direcciones de origen y destino para obtener una cotización para envíos programados."
- **Botón:** "Calcular Ruta y Precio Low Cost"

### Informativos
- **Beneficios:** "Visualización en Mapa", "Cálculo Preciso", "Confirmación Fácil".
- **Lógica:** "¿Cómo Calculamos el Precio? Nuestros precios se basan en la distancia. Queremos que siempre sepas qué estás pagando."
- **Nota al pie:** "Para distancias muy largas o fuera de cobertura habitual, el cotizador podría indicar 'Consultar'."
