export const copy = {
  // SEO Meta
  seo: {
    title: 'Noleggio Toro Meccanico Milano e Lombardia | Prezzi da 400€ - FuturoEventi',
    description:
      'Noleggio Toro Meccanico e Last Man Standing. Operatore incluso, assicurazione RC, montaggio rapido. Serviamo Milano, Bergamo, Brescia, Como. Richiedi preventivo in 1 minuto.',
    keywords: 'toro meccanico Milano, toro meccanico Como, toro meccanico Bergamo, last man standing, noleggio toro meccanico eventi, toro meccanico eventi aziendali',
  },

  cities: [
    { value: 'Milano', label: 'Milano + hinterland' },
    { value: 'Como', label: 'Como (Como, Cernobbio, Moltrasio)' },
    { value: 'Bergamo', label: 'Bergamo (Bergamo, Dalmine, Seriate)' },
    { value: 'Altro', label: 'Altro' },
  ],

  eventTypes: [
    { value: 'Privato', label: 'Privato' },
    { value: 'Azienda', label: 'Azienda' },
    { value: 'Comune', label: 'Comune / Sagra' },
  ],

  availability: {
    badge: 'Disponibilità: oggi / entro 48h',
  },

  // Hero Section
  hero: {
    title: 'Toro Meccanico Last Man Standing: lo show che fa parlare tutti',
    subtitle:
      'Arriviamo con una gestione completa: montaggio, operatore, ritmo del gioco e sicurezza. Tu ti godi il pubblico che tifa.',
    proofLine: 'Operatore dedicato. Montaggio e smontaggio inclusi. Alimentazione 220V (civile).',
    trailer: {
      label: 'Video: Toro meccanico in azione',
      meta: '0:17',
      hint: 'Guarda il toro meccanico in azione.',
      src: '/hero/WhatsApp%20Video%202026-01-25%20at%2017.42.41.mp4',
      posterSrc: '/hero/WhatsApp%20Imagge%202026-01-25%20at%2017.41.24.jpeg',
    },
    cta: {
      whatsapp: 'Scrivi su WhatsApp',
      quote: 'Preventivo in 60 secondi',
    },
    ctaNote: 'Risposta in 10–30 min (di solito)',
    trustPills: ['Risposta veloce', 'Operatore incluso', 'Assicurazione & sicurezza'],
    perfectFor: 'Perfetto per: Aziende • Sagre • Feste private',
    microTrust: 'Metodo collaudato per eventi privati e aziendali in Lombardia. Foto e video reali su richiesta.',
  },

  // Why it works
  whyItWorks: {
    kicker: 'Perché funziona',
    title: 'L’attrazione che accende la serata (senza stress organizzativo)',
    subtitle: 'Impatto alto, gestione semplice, ricordi assicurati. Zero fuffa: cose concrete.',
    benefits: [
      {
        title: 'Scena forte, subito',
        description: 'Appena parte, attira persone. Nessuno “passa oltre”.',
        icon: 'zap',
      },
      {
        title: 'Coinvolge davvero',
        description: 'Turni veloci e pubblico che tifa: l’energia sale da sola.',
        icon: 'users',
      },
      {
        title: 'Contenuti “da telefono”',
        description: 'Cadute morbide, risate e clip che finiscono nelle stories.',
        icon: 'camera',
      },
      {
        title: 'Ottimo per aziende',
        description: 'Sfida leggera, zero imbarazzi: perfetto per team building.',
        icon: 'target',
      },
    ],
  },

  whyItWorksV2: {
    kicker: 'Perché funziona',
    title: 'Quando parte, si crea il cerchio. E l’evento sale di livello.',
    subtitle:
      'È un gioco semplice, ma l’effetto è da “show”: tifo, risate, turni veloci e pubblico sempre coinvolto. Con gestione professionale, senza caos.',
    trustBullets: [
      'Operatore in postazione: turni, fila e livelli gestiti con ritmo',
      'Setup pulito e sicurezza sotto controllo: area delimitata e briefing iniziale',
    ],
    features: [
      {
        badge: 'Feste',
        title: 'Scena forte, subito',
        description:
          'In pochi minuti si forma il cerchio: gente che guarda, tifa e si passa la sfida. L’energia si alza “da sola”.',
        icon: 'zap',
        size: 'lg' as const,
      },
      {
        badge: 'Sagre',
        title: 'Turni veloci, pubblico coinvolto',
        description:
          'Gestiamo la fila e teniamo il ritmo alto: niente pause lunghe, niente confusione. Più persone giocano, più persone guardano.',
        icon: 'users',
        size: 'sm' as const,
      },
      {
        badge: 'Social',
        title: 'Clip pronte per stories',
        description:
          'Cadute morbide, risate e momenti “da telefono”. Se vuoi, ti mandiamo qualche clip su WhatsApp.',
        icon: 'camera',
        note: 'Zero montaggi: momenti veri, subito condivisibili.',
        size: 'sm' as const,
      },
      {
        badge: 'Corporate',
        title: 'Perfetto per aziende',
        description:
          'Team building senza imbarazzi: regole chiare, livelli regolati e gestione professionale. Tutti si divertono, anche chi guarda.',
        icon: 'target',
        size: 'lg' as const,
      },
    ],
    mediaRail: [
      {
        label: 'Toro meccanico in azione',
        kind: 'image' as const,
        src: '/hero/WhatsApp%20Imagge%202026-01-25%20at%2017.41.24.jpeg',
      },
      {
        label: 'Toro meccanico: dettaglio',
        kind: 'image' as const,
        src: '/hero/WhatsApp%20Imagee%202026-01-25%20at%2017.41.23.jpeg',
      },
      {
        label: 'Last Man Standing: arena',
        kind: 'image' as const,
        src: '/hero/WhatsApp%20Image%202026-02-02%20at%2023.20.47.jpeg',
      },
    ],
    microCta: 'Controlla disponibilità in 60 sec',
    microCtaNote: 'Compila due dati e ti diciamo subito disponibilità e prezzo.',
  },

  // How it works
  howItWorks: {
    kicker: 'Come funziona',
    title: 'Cinque step. Tutto chiaro.',
    subtitle: 'Una volta confermato, gestiamo noi. Tu ti godi l’evento.',
    steps: [
      {
        title: 'Conferma',
        line: 'Data, città e durata: ti diciamo subito se c’è disponibilità.',
      },
      {
        title: 'Arrivo',
        line: 'Arriviamo in location con tutto il necessario.',
      },
      {
        title: 'Montaggio',
        line: 'Setup rapido e area in sicurezza, pronta per partire.',
      },
      {
        title: 'Gestione',
        line: 'Operatore in postazione: turni, livelli, sicurezza e ritmo.',
      },
      {
        title: 'Smontaggio',
        line: 'Smontiamo e lasciamo lo spazio come lo abbiamo trovato.',
      },
    ],
  },

  howItWorksV2: {
    kicker: 'Come funziona',
    title: 'Cinque step. Ritmo alto. Zero stress.',
    subtitle: 'Una volta confermato, gestiamo noi. Tu ti godi l’evento.',
    timelineProof: [
      { title: 'Montaggio 25–35 min', text: 'In base alla location' },
      { title: 'Operatore sempre presente', text: 'Turni, livelli e sicurezza' },
      { title: 'Gestione pulita', text: 'Area delimitata e briefing iniziale' },
    ],
    media: {
      label: 'Video: Last Man Standing in azione',
      src: '/hero/WhatsApp%20Video%202026-02-02%20at%2023.21.46.mp4',
      posterSrc: '/hero/WhatsApp%20Image%202026-02-02%20at%2023.20.47.jpeg',
    },
    microCta: 'Controlla disponibilità',
    steps: [
      {
        title: 'Conferma',
        line: 'Città + data: ti diciamo subito se è disponibile.',
        detail: 'Se ci indichi anche tipo evento e fascia oraria, ti diamo un prezzo più preciso (senza call obbligatoria).',
      },
      {
        title: 'Arrivo',
        line: 'Logistica chiara e puntualità in location.',
        detail: 'Ci coordiniamo con location/staff per accessi, tempi e posizionamento: niente improvvisazioni.',
      },
      {
        title: 'Setup',
        line: 'Area pronta e in sicurezza, in poco tempo.',
        detail: 'Montiamo e delimitiamo l’area, impostiamo i livelli in base al pubblico e facciamo briefing iniziale.',
      },
      {
        title: 'Gestione',
        line: 'Turni veloci, ritmo alto, sicurezza sotto controllo.',
        detail: 'Operatore in postazione per tutta la durata: fila, regole, livelli e stop sicurezza se necessario.',
      },
      {
        title: 'Smontaggio',
        line: 'Lasciamo lo spazio pulito, come lo abbiamo trovato.',
        detail: 'A fine attività smontiamo e ripristiniamo la zona in modo ordinato e veloce.',
      },
    ],
  },

  // Packages
  packages: {
    kicker: 'Pacchetti',
    title: 'Tre formule, stessa qualità FuturoEventi',
    subtitle: 'Scegli in base a durata e tipo di pubblico. Tutto il resto lo gestiamo noi.',
    highlightBadge: 'Consigliato',
    pricingNote:
      'Per le zone non incluse nei pacchetti, il prezzo viene concordato in base a distanza e logistica. Zero sorprese: te lo diciamo subito.',
    quoteCta: 'Vedi prezzo per la tua data',
    comparison: {
      title: 'Cosa cambia',
      rows: [
        { label: 'Durata', values: ['4 ore', '5 ore', 'Su richiesta'] },
        { label: 'Gestione turni / fila', values: ['Inclusa', 'Inclusa (ritmo alto)', 'Inclusa (continuativa)'] },
        { label: '2° operatore', values: ['Su richiesta', 'Su richiesta', 'Su richiesta'] },
        { label: 'Branding / extra', values: ['Su richiesta', 'Su richiesta', 'Su richiesta'] },
      ],
    },
    plans: [
      {
        name: 'Standard',
        priceFrom: '€400',
        durationLine: 'Ideale per feste private ed eventi di media durata (4 ore)',
        bullets: [
          'Trasporto incluso',
          'Montaggio e smontaggio inclusi',
          'Operatore dedicato',
          'Copertura: Milano, Monza, Como, Lecco, Bergamo, Brescia',
        ],
        highlight: false,
      },
      {
        name: 'Pro',
        priceFrom: '€600',
        durationLine: 'Per musica e competizione (5 ore)',
        bullets: [
          'Tutto ciò che è incluso nel pacchetto Standard',
          'Supervisione extra',
          'Impianto stereo con musica inclusa',
          'Organizzazione tornei con velocità selezionate',
          'Copertura: Milano, Monza, Lecco, Como, Bergamo, Brescia, Piacenza, Sondrio, Cremona',
        ],
        highlight: true,
      },
      {
        name: 'Corporate',
        priceFrom: 'Su richiesta',
        durationLine: 'Corporate e grandi eventi (preventivo dedicato)',
        bullets: [
          'Preventivo su misura in base a durata, location e logistica',
          'Opzione noleggio nazionale (tutte le regioni d’Italia)',
          'Soluzioni multigiornaliere con prezzo decrescente',
          'Contattaci per un preventivo personalizzato',
        ],
        highlight: false,
      },
    ],
    optionsTitle: 'Opzioni (su richiesta)',
    optionsSubtitle: 'Le aggiungiamo solo se servono davvero al tuo evento.',
    options: ['Ore extra', 'Branding/adesivi', '2° operatore', 'Generatore', 'Premi', 'Musica/MC'],
    optionsDetails: [
      { label: 'Ore extra', description: 'Estendiamo la durata in base al flusso pubblico.' },
      { label: 'Branding/adesivi', description: 'Personalizzazione semplice e pulita (no effetto carnevale).' },
      { label: '2° operatore', description: 'Utile con pubblico numeroso o turni intensi.' },
      { label: 'Generatore', description: 'Se non c’è corrente vicina, valutiamo soluzione dedicata.' },
      { label: 'Premi', description: 'Piccoli premi/medaglie per rendere la sfida più “gara”.' },
      { label: 'Musica/MC', description: 'Per dare ritmo e chiamata turni senza caos.' },
    ],
  },

  // Gallery
  gallery: {
    title: 'I Momenti Più Epici',
    subtitle: 'Guarda come rendiamo indimenticabile ogni evento',
    images: [
      { src: '/hero/WhatsApp%20Image%202026-01-25%20at%2017.41.23.jpeg', alt: 'toro-meccanico-noleggio-festa-milano' },
      { src: '/hero/WhatsApp%20Imagee%202026-01-25%20at%2017.41.23.jpeg', alt: 'toro-meccanico-professionale-evento-milano-dettaglio' },
      { src: '/hero/WhatsApp%20Imagge%202026-01-25%20at%2017.41.24.jpeg', alt: 'toro-meccanico-evento-aziendale-milano-pubblico' },
      { src: '/hero/WhatsApp%20Image%202026-02-02%20at%2023.20.47.jpeg', alt: 'last-man-standing-noleggio-lombardia-arena' },
      { src: '/hero/WhatsApp%20Image%202026-01-25%20at%2017.42.39.jpeg', alt: 'toro-meccanico-noleggio-sagra-lombardia' },
    ],
  },

  // Social Proof
  socialProof: {
    title: 'Recensioni e realtà servite',
    subtitle: 'Serietà, puntualità e gestione: è questo che viene ricordato.',
    reviews: [
      {
        name: 'Marco R.',
        role: 'Event Manager',
        company: 'Tech Company Milano',
        text: 'Servizio impeccabile! Il toro meccanico ha reso il nostro team building memorabile. Professionali e puntuali.',
        rating: 5,
      },
      {
        name: 'Laura S.',
        role: 'Privata',
        company: 'Festa di compleanno',
        text: 'Fantastico! Tutti gli ospiti si sono divertiti un mondo. Operatore gentile e molto professionale.',
        rating: 5,
      },
      {
        name: 'Paolo G.',
        role: 'Sindaco',
        company: 'Comune di Seriate',
        text: 'Per la nostra sagra è stato un successo incredibile. Sicurezza al primo posto, altamente raccomandati.',
        rating: 5,
      },
    ],
    clients: [
      { name: 'Tech Company Milano', logo: '/clients/tech-company.png' },
      { name: 'Banca Italiana', logo: '/clients/banca.png' },
      { name: 'Comune di Milano', logo: '/clients/comune-milano.png' },
      { name: 'Università Bicocca', logo: '/clients/universita.png' },
    ],
  },

  socialProofV2: {
    kicker: 'Recensioni & realtà servite',
    title: 'Affidabilità che si vede (e si sente in location).',
    subtitle: 'Puntualità, gestione pubblico e sicurezza: sono questi i dettagli che fanno un evento “serio”.',
    logosKicker: 'Alcune realtà (esempi)',
    logos: ['Azienda Tech', 'Comune / Pro Loco', 'Banca', 'Università', 'Location eventi', 'Agenzia eventi'],
    featured: [
      {
        name: 'Marco R.',
        role: 'Event Manager',
        company: 'Milano',
        text: '“Timing perfetto, gestione fila e turni impeccabile. Il pubblico era sempre coinvolto e la sicurezza si percepiva. Zero pensieri per noi.”',
      },
      {
        name: 'Paolo G.',
        role: 'Comune / Sagra',
        company: 'Bergamo',
        text: '“In piazza serve ordine: briefing chiaro, area gestita e ritmo alto. Successo vero, e nessuna criticità durante la serata.”',
      },
    ],
    note: 'Quando inseriamo le foto/video reali, aggiungiamo anche loghi e clip testimonianza.',
  },

  // Safety
  safety: {
    kicker: 'Sicurezza',
    title: 'Sicurezza e gestione professionale',
    subtitle: 'Non è “solo un gioco”: è un’attrazione. Per questo la gestiamo con procedure chiare.',
    checklistTitle: 'Cosa facciamo noi',
    checklist: [
      'Briefing iniziale e regole chiare prima di partire',
      'Area delimitata e controllo accessi durante l’utilizzo',
      'Livelli di difficoltà regolati in base al pubblico',
      'Supervisione costante dell’operatore',
      'Copertura assicurativa (dettagli su richiesta)',
      'Gestione meteo e stop in sicurezza se necessario',
    ],
    microCopy:
      'Prima di iniziare facciamo un briefing rapido, definiamo l’area e impostiamo i livelli. In caso di condizioni meteo non idonee, fermiamo l’attività e valutiamo insieme la soluzione migliore.',
    onSiteBox: {
      title: 'Cosa serve sul posto',
      items: [
        { label: 'Ingombro', value: 'Toro Meccanico: 4×4 m • Last Man Standing: 8×8 m (tondo)' },
        { label: 'Corrente', value: '220V (civile)' },
      ],
    },
    meteoTitle: 'Meteo e sicurezza',
    meteoText:
      'Se piove forte o c’è vento importante, la priorità è la sicurezza. Ti avvisiamo e decidiamo insieme: spostamento orario, cambio location o nuova data.',
  },

  safetyV2: {
    kicker: 'Sicurezza',
    title: 'Sicurezza e gestione: professionale, non improvvisata',
    subtitle: 'È un’attrazione vera: per questo lavoriamo con procedure chiare e operatore in postazione.',
    checklist: [
      'Briefing iniziale e regole chiare prima di partire',
      'Area delimitata e controllo accessi durante l’utilizzo',
      'Livelli regolati in base al pubblico e al contesto',
      'Supervisione costante dell’operatore',
      'Assicurazione inclusa (dettagli disponibili)',
    ],
    alwaysTitle: 'Cosa include sempre',
    alwaysBullets: ['Operatore', 'Area delimitata', 'Montaggio/smontaggio', 'Assicurazione inclusa (dettagli disponibili)'],
    onSite: {
      title: 'Cosa serve sul posto',
      items: [
        { label: 'Ingombro', value: 'Toro Meccanico: 4×4 m • Last Man Standing: 8×8 m (tondo)' },
        { label: 'Corrente', value: '220V (civile)' },
      ],
    },
    meteoTitle: 'Meteo e sicurezza',
    meteoText:
      'Se piove forte o c’è vento importante, la priorità è la sicurezza. Ti avvisiamo e decidiamo insieme: spostamento orario, cambio location o nuova data.',
    trustStrip: [
      { title: 'Briefing iniziale', text: 'Regole chiare e livelli impostati sul pubblico.' },
      { title: 'Area delimitata', text: 'Accessi controllati e spazio organizzato.' },
      { title: 'Stop sicurezza', text: 'Se serve fermiamo e valutiamo la soluzione migliore.' },
    ],
    microCta: 'Hai dubbi su spazio/corrente? Scrivimi su WhatsApp e lo verifichiamo in 1 minuto',
    microCtaNote: 'Se ci mandi una foto della location, ti diciamo subito se è adatta.',
  },

  // FAQ
  faq: {
    kicker: 'FAQ',
    title: 'Domande frequenti (risposte brevi, senza giri)',
    subtitle: 'Se qualcosa non è chiaro, ti rispondiamo al volo su WhatsApp.',
    whatsappCta: 'Se vuoi ti rispondo su WhatsApp',
    whatsappNote: 'Risposta veloce, senza call infinite.',
    searchPlaceholder: 'Cerca: spazio, corrente, meteo…',
    sideboxTitle: 'Ti risponde il team FuturoEventi',
    sideboxText: 'Scrivici due dettagli e ti diciamo subito disponibilità e cosa ha più senso per il tuo evento.',
    sideboxBullets: ['Risposta veloce', 'Preventivo chiaro', 'Zero call infinite'],
    sideboxCta: 'Scrivimi ora su WhatsApp',
    sideboxMeta: 'Di solito rispondiamo in 10–30 min',
    questions: [
      {
        question: 'Quanto spazio serve?',
        answer: 'Di solito basta 6×6 m (meglio 7×7 m). Se mi mandi una foto o una piantina su WhatsApp te lo confermo in 1 minuto.',
      },
      {
        question: 'Serve corrente elettrica?',
        answer: 'Sì, una presa 220V standard (16A) vicino alla postazione. Se non c’è, possiamo valutare un generatore (opzione).',
      },
      {
        question: 'Cosa succede con il meteo?',
        answer: 'Se le condizioni non sono sicure, fermiamo l’attività. Ci sentiamo prima dell’evento e decidiamo insieme la soluzione più sensata.',
      },
      {
        question: 'Età e peso: ci sono limiti?',
        answer: 'Sì, per sicurezza definiamo limiti min/max in base a pubblico e contesto. L’operatore gestisce i turni e i livelli durante l’attività.',
      },
      {
        question: 'Assicurazione: è inclusa?',
        answer: 'Sì, lavoriamo con copertura assicurativa (dettagli su richiesta). Se l’evento è pubblico/istituzionale, adattiamo la documentazione necessaria.',
      },
      {
        question: 'Trasporto: Milano/Como/Bergamo sono inclusi?',
        answer: 'Copriamo le zone indicate. La distanza incide sul prezzo, ma te lo diciamo subito in modo trasparente.',
      },
      {
        question: 'Quanto prima devo prenotare?',
        answer: 'Per i weekend, meglio muoversi presto. Se mi scrivi data+città ti dico subito disponibilità.',
      },
      {
        question: 'Fate fattura per aziende?',
        answer: 'Sì. Per aziende: tempi certi, fattura, coordinamento con location e HR/event manager.',
      },
      {
        question: 'Permessi per sagre/comuni: vi aiutate?',
        answer: 'Ti supportiamo con indicazioni e documentazione in base al contesto (pubblico/privato, location, accessi).',
      },
      {
        question: 'Quanto dura l’attività?',
        answer: 'Dipende dal pacchetto e dal flusso pubblico. Possiamo aggiungere ore extra se serve (opzione).',
      },
    ],
  },

  // Local
  local: {
    kicker: 'Zone servite',
    title: 'Copertura: Lombardia (e oltre, su richiesta)',
    subtitle: 'Milano, Monza, Como, Lecco, Bergamo, Brescia. Con il pacchetto Pro anche Piacenza, Sondrio e Cremona. Noleggio nazionale su richiesta.',
    quoteCta: 'Chiedi disponibilità e prezzo',
    whatsappCta: 'WhatsApp veloce',
    cards: [
      {
        city: 'Milano',
        title: 'Toro meccanico a Milano',
        line: 'Per eventi in città, area metropolitana e hinterland: logistica veloce e gestione pulita, senza stress per la location. Noleggio attrazioni in provincia di Milano (anche Monza e hinterland) su richiesta.',
        tags: ['Milano', 'Area metropolitana', 'Hinterland (Monza, Rho, Sesto…)'],
      },
      {
        city: 'Como',
        title: 'Toro meccanico a Como',
        line: 'Ideale per ville e location sul lago: arriviamo con tempi chiari e ci coordiniamo con lo staff per un setup ordinato. Affitto attrazioni e gonfiabili zona Lago di Como (Como, Cernobbio, Moltrasio) su richiesta.',
        tags: ['Como', 'Cernobbio', 'Lago di Como'],
      },
      {
        city: 'Bergamo',
        title: 'Toro meccanico a Bergamo',
        line: 'Perfetto per sagre, piazze ed eventi aziendali: turni scorrevoli, ritmo alto e sicurezza sotto controllo. Noleggio attrazioni per eventi in provincia di Bergamo (Dalmine, Seriate) con operatore incluso.',
        tags: ['Bergamo', 'Dalmine', 'Seriate'],
      },
    ],
  },

  // Final CTA
  finalCta: {
    title: 'Vuoi sapere se è disponibile per la tua data?',
    subtitle: 'Scrivici città + data + tipo evento. Ti rispondiamo con disponibilità e prezzo reale.',
    cta: {
      whatsapp: 'Scrivi su WhatsApp',
      quote: 'Preventivo in 60 secondi',
    },
    softCountdown: 'Weekend pieno? Chiedi disponibilità adesso.',
  },

  // Form
  form: {
    kicker: 'Controllo disponibilità',
    title: 'Controllo disponibilità in 60 secondi',
    subtitle: 'Niente call obbligatoria: ti rispondiamo con disponibilità e prezzo (di solito entro 10–30 min).',
    helperTitle: 'Preferisci WhatsApp?',
    helperText: 'Se ci scrivi città + data + tipo evento, ti rispondiamo con disponibilità e prezzo chiaro.',
    whatsappCta: 'Scrivi ora su WhatsApp',
    quickTags: ['Milano / Como / Bergamo', 'Operatore incluso', 'Setup rapido'],
    cardTitle: 'Richiesta rapida',
    cardSubtitle: 'Niente call obbligatorie. Ti ricontattiamo noi.',
    fields: {
      name: 'Nome',
      phone: 'Telefono',
      city: 'Città',
      eventType: 'Tipo evento',
      date: 'Data evento',
      notes: 'Note (facoltative)',
    },
    placeholders: {
      name: 'Es. Simone',
      phone: 'Es. 333 123 4567',
      eventType: 'Seleziona tipo evento',
      notes: 'Es. location, numero persone, fascia oraria…',
    },
    submit: 'Invia richiesta',
    submitting: 'Invio…',
    successTitle: 'Ricevuto!',
    successText: 'Ti rispondiamo con disponibilità e prezzo: di solito entro 10–30 min.',
    errorTitle: 'Controlla i campi',
    errorText: 'Nome, telefono, data e tipo evento sono necessari.',
    privacyLine: 'Useremo questi dati solo per ricontattarti. Nessuno spam.',
    assurancePills: [
      { title: 'Trasparenza', text: 'Prezzo chiaro: distanza, durata e giorno incidono.' },
      { title: 'Operatore incluso', text: 'Gestione pubblico e sicurezza durante l’uso.' },
      { title: 'Tempi rapidi', text: 'Montaggio/smontaggio 25–35 min (in base alla location).' },
    ],
  },

  // Contact
  contact: {
    phone: '+39 350 126 3577',
    whatsapp: '+39 350 126 3577',
    email: 'info@futuroeventi.it',
    address: 'Via Milano, 123 - 20121 Milano (MI)',
  },

  // WhatsApp Messages
  whatsappMessage: (params: {
    city: string
    date?: string
    eventType?: string
    packageName?: string
  }) => {
    const pieces: string[] = []
    if (params.city) pieces.push(`Città: ${params.city}`)
    if (params.date) pieces.push(`Data: ${params.date}`)
    if (params.eventType) pieces.push(`Tipo evento: ${params.eventType}`)
    if (params.packageName) pieces.push(`Pacchetto: ${params.packageName}`)

    const details = pieces.length ? `\n\n${pieces.join('\n')}` : ''
    return `Ciao FuturoEventi, vorrei il Toro Meccanico Last Man Standing.${details}\n\nMi dite disponibilità e prezzo?`
  },

  // Tracking
  tracking: {
    events: {
      whatsapp_click: 'cta_whatsapp_click',
      call_click: 'cta_call_click',
      form_submit: 'form_submit',
      gallery_view: 'gallery_view',
      faq_open: 'faq_open',
    },
  },
};
