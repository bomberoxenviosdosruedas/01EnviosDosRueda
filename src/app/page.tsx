import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
  description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/' },
  openGraph: {
    title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
    description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
    url: 'https://www.enviosdosruedas.com/',
    images: [{ url: '/og-image.jpg' }],
  },
};

import dynamic from "next/dynamic"
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"

// Paso 2: Lazy Loading de Componentes (Code Splitting)
// Implementamos next/dynamic para componentes Below the Fold para reducir el Script Evaluation inicial.
const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-background" />
})

const ServicesOverview = dynamic(() => import("@/components/homenew/services-overview").then(mod => mod.ServicesOverview), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-background" />
})

const CtaSection = dynamic(() => import("@/components/homenew/cta-section").then(mod => mod.CtaSection), {
  ssr: true
})

const EmprendedoresHome = dynamic(() => import("@/components/homenew/emprendedores-home").then(mod => mod.EmprendedoresHome), {
  ssr: true
})

const SliderServicios = dynamic(() => import("@/components/homenew/slider-servicios"), {
  ssr: true
})

const CarruselRedes = dynamic(() => import("@/components/homenew/carrusel-redes").then(mod => mod.CarruselRedes), {
  ssr: true
})

const Footer = dynamic(() => import("@/components/homenew/footer").then(mod => mod.Footer), {
  ssr: true
})

export default function HomePage() {
  return (
    <div className="dark min-h-screen bg-brand-blue-950 text-white selection:bg-brand-yellow-500 selection:text-brand-ink flex flex-col font-sans">
      <OptimizedHeader />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-brand-blue-950 via-brand-blue-900 to-brand-blue-950">
          {/* Above the fold (LCP Critical) */}
          <HeroAnimado />

          {/* Below the fold */}
          <VisionSection />
        </div>

        <div className="bg-gradient-to-b from-brand-blue-950 via-brand-blue-900 to-brand-blue-950">
          <ServicesOverview />
          <CtaSection />
        </div>

        <div className="bg-gradient-to-b from-brand-blue-950 via-brand-blue-900 to-brand-blue-950">
          <EmprendedoresHome />
          <SliderServicios />
          <CarruselRedes />
        </div>
      </main>
      <Footer />
    </div>
  )
}
