'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-[#0a0d16] overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt="Background Abstracto"
          fill
          className="object-cover opacity-[0.05] grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-radial-gradient-blue opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />

        {/* Static Background Highlight */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay opacity-30" />
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-10 md:p-20 lg:p-24 rounded-3xl bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
        >
          {/* Internal Glow Effects */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-1000 mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-black tracking-[0.3em] mb-10 uppercase backdrop-blur-sm"
            >
              <Zap size={14} className="fill-yellow-400 text-yellow-400 animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">
              ¿Listo para escalar la <br />
              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">logística de tu E-Commerce?</span>
            </h2>

            <p className="font-sans text-lg text-gray-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
              <span className="font-medium text-white">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-10 py-5 bg-yellow-400 text-slate-900 font-bold text-sm rounded-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:bg-yellow-300 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wide overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Contactanos por WhatsApp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>

              <Link
                href="/tarifas"
                className="group w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-lg transition-all backdrop-blur-md flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 uppercase tracking-wide active:scale-95"
              >
                Ver Tarifas 2026 <Calculator size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 pt-16 border-t border-white/5">
              {[
                { icon: Clock, text: "Confianza local comprobada" },
                { icon: ShieldCheck, text: "Innovación constante en última milla" },
                { icon: MousePointer2, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 font-sans text-xs font-bold text-gray-500 uppercase tracking-widest text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#0a0d16] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors shadow-inner">
                    <item.icon size={20} />
                  </div>
                  <span className="max-w-[200px] leading-relaxed opacity-70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
