import type { Metadata } from "next";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import { ExpressPageClient } from "@/components/express/express-page-client";
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/express/express-pricing-ranges";

export const metadata: Metadata = {
  title: "Envíos Express y Cadetería en Mar del Plata | Entrega en 2hs",
  description: "Mensajería urbana instantánea y cadetería en moto en Mar del Plata. Entregas urgentes en menos de 2 horas con seguimiento en tiempo real y seguridad.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/envios-express' },
  openGraph: {
    title: "Envíos Express y Cadetería en Mar del Plata | Entrega en 2hs",
    description: "Mensajería urbana instantánea y cadetería en moto en Mar del Plata. Entregas urgentes en menos de 2 horas con seguimiento en tiempo real y seguridad.",
    url: 'https://www.enviosdosruedas.com/servicios/envios-express',
    images: [{ url: '/og-image.jpg' }],
  },
};

// Enable ISR with 1 hour revalidation to balance performance and freshness
export const revalidate = 3600;

async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.EXPRESS,
        isActive: true,
      },
      orderBy: {
        distanciaMinKm: 'asc',
      },
    });

    return priceRanges.map(pr => ({
      ...pr,
      distanciaMinKm: pr.distanciaMinKm.toNumber(),
      distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
      precioRango: pr.precioRango.toNumber(),
    }));
  } catch (error) {
    console.error("Error fetching price ranges:", error);
    return [];
  }
}

export default async function EnviosExpressPage() {
  const priceRanges = await getPriceRanges();

  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main>
        <ExpressPageClient priceRanges={priceRanges} />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
