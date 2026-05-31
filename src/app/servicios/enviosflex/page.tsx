import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { EnviosFlexHero } from "@/components/envios-flex/envios-flex-hero"
import { EnviosFlexContent } from "@/components/envios-flex/envios-flex-content"
import { MercadoLibreBenefits } from "@/components/envios-flex/mercadolibre-benefits"
import { FlexPricingRanges } from "@/components/envios-flex/flex-pricing-ranges"
import { HowItWorks } from "@/components/envios-flex/how-it-works"
import { Requirements } from "@/components/envios-flex/requirements"
import { EnviosFlexCta } from "@/components/envios-flex/envios-flex-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/envios-flex/flex-pricing-ranges";

export const metadata: Metadata = {
  title: "Envíos Flex MercadoLibre Mar del Plata | Cobertura MDP y Envíos Same-Day",
  description: "Expertos en Envíos Flex MercadoLibre en Mar del Plata. Garantizamos Cobertura MDP y Envíos Same-Day para potenciar tu reputación y ventas.",
  keywords:
    "envios flex, mercadolibre, vendedores online, entregas rapidas, mar del plata, reputacion vendedor, envios mismo dia",
}

// Disable prerendering during build to avoid database connection issues
export const revalidate = 0;

async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.LOW_COST, // Flex uses Low Cost pricing structure
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

export default async function EnviosFlexPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="min-h-screen bg-[#2264E3] text-white selection:bg-[#F8CC0B]/30">
      <OptimizedHeader />
      <main>
        <EnviosFlexHero />
        <EnviosFlexContent />
        <MercadoLibreBenefits />
        <FlexPricingRanges priceRanges={priceRanges} />
        <HowItWorks />
        <Requirements />
        <EnviosFlexCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
