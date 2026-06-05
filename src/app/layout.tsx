import type { Metadata, Viewport } from "next";
import { Roboto, Orbitron } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppReviewButton } from "@/components/seo/WhatsAppReviewButton";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#050810",
  colorScheme: "dark",
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enviosdosruedas.com'),
  title: {
    default: 'Envíos DosRuedas | Logística E-commerce, Flex y Mensajería en Mar del Plata',
    template: '%s | Envíos DosRuedas MDP',
  },
  description: 'Acelerá tus ventas con la mejor logística en Mar del Plata. Especialistas en Envíos Express, LowCost, MercadoLibre Flex y Fulfillment 3PL para Pymes.',
  keywords: [
    'mensajería Mar del Plata',
    'logística e-commerce',
    'envíos flex Mar del Plata',
    'delivery en moto',
    'cadetería para empresas',
    'fulfillment 3PL',
    'envíos express',
    'envíos low cost'
  ],
  authors: [{ name: 'Envíos DosRuedas' }],
  creator: 'Envíos DosRuedas',
  publisher: 'Envíos DosRuedas',
  openGraph: {
    title: 'Envíos DosRuedas | Expertos en Logística E-commerce en MDP',
    description: 'Optimizá tus entregas en Mar del Plata. Envíos Express, LowCost y Logística 3PL para emprendedores.',
    url: 'https://www.enviosdosruedas.com',
    siteName: 'Envíos DosRuedas',
    images: [
      {
        url: '/hero/hero_background.jpeg', // Renombrar o asegurar ruta a imagen 1200x630
        width: 1200,
        height: 630,
        alt: 'Envíos DosRuedas - Logística, Mensajería y Flex',
      },
    ],
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos DosRuedas | Logística Inteligente en MDP',
    description: 'Acelerá tus ventas con envíos en el día. MercadoLibre Flex, Express y 3PL en Mar del Plata.',
    images: ['/hero/hero_background.jpeg'],
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/apple-touch-icon.png",
    icon: "/icons/icon-512x512.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Avanzado y Específico para Logística Local
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CourierService',
    name: 'Envíos DosRuedas',
    description: 'Soluciones de logística, mensajería, MercadoLibre Flex y Fulfillment 3PL para e-commerce y pymes en Mar del Plata.',
    image: 'https://www.enviosdosruedas.com/icons/icon-512x512.png',
    url: 'https://www.enviosdosruedas.com',
    telephone: '+542236602699',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: 'B7600',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-38.0055', // Ajustar a latitud exacta si difiere
      longitude: '-57.5426' // Ajustar a longitud exacta si difiere
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata'
    },
    sameAs: [
      'https://www.instagram.com/enviosdosruedas/',
      'https://facebook.com/enviosdosruedas'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${roboto.variable} ${orbitron.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppReviewButton />
        <Toaster />
      </body>
    </html>
  );
}