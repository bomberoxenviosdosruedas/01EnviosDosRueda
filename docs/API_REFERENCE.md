# Referencia de API y Flujos de IA - Dos Ruedas Pro

La comunicación entre el cliente y el servidor en Dos Ruedas Pro se realiza principalmente a través de **Server Actions** de Next.js y flujos de **Genkit AI**.

## 1. Server Actions Principales

### Órdenes y Cotización (`src/app/ordenes/actions.ts`)

| Función | Descripción | Inputs Principales |
| :--- | :--- | :--- |
| `searchClientByPhone` | Busca un cliente existente por su número de teléfono. | `phone: string` |
| `registerClient` | Registra un nuevo cliente en el sistema. | Datos de `Client` |
| `quoteShipment` | Calcula el costo estimado basado en origen y destino. | `origin, destination, serviceType` |
| `saveShipment` | Crea una nueva orden y su etiqueta correspondiente. | Datos de `Order` |

### Administración de Clientes (`src/app/admin/clientes/actions.ts`)

| Función | Descripción |
| :--- | :--- |
| `createClient` | Alta de cliente desde el panel admin. |
| `updateClient` | Modificación de datos de cliente. |
| `toggleClientStatus` | Activa/desactiva a un cliente para operaciones. |

### Operaciones de Repartidor (`src/app/admin/repartidores/actions.ts`)

| Función | Descripción |
| :--- | :--- |
| `createRepartidor` | Alta de nuevo repartidor con tipo de vehículo. |
| `assignEtiquetaByOrderNumber` | Vincula una etiqueta a un repartidor específico. |

### Motor de Precios (`src/app/admin/cotizaciones/actions.ts`)

| Función | Descripción |
| :--- | :--- |
| `updateMultiplePriceRanges` | Actualización masiva de la matriz de costos por distancia. |
| `createPriceRange` | Define un nuevo rango de distancia y precio. |

---

## 2. Flujos de Inteligencia Artificial (Genkit)

Los flujos están ubicados en `src/ai/flows/` y utilizan el SDK de Genkit para orquestar llamadas a modelos de lenguaje (LLMs).

### `summarize-testimonials`
- **Propósito**: Condensar múltiples reseñas de clientes en un resumen ejecutivo que destaca el sentimiento general.
- **Input**: `testimonials: string`
- **Output**: `summary: string`

### `generate-image-prompt` / `generate-optimal-image-prompt`
- **Propósito**: Crear descripciones detalladas para generadores de imágenes (como Imagen o Midjourney) alineadas con la estética "Corporate/Modern" de Dos Ruedas.
- **Inputs**: Atributos del servicio o componente.
- **Output**: Prompt optimizado en inglés.

### `summarize-service-page`
- **Propósito**: Generar metadescripciones SEO y resúmenes para las landing pages de servicios.

---

## 3. Integraciones de Terceros (Server-Side)

### Geocodificación (Nominatim)
Se utiliza para normalizar direcciones y obtener coordenadas precisas durante la creación de órdenes en el servidor.
- **Endpoint**: `https://nominatim.openstreetmap.org/search`
- **Uso**: Implementado en `src/lib/maps/nominatim.ts`.

### Ruteo (OSRM)
Utilizado para calcular la distancia de conducción entre puntos, base fundamental para el cálculo del precio.
- **Endpoint**: `https://router.project-osrm.org/route/v1/driving/`
- **Uso**: Implementado en `src/lib/maps/osrm.ts`.
