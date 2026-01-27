'use client'

import { useCallback, useState } from 'react'
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
