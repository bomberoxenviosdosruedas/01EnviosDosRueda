import { Truck, Zap, Clock, Package, Building2, ShieldCheck, Mail, Share2, Bike, Utensils } from 'lucide-react';

export const navGroups = [
  {
    label: 'Servicios',
    basePath: '/servicios',
    icon: Truck,
    items: [
      { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
      { label: 'Envíos Low Cost', href: '/servicios/envios-lowcost', icon: Clock },
      { label: 'Envíos Flex MercadoLibre', href: '/servicios/enviosflex', icon: Package },
      { label: 'Moto Fija para Negocios', href: '/servicios/moto-fija', icon: Bike },
      { label: 'Plan Emprendedores', href: '/servicios/plan-emprendedores', icon: Building2 },
      { label: 'Delivery Gastronómico', href: '/servicios/delivery-gastronomico', icon: Utensils },
    ],
  },
  {
    label: 'Nosotros',
    basePath: '/nosotros',
    icon: Building2,
    items: [
      { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: ShieldCheck },
      { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: Mail },
      { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: Share2 },
    ],
  },
];
