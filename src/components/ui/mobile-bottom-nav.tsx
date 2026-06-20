'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, Truck, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Inicio', href: '/', icon: Home },
    { label: 'Servicios', href: '/servicios/envios-express', icon: Truck },
    {
      label: 'Cotizar',
      href: '/cotizar/express',
      icon: Calculator,
      isPrimary: true
    },
    { label: 'Contacto', href: '/contacto', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-lg border-t border-white/10 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;

          if (item.isPrimary) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative -top-5 flex flex-col items-center justify-center group"
              >
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95",
                  isActive ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground border-4 border-background"
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={cn(
                  "text-[10px] font-medium mt-1 uppercase tracking-wider",
                  isActive ? "text-secondary font-bold" : "text-muted-foreground"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-16 h-12 transition-colors duration-200",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-5 h-5 mb-1", isActive && "text-primary")} />
                {isActive && (
                  <motion.div
                    layoutId="bottomNavIndicator"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium",
                isActive && "font-bold"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
