// JavaScript per Pizzeria Il Semaforo - Festa dell'Unità

// ============================================
// PAGINE MENÙ
// ============================================

// Pagina MENÙ NORMALE (Giro Pizza NON DISPONIBILE)
const menuNormalePage = `
  <section class="menu-section" id="menu-page" style="padding-top: 60px;">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-subtitle">Il Nostro Menù</span>
        <h2 class="section-title">Menù <span style="text-decoration: line-through;">Originale</span></h2>
        <p class="section-description" style="color: #c62828; font-weight: bold;">
          <i class="fas fa-info-circle"></i> Durante la Festa dell'Unità (11-21 Giugno) viene servito esclusivamente il Menù Speciale Festa.
        </p>
      </div>
      
      <div class="row">
        <div class="col-lg-6">
          <div class="menu-category-card non-disponibile">
            <h3><i class="fas fa-utensils me-2 text-primary"></i>Antipasti</h3>
            <div class="menu-item">
              <h4>Antipasto della Casa</h4>
              <p>Selezione di salumi toscani, schiacciata calda, verdure sott'olio</p>
            </div>
          </div>
          
          <div class="menu-category-card non-disponibile">
            <h3><i class="fas fa-pizza-slice me-2 text-primary"></i>Pizze</h3>
            <div class="menu-item">
              <h4>🍕 GIRO PIZZA NO STOP 🍕</h4>
              <p>Un viaggio attraverso i sapori della tradizione. Richiedi i gusti e crea la tua selezione</p>
            </div>
            <div class="menu-badge">
              <span class="badge bg-primary">A volontà</span>
            </div>
            <div class="alert alert-warning mt-3 text-center" style="background: #fff3cd; border-radius: 10px; padding: 8px;">
              <i class="fas fa-ban text-danger me-1"></i> 
              <strong>NON DISPONIBILE DURANTE LA FESTA DELL'UNITÀ</strong>
              <i class="fas fa-ban text-danger ms-1"></i>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="menu-category-card non-disponibile">
            <h3><i class="fas fa-cake me-2 text-primary"></i>Dolci</h3>
            <div class="menu-item"><div class="d-flex justify-content-between align-items-center"><h4>Tiramisù Classico</h4><span class="menu-price">€ 3,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between align-items-center"><h4>Panna Cotta ai Frutti di Bosco</h4><span class="menu-price">€ 3,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between align-items-center"><h4>Torta della Nonna</h4><span class="menu-price">€ 3,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between align-items-center"><h4>Sorbetto al Limone</h4><span class="menu-price">€ 3,00</span></div></div>
          </div>
          
          <div class="menu-category-card non-disponibile">
            <h3><i class="fas fa-wine-bottle me-2 text-primary"></i>Bevande</h3>
            <div class="menu-item"><div class="d-flex justify-content-between align-items-center"><h4>Bibite (33cl)</h4><span class="menu-price">Incluse*</span></div><p class="text-muted small">Coca-Cola, Fanta, Sprite, Acqua</p></div>
            <p class="menu-note mt-3"><i class="fas fa-info-circle text-primary me-1"></i>*Nel menù fisso è inclusa 1 bibita piccola a persona</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Pagina MENÙ SPECIALE FESTA DELL'UNITÀ
const menuFestaPage = `
  <section class="menu-section" id="menu-festa-page" style="padding-top: 60px; background: linear-gradient(135deg, #fff8f0, #fff0e0);">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-subtitle" style="color: #cc0000;">✨ Menù Esclusivo ✨</span>
        <h2 class="section-title">Menù Speciale <span style="color: #cc0000;">Festa dell'Unità</span></h2>
        <p class="section-description">Piatti tradizionali toscani preparati con passione per celebrare insieme questa festa!</p>
        <div style="width: 80px; height: 3px; background: linear-gradient(90deg, #cc0000, #009900); margin: 20px auto;"></div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="menu-category-card menu-speciale-card" style="border-left: 5px solid #cc0000;">
            <h3><i class="fas fa-utensils text-primary me-2"></i>Antipasti della Festa</h3>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Antipasto Toscano <span class="badge badge-festa">Specialità</span></h4><span class="menu-price">€ 8,00</span></div><p class="text-muted small">Salame, Finocchiona, Crudo, Pecorino, Crostino al Pomodoro</p></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Polenta al Forno con Funghi</h4><span class="menu-price">€ 4,50</span></div><p class="text-muted small">Funghi misti di stagione</p></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Crostini Toscani</h4><span class="menu-price">€ 5,00</span></div><p class="text-muted small">Fegatini, Salsiccia e Stracchini, Lardo di Colonnata</p></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Prosciutto e Melone</h4><span class="menu-price">€ 6,50</span></div><p class="text-muted small">Prosciutto stagionato</p></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Polenta Fritta</h4><span class="menu-price">€ 3,50</span></div></div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="menu-category-card menu-speciale-card" style="border-left: 5px solid #009900;">
            <h3><i class="fas fa-pasta text-primary me-2"></i>Primi della Festa</h3>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Penne alla Pecora</h4><span class="menu-price">€ 8,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Tortiglioni alla Carrettiera</h4><span class="menu-price">€ 4,50</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Tagliatelle al Ragù</h4><span class="menu-price">€ 5,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Tortelli Ricotta e Spinaci</h4><span class="menu-price">€ 6,50</span></div><p class="text-muted small">Burro e Salvia</p></div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="menu-category-card menu-speciale-card" style="border-left: 5px solid #cc0000;">
            <h3><i class="fas fa-grill text-primary me-2"></i>Secondi della Festa</h3>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Grigliata Mista <span class="badge badge-festa">Specialità</span></h4><span class="menu-price">€ 15,00</span></div><p class="text-muted small">Pollo, Rosticciana, Salsiccia</p></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Galletto al Mattone</h4><span class="menu-price">€ 12,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Rosticciana</h4><span class="menu-price">€ 10,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Pecora in Umido</h4><span class="menu-price">€ 15,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Salsiccia alla Griglia</h4><span class="menu-price">€ 9,00</span></div></div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="menu-category-card menu-speciale-card" style="border-left: 5px solid #009900;">
            <h3><i class="fas fa-leaf text-primary me-2"></i>Contorni</h3>
            <div class="row">
              <div class="col-4"><div class="menu-item"><h4>Fagioli all'Olio</h4><span class="menu-price">€ 4,00</span></div></div>
              <div class="col-4"><div class="menu-item"><h4>Patate Arrosto</h4><span class="menu-price">€ 4,00</span></div></div>
              <div class="col-4"><div class="menu-item"><h4>Insalata Mista</h4><span class="menu-price">€ 4,00</span></div></div>
            </div>
          </div>

          <div class="menu-category-card menu-speciale-card" style="background: linear-gradient(135deg, #fff, #fef5f0);">
            <h3><i class="fas fa-fish text-primary me-2"></i>Frittura di Mare</h3>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Calamari e Gamberi con verdure e patate fritte <span class="badge bg-warning text-dark">Venerdì su prenotazione</span></h4><span class="menu-price">€ 20,00</span></div></div>
          </div>

          <div class="menu-category-card menu-speciale-card">
            <h3><i class="fas fa-wine-bottle text-primary me-2"></i>Bevande</h3>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Acqua Naturale/Gassata (1 Lt)</h4><span class="menu-price">€ 2,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Acqua Naturale/Gassata (0.5 Lt)</h4><span class="menu-price">€ 1,30</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Lattine Coca Cola / Fanta (0.33)</h4><span class="menu-price">€ 2,50</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Birra Nazionale Spina Piccola (0.20)</h4><span class="menu-price">€ 3,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Birra Nazionale Spina Media (0.40)</h4><span class="menu-price">€ 5,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Vino Rosso (Bottiglia 0.75)</h4><span class="menu-price">€ 7,00</span></div></div>
          </div>

          <div class="menu-category-card menu-speciale-card">
            <h3><i class="fas fa-ice-cream text-primary me-2"></i>Dolci & Caffè</h3>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Tiramisù Classico</h4><span class="menu-price">€ 3,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Cocomero</h4><span class="menu-price">€ 2,50</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Macedonia di Frutta</h4><span class="menu-price">€ 3,50</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Caffè Espresso</h4><span class="menu-price">€ 2,00</span></div></div>
            <div class="menu-item"><div class="d-flex justify-content-between flex-wrap"><h4>Coperto e Pane</h4><span class="menu-price">€ 2,00</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// ============================================
