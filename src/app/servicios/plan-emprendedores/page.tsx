import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { EntrepreneurHero } from "@/components/entrepreneur/entrepreneur-hero"
import { PlanInformation } from "@/components/entrepreneur/plan-information"
import { EntrepreneurBenefits } from "@/components/entrepreneur/entrepreneur-benefits"
import { EntrepreneurPricingRanges } from "@/components/entrepreneur/entrepreneur-pricing-ranges"
import { EntrepreneurCta } from "@/components/entrepreneur/entrepreneur-cta"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from '../../../../generated/prisma/client/client';
import type { PriceRangeClient } from "@/components/entrepreneur/entrepreneur-pricing-ranges";

export const metadata: Metadata = {
  title: "Almacenamiento y Fulfillment para PyMEs en Mar del Plata | Logística 3PL",
  description: "Ofrecemos almacenamiento, picking, packing y fulfillment para PyMEs en Mar del Plata con depósitos propios en la ciudad. Optimizamos tu logística e-commerce.",
  keywords:
    "ecommerce 3pl, fulfillment mar del plata, envios next day, cuenta corriente logistica, deposito ecommerce, picking y packing",
}

// Disable prerendering during build to avoid database connection issues
export const revalidate = 0;

async function getPriceRanges(): Promise<PriceRangeClient[]> {
  const priceRanges = await prisma.priceRange.findMany({
    where: {
      serviceType: ServiceTypeEnum.LOW_COST, // Entrepreneur plan uses Low Cost pricing structure
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
}

export default async function EntrepreneurPlanPage() {
  const priceRanges = await getPriceRanges();
  return (
    <div className="min-h-screen bg-[#2264E3] text-white selection:bg-[#F8CC0B]/30">
      <OptimizedHeader />
      <main>
        <EntrepreneurHero />
        <PlanInformation />
        <EntrepreneurBenefits />
        <EntrepreneurPricingRanges priceRanges={priceRanges} />
        <EntrepreneurCta />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
