'use client';

import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { copy } from '../copy';
import { trackWhatsAppClick } from './tracking';
import MediaCard from './MediaCard'

type Props = {
  city: string;
  onCityChange: (city: string) => void;
  onQuoteClick: () => void;
  whatsappContext?: {
    date?: string
    eventType?: string
    packageName?: string
  }
};

const Hero = ({ city, onCityChange, onQuoteClick, whatsappContext }: Props) => {
  const reduceMotion = useReducedMotion()

  const titleParts = useMemo(() => {
    const title = copy.hero.title
    const key = 'Last Man Standing'
    const idx = title.indexOf(key)
    if (idx === -1) return { before: title, key: '', after: '' }
    return {
      before: title.slice(0, idx),
      key,
      after: title.slice(idx + key.length),
    }
  }, [])

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      copy.whatsappMessage({
        city,
        date: whatsappContext?.date,
        eventType: whatsappContext?.eventType,
        packageName: whatsappContext?.packageName,
      })
    );
    const phone = copy.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${phone}?text=${message}`;
  }, [city, whatsappContext?.date, whatsappContext?.eventType, whatsappContext?.packageName]);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(city);
    window.open(whatsappHref, '_blank');
  };

  return (
    <section
      className="relative min-h-screen flex items-start justify-center overflow-hidden"
      style={{ paddingTop: 'clamp(24rem, 38vh, 34rem)' }}
    >
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.22),transparent_42%),radial-gradient(circle_at_72%_32%,rgba(167,139,250,0.22),transparent_48%),radial-gradient(circle_at_55%_78%,rgba(34,211,238,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
          <img
            src="/hero/futuroeventi-hero.jpg"
            alt="FuturoEventi"
            className="hidden sm:block absolute inset-0 w-full h-full object-cover object-[50%_18%] sm:object-center opacity-30 sm:opacity-25"
            onError={(e) => {
              e.currentTarget.src = '/hero/placeholder-video.jpg';
            }}
          />
          <img
            src="/hero/futuroeventi-hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain object-top opacity-25 sm:hidden [mask-image:linear-gradient(to_bottom,black_0%,black_48%,transparent_78%)]"
          />
          <div className="absolute inset-0 fe-grain opacity-30" />
          <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_55%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight text-white/70 mix-blend-soft-light">
            <span>{titleParts.before}</span>
            {titleParts.key && (
              <span className="relative inline-block">
                <span className="relative z-10">{titleParts.key}</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-gradient-to-r from-cyan-400/14 via-violet-400/12 to-transparent" />
              </span>
            )}
            <span>{titleParts.after}</span>
          </h1>

          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              {copy.hero.proofLine}
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-6 text-gray-200 font-medium">
            {copy.hero.subtitle}
          </p>

          <div className="mx-auto mb-7 max-w-4xl">
            <div className="rounded-[28px] border border-white/12 bg-black/20 p-2 shadow-[0_40px_140px_-90px_rgba(0,0,0,0.85)] backdrop-blur">
              <MediaCard
                label={copy.hero.trailer.label}
                meta={copy.hero.trailer.meta}
                aspect="21/9"
                kind="video"
                src={copy.hero.trailer.src}
                posterSrc={copy.hero.trailer.posterSrc}
                className="rounded-3xl"
              />
            </div>
            <div className="mt-3 text-xs text-white/70">{copy.hero.trailer.hint}</div>
          </div>

          <p className="text-base md:text-lg text-gray-200/90 mb-8">
            {copy.hero.perfectFor}
          </p>

          <p className="text-sm md:text-base text-gray-200/80 mb-8">
            {copy.hero.microTrust}
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="btn-whatsapp fe-whatsapp-glow flex items-center justify-center gap-2 text-lg"
              aria-label="Scrivi su WhatsApp"
            >
              <MessageCircle size={24} />
              {copy.hero.cta.whatsapp}
            </motion.button>

            <motion.button
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              onClick={onQuoteClick}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/15"
              aria-label={copy.hero.cta.quote}
            >
              <Sparkles size={22} />
              {copy.hero.cta.quote}
            </motion.button>
          </div>

          <div className="mb-8 text-sm text-white/70">{copy.hero.ctaNote}</div>

          {/* Trust pills under CTA */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {copy.hero.trustPills.map((pill, index) => (
              <motion.div
                key={pill}
                initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.1 + index * 0.08 }}
                className="bg-white/10 backdrop-blur-custom border border-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
              >
                {pill}
              </motion.div>
            ))}
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/50 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">{copy.availability.badge}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm">Scopri di più</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
