import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppReviewButton } from "@/components/seo/WhatsAppReviewButton";
import { MobileBottomNav } from "@/components/ui/mobile-bottom-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-hanken",
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kinetic Logistics | Your reliable logistics solution',
  description: 'Reliable motorcycle messaging and delivery service. Express and low-cost shipping for e-commerce and SMEs.',
  keywords: 'logistics, delivery, kinetic logistics',
  alternates: {
    canonical: 'https://www.kineticlogistics.com',
  },
  openGraph: {
    title: 'Kinetic Logistics | Your reliable logistics solution',
    description: 'Reliable motorcycle messaging and delivery service. Express and low-cost shipping for e-commerce and SMEs.',
    url: 'https://www.kineticlogistics.com',
    images: [
      {
        url: 'https://www.kineticlogistics.com/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Logo de Kinetic Logistics',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#1D4C9E",
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
    name: 'Kinetic Logistics',
    image: 'https://www.kineticlogistics.com/icons/icon-512x512.png',
    url: 'https://www.kineticlogistics.com',
    telephone: '+542236602699',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      postalCode: 'B7600',
      addressCountry: 'AR',
    },
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
        className={`${inter.variable} ${hanken.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppReviewButton />
        <Toaster />
        <MobileBottomNav />
      </body>
    </html>
  );
}
