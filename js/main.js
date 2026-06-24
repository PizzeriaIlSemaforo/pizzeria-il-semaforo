// JavaScript per Pizzeria Il Semaforo

// ============================================
// PAGINA MENÙ
// ============================================

const menuNormalePage = `
  <section class="menu-section" style="padding-top: 60px;">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-subtitle">Il Nostro Menù</span>
        <h2 class="section-title">Menù</h2>
        <div style="width: 60px; height: 3px; background: #ccc; margin: 10px auto;"></div>
        <p style="color: #666;">Piatti della tradizione toscana preparati con passione</p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="menu-category-card">
            <h3><i class="fas fa-utensils me-2 text-primary"></i>Antipasto</h3>
            <div class="menu-item">
              <h4>Antipasto della Casa</h4>
              <p>Selezione di salumi toscani, schiacciata calda, verdure sott'olio</p>
            </div>
          </div>
          <div class="menu-category-card">
            <h3><i class="fas fa-pizza-slice me-2 text-primary"></i>Giro Pizza</h3>
            <div class="menu-item">
              <h4>🍕GIRO PIZZA NO STOP</h4>
              <p>Un viaggio attraverso i sapori della tradizione</p>
              <span class="badge bg-primary mt-2">A volontà</span>
            </div>
          </div>
          <div class="menu-category-card">
            <h3><i class="fas fa-wine-bottle me-2 text-primary"></i>Bevuta</h3>
            <div class="menu-item">
              <h4>Bibite (33cl)</h4>
              <p>Incluse</p>
            </div>
          </div>
          <div class="menu-category-card" style="background: linear-gradient(135deg, #fff8f0, #fff0e0); border: 2px solid var(--primary);">
            <h3><i class="fas fa-tag me-2 text-primary"></i>Offerta Speciale</h3>
            <div class="menu-item text-center">
              <h4 style="font-size: 1.8rem; color: var(--primary);">Antipasto + Giro Pizza + Bevuta</h4>
              <p style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">€ 20,00</p>
              <p style="color: #666;">a persona</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="menu-category-card">
            <h3><i class="fas fa-pasta me-2 text-primary"></i>Primi del Giorno</h3>
            <div class="menu-item">
              <p style="color: #666; font-style: italic;">Ogni giorno lo chef propone primi piatti preparati con ingredienti freschi di stagione.</p>
              <p style="color: var(--primary); font-weight: 600;">Chiedi al personale le specialità del giorno!</p>
            </div>
          </div>
          <div class="menu-category-card">
            <h3><i class="fas fa-grill me-2 text-primary"></i>Secondi del Giorno</h3>
            <div class="menu-item">
              <p style="color: #666; font-style: italic;">Ogni giorno lo chef propone secondi piatti preparati con ingredienti freschi di stagione.</p>
              <p style="color: var(--primary); font-weight: 600;">Chiedi al personale le specialità del giorno!</p>
            </div>
          </div>
          <div class="menu-category-card">
            <h3><i class="fas fa-cake me-2 text-primary"></i>Dolci</h3>
            <div class="menu-item">
              <h4>Tiramisù Classico</h4>
            </div>
            <div class="menu-item">
              <h4>Torta della Nonna</h4>
            </div>
            <div class="menu-item">
              <h4>Cheesecake</h4>
            </div>
            <div class="menu-item">
              <h4>Torta al Cioccolato</h4>
            </div>
            <div class="menu-item">
              <h4>Panna Cotta</h4>
            </div>
          </div>
          <div class="menu-summer-note">
            <i class="fas fa-sun"></i>
            <strong>Nota Estate:</strong> Durante la stagione estiva, i dolci potrebbero subire variazioni. In alternativa saranno disponibili:
            <small>🍉 Anguria | 🍧 Sorbetto | 🍦 Dolci freschi del giorno</small>
          </div>
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
                                <div class="stat-item"><span class="stat-number">20€</span><span class="stat-label">Offerta Speciale</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="info-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-clock"></i></div><h3>Orari</h3><p>Giovedì - Domenica</p><p class="info-highlight">19:00 - 00:00</p><small>Chiuso Lun - Mar - Mer</small></div></div>
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-euro-sign"></i></div><h3>Menù</h3><p>Antipasto, Giro Pizza, Bevuta</p><p class="info-highlight">€ 20,00</p><small>Primi e Secondi del Giorno</small></div></div>
                    <div class="col-md-6 col-lg-3"><div class="info-card"><div class="info-icon"><i class="fas fa-music"></i></div><h3>Musica dal Vivo</h3><p>Weekend</p><p class="info-highlight">Eventi Speciali</p></div></div>
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
                    <p class="section-description">Immagini del nostro locale, dei nostri piatti e dei momenti di convivialità</p>
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
