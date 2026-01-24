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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <img
            src="/hero/toro-meccanico-hero.jpg"
            alt="Toro Meccanico FuturoEventi"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.src = '/hero/placeholder-video.jpg';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* City Selector */}
          <div className="mb-6">
            <select
              value={city}
              onChange={(e) => onCityChange(e.target.value)}
              className="bg-white/10 backdrop-blur-custom border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Seleziona la tua città"
            >
              {copy.cities.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
            {copy.hero.title}
          </h1>

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
                src=""
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
              className="btn-whatsapp flex items-center justify-center gap-2 text-lg"
              aria-label="Scrivi su WhatsApp"
            >
              <MessageCircle size={24} />
              {copy.hero.cta.whatsapp}
            </motion.button>

            <motion.button
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              onClick={onQuoteClick}
              className="btn-secondary flex items-center justify-center gap-2 text-lg"
              aria-label={copy.hero.cta.quote}
            >
              <Sparkles size={22} />
              {copy.hero.cta.quote}
            </motion.button>
          </div>

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
