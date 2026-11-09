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

  function initBookingCalendar(input) {
    const field=input.closest('.booking-email-field');
    if(!field)return;
    const today=()=>{const d=new Date();return new Date(d.getFullYear(),d.getMonth(),d.getDate());};
    const isOpen=d=>[0,4,5,6].includes(d.getDay());
    const dateLabel=d=>new Intl.DateTimeFormat('it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(d);
    let month=new Date(today().getFullYear(),today().getMonth(),1);
    const button=document.createElement('button');
    button.type='button';button.id='bookingDatePicker';button.className='booking-date-trigger';
    button.textContent='Seleziona una data disponibile';
    button.setAttribute('aria-controls','bookingDateCalendar');
    button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-expanded','false');
    const panel=document.createElement('div');
    panel.id='bookingDateCalendar';panel.className='booking-calendar';panel.hidden=true;
    // I click sulle frecce ricreano i pulsanti: non devono chiudere il calendario.
    panel.addEventListener('click', event => event.stopPropagation());
    panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Calendario prenotazioni');
    input.insertAdjacentElement('afterend',button);button.insertAdjacentElement('afterend',panel);
    field.querySelector('label[for="guestDate"]')?.setAttribute('for',button.id);
    input.type='hidden';input.required=false;input.tabIndex=-1;
    const close=(focus=false)=>{panel.hidden=true;button.setAttribute('aria-expanded','false');if(focus)button.focus();};
    const nav=(name,label,disabled,cb)=>{
      const b=document.createElement('button');b.type='button';b.className='booking-calendar-nav';
      b.textContent=label;b.disabled=disabled;b.setAttribute('aria-label',name);
      b.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        cb();
        // Ripristina il focus sul pulsante ricreato per navigare tra i mesi consecutivamente.
        const replacement=Array.from(panel.querySelectorAll('.booking-calendar-nav'))
          .find(el=>el.getAttribute('aria-label')===name&&!el.disabled);
        (replacement||panel.querySelector('.booking-calendar-nav:not(:disabled)'))?.focus();
      });
      return b;
    };
    function render(){
      const t=today(),first=new Date(t.getFullYear(),t.getMonth(),1);
      if(month<first)month=new Date(first);
      panel.replaceChildren();
      const header=document.createElement('div');header.className='booking-calendar-header';
      const title=document.createElement('strong');title.textContent=new Intl.DateTimeFormat('it-IT',{month:'long',year:'numeric'}).format(month);
      header.append(nav('Mese precedente','‹',month.getTime()===first.getTime(),()=>{month.setMonth(month.getMonth()-1);render();}),title,
        nav('Mese successivo','›',false,()=>{month.setMonth(month.getMonth()+1);render();}));
      panel.append(header);
      const grid=document.createElement('div');grid.className='booking-calendar-grid';
      for(const char of ['L','M','M','G','V','S','D']){
        const s=document.createElement('span');s.className='booking-calendar-weekday';s.textContent=char;grid.append(s);
      }
      for(let i=0;i<(month.getDay()+6)%7;i++){const s=document.createElement('span');s.setAttribute('aria-hidden','true');grid.append(s);}
      const total=new Date(month.getFullYear(),month.getMonth()+1,0).getDate();
      for(let day=1;day<=total;day++){
        const d=new Date(month.getFullYear(),month.getMonth(),day),val=toDateInput(d),open=isOpen(d)&&d>=t;
        const b=document.createElement('button');b.type='button';b.textContent=String(day);
        b.className='booking-calendar-day';b.disabled=!open;
        b.setAttribute('aria-label',dateLabel(d)+(open?', disponibile':', chiuso o trascorso'));
        if(val===input.value){b.classList.add('is-selected');b.setAttribute('aria-current','date');}
        if(open)b.addEventListener('click',()=>{input.value=val;input.dispatchEvent(new Event('change',{bubbles:true}));button.textContent=dateLabel(d);close(true);});
        grid.append(b);
      }
      panel.append(grid);
      const note=document.createElement('p');note.className='booking-calendar-note';
      note.textContent='Lun–Mer chiuso · Disponibile da giovedì a domenica';panel.append(note);
    }
    button.addEventListener('click',()=>{
      if(!panel.hidden){close();return;}
      if(input.value){const d=new Date(input.value+'T12:00:00');if(!Number.isNaN(d.getTime()))month=new Date(d.getFullYear(),d.getMonth(),1);}
      render();panel.hidden=false;button.setAttribute('aria-expanded','true');
      panel.querySelector('.is-selected:not(:disabled),.booking-calendar-day:not(:disabled)')?.focus();
    });
    document.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&e.target!==button)close();});
    document.addEventListener('keydown',e=>{if(!panel.hidden&&e.key==='Escape'){e.preventDefault();close(true);}});
  }

  if (dateInput){dateInput.min=toDateInput(new Date());initBookingCalendar(dateInput);}

  if (form) {
    const configUrl = (form.getAttribute('action') || '').trim();
    const isConfigured = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(configUrl);
    const status = document.querySelector('#bookingStatus');
    const button = form.querySelector('[type="submit"]');
    const peopleInput=form.elements.namedItem('guestPeople');
    const groupNotice=document.querySelector('#groupSizeNotice');
    const groupMessage='Per prenotazioni superiori a 10 persone chiamaci al 340 304 6310.';
    function validateGroup() {
      const over=Boolean(peopleInput?.value)&&Number(peopleInput.value)>10;
      if(groupNotice)groupNotice.hidden=!over;
      peopleInput?.setCustomValidity(over?groupMessage:'');
      return !over;
    }
    peopleInput?.addEventListener('input',validateGroup);
    peopleInput?.addEventListener('change',validateGroup);
    validateGroup();
    const showStatus = (message, error = false) => {
      if (!status) return;
      status.textContent = message;
      status.classList.toggle('is-error', error);
      status.hidden = false;
      status.scrollIntoView({block:'nearest',behavior:'smooth'});
    };
    form.addEventListener('submit', event => {
      if (status) status.hidden = true;
      if (!validateGroup()) {event.preventDefault();showStatus(groupMessage,true);peopleInput?.focus();return;}
      if (!form.reportValidity()) { event.preventDefault(); return; }
      const date = form.elements.namedItem('guestDate').value;
      const time = form.elements.namedItem('guestTime').value;
      if(!date){event.preventDefault();showStatus('Seleziona una data disponibile dal calendario.',true);document.querySelector('#bookingDatePicker')?.focus();return;}
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
