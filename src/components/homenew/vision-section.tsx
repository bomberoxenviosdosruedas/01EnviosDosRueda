'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, Play, Globe } from 'lucide-react';
import Image from 'next/image';

export const VisionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const features = [
    { icon: <Zap className="text-yellow-400" />, title: "Entregas a Tiempo", text: "Puntualidad garantizada en cada envío" },
    { icon: <ShieldCheck className="text-blue-500" />, title: "Envíos Seguros", text: "Protección total de tus paquetes" }
  ];

  const stats = [
    { label: "Confianza local comprobada", value: "+5.000", color: "text-yellow-400" },
    { label: "Innovación constante en última milla", value: "7 Años", color: "text-blue-500" },
    { label: "Motocicletas dedicadas para máxima agilidad urbana", value: "Flota Exclusiva", color: "text-white" }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-[#0a0d16] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-900/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-10 uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Partner Logístico Especializado
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-10 uppercase text-white tracking-tighter leading-tight">
              Nuestra Visión <br />
              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Logística</span>
            </h2>

            <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl font-light leading-relaxed">
              Transformamos <span className="font-medium text-white">tus costos fijos en soluciones flexibles</span> que acompañan el crecimiento de tu negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#121414] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#1a1c23] group-hover:border-blue-500/30 transition-all shadow-xl backdrop-blur-sm">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-display text-sm text-white font-bold uppercase tracking-wider mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 font-sans text-xs font-light">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={`font-display text-3xl md:text-4xl lg:text-5xl font-black ${stat.color} tracking-tighter drop-shadow-lg leading-none mb-3`}>
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-full border border-white/10 items-center justify-center text-white/20"
              >
                <Globe size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            style={{ scale, y }}
          >
            {/* Visual Glass Frame */}
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden group border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 filter brightness-[0.85] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-transparent to-transparent opacity-90" />

              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Interactive Hub */}
              <div className="absolute bottom-8 left-8 right-8 p-8 rounded-2xl bg-[#0a0d16]/60 backdrop-blur-xl border border-white/10 flex items-center justify-between group-hover:bg-[#0a0d16]/80 transition-all duration-500 shadow-2xl">
                <div>
                  <h3 className="font-display text-lg font-black text-white uppercase tracking-tight mb-2">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-3 text-[10px] text-blue-400 font-bold tracking-[0.1em] uppercase">
                    <CheckCircle2 size={14} className="animate-pulse" aria-hidden="true" /> ¿Listo para ser cliente?
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Ir a página sobre nosotros"
                  className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-[0_10px_30px_-5px_rgba(37,99,235,0.6)] hover:bg-blue-500 transition-colors border border-blue-400/30"
                  onClick={() => window.location.href = '/nosotros/sobre-nosotros'}
                >
                  <Play size={20} fill="currentColor" className="ml-1" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Holographic Status */}
              <div className="absolute top-8 right-8 flex flex-col items-end gap-3">
                <div className="px-3 py-1.5 rounded-md bg-blue-500/20 backdrop-blur-md border border-blue-500/40 text-[9px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                  EN LÍNEA
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent mr-4" />
              </div>
            </div>

            {/* Background Light Leaks */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute -z-10 -top-20 -left-20 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
