PIZZERIA IL SEMAFORO — SITO MULTIPAGINA + PRENOTAZIONI VIA EMAIL
================================================================

PAGINE PUBBLICATE
index.html, il-locale.html, menu.html, galleria.html, chi-siamo.html,
recensioni.html, contatti.html, prenotazioni.html, privacy.html, style.css, app.js.
Le immagini e il logo originali sono riutilizzati dalla cartella /images.

PRENOTAZIONI VIA EMAIL: NECESSARIA ATTIVAZIONE GRATUITA
Il sito non usa WhatsApp né Google Forms per le prenotazioni. Il modulo usa
un POST verso una web app Google Apps Script, che gestisce le email automatiche.

ATTENZIONE: l'account Google della pizzeria deve autorizzare l'app Script;
non e' possibile attivarlo soltanto con l'accesso al repository GitHub.
FINO ALL'ATTIVAZIONE IL SITO NON INVIA ALCUNA PRENOTAZIONE E LO DICHIARA.

1) Con il proprio account Google apri https://script.google.com e crea un progetto.
2) Incolla il codice completo di setup-prenotazioni/Code.gs nell'editor.
3) Controlla SETTINGS.OWNER_EMAIL (attualmente ilsemaforo.pizzeria@gmail.com).
4) Imposta fuso orario Europe/Rome.
5) Esegui una volta installDailyCleanup e autorizza lo script.
6) Distribuisci > Nuova distribuzione > Applicazione web,
   Esegui come: Me, Accesso: Chiunque. Copia l'URL finale /exec.
7) In prenotazioni.html sostituisci:
     action="URL_APP_SCRIPT_DA_CONFIGURARE"
   con l'URL completo /exec ricevuto da Apps Script.
8) Ricarica prenotazioni.html su GitHub e fai un TEST con email vere.
9) Usa l'email di gestione ricevuta per confermare o rifiutare. Il cliente
   ricevera' automaticamente il messaggio di esito dopo la tua decisione.

I LIMITI DELLA VERSIONE GRATUITA
Sono applicati i limiti gratuiti di invio quotidiano Google Apps Script,
oltre ai limiti tecnici di Script Properties. Il sistema non richiede Gmail API,
Google Forms, Google Sheets o servizi WhatsApp a pagamento.

PRIVACY
La pagina privacy contiene materiale da verificare. Prima di acquisire
prenotazioni reali completare l'informativa GDPR con il titolare del trattamento,
la base giuridica corretta, i fornitori, i diritti e i periodi di conservazione.

NOTE OPERATIVE
- Nessun blocco prenotazioni duplicato alla fine delle altre pagine.
- Indirizzo: Via Palagetta, 50013 Campi Bisenzio (FI).
- Orario: Giovedi-Domenica, 19:00-23:00.
- Le fotografie originali del repository non sono state modificate.

AGGIORNAMENTO NOVEMBRE 2026
- Calendario del sito: lunedì, martedì e mercoledì non selezionabili (fallback e backend li rifiutano comunque).
- Prenotazioni online: massimo 10 persone. Per 11 o più persone il modulo richiede di telefonare al 340 304 6310.
- Email: giallo = in attesa, verde = confermata, rosso = non confermata.
- IMPORTANTE: il codice Apps Script nel repository NON si aggiorna automaticamente sul servizio Google attivo.
  Per applicare i nuovi controlli e le nuove email, sostituisci il codice Apps Script
  con setup-prenotazioni/Code.gs e aggiorna la distribuzione web esistente alla nuova versione.
  L'URL /exec può rimanere invariato se aggiorni la stessa distribuzione.