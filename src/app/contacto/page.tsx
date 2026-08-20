import type { Metadata } from "next";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/footer";
import { ContactPageClient } from "@/components/contact/contact-page-client";

export const metadata: Metadata = {
  title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
  description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/contacto' },
  openGraph: {
    title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
    description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
    url: 'https://www.enviosdosruedas.com/contacto',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function ContactPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-brand-blue-950 text-white selection:bg-brand-yellow-500 selection:text-brand-ink font-sans">
      <OptimizedHeader />
      <main className="flex-grow">
        <ContactPageClient />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
