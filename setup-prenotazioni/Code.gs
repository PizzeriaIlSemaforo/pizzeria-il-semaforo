/**
 * PRENOTAZIONI IL SEMAFORO — Apps Script, senza Google Forms / Sheets.
 * Pubblicare come app web: Esegui come ME, Accesso: CHIUNQUE.
 * Tutti i dati sono archiviati nelle Script Properties del progetto.
 * AVVERTENZA: i link di gestione nella email sono token segreti, non inoltrarli.
 */
const SETTINGS = Object.freeze({
  OWNER_EMAIL: 'ilsemaforo.pizzeria@gmail.com', // Cambiare se vuoi ricevere su un'altra casella.
  SITE_URL: '', // Facoltativo: indirizzo assoluto del tuo sito pubblicato.
  PHONE: '+39 340 304 6310',
  RESTAURANT: 'Pizzeria Il Semaforo',
  TZ: 'Europe/Rome',
  MAX_NEW_PER_DAY: 25,
  MAX_PER_EMAIL_PER_DAY: 2,
  MAX_SAVED_BOOKINGS: 280,
  KEEP_DAYS_AFTER_BOOKING: 30
});

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.manage) {
    try {
      const booking = findByToken_(String(p.manage));
      if (!booking) return webpage_('Collegamento non valido', '<p>Questo collegamento non è valido o è scaduto.</p>');
      return approvalPage_(booking, String(p.manage), String(p.action || 'confirm'));
    } catch (err) {
      console.error(err);
      return webpage_('Operazione non disponibile', '<p>Non è possibile visualizzare questa prenotazione.</p>');
    }
  }
  return webpage_('Sistema prenotazioni', '<p>Il servizio prenotazioni del Semaforo è pronto a ricevere richieste dal sito.</p>');
}

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.mode !== 'booking') return webpage_('Richiesta non valida', '<p>Invia la richiesta dal modulo del sito.</p>');
  try {
    if (String(p.website || '').trim()) {
      return webpage_('Richiesta non valida', '<p>Non è stato possibile inviare la richiesta.</p>');
    }
    const booking = createBooking_(p);
    return webpage_('Richiesta ricevuta',
      `<span class="pill">RICHIESTA IN ATTESA</span><h2>Grazie, ${escapeHtml_(booking.name.split(' ')[0])}.</h2>` +
      `<p>Abbiamo ricevuto la richiesta <strong>${escapeHtml_(booking.code)}</strong> per <strong>${dateLabel_(booking.date)}</strong> alle <strong>${escapeHtml_(booking.time)}</strong>.</p>` +
      `<p>Ti abbiamo inviato un'email a <strong>${escapeHtml_(booking.email)}</strong> con il riepilogo. Controlla anche la cartella spam.</p>` +
      '<div class="notice" style="background:#fff4d9;border-left:4px solid #e8bd61;color:#825511;padding:18px"><b>IN ATTESA DI CONFERMA</b><br>Il tavolo non è ancora confermato. Riceverai una seconda email dopo la verifica.</div>');
  } catch (err) {
    console.error('Errore prenotazione: ' + String(err));
    const message = /^(Inserisci|Indica|Seleziona|La data|Per prenotazioni|Troppe|Questa richiesta|Il servizio|Non risultano|Le richieste)/.test(String(err.message))
      ? err.message
      : 'Non siamo riusciti a completare la richiesta. Riprova più tardi o chiamaci.';
    return webpage_('Richiesta non inviata', `<p>${escapeHtml_(message)}</p><p>Nessun tavolo è stato confermato.</p>`);
  }
}

