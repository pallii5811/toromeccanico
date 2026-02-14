'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { copy } from '../copy'
import Hero from './hero'
import TopBar from './top-bar'
import StickyCTA from './sticky-cta'
import QuoteFormSection, { focusQuoteForm } from './quote-form-section'
import PackagesSection from './packages-section'
import WhyItWorksSection from './WhyItWorksSection'
import SocialProofSection from './SocialProofSection'
import HowItWorksStepper from './HowItWorksStepper'
import SafetySection from './SafetySection'
import FAQAccordion from './faq-accordion'
import FinalCTA from './cta-section'
import LocalCards from './local-cards'

export default function ToroMeccanicoLanding() {
  const [city, setCity] = useState(copy.cities[0]?.value ?? 'Milano')
  const [packageName, setPackageName] = useState<string | undefined>(undefined)
  const [quoteContext, setQuoteContext] = useState<{ date?: string; eventType?: string }>({})

  const onQuoteClick = useCallback(() => {
    focusQuoteForm()
  }, [])

  return (
    <main className="min-h-screen">
      <TopBar
        city={city}
        whatsappContext={{
          date: quoteContext.date,
          eventType: quoteContext.eventType,
          packageName,
        }}
      />

      <Hero
        city={city}
        onCityChange={setCity}
        onQuoteClick={onQuoteClick}
        whatsappContext={{
          date: quoteContext.date,
          eventType: quoteContext.eventType,
          packageName,
        }}
      />

      <WhyItWorksSection onQuoteClick={onQuoteClick} />

      <QuoteFormSection
        city={city}
        onCityChange={setCity}
        packageName={packageName}
        onContextChange={setQuoteContext}
      />

      <PackagesSection onQuoteClick={onQuoteClick} onPackageSelect={setPackageName} />

      <SocialProofSection />

      <HowItWorksStepper onQuoteClick={onQuoteClick} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
              Gallery
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">{copy.gallery.title}</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.gallery.subtitle}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.gallery.images.map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SafetySection
        city={city}
        whatsappContext={{
          date: quoteContext.date,
          eventType: quoteContext.eventType,
          packageName,
        }}
      />

      <FAQAccordion
        city={city}
        whatsappContext={{
          date: quoteContext.date,
          eventType: quoteContext.eventType,
          packageName,
        }}
      />

      <LocalCards onQuoteClick={onQuoteClick} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <a href="#" className="font-semibold text-gray-900 hover:text-gray-800 transition" aria-label="Cerchi anche gonfiabili?">
              Cerchi anche gonfiabili?
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">Landing dedicata in arrivo</span>
          </div>
        </div>
      </section>

      <FinalCTA
        city={city}
        onQuoteClick={onQuoteClick}
        whatsappContext={{
          date: quoteContext.date,
          eventType: quoteContext.eventType,
          packageName,
        }}
      />

      <StickyCTA
        city={city}
        onQuoteClick={onQuoteClick}
        whatsappContext={{
          date: quoteContext.date,
          eventType: quoteContext.eventType,
          packageName,
        }}
      />
    </main>
  )
}
