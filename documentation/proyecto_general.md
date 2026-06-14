# Proyecto General: Envíos DosRuedas

## Resumen Ejecutivo
**Envíos DosRuedas** es una plataforma integral de logística y mensajería de última milla diseñada específicamente para el mercado de Mar del Plata. La aplicación facilita la gestión de envíos e-commerce (Flex, Same-day), soluciones 3PL (Third-Party Logistics) y mensajería express a través de una interfaz moderna de alto rendimiento.

El proyecto está construido sobre un stack tecnológico moderno:
- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Base de Datos**: PostgreSQL gestionado a través de Prisma ORM.
- **Estilo**: Tailwind CSS con componentes basados en shadcn/ui.
- **Animaciones**: Framer Motion y Three.js (Shaders).

## Estructura de Directorios
La arquitectura sigue las convenciones de Next.js App Router, organizando la lógica por responsabilidad:

```text
/
├── prisma/                 # Esquema de base de datos y scripts de sembrado.
├── public/                 # Activos estáticos (imágenes, fuentes, iconos).
├── src/
│   ├── ai/                 # Flujos de Genkit y lógica de IA (Imagen, texto).
│   ├── app/                # Rutas, layouts y server actions (App Router).
│   │   ├── admin/          # Panel de administración interno.
│   │   ├── cotizar/        # Flujo de cotización para clientes.
│   │   ├── seguimiento/    # Rastreo público de envíos.
│   │   └── ...             # Páginas de servicios y legales.
│   ├── components/         # Componentes de React reutilizables.
│   │   ├── ui/             # Componentes base (shadcn/ui).
│   │   ├── layout/         # Header, Footer, Navegación.
│   │   └── [feature]/      # Componentes específicos por funcionalidad.
│   ├── context/            # Contextos de React (opcional).
│   ├── hooks/              # Hooks personalizados.
│   ├── lib/                # Utilidades, configuración de Prisma y constantes.
│   └── types/              # Definiciones de tipos TypeScript globales.
└── documentation/          # Documentación técnica del proyecto.
```

## Sistema de Diseño (Stitch Design System)
El sistema de diseño está documentado en `DESIGN.md` y se caracteriza por una estética **"Corporate / Modern"** de alto contraste, optimizada para la legibilidad en entornos operativos.

### Identidad Visual
- **Paleta de Colores**:
  - **Fondo**: Azul profundo / Negro (`#030710`).
  - **Acción**: Amarillo Brillante (`#FFE600`).
  - **Superficies**: Azul Náutico (`#00246B`).
- **Tipografía**:
  - **Headers**: `Orbitron` para un look tecnológico y futurista.
  - **Cuerpo**: `Roboto` para máxima legibilidad.
- **Geometría**: Bordes redondeados estandarizados (0.5rem para interactivos, hasta 1.5rem para contenedores).

### Implementación
Se utiliza **shadcn/ui** como base, extendiendo sus estilos mediante Tailwind CSS en `tailwind.config.ts`. La interfaz prioriza la densidad de información y la velocidad de respuesta.

## Capa de Datos (Prisma)
El modelo de datos en `prisma/schema.prisma` articula las operaciones logísticas:

1.  **Client**: Datos de contacto y ubicación de clientes recurrentes.
2.  **Order**: El núcleo del sistema, rastrea origen, destino, estados (PENDIENTE, EN_CURSO, ENTREGADO) y costos.
3.  **Repartidor**: Información del personal y vehículos.
4.  **Etiqueta**: Gestión de rótulos para impresión y despacho.
5.  **PriceRange**: Configuración dinámica de precios según distancia y tipo de servicio.
6.  **SocialPost**: Integración de feeds de redes sociales.

La comunicación con la base de datos se realiza mediante un cliente de Prisma singleton ubicado en `src/lib/prisma.ts`.
