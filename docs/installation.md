# Installation / Installazione

[![Open your Home Assistant and add Pastel UI to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

## English

### HACS

1. Install and configure HACS first. This project supplies frontend cards, not device integrations.
2. Use the blue button, or add `https://github.com/Angelofsin666/pastel-ui` in HACS → custom repositories, category **Dashboard**.
3. Select Pastel UI. For the beta, enable pre-release versions and download `v0.1.0-beta.2`, or choose `main` explicitly.
4. Check Settings → Dashboards → Resources. There should be one JavaScript Module resource: `/hacsfiles/pastel-ui/pastel-ui.js`. Add it only if HACS did not register it. Advanced mode may be needed to see Resources; YAML-managed dashboards declare resources in YAML instead.
5. Reload the frontend and add a card through the visual editor. Replace all `demo` example entities with your own.

### Manual

Download the three files from `dist/`: `pastel-ui.js`, `lawn-mower.png`, `ac-unit.svg`. Put them together in `/config/www/pastel-ui/`. Add `/local/pastel-ui/pastel-ui.js` as a **JavaScript Module** resource. Reload the frontend. Manual installations do not receive HACS update notifications.

### Updates and troubleshooting

Update **Pastel UI**, then reload the frontend. If old content remains, reload with the browser cache cleared. Do not load the old standalone resources alongside the suite. If discovery cannot read the device registries, choose entities manually. If no release appears in HACS, use the repository menu to update information and verify that beta versions are enabled.

See [migration](migration.md) before replacing an existing Pastel installation. HACS reference: [Dashboard repositories](https://hacs.xyz/docs/publish/plugin/) and [My Home Assistant links](https://hacs.dev/docs/use/my/).

## Italiano

### HACS

1. Installa e configura HACS. Pastel UI fornisce card, non le integrazioni dei dispositivi.
2. Usa il pulsante azzurro oppure aggiungi `https://github.com/Angelofsin666/pastel-ui` nelle repository personalizzate HACS, categoria **Dashboard**.
3. Seleziona Pastel UI. Per la beta abilita le versioni preliminari e scarica `v0.1.0-beta.2`, oppure scegli esplicitamente `main`.
4. Controlla Impostazioni → Dashboard → Risorse: deve esserci una sola risorsa **JavaScript Module** `/hacsfiles/pastel-ui/pastel-ui.js`. Aggiungila solo se HACS non l'ha registrata. Potrebbe servire la modalità avanzata; per dashboard gestite in YAML la risorsa va dichiarata nel relativo YAML.
5. Ricarica l'interfaccia e aggiungi una card dall'editor. Sostituisci le entità `demo` degli esempi con le tue.

### Manuale

Scarica i tre file di `dist/`: `pastel-ui.js`, `lawn-mower.png`, `ac-unit.svg`. Mettili insieme in `/config/www/pastel-ui/`. Aggiungi `/local/pastel-ui/pastel-ui.js` come risorsa **JavaScript Module**, poi ricarica. L'installazione manuale non riceve notifiche HACS.

### Aggiornamenti e problemi comuni

Aggiorna **Pastel UI**, poi ricarica l'interfaccia. Se resta la vecchia versione, ricarica svuotando la cache. Non caricare contemporaneamente i file delle vecchie card. Se il riconoscimento non può leggere i registri, associa le entità manualmente. Se HACS non mostra la release, aggiorna le informazioni della repository e verifica che le beta siano abilitate.

Leggi la [migrazione](migration.md) prima di sostituire le card esistenti.
