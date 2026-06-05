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
  title: "Fulfillment y Logística 3PL para Emprendedores en Mar del Plata",
  description: "Soluciones de almacenamiento, picking y fulfillment en Mar del Plata. Logística 3PL estratégica para marcas de Tiendanube, Shopify y ventas online.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/plan-emprendedores' },
  openGraph: {
    title: "Fulfillment y Logística 3PL para Emprendedores en Mar del Plata",
    description: "Soluciones de almacenamiento, picking y fulfillment en Mar del Plata. Logística 3PL estratégica para marcas de Tiendanube, Shopify y ventas online.",
    url: 'https://www.enviosdosruedas.com/servicios/plan-emprendedores',
    images: [{ url: '/og-image.jpg' }],
  },
}

// Enable ISR with 1 hour revalidation to balance performance and freshness
export const revalidate = 3600;

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
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
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
