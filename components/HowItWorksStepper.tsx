'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { copy } from '../copy'
import MediaCard from './MediaCard'

type Props = {
  onQuoteClick: () => void
}

export default function HowItWorksStepper({ onQuoteClick }: Props) {
  const steps = copy.howItWorksV2.steps
  const [active, setActive] = useState(0)

  const progress = useMemo(() => {
    if (steps.length <= 1) return 0
    return active / (steps.length - 1)
  }, [active, steps.length])

  return (
    <section className="relative section-padding bg-gray-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur">
              {copy.howItWorksV2.kicker}
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              {copy.howItWorksV2.title}
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">{copy.howItWorksV2.subtitle}</p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {copy.howItWorksV2.timelineProof.map((p: (typeof copy.howItWorksV2.timelineProof)[number]) => (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-sm font-semibold text-white">{p.title}</div>
                  <div className="mt-1 text-xs text-white/70">{p.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 hidden lg:block">
              <button
                type="button"
                onClick={onQuoteClick}
                className="btn-secondary bg-white/10 text-white border-white/15 hover:bg-white/15"
                aria-label={copy.howItWorksV2.microCta}
              >
                {copy.howItWorksV2.microCta}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6">
              <MediaCard
                label={copy.howItWorksV2.media.label}
                aspect="21/9"
                kind="video"
                src={copy.howItWorksV2.media.src}
                posterSrc={(copy.howItWorksV2.media as any).posterSrc}
                className="bg-white/5"
              />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:block relative w-10 shrink-0">
                      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
                      <motion.div
                        className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-emerald-400"
                        style={{ height: `${progress * 100}%` }}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 180, damping: 28 }}
                      />
                    </div>

                    <div className="w-full">
                      <div className="md:hidden mb-3">
                        <div className="relative h-px w-full bg-white/10">
                          <motion.div
                            className="absolute left-0 top-0 h-px bg-emerald-400"
                            style={{ width: `${progress * 100}%` }}
                            initial={false}
                            transition={{ type: 'spring', stiffness: 180, damping: 28 }}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        {steps.map((s: (typeof copy.howItWorksV2.steps)[number], idx: number) => {
                          const isOpen = idx === active
                          return (
                            <div key={s.title} className="rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
                              <button
                                type="button"
                                onClick={() => setActive(idx)}
                                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                                aria-expanded={isOpen}
                                aria-controls={`step-panel-${idx}`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={
                                      'grid h-9 w-9 place-items-center rounded-xl border text-sm font-semibold ' +
                                      (isOpen
                                        ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_1px_rgba(52,211,153,0.12),0_18px_45px_-26px_rgba(16,185,129,0.85)]'
                                        : 'border-white/15 bg-white/5 text-white/80')
                                    }
                                  >
                                    {idx + 1}
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-white">{s.title}</div>
                                    <div className="text-xs text-white/65">{s.line}</div>
                                  </div>
                                </div>
                                <ChevronDown
                                  size={18}
                                  className={`shrink-0 text-white/70 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                  aria-hidden="true"
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    id={`step-panel-${idx}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-5 pb-5 pt-0 text-sm text-white/75 leading-relaxed">
                                      {s.detail}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>

                      <div className="mt-6 lg:hidden">
                        <button
                          type="button"
                          onClick={onQuoteClick}
                          className="btn-secondary w-full bg-white/10 text-white border-white/15 hover:bg-white/15"
                          aria-label={copy.howItWorksV2.microCta}
                        >
                          {copy.howItWorksV2.microCta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
