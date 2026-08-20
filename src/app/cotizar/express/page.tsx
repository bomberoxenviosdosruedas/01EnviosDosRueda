
import type { Metadata } from 'next';
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import CalculatorHero from '@/components/calculator/calculator-hero';
import ExpressCalculator from '@/components/calculator/express-calculator';
import PricingInfo from '@/components/calculator/pricing-info';
import CalculatorTips from '@/components/calculator/calculator-tips';
import CalculatorContact from '@/components/calculator/calculator-contact';
import MapFeatures from '@/components/calculator/map-features';

export const metadata: Metadata = {
  title: 'Cotizador de Mensajería Express Online | Mar del Plata',
  description: 'Calculá en tiempo real el costo de tu envío express en Mar del Plata. Cotizador online de cadetería en moto para entregas rápidas y seguras.',
  alternates: { canonical: 'https://www.enviosdosruedas.com/cotizar/express' },
  openGraph: {
    title: 'Cotizador de Mensajería Express Online | Mar del Plata',
    description: 'Calculá en tiempo real el costo de tu envío express en Mar del Plata. Cotizador online de cadetería en moto para entregas rápidas y seguras.',
    url: 'https://www.enviosdosruedas.com/cotizar/express',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function CotizarExpressPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-brand-blue-950 text-white selection:bg-brand-yellow-500 selection:text-brand-ink font-sans">
      <OptimizedHeader />
      <main className="flex-grow">
        <CalculatorHero />
        <ExpressCalculator />
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
