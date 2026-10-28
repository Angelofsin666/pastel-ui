## Italiano

Nuova **Pastel Clima Script**, coerente con lo stile di Pastel Stufa, per climatizzatori comandati da script.

- Scegli il sensore di temperatura da suggerimenti filtrati ai sensori di temperatura, oppure scrivine l’ID.
- Aggiungi pulsanti, rinominali e scegli lo script da un elenco dei soli script.
- Scegli le icone da una griglia visiva e la palette della card o dei singoli pulsanti.
- Riordina o rimuovi i pulsanti; nessun numero fisso di funzioni.
- Badge e indicatori opzionali usano entità di stato reali. Uno script `off` non viene interpretato come climatizzatore spento.

Dopo l’aggiornamento **ricarica completamente il frontend**, quindi scegli **Pastel Clima Script** in “Aggiungi card”. La nuova card non sostituisce automaticamente Pastel Thermostat: associa il tuo sensore e gli script nell’editor. Nessuna modifica necessaria alle card esistenti.

Questa è una release preliminare: abilita le beta di Pastel UI in HACS e usa “Aggiorna informazioni” se non compare. Test automatici e browser con dati simulati; nessun climatizzatore reale azionato.

[Configurazione e guida](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/cards/script-climate.md).

## English

Adds **Pastel Clima Script**, a script-driven air-conditioner card with a simple visual editor, temperature-only sensor suggestions, script-only buttons, a visual icon grid, editable names and card/button palettes. Arbitrary button counts and optional real-state helpers are supported. Script idle/running never implies HVAC power. Existing cards remain compatible.

Reload the frontend after updating and add Pastel Clima Script, then choose your sensor and scripts. HACS pre-releases must be enabled. Automated/browser tests use simulated Home Assistant data; no physical air conditioner was operated.
