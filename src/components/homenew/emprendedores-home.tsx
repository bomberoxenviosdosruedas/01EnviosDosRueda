'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Globe, Building2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const EmprendedoresHome = () => {
  const solutions = [
    {
      title: "Soluciones Corporativas",
      description: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala",
      icon: Building2,
      features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
      badge: "Corporativo",
    },
    {
      title: "Envíos Flex MercadoLibre",
      description: "Socio estratégico para potenciar tus ventas con entregas en el día",
      icon: Zap,
      features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"],
      link: "/servicios/enviosflex",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      badge: "MercadoLibre",
    },
    {
      title: "Logística E-Commerce",
      description: "Gestión integral de última milla para PyMEs en crecimiento",
      icon: Globe,
      features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
      badge: "PyMEs",
    },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center py-32 px-4 overflow-hidden bg-[#2264E3]">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[#F8CC0B] text-[10px] font-black tracking-[0.4em] mb-10 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 size={16} className="animate-pulse" /> Soluciones Corporativas y PyME
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-orbitron text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white uppercase"
            >
              Potencia tu <br />
              <span className="text-[#F8CC0B] italic underline decoration-8 decoration-white underline-offset-[12px]">Logística</span> <br />
              con DosRuedas
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:border-l-8 lg:border-white lg:pl-12"
          >
            <p className="font-roboto text-white text-xl md:text-2xl leading-tight font-bold mb-10 uppercase tracking-tighter">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos para clientes corporativos.
            </p>
            <div className="flex gap-12">
              <div className="flex flex-col gap-1">
                <span className="text-[#F8CC0B] font-display text-orbitron text-4xl font-black italic tracking-tighter uppercase">500+</span>
                <span className="text-[10px] text-white uppercase tracking-widest font-black">Empresas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F8CC0B] font-display text-orbitron text-4xl font-black italic tracking-tighter uppercase">24/7</span>
                <span className="text-[10px] text-white uppercase tracking-widest font-black">Operativa</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-auto">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ x: 10 }}
              className="group relative h-[650px] rounded-none border-4 border-black bg-white overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-auto">
                  <span className="px-4 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[10px] font-black text-[#F8CC0B] uppercase tracking-[0.3em]">
                    {solution.badge}
                  </span>
                </div>

                <div className="w-20 h-20 rounded-none bg-black border-4 border-white flex items-center justify-center text-white mb-10 group-hover:bg-[#F8CC0B] group-hover:text-black transition-all duration-500 group-hover:rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <solution.icon size={40} />
                </div>

                <h3 className="font-display text-orbitron text-3xl font-black text-black mb-6 uppercase tracking-tighter leading-[0.8]">
                  {solution.title}
                </h3>

                <p className="text-black text-lg mb-10 font-roboto leading-tight font-bold uppercase tracking-tighter">
                  {solution.description}
                </p>

                <div className="space-y-4 mb-12">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 text-sm text-black font-black">
                      <CheckCircle2 size={16} className="text-[#F8CC0B] bg-black rounded-none" />
                      <span className="uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.link}
                  className="w-full h-16 rounded-none bg-black text-white font-display text-orbitron font-black text-sm text-center flex items-center justify-center gap-4 hover:bg-[#F8CC0B] hover:text-black transition-all duration-300 uppercase tracking-widest border-2 border-black"
                >
                  CONFIGURAR PLAN <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
