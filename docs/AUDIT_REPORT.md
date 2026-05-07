# Auditoría Técnica - Envíos DosRuedas

**Arquitecto:** Jules (Senior Software Architect)
**Stack Requerido:** Next.js 15+ (App Router, RSC), TypeScript (Strict), Supabase, Tailwind CSS, Bun.

---

### 1. Renderizado de Elementos Críticos (LCP) en el Client-Side
- **Gravedad:** Alta
- **Hallazgo:** El componente `HeroAnimado.tsx` utiliza la directiva `'use client'` para toda su estructura. Esto incluye el H1 y el CTA principal, que son elementos críticos para el *Largest Contentful Paint* (LCP). Al depender de Framer Motion para el renderizado inicial, el usuario percibe una pantalla en blanco o un "flash" mientras se descarga y ejecuta el bundle de JS.
- **Refactor Propuesto:**
```tsx
// src/components/homenew/hero-server.tsx (RSC)
import { HeroInteractive } from './hero-interactive';

export default function HeroServer() {
  return (
    <section className="relative min-h-[100dvh] flex items-center ... bg-[#050810]">
      {/* El contenido estático se sirve como HTML puro */}
      <div className="max-w-7xl mx-auto z-10">
        <h1 className="text-7xl font-black uppercase text-white">
          Servicio de <span className="text-primary">mensajería</span>
        </h1>
        {/* Solo la lógica de interacción es Client Component */}
        <HeroInteractive />
      </div>
    </section>
  );
}
```
- **Justificación:** Al mover el texto y la estructura base a un Server Component (RSC), el HTML se genera en el servidor. Esto mejora drásticamente el FCP/LCP y el SEO.

---

### 2. Estrategia de Data Fetching y Bypass de Cache
- **Gravedad:** Media
- **Hallazgo:** En `src/app/servicios/envios-express/page.tsx`, se utiliza `export const revalidate = 0;`. Esto fuerza un renderizado dinámico en cada solicitud, ignorando las capacidades de cache de Next.js 15. Además, se utiliza Prisma directamente, lo cual debería migrarse a Supabase según el stack inmutable.
- **Refactor Propuesto:**
```tsx
// src/lib/supabase/service.ts
import { createClient } from '@/lib/supabase/server';

export async function getPriceRanges() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('price_ranges')
    .select('*')
    .eq('service_type', 'EXPRESS')
    .eq('is_active', true);

  if (error) throw new Error(error.message);
  return data;
}

// src/app/servicios/envios-express/page.tsx
export const revalidate = 3600; // Cache por 1 hora (ISR)

export default async function Page() {
  const priceRanges = await getPriceRanges();
  // ... rest of component
}
```
- **Justificación:** Migrar a la API nativa de Supabase y utilizar revalidación basada en tiempo reduce la carga en la base de datos y aprovecha la velocidad de Bun.

---

### 3. Arquitectura del Layout y Hidratación Innecesaria
- **Gravedad:** Media
- **Hallazgo:** El `OptimizedHeader` y `Footer` están saturados de lógica de cliente (`usePathname`, `useState`, `framer-motion`) para elementos que son mayormente estáticos.
- **Refactor Propuesto:**
Separar los componentes en una estructura "Híbrida":
1. **Header (RSC):** Renderiza el logo y los links.
2. **MobileMenu (Client):** Solo se carga e hidrata el botón de menú y el Sheet lateral.
3. **ActiveLink (Client):** Un componente pequeño para aplicar la clase `active`.

- **Justificación:** Sigue el patrón de "Islas" dentro de RSC, minimizando el JS enviado al navegador.

---

### 4. Dependencias y Bundle Size (Framer Motion)
- **Gravedad:** Baja
- **Hallazgo:** Se detecta el uso de `framer-motion` para animaciones simples de entrada que podrían resolverse con CSS nativo o Tailwind `animate-fade-in`.
- **Refactor Propuesto:**
```tsx
// En lugar de <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
<div className="opacity-0 animate-in fade-in duration-700 slide-in-from-bottom-10 fill-mode-forwards">
  {/* Contenido */}
</div>
```
- **Justificación:** Reducir la dependencia de Framer Motion en componentes "Below the fold" disminuye el tiempo de Script Evaluation.

---

### Resumen de Auditoría
| Métrica | Estado Actual | Meta Stack Inmutable |
| :--- | :--- | :--- |
| **Arquitectura** | Client-Centric | RSC-First (Server-Driven) |
| **Base de Datos** | Prisma/Direct PG | Supabase Native Client |
| **Rendimiento** | Dependiente de Hydration | Streaming & Static HTML |
| **Runtime** | Node compatibility | Bun Native Optimized |
