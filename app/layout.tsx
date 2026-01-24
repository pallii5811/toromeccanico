import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://futuroeventi.it'),
  title: 'Toro Meccanico Milano | FuturoEventi - Last Man Standing',
  description: 'Noleggio toro meccanico professionale a Milano, Como e Bergamo. Operatore incluso, assicurazione completa. Perfetto per eventi aziendali, feste private e sagre.',
  keywords: 'toro meccanico Milano, toro meccanico Como, toro meccanico Bergamo, last man standing, noleggio toro meccanico eventi, toro meccanico eventi aziendali',
  openGraph: {
    title: 'Toro Meccanico Professionale | FuturoEventi',
    description: 'Il toro meccanico più divertente e sicuro per i tuoi eventi. Servizio completo con operatore e assicurazione.',
    url: 'https://futuroeventi.it/toro-meccanico',
    siteName: 'FuturoEventi',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toro Meccanico Professionale | FuturoEventi',
    description: 'Il toro meccanico più divertente e sicuro per i tuoi eventi',
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
        <link rel="icon" href="/favicon.ico" />
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
