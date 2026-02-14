'use client'

import { MapPin } from 'lucide-react'
import { copy } from '../copy'

type Props = {
  onQuoteClick: () => void
}

export default function LocalCards({ onQuoteClick }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
            {copy.local.kicker}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {copy.local.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.local.subtitle}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {copy.local.cards.map((c) => (
            <div key={c.city} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                  <MapPin size={14} />
                  {c.city}
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-600 leading-relaxed">{c.line}</div>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onQuoteClick()}
                  className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-primary-100"
                  aria-label={copy.local.quoteCta}
                >
                  {copy.local.quoteCta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
