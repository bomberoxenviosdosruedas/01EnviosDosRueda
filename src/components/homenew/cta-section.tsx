'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-32 px-4 bg-[#2264E3] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-24 rounded-none bg-black overflow-hidden border-8 border-white shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] group"
        >
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-white text-black text-[10px] font-black tracking-[0.4em] mb-12 uppercase"
            >
              <Zap size={16} className="fill-black text-black animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="font-display text-orbitron text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
              ¿Listo para escalar la <br />
              <span className="text-[#F8CC0B] italic underline decoration-8 decoration-white underline-offset-[16px]">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-white text-xl md:text-3xl mb-16 max-w-4xl mx-auto font-roboto font-bold leading-tight uppercase tracking-tighter">
              <span className="bg-[#F8CC0B] text-black px-2">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-12 h-20 bg-[#F8CC0B] text-black font-display text-orbitron font-black rounded-none transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 flex items-center justify-center gap-4 uppercase tracking-tighter text-xl border-4 border-black"
              >
                WHATSAPP DIRECTO <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/nosotros/preguntas-frecuentes"
                className="w-full sm:w-auto px-12 h-20 bg-transparent hover:bg-white/10 border-4 border-white text-white font-display text-orbitron font-black rounded-none transition-all flex items-center justify-center gap-4 uppercase tracking-widest text-lg"
              >
                PREGUNTAS <Calculator size={28} />
              </Link>
            </div>

            <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-20 border-t-4 border-white">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <Zap aria-hidden="true" />, text: "Flota exclusiva dedicada" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-[10px] font-black text-white uppercase tracking-[0.3em]">
                  <div className="w-16 h-16 rounded-none bg-white flex items-center justify-center text-black border-2 border-black group-hover:bg-[#F8CC0B] transition-all">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 28 })}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
