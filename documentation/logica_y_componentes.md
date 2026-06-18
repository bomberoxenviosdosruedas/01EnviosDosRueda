# Lógica de Negocio y Componentes Clave

Este documento describe los componentes más importantes de la aplicación, su arquitectura y los flujos de datos que permiten la operación logística de **Envíos DosRuedas**.

---

## 1. Componentes de UI y Sistema de Diseño

### Componentes Base (shadcn/ui)
Ubicados en `src/components/ui/`, estos componentes forman la base atómica de la interfaz. Han sido personalizados para seguir el estilo "Corporate / Modern":
- **Button**: Variantes primary (amarillo), secondary y ghost.
- **Card**: Contenedores principales con bordes nítidos y fondos tonales.
- **Form/Input**: Integración con `react-hook-form` y `zod` para validación robusta.
- **MeshGradientBackground / BackgroundShader**: Utilizados para fondos dinámicos premium en secciones Hero.

### Componentes de Navegación
- **OptimizedHeader**: Un encabezado diseñado para performance, con soporte para menús desplegables y navegación móvil fluida.
- **Footer**: Centraliza los enlaces legales, de servicios y redes sociales.

---

## 2. Flujos de Datos Principales

### A) Flujo de Cotización (Express/Low Cost)
Ubicado en `src/components/calculator/`:
1. **Entrada**: El usuario ingresa direcciones de origen y destino (con autocompletado).
2. **Procesamiento**: Se calculan las coordenadas y la distancia mediante servicios de mapas (OpenStreetMap/Photon).
3. **Cálculo de Precio**: Se consulta la tabla `PriceRange` en la base de datos para obtener la tarifa correspondiente al servicio y distancia.
4. **Resultado**: Se muestra el desglose del costo al usuario en tiempo real.

### B) Ciclo de Vida de una Orden
Ubicado en `src/app/ordenes/` y `src/app/admin/ordenes/`:
1. **Creación**: El cliente llena el formulario (`ShipmentCreationForm`). Se genera un registro en `Order` y, opcionalmente, uno en `Etiqueta`.
2. **Asignación**: Desde el panel de administración, se asigna un `Repartidor` a la orden o etiqueta.
3. **Ejecución**: El repartidor ve la orden en su hoja de ruta móvil (`/repartidor/[id]`) y actualiza el estado.
4. **Seguimiento**: El cliente consulta el estado en tiempo real en `/seguimiento`, viendo el progreso en el mapa.

---

## 3. Utilidades y Configuración (src/lib)

### Prisma Singleton (`prisma.ts`)
Garantiza que solo exista una instancia del cliente de Prisma en entornos de desarrollo y producción, evitando el agotamiento del pool de conexiones en Next.js.

### Utilidades Generales (`utils.ts`)
- **cn()**: Función esencial para la composición de clases de Tailwind CSS, manejando conflictos de prioridad.
- **generateOrderNumber()**: Genera identificadores únicos alfanuméricos para las etiquetas y envíos.

### Navegación y Constantes
- **navigation.ts**: Define la estructura de menús para el sitio público.
- **navigation-admin.ts**: Define los accesos y permisos para el área de administración.
- **empresa.json**: Almacena información estática de la empresa (dirección, teléfonos, redes) para asegurar consistencia en todo el sitio.

---

## 4. Integración de IA (src/ai)
El proyecto utiliza **Google Genkit** para potenciar herramientas internas:
- **Generación de Prompts**: Facilita la creación de descripciones para servicios e imágenes de marketing coherentes con la identidad visual.
- **Optimización de UI**: Flujos para sugerir mejoras visuales basadas en el contexto del sistema de diseño.
