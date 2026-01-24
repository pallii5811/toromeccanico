import { copy } from '../copy'

export default function SafetySection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700">
            {copy.safety.kicker}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {copy.safety.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.safety.subtitle}</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">{copy.safety.checklistTitle}</div>
            <div className="mt-5 space-y-3">
              {copy.safety.checklist.map((c) => (
                <div key={c} className="flex gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <div className="text-sm text-gray-700 leading-relaxed">{c}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-700 leading-relaxed">
              {copy.safety.microCopy}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">{copy.safety.onSiteBox.title}</div>
            <div className="mt-4 space-y-3">
              {copy.safety.onSiteBox.items.map((it) => (
                <div key={it.label} className="flex items-start justify-between gap-4">
                  <div className="text-sm text-gray-600">{it.label}</div>
                  <div className="text-sm font-semibold text-gray-900">{it.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-4 py-4">
              <div className="text-sm font-semibold text-gray-900">{copy.safety.meteoTitle}</div>
              <div className="mt-2 text-sm text-gray-600 leading-relaxed">{copy.safety.meteoText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
