interface TrackingEvent {
  eventName: string;
  payload: {
    city?: string;
    service?: string;
    page?: string;
    [key: string]: any;
  };
}

export const track = (eventName: string, payload: Record<string, any> = {}) => {
  const event: TrackingEvent = {
    eventName,
    payload: {
      city: payload.city || 'unknown',
      service: payload.service || 'toro-meccanico',
      page: payload.page || 'landing',
      ...payload,
      timestamp: new Date().toISOString(),
    },
  };

  // Console logging for development
  console.log('🎯 Tracking Event:', event);

  // Google Analytics 4 (if gtag is available)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: 'engagement',
      event_label: payload.city || 'general',
      value: 1,
    });
  }

  // Meta Pixel (if fbq is available)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, event.payload);
  }

  // Store events locally for debugging
  if (typeof window !== 'undefined') {
    const events = JSON.parse(localStorage.getItem('tracking_events') || '[]');
    events.push(event);
    // Keep only last 100 events
    if (events.length > 100) {
      events.shift();
    }
    localStorage.setItem('tracking_events', JSON.stringify(events));
  }
};

// Specific tracking functions
export const trackWhatsAppClick = (city: string) => {
  track('cta_whatsapp_click', { city });
};

export const trackCallClick = (city: string) => {
  track('cta_call_click', { city });
};

export const trackFormSubmit = (city: string, formData: any) => {
  track('form_submit', { city, formData });
};

export const trackGalleryView = (city: string, imageIndex: number) => {
  track('gallery_view', { city, imageIndex });
};

export const trackFaqOpen = (city: string, questionIndex: number) => {
  track('faq_open', { city, questionIndex });
};

// Get stored events for debugging
export const getStoredEvents = (): TrackingEvent[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('tracking_events') || '[]');
};

// Clear stored events
export const clearStoredEvents = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('tracking_events');
  }
};
