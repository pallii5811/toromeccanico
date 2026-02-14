import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FuturoEventi — Toro Meccanico',
    short_name: 'FuturoEventi',
    description:
      'Noleggio toro meccanico professionale a Milano, Como e Bergamo. Operatore incluso e gestione completa.',
    start_url: '/toro-meccanico',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/icon',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
  }
}
