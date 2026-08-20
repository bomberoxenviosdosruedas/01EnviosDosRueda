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
  title: "Mercado Libre Flex Mar del Plata | Envíos en el Mismo Día",
  description: "Logística certificada para Mercado Libre Flex en Mar del Plata. Asegurá tus entregas Same-Day y mejorá tu reputación con el líder en última milla.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/servicios/enviosflex' },
  openGraph: {
    title: "Mercado Libre Flex Mar del Plata | Envíos en el Mismo Día",
    description: "Logística certificada para Mercado Libre Flex en Mar del Plata. Asegurá tus entregas Same-Day y mejorá tu reputación con el líder en última milla.",
    url: 'https://www.enviosdosruedas.com/servicios/enviosflex',
    images: [{ url: '/og-image.jpg' }],
  },
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
    <div className="dark min-h-screen flex flex-col bg-brand-blue-950 text-white selection:bg-brand-yellow-500 selection:text-brand-ink font-sans">
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
