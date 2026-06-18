'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera as Instagram, Share2 as Facebook, MessageCircle as Twitter, ExternalLink, Phone, Heart } from "lucide-react";

const socialNetworks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/enviosdosruedas",
    color: "#E1306C",
    description: "Novedades diarias",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/enviosdosruedas",
    color: "#1877F2",
    description: "Comunidad activa",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    isWhatsApp: true,
    color: "#25D366",
    description: "Atención inmediata",
  },
];

const feedItems = [
  { 
    id: 17, 
    type: 'fb', 
    image: '/redes/fac1.webp',
    postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl"
  },
  { 
    id: 15, 
    type: 'ig', 
    image: '/redes/ig1.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/"
  },
  { 
    id: 7, 
    type: 'ig', 
    image: '/redes/ig3.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/"
  },
  { 
    id: 19, 
    type: 'ig', 
    image: '/redes/ig4.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/"
  },
  { 
    id: 21, 
    type: 'fb', 
    image: '/redes/fac2.webp',
    postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l"
  },
];

export const CarruselRedes = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, me gustaría obtener información sobre sus servicios de envío."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-24 lg:py-32 px-4 bg-[#030710] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-blue-600/5 blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-black tracking-[0.3em] mb-8 uppercase backdrop-blur-sm">
              <Heart size={14} className="fill-yellow-400 animate-pulse" /> Conectá con Nosotros
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              Sigue nuestro <br className="hidden md:block"/>
              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Movimiento</span>
            </h2>
            <p className="text-gray-400 font-sans text-lg mt-6 font-light max-w-xl leading-relaxed">
              Únete a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {socialNetworks.map((net, idx) => (
              <button
                key={idx}
                onClick={net.isWhatsApp ? handleWhatsAppClick : () => window.open(net.href, "_blank")}
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#0f172a] border border-white/5 hover:border-blue-500/30 hover:bg-[#1e293b] transition-all duration-300 shadow-lg active:scale-95"
                aria-label={`Seguinos en ${net.name}`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-inner"
                  style={{ backgroundColor: `${net.color}15`, color: net.color }}
                  aria-hidden="true"
                >
                  <net.icon size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left hidden lg:block pr-4">
                  <div className="font-display text-sm font-bold text-white tracking-wide uppercase">{net.name}</div>
                  <div className="font-sans text-[10px] font-medium text-gray-500 uppercase tracking-widest">{net.description}</div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="relative group/carousel">
          <div className="flex gap-6 w-fit overflow-hidden py-10">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" as any }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...feedItems, ...feedItems, ...feedItems].map((item, idx) => (
                <a
                  key={idx}
                  href={(item as any).postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-64 h-64 lg:w-80 lg:h-80 shrink-0 rounded-2xl overflow-hidden relative group border border-white/5 shadow-2xl transition-all hover:border-blue-500/50 block"
                  aria-label={`Ver publicación ${item.id} en ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`}
                >
                  <img src={item.image} alt={`Publicación de ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0a0d16]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-6 p-8 backdrop-blur-sm">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      {item.type === 'ig' && <Instagram size={24} />}
                      {item.type === 'fb' && <Facebook size={24} />}
                    </div>
                    <div className="text-center">
                      <div className="font-display text-white text-sm font-bold uppercase tracking-widest mb-3">VER POST</div>
                      <ExternalLink size={18} className="text-yellow-400 mx-auto" />
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Side Gradients */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030710] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030710] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
