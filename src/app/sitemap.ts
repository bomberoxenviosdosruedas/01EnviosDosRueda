import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Dominio de producción unificado (sin barra al final)
  const baseUrl = 'https://www.enviosdosruedas.com'

  // Rutas públicas optimizadas para indexación
  const publicRoutes = [
    '/',
    '/contacto',
    '/cotizar/express',
    '/cotizar/lowcost',
    '/nosotros/nuestras-redes',
    '/nosotros/preguntas-frecuentes',
    '/nosotros/sobre-nosotros',
    '/servicios/envios-express',
    '/servicios/envios-lowcost',
    '/servicios/enviosflex',
    '/servicios/plan-emprendedores',
    '/seguimiento',
  ]

  // Rutas legales secundarias
  const legalRoutes = [
    '/politica-de-privacidad',
    '/terminos-y-condiciones',
  ]

  // Mapeo y asignación lógica de prioridades SEO reales
  const coreSitemap = publicRoutes.map((route) => {
    let priority = 0.8
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly'

    if (route === '/') {
      priority = 1.0
      changeFrequency = 'daily' // La home cambia seguido por promociones
    } else if (route.startsWith('/servicios') || route.startsWith('/cotizar')) {
      priority = 0.9 // Páginas transaccionales de alto valor comercial
      changeFrequency = 'weekly'
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })

  const legalSitemap = legalRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3, // Baja prioridad para que no compitan con tus servicios
  }))

  return [...coreSitemap, ...legalSitemap]
}
