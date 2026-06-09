'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { HeroVisuals } from './hero-visuals';
import { HeroScrollIndicator } from './hero-scroll-indicator';

export default function HeroAnimado() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any }
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-[#030710]">
      {/* Background Parallax - Client Component */}
      <HeroBackground />

      {/* Add subtle ambient light to background */}
      <div className="absolute inset-0 bg-radial-gradient-blue mix-blend-screen opacity-40 pointer-events-none" />

      <motion.div
        className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-900/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Tu Solución Confiable
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 uppercase text-white tracking-tighter leading-[1.1]"
          >
            Mensajería y <br className="hidden md:block" />
            <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Logística E-Commerce</span> <br className="hidden md:block" />
            en <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">Mar del Plata</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 font-sans text-base md:text-lg mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-sm rounded-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] uppercase overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Servicio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-white font-medium text-sm hover:text-blue-400 transition-colors py-2"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all group-hover:scale-105 shadow-xl backdrop-blur-sm" aria-hidden="true">
                <Play className="fill-current ml-1" size={16} />
              </div>
              <span className="uppercase tracking-wider">Ver Servicios</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4"
          >
            {[
              { icon: ShieldCheck, text: "100% Seguro", color: "text-blue-400" },
              { icon: Zap, text: "Ultra Rápido", color: "text-yellow-400" },
              { icon: Globe, text: "Cobertura Total", color: "text-blue-500" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                <item.icon size={16} className={item.color} /> {item.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visuals - Client Component */}
        <motion.div variants={itemVariants} className="lg:col-span-5 hidden lg:block">
          <HeroVisuals />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Client Component */}
      <HeroScrollIndicator />
    </section>
  );
}
