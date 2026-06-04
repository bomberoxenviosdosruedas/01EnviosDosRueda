# Guía de Gobernanza y Desarrollo de API - Dos Ruedas Pro

Esta guía define los estándares técnicos y operativos para consumir las APIs de Envios DosRuedas.

## 1. Versionalización
Utilizamos **versionalización basada en URI** para cambios disruptivos (Breaking Changes).
- Actual: `https://api.dosruedas.com.ar/v1`
- Deprecación: Las versiones anteriores se mantendrán activas durante 6 meses tras el lanzamiento de una nueva versión mayor.

## 2. Autenticación y Seguridad

### 2.1 JWT (JSON Web Tokens)
Para aplicaciones internas y dashboards de repartidores. Se obtiene mediante el flujo de login.
- **Header:** `Authorization: Bearer <token>`

### 2.2 API Keys
Para integraciones de terceros (E-commerce).
- **Header:** `X-API-KEY: <tu_llave_aqui>`
- Las llaves deben ser tratadas como secretos y nunca exponerse en el frontend.

## 3. Manejo de Errores
Todas las respuestas de error siguen un formato consistente para mejorar la experiencia del desarrollador (DX).

| Código HTTP | Significado | Mensaje Sugerido (Argentine Spanish) |
| :--- | :--- | :--- |
| 400 | Bad Request | "Che, los datos que mandaste no son válidos." |
| 401 | Unauthorized | "No tenés permiso para entrar acá, identificate primero." |
| 404 | Not Found | "No encontramos lo que buscás, fijate si la ID está bien." |
| 429 | Too Many Requests | "Bajá un cambio, mandaste demasiadas peticiones." |
| 500 | Internal Error | "Se rompió algo en el servidor. Ya lo estamos arreglando." |

**Formato JSON de Error:**
```json
{
  "code": "INVALID_ADDRESS",
  "message": "La dirección ingresada no parece ser de Mar del Plata.",
  "details": {
    "field": "originAddress",
    "suggestion": "Asegurate de incluir el nombre de la calle y altura."
  }
}
```

## 4. Paginación
- **REST:** Utilizamos `page` y `limit` para recursos administrativos y `cursor` para feeds de alta frecuencia.
- **GraphQL:** Seguimos el estándar de Relay para conexiones basadas en cursor si el volumen de datos lo justifica.

## 5. Webhooks
Permitimos notificaciones en tiempo real para cambios de estado en las órdenes.
- **Eventos:** `order.created`, `order.status_updated`, `order.delivered`.
- **Seguridad:** Los payloads incluyen una firma `X-Hub-Signature` para verificar la autenticidad del origen.

## 6. Rate Limiting
- **Tier Free:** 100 req/min.
- **Tier Pro:** 1000 req/min.
- El servidor responde con headers `X-RateLimit-Remaining` y `X-RateLimit-Reset`.

## 7. Caching
Utilizamos el header `Cache-Control` para recursos estáticos o de baja frecuencia (ej. Rangos de precios).
- Sugerido: `public, max-age=3600` para configuraciones tarifarias.
