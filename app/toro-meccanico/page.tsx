import type { Metadata } from 'next'
import Script from 'next/script'
import ToroMeccanicoLanding from '../../components/toro-meccanico-landing'
import { copy } from '../../copy'

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
  keywords: copy.seo.keywords,
  alternates: {
    canonical: 'https://futuroeventi.it/toro-meccanico',
  },
  openGraph: {
    title: copy.seo.title,
    description: copy.seo.description,
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
    title: copy.seo.title,
    description: copy.seo.description,
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

export default function ToroMeccanicoPage() {
  const baseUrl = 'https://futuroeventi.it'

  const areaServed = [
    'Milano',
    'Monza',
    'Brescia',
    'Bergamo',
    'Como',
    'Lecco',
    'Varese',
    'Lodi',
    'Pavia',
    'Cremona',
    'Sondrio',
  ].map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  }))

  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: 'Pacchetti Toro Meccanico FuturoEventi',
    itemListElement: copy.packages.plans.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: (p.priceFrom || '').replace(/[^0-9]/g, '') || undefined,
      priceCurrency: 'EUR',
      url: `${baseUrl}/toro-meccanico#packages`,
      availability: 'https://schema.org/InStock',
      description: p.durationLine,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FuturoEventi',
    url: `${baseUrl}/toro-meccanico`,
    telephone: copy.contact.phone,
    email: copy.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: copy.contact.address,
      addressCountry: 'IT',
    },
    areaServed: copy.cities
      .filter((c) => c.value !== 'Altro')
      .map((c) => ({
        '@type': 'AdministrativeArea',
        name: c.value,
      })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Noleggio Toro Meccanico e Last Man Standing Lombardia',
    areaServed,
    priceRange: '€400-€600',
    provider: {
      '@type': 'Organization',
      name: 'FuturoEventi',
      telephone: copy.contact.phone,
      url: `${baseUrl}/toro-meccanico`,
    },
    hasOfferCatalog: offerCatalog,
    serviceType: ['Noleggio toro meccanico', 'Noleggio last man standing', 'Attrazioni per eventi'],
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, serviceSchema, faqSchema]),
        }}
      />
      <ToroMeccanicoLanding />
    </>
  )
}