// PAGINE SPECIALI (Chi Siamo e Galleria)
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

// Date della festa
const FESTA_INIZIO = new Date(2026, 5, 11, 19, 0, 0);
const FESTA_FINE = new Date(2026, 5, 21, 1, 0, 0);

// ============================================
// COUNTDOWN INTELLIGENTE
// ============================================

function updateSmartCountdown() {
    const now = new Date();
    const countdownElement = document.getElementById('countdownDisplay');
    if (!countdownElement) return;
    
    if (now < FESTA_INIZIO) {
        const diff = FESTA_INIZIO - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        countdownElement.innerHTML = `⏳ Inizia tra: ${days}g ${hours}h ${minutes}m`;
    }
    else if (now >= FESTA_INIZIO && now < FESTA_FINE) {
        const diff = FESTA_FINE - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        countdownElement.innerHTML = `🎉 FESTA IN CORSO! Termina tra: ${days}g ${hours}h ${minutes}m 🎉`;
    }
    else {
        countdownElement.innerHTML = `🏁 Festa terminata! Grazie! 🎊`;
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
    
    // Aggiorna classe active
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
        setTimeout(() => {
            const section = document.getElementById('reviews');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    else if (pageId === 'contact') {
        ricostruisciHome();
        setTimeout(() => {
            const section = document.getElementById('contact');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    else if (specialPages[pageId]) {
        mainContent.innerHTML = specialPages[pageId];
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Chiudi menu mobile
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) navbarCollapse.classList.remove('show');
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const homeSections = document.getElementById('home-sections');
    const navLinks = document.querySelectorAll('[data-page]');
    
    // SALVA l'HTML originale
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) originalHeroHTML = heroSection.outerHTML;
    if (homeSections) originalHomeSectionsHTML = homeSections.innerHTML;
    
    // Aggiungi event listeners a tutti i link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            loadPage(pageId);
        });
    });
    
    // Home link
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage('home');
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Avvia countdown (aggiorna ogni minuto)
    updateSmartCountdown();
    setInterval(updateSmartCountdown, 60000);
});

// ============================================
// MODALE PRENOTAZIONE
// ============================================

function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('click', function(e) {
    const modal = document.getElementById('bookingModal');
    if (e.target === modal) closeBookingModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeBookingModal();
});
