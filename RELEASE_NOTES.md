## Italiano

Aggiunge le due card approvate nelle anteprime:

- **Pastel Allarme** (`custom:pastel-alarm-card`): nome iniziale Protego sempre modificabile. Ogni pulsante può usare una funzione nativa supportata dal pannello oppure uno script. Nomi, icone, colori e ordine sono configurabili. Lo stato mostrato viene sempre dal pannello allarme. Palette iniziale Blu.
- **Pastel Riepilogo Sicurezza** (`custom:pastel-security-card`): riquadri personalizzabili per allarme, conteggio porte/finestre e sensori reali. Palette iniziale Menta. Senza sensori associati non viene mostrato un OK fisso; per letture numeriche la soglia va scelta esplicitamente.

I comandi nativi che richiedono un codice lo chiedono al momento dell’azione: il codice non viene salvato nella configurazione. Gli script conservano la propria logica.

Dopo l’aggiornamento **ricarica completamente il frontend** e cerca **Pastel Allarme** e **Pastel Riepilogo Sicurezza** in “Aggiungi card”. Seleziona il pannello e associa i tuoi script/sensori dall’editor. Le card esistenti non vengono sostituite automaticamente.

Abilita le versioni preliminari di Pastel UI in HACS; se la release non compare usa “Aggiorna informazioni”. Test automatici e browser con dati simulati; nessun allarme reale azionato.

[Guida e configurazione](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/cards/security.md).

## English

Adds **Pastel Allarme** and **Pastel Riepilogo Sicurezza** with visual editors and the approved shared Pastel style. Alarm title, buttons, icons, colors and native/script sources are configurable; panel state stays authoritative. Security tiles use real alarm, count and detector entities and preserve missing-data status. Native codes are transient and numeric detector thresholds are explicit user settings. Existing card types remain compatible.

Reload the frontend after updating, then add and configure the new cards. HACS pre-releases must be enabled. Unit/browser tests use simulated Home Assistant data; no live alarm was operated.
