import React from 'react';
import { Truck, MapPin, Phone, Mail, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSocialLinks } from './footer-social-links';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: "Sobre Nosotros", href: "/nosotros/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes" },
      { label: "Nuestras Redes", href: "/nosotros/nuestras-redes" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" }
    ],
    servicios: [
      { label: "Envíos Express", href: "/servicios/envios-express" },
      { label: "Envíos LowCost", href: "/servicios/envios-lowcost" },
      { label: "Envíos Flex (MeLi)", href: "/servicios/enviosflex" },
      { label: "E-Commerce & 3PL", href: "/servicios/plan-emprendedores" }
    ]
  };

  return (
    <footer className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 bg-[#0a0d16] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-4 mb-10 group shrink-0" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-white/5 border border-white/10">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain p-2" sizes="(max-width: 640px) 48px, 56px" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                  Envios DosRuedas
                </span>
                <span className="font-sans text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] leading-none">
                  Tu solución confiable
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-sans text-sm font-light leading-relaxed mb-12 max-w-sm">
              Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos.
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: "https://instagram.com/enviosdosruedas", label: "Instagram en el pie de página" },
                { icon: "/icons/facebook.svg", href: "https://facebook.com/enviosdosruedas", label: "Facebook en el pie de página" },
                { icon: "/icons/whatsapp.svg", href: "https://wa.me/542236602699", label: "WhatsApp en el pie de página" },
                { icon: "/icons/google.svg", href: "#", label: "Google en el pie de página" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold mb-8 tracking-[0.2em] uppercase text-gray-500">Nosotros</h3>
            <ul className="space-y-5">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-3 group font-sans text-sm font-light">
                    <span className="w-1.5 h-px bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold mb-8 tracking-[0.2em] uppercase text-gray-500">Servicios</h3>
            <ul className="space-y-5">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-3 group font-sans text-sm font-light">
                    <span className="w-1.5 h-px bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-xs font-bold mb-8 tracking-[0.2em] uppercase text-gray-500">Contacto Rápido</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#121414] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Ubicación</span>
                  <span className="text-gray-300 text-sm font-light">Friuli 1972, Mar del Plata</span>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#121414] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Teléfono</span>
                  <a href="tel:+542236602699" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-light">+54 223 660-2699</a>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#121414] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-light">matiascejas@enviosdosruedas.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5 bg-white/[0.01]">
          {[
            { icon: <ShieldCheck className="text-blue-500" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Zap className="text-yellow-400" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-blue-400" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-emerald-400" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 lg:border-r border-white/5 last:border-r-0">
              <div className="opacity-80 mb-1">{React.cloneElement(item.icon, { size: 20 })}</div>
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">{item.label}</span>
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[10px] text-gray-500 font-medium tracking-widest uppercase text-center md:text-left">
              © {currentYear} Envios DosRuedas. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/politica-de-privacidad" className="font-sans text-[10px] text-gray-500 hover:text-white uppercase tracking-widest font-bold transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="font-sans text-[10px] text-gray-500 hover:text-white uppercase tracking-widest font-bold transition-colors">Términos</Link>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-default" aria-hidden="true">
              <Globe size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
