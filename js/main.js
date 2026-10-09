/* ============================================
   PIZZERIA IL SEMAFORO — JS PROFESSIONALE
   ============================================ */

/* ⚙️ CONFIGURAZIONE — cambia qui il path delle immagini */
const IMG_PATH = 'images/';

/* ============================================
   PAGINA MENÙ (con foto dei piatti)
   ============================================ */
const menuNormalePage = `
  <section class="menu-section" id="menu">
    <div class="container">
      <div class="text-center mb-5" data-aos="fade-up">
        <span class="section-subtitle">Il Nostro Menù</span>
        <h2 class="section-title">Menù</h2>
        <p style="color:#666;">Piatti della tradizione toscana preparati con passione</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="menu-category-card" data-aos="fade-up">
            <h3><i class="fas fa-utensils me-2 text-primary"></i>Antipasto</h3>
            <div class="menu-item">
              <img src="${IMG_PATH}1.jpeg" alt="Antipasto della casa" class="menu-thumb" width="72" height="72" loading="lazy">
              <div>
                <h4>Antipasto della Casa</h4>
                <p>Selezione di salumi toscani, schiacciata calda, verdure sott'olio</p>
              </div>
              <span class="menu-price">€ 12</span>
            </div>
          </div>

          <div class="menu-category-card" data-aos="fade-up" data-aos-delay="100">
            <h3><i class="fas fa-pizza-slice me-2 text-primary"></i>Giro Pizza</h3>
            <div class="menu-item">
              <img src="${IMG_PATH}2.jpeg" alt="Giro pizza a volontà" class="menu-thumb" width="72" height="72" loading="lazy">
              <div>
                <h4>🍕 Giro Pizza No Stop</h4>
                <p>Un viaggio attraverso i sapori della tradizione</p>
              </div>
              <span class="menu-price">A volontà</span>
            </div>
          </div>

          <div class="menu-category-card" data-aos="fade-up" data-aos-delay="200">
            <h3><i class="fas fa-wine-bottle me-2 text-primary"></i>Bevuta</h3>
            <div class="menu-item">
              <img src="${IMG_PATH}3.jpg" alt="Bibite in bottiglia" class="menu-thumb" width="72" height="72" loading="lazy">
              <div>
                <h4>Bibite (33cl)</h4>
                <p>Incluse nel menù</p>
              </div>
              <span class="menu-price">incluse</span>
            </div>
          </div>

          <div class="menu-category-card" style="background:linear-gradient(135deg,#fff8f0,#fff0e0);border:2px solid var(--primary);" data-aos="fade-up" data-aos-delay="300">
            <h3><i class="fas fa-tag me-2 text-primary"></i>Offerta Speciale</h3>
            <div class="menu-item text-center" style="flex-direction:column;gap:6px;">
              <h4 style="font-size:1.5rem;color:var(--primary);">Antipasto + Giro Pizza + Bevuta</h4>
              <p style="font-size:2.5rem;font-weight:800;color:var(--primary);line-height:1;">€ 20,00</p>
              <p style="color:#666;">a persona</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="menu-category-card" data-aos="fade-up">
            <h3><i class="fas fa-bowl-food me-2 text-primary"></i>Primi del Giorno</h3>
            <div class="menu-item">
              <div>
                <p style="color:#666;font-style:italic;">Ogni giorno lo chef propone primi piatti preparati con ingredienti freschi di stagione.</p>
                <p style="color:var(--primary);font-weight:600;">Chiedi al personale le specialità del giorno!</p>
              </div>
            </div>
          </div>

          <div class="menu-category-card" data-aos="fade-up" data-aos-delay="100">
            <h3><i class="fas fa-drumstick-bite me-2 text-primary"></i>Secondi del Giorno</h3>
            <div class="menu-item">
              <div>
                <p style="color:#666;font-style:italic;">Ogni giorno lo chef propone secondi piatti preparati con ingredienti freschi di stagione.</p>
                <p style="color:var(--primary);font-weight:600;">Chiedi al personale le specialità del giorno!</p>
              </div>
            </div>
          </div>

          <div class="menu-category-card" data-aos="fade-up" data-aos-delay="200">
            <h3><i class="fas fa-birthday-cake me-2 text-primary"></i>Dolci</h3>
            <div class="menu-item">
              <img src="${IMG_PATH}4.jpg" alt="Tiramisù classico" class="menu-thumb" width="72" height="72" loading="lazy">
              <div><h4>Tiramisù Classico</h4></div>
            </div>
            <div class="menu-item">
              <img src="${IMG_PATH}5.jpg" alt="Torta della nonna" class="menu-thumb" width="72" height="72" loading="lazy">
              <div><h4>Torta della Nonna</h4></div>
            </div>
            <div class="menu-item">
              <img src="${IMG_PATH}6.jpg" alt="Cheesecake" class="menu-thumb" width="72" height="72" loading="lazy">
              <div><h4>Cheesecake</h4></div>
            </div>
            <div class="menu-item">
              <img src="${IMG_PATH}7.jpeg" alt="Torta al cioccolato" class="menu-thumb" width="72" height="72" loading="lazy">
              <div><h4>Torta al Cioccolato</h4></div>
            </div>
            <div class="menu-item">
              <img src="${IMG_PATH}8.jpg" alt="Panna cotta" class="menu-thumb" width="72" height="72" loading="lazy">
              <div><h4>Panna Cotta</h4></div>
            </div>
          </div>

          <div class="menu-summer-note" data-aos="fade-up" data-aos-delay="300">
            <i class="fas fa-sun"></i>
            <strong>Nota Estate:</strong> Durante la stagione estiva, i dolci potrebbero subire variazioni. In alternativa saranno disponibili:
            <small>🍉 Anguria | 🍧 Sorbetto | 🍦 Dolci freschi del giorno</small>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

/* ============================================
   PAGINE SPECIALI
   ============================================ */
const specialPages = {
  about: `
    <section class="about-section" id="about">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="about-image position-relative">
              <img src="${IMG_PATH}pizzeria.jpg" alt="Interno del locale" class="img-fluid rounded-4 shadow" loading="lazy">
              <div class="about-years">
                <span class="years-number">2024</span>
                <span class="years-text">Anno di apertura</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <span class="section-subtitle">La Nostra Storia</span>
            <h2 class="section-title">Un Sogno di Famiglia Diventato Realtà</h2>
            <p class="about-text">Circa un anno fa, la nostra trattoria è nata da un sogno condiviso da una famiglia molto unita. Provenivamo da un altro settore, ma la nostra passione per la cucina e l'amore per la tradizione ci hanno spinti a intraprendere questa nuova avventura.</p>
            <p class="about-text">Non è stato un percorso facile; ci sono stati sacrifici, lunghe giornate di lavoro e momenti di grande impegno da parte di tutti noi. Tuttavia, con determinazione e tanto lavoro, siamo riusciti a trasformare il nostro sogno in realtà.</p>
            <div class="about-stats">
              <div class="stat-item"><span class="stat-number">15+</span><span class="stat-label">Piatti Tipici</span></div>
              <div class="stat-item"><span class="stat-number">100%</span><span class="stat-label">Familiare</span></div>
              <div class="stat-item"><span class="stat-number">20€</span><span class="stat-label">Offerta Speciale</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  gallery: `
    <section class="gallery-section" id="gallery">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <span class="section-subtitle">I Nostri Scatti</span>
          <h2 class="section-title">Galleria</h2>
          <p style="color:#666;">Immagini del nostro locale, dei nostri piatti e dei momenti di convivialità</p>
        </div>
        <div class="gallery-grid">
          ${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((n, i) => {
            const ext = [1,2,7,11,12,13,14,15,16].includes(n) ? 'jpeg' : 'jpg';
            return `
              <a href="${IMG_PATH}${n}.${ext}" class="gallery-item glightbox" data-gallery="pizzeria" data-aos="fade-up" data-aos-delay="${(i % 4) * 50}">
                <img src="${IMG_PATH}${n}.${ext}" alt="Foto ${n} Pizzeria Il Semaforo" loading="lazy" width="600" height="400">
              </a>`;
          }).join('')}
        </div>
      </div>
    </section>
  `
};

