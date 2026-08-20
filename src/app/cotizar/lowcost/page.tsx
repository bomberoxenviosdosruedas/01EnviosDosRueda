
import type { Metadata } from 'next';
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import LowCostCalculatorHero from '@/components/calculator/lowcost-calculator-hero';
import LowCostCalculator from '@/components/calculator/lowcost-calculator';
import MapFeatures from '@/components/calculator/map-features';
import PricingInfo from '@/components/calculator/pricing-info';
import CalculatorTips from '@/components/calculator/calculator-tips';
import CalculatorContact from '@/components/calculator/calculator-contact';

export const metadata: Metadata = {
  title: 'Presupuesto Logístico E-commerce | Envíos en Mar del Plata',
  description: 'Solicitá tu presupuesto para envíos por volumen en Mar del Plata. Cotizá tu logística e-commerce con las mejores tarifas del mercado local hoy.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/cotizar/lowcost' },
  openGraph: {
    title: 'Presupuesto Logístico E-commerce | Envíos en Mar del Plata',
    description: 'Solicitá tu presupuesto para envíos por volumen en Mar del Plata. Cotizá tu logística e-commerce con las mejores tarifas del mercado local hoy.',
    url: 'https://www.enviosdosruedas.com/cotizar/lowcost',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function CotizarLowCostPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-brand-blue-950 text-white selection:bg-brand-yellow-500 selection:text-brand-ink font-sans">
      <OptimizedHeader />
      <main className="flex-grow">
        <LowCostCalculatorHero />
        <LowCostCalculator />
        <MapFeatures />
        <PricingInfo />
        <CalculatorTips />
        <CalculatorContact />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
