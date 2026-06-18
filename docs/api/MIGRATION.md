# Guía de Migración: De Consultas Directas a API REST/GraphQL

Esta guía detalla el proceso para migrar aplicaciones existentes (ej. el Dashboard administrativo actual o integraciones de terceros) desde el uso de Server Actions/Prisma directo hacia la nueva arquitectura de API centralizada.

## 1. ¿Por qué migrar?
- **Desacoplamiento:** Permite actualizar el backend sin romper clientes móviles.
- **Seguridad:** Implementa Rate Limiting y API Keys granulares.
- **Interoperabilidad:** Facilita la integración con plataformas externas (Mercado Libre, Tiendanube).

## 2. Cambios en la Autenticación

### Antes (Next.js Actions):
Se confiaba en la sesión de NextAuth/Middleware.
```typescript
// src/app/actions.ts
const user = await getServerSession();
```

### Ahora (REST API):
Se debe incluir el token Bearer o API Key.
```bash
curl -H "Authorization: Bearer <JWT>" https://api.dosruedas.com.ar/v1/orders
```

## 3. Mapeo de Operaciones Comunes

### 3.1 Cotización de Envíos
- **Old:** `calculateQuoteAction(origin, dest)`
- **New (REST):** `POST /v1/orders/quote`
- **New (GraphQL):** `query { calculateQuote(input: {...}) { price } }`

### 3.2 Seguimiento de Órdenes
- **Old:** Query directo a `prisma.order.findUnique(...)`
- **New (REST):** `GET /v1/orders/{id}`
- **New (GraphQL):** `query { trackOrder(orderId: "...") { status } }`

## 4. Estrategia de Migración (Phased Approach)

1.  **Fase 1: Read-Only (Shadowing):** Empieza a consumir datos de lectura vía API mientras mantienes las escrituras en Server Actions.
2.  **Fase 2: Escrituras Críticas:** Migra el flujo de creación de órdenes y ruteo masivo a los endpoints de `/bulk`.
3.  **Fase 3: Deprecación:** Desactiva los Server Actions una vez que todos los clientes (Web, Mobile, E-commerce) utilicen la API v1.

## 5. Manejo de Tipos (TypeScript)
Recomendamos generar tipos automáticamente a partir de la especificación OpenAPI usando `openapi-typescript` o `graphql-codegen` para mantener la paridad con el backend.