/* ============================================
   VARIABILI GLOBALI
   ============================================ */
let originalHeroHTML = '';
let originalHomeSectionsHTML = '';
let lightboxInstance = null;

/* ============================================
   NAVIGAZIONE
   ============================================ */
function ricostruisciHome() {
  const mainContent = document.getElementById('main-content');
  if (mainContent && originalHeroHTML && originalHomeSectionsHTML) {
    mainContent.innerHTML = originalHeroHTML + originalHomeSectionsHTML;
  }
}

function initAOS() {
  if (window.AOS) AOS.refresh();
}

function initLightbox() {
  if (window.GLightbox) {
    if (lightboxInstance) lightboxInstance.destroy();
    lightboxInstance = GLightbox({ selector: '.glightbox' });
  }
}

function loadPage(pageId) {
  const mainContent = document.getElementById('main-content');
  const navLinks = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) link.classList.add('active');
  });

  if (pageId === 'home') {
    ricostruisciHome();
  } else if (pageId === 'menu') {
    mainContent.innerHTML = menuNormalePage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (pageId === 'reviews') {
    ricostruisciHome();
    setTimeout(() => {
      const section = document.getElementById('reviews');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } else if (pageId === 'contact') {
    ricostruisciHome();
    setTimeout(() => {
      const section = document.getElementById('contact');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } else if (specialPages[pageId]) {
    mainContent.innerHTML = specialPages[pageId];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) navbarCollapse.classList.remove('show');

  // Re-init animazioni e lightbox per il nuovo contenuto
  setTimeout(() => { initAOS(); initLightbox(); }, 50);
}

/* ============================================
   BADGE APERTO / CHIUSO
   ============================================ */
function updateOpenStatus() {
  const el = document.getElementById('open-status');
  if (!el) return;

  const now = new Date();
  const day = now.getDay();   // 0=Dom, 4=Gio, 5=Ven, 6=Sab
  const hour = now.getHours();
  const minute = now.getMinutes();

  const openDays = [0, 4, 5, 6]; // Gio, Ven, Sab, Dom
  const isOpenDay = openDays.includes(day);
  const isOpenHour = (hour >= 19 && hour < 24) || (hour === 0 && minute === 0);

  if (isOpenDay && isOpenHour) {
    el.textContent = 'Aperto ora';
    el.classList.add('is-open');
    el.classList.remove('is-closed');
  } else {
    el.textContent = 'Chiuso';
    el.classList.add('is-closed');
    el.classList.remove('is-open');
  }
}

/* ============================================
   MODALE PRENOTAZIONE
   ============================================ */
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

/* ============================================
   INIZIALIZZAZIONE
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  // Salva HTML originale per ricostruzione home
  const homeSections = document.getElementById('home-sections');
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) originalHeroHTML = heroSection.outerHTML;
  if (homeSections) originalHomeSectionsHTML = homeSections.innerHTML;

  // Anno dinamico nel footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Link di navigazione
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      loadPage(this.getAttribute('data-page'));
    });
  });

  // Logo → home
  const homeLink = document.getElementById('home-link');
  if (homeLink) {
    homeLink.addEventListener('click', function (e) {
      e.preventDefault();
      loadPage('home');
    });
  }

  // Navbar scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Chiudi modale cliccando fuori
  window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('bookingModal')) closeBookingModal();
  });
  // Chiudi modale con ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeBookingModal();
  });

  // AOS
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }

  // Lightbox
  initLightbox();

  // Badge aperto/chiuso (aggiorna ogni minuto)
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);
});
