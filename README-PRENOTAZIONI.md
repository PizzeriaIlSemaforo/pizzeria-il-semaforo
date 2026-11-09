PIZZERIA IL SEMAFORO — SITO MULTIPAGINA + PRENOTAZIONI VIA EMAIL
================================================================

PAGINE PUBBLICATE
index.html, il-locale.html, menu.html, galleria.html, chi-siamo.html,
recensioni.html, contatti.html, prenotazioni.html, privacy.html, style.css, app.js.
Le immagini e il logo originali sono riutilizzati dalla cartella /images.

PRENOTAZIONI VIA EMAIL — SERVIZIO GIÀ COLLEGATO
Il modulo del sito invia le richieste a Google Apps Script e NON utilizza
Google Forms, Google Sheets o WhatsApp per le prenotazioni.
L'URL /exec è già inserito in prenotazioni.html.

Per aggiornare i controlli e i testi delle email:
1) Apri https://script.google.com con l'account che gestisce le prenotazioni.
2) Apri il progetto Apps Script già pubblicato e sostituisci Code.gs
   con il file setup-prenotazioni/Code.gs presente nel repository.
3) Salva; vai a Distribuisci > Gestisci distribuzioni > Modifica.
4) Seleziona Nuova versione e pubblica sulla distribuzione esistente.
5) Non creare una nuova distribuzione: il sito deve continuare a usare
   il medesimo URL /exec già collegato.
6) Fai un test con una prenotazione futura (giovedì-domenica) e verifica
   email di attesa, email al gestore e risposta di conferma o rifiuto.

REGOLE ATTUALI
- Calendario dal giovedì alla domenica. Le frecce del calendario permettono
  di navigare tra i mesi senza chiudere la finestra.
- Da 1 a 10 persone: prenotazione online; oltre 10 persone: chiamare.
- Tipo di menù obbligatorio: Giro pizza oppure
  Primi e secondi del giorno dello chef.
- Gli stessi valori sono convalidati anche dal codice Apps Script.
  ATTENZIONE: finché non ridistribuisci il codice aggiornato nel progetto
  Google, il server può rifiutare il nuovo tipo di menù.
- La prenotazione è confermata solo dopo l'email definitiva del gestore.

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

CONFERMA DAL CELLULARE (AGGIORNAMENTO)
È stata introdotta gestisci-prenotazione.html, una pagina dedicata sul sito
GitHub Pages per confermare o rifiutare anche da Gmail su Android/iPhone.

Le NUOVE email di gestione, generate dopo l'aggiornamento del codice Google
Apps Script, puntano a questa pagina anziché direttamente a script.google.com.
Il gestore apre il collegamento e preme "Conferma" o "Rifiuta".
Il pulsante invia in POST la decisione ad Apps Script, che registra l'esito
ed invia l'email al cliente. L'apertura della pagina NON conferma alcunché.

IMPORTANTE: le email inviate PRIMA della ridistribuzione contengono ancora
i vecchi collegamenti diretti Google e non possono cambiare retroattivamente.
Per applicare la correzione alle email successive, apri il progetto Google
Apps Script e sostituisci Code.gs con la versione del repository.
Poi vai su Distribuisci > Gestisci distribuzioni > Modifica >
Nuova versione > Distribuisci. Non creare una nuova distribuzione.

Verifica le impostazioni della Web app:
  "Esegui come": Me (titolare dello script)
  "Chi può accedere": Chiunque
Il sito di gestione usa la base URL impostata in SETTINGS.SITE_URL:
https://pizzeriailsemaforo.github.io/pizzeria-il-semaforo/
Se la pagina viene pubblicata su un dominio differente, cambia SITE_URL
nel codice Apps Script e ridistribuisci.

PROVE CONSIGLIATE
1) Invia dal sito una richiesta con email di prova.
2) Apri CONFERMA nell'email ricevuta dal gestore usando il telefono.
3) Verifica la comparsa della pagina "Gestisci prenotazione" sul sito.
4) Premi il pulsante di conferma e verifica l'email verde al cliente.
5) Riapri la stessa richiesta: non deve partire una seconda email.
6) Ripeti con RIFIUTA su una richiesta diversa per testare il rosso.

OTTIMIZZAZIONE RESPONSIVE
Il footer è ora compatto su desktop, tablet e smartphone: include sempre
logo, navigazione, social, indirizzo, orario, privacy e P.IVA.
Sui cellulari il modulo prenotazioni viene prima delle spiegazioni,
con campi più grandi e una navigazione più semplice.
