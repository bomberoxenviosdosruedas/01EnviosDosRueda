'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, ChevronRight, LayoutGrid, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Envíos Express",
    bajada: "Prioridad absoluta y certeza total.",
    desc: "Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación. Garantizamos precisión en el tiempo de tu cliente final.",
    icon: <Zap />,
    color: "#EF4444",
    href: "/servicios/envios-express",
    badge: "ALTA PRIORIDAD",
    buttonText: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    bajada: "Máxima rentabilidad y eficiencia en ruteo masivo.",
    desc: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega en el día antes de las 19:00 hs.",
    icon: <Clock />,
    color: "#22D3EE",
    href: "/servicios/envios-lowcost",
    badge: "RENTABILIDAD",
    buttonText: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex (MercadoLibre)",
    bajada: "Potenciá tu reputación al máximo.",
    desc: "Somos expertos en MercadoLibre. Despachá hasta las 15:00 hs y nosotros cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro siempre esté en verde.",
    icon: <Package />,
    color: "#FFE600",
    href: "/servicios/enviosflex",
    badge: "MERCADOLIBRE",
    buttonText: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    bajada: "Tercerización integral y cuentas corrientes.",
    desc: "Más que un envío, somos tu depósito y tu equipo. Soluciones escalables para PyMEs y plataformas digitales, con facturación mensual centralizada.",
    icon: <Truck />,
    color: "#10B981",
    href: "/servicios/plan-emprendedores",
    badge: "INTEGRAL",
    buttonText: "Hablar con un asesor"
  }
];

export default function SliderServicios() {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-32 px-4 bg-[#2264E3] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[#F8CC0B] text-[10px] font-black tracking-[0.4em] mb-10 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <LayoutGrid size={16} className="text-[#F8CC0B]" /> CAPACIDADES DINÁMICAS
            </div>
            <h2 className="font-display text-orbitron text-6xl md:text-8xl font-black italic uppercase text-white tracking-tighter leading-[0.8]">
              SOLUCIONES A <br />
              <span className="text-[#F8CC0B] underline decoration-8 decoration-white underline-offset-[12px]">MEDIDA</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:border-l-8 lg:border-white lg:pl-12"
          >
            <p className="text-white font-roboto text-xl md:text-2xl leading-tight font-bold uppercase tracking-tighter">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ x: 10 }}
              className="group p-10 rounded-none bg-white border-4 border-black hover:bg-[#F8CC0B] transition-all duration-300 relative overflow-hidden flex flex-col h-[500px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              <div
                className="w-20 h-20 rounded-none flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: service.color, color: idx === 2 ? 'black' : 'white' }}
              >
                {React.cloneElement(service.icon, { size: 40 })}
              </div>

              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] bg-white px-2 py-0.5 border-2 border-black">{service.badge}</span>
                </div>
                <h3 className="font-display text-orbitron text-3xl font-black text-black mb-1 uppercase tracking-tighter leading-none group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-black text-[10px] font-black uppercase tracking-[0.1em] mb-6 opacity-70">
                  {service.bajada}
                </p>
                <p className="text-black text-base leading-tight font-roboto font-bold uppercase tracking-tight">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.href}
                className="flex items-center justify-center h-14 bg-black text-white font-display text-orbitron text-[10px] font-black uppercase tracking-[0.3em] transition-all group-hover:bg-white group-hover:text-black border-2 border-black mt-10"
              >
                {service.buttonText} <ChevronRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32 flex flex-col items-center gap-10 py-16 border-t-8 border-white"
        >
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3 text-white">
              <Zap size={24} />
              <span className="text-[12px] font-black tracking-[0.4em] uppercase">MÁXIMO PODER</span>
            </div>
            <div className="w-4 h-4 rounded-none bg-white rotate-45" />
            <div className="flex items-center gap-3 text-white">
              <Globe size={24} />
              <span className="text-[12px] font-black tracking-[0.4em] uppercase">INFRAESTRUCTURA TOTAL</span>
            </div>
          </div>
          <p className="text-white text-[10px] font-black uppercase tracking-[0.8em] text-center max-w-2xl leading-loose opacity-80">
            ENGINEERING LOGISTICS FOR THE MODERN ERA OF COMMERCE IN MAR DEL PLATA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
