"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function EnviosFlexContent() {
  const features = [
    {
      title: "Reputación Garantizada",
      description: "Cumplimos con los estrictos horarios de MercadoLibre para que tu medidor de reputación siempre esté en verde.",
    },
    {
      title: "Corte 15:00 hs",
      description: "Garantizamos Cobertura MDP y Envíos Same-Day Mar del Plata recibiendo pedidos hasta las 15:00 hs.",
    },
    {
      title: "Seguimiento App",
      description: "Notificaciones en tiempo real y confirmación de entrega digital para cada paquete.",
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };

  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-[10px] font-bold tracking-widest mb-6 uppercase">
              MERCADOLIBRE EXPERTS
            </div>
            <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-black leading-[1] mb-8 uppercase text-white tracking-tighter">
              DOMINA TUS VENTAS <br />
              <span className="text-primary italic">CON ENVÍOS FLEX</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-[family-name:var(--font-roboto)] max-w-xl">
              Somos el aliado estratégico para vendedores de MercadoLibre con Cobertura MDP total. Optimizamos tus Envíos Same-Day Mar del Plata para que tú solo te preocupes por vender más.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start functional-list"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 border border-primary/30">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)] uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)] font-normal">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Large Branding */}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-right select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-white font-[family-name:var(--font-orbitron)] tracking-tighter leading-none">
                  FLEX
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-[family-name:var(--font-orbitron)] tracking-tighter leading-none">
                  SAME-DAY
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
