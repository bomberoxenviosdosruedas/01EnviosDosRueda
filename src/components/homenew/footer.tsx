import React from 'react';
import { Truck, MapPin, Phone, Mail, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSocialLinks } from './footer-social-links';
import { BUSINESS_INFO } from '@/lib/constants/business';
import { UI_DICTIONARY } from '@/lib/constants/dictionary';

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
    <footer className="pt-32 pb-16 px-4 border-t border-white/5 bg-[#050810] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 group shrink-0" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="(max-width: 640px) 48px, 56px" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-orbitron font-black text-xl sm:text-2xl lg:text-3xl tracking-tighter text-white uppercase italic leading-none mb-1">
                  {BUSINESS_INFO.name}
                </span>
                <span className="font-display text-orbitron font-black text-primary drop-shadow-[0_0_10px_rgba(37,99,235,0.3)] text-[10px] sm:text-sm lg:text-base uppercase italic tracking-[0.15em] leading-none">
                  {BUSINESS_INFO.shortTagline}
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-base mb-12 leading-relaxed font-[family-name:var(--font-roboto)] font-light max-w-sm">
              {BUSINESS_INFO.tagline}
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: BUSINESS_INFO.social.instagram, label: "Instagram en el pie de página" },
                { icon: "/icons/facebook.svg", href: BUSINESS_INFO.social.facebook, label: "Facebook en el pie de página" },
                { icon: "/icons/whatsapp.svg", href: BUSINESS_INFO.social.whatsapp, label: "WhatsApp en el pie de página" },
                { icon: "/icons/google.svg", href: "#", label: "Google en el pie de página" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.3em] text-[10px] uppercase text-white/40">Nosotros</h3>
            <ul className="space-y-6">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-all flex items-center gap-3 group text-sm font-[family-name:var(--font-roboto)] font-light">
                    <div className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.3em] text-[10px] uppercase text-white/40">Servicios</h3>
            <ul className="space-y-6">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-all flex items-center gap-3 group text-sm font-[family-name:var(--font-roboto)] font-light">
                    <div className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.3em] text-[10px] uppercase text-white/40">Contacto Rápido</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-all">
                  <MapPin size={22} className="text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-display text-orbitron text-[10px] font-black uppercase tracking-widest mb-1 opacity-40">Ubicación</span>
                  <span className="text-gray-400 text-sm leading-relaxed font-light">{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}</span>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Phone size={22} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-display text-orbitron text-[10px] font-black uppercase tracking-widest mb-1 opacity-40">Teléfono</span>
                  <a href={BUSINESS_INFO.phone.href} className="text-gray-400 hover:text-white transition-colors font-light text-sm">{BUSINESS_INFO.phone.display}</a>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Mail size={22} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-display text-orbitron text-[10px] font-black uppercase tracking-widest mb-1 opacity-40">Email</span>
                  <a href={BUSINESS_INFO.email.href} className="text-gray-400 hover:text-white transition-colors font-light text-sm">{BUSINESS_INFO.email.display}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5 bg-white/[0.01]">
          {[
            { icon: <ShieldCheck className="text-primary" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Zap className="text-secondary" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-blue-400" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-green-400" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 border-r border-white/5 last:border-r-0">
              <div className="opacity-60">{React.cloneElement(item.icon, { size: 20 })}</div>
              <span className="text-[8px] font-black tracking-[0.4em] text-white/30 uppercase">{item.label}</span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-black text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.name}. {UI_DICTIONARY.common.allRightsReserved}
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link href="/politica-de-privacidad" className="text-[9px] text-gray-400 hover:text-white uppercase tracking-widest font-black transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[9px] text-gray-400 hover:text-white uppercase tracking-widest font-black transition-colors">Términos</Link>
            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-800" aria-hidden="true">
              <Globe size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};