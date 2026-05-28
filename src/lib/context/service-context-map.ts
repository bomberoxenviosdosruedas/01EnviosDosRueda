// src/lib/context/service-context-map.ts
export const serviceContextMap: Record<string, { name: string, path: string }> = {
  'Delivery Gastronómico': {
    name: 'Delivery Gastronómico',
    path: 'src/app/servicios/delivery-gastronomico/page.tsx'
  },
  'Envíos Express': {
    name: 'Envíos Express',
    path: 'src/app/servicios/envios-express/page.tsx'
  },
  'Envíos Flex MercadoLibre': {
    name: 'Envíos Flex MercadoLibre',
    path: 'src/app/servicios/enviosflex/page.tsx'
  },
  'Envíos Low Cost': {
    name: 'Envíos Low Cost',
    path: 'src/app/servicios/envios-lowcost/page.tsx'
  },
  'Moto Fija para Negocios': {
    name: 'Moto Fija para Negocios',
    path: 'src/app/servicios/moto-fija/page.tsx'
  },
  'Plan Emprendedores': {
    name: 'Plan Emprendedores',
    path: 'src/app/servicios/plan-emprendedores/page.tsx'
  },
};
