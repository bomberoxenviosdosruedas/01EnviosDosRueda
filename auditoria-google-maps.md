# Reporte de Auditoría Técnica: Implementación de Google Maps API

## 1. Dependencias y Variables de Entorno
- **Paquetes npm identificados:**
  - `@react-google-maps/api` (^2.20.8)
  - `@vis.gl/react-google-maps` (^1.8.3)
  - `@types/google.maps` (^3.64.0)

- **Variables de Entorno:**
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Utilizada en múltiples componentes para la carga inicial de scripts y llamadas REST simuladas en backend. Se extrae globalmente a través de `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
  - Configurada en `README.md` como instrucción para local setup.
  - Consumida en:
    - `src/components/calculator/route-map.tsx`
    - `src/hooks/useGoogleMaps.ts`
    - `src/app/ordenes/actions.ts`
    - `src/app/admin/clientes/actions.ts`

## 2. Inicialización y Ciclo de Vida del Script de Google
- **Ubicación:**
  - Archivo Principal: `src/hooks/useGoogleMaps.ts` que centraliza la carga a través del hook `useJsApiLoader`.
  - Archivo Secundario (Calculadora): `src/components/calculator/route-map.tsx` llama de forma independiente a `useJsApiLoader`.

- **Parámetros de Carga:**
  - *Hooks (`src/hooks/useGoogleMaps.ts`)*:
    - `libraries: ['places', 'drawing']`
    - `language: 'es'`
    - `region: 'AR'`
    - `preventGoogleFontsLoading: true`
  - *Route Map (`src/components/calculator/route-map.tsx`)*:
    - `libraries: ['places']`

## 3. Mapeo de Módulos y Componentes de UI

### `src/components/calculator/route-map.tsx`
- **Tipo de Componente:** Forzado con `"use client"`.
- **Estructuras SDK Usadas:** `<GoogleMap>`, `<DirectionsRenderer>`.
- **Estilos/Layout:** El contenedor usa un objeto CSS directo `{ height: '320px', width: '100%', borderRadius: '0.5rem' }` envuelto en clases Tailwind `rounded-lg overflow-hidden shadow-md border`.

### `src/components/tracking/interactive-tracking-map.tsx`
- **Tipo de Componente:** Forzado con `"use client"`.
- **Estructuras SDK Usadas:** `<GoogleMap>` (Renderizado condicional del mapa interactivo). Usa hook propio `useGoogleMaps` para cargar y manejar instanciamiento (`map.panTo`, `map.setZoom`).
- **Estilos/Layout:** Clases integradas para UI overlay pero el contenedor SDK hereda tamaño.

### `src/components/contact/contact-map.tsx`
- **Tipo de Componente:** Forzado con `"use client"`.
- **Estructuras SDK Usadas:** `<iframe>` nativo (Embed API estático) con URL incrustada: `https://www.google.com/maps/embed?...`.
- **Estilos/Layout:** Contenedor usa Framer Motion + Tailwind `relative h-[450px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background/50 backdrop-blur-sm`.

### `src/components/tracking/tracking-map.tsx`
- **Tipo de Componente:** Forzado con `"use client"`.
- **Estructuras SDK Usadas:** URL estática de Maps (`https://maps.googleapis.com/maps/api/staticmap?...`) inyectada vía inline style de React `backgroundImage`.

## 4. Lógica de Ruteo, Geocodificación y Reglas de Negocio

- **Autocompletado (Places):** El sistema carga la librería `places`, aunque en esta auditoría no se encuentran los componentes formales (`<Autocomplete>`) en el frontend, la geocodificación está centralizada en Server Actions, lo cual sugiere un procesamiento de backend para convertir strings en LatLng.

- **Servicio de Rutas (Directions):**
  - Ubicación Frontend: `src/components/calculator/route-map.tsx`
  - Llamada SDK: `const directionsService = new window.google.maps.DirectionsService();`
  - Parámetros: `travelMode: window.google.maps.TravelMode.DRIVING`
  - Extrae resultado del status `window.google.maps.DirectionsStatus.OK`.

- **Lógica Matemática & Server Actions:**
  - El cálculo pesado ocurre del lado del servidor en `src/app/ordenes/actions.ts`.
  - **Geocodificación (Server):** Usa endpoint REST directo: `https://maps.googleapis.com/maps/api/geocode/json?address=...` con restricción a Mar del Plata (`&components=country:AR|administrative_area:Buenos%20Aires|locality:Mar%20del%20Plata`).
  - **Rutas (Server):** Llama a REST Directo: `https://maps.googleapis.com/maps/api/directions/json?origin=...&destination=...`.
  - **Fórmula:** La distancia se extrae del JSON `leg.distance.value / 1000` (Conversión Metros a KM). Luego, el precio se cruza con Prisma:
```typescript
    const priceRangeRecord = await prisma.priceRange.findFirst({
        where: {
          distanciaMinKm: { lte: new Prisma.Decimal(distanceKm.toFixed(2)) },
          distanciaMaxKm: { gte: new Prisma.Decimal(distanceKm.toFixed(2)) },
          serviceType: validatedData.serviceType,
          isActive: true,
        },
    });
```

## 5. Puntos Críticos y Acoplamiento para la Migración

- **Componentes Fuertemente Acoplados:**
  - **`useGoogleMaps.ts`:** Este hook asume un objeto map de tipo `google.maps.Map`. Refactorizar para inicializar el contenedor Leaflet.
  - **`route-map.tsx`:** Dependencia directa en `new window.google.maps.DirectionsService()` para trazar rutas y `DirectionsRenderer` para pintar líneas. OSRM resolverá el trazo mediante arreglos `[lat, lng]` (Polyline en Leaflet).
  - **`interactive-tracking-map.tsx`:** Las funciones de instanciamiento `map.panTo()` y `map.setZoom()` deberán ser reemplazadas por funciones equivalentes en react-leaflet (ej. uso de hook `useMap` o refs para modificar el view).
  - **Server Actions:** `src/app/ordenes/actions.ts` consume directamente las API REST de Google, las cuales deberán ser sustituidas por llamadas a Nominatim (OSM) y servidores OSRM.

- **Plan Conceptual de Mapeo de Coordenadas:**
  - Actualmente, Google Maps utiliza objetos directos tipo `{lat: -38.0055, lng: -57.5426}`.
  - Al migrar a Leaflet (react-leaflet), se debe implementar un adapter o mutar las props de frontend a tuplas `[-38.0055, -57.5426]`, ya que muchas APIs de Leaflet procesan la información en formato vector array (Lat, Lng). La BD puede seguir manejando `addressLat` y `addressLng` separadamente sin afectaciones estructurales.

---
