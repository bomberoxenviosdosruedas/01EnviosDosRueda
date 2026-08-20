'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeaderContainer } from './header-container';
import { MobileMenu } from './mobile-menu';
import { ActiveLink } from './active-link';
import { NavDropdown } from './nav-dropdown';
import { navGroups } from '@/lib/navigation';

export const OptimizedHeader = () => {
  return (
    <HeaderContainer>
      {/* Logo Section - RSC */}
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 min-w-0" aria-label="Volver al inicio desde la cabecera">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(6,54,165,0.4)]">
          <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" priority sizes="(max-width: 768px) 32px, 40px" />
        </div>
        <span className="font-display text-2xl tracking-tight text-white uppercase whitespace-nowrap">
          Envíos <span className="text-brand-yellow-500">DosRuedas</span>
        </span>
      </Link>

      {/* Desktop Navigation - RSC & Client Components for Interaction */}
      <nav className="hidden lg:flex items-center space-x-1 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl p-1.5 shadow-2xl font-subheading uppercase tracking-wider text-sm">
        <ActiveLink 
          href="/" 
          className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all"
          activeClassName="bg-brand-yellow-500 text-brand-ink font-bold shadow-md"
        >
          <Home className="h-4 w-4 mr-1.5" />
          <span>Inicio</span>
        </ActiveLink>

        {navGroups.map((group) => (
          <NavDropdown key={group.label} group={group} />
        ))}

        <ActiveLink 
          href="/contacto" 
          className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all"
          activeClassName="bg-brand-yellow-500 text-brand-ink font-bold shadow-md"
        >
          <Mail className="h-4 w-4 mr-1.5" />
          <span>Contacto</span>
        </ActiveLink>

        <div className="w-px h-6 bg-white/10 mx-2" />

        <Button
          asChild
          variant="cta"
          size="sm"
          className="px-5 rounded-full font-subheading uppercase tracking-wider text-xs hover:scale-105 transition-transform"
        >
          <Link href="/cotizar/express" aria-label="Cotizá tu envío desde la cabecera">
            <CalculatorIcon className="mr-1.5 h-3.5 w-3.5" />
            Cotizá Tu Envío
          </Link>
        </Button>
      </nav>

      {/* Right side Hub - RSC & Client Components */}
      <div className="flex items-center gap-4 font-subheading">
        <a href="tel:+5492236602699" aria-label="Llamar al +54 223 660-2699" className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest hover:text-brand-yellow-500 hover:bg-white/20 transition-all uppercase">
          <Phone size={13} className="text-brand-yellow-500 animate-pulse" aria-hidden="true" /> +54 223 660-2699
        </a>

        <MobileMenu navGroups={navGroups} />
      </div>
    </HeaderContainer>
  );
};