function createBooking_(input) {
  const b = validateBooking_(input);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SETTINGS.OWNER_EMAIL)) throw new Error('Il servizio non è ancora configurato.');
  const appUrl = ScriptApp.getService().getUrl();
  if (!appUrl) throw new Error('Il servizio non è ancora configurato.');
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('Il servizio è occupato. Riprova tra poco.');
  try {
    const store = PropertiesService.getScriptProperties();
    const props = store.getProperties();
    const now = Date.now();
    const day = Utilities.formatDate(new Date(now), SETTINGS.TZ, 'yyyyMMdd');
    const key = 'count_' + day;
    const count = Number(props[key] || 0);
    if (count >= SETTINGS.MAX_NEW_PER_DAY) throw new Error('Troppe richieste oggi. Chiamaci per prenotare.');
    const existing = Object.keys(props).filter(k => k.indexOf('booking_') === 0);
    cleanup_(store, props, existing, now);
    const refreshed = store.getProperties();
    const bookings = Object.keys(refreshed).filter(k => k.indexOf('booking_') === 0).map(k => JSON.parse(refreshed[k]));
    if (bookings.length >= SETTINGS.MAX_SAVED_BOOKINGS) throw new Error('Il servizio prenotazioni è temporaneamente pieno. Chiamaci.');
    let fromAddressToday = 0;
    bookings.forEach(old => {
      if (old.email === b.email && old.createdAt && Number(old.createdAt) > now - 86400000) fromAddressToday++;
      if (old.email === b.email && old.date === b.date && old.time === b.time && Number(old.createdAt) > now - 3600000) {
        throw new Error('Questa richiesta è già stata inviata. Controlla la tua email.');
      }
    });
    if (fromAddressToday >= SETTINGS.MAX_PER_EMAIL_PER_DAY) throw new Error('Troppe richieste dallo stesso indirizzo email. Chiamaci.');
    if (MailApp.getRemainingDailyQuota() < 2) throw new Error('Non risultano email disponibili oggi. Ti invitiamo a chiamarci.');
    const code = 'SEM-' + Utilities.formatDate(new Date(now), SETTINGS.TZ, 'yyyyMMdd') + '-' + Utilities.getUuid().slice(0,8).toUpperCase();
    const booking = Object.assign({}, b, {
      code:code, manageToken: Utilities.getUuid() + Utilities.getUuid(),
      status: 'PENDING', createdAt: now, emailOwnerSent: false,
      emailCustomerSent:false, outcomeEmailSent:false
    });
    store.setProperty('booking_' + code, JSON.stringify(booking));
    store.setProperty(key, String(count + 1));
    // Mail owner first. If it fails, remove the record and return an error.
    try {
      MailApp.sendEmail({
        to: SETTINGS.OWNER_EMAIL,
        replyTo: booking.email,
        name: SETTINGS.RESTAURANT,
        subject: `🟡 DA CONFERMARE · ${booking.code} · ${booking.date} ${booking.time}`,
        body: ownerPlain_(booking, appUrl),
        htmlBody: ownerHtml_(booking, appUrl)
      });
      booking.emailOwnerSent = true;
      store.setProperty('booking_' + code, JSON.stringify(booking));
    } catch (err) {
      store.deleteProperty('booking_' + code);
      store.setProperty(key,String(count));
      throw new Error('Non risultano email disponibili oggi. Ti invitiamo a chiamarci.');
    }
    // Customer acknowledgement. In case of error it remains retryable by the owner.
    try {
      MailApp.sendEmail({
        to: booking.email,
        replyTo: SETTINGS.OWNER_EMAIL,
        name: SETTINGS.RESTAURANT,
        subject: '🟡 Richiesta ricevuta · IN ATTESA DI CONFERMA | Il Semaforo',
        body: customerPlain_(booking,'PENDING'),
        htmlBody: customerHtml_(booking,'PENDING')
      });
      booking.emailCustomerSent = true;
    } catch (err) {
      console.error('Invio ricevuta cliente fallito: ' + err);
    }
    store.setProperty('booking_' + code, JSON.stringify(booking));
    if (!booking.emailCustomerSent) {
      // Don't mislead the customer: the request is registered but acknowledgement needs manual retry.
      throw new Error('La richiesta è stata registrata ma non è stato possibile inviare la mail di attesa. Contattaci telefonicamente prima di riprovare.');
    }
    return booking;
  } finally { lock.releaseLock(); }
}

