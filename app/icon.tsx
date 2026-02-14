import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.55), transparent 55%), radial-gradient(circle at 70% 40%, rgba(167,139,250,0.55), transparent 60%), linear-gradient(180deg, rgba(3,7,18,1) 0%, rgba(2,6,23,1) 100%)',
          borderRadius: 14,
          color: 'white',
          fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: 900,
          fontSize: 26,
          letterSpacing: -0.8,
        }}
      >
        FE
      </div>
    ),
    {
      width: 64,
      height: 64,
    }
  )
}
