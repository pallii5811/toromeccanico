# Toro Meccanico FuturoEventi - Landing Page

Landing page premium conversion-oriented per il servizio di noleggio toro meccanico "Last Man Standing" di FuturoEventi.

## 🚀 Caratteristiche

### Stack Tecnologico
- **Next.js 14** con App Router
- **TypeScript** per type safety
- **TailwindCSS** per styling moderno e responsive
- **Framer Motion** per animazioni fluide
- **Lucide React** per icone professionali

### Performance & SEO
- ⚡ Ottimizzata per Lighthouse 90+
- 🎯 SEO on-page completo (meta tags, Open Graph, schema.org)
- 📱 Mobile-first design
- ♿ Accessibilità WCAG 2.1 AA
- 🖼️ Lazy loading immagini
- 📊 Sistema di tracking analytics integrato

### Funzionalità Principali
- 🎯 Hero section con video/immagine fullscreen
- 📋 Form preventivo in 60 secondi
- 💬 Click-to-WhatsApp con messaggio precompilato
- 📞 Click-to-call diretto
- 🎪 Galleria foto/video con lightbox
- ⭐ Social proof e recensioni
- ❓ FAQ interattiva
- 📍 Sezioni localizzate per Milano/Como/Bergamo
- 🎪 Sticky CTA mobile e desktop

## 📁 Struttura del Progetto

```
├── app/
│   ├── globals.css              # Stili globali Tailwind
│   ├── layout.tsx               # Layout principale con SEO
│   └── toro-meccanico/
│       └── page.tsx             # Landing page principale
├── components/
│   ├── hero.tsx                 # Hero section
│   ├── cta-section.tsx          # CTA section con form
│   ├── sticky-cta.tsx          # Sticky CTA mobile/desktop
│   └── tracking.ts              # Sistema di tracking
├── copy.ts                      # Testi e contenuti
├── package.json                 # Dipendenze
├── tailwind.config.js           # Configurazione Tailwind
└── tsconfig.json               # Configurazione TypeScript
```

## 🛠️ Setup e Installazione

1. **Installazione dipendenze**
```bash
npm install
```

2. **Avvio development server**
```bash
npm run dev
```

3. **Build per produzione**
```bash
npm run build
```

4. **Avvio server produzione**
```bash
npm start
```

## 📸 Placeholder Immagini

Le immagini sono referenziate nel codice con i seguenti path:

### Hero Section
- `/hero/toro-meccanico-hero.jpg` (1920x1080px)
- `/hero/placeholder-video.jpg` (fallback)

### Gallery
- `/gallery/toro-meccanico-milano-1.jpg` (800x600px)
- `/gallery/toro-meccanico-como-1.jpg` (800x600px)
- `/gallery/toro-meccanico-bergamo-1.jpg` (800x600px)
- `/gallery/toro-meccanico-milano-2.jpg` (800x600px)
- `/gallery/toro-meccanico-como-2.jpg` (800x600px)
- `/gallery/toro-meccanico-bergamo-2.jpg` (800x600px)

### Client Loghi
- `/clients/tech-company.png` (200x100px)
- `/clients/banca.png` (200x100px)
- `/clients/comune-milano.png` (200x100px)
- `/clients/universita.png` (200x100px)

## 📊 Tracking Analytics

Il sistema di tracking è configurato per funzionare con:
- **Google Analytics 4** (gtag)
- **Meta Pixel** (fbq)
- **Console logging** per debugging

### Eventi Tracciati
- `cta_whatsapp_click` - Click su WhatsApp
- `cta_call_click` - Click su chiamata
- `form_submit` - Invio form preventivo
- `gallery_view` - Visualizzazione galleria
- `faq_open` - Apertura FAQ

## 🎨 Personalizzazione

### Modifica Testi
Tutti i testi sono centralizzati in `copy.ts` per facile modifica:

```typescript
export const copy = {
  hero: {
    title: 'Il Toro Meccanico Più Divertente...',
    // ...altri testi
  },
  // ...altre sezioni
}
```

### Colori Brand
I colori sono configurati in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* colori brand */ },
      secondary: { /* colori secondari */ }
    }
  }
}
```

## 📱 Responsive Design

- **Mobile**: < 768px - Sticky bar bottom, layout single column
- **Tablet**: 768px - 1024px - Layout adattato
- **Desktop**: > 1024px - Sticky CTA laterale, layout multi-column

## 🔧 Configurazione WhatsApp

Modifica il numero di contatto in `copy.ts`:

```typescript
contact: {
  whatsapp: '+39 333 1234567', // Il tuo numero
  phone: '+39 333 1234567',
}
```

## 🚀 Deploy

### Vercel (Raccomandato)
1. Connetti repository a Vercel
2. Configura build command: `npm run build`
3. Deploy automatico su push

### Altre Piattaforme
La landing page è compatibile con qualsiasi piattaforma che supporta Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## 📈 Performance Tips

1. **Ottimizza immagini**: Usa formati WebP/AVIF
2. **Lazy loading**: Già implementato per galleria
3. **Minify CSS/JS**: Automatico con Next.js build
4. **CDN**: Configura per asset statici

## 🤝 Supporto

Per supporto o modifiche:
- Controlla la documentazione Next.js
- Verifica configurazione TailwindCSS
- Testa su diversi dispositivi

---

**FuturoEventi** - Il divertimento è una scienza! 🎪
