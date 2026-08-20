import Link from 'next/link';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { HeroVisuals } from './hero-visuals';
import { HeroScrollIndicator } from './hero-scroll-indicator';

export default function HeroAnimado() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-transparent">
      {/* Background Parallax - Client Component */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] backdrop-blur-md border border-brand-blue-100/20 text-brand-yellow-500 text-xs font-subheading font-bold tracking-widest mb-8 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500"></span>
            </span>
            LOGÍSTICA INMEDIATA 2026
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase mb-4 xl:mb-6 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both leading-[0.9]">
            Mensajería y <span className="text-brand-blue-100 drop-shadow-[0_0_25px_rgba(186,206,253,0.3)]">Logística E-Commerce</span> en <span className="text-brand-yellow-500 drop-shadow-[0_0_20px_rgba(255,236,1,0.3)]">Mar del Plata</span>
          </h1>

          <p className="text-brand-blue-100/80 font-sans text-lg md:text-xl mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            Hacé crecer tu negocio con entregas en el día, envíos Flex y cadetería urbana. Cotizá en segundos y rastreá cada paquete en tiempo real en toda la ciudad.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            <Link
              href="/cotizar/express"
              aria-label="Cotizá tu envío express desde el inicio"
              className="group bg-brand-yellow-500 text-brand-ink font-subheading font-bold uppercase tracking-wider px-8 py-4 rounded-full flex items-center justify-between gap-4 shadow-lg hover:shadow-xl hover:bg-brand-yellow-400 transition-all active:scale-[0.98]"
            >
              <span>Cotizá tu Envío</span>
              <span className="w-8 h-8 rounded-full bg-brand-blue-700/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Mirá todos nuestros servicios"
              className="flex items-center gap-3 text-white font-subheading uppercase tracking-wider hover:text-brand-yellow-500 transition-colors py-2"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-brand-blue-700/40 transition-all shadow-md backdrop-blur-sm" aria-hidden="true">
                <Play className="fill-white text-white ml-0.5" size={16} />
              </div>
              <span className="text-sm font-bold">Mirá los Servicios</span>
            </Link>
          </div>

          <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both font-subheading tracking-wider">
            <div className="flex items-center gap-2 text-xs uppercase text-brand-blue-100/70">
              <ShieldCheck size={16} className="text-brand-yellow-500" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-xs uppercase text-brand-blue-100/70">
              <Zap size={16} className="text-brand-yellow-500" /> ENTREGA EN 2HS
            </div>
            <div className="flex items-center gap-2 text-xs uppercase text-brand-blue-100/70">
              <Globe size={16} className="text-brand-blue-100" /> TODO GENERAL PUEYRREDÓN
            </div>
          </div>
        </div>

        {/* Visuals - Client Component */}
        <HeroVisuals />
      </div>

      {/* Scroll Indicator - Client Component */}
      <HeroScrollIndicator />
    </section>
  );
}