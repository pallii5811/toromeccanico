'use client'

import { motion } from 'framer-motion'
import { Quote, ShieldCheck } from 'lucide-react'
import { copy } from '../copy'

export default function SocialProofSection() {
  return (
    <section className="relative section-padding bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
              {copy.socialProofV2.kicker}
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              {copy.socialProofV2.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.socialProofV2.subtitle}</p>

            <div className="mt-8 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <ShieldCheck size={18} className="text-emerald-700" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{copy.socialProofV2.logosKicker}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {copy.socialProofV2.logos.map((l: string) => (
                      <span
                        key={l}
                        className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-800"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">{copy.socialProofV2.note}</div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {copy.socialProofV2.featured.map((t: (typeof copy.socialProofV2.featured)[number], idx: number) => (
                <motion.div
                  key={`${t.name}-${t.company}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-emerald-50 via-transparent to-transparent" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-gray-200 bg-gray-50">
                      <Quote size={18} className="text-gray-700" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative mt-4 text-sm text-gray-700 leading-relaxed">{t.text}</div>

                  <div className="relative mt-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                      <div className="mt-1 text-xs text-gray-500">
                        {t.role} · {t.company}
                      </div>
                    </div>
                    <div className="hidden sm:block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                      5.0/5
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}
