'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { copy } from '../copy';
import { trackWhatsAppClick } from './tracking';

interface FinalCTAProps {
  city: string;
  onQuoteClick: () => void;
  whatsappContext?: {
    date?: string
    eventType?: string
    packageName?: string
  }
}

const FinalCTA = ({ city, onQuoteClick, whatsappContext }: FinalCTAProps) => {

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

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {copy.finalCta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {copy.finalCta.subtitle}
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="btn-whatsapp flex items-center justify-center gap-2 text-lg shadow-xl"
              aria-label="Scrivi su WhatsApp"
            >
              <MessageCircle size={24} />
              {copy.finalCta.cta.whatsapp}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onQuoteClick}
              className="btn-secondary flex items-center justify-center gap-2 text-lg shadow-xl"
              aria-label={copy.finalCta.cta.quote}
            >
              <Sparkles size={22} />
              {copy.finalCta.cta.quote}
            </motion.button>
          </div>

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-900 font-medium">{copy.finalCta.softCountdown}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
