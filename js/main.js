// JavaScript per Pizzeria Il Semaforo - Festa dell'Unità

// ============================================
// PAGINA MENÙ NORMALE (SOSPESO)
// ============================================

const menuNormalePage = `
  <style>
    .menu-sospeso-wrapper { position: relative; }
    .menu-sospeso-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(5px);
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
    .sospeso-badge {
      background: linear-gradient(135deg, #c62828, #8e0000);
      color: white;
      padding: 20px 40px;
      border-radius: 60px;
      font-size: 1.3rem;
      font-weight: bold;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      animation: pulseSospeso 1.5s infinite;
    }
    .sospeso-badge i { font-size: 1.8rem; margin-right: 12px; }
    .sospeso-badge small { display: block; font-size: 0.85rem; opacity: 0.9; margin-top: 8px; }
    @keyframes pulseSospeso {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  </style>
  <section class="menu-section" style="padding-top: 60px;">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-subtitle">Il Nostro Menù</span>
        <h2 class="section-title">Menù Regolare</h2>
        <div style="width: 60px; height: 3px; background: #ccc; margin: 10px auto;"></div>
        <p style="color: #c62828;"><i class="fas fa-calendar-alt me-2"></i>Dall'11 al 21 giugno celebriamo la Festa dell'Unità con un menù speciale</p>
      </div>
      <div class="menu-sospeso-wrapper position-relative">
        <div class="menu-sospeso-overlay">
          <div class="sospeso-badge"><i class="fas fa-pause-circle"></i> MENÙ TEMPORANEAMENTE SOSPESO<br><small>Scopri il Menù Speciale Festa dell'Unità!</small></div>
        </div>
        <div class="row" style="opacity: 0.3; pointer-events: none;">
          <div class="col-lg-6">
            <div class="menu-category-card"><h3><i class="fas fa-utensils me-2 text-primary"></i>Antipasti</h3><div class="menu-item"><h4>Antipasto della Casa</h4><p>Selezione di salumi toscani, schiacciata calda, verdure sott'olio</p></div></div>
            <div class="menu-category-card"><h3><i class="fas fa-pizza-slice me-2 text-primary"></i>Pizze</h3><div class="menu-item"><h4>🍕 GIRO PIZZA NO STOP 🍕</h4><p>Un viaggio attraverso i sapori della tradizione</p></div><div class="menu-badge"><span class="badge bg-primary">A volontà</span></div></div>
          </div>
          <div class="col-lg-6">
            <div class="menu-category-card"><h3><i class="fas fa-cake me-2 text-primary"></i>Dolci</h3><div class="menu-item"><div class="d-flex justify-content-between"><h4>Tiramisù Classico</h4><span class="menu-price">€ 3,00</span></div></div><div class="menu-item"><div class="d-flex justify-content-between"><h4>Panna Cotta</h4><span class="menu-price">€ 3,00</span></div></div></div>
            <div class="menu-category-card"><h3><i class="fas fa-wine-bottle me-2 text-primary"></i>Bevande</h3><div class="menu-item"><div class="d-flex justify-content-between"><h4>Bibite (33cl)</h4><span class="menu-price">Incluse</span></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// ============================================
// PAGINA MENÙ FESTA DELL'UNITÀ (CARD STESSA ALTEZZA)
// ============================================

const menuFestaPage = `
  <style>
    .festa-header { text-align: center; margin-bottom: 50px; }
    .festa-title { font-size: 3rem; font-weight: 800; font-family: 'Playfair Display', serif; margin-bottom: 15px; }
    .festa-title span { color: #cc0000; }
    .festa-subtitle { max-width: 650px; margin: 0 auto 20px; color: #666; font-size: 1rem; }
    .festa-divider { width: 100px; height: 3px; background: linear-gradient(90deg, #cc0000, #ff8c00, #009900); margin: 0 auto; border-radius: 2px; }
    .festa-category { margin-bottom: 45px; }
    .festa-category-title { background: linear-gradient(135deg, #2c2c2c, #1a1a1a); border-radius: 12px; padding: 10px 20px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
    .festa-category-title i { color: #cc0000; font-size: 1.5rem; }
    .festa-category-title h3 { color: white; margin: 0; font-size: 1.3rem; font-weight: 600; }
    
    /* CARD STESSA ALTEZZA - FLEXBOX PERFETTO */
    .festa-row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    .festa-col {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 10px;
      display: flex;
    }
    .festa-card {
      background: white;
      border-radius: 14px;
      padding: 14px 18px;
      margin-bottom: 15px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.05);
      transition: all 0.2s ease;
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 95px;
    }
    .festa-card:hover { transform: translateX(5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    .festa-card-header { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 5px; }
    .festa-card-header h4 { font-size: 1rem; font-weight: 700; margin: 0; color: #2d2d2d; }
    .festa-price { font-size: 1rem; font-weight: 800; color: #cc0000; white-space: nowrap; margin-left: 10px; }
    .festa-desc { color: #777; font-size: 0.75rem; margin: 4px 0 0 0; line-height: 1.3; }
    .festa-badge-small { display: inline-block; background: linear-gradient(135deg, #cc0000, #009900); color: white; font-size: 0.6rem; padding: 2px 8px; border-radius: 20px; margin-top: 6px; align-self: flex-start; }
    .festa-card-special { background: linear-gradient(135deg, #fff8f0, #fff0e0); }
    
    /* COLONNE A 3 PER CONTORNI */
    .festa-col-3 {
      flex: 0 0 33.333%;
      max-width: 33.333%;
      padding: 0 10px;
      display: flex;
    }
    
    @media (max-width: 768px) {
      .festa-title { font-size: 2rem; }
      .festa-category-title h3 { font-size: 1rem; }
      .festa-col { flex: 0 0 100%; max-width: 100%; }
      .festa-col-3 { flex: 0 0 100%; max-width: 100%; }
      .festa-card { padding: 10px 15px; min-height: auto; }
      .festa-card-header h4 { font-size: 0.9rem; }
    }
  </style>
  <section style="padding: 60px 0; background: linear-gradient(135deg, #fffaf5, #fef5e8);">
    <div class="container">
      <div class="festa-header">
        <h2 class="festa-title">Festa dell'<span>Unità</span></h2>
        <p class="festa-subtitle">Piatti tradizionali toscani preparati con passione per celebrare insieme questa festa speciale</p>
        <div class="festa-divider"></div>
      </div>

      <!-- ANTIPASTI -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-utensils"></i><h3>Antipasti della Festa</h3></div>
        <div class="festa-row">
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Antipasto Toscano</h4><span class="festa-price">€ 8,00</span></div><p class="festa-desc">Salame, Finocchiona, Crudo, Pecorino, Crostino al Pomodoro</p><span class="festa-badge-small">Specialità</span></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Polenta al Forno con Funghi</h4><span class="festa-price">€ 4,50</span></div><p class="festa-desc">Funghi misti di stagione</p></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Crostini Toscani</h4><span class="festa-price">€ 5,00</span></div><p class="festa-desc">Fegatini, Salsiccia e Stracchini, Lardo di Colonnata</p></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Prosciutto e Melone</h4><span class="festa-price">€ 6,50</span></div><p class="festa-desc">Prosciutto stagionato</p></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Polenta Fritta</h4><span class="festa-price">€ 3,50</span></div></div></div>
        </div>
      </div>

      <!-- PRIMI -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-pasta"></i><h3>Primi Piatti della Festa</h3></div>
        <div class="festa-row">
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Penne alla Pecora</h4><span class="festa-price">€ 8,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Tortiglioni alla Carrettiera</h4><span class="festa-price">€ 4,50</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Tagliatelle al Ragù</h4><span class="festa-price">€ 5,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Tortelli Ricotta e Spinaci</h4><span class="festa-price">€ 6,50</span></div><p class="festa-desc">Burro e Salvia</p></div></div>
        </div>
      </div>

      <!-- SECONDI -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-grill"></i><h3>Secondi Piatti della Festa</h3></div>
        <div class="festa-row">
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Grigliata Mista</h4><span class="festa-price">€ 15,00</span></div><p class="festa-desc">Pollo, Rosticciana, Salsiccia</p><span class="festa-badge-small">Specialità</span></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Galletto al Mattone</h4><span class="festa-price">€ 12,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Rosticciana</h4><span class="festa-price">€ 10,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Pecora in Umido</h4><span class="festa-price">€ 15,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Salsiccia alla Griglia</h4><span class="festa-price">€ 9,00</span></div></div></div>
        </div>
      </div>

      <!-- CONTORNI (3 per riga) -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-leaf"></i><h3>Contorni</h3></div>
        <div class="festa-row">
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Fagioli all'Olio</h4><span class="festa-price">€ 4,00</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Patate Arrosto</h4><span class="festa-price">€ 4,00</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Insalata Mista</h4><span class="festa-price">€ 4,00</span></div></div></div>
        </div>
      </div>

      <!-- FRITTURA -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-fish"></i><h3>Frittura di Mare</h3></div>
        <div class="festa-row">
          <div class="festa-col" style="flex: 0 0 100%; max-width: 100%;"><div class="festa-card festa-card-special"><div class="festa-card-header"><h4>Calamari e Gamberi con verdure e patate fritte</h4><span class="festa-price">€ 20,00</span></div><p class="festa-desc">Servita solo il venerdì sera su prenotazione</p><span class="festa-badge-small">Prenotazione obbligatoria</span></div></div>
        </div>
      </div>

      <!-- BEVANDE -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-wine-bottle"></i><h3>Bevande</h3></div>
        <div class="festa-row">
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Acqua Naturale/Gassata (1 Lt)</h4><span class="festa-price">€ 2,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Acqua Naturale/Gassata (0.5 Lt)</h4><span class="festa-price">€ 1,30</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Lattine Coca Cola / Fanta</h4><span class="festa-price">€ 2,50</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Lattine Thè Pesca/Limone</h4><span class="festa-price">€ 3,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Birra Nazionale Spina Piccola</h4><span class="festa-price">€ 3,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Birra Nazionale Spina Media</h4><span class="festa-price">€ 5,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Vino Rosso (Bottiglia 0.75)</h4><span class="festa-price">€ 7,00</span></div></div></div>
          <div class="festa-col"><div class="festa-card"><div class="festa-card-header"><h4>Vino Bianco Frizzante (Brocca 0.50)</h4><span class="festa-price">€ 6,00</span></div></div></div>
        </div>
      </div>

      <!-- DOLCI -->
      <div class="festa-category">
        <div class="festa-category-title"><i class="fas fa-ice-cream"></i><h3>Dolci & Caffè</h3></div>
        <div class="festa-row">
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Tiramisù Classico</h4><span class="festa-price">€ 3,00</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Cocomero</h4><span class="festa-price">€ 2,50</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Macedonia di Frutta</h4><span class="festa-price">€ 3,50</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Macedonia con Gelato</h4><span class="festa-price">€ 5,50</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Macedonia con Panna</h4><span class="festa-price">€ 4,50</span></div></div></div>
          <div class="festa-col-3"><div class="festa-card"><div class="festa-card-header"><h4>Caffè Espresso</h4><span class="festa-price">€ 2,00</span></div></div></div>
          <div class="festa-col" style="flex: 0 0 100%; max-width: 100%;"><div class="festa-card"><div class="festa-card-header"><h4>Coperto e Pane</h4><span class="festa-price">€ 2,00</span></div></div></div>
        </div>
      </div>
    </div>
  </section>
`;
// ============================================
// PAGINE SPECIALI
// ============================================

const specialPages = {
    about: `
        <section class="about-section" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-image">
                            <img src="images/pizzeria.jpg" alt="Interno del locale" class="img-fluid rounded-4 shadow">
                            <div class="about-years">
                                <span class="years-number">2024</span>
                                <span class="years-text">Anno di apertura</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <span class="section-subtitle">La Nostra Storia</span>
                            <h2 class="section-title">Un Sogno di Famiglia Diventato Realtà</h2>
                            <p class="about-text">Circa un anno fa, la nostra trattoria è nata da un sogno condiviso da una famiglia molto unita. Provenivamo da un altro settore, ma la nostra passione per la cucina e l'amore per la tradizione ci hanno spinti a intraprendere questa nuova avventura.</p>
                            <p class="about-text">Non è stato un percorso facile; ci sono stati sacrifici, lunghe giornate di lavoro e momenti di grande impegno da parte di tutti noi, dai ragazzi ai cuochi. Tuttavia, con determinazione e tanto lavoro, siamo riusciti a trasformare il nostro sogno in realtà.</p>
                            <div class="about-stats">
                                <div class="stat-item"><span class="stat-number">15+</span><span class="stat-label">Piatti Tipici</span></div>
                                <div class="stat-item"><span class="stat-number">100%</span><span class="stat-label">Familiare</span></div>
                                <div class="stat-item"><span class="stat-number">15€</span><span class="stat-label">Offerta Festa</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="info-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-clock"></i></div><h3>Orari Festa</h3><p>11-21 Giugno</p><p class="info-highlight">19:00 - 01:00</p></div></div>
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-euro-sign"></i></div><h3>Menù Completo</h3><p>Antipasti, Primi, Secondi</p><p class="info-highlight">Da €4,50</p><small>Piatti della tradizione</small></div></div>
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-music"></i></div><h3>Musica dal Vivo</h3><p>Venerdì e Domenica</p><p class="info-highlight">Karaoke</p></div></div>
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-phone-alt"></i></div><h3>Prenotazioni</h3><p>Chiama o WhatsApp</p><p class="info-highlight">340 304 6310</p></div></div>
                </div>
            </div>
        </section>
    `,
    gallery: `
        <section class="gallery-section" id="gallery">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-subtitle">I Nostri Scatti</span>
                    <h2 class="section-title">Galleria</h2>
                    <p class="section-description">Momenti di convivialità e sapori nel nostro locale durante la Festa dell'Unità</p>
                </div>
                <div class="gallery-grid">
                    <div class="gallery-item"><img src="images/1.jpeg" alt="Foto 1" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/2.jpeg" alt="Foto 2" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/3.jpg" alt="Foto 3" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/4.jpg" alt="Foto 4" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/5.jpg" alt="Foto 5" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/6.jpg" alt="Foto 6" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/7.jpeg" alt="Foto 7" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/8.jpg" alt="Foto 8" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/9.jpg" alt="Foto 9" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/10.jpg" alt="Foto 10" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/11.jpeg" alt="Foto 11" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/12.jpeg" alt="Foto 12" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/13.jpeg" alt="Foto 13" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/14.jpeg" alt="Foto 14" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/15.jpeg" alt="Foto 15" loading="lazy"></div>
                    <div class="gallery-item"><img src="images/16.jpeg" alt="Foto 16" loading="lazy"></div>
                </div>
            </div>
        </section>
    `
};

// ============================================
// VARIABILI GLOBALI
// ============================================

let originalHeroHTML = '';
let originalHomeSectionsHTML = '';

const FESTA_INIZIO = new Date(2026, 5, 11, 19, 0, 0);
const FESTA_FINE = new Date(2026, 5, 21, 1, 0, 0);

// ============================================
// COUNTDOWN CON SECONDI
// ============================================

function updateSmartCountdown() {
    const now = new Date();
    const displayElement = document.getElementById('countdownDisplay');
    if (!displayElement) return;
    
    if (now < FESTA_INIZIO) {
        const diff = FESTA_INIZIO - now;
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((diff % (1000*60)) / 1000);
        displayElement.innerHTML = `⏳ Inizia tra: ${days}g ${hours}h ${minutes}m ${seconds}s`;
    }
    else if (now >= FESTA_INIZIO && now < FESTA_FINE) {
        const diff = FESTA_FINE - now;
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((diff % (1000*60)) / 1000);
        displayElement.innerHTML = `🎉 FESTA IN CORSO! Termina tra: ${days}g ${hours}h ${minutes}m ${seconds}s 🎉`;
    }
    else {
        displayElement.innerHTML = `🏁 Festa terminata! Grazie! 🎊`;
    }
}

// ============================================
// NAVIGAZIONE
// ============================================

function ricostruisciHome() {
    const mainContent = document.getElementById('main-content');
    if (mainContent && originalHeroHTML && originalHomeSectionsHTML) {
        mainContent.innerHTML = originalHeroHTML + originalHomeSectionsHTML;
    }
}

function loadPage(pageId) {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('[data-page]');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    if (pageId === 'home') {
        ricostruisciHome();
    } 
    else if (pageId === 'menu') {
        mainContent.innerHTML = menuNormalePage;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (pageId === 'menu-festa') {
        mainContent.innerHTML = menuFestaPage;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (pageId === 'reviews') {
        ricostruisciHome();
        setTimeout(() => { const section = document.getElementById('reviews'); if(section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }
    else if (pageId === 'contact') {
        ricostruisciHome();
        setTimeout(() => { const section = document.getElementById('contact'); if(section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }
    else if (specialPages[pageId]) {
        mainContent.innerHTML = specialPages[pageId];
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) navbarCollapse.classList.remove('show');
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const homeSections = document.getElementById('home-sections');
    const navLinks = document.querySelectorAll('[data-page]');
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) originalHeroHTML = heroSection.outerHTML;
    if (homeSections) originalHomeSectionsHTML = homeSections.innerHTML;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage(this.getAttribute('data-page'));
        });
    });
    
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage('home');
        });
    }
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
    
    updateSmartCountdown();
    setInterval(updateSmartCountdown, 1000);
});

// ============================================
// MODALE
// ============================================

function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) { modal.classList.add('show'); document.body.style.overflow = 'hidden'; }
}
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) { modal.classList.remove('show'); document.body.style.overflow = 'auto'; }
}
window.addEventListener('click', function(e) { if (e.target === document.getElementById('bookingModal')) closeBookingModal(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeBookingModal(); });
