// src/lib/context/get-service-context.ts
import deliveryGastronomico from '@/lib/context/delivery-gastronomico';
import enviosExpress from '@/lib/context/envios-express';
import enviosFlex from '@/lib/context/envios-flex';
import enviosLowcost from '@/lib/context/envios-lowcost';
import motoFija from '@/lib/context/moto-fija';
import planEmprendedores from '@/lib/context/plan-emprendedores';

const contexts: Record<string, any> = {
  'Delivery Gastronómico': deliveryGastronomico,
  'Envíos Express': enviosExpress,
  'Envíos Flex MercadoLibre': enviosFlex,
  'Envíos Low Cost': enviosLowcost,
  'Moto Fija para Negocios': motoFija,
  'Plan Emprendedores': planEmprendedores,
};

// Gets context based on service name (e.g., "Delivery Gastronómico")
export function getServiceContext(serviceName: string): any | null {
    return contexts[serviceName] || null;
}

// Gets context based on file path (e.g., 'src/app/servicios/delivery-gastronomico/page.tsx')
export function getServiceContextFromPath(relativePath: string): any | null {
    const contextMapByPath: Record<string, any> = {
        'src/app/servicios/delivery-gastronomico/page.tsx': deliveryGastronomico,
        'src/app/servicios/envios-express/page.tsx': enviosExpress,
        'src/app/servicios/enviosflex/page.tsx': enviosFlex,
        'src/app/servicios/envios-lowcost/page.tsx': enviosLowcost,
        'src/app/servicios/moto-fija/page.tsx': motoFija,
        'src/app/servicios/plan-emprendedores/page.tsx': planEmprendedores,
    };
    
    return contextMapByPath[relativePath] || null;
}
