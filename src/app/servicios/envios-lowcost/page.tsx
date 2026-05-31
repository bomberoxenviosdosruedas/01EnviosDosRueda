import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { LowcostHero } from "@/components/lowcost/lowcost-hero"
import { LowcostContent } from "@/components/lowcost/lowcost-content"
import { PricingComparison } from "@/components/lowcost/pricing-comparison"
import { LowcostBenefits } from "@/components/lowcost/lowcost-benefits"
import { HowLowcostWorks } from "@/components/lowcost/how-lowcost-works"
import { LowcostCta } from "@/components/lowcost/lowcost-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/lowcost/pricing-comparison";

export const metadata: Metadata = {
  title: "Envíos LowCost: Máxima Rentabilidad | Tu solución confiable",
  description:
    "Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad.",
  keywords:
    "envios low cost, mensajeria economica, envios baratos, mar del plata, rutas optimizadas, envios programados",
}

// Disable prerendering since it relies on Prisma DB
export const revalidate = 0;

async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.LOW_COST,
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
    console.error("Error fetching low-cost price ranges:", error);
    return [];
  }
}


export default async function EnviosLowCostPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="min-h-screen bg-[#2264E3] text-white selection:bg-[#F8CC0B]/30">
      <OptimizedHeader />
      <main>
        <LowcostHero />
        <LowcostContent />
        <PricingComparison priceRanges={priceRanges} />
        <LowcostBenefits />
        <HowLowcostWorks />
        <LowcostCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