function processDecision(token, action) {
  if (typeof token !== 'string' || !/^[a-f0-9-]{72}$/.test(token)) throw new Error('Collegamento non valido.');
  if (action !== 'confirm' && action !== 'reject') throw new Error('Scelta non valida.');
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('Servizio temporaneamente occupato. Riprova.');
  try {
    const store = PropertiesService.getScriptProperties();
    const booking = findByToken_(token);
    if (!booking) throw new Error('Collegamento scaduto o non valido.');
    const next = action === 'confirm' ? 'CONFIRMED' : 'REJECTED';
    if (booking.status !== 'PENDING' && booking.status !== next) throw new Error('Questa richiesta è già stata gestita con un esito differente.');
    if (booking.status === next && booking.outcomeEmailSent) {
      return {ok:true, message:'Richiesta già gestita. Nessuna email duplicata inviata.'};
    }
    if (MailApp.getRemainingDailyQuota() < 1) throw new Error('Limite giornaliero email raggiunto. Riprova successivamente.');
    booking.status = next;
    booking.updatedAt = Date.now();
    store.setProperty('booking_' + booking.code, JSON.stringify(booking));
    try {
      MailApp.sendEmail({
        to: booking.email,
        replyTo: SETTINGS.OWNER_EMAIL,
        name: SETTINGS.RESTAURANT,
        subject: next === 'CONFIRMED' ? '🟢 Prenotazione CONFERMATA | Il Semaforo' : '🔴 Richiesta NON CONFERMATA | Il Semaforo',
        body: customerPlain_(booking,next),
        htmlBody: customerHtml_(booking,next)
      });
    } catch (err) {
      console.error('Email esito fallita: ' + err);
      throw new Error('Esito salvato, ma email non inviata. Riapri questo collegamento per riprovare.');
    }
    booking.outcomeEmailSent = true;
    store.setProperty('booking_' + booking.code, JSON.stringify(booking));
    return {ok:true, message: next === 'CONFIRMED' ? 'Prenotazione confermata. Il cliente ha ricevuto la mail di conferma.' : 'Richiesta rifiutata. Il cliente ha ricevuto la comunicazione.'};
  } finally { lock.releaseLock(); }
}

function validateBooking_(p) {
  const clean = (x,n) => String(x || '').trim().replace(/[\u0000-\u001f\u007f]/g,' ').replace(/\s+/g,' ').slice(0,n);
  const name = clean(p.guestName,80), email = clean(p.guestEmail,150).toLowerCase();
  const phone = clean(p.guestPhone,22), date = clean(p.guestDate,10), time=clean(p.guestTime,5);
  const people = Number(p.guestPeople), menu=clean(p.guestMenu,65), notes=clean(p.guestNotes,400);
  if (name.length < 3 || name.split(' ').length < 2) throw new Error('Inserisci nome e cognome.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Inserisci un indirizzo email valido.');
  if (!/^\+?[0-9\s()\-]{8,22}$/.test(phone)) throw new Error('Inserisci un numero di telefono valido.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || isNaN(Date.parse(date+'T12:00:00Z')) || new Date(date+'T12:00:00Z').toISOString().slice(0,10) !== date) throw new Error('Seleziona una data valida.');
  if (!/^((19|20|21|22):(00|30))$/.test(time)) throw new Error('Seleziona un orario valido.');
  const weekday = new Date(date+'T12:00:00Z').getUTCDay();
  if (weekday >= 1 && weekday <= 3) throw new Error('Seleziona un giorno di apertura: giovedì, venerdì, sabato o domenica.');
  if (!Number.isInteger(people) || people < 1) throw new Error('Indica un numero valido di persone.');
  if (people > 10) throw new Error('Per prenotazioni superiori a 10 persone chiamaci al +39 340 304 6310.');
  if (!['Giro pizza','Primi e secondi del giorno dello chef'].includes(menu)) throw new Error('Seleziona un tipo di menù valido.');
  if (p.privacyConsent !== 'yes') throw new Error('Inserisci il consenso alla privacy.');
  const today = Utilities.formatDate(new Date(),SETTINGS.TZ,'yyyy-MM-dd');
  const nowTime = Utilities.formatDate(new Date(),SETTINGS.TZ,'HH:mm');
  if (date < today || (date === today && time <= nowTime)) throw new Error('La data o l’orario selezionati sono già trascorsi.');
  return {name,email,phone,date,time,people,menu,notes};
}

/**
 * Optional: execute this ONCE manually in Apps Script to schedule data cleanup
 * every night, including nights when there are no new reservations.
 */
function installDailyCleanup() {
  const fn = 'cleanupExpiredBookings';
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === fn) ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger(fn).timeBased().everyDays(1).atHour(4).create();
}
function cleanupExpiredBookings() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;
  try {
    const store = PropertiesService.getScriptProperties();
    const props = store.getProperties();
    cleanup_(store, props, Object.keys(props).filter(k => k.indexOf('booking_')===0), Date.now());
  } finally { lock.releaseLock(); }
}

