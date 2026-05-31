'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, MapPin, Phone, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

function UrgencyClock() {
  return (
    <div className="relative w-32 h-32 mb-8">
      <div className="absolute inset-0 border-4 border-secondary/20 rounded-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-12 bg-secondary origin-bottom -translate-x-1/2 -translate-y-full rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-8 bg-white origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
      <div className="absolute inset-0 border-t-4 border-secondary rounded-full animate-spin-slow opacity-50" />
    </div>
  )
}

export function ExpressBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Alta criticidad horaria",
      description: "Diseñado para cuando el tiempo es el factor crítico. Vos elegís el límite de entrega (ej. \"antes de las 17:00 hs\").",
    },
    {
      icon: Zap,
      title: "Anticipación mínima",
      description: "Solo requerimos 2 horas de anticipación para garantizar la viabilidad del ruteo exclusivo.",
    },
    {
      icon: Award,
      title: "Certeza Absoluta",
      description: "Precisión garantizada en el tiempo de tu cliente final.",
    },
    {
      icon: MapPin,
      title: "Seguimiento en Tiempo Real",
      description: "Monitoreá tu envío en vivo desde la recolección hasta la entrega final.",
    },
    {
      icon: Phone,
      title: "Soporte Prioritario",
      description: "Línea directa de atención para clientes express con respuesta inmediata.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <UrgencyClock />
            </div>
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter">
              ¿POR QUÉ <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">ELEGIR EXPRESS?</span>
            </h2>
            <div className="w-24 h-2 bg-secondary mr-auto mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <p className="text-gray-400 text-lg max-w-2xl font-[family-name:var(--font-roboto)]">
              Descubre todas las ventajas de nuestro servicio premium de entregas rápidas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full bg-[#0f172a] border-white/10 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 group backdrop-blur-sm rounded-3xl overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-secondary/5 transition-colors duration-300" />

                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative border border-secondary/20 group-hover:border-secondary/50">
                      <IconComponent className="w-8 h-8 text-secondary group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all" />
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
