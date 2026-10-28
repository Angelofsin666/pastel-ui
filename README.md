# Pastel UI

A coordinated collection of Home Assistant cards for lights, climate, appliances, robots and household sensors. One HACS installation with 17 active card types.

[English](#english) · [Italiano](#italiano) · [Card gallery](docs/catalog.md) · [Installation](docs/installation.md) · [Migration](docs/migration.md)

[![Open your Home Assistant and add Pastel UI to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

![Pastel UI with simulated appliance, water purifier and robot data](docs/images/overview.png)

## English

**Status: 0.1 beta.** The cards have been tested with simulated Home Assistant data. Real-device integration testing is the next step. This is a custom HACS repository, not a Home Assistant built-in feature or a HACS default repository.

### What's inside

- **Alarm & Security:** configurable native/script alarm buttons and a security overview with real alarm, opening-count and detector entities. [Configuration](docs/cards/security.md).

- **Script Climate:** script buttons with a visual icon picker, editable labels and colors, and a temperature sensor. [Configuration](docs/cards/script-climate.md).

- **Pellet Stove:** configurable script buttons, independent minus/plus controls, pellet percentage and ordered state rules with timers. [Configuration](docs/cards/stove.md).

- **Appliance:** choose a device or entity, review related sensors and controls, and save the associations. Profiles cover laundry, kitchen appliances, air treatment, water heaters and water purifiers.
- **Robot:** capability-based vacuum and mower controls, optional map image, and room/zone selectors or existing scripts/buttons.
- **Existing Pastel cards:** lights, buttons, openings, doors/windows, motion, leaks, smoke/CO, temperature, humidity, dishwasher and mower keep their current type names.

The bundle contains its rendering libraries: there are no runtime CDN imports. Your existing Home Assistant integrations still determine which device functions and data are available.

### Upgrade note — beta.8

Pastel Climate, the old custom-action/IR Climate, and Pastel Thermostat have been removed. Use **Pastel Climate AC**. Existing new AC/Stove configurations keep their type IDs. See [migration](docs/migration.md) before updating a dashboard that still uses a retired type.

### Installation

Open the blue button above with HACS installed. Alternatively, add `https://github.com/Angelofsin666/pastel-ui` under HACS custom repositories, category **Dashboard**. During the beta, enable pre-release versions and choose `v0.1.0-beta.8`, or explicitly download `main`.

Verify that the JavaScript module resource is registered as:

```yaml
url: /hacsfiles/pastel-ui/pastel-ui.js
type: module
```

Reload the frontend, then add a **Pastel Appliance** or **Pastel Robot** card through the visual editor. The editor automatically lists recognized appliances. Choose one to review its related sensors and controls; manual selection remains available. Review the proposed profile, measurements and controls before applying them. The beta editor currently uses Italian labels; the installation and card documentation are bilingual.

Already using individual Pastel cards? Read the [migration guide](docs/migration.md) before switching resources. You should not need to rebuild the dashboard, but resource paths and custom image overrides must be checked.

### Know what is supported

Discovery uses Home Assistant's device and entity registries. Ambiguous matches are left for you to choose. You can assign sensors from an external power meter and add controls manually. A profile does not create entities or unlock unsupported device commands.

Power (W/kW) and energy (Wh/kWh) are separate. Cycle energy requires an existing cycle-energy sensor; this frontend does not calculate persistent cycle totals. Robot maps are images supplied by the integration, not an interactive floor-plan editor. Zone commands use the selectors, buttons or scripts you configure; there are no brand-specific map adapters yet.

[Explore all cards](docs/catalog.md) · [Configuration reference](docs/configuration.md) · [Compatibility and test status](docs/testing.md)

If you try the beta, please report the integration name, device model and which associations worked. Remove personal entity IDs and credentials from reports. If the collection is useful to you, a GitHub star helps others find it.

## Italiano

**Stato: beta 0.1.** Le card sono state provate con dati Home Assistant simulati. Il prossimo passo è la verifica con dispositivi reali. Questa è una repository personalizzata HACS, non una funzionalità ufficiale di Home Assistant né una repository predefinita di HACS.

### Cosa include

- **Allarme e Sicurezza:** pulsanti nativi o script e riepilogo di allarme, aperture e sensori reali, con editor visuali. [Configurazione](docs/cards/security.md).

- **Clima Script:** pulsanti script con scelta visiva delle icone, nomi e colori personalizzabili e sensore di temperatura. [Configurazione](docs/cards/script-climate.md).

- **Stufa a pellet:** pulsanti script configurabili, controlli −/+, percentuale pellet e regole di stato con timer. [Configurazione](docs/cards/stove.md).

- **Appliance:** scegli un dispositivo o un'entità, controlla sensori e comandi associati, poi salva. I profili comprendono lavanderia, cucina, trattamento aria, scaldacqua e depuratori d'acqua.
- **Robot:** comandi per aspirapolvere e tagliaerba basati sulle capacità dichiarate, immagine della mappa opzionale e selettori o script/pulsanti per stanze e zone.
- **Card Pastel esistenti:** luci, pulsanti, aperture, porte/finestre, presenza, perdite, fumo/CO, temperatura, umidità, lavastoviglie e tagliaerba mantengono i nomi attuali.

Il pacchetto include le librerie grafiche, senza scaricarle da CDN durante l'uso. Le integrazioni di Home Assistant continuano a determinare le funzioni effettivamente disponibili.

### Aggiornamento beta.8

Rimosse Pastel Climate, la vecchia Climate con azioni personalizzate/IR e Pastel Thermostat. Resta **Pastel Climate AC**. Le configurazioni delle nuove AC e Stufa mantengono i propri identificativi. Per dashboard con card rimosse leggi la [migrazione](docs/migration.md).

### Installazione

Con HACS installato, usa il pulsante azzurro in alto. In alternativa aggiungi `https://github.com/Angelofsin666/pastel-ui` alle repository personalizzate HACS, categoria **Dashboard**. Durante la beta abilita le versioni preliminari e scegli `v0.1.0-beta.8`, oppure scarica esplicitamente `main`.

Verifica la risorsa JavaScript Module `/hacsfiles/pastel-ui/pastel-ui.js`, poi ricarica l'interfaccia. Aggiungi **Pastel Appliance** o **Pastel Robot** dall'editor visuale, seleziona dispositivo o entità principale e avvia la ricerca. Controlla profilo, dati e comandi proposti prima di applicarli.

Se usi già le singole card, segui la [guida alla migrazione](docs/migration.md). Non dovrebbe essere necessario ricostruire la dashboard, ma vanno verificati risorse e percorsi delle immagini personalizzate.

### Compatibilità

Il riconoscimento usa i registri dispositivi ed entità. Le corrispondenze ambigue restano da scegliere. Puoi collegare un misuratore esterno e aggiungere comandi manualmente; il profilo non crea nuove entità o capacità.

Potenza ed energia sono separate. L'energia del ciclo richiede un sensore dedicato: la card non conserva totali persistenti. La mappa del robot è un'immagine fornita dall'integrazione; le zone usano selettori, pulsanti o script configurati. Non sono ancora presenti adattatori per mappe specifici dei singoli marchi.

[Galleria](docs/catalog.md) · [Configurazione](docs/configuration.md) · [Stato dei test](docs/testing.md)

Tutte le immagini mostrano dati fittizi. Segnalazioni su modello, integrazione e associazioni ci aiutano a migliorare la compatibilità. Se la suite ti è utile, una stella su GitHub aiuta a farla conoscere.
