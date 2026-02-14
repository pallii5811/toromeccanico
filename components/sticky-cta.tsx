'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { copy } from '../copy';
import { trackWhatsAppClick, trackCallClick } from './tracking';

type Props = {
  city: string
  onQuoteClick: () => void
  whatsappContext?: {
    date?: string
    eventType?: string
    packageName?: string
  }
}

const StickyCTA = ({ city, onQuoteClick, whatsappContext }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(city);
    const message = encodeURIComponent(
      copy.whatsappMessage({
        city,
        date: whatsappContext?.date,
        eventType: whatsappContext?.eventType,
        packageName: whatsappContext?.packageName,
      })
    );
    window.open(`https://wa.me/${copy.contact.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    trackCallClick(city);
    window.open(`tel:${copy.contact.phone}`);
  };

  return (
    <>
      {/* Mobile WhatsApp Floating CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            type="button"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={handleWhatsAppClick}
            className="fixed bottom-4 right-4 z-[60] md:hidden inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-200"
            aria-label="Scrivi su WhatsApp"
          >
            <MessageCircle size={24} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl"
          >
            <div className="flex items-center justify-around p-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex flex-col items-center gap-1 text-green-600 hover:text-green-700 transition-colors"
                aria-label="Scrivi su WhatsApp"
              >
                <MessageCircle size={24} />
                <span className="text-xs font-medium">WhatsApp</span>
              </button>
              
              <button
                onClick={handleCallClick}
                className="flex flex-col items-center gap-1 text-gray-900 hover:text-gray-700 transition-colors"
                aria-label="Chiamaci ora"
              >
                <Phone size={24} />
                <span className="text-xs font-medium">Chiama</span>
              </button>
              
              <button
                onClick={onQuoteClick}
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-700 transition-colors"
                aria-label={copy.hero.cta.quote}
              >
                <Sparkles size={24} />
                <span className="text-xs font-medium">Preventivo</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sticky CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
          >
            <div className="bg-white rounded-full shadow-2xl border border-gray-200 p-2 space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                aria-label="Scrivi su WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
              
              <button
                onClick={handleCallClick}
                className="w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                aria-label="Chiamaci ora"
              >
                <Phone size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyCTA;
