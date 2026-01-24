'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../copy'
import { trackFormSubmit, trackWhatsAppClick } from './tracking'

export type QuoteFormSectionHandle = {
  focusFirstField: () => void
}

type Props = {
  city: string
  onCityChange: (city: string) => void
  packageName?: string
  onContextChange?: (ctx: { date?: string; eventType?: string }) => void
}

export default function QuoteFormSection({ city, onCityChange, packageName, onContextChange }: Props) {
  const nameRef = useRef<HTMLInputElement | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city,
    date: '',
    eventType: '',
    notes: '',
  })

  useEffect(() => {
    setForm((prev) => ({ ...prev, city }))
  }, [city])

  useEffect(() => {
    onContextChange?.({
      date: form.date || undefined,
      eventType: form.eventType || undefined,
    })
  }, [form.date, form.eventType, onContextChange])

  const whatsappHref = useMemo(() => {
    const message = copy.whatsappMessage({
      city: form.city || city,
      date: form.date || undefined,
      eventType: form.eventType || undefined,
      packageName,
    })
    const text = encodeURIComponent(message)
    const phone = copy.contact.whatsapp.replace(/\D/g, '')
    return `https://wa.me/${phone}?text=${text}`
  }, [city, form.city, form.date, form.eventType, packageName])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.eventType) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    setTimeout(() => {
      trackFormSubmit(form.city || city, {
        name: form.name,
        phone: form.phone,
        city: form.city,
        date: form.date,
        eventType: form.eventType,
        notes: form.notes,
      })

      setStatus('success')
      setForm({ name: '', phone: '', city, date: '', eventType: '', notes: '' })

      setTimeout(() => {
        setStatus('idle')
      }, 4500)
    }, 700)
  }

  const handleWhatsApp = () => {
    trackWhatsAppClick(form.city || city)
    window.open(whatsappHref, '_blank')
  }

  return (
    <section id="preventivo" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
              {copy.form.kicker}
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              {copy.form.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {copy.form.subtitle}
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5">
              <div className="text-sm font-semibold text-gray-900">{copy.form.helperTitle}</div>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{copy.form.helperText}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {copy.form.quickTags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="btn-whatsapp w-full"
                  aria-label={copy.form.whatsappCta}
                >
                  {copy.form.whatsappCta}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-gray-600">{copy.form.cardTitle}</div>
                    <div className="mt-1 text-xs text-gray-500">{copy.form.cardSubtitle}</div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                      {copy.availability.badge}
                    </span>
                  </div>
                </div>

                {status === 'success' && (
                  <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
                    <div className="font-semibold">{copy.form.successTitle}</div>
                    <div className="mt-1 text-sm">{copy.form.successText}</div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-800">
                    <div className="font-semibold">{copy.form.errorTitle}</div>
                    <div className="mt-1 text-sm">{copy.form.errorText}</div>
                  </div>
                )}

                <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Preventivo in 60 secondi">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                      {copy.form.fields.name}
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200"
                      placeholder={copy.form.placeholders.name}
                      autoComplete="name"
                      aria-label={copy.form.fields.name}
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
                      {copy.form.fields.phone}
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200"
                      placeholder={copy.form.placeholders.phone}
                      inputMode="tel"
                      autoComplete="tel"
                      aria-label={copy.form.fields.phone}
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-800">
                      {copy.form.fields.city}
                    </label>
                    <select
                      id="city"
                      value={form.city}
                      onChange={(e) => {
                        const v = e.target.value
                        setForm((p) => ({ ...p, city: v }))
                        onCityChange(v)
                      }}
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200"
                      aria-label={copy.form.fields.city}
                    >
                      {copy.cities.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-800">
                      {copy.form.fields.date}
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200"
                      aria-label={copy.form.fields.date}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-800">
                      {copy.form.fields.eventType}
                    </label>
                    <select
                      id="eventType"
                      value={form.eventType}
                      onChange={(e) => setForm((p) => ({ ...p, eventType: e.target.value }))}
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200"
                      aria-label={copy.form.fields.eventType}
                    >
                      <option value="">{copy.form.placeholders.eventType}</option>
                      {copy.eventTypes.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-800">
                      {copy.form.fields.notes}
                    </label>
                    <textarea
                      id="notes"
                      value={form.notes}
                      onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                      className="mt-1 w-full min-h-[96px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200"
                      placeholder={copy.form.placeholders.notes}
                      aria-label={copy.form.fields.notes}
                    />
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      aria-label={copy.form.submit}
                    >
                      {status === 'submitting' ? copy.form.submitting : copy.form.submit}
                    </button>
                    <div className="mt-3 text-center text-xs text-gray-500 leading-relaxed">
                      {copy.form.privacyLine}
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {copy.form.assurancePills.map((p) => (
                <div key={p.title} className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
                  <div className="text-sm font-semibold text-gray-900">{p.title}</div>
                  <div className="mt-1 text-xs text-gray-600 leading-relaxed">{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function focusQuoteForm() {
  const el = document.getElementById('preventivo')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  setTimeout(() => {
    const input = document.getElementById('name') as HTMLInputElement | null
    input?.focus()
  }, 450)
}
