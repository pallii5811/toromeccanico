'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { copy } from '../copy'
import { trackFaqOpen, trackWhatsAppClick } from './tracking'

type Props = {
  city: string
  whatsappContext?: {
    date?: string
    eventType?: string
    packageName?: string
  }
}

export default function FAQAccordion({ city, whatsappContext }: Props) {
  const [open, setOpen] = useState<number | null>(0)
  const [query, setQuery] = useState('')

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

  const onToggle = (idx: number) => {
    setOpen((prev) => {
      const next = prev === idx ? null : idx
      if (next !== null) trackFaqOpen(city, idx)
      return next
    })
  }

  const onWhatsApp = () => {
    trackWhatsAppClick(city)
    window.open(whatsappHref, '_blank')
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return copy.faq.questions
    return copy.faq.questions.filter((item) => {
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      )
    })
  }, [query])

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
            {copy.faq.kicker}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {copy.faq.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.faq.subtitle}</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="mb-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.faq.searchPlaceholder}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200/40"
                aria-label={copy.faq.searchPlaceholder}
              />
            </div>

            <div className="space-y-3">
              {filtered.map((q, idx) => {
                const isOpen = open === idx
                return (
                  <div
                    key={q.question}
                    className="rounded-2xl border border-gray-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => onToggle(idx)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <span className="text-base font-semibold text-gray-900">{q.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed">
                            {q.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={onWhatsApp}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-200"
                aria-label={copy.faq.whatsappCta}
              >
                <MessageCircle size={18} />
                {copy.faq.whatsappCta}
              </button>
              <div className="text-sm text-gray-500">{copy.faq.whatsappNote}</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{copy.faq.sideboxTitle}</div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{copy.faq.sideboxText}</p>
                </div>
                <div className="shrink-0">
                  <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_75%_35%,rgba(167,139,250,0.35),transparent_60%)]" />
                    <span className="relative text-sm font-semibold text-gray-900">FE</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {copy.faq.sideboxBullets.map((b) => (
                  <div key={b} className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                    <div className="text-sm text-gray-700">{b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-200"
                  aria-label={copy.faq.sideboxCta}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  {copy.faq.sideboxCta}
                </button>
                <div className="mt-3 text-xs text-gray-500">{copy.faq.sideboxMeta}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
