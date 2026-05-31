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
    <footer className="pt-32 pb-16 px-4 bg-black border-t-8 border-[#F8CC0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex flex-col gap-4 mb-10 group" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-20 h-20 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(248,204,11,1)] flex items-center justify-center transition-all group-hover:rotate-6">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain p-2" sizes="80px" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-orbitron font-black text-3xl tracking-tighter text-white uppercase italic leading-none mb-1">
                  Envios DosRuedas
                </span>
                <span className="font-display text-orbitron font-black text-[#F8CC0B] text-base uppercase italic tracking-[0.1em] leading-none">
                  tu solución confiable
                </span>
              </div>
            </Link>
            <p className="text-white text-lg mb-12 leading-tight font-roboto font-bold uppercase tracking-tighter max-w-sm">
              Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos.
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: "https://instagram.com/enviosdosruedas", label: "Instagram" },
                { icon: "/icons/facebook.svg", href: "https://facebook.com/enviosdosruedas", label: "Facebook" },
                { icon: "/icons/whatsapp.svg", href: "https://wa.me/542236602699", label: "WhatsApp" },
                { icon: "/icons/google.svg", href: "#", label: "Google" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.2em] text-[12px] uppercase text-[#F8CC0B] border-b-2 border-[#F8CC0B] pb-2 inline-block">Nosotros</h3>
            <ul className="space-y-6">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:text-[#F8CC0B] transition-all flex items-center gap-4 group text-sm font-roboto font-black uppercase tracking-widest">
                    <div className="w-2 h-2 bg-white group-hover:bg-[#F8CC0B] transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.2em] text-[12px] uppercase text-[#F8CC0B] border-b-2 border-[#F8CC0B] pb-2 inline-block">Servicios</h3>
            <ul className="space-y-6">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:text-[#F8CC0B] transition-all flex items-center gap-4 group text-sm font-roboto font-black uppercase tracking-widest">
                    <div className="w-2 h-2 bg-white group-hover:bg-[#F8CC0B] transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.2em] text-[12px] uppercase text-[#F8CC0B] border-b-2 border-[#F8CC0B] pb-2 inline-block">Contacto Rápido</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(248,204,11,1)]">
                  <MapPin size={24} className="text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#F8CC0B] font-display text-orbitron text-[10px] font-black uppercase tracking-widest mb-1">Ubicación</span>
                  <span className="text-white text-base leading-none font-black font-roboto uppercase">Friuli 1972, Mar del Plata</span>
                </div>
              </li>

              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(248,204,11,1)]">
                  <Phone size={24} className="text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#F8CC0B] font-display text-orbitron text-[10px] font-black uppercase tracking-widest mb-1">Teléfono</span>
                  <a href="tel:+542236602699" className="text-white hover:text-[#F8CC0B] transition-colors font-black font-roboto text-base uppercase">+54 223 660-2699</a>
                </div>
              </li>

              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(248,204,11,1)]">
                  <Mail size={24} className="text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#F8CC0B] font-display text-orbitron text-[10px] font-black uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="text-white hover:text-[#F8CC0B] transition-colors font-black font-roboto text-base uppercase">matiascejas@enviosdosruedas.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-0 border-4 border-[#F8CC0B] bg-white">
          {[
            { icon: <ShieldCheck className="text-black" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Zap className="text-black" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-black" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-black" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 py-8 border-r-4 border-[#F8CC0B] last:border-r-0 hover:bg-[#F8CC0B] transition-all group">
              <div className="">{React.cloneElement(item.icon, { size: 24 })}</div>
              <span className="text-[10px] font-black tracking-[0.4em] text-black uppercase">{item.label}</span>
              <span className="text-[12px] font-black text-black uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t-2 border-white/20">
          <p className="text-[10px] text-white uppercase tracking-[0.2em] font-black">
            © 2026 Envios DosRuedas. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-10">
            <Link href="/politica-de-privacidad" className="text-[10px] text-white hover:text-[#F8CC0B] uppercase tracking-widest font-black">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[10px] text-white hover:text-[#F8CC0B] uppercase tracking-widest font-black">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
