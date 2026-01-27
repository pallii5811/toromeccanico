import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { copy } from '../copy'

type Props = {
  onQuoteClick: () => void
  onPackageSelect?: (packageName: string) => void
}

export default function PackagesSection({ onQuoteClick, onPackageSelect }: Props) {
  const [openOption, setOpenOption] = useState<string | null>(null)

  const optionDetails = useMemo(() => {
    const list = copy.packages.optionsDetails ?? []
    return new Map(list.map((o) => [o.label, o.description]))
  }, [])

  return (
    <section id="packages" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700">
            {copy.packages.kicker}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {copy.packages.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.packages.subtitle}</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {copy.packages.plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-6 shadow-sm transition hover:shadow-md ${
                p.highlight
                  ? 'border-primary-200 bg-white'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {copy.packages.highlightBadge}
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">{p.priceFrom}</div>
                  <div className="mt-2 text-sm text-gray-600">{p.durationLine}</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500 leading-relaxed">{copy.packages.pricingNote}</div>

              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                    <div className="text-sm text-gray-700 leading-relaxed">{b}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => {
                    onPackageSelect?.(p.name)
                    onQuoteClick()
                  }}
                  className={`w-full rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-4 focus:ring-gray-200 ${
                    p.highlight
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  aria-label={copy.packages.quoteCta}
                >
                  {copy.packages.quoteCta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6">
          <div className="text-sm font-semibold text-gray-900">{copy.packages.comparison.title}</div>

          <div className="mt-4 overflow-x-auto">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-4 gap-3 text-xs text-gray-500">
                <div></div>
                <div className="font-semibold text-gray-900">Base</div>
                <div className="font-semibold text-gray-900">Pro</div>
                <div className="font-semibold text-gray-900">Corporate</div>
              </div>

              <div className="mt-3 space-y-2">
                {copy.packages.comparison.rows.map((r) => (
                  <div key={r.label} className="grid grid-cols-4 gap-3 rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-3">
                    <div className="text-sm font-semibold text-gray-900">{r.label}</div>
                    <div className="text-sm text-gray-700">{r.values[0]}</div>
                    <div className="text-sm text-gray-700">{r.values[1]}</div>
                    <div className="text-sm text-gray-700">{r.values[2]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-gray-900">{copy.packages.optionsTitle}</div>
              <div className="mt-2 text-sm text-gray-600 leading-relaxed">{copy.packages.optionsSubtitle}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.packages.options.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOpenOption((prev) => (prev === o ? null : o))}
                  className={
                    'inline-flex items-center gap-2 rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium transition ' +
                    (openOption === o
                      ? 'border-cyan-200 text-gray-900'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300')
                  }
                  aria-expanded={openOption === o}
                >
                  {o}
                  <ChevronDown
                    size={14}
                    className={
                      'text-gray-400 transition-transform ' +
                      (openOption === o ? 'rotate-180' : '')
                    }
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          {openOption && optionDetails.get(openOption) && (
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
              {optionDetails.get(openOption)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
