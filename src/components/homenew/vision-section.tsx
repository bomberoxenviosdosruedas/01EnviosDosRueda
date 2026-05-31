'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, Play, Globe, ArrowRight, MousePointer2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const VisionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const features = [
    { icon: <Zap className="text-secondary" />, title: "Entregas a Tiempo", text: "Puntualidad garantizada en cada envío" },
    { icon: <ShieldCheck className="text-primary" />, title: "Envíos Seguros", text: "Protección total de tus paquetes" }
  ];

  const stats = [
    { label: "Confianza local comprobada", value: "+5.000", color: "text-secondary" },
    { label: "Innovación constante en última milla", value: "7 Años", color: "text-primary" },
    { label: "Motocicletas dedicadas para máxima agilidad urbana", value: "Flota Exclusiva", color: "text-blue-400" }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[#F8CC0B] text-[10px] font-black tracking-[0.3em] mb-10 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 rounded-none bg-[#F8CC0B] animate-pulse" /> Partner Logístico Especializado
            </div>

            <h2 className="font-display text-orbitron text-5xl md:text-8xl font-black leading-[0.85] mb-10 uppercase text-white tracking-tighter">
              Nuestra Visión <br />
              <span className="text-[#F8CC0B] italic underline decoration-8 decoration-white underline-offset-[12px]">Logística</span>
            </h2>

            <p className="text-white text-lg md:text-2xl mb-12 leading-tight font-roboto font-bold max-w-2xl uppercase tracking-tighter">
              Transformamos <span className="bg-[#F8CC0B] text-black px-2 inline-block -rotate-1">tus costos fijos</span> en soluciones flexibles que acompañan el crecimiento de tu negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-16 h-16 rounded-none bg-white border-4 border-black flex items-center justify-center shrink-0 group-hover:bg-[#F8CC0B] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    {React.cloneElement(item.icon, { size: 32, className: "text-black" })}
                  </div>
                  <div>
                    <h3 className="font-display text-orbitron text-xl font-black text-white uppercase tracking-wider mb-2 group-hover:text-[#F8CC0B] transition-colors">{item.title}</h3>
                    <p className="text-white/80 text-sm font-roboto leading-tight font-medium uppercase tracking-tight">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t-4 border-white">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={`text-4xl md:text-5xl font-black font-display text-orbitron ${stat.color} tracking-tighter italic drop-shadow-lg leading-tight`}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-full border border-white/10 items-center justify-center text-white/20 opacity-40"
              >
                <Globe size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            style={{ scale, y }}
          >
            {/* Visual Frame */}
            <div className="relative aspect-[4/5] rounded-none overflow-hidden group border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 filter brightness-100 contrast-125 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Interactive Hub */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-white border-t-4 border-black flex flex-col gap-6 group-hover:bg-[#F8CC0B] transition-all duration-500">
                <div>
                  <h3 className="font-display text-orbitron text-2xl font-black text-black uppercase tracking-tight mb-2 leading-none">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-3 text-[10px] text-black font-black tracking-[0.1em] uppercase">
                    ¿Listo para formar parte de nuestra familia de clientes satisfechos?
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/nosotros/sobre-nosotros"
                    aria-label="Ir a página sobre nosotros"
                    className="w-full h-14 rounded-none bg-black flex items-center justify-center text-white font-black text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all border-2 border-black"
                  >
                    Explorar <ArrowRight className="ml-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Status */}
              <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
                <div className="px-4 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[10px] font-black text-[#F8CC0B] uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-none bg-[#F8CC0B] animate-pulse" />
                  STATUS: OPERATIVO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};