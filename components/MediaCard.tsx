'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

type Props = {
  label: string
  aspect?: '16/9' | '21/9'
  kind?: 'image' | 'video'
  src?: string
  meta?: string
  className?: string
}

export default function MediaCard({ label, aspect = '16/9', kind = 'video', src, meta, className }: Props) {
  const aspectClass = aspect === '21/9' ? 'aspect-[21/9]' : 'aspect-video'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className={
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.7)] ' +
        (className ?? '')
      }
    >
      <div className={`relative ${aspectClass} w-full`}>
        {src ? (
          <Image src={src} alt={label} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10" />
            <div className="absolute inset-0 opacity-60">
              <div className="absolute -inset-x-10 inset-y-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.2s_infinite]" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_55%)] opacity-60" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {label}
        </div>

        {meta && (
          <div className="absolute right-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
            {meta}
          </div>
        )}

        {kind === 'video' && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur transition group-hover:scale-[1.03]">
              <Play size={20} className="translate-x-[1px]" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
