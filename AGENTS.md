# AGENTS.md - Guía de Comportamiento para Agentes Autónomos

## System Role & Context
**Dos Ruedas Pro / Envios DosRuedas** es una plataforma de gestión logística de última milla diseñada para optimizar la eficiencia operativa en Mar del Plata, Argentina. El sistema abarca desde la cotización dinámica hasta la exportación de propuestas operativas en **PDF de alta fidelidad (formato A4)**. El agente debe actuar como un Senior AI Engineer enfocado en la precisión técnica, la integridad visual y el cumplimiento de la identidad de marca.

## Source of Truth (Core Specifics)

### Propósito y Metas
- **Propósito**: Digitalizar el ciclo de vida completo de la mensajería y delivery de última milla.
- **Metas**:
  1. **Cotización Dinámica**: Estimaciones automáticas basadas en distancia real (Google Maps).
  2. **Maquetación A4**: Etiquetas y propuestas PDF que coincidan exactamente con lo visualizado en pantalla.
  3. **Optimización de Repartidores**: Escaneo móvil en tiempo real e itinerarios interactivos.
  4. **Consistencia de Marca**: Identidad futurista e industrial aplicada mediante tokens semánticos.

### Terminología y Copywriting
- **Slogan Oficial**: "Tu solución confiable".
- **Voseo Argentino**: Obligatorio para todo contenido público (*hablá*, *cotizá*, *tenés*, *seguí*).
- **Servicios**:
  - `Envíos Express`: Solución premium para operaciones de alta criticidad horaria.
  - `Envíos LowCost`: Ruteo masivo inteligente con la mejor tarifa de la ciudad.
  - `Envíos Flex (MeLi)`: Optimización logística para vendedores de MercadoLibre (Same-Day).
  - `E-Commerce & 3PL`: Tercerización integral (Plan Emprendedores).

### Archivos Críticos
- `prisma/schema.prisma`: Modelos de datos (`Client`, `Order`, `PriceRange`, `Etiqueta`, `Repartidor`).
- `src/app/globals.css`: Variables HSL, reglas de impresión A4 y animaciones custom.
- `src/lib/navigation.ts`: Configuración centralizada de rutas y etiquetas.
- `src/app/actions.ts`: Lógica de negocio y mutaciones de base de datos (Server Actions).
- `docs/DESIGN.md`: Especificaciones detalladas de UI/UX y tokens de diseño.

### Enums y Estados (Database Truth)
- **OrderStatusEnum**: `PENDIENTE`, `EN_CURSO`, `ENTREGADO`, `CANCELADO`.
- **EtiquetaStatus**: `PENDIENTE`, `IMPRESA`, `EN_CAMINO`, `ENTREGADA`, `NO_ENTREGADA`.
- **ServiceTypeEnum**: `EXPRESS`, `LOW_COST`, `PUNTO_DE_RETIRO`.

## Core Stack Rules
- **Framework:** Next.js 16.2.4 (App Router). Priorizar Server Components.
- **UI Architecture:**
  - Componentes de página modulares en `src/components/paginas/` o subdirectorios especializados en `src/components/`.
  - Estilado con Tailwind CSS siguiendo el **Stitch Design System**.
  - **Maquetación A4:** Uso estricto de unidades `mm` y control total de overflow.
- **Type Safety:** TypeScript en modo estricto. Prohibido el uso de `any`.
- **Database:** Prisma ORM v7. Importaciones siempre desde paths relativos a `generated/prisma/client`.

## AI Agent Flows (Genkit)
El core de inteligencia reside en `src/ai/flows/`.
- **Flow Principal:** `optimize-delivery-routes.ts`.
  - **Inputs:** `addresses: string[]`, `vehicleType: 'moto' | 'furgon'`, `priority: boolean`.
  - **Process:** Geocodificación vía Google Maps -> Agrupación por zonas -> Ordenamiento por ventana horaria.

## Strict Guidelines ("Qué hacer" vs "Qué NO hacer")

### SÍ Hacer:
- **Layout Elástico:** Usar Flexbox (`flex-grow`, `flex-shrink`) para layouts dinámicos que se adapten al diseño A4.
- **Responsive A4:** Controlar márgenes y saltos de página (`page-break-inside: avoid`).
- **Copywriting Argentino:** Usar "voseo" en todo el contenido público.
- **Tokens de Diseño**: Usar variables HSL (`var(--primary)`, `var(--secondary)`, etc.).

### NO Hacer:
- **Reducción Destructiva:** No eliminar texto o datos reales para "ahorrar espacio".
- **External CSS:** No importar librerías de CSS externas. Todo debe ser Tailwind nativo.
- **Direct DOM Manipulation:** No usar `document` o `window` fuera de hooks o comprobaciones de servidor.
