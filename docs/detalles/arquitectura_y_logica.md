# Project Technical Blueprint: Dos Ruedas Pro

Este documento detalla la arquitectura de datos y la lógica de negocio central de la plataforma logística "Dos Ruedas Pro", consolidando el conocimiento técnico sobre el esquema de base de datos, las reglas operativas, las integraciones externas y las validaciones de seguridad.

---

## 1. Database Schema & Data Models

La persistencia de datos se gestiona mediante **Prisma ORM** sobre una base de datos **PostgreSQL**. El esquema está diseñado para soportar la trazabilidad completa desde la captación del cliente hasta la entrega final por parte del repartidor.

### 1.1. Modelos Principales

-   **`Client`**: Almacena la información de los clientes (Remitentes). Incluye campos para geolocalización (`addressLat`, `addressLng`) para optimizar futuras solicitudes.
-   **`Order`**: Representa un envío individual. Vincula al cliente con el trayecto (origen/destino), el tipo de servicio y los costos calculados.
-   **`Repartidor`**: Perfil del mensajero, incluyendo datos del vehículo y estado de actividad.
-   **`PriceRange`**: Tabla de configuración tarifaria. Define precios basados en el `ServiceType` y rangos de distancia (km).
-   **`Etiqueta`**: Entidad utilizada para la gestión operativa de entregas y hojas de ruta. Se vincula a un repartidor para su ejecución.
-   **`SocialPost`**: Datos de publicaciones en redes sociales (Instagram, Facebook) para el feed de marketing.

### 1.2. Relaciones y Enums Críticos

-   **Relaciones**:
    -   `Order` ↔ `Client`: Una orden puede pertenecer a un cliente registrado (opcional para envíos casuales).
    -   `Order` ↔ `Repartidor`: Una orden puede tener un repartidor asignado para su ejecución.
    -   `Etiqueta` ↔ `Repartidor`: Gestión de asignación de bultos/entregas específicas.
-   **Enums**:
    -   `ServiceTypeEnum`: `EXPRESS` (Prioritario), `LOW_COST` (Económico), `PUNTO_DE_RETIRO`.
    -   `OrderStatusEnum`: `PENDIENTE`, `EN_CURSO`, `ENTREGADO`, `CANCELADO`.

---

## 2. Server Actions & Business Rules

La lógica de negocio reside principalmente en Server Actions distribuidas en `src/app/`.

### 2.1. Lógica de Cotización y Tarifas (`src/app/ordenes/actions.ts`)

El cálculo del costo de envío es dinámico y depende de la distancia calculada vía OSRM y las tablas de `PriceRange`.

**Regla de Negocio (Cálculo de Precio):**
-   **Distancia ≤ 10 km**: Se busca el rango exacto en la base de datos.
-   **Distancia > 10 km**: Se aplica un precio base (rango 7-10km) más un excedente por kilómetro adicional (definido en el rango especial de 10-9999km).

```typescript
// Fragmento de lógica de cálculo en quoteShipment
if (distanceKm <= 10.00) {
  const priceRangeRecord = await prisma.priceRange.findFirst({
    where: {
      distanciaMinKm: { lte: new Prisma.Decimal(distanceKm.toFixed(2)) },
      distanciaMaxKm: { gte: new Prisma.Decimal(distanceKm.toFixed(2)) },
      serviceType: validatedData.serviceType,
      isActive: true,
    },
  });
  price = priceRangeRecord ? priceRangeRecord.precioRango.toNumber() : null;
} else {
  // Cálculo de excedente
  const basePrice = baseRangeRecord.precioRango.toNumber();
  const extraPricePerKm = extraKmRecord.precioRango.toNumber();
  const extraKm = Math.max(0, distanceKm - 10.00);
  price = basePrice + (extraKm * extraPricePerKm);
}
```

### 2.2. Validación de Tiempos de Entrega

Al guardar un envío (`saveShipment`), se aplican validaciones estrictas sobre la ventana horaria:
-   `pickupTimeFrom` < `pickupTimeTo`.
-   `deliveryDate` ≥ `pickupDate`.
-   Si la entrega es el mismo día, la hora de inicio de entrega debe ser posterior a la hora de fin de retiro.

### 2.3. Asignación de Repartidores

En `src/app/admin/repartidores/actions.ts`, la función `assignEtiquetaByOrderNumber` gestiona la transición de estados:
-   Verifica que la etiqueta esté en estado `PENDIENTE` o `IMPRESA`.
-   Cambia el estado a `EN_CAMINO` al asignar un `repartidorId`.

---

## 3. External Integrations (Maps, AI, Social)

### 3.1. Geolocalización y Ruteo (`src/lib/maps/`)

-   **Nominatim (OSM)**: Se utiliza para el geocoding directo. Todas las búsquedas se fuerzan dentro de "Mar del Plata, Argentina" para precisión local.
-   **OSRM**: Motor de ruteo externo para obtener distancias reales de conducción (en metros) y duraciones estimadas (en segundos).

```typescript
// Geocoding local en nominatim.ts
const q = `${address}, Mar del Plata, Buenos Aires, Argentina`;
const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`;
```

### 3.2. Genkit AI Integration (`src/ai/`)

La plataforma utiliza **Firebase Genkit** con el plugin de **Google AI (Gemini 2.5 Flash/Pro)** para tareas de automatización de desarrollo y optimización de contenido.

-   **Modelos**: `gemini-2.5-flash` para baja latencia y `gemini-2.5-pro` para lógica compleja.
-   **Flows**:
    -   `generateComponentPrompt`: Analiza código fuente para generar prompts de replicación de componentes UI.
    -   `generateImagePrompt`: Optimización de descripciones para generación de imágenes de marca.

---

## 4. Security & Validations (Zod, Auth Checks)

### 4.1. Integridad de Datos con Zod

Todas las Server Actions validan el `input` mediante esquemas de Zod antes de interactuar con la base de datos o APIs externas. Esto garantiza que no ingresen tipos de datos inválidos o strings malformados (ej. validación de teléfonos con regex `^\+?\d{7,15}$`).

### 4.2. Autorización (Simulada/Dev)

Actualmente, el sistema implementa una verificación de autorización simulada en `getAuthenticatedRepartidorIdFromServerSession` que busca el primer repartidor activo. En producción, esto se integra con proveedores de Auth (como Clerk o NextAuth) para asegurar que solo personal autorizado cree o asigne órdenes.

```typescript
// Auth Check simulado para creación de órdenes
const authenticatedRepartidorId = await getAuthenticatedRepartidorIdFromServerSession();
if (authenticatedRepartidorId === null) {
  return { success: false, error: 'No autorizado.' };
}
```

---
*Fin del Blueprint Técnico.*
