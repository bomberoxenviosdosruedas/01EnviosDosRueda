# Detalles de Páginas y Rutas

Este documento detalla las rutas principales de la aplicación **Envíos DosRuedas**, especificando su propósito, componentes clave y lógica de manejo de datos.

---

## 1. Páginas Públicas (Core)

### Inicio (Home)
- **Ruta**: `/`
- **Propósito**: Presentación de la marca, servicios destacados y propuestas de valor para emprendedores.
- **Componentes Clave**: `HeroAnimado`, `VisionSection`, `ServicesOverview`, `EmprendedoresHome`, `SliderServicios`.
- **Lógica**: Utiliza `next/dynamic` para lazy loading de secciones "below the fold", optimizando el LCP y el rendimiento inicial.
- **SEO**: Metadata optimizada para búsqueda local en Mar del Plata.

### Cotizador Express
- **Ruta**: `/cotizar/express`
- **Propósito**: Herramienta interactiva para calcular el costo de envíos rápidos en moto en tiempo real.
- **Componentes Clave**: `ExpressCalculator`, `MapFeatures`, `PricingInfo`, `CalculatorTips`.
- **Lógica**: Integración con servicios de mapas para cálculo de distancias y aplicación de lógica de precios basada en `PriceRange`.

### Seguimiento (Tracking)
- **Ruta**: `/seguimiento`
- **Propósito**: Permite a los clientes finales rastrear el estado de su pedido en tiempo real.
- **Componentes Clave**: `OrderStatus`, `InteractiveTrackingMap`, `UpdatesTimeline`, `DriverInfo`.
- **Lógica**: Client Component que consume la Server Action `getOrderTrackingDetails`. Implementa visualización de mapas dinámica según la ubicación del repartidor y puntos de entrega.

### Creación de Órdenes (Público/Cliente)
- **Ruta**: `/ordenes`
- **Propósito**: Formulario para que clientes (registrados o nuevos) generen solicitudes de envío.
- **Componentes Clave**: `GenerarEnvioForm`, `ShipmentCreationForm`, `ClientSearchForm`.
- **Lógica**: Server Actions en `src/app/ordenes/actions.ts` para validación de datos (Zod) e inserción en la base de datos.

---

## 2. Páginas de Servicios

### Envíos Express / Low Cost / Flex / Emprendedores
- **Rutas**: `/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/servicios/plan-emprendedores`.
- **Propósito**: Landing pages informativas para cada vertical de negocio.
- **Lógica**: Enfocadas en SEO y conversión, utilizan componentes específicos como `ExpressBenefits` o `FlexPricingRanges`.

---

## 3. Panel de Administración (Admin)

### Dashboard de Órdenes
- **Ruta**: `/admin/ordenes`
- **Propósito**: Gestión centralizada de todos los envíos del sistema.
- **Componentes Clave**: `AdminHeader`, `OrdenesTable`.
- **Lógica**: Server Component que realiza data fetching directo mediante Prisma. Convierte tipos `Decimal` a `number` para compatibilidad con componentes cliente.

### Gestión de Clientes / Repartidores
- **Rutas**: `/admin/clientes`, `/admin/repartidores`
- **Propósito**: CRUD de las entidades principales del sistema.
- **Lógica**: Uso extensivo de tablas interactivas y formularios de edición (`EditClientForm`, `RepartidorForm`).

### Etiquetas (Etiquetas)
- **Ruta**: `/admin/etiquetas`
- **Propósito**: Generación e impresión de etiquetas de despacho.
- **Componentes Clave**: `EtiquetasTable`, `EtiquetaPrintLayout`.
- **Lógica**: Permite filtrar por estado y asignar repartidores a las etiquetas para la hoja de ruta.

---

## 4. Funcionalidades de IA (Admin Tools)

### Generador de Imágenes y Prompts
- **Ruta**: `/admin/crea-imagenes/*`
- **Propósito**: Herramientas internas para generar prompts de IA optimizados para marketing y UI.
- **Lógica**: Integración con **Google Genkit** y flujos definidos en `src/ai/flows/` para asistir en la creación de activos visuales coherentes con la marca.

---

## 5. Páginas Operativas (Repartidor)

### Perfil y Hoja de Ruta
- **Ruta**: `/repartidor/[id]`
- **Propósito**: Interfaz optimizada para móviles para que los conductores gestionen sus entregas.
- **Componentes Clave**: `HojaDeRutaRepartidor`, `BarcodeScanner`, `RepartidorDashboard`.
- **Lógica**: Aplicación de estados en tiempo real para marcar entregas, fallos o cambios en la ruta.
