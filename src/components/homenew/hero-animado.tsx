import Link from 'next/link';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroVisuals } from './hero-visuals';
import { HeroScrollIndicator } from './hero-scroll-indicator';

export default function HeroAnimado() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-[#2264E3]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-none bg-black border-2 border-[#F8CC0B] text-[#F8CC0B] text-[10px] font-black tracking-[0.4em] mb-10 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#F8CC0B] opacity-75"></span>
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[#F8CC0B]"></span>
            </span>
            Tu Solución Confiable
          </div>

          <h1 className="font-display text-orbitron text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white">
            Mensajería y <br />
            <span className="text-[#F8CC0B] italic underline decoration-8 decoration-white underline-offset-[16px]">Logística E-Commerce</span> <br />
            en Mar del Plata
          </h1>

          <p className="text-white text-xl lg:text-2xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-tight font-roboto font-bold uppercase tracking-tighter">
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center">
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-12 h-20 bg-[#F8CC0B] text-black font-display text-orbitron font-black rounded-none transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 border-4 border-black flex items-center justify-center gap-4 uppercase tracking-tighter text-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4">
                SOLICITAR SERVICIO <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-6 group text-white font-display text-orbitron font-black uppercase tracking-[0.2em] hover:text-[#F8CC0B] transition-colors py-2"
            >
              <div className="w-20 h-20 rounded-none bg-black border-4 border-white flex items-center justify-center group-hover:bg-[#F8CC0B] group-hover:border-black group-hover:text-black transition-all group-hover:rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" aria-hidden="true">
                <Play className="fill-current text-white group-hover:text-black ml-1" size={28} />
              </div>
              <span className="text-sm">VER SERVICIOS</span>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-6">
            <div className="flex items-center gap-3 text-[12px] font-black tracking-[0.3em] uppercase text-white">
              <ShieldCheck size={20} className="text-[#F8CC0B]" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-3 text-[12px] font-black tracking-[0.3em] uppercase text-white">
              <Zap size={20} className="text-[#F8CC0B]" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-3 text-[12px] font-black tracking-[0.3em] uppercase text-white">
              <Globe size={20} className="text-[#F8CC0B]" /> COBERTURA TOTAL
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
