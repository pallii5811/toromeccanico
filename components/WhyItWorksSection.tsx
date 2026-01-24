'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Camera, Sparkles, Target, Users, Zap } from 'lucide-react'
import { copy } from '../copy'
import MediaCard from './MediaCard'

type Props = {
  onQuoteClick: () => void
}

const iconFor = (key: string) => {
  switch (key) {
    case 'zap':
      return <Zap size={18} aria-hidden="true" />
    case 'users':
      return <Users size={18} aria-hidden="true" />
    case 'camera':
      return <Camera size={18} aria-hidden="true" />
    case 'target':
      return <Target size={18} aria-hidden="true" />
    default:
      return <Sparkles size={18} aria-hidden="true" />
  }
}

export default function WhyItWorksSection({ onQuoteClick }: Props) {
  return (
    <section className="relative section-padding bg-[#F5F0E8]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-gray-800 backdrop-blur">
              {copy.whyItWorksV2.kicker}
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              {copy.whyItWorksV2.title}
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">{copy.whyItWorksV2.subtitle}</p>

            <div className="mt-8 space-y-3">
              {copy.whyItWorksV2.trustBullets.map((b: string) => (
                <div key={b} className="flex gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <div className="text-sm text-gray-800 leading-relaxed">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
              {copy.whyItWorksV2.features.map((f: (typeof copy.whyItWorksV2.features)[number], idx: number) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={
                    'group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition ' +
                    'hover:-translate-y-1 hover:shadow-[0_22px_60px_-38px_rgba(0,0,0,0.45)] ' +
                    (f.size === 'lg' ? 'sm:row-span-2' : '')
                  }
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-white/25 via-transparent to-emerald-200/20" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-gray-900">
                        {f.badge}
                      </div>
                      <div className="mt-4 flex items-center gap-3 text-gray-900">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white shadow-sm">
                          {iconFor(f.icon)}
                        </div>
                        <div className="text-base font-semibold">{f.title}</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3 text-sm text-gray-700 leading-relaxed">{f.description}</div>
                  {f.note && <div className="relative mt-3 text-xs text-gray-600">{f.note}</div>}
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="grid sm:grid-cols-3 gap-4">
                {copy.whyItWorksV2.mediaRail.map((m: (typeof copy.whyItWorksV2.mediaRail)[number]) => (
                  <MediaCard key={m.label} label={m.label} kind={m.kind} src={m.src} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200"
                aria-label={copy.whyItWorksV2.microCta}
              >
                {copy.whyItWorksV2.microCta}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <div className="mt-3 text-xs text-gray-600">{copy.whyItWorksV2.microCtaNote}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}
