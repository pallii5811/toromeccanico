import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'FuturoEventi — Noleggio Toro Meccanico Milano'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 64,
          background: 'radial-gradient(circle at 18% 22%, rgba(34,211,238,0.22), transparent 42%), radial-gradient(circle at 72% 32%, rgba(167,139,250,0.22), transparent 48%), linear-gradient(180deg, rgba(3,7,18,1) 0%, rgba(2,6,23,1) 100%)',
          color: 'white',
          fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 18,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: -0.5,
            }}
          >
            FE
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, opacity: 0.95 }}>FuturoEventi</div>
        </div>

        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.2 }}>
          Toro Meccanico
          <span style={{ color: 'rgba(34,211,238,1)' }}> Milano</span>
        </div>

        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9, maxWidth: 980, lineHeight: 1.25 }}>
          Operatore incluso. Sicurezza e gestione professionale.
          <span style={{ color: 'rgba(167,139,250,1)' }}> Last Man Standing</span> disponibile.
        </div>

        <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['Milano', 'Como', 'Bergamo', 'Aziende', 'Sagre', 'Feste private'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 14px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                fontSize: 20,
                fontWeight: 600,
                opacity: 0.95,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', right: 64, bottom: 54, fontSize: 18, opacity: 0.65 }}>
          futuroeventi.it
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
