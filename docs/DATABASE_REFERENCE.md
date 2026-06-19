# Referencia de Base de Datos - Dos Ruedas Pro

El sistema utiliza **PostgreSQL** como motor de base de datos, gestionado a través de **Prisma ORM v7**.

## 1. Modelos Principales

### `Client`
Representa a los clientes (particulares o empresas) que utilizan el servicio de forma recurrente.
- **Campos Clave**: `name`, `phone` (único), `email` (único), `address`, `addressLat/Lng`.
- **Relaciones**: Un cliente puede tener múltiples órdenes (`Order`).

### `Order`
El núcleo de la transacción logística.
- **Campos Clave**:
    - `serviceType`: Enum (EXPRESS, LOW_COST, PUNTO_DE_RETIRO).
    - `status`: Enum (PENDIENTE, EN_CURSO, ENTREGADO, CANCELADO).
    - `originAddress` / `destinationAddress`: Direcciones completas.
    - `quotedPrice`: El precio calculado al momento de la cotización.
    - `repartidorId`: ID del repartidor asignado.
- **Relaciones**: Pertenece a un `Client` (opcional) y a un `Repartidor` (opcional).

### `Repartidor`
Personal encargado de realizar las entregas.
- **Campos Clave**: `name`, `phone`, `vehicleType`, `licensePlate` (patente).
- **Relaciones**: Tiene muchas órdenes asignadas y etiquetas.

### `PriceRange`
Matriz de configuración para el cálculo dinámico de precios.
- **Campos Clave**: `serviceType`, `distanciaMinKm`, `distanciaMaxKm`, `precioRango`.
- **Lógica**: La calculadora busca el rango donde `distanciaMinKm <= distancia_calculada < distanciaMaxKm`.

### `Etiqueta`
La representación física y operativa de un paquete.
- **Campos Clave**: `orderNumber`, `tipoEnvio`, `montoACobrar`, `status` (Enum).
- **Estados de Etiqueta**: `PENDIENTE`, `IMPRESA`, `EN_CAMINO`, `ENTREGADA`, `NO_ENTREGADA`.

### `SocialPost`
Almacena publicaciones de redes sociales para alimentar el feed de la aplicación.

---

## 2. Enums (Diccionario de Datos)

### `ServiceTypeEnum`
- `EXPRESS`: Entregas inmediatas punto a punto.
- `LOW_COST`: Entregas programadas con ruteo optimizado.
- `PUNTO_DE_RETIRO`: Entrega en nodos logísticos específicos.

### `OrderStatusEnum`
- `PENDIENTE`: Creada pero no recogida.
- `EN_CURSO`: En manos del repartidor.
- `ENTREGADO`: Entrega confirmada.
- `CANCELADO`: Orden anulada por el cliente o administrador.

### `EtiquetaStatus`
- `PENDIENTE`: Creada.
- `IMPRESA`: Lista para despacho físico.
- `EN_CAMINO`: El repartidor la tiene en su vehículo.
- `ENTREGADA`: Paquete entregado.
- `NO_ENTREGADA`: Intento de entrega fallido.

---

## 3. Integridad de Datos
- Las coordenadas geográficas se almacenan con precisión decimal (`Decimal(10, 8)` y `Decimal(11, 8)`).
- Los montos económicos utilizan `Decimal(10, 2)` para evitar errores de redondeo de punto flotante.
