# Guía de Operaciones de Usuario - Dos Ruedas Pro

Esta guía detalla los procesos operativos más comunes dentro de la plataforma.

## 1. Creación de una Orden (Flujo del Cliente)

1.  **Ingreso a Cotización**: Acceda a `/cotizar/express` o `/cotizar/lowcost`.
2.  **Carga de Direcciones**: Ingrese el punto de retiro y el punto de entrega. El sistema sugerirá direcciones de Mar del Plata automáticamente.
3.  **Cálculo de Costo**: El sistema mostrará el precio calculado basado en la distancia real.
4.  **Datos del Contacto**: Complete el nombre y teléfono de quien recibe.
5.  **Confirmación**: Al confirmar, se generará un número de seguimiento.

## 2. Gestión de Etiquetas (Flujo Administrativo)

1.  **Acceso**: Ingrese a `/admin/etiquetas`.
2.  **Generación**: Las órdenes nuevas aparecerán en estado "PENDIENTE". Seleccione las órdenes deseadas para imprimir.
3.  **Impresión A4**: El sistema generará una vista optimizada. Utilice la función de impresión del navegador (Ctrl+P) asegurándose de que el destino sea "Guardar como PDF" o su impresora física. El diseño está configurado para ajustarse perfectamente al formato A4.
4.  **Marcado**: Una vez impresas, el estado cambiará automáticamente a "IMPRESA".

## 3. Hoja de Ruta (Flujo del Repartidor)

1.  **Login**: El repartidor accede mediante su ID o teléfono en `/repartidor`.
2.  **Hoja de Ruta**: Verá una lista de entregas asignadas para el día.
3.  **Inicio de Entrega**: Al retirar un paquete, el repartidor debe cambiar el estado a "EN_CAMINO" (o "EN_CURSO" en la orden).
4.  **Finalización**: Al entregar, marca como "ENTREGADA". Se puede registrar una nota u observación si hubo algún inconveniente.

## 4. Ajuste de Tarifas (Configuración)

1.  **Panel de Cotizaciones**: Ingrese a `/admin/cotizaciones`.
2.  **Modificación de Rangos**: Puede editar los kilómetros mínimos, máximos y el precio base de cada rango.
3.  **Actualización**: Los cambios se aplican de forma instantánea para todas las nuevas cotizaciones que realicen los clientes.

---

## 5. Mejores Prácticas

-   **Geolocalización**: Siempre seleccione una de las sugerencias del autocompletado para garantizar que el cálculo de distancia sea exacto.
-   **Notas de Entrega**: Incluya detalles como "Timbre no funciona" o "Entregar en portería" para facilitar el trabajo del repartidor.
-   **Impresión**: Verifique que los márgenes en la configuración de impresión del navegador estén en "Ninguno" o "Predeterminado" para evitar cortes en el diseño A4.
