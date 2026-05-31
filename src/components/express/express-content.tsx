import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "./whatsapp-button"

export function ExpressContent() {
  const features = [
    {
      title: "Alta criticidad horaria",
      description: "Servicio diseñado para cuando el tiempo es el factor más importante. Tú eliges cuándo entregamos.",
    },
    {
      title: "Rango horario a elección",
      description: "El cliente elige el rango horario de entrega que mejor se adapte a su necesidad.",
    },
    {
      title: "Anticipación mínima",
      description: "Solo requerimos un mínimo de 2 horas de anticipación para coordinar tu envío prioritario.",
    },
  ]

  return (
    <section className="py-32 px-4 bg-[#050810] relative overflow-hidden border-t border-slate-900">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary text-white text-[10px] font-bold tracking-widest mb-8 uppercase">
              SOLUCIONES PREMIUM
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1] mb-10 uppercase text-white tracking-tighter">
              ENTREGAS RÁPIDAS Y <br />
              <span className="text-primary italic">EFICIENTES</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-sans max-w-xl">
              Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta. Es la solución premium para alta criticidad horaria donde el cliente tiene el control total.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index} 
                  className="flex items-start functional-list"
                >
                  <div className="w-8 h-8 bg-slate-900 border border-slate-800 flex items-center justify-center mr-6 flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed font-sans font-normal">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-[#d97706] text-black font-sans font-bold px-10 py-6 rounded-none transition-all uppercase tracking-tight h-auto text-lg shadow-lg"
              >
                <Link href="/cotizar/express">Cotizá tu Envío</Link>
              </Button>
              <WhatsAppButton />
            </div>
          </div>

          {/* Right Content - Large Branding */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="text-center lg:text-right select-none opacity-10">
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-white font-display tracking-tighter leading-none">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  DOS RUEDAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
