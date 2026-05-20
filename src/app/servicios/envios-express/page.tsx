import type { Metadata } from "next";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import { ExpressPageClient } from "@/components/express/express-page-client";
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/express/express-pricing-ranges";

export const metadata: Metadata = {
  title: "Envíos Express Inmediatos en Mar del Plata | Tu solución confiable",
  description:
    "La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta.",
  keywords: "envios express mar del plata, mensajeria urgente, delivery rapido, entrega mismo dia, paqueteria express",
};

// Optimización: Revalidación cada hora para aprovechar el caché de Bun y Prisma
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
    console.error("Failed to fetch price ranges, falling back to empty array:", error);
    return [];
  }
}

export default async function EnviosExpressPage() {
  const priceRanges = await getPriceRanges();

  return (
    <div className="min-h-screen bg-[#050810] text-white selection:bg-blue-500/30">
      <OptimizedHeader />
      <main>
        <ExpressPageClient priceRanges={priceRanges} />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
