import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://futuroeventi.it'),
  title: 'Noleggio Toro Meccanico Milano e Lombardia | Prezzi da 400€ - FuturoEventi',
  description:
    'Noleggio Toro Meccanico e Last Man Standing. Operatore incluso, assicurazione RC, montaggio rapido. Serviamo Milano, Bergamo, Brescia, Como. Richiedi preventivo in 1 minuto.',
  keywords:
    'toro meccanico Milano, toro meccanico Como, toro meccanico Bergamo, last man standing, noleggio toro meccanico eventi, toro meccanico eventi aziendali',
  alternates: {
    canonical: '/toro-meccanico',
  },
  openGraph: {
    title: 'Toro Meccanico Milano | FuturoEventi - Last Man Standing',
    description:
      'Noleggio toro meccanico professionale a Milano, Como e Bergamo. Servizio completo con operatore e assicurazione.',
    url: 'https://futuroeventi.it/toro-meccanico',
    siteName: 'FuturoEventi',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/hero/futuroeventi-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Toro Meccanico FuturoEventi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toro Meccanico Milano | FuturoEventi - Last Man Standing',
    description:
      'Noleggio toro meccanico professionale a Milano, Como e Bergamo. Operatore incluso, assicurazione completa.',
    images: ['/hero/futuroeventi-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
