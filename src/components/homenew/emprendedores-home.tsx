'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, Package, Building2 } from 'lucide-react';
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
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 overflow-hidden bg-[#0a0d16]">
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <Image
          src="/hero/delivery_background.jpeg"
          alt="Background Delivery"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[180px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0d16] to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-black tracking-[0.3em] mb-8 uppercase backdrop-blur-sm"
            >
              <Building2 size={14} className="animate-pulse" /> Soluciones Corporativas y PyME
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight"
            >
              Potencia tu <br />
              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Logística</span> con <br className="hidden md:block"/>
              <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">DosRuedas</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:border-l lg:border-white/10 lg:pl-10 max-w-md"
          >
            <p className="text-gray-400 font-sans text-base font-light leading-relaxed mb-8">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos para clientes corporativos.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-display text-3xl font-black text-yellow-400 tracking-tighter">500+</span>
                <span className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest">Empresas</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-3xl font-black text-blue-500 tracking-tighter">24/7</span>
                <span className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest">Operativa</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative h-full rounded-2xl overflow-hidden border border-white/5 bg-[#0f172a] hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent" />

              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-auto">
                  <span className="px-3 py-1.5 rounded-md bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] shadow-lg">
                    {solution.badge}
                  </span>
                </div>

                <div className="w-14 h-14 rounded-xl bg-[#0a0d16] border border-white/5 flex items-center justify-center text-gray-300 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <solution.icon size={24} strokeWidth={2} />
                </div>

                <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {solution.title}
                </h3>

                <p className="font-sans text-sm text-gray-400 font-light leading-relaxed mb-8">
                  {solution.description}
                </p>

                <div className="space-y-3 mb-10">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 font-sans text-xs font-medium text-gray-400 uppercase tracking-wider">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.link}
                  className="group/btn w-full py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs text-center flex items-center justify-center gap-3 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 uppercase tracking-widest backdrop-blur-sm active:scale-95"
                >
                  Configurar Plan <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Floor Element */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};
