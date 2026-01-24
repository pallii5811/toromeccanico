import { copy } from '../copy'

export default function HowItWorksCompact() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
            {copy.howItWorks.kicker}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {copy.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{copy.howItWorks.subtitle}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-5 gap-4">
          {copy.howItWorks.steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="text-4xl font-semibold tracking-tight text-gray-900">{idx + 1}</div>
              <div className="mt-3 text-sm font-semibold text-gray-900">{s.title}</div>
              <div className="mt-2 text-sm text-gray-600 leading-relaxed">{s.line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
