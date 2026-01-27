'use client'

import { useMemo } from 'react'
import { MessageCircle } from 'lucide-react'
import { copy } from '../copy'
import { trackWhatsAppClick } from './tracking'

type Props = {
  city: string
  whatsappContext?: {
    date?: string
    eventType?: string
    packageName?: string
  }
}

export default function TopBar({ city, whatsappContext }: Props) {
  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      copy.whatsappMessage({
        city,
        date: whatsappContext?.date,
        eventType: whatsappContext?.eventType,
        packageName: whatsappContext?.packageName,
      })
    )
    const phone = copy.contact.whatsapp.replace(/\D/g, '')
    return `https://wa.me/${phone}?text=${message}`
  }, [city, whatsappContext?.date, whatsappContext?.eventType, whatsappContext?.packageName])

  const onWhatsApp = () => {
    trackWhatsAppClick(city)
    window.open(whatsappHref, '_blank')
  }

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/70 backdrop-blur">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#" className="group inline-flex items-center gap-3" aria-label="FuturoEventi">
            <div className="text-base font-semibold tracking-tight text-white">
              <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-white bg-clip-text text-transparent">
                FuturoEventi
              </span>
            </div>
            <div className="hidden sm:block text-xs text-white/60">Il divertimento di domani, oggi.</div>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#packages" className="text-white/70 hover:text-white transition" aria-label="Vai a Pacchetti">
              Pacchetti
            </a>
            <a href="#faq" className="text-white/70 hover:text-white transition" aria-label="Vai a FAQ">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onWhatsApp}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_-18px_rgba(16,185,129,0.65)] transition hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-300/30"
              aria-label="Scrivi su WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
