# Installation / Installazione

## English

### Home Assistant Marketplace (2026.11 and newer)

1. Open **Settings → Marketplace**, search for **Pastel UI**, open its page and select **Install**. The Marketplace is built into Home Assistant; you do not need to install HACS first.
2. If Pastel UI is not in the catalog yet, select **Add from link** in the Marketplace and enter `https://github.com/Angelofsin666/pastel-ui`. The Marketplace may ask you to connect a GitHub account before adding a custom repository.
3. Reload the browser after installation, then add a Pastel card through the dashboard's card picker. Replace all `demo` example entities with your own.

The Marketplace normally registers the dashboard resource automatically. If you manage resources in YAML, use the path shown in its installation dialog. New Marketplace resources use `/local/community/`; the older `/hacsfiles/` path continues to work for migrated HACS installations. See the [official Marketplace guide](https://www.home-assistant.io/integrations/marketplace/) for details.

### HACS (older Home Assistant versions)

[![Open Pastel UI in Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

1. Install and configure HACS first. This project supplies frontend cards, not device integrations.
2. Search HACS for **Pastel UI** and open the Dashboard repository. It was [accepted into the default HACS list](https://github.com/hacs/default/pull/13773); if it does not appear yet, use the blue button or add `https://github.com/Angelofsin666/pastel-ui` under custom repositories, category **Dashboard**.
3. Download the latest stable release.
4. Check Settings → Dashboards → Resources. There should be one JavaScript Module resource: `/hacsfiles/pastel-ui/pastel-ui.js`. Add it only if HACS did not register it. Advanced mode may be needed to see Resources; YAML-managed dashboards declare resources in YAML instead.
5. Reload the frontend and add a card through the visual editor. Replace all `demo` example entities with your own.

### Manual

Download the two files from `dist/`: `pastel-ui.js`, `lawn-mower.png`. Put them together in `/config/www/pastel-ui/`. Add `/local/pastel-ui/pastel-ui.js` as a **JavaScript Module** resource. Reload the frontend. Manual installations do not receive HACS update notifications.

### Updates and troubleshooting

Update **Pastel UI** in Marketplace or HACS, then reload the frontend. If old content remains, reload with the browser cache cleared. Do not load the old standalone resources alongside the suite. If discovery cannot read the device registries, choose entities manually. If no release appears, refresh the repository information and verify that the stable release is selected.

See [migration](migration.md) before replacing an existing Pastel installation. HACS reference: [Dashboard repositories](https://hacs.dev/docs/publish/plugin/) and [My Home Assistant links](https://hacs.dev/docs/use/my/).

## Italiano

### Home Assistant Marketplace (2026.11 e successivi)

1. Apri **Impostazioni → Marketplace**, cerca **Pastel UI**, apri la sua pagina e scegli **Installa**. Marketplace è integrato in Home Assistant: non serve installare HACS.
2. Se Pastel UI non compare ancora nel catalogo, scegli **Aggiungi da link** nel Marketplace e inserisci `https://github.com/Angelofsin666/pastel-ui`. Per aggiungere una repository personalizzata, Marketplace potrebbe chiederti di collegare un account GitHub.
3. Ricarica il browser dopo l'installazione, poi aggiungi una card Pastel dal selettore della dashboard. Sostituisci tutte le entità dimostrative `demo` con le tue.

Marketplace registra normalmente la risorsa della dashboard in automatico. Se gestisci le risorse in YAML, usa il percorso indicato nella finestra di installazione. Le nuove risorse Marketplace usano `/local/community/`; il vecchio percorso `/hacsfiles/` continua a funzionare per le installazioni migrate da HACS. Per i dettagli consulta la [guida ufficiale di Marketplace](https://www.home-assistant.io/integrations/marketplace/).

### HACS (versioni precedenti di Home Assistant)

1. Installa e configura HACS. Pastel UI fornisce card, non le integrazioni dei dispositivi.
2. Cerca **Pastel UI** in HACS e apri la repository Dashboard. È stata [accettata nell'elenco predefinito di HACS](https://github.com/hacs/default/pull/13773); se non compare ancora, usa il pulsante azzurro oppure aggiungi `https://github.com/Angelofsin666/pastel-ui` come repository personalizzata, categoria **Dashboard**.
3. Scarica l’ultima versione stabile.
4. Controlla Impostazioni → Dashboard → Risorse: deve esserci una sola risorsa **JavaScript Module** `/hacsfiles/pastel-ui/pastel-ui.js`. Aggiungila solo se HACS non l'ha registrata. Potrebbe servire la modalità avanzata; per dashboard gestite in YAML la risorsa va dichiarata nel relativo YAML.
5. Ricarica l'interfaccia e aggiungi una card dall'editor. Sostituisci le entità `demo` degli esempi con le tue.

### Manuale

Scarica i due file di `dist/`: `pastel-ui.js`, `lawn-mower.png`. Mettili insieme in `/config/www/pastel-ui/`. Aggiungi `/local/pastel-ui/pastel-ui.js` come risorsa **JavaScript Module**, poi ricarica. L'installazione manuale non riceve notifiche HACS.

### Aggiornamenti e problemi comuni

Aggiorna **Pastel UI** da Marketplace o HACS, poi ricarica l'interfaccia. Se resta la vecchia versione, ricarica svuotando la cache. Non caricare contemporaneamente i file delle vecchie card. Se il riconoscimento non può leggere i registri, associa le entità manualmente. Se non compare la release, aggiorna le informazioni della repository e verifica che sia selezionata la versione stabile.

Leggi la [migrazione](migration.md) prima di sostituire le card esistenti.
