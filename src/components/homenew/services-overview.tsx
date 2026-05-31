'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

// Definición de tipos para la tematización semántica
type ServiceTheme = {
  card: string;
  icon: string;
  accent: string;
  text: string;
  desc: string;
  button: string;
  badge?: string;
  accentColor: string;
  glowColor: string;
};

const THEMES: Record<string, ServiceTheme> = {
  express: {
    card: "bg-white border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    icon: "bg-[#EF4444] border-2 border-black text-white",
    accent: "text-[#EF4444]",
    text: "text-black",
    desc: "text-black [&>span]:bg-[#EF4444] [&>span]:text-white [&>span]:px-1",
    button: "text-black bg-[#EF4444] text-white px-4 py-2 border-2 border-black font-black uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",
    badge: "bg-[#EF4444] text-white border-black border-2",
    accentColor: "red-500",
    glowColor: "transparent"
  },
  lowcost: {
    card: "bg-white border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    icon: "bg-[#22D3EE] border-2 border-black text-black",
    accent: "text-[#22D3EE]",
    text: "text-black",
    desc: "text-black [&>span]:bg-[#22D3EE] [&>span]:text-black [&>span]:px-1",
    button: "text-black bg-[#22D3EE] px-4 py-2 border-2 border-black font-black uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",
    badge: "bg-[#22D3EE] text-black border-black border-2",
    accentColor: "cyan-400",
    glowColor: "transparent"
  },
  meli: {
    card: "bg-[#FFE600] border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    icon: "bg-black border-2 border-[#FFE600] text-[#FFE600]",
    accent: "text-black font-black",
    text: "text-black",
    desc: "text-black/80 [&>span]:bg-black [&>span]:text-[#FFE600] [&>span]:px-1",
    button: "text-[#FFE600] bg-black px-4 py-2 border-2 border-black font-black uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",
    badge: "bg-black text-[#FFE600] border-black border-2",
    accentColor: "yellow-400",
    glowColor: "transparent"
  },
  ecommerce: {
    card: "bg-white border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    icon: "bg-[#10B981] border-2 border-black text-white",
    accent: "text-[#10B981]",
    text: "text-black",
    desc: "text-black [&>span]:bg-[#10B981] [&>span]:text-white [&>span]:px-1",
    button: "text-black bg-[#10B981] text-white px-4 py-2 border-2 border-black font-black uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",
    badge: "bg-[#10B981] text-white border-black border-2",
    accentColor: "emerald-500",
    glowColor: "transparent"
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-32 px-4 bg-[#2264E3] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[#F8CC0B] text-[10px] font-black tracking-[0.3em] mb-10 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 rounded-none bg-[#F8CC0B] animate-pulse" /> Nuestros Servicios
            </div>
            <h2 className="font-display text-orbitron text-6xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.8] mb-4">
              Soluciones <br />
              <span className="text-[#F8CC0B] underline decoration-8 decoration-white underline-offset-[12px]">Logísticas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l-8 lg:border-white lg:pl-12"
          >
            <p className="text-white text-xl md:text-2xl font-roboto font-bold leading-tight uppercase tracking-tighter">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-8 lg:gap-10 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className={cn(
                  "group p-8 lg:p-12 rounded-none border-4 border-black transition-all duration-300 flex flex-col justify-between relative overflow-hidden",
                  theme.card,
                  service.className
                )}
              >
                <div className="relative z-10">
                  <div className={cn(
                    "w-16 h-16 rounded-none flex items-center justify-center mb-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
                  </div>

                  <h3 className={cn("font-display text-orbitron text-3xl font-black mb-1 uppercase tracking-tighter leading-[0.8]", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-xs font-black uppercase tracking-[0.1em] mb-6", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-base leading-tight mb-10 font-roboto font-bold uppercase tracking-tight", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                  <Link
                    href={service.href}
                    className={cn("inline-flex items-center justify-center h-14 font-display text-orbitron text-sm font-black uppercase tracking-[0.1em] transition-all", theme.button)}
                  >
                    {service.buttonText} <ChevronRight size={20} className="ml-2" />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center justify-center gap-2 px-3 py-1.5 rounded-none text-[9px] font-black tracking-widest uppercase border-2", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
