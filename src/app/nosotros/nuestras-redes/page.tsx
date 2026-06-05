// src/app/nosotros/nuestras-redes/page.tsx
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import { SocialHero } from "@/components/social/social-hero";
import { SocialConnect } from "@/components/social/social-connect";
import { SocialBenefits } from "@/components/social/social-benefits";
import { SocialFeed } from "@/components/social/social-feed";
import { NewsletterSignup } from "@/components/social/newsletter-signup";
import { Footer } from "@/components/homenew/footer";
import { getAllPosts } from "@/lib/social/posts";
import type { Metadata } from "next";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";

export const metadata: Metadata = {
    title: "Nuestras Redes | Comunidad de Emprendedores en Mar del Plata",
    description: "Unite a la comunidad de Envíos DosRuedas. Seguinos en redes sociales para novedades logísticas, consejos para PyMEs y canales de contacto oficial.",
    alternates: { canonical: 'https://www.enviosdosruedas.com/nosotros/nuestras-redes' },
    openGraph: {
        title: "Nuestras Redes | Comunidad de Emprendedores en Mar del Plata",
        description: "Unite a la comunidad de Envíos DosRuedas. Seguinos en redes sociales para novedades logísticas, consejos para PyMEs y canales de contacto oficial.",
        url: 'https://www.enviosdosruedas.com/nosotros/nuestras-redes',
        images: [{ url: '/og-image.jpg' }],
    },
};

export const revalidate = 3600; // Enable ISR with 1 hour revalidation

export default async function SocialNetworksPage() {
  const posts = await getAllPosts();

  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <SocialHero />
        <SocialConnect />
        <SocialFeed posts={posts} />
        <SocialBenefits />
        <NewsletterSignup />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