function cleanup_(store,props,keys,now) {
  const oldLimit = SETTINGS.KEEP_DAYS_AFTER_BOOKING*86400000;
  for (const k of keys) {
    try {
      const b=JSON.parse(props[k]);
      // Remove 30 days after requested date; PII is not retained indefinitely.
      const d=Date.parse(b.date+'T23:59:59Z');
      if (d + oldLimit < now) store.deleteProperty(k);
    } catch(e) { console.error('Record non leggibile: ' + k); }
  }
  // Delete old daily throttling counters.
  for(const k of Object.keys(props)) if (/^count_\d{8}$/.test(k) && k.slice(6) < Utilities.formatDate(new Date(now-4*86400000),SETTINGS.TZ,'yyyyMMdd')) store.deleteProperty(k);
}

function findByToken_(token) {
  if (!/^[a-f0-9-]{72}$/.test(String(token))) return null;
  const props = PropertiesService.getScriptProperties().getProperties();
  for (const k of Object.keys(props)) if (k.indexOf('booking_')===0) {
    try { const b=JSON.parse(props[k]); if (b.manageToken === token) return b; } catch(e) {}
  }
  return null;
}

function escapeHtml_(s) {return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function dateLabel_(d) {const a=String(d).split('-');return escapeHtml_((a[2]||'')+'/'+(a[1]||'')+'/'+(a[0]||''));}
function infoRows_(b) {
  const rows = [['Riferimento',b.code],['Nome',b.name],['Data',dateLabel_(b.date)],['Orario',b.time],['Persone',b.people],['Tipo di menù',b.menu]];
  return rows.map(([l,v])=>`<tr><td style="padding:10px 0;color:#657367;font-size:13px;border-bottom:1px solid #e8e6df">${escapeHtml_(l)}</td><td style="padding:10px 0;text-align:right;color:#223629;font-weight:600;font-size:14px;border-bottom:1px solid #e8e6df">${escapeHtml_(v)}</td></tr>`).join('');
}
function mailShell_(overline,title,body) {
  const pending=overline==='NUOVA RICHIESTA'||overline==='IN ATTESA DI CONFERMA';
  const confirmed=overline==='TAVOLO CONFERMATO';
  const t=pending?{bg:'#fff4d9',fg:'#825511',edge:'#e8bd61',label:'IN ATTESA DI CONFERMA',desc:'Richiesta ricevuta: il tavolo NON è ancora confermato.'}:
    confirmed?{bg:'#e6f5eb',fg:'#16643c',edge:'#65aa80',label:'PRENOTAZIONE CONFERMATA',desc:'Il tuo tavolo è confermato dal nostro staff.'}:
    {bg:'#ffedeb',fg:'#9b352e',edge:'#df8279',label:'RICHIESTA NON CONFERMATA',desc:'Non abbiamo disponibilità per la data e l’orario richiesti.'};
  return '<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;background:#f1f2ed;font-family:Arial,Helvetica,sans-serif">'+
    '<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f1f2ed;border-collapse:collapse"><tr><td style="padding:30px 12px">'+
    '<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;margin:auto;background:#fff;border-collapse:collapse">'+
    '<tr><td style="padding:29px 32px;background:#1e3025;color:white"><div style="font:30px Georgia,serif">Il Semaforo</div><div style="font-size:10px;letter-spacing:2.3px;margin-top:9px;color:#e8d0a2;font-weight:700">RISTORANTE &amp; PIZZERIA · CAMPI BISENZIO</div></td></tr>'+
    '<tr><td style="padding:24px 32px;background:'+t.bg+';color:'+t.fg+';border-bottom:3px solid '+t.edge+'"><div style="font-size:12px;letter-spacing:1.2px;font-weight:800">&#9679; '+escapeHtml_(t.label)+'</div><div style="font-size:14px;line-height:1.65;margin-top:8px">'+escapeHtml_(t.desc)+'</div></td></tr>'+
    '<tr><td style="padding:32px 32px 35px"><div style="font-size:10px;letter-spacing:1.5px;color:#92744d;font-weight:700">'+escapeHtml_(overline)+'</div>'+
    '<h1 style="font:400 29px/1.2 Georgia,serif;color:#213a2a;margin:12px 0 22px">'+escapeHtml_(title)+'</h1>'+body+'</td></tr>'+
    '<tr><td style="padding:23px 32px;background:#f6f7f2;color:#526155;font-size:12px;line-height:1.8;border-top:1px solid #e1e7dc"><b>Pizzeria Il Semaforo</b><br>Via Palagetta, 50013 Campi Bisenzio (FI)<br>Giovedì–domenica · 19:00–23:00<br>Telefono: +39 340 304 6310<br>Per modifiche puoi rispondere a questa email.</td></tr></table>'+
    '<div style="text-align:center;color:#738075;font-size:11px;padding:17px 0">Email automatica relativa alla tua prenotazione al Semaforo.</div></td></tr></table></body></html>';
}
function ownerPlain_(b,url) {return `NUOVA RICHIESTA ${b.code}\n${b.name} | ${b.email} | ${b.phone}\n${b.date} ore ${b.time} | ${b.people} persone\n${b.menu}\nNote: ${b.notes||'Nessuna'}\n\nApri per confermare: ${url}?manage=${encodeURIComponent(b.manageToken)}&action=confirm\nApri per rifiutare: ${url}?manage=${encodeURIComponent(b.manageToken)}&action=reject\nI link sono riservati.`;}
function ownerHtml_(b,url) {
  const link = url+'?manage='+encodeURIComponent(b.manageToken);
  return mailShell_('NUOVA RICHIESTA', 'Una prenotazione da valutare',
    '<p style="color:#56665b;line-height:1.7">Hai ricevuto una nuova richiesta dal sito. Il tavolo non è ancora confermato.</p>'+
    '<table role="presentation" style="width:100%;border-collapse:collapse">'+infoRows_(b)+
    `<tr><td style="padding-top:12px;color:#66736a">Telefono</td><td style="padding-top:12px;text-align:right">${escapeHtml_(b.phone)}</td></tr>`+
    `<tr><td style="padding-top:12px;color:#66736a">Email</td><td style="padding-top:12px;text-align:right">${escapeHtml_(b.email)}</td></tr></table>`+
    `<p style="padding:15px;background:#f6f3ec;font-size:13px;line-height:1.6"><b>Note:</b> ${escapeHtml_(b.notes||'Nessuna')}</p>`+
    `<p style="margin:28px 0"><a href="${escapeHtml_(link+'&action=confirm')}" style="display:inline-block;background:#234c36;color:#fff;padding:14px 19px;text-decoration:none;font-weight:700;margin:0 8px 8px 0">CONFERMA</a>`+
    `<a href="${escapeHtml_(link+'&action=reject')}" style="display:inline-block;background:#f0e5da;color:#77412f;padding:14px 19px;text-decoration:none;font-weight:700">RIFIUTA</a></p>`+
    '<p style="font-size:12px;color:#76776f">Per sicurezza, aprendo il collegamento dovrai confermare la tua scelta. Non inoltrare questa email: i link sono privati.</p>');
}
function customerPlain_(b,status) {
  const result = status==='PENDING'?'Abbiamo ricevuto la tua richiesta. Il tavolo non è ancora confermato. Riceverai una seconda email dopo la nostra verifica.':status==='CONFIRMED'?'La tua prenotazione è CONFERMATA. Ti aspettiamo!':'Ci dispiace, non possiamo confermare la disponibilità richiesta. Contattaci per concordare un’alternativa.';
  return `${SETTINGS.RESTAURANT}\n${result}\n\nCodice: ${b.code}\nNome: ${b.name}\nData: ${b.date}\nOra: ${b.time}\nPersone: ${b.people}\nTipo: ${b.menu}\n\nTelefono: ${SETTINGS.PHONE}`;
}
function customerHtml_(b,status) {
  const pending=status==='PENDING',confirmed=status==='CONFIRMED';
  const title=pending?'Richiesta ricevuta.':confirmed?'Prenotazione confermata.':'Aggiornamento sulla tua richiesta.';
  const text=pending?'Grazie per aver scelto Il Semaforo. Abbiamo preso in carico la tua richiesta: ti risponderemo dopo aver verificato la disponibilità.':confirmed?'Abbiamo il piacere di confermare il tuo tavolo. Ti aspettiamo per trascorrere insieme una bella serata.':'Ci dispiace, per la data e l’orario richiesti non possiamo confermare il tavolo. Chiamaci per scegliere un’alternativa.';
  const label=pending?'IN ATTESA DI CONFERMA':confirmed?'TAVOLO CONFERMATO':'NON DISPONIBILE';
  return mailShell_(label,title,
    `<p style="font-size:15px;line-height:1.8;color:#536457">Ciao ${escapeHtml_(b.name.split(' ')[0])},<br>${escapeHtml_(text)}</p>`+
    `<table role="presentation" style="width:100%;border-collapse:collapse;margin:25px 0">${infoRows_(b)}</table>`+
    `<p style="padding:17px;background:${confirmed?'#e5f1e8':pending?'#f7f0e5':'#f9eee8'};color:${confirmed?'#295138':pending?'#705537':'#864737'};font-size:13px;line-height:1.7">${pending?'<b>Importante:</b> questa email conferma solo la ricezione della richiesta. Non presentarti senza una conferma definitiva.':confirmed?'La tua prenotazione è stata confermata dal nostro staff. Per modifiche rispondi a questa email.':'La richiesta non è stata accettata. Siamo a disposizione per concordare un altro giorno o orario.'}</p>`
  );
}
function approvalPage_(b,token,action) {
  const isPending=b.status==='PENDING';
  const requested=action==='reject'?'reject':'confirm';
  const btnText=requested==='confirm'?'CONFERMA PRENOTAZIONE':'RIFIUTA PRENOTAZIONE';
  const body=`<span class="pill">GESTIONE PRENOTAZIONI</span><h2>Richiesta ${escapeHtml_(b.code)}</h2>`+
    `<p><b>${escapeHtml_(b.name)}</b> · ${dateLabel_(b.date)} alle ${escapeHtml_(b.time)} · ${escapeHtml_(b.people)} persone</p>`+
    `<p>Stato attuale: <b>${escapeHtml_(b.status)}</b></p>`+
    `<p>Stai per <b>${requested==='confirm'?'confermare':'rifiutare'}</b> questa richiesta. La mail al cliente partirà solamente dopo il tuo clic.</p>`+
    `<button id="doDecision" style="background:${requested==='confirm'?'#24573b':'#8c4d3c'};border:0;color:white;cursor:pointer;padding:15px 22px;font-size:13px;font-weight:700">${btnText}</button><p id="decisionOutput" role="status" aria-live="polite"></p>`+
    '<script>document.getElementById("doDecision").addEventListener("click",function(){var btn=this;btn.disabled=true;btn.textContent="ELABORAZIONE…";google.script.run.withSuccessHandler(function(result){document.getElementById("decisionOutput").textContent=result.message;btn.remove();}).withFailureHandler(function(err){document.getElementById("decisionOutput").textContent=err.message||"Operazione non riuscita.";btn.disabled=false;btn.textContent='+JSON.stringify(btnText)+';}).processDecision('+JSON.stringify(token)+','+JSON.stringify(requested)+');});</script>';
  return webpage_('Gestisci prenotazione',body);
}
function webpage_(title,body) {
  const back=SETTINGS.SITE_URL?'<a href="'+escapeHtml_(SETTINGS.SITE_URL)+'" style="color:#c89d61;text-decoration:underline">Torna al sito del Semaforo</a>':'';
  const html='<!doctype html><html lang="it"><head><base target="_top"><meta name="viewport" content="width=device-width,initial-scale=1"><meta charset="UTF-8"><title>'+escapeHtml_(title)+' | Il Semaforo</title></head><body style="margin:0;background:#f4f1e9;color:#24382b;font-family:Arial,sans-serif;padding:45px 14px"><div style="margin:0 auto;max-width:630px;background:#fffefa;box-shadow:0 12px 55px #16271a12"><header style="padding:29px 40px;background:#1b2b20;color:white"><div style="font-family:Georgia,serif;font-size:31px">Il Semaforo</div><div style="font-size:10px;color:#d5ad76;letter-spacing:3px;margin-top:7px">RISTORANTE &amp; PIZZERIA</div></header><main style="padding:35px 40px;line-height:1.8"><h1 style="font:400 32px Georgia,serif">'+escapeHtml_(title)+'</h1>'+body+'</main><footer style="padding:18px 40px;background:#f4f1e9;font-size:12px;color:#69776a">Pizzeria Il Semaforo · Via Palagetta, Campi Bisenzio · '+escapeHtml_(SETTINGS.PHONE)+'<div style="margin-top:9px">'+back+'</div></footer></div></body></html>';
  return HtmlService.createHtmlOutput(html).setTitle(title+' | Il Semaforo');
}
