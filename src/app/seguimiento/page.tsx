import type { Metadata } from "next";
import { TrackingPageClient } from "@/components/tracking/tracking-page-client";

export const metadata: Metadata = {
  title: "Seguimiento de Pedido | Envíos DosRuedas",
  description: "Rastreá tu envío en tiempo real. Ingresá tu ID de pedido y conocé el estado exacto de tu entrega en Mar del Plata.",
  alternates: {
    canonical: "https://www.enviosdosruedas.com/seguimiento",
  },
  openGraph: {
    title: "Seguimiento de Pedido | Envíos DosRuedas",
    description: "Rastreá tu envío en tiempo real. Ingresá tu ID de pedido y conocé el estado exacto de tu entrega en Mar del Plata.",
    url: "https://www.enviosdosruedas.com/seguimiento",
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function SeguimientoPage() {
  return <TrackingPageClient />;
}
