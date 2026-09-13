# Compatibility and testing / Compatibilità e test

## English

This beta has been validated in a local browser with simulated Home Assistant objects, not against a live Home Assistant installation. No real appliances have been operated by these tests.

### Automated checks

43 unit tests cover discovery scoped to device IDs, ambiguous and disabled entities, registry caching and failures, power/energy units, maintenance associations, robot feature gating, climate target limits, service errors, and gesture regressions for lights, openings and the thermostat. `npm run check` runs the tests and creates the distribution bundle.

### Browser checks

- All 16 registered card types render in the demo; 17 screenshots include a second Appliance configuration for the water purifier.
- New cards checked in the light and dark demo themes, and narrow card layouts.
- Climate target increase and appliance programme selection produce the expected simulated service call.
- Discovery proposes the washer profile and associations, and saves the configuration through the editor event.
- New illustrations and map preview render from local assets; all sample entities are fictional.

### Real-device checks before a stable release

- HACS download, resource registration, full frontend reload and rollback on the test installation.
- Migration of each existing card type actually used by the installation, including custom images and custom/IR climate actions.
- Device discovery under the user's actual permissions and integration registry entries.
- Programme, pause, temperature, native robot actions and external energy-sensor associations for the chosen integrations.
- Physical touch scrolling, long holds and slider behaviour in the Home Assistant app/browser on the user's device.
- Map image availability and room/zone controls for each robot integration. This beta does not include vendor map adapters or floor-plan zone drawing.

Device-family profiles are not a model compatibility list. There are currently no verified real-device/model claims in this repository. Water purifier readings are displayed as reported; no water-quality certification or filter-life estimation is performed. Numeric durations and cycle-energy values require corresponding sensors.

### Development

Use Node.js 20 or newer. Run `npm ci`, then `npm run check`. To view the gallery, serve the project parent folder and open `/pastel-ui/demo/`; the demo's simulated map URL follows that path. `node scripts/demo-icons.mjs` regenerates the demo icon subset. The suite itself does not depend on the demo or on a running development server.

## Italiano

Questa beta è stata verificata in un browser locale con dati Home Assistant simulati, non su un'installazione reale. I test non hanno azionato elettrodomestici reali.

I 43 test automatici coprono riconoscimento, associazioni ambigue, registri e relativi errori, consumi, manutenzione, capacità robot, limiti clima, errori dei comandi e regressioni touch di luci/aperture/termostato. `npm run check` esegue i test e costruisce il pacchetto.

Nel browser sono state renderizzate tutte le 16 card; le 17 immagini includono l'esempio del depuratore. Le nuove card sono state controllate nei temi chiaro/scuro e in formato stretto. Sono stati verificati i comandi simulati di temperatura e programma, oltre alla proposta e al salvataggio delle associazioni nell'editor.

Prima di una release stabile restano da provare HACS, migrazione/rollback, entità reali, comandi, touch fisico e mappe/zone delle integrazioni usate. I profili non sono una lista di modelli certificati. Non ci sono ancora dichiarazioni di compatibilità con dispositivi reali. La beta non comprende adattatori per mappe proprietarie o disegno di zone.

Per sviluppare: Node.js 20+, `npm ci`, `npm run check`. La demo si apre servendo la cartella padre su `/pastel-ui/demo/`. Il pacchetto da installare non richiede la demo o un server di sviluppo.
