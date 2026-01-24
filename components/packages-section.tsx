import { copy } from '../copy'

type Props = {
  onQuoteClick: () => void
  onPackageSelect?: (packageName: string) => void
}

export default function PackagesSection({ onQuoteClick, onPackageSelect }: Props) {
  return (
    <section className="section-padding bg-gray-50">
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-gray-900">{copy.packages.optionsTitle}</div>
              <div className="mt-2 text-sm text-gray-600 leading-relaxed">{copy.packages.optionsSubtitle}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.packages.options.map((o) => (
                <span
                  key={o}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
