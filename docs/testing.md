## v1.1.0 — Nine equipment cards / Nove card per dispositivi

English: `npm run check` verifies all 12 test files and builds the bundle. New tests cover nine unique registrations, user-supplied associations, action-service mapping and unavailable readings. The local browser demo rendered all nine with fictional entities and no console errors; Sump Pumps was visually checked at 390 px with no horizontal overflow. These checks do not claim physical-device compatibility for every integration.

Italiano: `npm run check` verifica tutti i 12 file di test e genera il pacchetto. I nuovi test coprono nove registrazioni distinte, entità scelte dall'utente, associazione dei servizi e valori non disponibili. La demo locale ha mostrato tutte e nove le card con entità fittizie e senza errori nella console; Sump Pumps è stata controllata a 390 px senza scorrimento orizzontale. Non equivale a una verifica su tutte le integrazioni fisiche.

## v1.0.2 — Lawn Mower preview / Anteprima tagliaerba

The screenshot is generated from the new card using fictional demo data. Local Chromium rendered it at 320, 390 and 430 px without page errors or horizontal overflow. Native action buttons were checked against simulated Home Assistant feature flags. No real mower was commanded.

L’immagine è generata dalla nuova card con dati fittizi. Chromium locale l’ha verificata a 320, 390 e 430 px, senza errori o scorrimento orizzontale. I pulsanti nativi sono stati controllati con funzioni Home Assistant simulate; nessun tagliaerba reale è stato comandato.

## v1.0.0 — current validation / verifiche attuali

### English

`npm run check` runs all automated test suites and builds the distributable bundle. The new Christmas Tree tests cover real light/helper readback, external state changes, unavailable entities, action availability and configuration validation. Local Chromium checks rendered the Christmas Tree card at 320, 390 and 430 px with no horizontal overflow or browser errors, and opened its editor with four configurable atmospheres. The screenshot uses fictional demo data. The full suite and its legacy cards have been exercised in simulated browser/tests across the beta releases; this is not a claim that every physical integration has been verified. The maintainer checked HACS download and frontend resource registration on a live Home Assistant installation during beta.12; the 1.0 Christmas Tree has not yet controlled a physical tree.

The source audit found no fixed personal entity IDs in `src/`. All live entity selection comes from user configuration or Home Assistant state/registries. Example `*.demo_*` IDs are confined to demo fixtures/documentation. The generic Alarm stub no longer names the maintainer’s alarm; saved titles are preserved. Some advanced controls require YAML configuration.

### Italiano

`npm run check` esegue tutti i test automatici e costruisce il pacchetto. I nuovi test Christmas Tree coprono lettura reale di luce/aiutante, cambi esterni, entità non disponibili, azioni e configurazione. Chromium locale ha renderizzato la card a 320, 390 e 430 px senza errori né scorrimento orizzontale e ha aperto l’editor con quattro atmosfere. L’immagine usa dati fittizi. Le altre card sono state controllate con test/demo simulati durante le beta; non significa che ogni integrazione fisica sia verificata. Durante la beta.12 il manutentore ha verificato download HACS e risorsa frontend nel proprio Home Assistant; la card Christmas Tree 1.0 non ha comandato un albero fisico.

Nel codice `src/` non ci sono ID fissi di entità personali. Le entità reali sono scelte nella configurazione o lette da Home Assistant. Gli ID `demo_*` restano nella demo/documentazione. Il nome iniziale di Alarm è neutro, senza cambiare i titoli salvati. Alcuni comandi avanzati richiedono YAML.

## Historical beta validation / Verifiche storiche

## beta.11 Lights and Covers

Tests cover capability-gated light brightness/temperature/RGB and cover commands; invalid or unavailable states; real readback without optimistic changes; group filtering; string/object source compatibility; legacy aliases and energy configuration; filtered editors; and pointer gestures that cancel on scrolling, cancellation and disconnection. Browser checks cover 320/390/430 widths, touch target sizes, keyboard brightness, RGB, native cover service calls, state replacement, legacy single-cover rendering, editors and light/dark rendering. No real devices are operated during these checks.

## beta.10 temperature redesign

Temperature coverage checks live averages and room extremes, unavailable/invalid data, zero and negative readings, mixed-unit conversion, optional thresholds/scales, recorder failures and stale history responses after reconfiguration. Browser checks cover the tile layout, real state replacement, more-info events, the filtered editor, add/reorder/rename, palette changes, light/dark and narrow screens. No real devices are controlled.

## beta.9 registry regression

Home Assistant exports a reference to `window.customCards`; replacing that array leaves subsequent additions invisible to the picker. The regression tests capture the reference before suite registration, verify both alarm entries through that reference, preserve third-party entries and metadata extensions, and check repeat registration and all 19 public names. Browser verification reproduces beta.8’s missing alarm entries and confirms beta.9 renders their default cards and editors using the retained array. The installed Home Assistant resource was checked read-only and matched the published beta.8 bundle before this fix.

# Compatibility and testing / Compatibilità e test

## Catalog cleanup — v0.1.0-beta.8

The three retired native Climate, IR Climate and Thermostat implementations and their now-obsolete tests are removed. Remaining regression suites pass. Browser verification checks exactly 17 registered card types, absence of the retired elements/editors, the new display names, rendering of the current gallery and operation of existing AC/Stove configurations with unchanged type IDs. Historical sections below describe checks performed before the removals.

## Alarm & Security — v0.1.0-beta.7

Fourteen added unit tests cover native feature/service gating, mixed script/native dispatch, real panel-state rendering, temporary code handling, counter validation, binary/numeric detectors, missing-data precedence, source filtering and editor configuration. Chromium checks both cards together, native/script calls, synchronized state, PIN request/cancel/clear, detector alarms and missing values, 320px/390px light/dark layouts, and both visual editors. No live alarm was armed, disarmed or triggered; all checks use simulated Home Assistant data.

## Script Climate — v0.1.0-beta.6

Nine added unit tests cover temperature-sensor filtering, script availability and dispatch, service errors, live readings, optional real-state indicators, editor filtering and button edits. Chromium verifies script calls, changing sensor readings, 320px/390px layouts in light/dark themes, fifteen wrapping buttons, unavailable scripts, script/temperature suggestions, visual icon selection, renaming, per-button colors, reordering and saved configurations. All tests use simulated Home Assistant data; no air conditioner was operated.

## Helper synchronization — v0.1.0-beta.5

Unit coverage verifies per-control helper filtering, a shared helper source for the control and upper temperature metric, compatibility with prior configurations, and exclusive/removable temperature linkage. Chromium checks verify selecting and saving helpers, real script service dispatch with simulated counter updates, external counter changes, and unavailable values. All checks use simulated Home Assistant data, without operating a physical stove.

## Stove validation — v0.1.0-beta.3

Twelve additional unit tests cover the original six-phase priority, combined ignition conditions, missing data, AND/OR and attribute comparisons, numeric readings, timers, script dispatch and limits/config editing. The full existing test suite and distribution build pass.

Chromium checks with simulated Home Assistant data verify script calls and reactive flame/temperature values, 320px/390px layouts in light and dark themes, fourteen wrapping action buttons, and adding/saving controls, steppers and state rules through the visual editor. No physical stove was operated. HACS installation and real-device validation remain pending.

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
