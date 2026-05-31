import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mensajería y Logística E-Commerce en Mar del Plata | Envíos DosRuedas",
  description: "Servicio líder de mensajería y logística e-commerce en Mar del Plata. Envíos express, flex y soluciones 3PL para empresas y emprendedores.",
};

import dynamic from "next/dynamic"
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"

// Paso 2: Lazy Loading de Componentes (Code Splitting)
// Implementamos next/dynamic para componentes Below the Fold para reducir el Script Evaluation inicial.
const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-[#2264E3]" />
})

const ServicesOverview = dynamic(() => import("@/components/homenew/services-overview").then(mod => mod.ServicesOverview), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-[#2264E3]" />
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
    <div className="min-h-screen bg-[#2264E3] text-white selection:bg-[#F8CC0B]/30 flex flex-col">
      <OptimizedHeader />
      <main className="flex-grow">
        <div className="bg-[#2264E3]">
          {/* Above the fold (LCP Critical) - Renderizado estático inicial para performance extrema */}
          <HeroAnimado />

          {/* Below the fold (Lazy loaded to reduce TBT and Script Evaluation) */}
          <VisionSection />
        </div>

        <div className="bg-[#2264E3]">
          <ServicesOverview />
          <CtaSection />
        </div>

        <div className="bg-[#2264E3]">
          <EmprendedoresHome />
          <SliderServicios />
          <CarruselRedes />
        </div>
      </main>
      <Footer />
    </div>
  )
}
