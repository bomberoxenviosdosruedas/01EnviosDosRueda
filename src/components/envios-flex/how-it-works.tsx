'use client';

import React from 'react';
import { motion } from "framer-motion"
import { PackageSearch, Truck, CheckSquare, Star } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: PackageSearch,
      title: "1. Vendes",
      description: "Recibes una venta con Mercado Envios Flex en tu panel de MercadoLibre.",
    },
    {
      icon: Truck,
      title: "2. Retiramos",
      description: "Coordinamos el retiro por tu local o domicilio en el horario de corte pactado.",
    },
    {
      icon: CheckSquare,
      title: "3. Entregamos",
      description: "Nuestra flota distribuye los paquetes en Mar del Plata durante la tarde.",
    },
    {
      icon: Star,
      title: "4. Calificas",
      description: "Tu cliente recibe el paquete en el día y tu reputación sube automáticamente.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              LOGÍSTICA <span className="text-primary">SIN FRICCIONES</span>
            </h2>
            <div className="w-24 h-2 bg-primary mr-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl font-[family-name:var(--font-roboto)]">
              Integramos tu flujo de ventas con nuestra red de distribución en tiempo real.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-4 uppercase text-white tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
