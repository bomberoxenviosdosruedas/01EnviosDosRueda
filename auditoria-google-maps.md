# Reporte de Auditoría Técnica: Implementación de Google Maps API

Este reporte detalla el estado actual de la integración con Google Maps en el repositorio, identificando dependencias, componentes, inicializaciones y lógica de negocio para planificar la migración hacia una infraestructura Open-Source (OpenStreetMap + Leaflet + OSRM).

## 1. Dependencias y Variables de Entorno

### Paquetes NPM (package.json)
- `@react-google-maps/api`: ^2.20.8 (Principal wrapper de React para el Maps SDK)
- `@types/google.maps`: ^3.64.0 (Definiciones de tipos para TypeScript)
- `@vis.gl/react-google-maps`: ^1.8.3 (Librería alternativa detectada pero sin uso aparente en `src`)

### Variables de Entorno
La clave de API se gestiona a través de la variable:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

**Archivos que la consumen:**
- `src/hooks/useGoogleMaps.ts` (Lado del cliente)
- `src/components/calculator/route-map.tsx` (Lado del cliente)
- `src/app/ordenes/actions.ts` (Lado del servidor - Server Actions)
- `src/app/admin/clientes/actions.ts` (Lado del servidor - Server Actions)

## 2. Inicialización y Ciclo de Vida del Script de Google

La carga del SDK de Google Maps se realiza de forma descentralizada mediante el hook `useJsApiLoader` en dos puntos clave:

### Hook: `src/hooks/useGoogleMaps.ts`
```typescript
const { isLoaded, loadError } = useJsApiLoader({
  googleMapsApiKey,
  libraries: ['places', 'drawing'],
  preventGoogleFontsLoading: true,
  language: 'es',
  region: 'AR',
});
```

### Componente: `src/components/calculator/route-map.tsx`
```typescript
const { isLoaded, loadError } = useJsApiLoader({
  googleMapsApiKey: googleMapsApiKey,
  libraries: ['places'],
});
```

## 3. Mapeo de Módulos y Componentes de UI

### Módulo de Cotización (Calculadoras)
- **Archivo:** `src/components/calculator/route-map.tsx`
- **Tipo:** `"use client"`
- **Estructuras Usadas:** `<GoogleMap>`, `<DirectionsRenderer>`, `window.google.maps.DirectionsService`.
- **Estilos:** `height: '320px', width: '100%', borderRadius: '0.5rem'`.

### Módulo de Seguimiento (Tracking)
- **Archivo:** `src/components/tracking/interactive-tracking-map.tsx`
- **Estructuras Usadas:** `<GoogleMap>` (vía hook `useGoogleMaps`).
- **Archivo Subordinado:** `src/components/tracking/route-tracker.tsx`
  - Utiliza imperativamente `window.google.maps.Marker`, `window.google.maps.InfoWindow`, `window.google.maps.DirectionsService` y `window.google.maps.DirectionsRenderer` para dibujar la ruta del conductor.

### Página de Contacto
- **Archivo:** `src/components/contact/contact-map.tsx`
- **Estructuras Usadas:** `<iframe>` con Google Maps Embed API.
- **Estilos:** `grayscale contrast-[1.1] invert dark:invert-0`.

## 4. Lógica de Ruteo, Geocodificación y Reglas de Negocio

### Geocodificación (Server-Side)
No se detectó el uso de `Places Autocomplete` en inputs. En su lugar, el sistema utiliza geocodificación directa mediante Server Actions al validar formularios o cotizar.

**Archivo:** `src/app/ordenes/actions.ts`
```typescript
async function geocodeAddressWithGoogle(address: string, cityHint: string = "Mar del Plata"): Promise<GeocodeResult | null> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address + ", " + cityHint + ", Argentina")}${MAR_DEL_PLATA_COMPONENT_FILTER}&key=${GOOGLE_MAPS_API_KEY}`;
  // ... fetch call
}
```

### Servicio de Rutas (Directions)
Se utiliza en dos modalidades:

1. **Client-Side (Visualización):** En `route-map.tsx` y `route-tracker.tsx` para dibujar polilíneas.
   ```typescript
   const directionsService = new window.google.maps.DirectionsService();
   directionsService.route({
       origin: origin,
       destination: destination,
       travelMode: window.google.maps.TravelMode.DRIVING,
   }, (result, status) => { ... });
   ```

2. **Server-Side (Cálculo de Tarifas):** En `quoteShipment` (`src/app/ordenes/actions.ts`) para obtener la distancia exacta en metros.
   ```typescript
   const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${originCoords.lat},${originCoords.lng}&destination=${destinationCoords.lat},${destinationCoords.lng}&key=${GOOGLE_MAPS_API_KEY}&language=es`;
   const directionsData = await directionsResponse.json() as GoogleDirectionsResponse;
   const leg = directionsData.routes[0].legs[0];
   distanceKm = leg.distance.value / 1000; // Conversión a KM
   ```

### Lógica Matemática de Precios
La función `quoteShipment` busca en la base de datos (`prisma.priceRange`) el precio asociado al rango de kilómetros obtenido de la API de Google.

## 5. Puntos Críticos y Acoplamiento para la Migración

1. **Acoplamiento Global (`window.google`):** El componente `route-tracker.tsx` depende fuertemente del objeto `window.google` cargado globalmente. Leaflet utiliza una aproximación distinta (objeto `L` o hooks de `react-leaflet`).
2. **Estructura de Coordenadas:** Google utiliza objetos `{ lat: number, lng: number }`. Leaflet utiliza mayoritariamente arreglos `[lat, lng]`.
3. **Servicios de Servidor:** Las Server Actions en `src/app/ordenes/actions.ts` y `src/app/admin/clientes/actions.ts` deberán cambiar las llamadas a Google Geocoding/Directions por llamadas a Nominatim (OSM) y OSRM respectivamente.
4. **Iframe de Contacto:** Sustitución directa por un mapa estático de Leaflet o un iframe de OpenStreetMap.
