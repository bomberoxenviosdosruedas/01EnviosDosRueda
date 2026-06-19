# Documentación de Dos Ruedas Pro

Esta carpeta contiene la documentación técnica y operativa del proyecto.

## Archivos Principales
- [Arquitectura del Sistema](./ARCHITECTURE_OVERVIEW.md)
- [Referencia de API y Flujos de IA](./API_REFERENCE.md)
- [Referencia de Base de Datos](./DATABASE_REFERENCE.md)
- [Guía de Operaciones de Usuario](./USER_OPERATIONS_GUIDE.md)

## Supuestos y Gaps
- **Supuesto**: Se asume que el servidor tiene acceso a internet para consultar OSRM y Nominatim.
- **Gap**: Falta implementar el flujo de optimización de rutas multinodo (`optimize-delivery-routes.ts`).
- **Gap**: La integración con Mercado Libre Flex está en fase de diseño de UI.

## Tareas de Seguimiento
- [ ] Implementar validación automatizada de OpenAPI.
- [ ] Agregar capturas de pantalla reales a la Guía de Operaciones.
- [ ] Configurar un linter para archivos Markdown.
