'use strict';
(() => {
  const toggle = document.querySelector('#menuToggle');
  const nav = document.querySelector('#mainNav');
  
  const lightbox = document.querySelector('#lightbox');
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Apri il menù');
  };
  toggle?.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi il menù' : 'Apri il menù');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (!nav?.contains(e.target) && !toggle?.contains(e.target)) closeMenu();
  });
  document.querySelectorAll('[data-booking]').forEach(el => el.addEventListener('click', () => { closeMenu(); if (!document.querySelector('#prenota')) window.location.href='prenotazioni.html'; else document.querySelector('#prenota').scrollIntoView({behavior:'smooth'}); }));
  const prefix = 'images/';
  document.querySelectorAll('.gallery-photo').forEach(button => button.addEventListener('click', () => {
    const image = lightbox?.querySelector('img');
    if (!lightbox || !image) return;
    image.src = prefix + encodeURIComponent(button.dataset.image || '');
    image.alt = button.querySelector('img')?.alt || 'Foto della pizzeria';
    document.querySelector('#lightboxCaption').textContent = button.dataset.caption || '';
    lightbox.showModal();
  }));
  document.querySelector('[data-close-lightbox]')?.addEventListener('click', () => lightbox?.close());
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });

  // Progressive form enhancement; the actual emails are sent only by the deployed Apps Script service.
  const form = document.querySelector('#emailBookingForm');
  const dateInput = document.querySelector('#guestDate');
  const toDateInput = (value) => [value.getFullYear(),String(value.getMonth()+1).padStart(2,'0'),String(value.getDate()).padStart(2,'0')].join('-');
  if (dateInput) dateInput.min = toDateInput(new Date());

  if (form) {
    const configUrl = (form.getAttribute('action') || '').trim();
    const isConfigured = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(configUrl);
    const status = document.querySelector('#bookingStatus');
    const button = form.querySelector('[type="submit"]');
    const showStatus = (message, error = false) => {
      if (!status) return;
      status.textContent = message;
      status.classList.toggle('is-error', error);
      status.hidden = false;
      status.scrollIntoView({block:'nearest',behavior:'smooth'});
    };
    form.addEventListener('submit', event => {
      if (status) status.hidden = true;
      if (!form.reportValidity()) { event.preventDefault(); return; }
      const date = form.elements.namedItem('guestDate').value;
      const time = form.elements.namedItem('guestTime').value;
      const weekday = new Date(date + 'T12:00:00').getDay();
      if (weekday >= 1 && weekday <= 3) { event.preventDefault(); showStatus('Siamo aperti dal giovedì alla domenica. Scegli uno di questi giorni.',true); return; }
      const now = new Date();
      if (date < toDateInput(now) || (date === toDateInput(now) && time <= [now.getHours(), now.getMinutes()].map(v => String(v).padStart(2,'0')).join(':'))) {
        event.preventDefault(); showStatus('Seleziona una data e un orario futuri.',true); return;
      }
      const name = form.elements.namedItem('guestName').value.trim();
      if (name.length < 3) {event.preventDefault(); showStatus('Inserisci nome e cognome.',true);return;}
      if (!isConfigured) {
        event.preventDefault();
        const dateNice = new Intl.DateTimeFormat('it-IT',{dateStyle:'full'}).format(new Date(`${date}T12:00:00`));
        showStatus('Il sistema di email automatiche è in attivazione. Non abbiamo ricevuto la tua prenotazione: per ora ti chiediamo di contattarci telefonicamente al +39 340 304 6310.',true);
        return;
      }
      if (button) { button.disabled = true; button.textContent = 'INVIO IN CORSO…'; }
      // This is a standard cross-site HTML POST, not fetch(): it works without CORS.
      // The browser navigates to the styled receipt page returned by Apps Script.
    });
  }
  const year = document.querySelector('#year'); if (year) year.textContent = String(new Date().getFullYear());
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => img.classList.add('photo-unavailable'));
  });
})();
