'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { copy } from '../copy'
import { trackWhatsAppClick } from './tracking'

type Props = {
  city: string
  whatsappContext?: {
    date?: string
    eventType?: string
    packageName?: string
  }
}

export default function SafetySection({ city, whatsappContext }: Props) {
  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      copy.whatsappMessage({
        city,
        date: whatsappContext?.date,
        eventType: whatsappContext?.eventType,
        packageName: whatsappContext?.packageName,
      })
    )
    const phone = copy.contact.whatsapp.replace(/\D/g, '')
    return `https://wa.me/${phone}?text=${message}`
  }, [city, whatsappContext?.date, whatsappContext?.eventType, whatsappContext?.packageName])

  const onWhatsApp = () => {
    trackWhatsAppClick(city)
    window.open(whatsappHref, '_blank')
  }

  return (
    <section className="relative section-padding bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
              {copy.safetyV2.kicker}
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              {copy.safetyV2.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.safetyV2.subtitle}</p>

            <div className="mt-8 space-y-3">
              {copy.safetyV2.checklist.map((c: string) => (
                <div key={c} className="flex gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <CheckCircle2 size={18} className="mt-0.5 text-emerald-600" aria-hidden="true" />
                  <div className="text-sm text-gray-800 leading-relaxed">{c}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">{copy.safetyV2.alwaysTitle}</div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {copy.safetyV2.alwaysBullets.map((b: string) => (
                  <div key={b} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                    <div className="text-sm text-gray-700 leading-relaxed">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-gray-900">{copy.safetyV2.onSite.title}</div>

              <div className="mt-5 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                {copy.safetyV2.onSite.items.map((it: (typeof copy.safetyV2.onSite.items)[number]) => (
                  <div key={it.label} className="grid grid-cols-2 gap-3 px-4 py-3">
                    <div className="text-xs font-semibold text-gray-600">{it.label}</div>
                    <div className="text-xs text-gray-900">{it.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white px-4 py-4">
                <div className="text-sm font-semibold text-gray-900">{copy.safetyV2.meteoTitle}</div>
                <div className="mt-2 text-sm text-gray-600 leading-relaxed">{copy.safetyV2.meteoText}</div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="btn-whatsapp w-full inline-flex items-center justify-center gap-2"
                  aria-label={copy.safetyV2.microCta}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  {copy.safetyV2.microCta}
                </button>
                <div className="mt-2 text-xs text-gray-500">{copy.safetyV2.microCtaNote}</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {copy.safetyV2.trustStrip.map((t: (typeof copy.safetyV2.trustStrip)[number]) => (
            <div key={t.title} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">{t.title}</div>
              <div className="mt-2 text-sm text-gray-600 leading-relaxed">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}
