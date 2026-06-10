// JavaScript per Pizzeria Il Semaforo - Festa dell'Unità

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

// Variabili globali per salvare l'HTML originale
let originalHeroHTML = '';
let originalHomeSectionsHTML = '';

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const homeSections = document.getElementById('home-sections');
    const navLinks = document.querySelectorAll('[data-page]');
    
    // SALVA l'HTML originale ALL'INIZIO
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        originalHeroHTML = heroSection.outerHTML;
    }
    if (homeSections) {
        originalHomeSectionsHTML = homeSections.innerHTML;
    }
    
    // Funzione per ricostruire la home COMPLETAMENTE
    function ricostruisciHome() {
        if (mainContent && originalHeroHTML && originalHomeSectionsHTML) {
            mainContent.innerHTML = originalHeroHTML + originalHomeSectionsHTML;
        }
    }
    
    // Funzione per caricare una pagina
    function loadPage(pageId) {
        // Aggiorna classe active
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });

        if (pageId === 'home') {
            ricostruisciHome();
        } 
        else if (pageId === 'menu') {
            ricostruisciHome();
            setTimeout(() => {
                const menuSection = document.getElementById('menu');
                if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
        else if (pageId === 'reviews') {
            ricostruisciHome();
            setTimeout(() => {
                const reviewsSection = document.getElementById('reviews');
                if (reviewsSection) reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
        else if (pageId === 'contact') {
            ricostruisciHome();
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
        else if (specialPages[pageId]) {
            mainContent.innerHTML = specialPages[pageId];
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Chiudi menu mobile
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) navbarCollapse.classList.remove('show');
    }
    
    // Aggiungi event listeners a tutti i link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.dataset.page;
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
});

// Funzioni per il modale
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

// Chiudi modale cliccando fuori
window.addEventListener('click', function(e) {
    const modal = document.getElementById('bookingModal');
    if (e.target === modal) {
        closeBookingModal();
    }
});

// Chiudi con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeBookingModal();
});
