'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Clock, Package, Truck, ChevronRight, MousePointer2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const THEMES = {
  express: {
    card: "bg-[#0a0d16]/80 border-red-500/20 hover:border-red-500/40 shadow-2xl backdrop-blur-md",
    icon: "bg-red-500/10 border border-red-500/20 text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]",
    accent: "text-red-400",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-white",
    button: "text-gray-300 hover:text-white group-hover:text-red-400",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    accentColor: "red-400",
    glowColor: "rgba(239,68,68,0.15)"
  },
  lowcost: {
    card: "bg-[#0a0d16]/80 border-cyan-500/20 hover:border-cyan-500/40 shadow-2xl backdrop-blur-md",
    icon: "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    accent: "text-cyan-400",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-white",
    button: "text-gray-300 hover:text-white group-hover:text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "cyan-400",
    glowColor: "rgba(6,182,212,0.15)"
  },
  meli: {
    card: "bg-[#0a0d16]/80 border-yellow-500/20 hover:border-yellow-500/40 shadow-2xl backdrop-blur-md",
    icon: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]",
    accent: "text-yellow-400",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-yellow-400",
    button: "text-gray-300 hover:text-white group-hover:text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    accentColor: "yellow-400",
    glowColor: "rgba(234,179,8,0.15)"
  },
  ecommerce: {
    card: "bg-[#0a0d16]/80 border-emerald-500/20 hover:border-emerald-500/40 shadow-2xl backdrop-blur-md",
    icon: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    accent: "text-emerald-400",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-emerald-400",
    button: "text-gray-300 hover:text-white group-hover:text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "emerald-500",
    glowColor: "rgba(16,185,129,0.15)"
  }
};

export const ServicesOverview = () => {
  const services = [
    {
      theme: "express",
      title: "Envíos Express",
      bajada: "Prioridad absoluta y certeza total.",
      desc: <>Diseñado para operaciones de alta criticidad horaria. <span className="font-bold">Vos elegís el rango exacto</span> de entrega con solo 2 horas de anticipación.</>,
      icon: <Zap />,
      href: "/servicios/envios-express",
      buttonText: "Solicitar Express",
      badge: "ALTA PRIORIDAD",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "lowcost",
      title: "Envíos LowCost",
      bajada: "Rentabilidad y ruteo masivo.",
      desc: <>Variabilizá tus costos logísticos. <span className="font-bold">Ingresá tus pedidos</span> antes de las 13:00 hs y garantizamos entrega en el día.</>,
      icon: <Clock />,
      href: "/servicios/envios-lowcost",
      buttonText: "Ahorrá con LowCost",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "meli",
      title: "Envíos Flex (MercadoLibre)",
      bajada: "Potenciá tu reputación al máximo.",
      desc: <>Somos expertos en MercadoLibre. Cumplimos tus <span className="font-bold">acuerdos de nivel de servicio (SLAs) Same-Day</span> para que tu termómetro esté en verde.</>,
      icon: <Package />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Envíos Flex",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "ecommerce",
      title: "E-Commerce & 3PL",
      bajada: "Tercerización y cuentas corrientes.",
      desc: <>Más que un envío, somos tu depósito. <span className="font-bold">Soluciones escalables</span> para PyMEs con facturación mensual centralizada.</>,
      icon: <Truck />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Hablar con un asesor",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-[#030710] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 blur-[160px] pointer-events-none opacity-50 mix-blend-screen" />
      
      {/* Section Transition Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Nuestros Servicios
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tighter leading-tight">
              Soluciones <br />
              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Logísticas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md lg:border-l lg:border-white/10 lg:pl-10"
          >
            <p className="text-gray-400 font-sans text-base font-light leading-relaxed">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
                className={cn(
                  "group p-8 lg:p-10 rounded-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden",
                  theme.card,
                  service.className
                )}
              >
                {/* Background Highlight on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"
                  style={{ background: `radial-gradient(circle at top right, ${theme.glowColor}, transparent 70%)` }}
                />

                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24, strokeWidth: 2.5 })}
                  </div>

                  <h3 className={cn("font-display text-xl lg:text-2xl font-bold mb-2 uppercase tracking-wide", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("font-sans text-xs font-bold uppercase tracking-widest mb-4", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("font-sans text-sm font-light leading-relaxed mb-8 max-w-[320px]", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <Link
                    href={service.href}
                    className={cn("flex items-center gap-2 font-sans text-sm font-bold tracking-wide transition-colors uppercase", theme.button)}
                  >
                    {service.buttonText} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-black tracking-widest uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/2 -right-px w-[2px] h-20 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-current transition-all duration-500 opacity-0 group-hover:opacity-100", theme.accent)} />

                {/* Specific Visual for the first card */}
                {idx === 0 && (
                  <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500" aria-hidden="true">
                    <MousePointer2 size={100} className="rotate-12 text-white" strokeWidth={1} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
