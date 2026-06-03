import type { Metadata } from "next";
import { Roboto, Orbitron } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppReviewButton } from "@/components/seo/WhatsAppReviewButton";
import { BUSINESS_INFO } from "@/lib/constants/business";
import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: 'swap',
})


export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Tu solución confiable`,
  description: BUSINESS_INFO.description,
  keywords: 'mensajeria mar del plata, delivery mar del plata, envios en moto, cadeteria mar del plata, envios flex, envios low cost, mensajeria express, envios dos ruedas',
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
  openGraph: {
    title: `Mensajería y Logística E-Commerce en Mar del Plata | ${BUSINESS_INFO.name}`,
    description: 'Envíos express, low-cost, para emprendedores y Mercado Libre Flex. Cotiza online en Mar del Plata.',
    url: BUSINESS_INFO.website,
    images: [
      {
        url: `${BUSINESS_INFO.website}/icons/icon-512x512.png`,
        width: 512,
        height: 512,
        alt: `Logo de ${BUSINESS_INFO.name}`,
      },
    ],
    type: 'website',
    locale: 'es_AR',
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
};


export const viewport = {
  themeColor: "#1E40AF",
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.legalName,
    image: `${BUSINESS_INFO.website}/icons/icon-512x512.png`,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone.value,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'AR',
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map(oh => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.day,
      opens: oh.opens,
      closes: oh.closes,
    })),
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
