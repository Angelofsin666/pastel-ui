# Changelog

## 0.1.0-beta.12

- Add Pastel Weather with current readings and live daily forecasts from the selected Home Assistant weather entity.
- Add Pastel TV with capability-aware power, playback, volume and source controls for a selected media player.
- Add visual editors with filtered entity search, editable names and Pastel color settings; 19 public card types.
- L'albero di Natale resta una proposta grafica da approvare prima dell'integrazione.

## 0.1.0-beta.11

- Redesign Pastel Lights with the approved smartphone list, large power buttons, full-width sliders and capability-based color/white controls.
- Add Pastel Covers with grouped tiles, real open/stop/close and position controls, optional energy, and the approved roller-shutter drawing.
- Preserve standalone `light-card` and `tapparella-card` configurations with compatibility aliases inside the single suite; 17 public card types.
- Consolidate picker documentation links on pastel-ui and document standalone resource removal.
- Add mobile gesture and capability regression coverage. Sliders cancel during scrolling and commit once on release.

## 0.1.0-beta.10

- Redesign Pastel Temperature with the approved room-tile layout, shared theme, thermometer illustration, current min/max, optional humidity and history trends.
- Add the shared editor with filtered sensor search, room names/icons/colors and reorder controls; retain Temperature type ID and existing room configuration.
- Handle missing data explicitly and normalize °C/°F/K before averaging.
- Remove Pastel Temperature & Humidity and its editor, documentation and demo; 16 active card types remain. See migration guidance before updating retired dashboard cards.

## 0.1.0-beta.9

- Fix missing alarm picker entries: mutate the existing custom-card registry instead of replacing Home Assistant’s retained array.
- Centralize all 17 public names and English descriptions; use consistent Pastel names without the Card suffix.
- Preserve type IDs, user configurations, unrelated registry entries and existing metadata extensions.
- Add regression coverage for cached registry references, duplicate registrations and naming.

## 0.1.0-beta.8

- **Breaking:** remove the old native Pastel Climate, custom-action/IR Climate and Pastel Thermostat cards, their editors and unused AC image asset.
- Keep the new script-driven AC card as **Pastel Climate AC**, and rename Pastel Stufa to **Pastel pellet stove** in the picker.
- Keep `custom:pastel-script-climate-card` and `custom:pastel-stove-card` unchanged so saved configurations of the new cards continue to work.
- Clean up the catalog, demo and current documentation; 17 active card types remain. See migration notes before updating dashboards that still use retired types.

## 0.1.0-beta.7

- Add Pastel Allarme with editable Protego title, visual icon/palette controls, and independently configurable native or script buttons.
- Read alarm state from the selected panel, gate native commands by features/services, and request required codes transiently without saving them in card configuration.
- Add Pastel Riepilogo Sicurezza with editable/reorderable alarm, opening-count and detector tiles. Missing data is not treated as zero or OK; numeric detectors require explicit thresholds.
- Include visual editors, bilingual documentation and simulated unit/browser checks. Existing cards remain compatible.
- Nuove card Allarme e Riepilogo Sicurezza con nomi, icone, colori, comandi e sensori configurabili.

## 0.1.0-beta.6

- Add Pastel Clima Script, a script-driven air-conditioner card matching the shared Pastel/Stove style.
- Simple visual editor: temperature sensor search, script-only button search, visual icon grid, editable names, card/button palettes and arbitrary wrapping buttons.
- Optional real-state helpers for the header and button indicators; script running/idle state never implies HVAC power.
- Preserve existing Thermostat, native Climate and custom-action card types. Add simulated unit/browser coverage and bilingual documentation.
- Nuova card Clima Script con editor semplice, scelta visiva delle icone, script e sensore di temperatura.

## 0.1.0-beta.5

- Expose a clearly labelled numeric-helper field in every stove minus/plus control; suggestions include only counter and input_number helpers.
- Add an explicit link from a temperature control’s helper to the upper target-temperature reading, keeping both values synchronized from Home Assistant.
- Preserve existing `entity` configurations and optional user-defined bounds; no optimistic counter changes or extra counter service calls.
- Aiutante del valore per ogni controllo, ricerca dei soli aiutanti numerici e collegamento opzionale alla temperatura impostata in alto.

## 0.1.0-beta.4

- Replace stove entity dropdowns with searchable suggestions and free entity-ID input.
- Script action fields suggest scripts only; pellet accepts any entity ID and temperature/value fields suggest numeric entity domains.
- Keep minimum/maximum limits optional and entirely user-defined. Existing configurations remain valid.
- Correzioni editor Stufa: ricerca e inserimento entità, suggerimenti dei soli script per i comandi, limiti −/+ liberi e opzionali.

## 0.1.0-beta.3

- Add Pastel Stufa / pellet stove with a full visual editor, configurable action buttons and independent minus/plus script controls.
- Add ordered state rules with AND/OR conditions, timer countdowns and missing-data handling.
- Add pellet percentage, configurable warning threshold, shared Pastel palettes and optional custom background/colors.
- Include a stove demo and regression tests; existing card types are preserved.
- Nuova Pastel Stufa con editor visuale, script, sensori, regole di stato e timer. Test con dati simulati; suite ancora in beta.

## 0.1.0-beta.2

### English

- Automatically discover recognized appliances when opening the editor. Selecting one immediately proposes associated sensors and controls.
- Keep manual selection for unrecognized devices and external meters.
- Recognize Italian hob names and accented coffee names. Filter robot discovery to robot profiles.
- Add four discovery regression tests. Real-device testing remains ongoing.

### Italiano

- Ricerca automatica degli elettrodomestici all’apertura dell’editor. La selezione propone subito sensori e controlli associati.
- Scelta manuale disponibile per dispositivi non riconosciuti e misuratori esterni.
- Riconoscimento di pianocottura e nomi accentati; ricerca robot filtrata.
- Quattro nuovi test di regressione. Test sui dispositivi reali ancora in corso.

## 0.1.0-beta.1

### English

- Single HACS bundle with 14 existing card types and new Appliance/Robot cards.
- Reviewed device discovery and editable associations, including external meters and water purifier measurements.
- Native climate redesign preserving the existing main configuration fields.
- Local rendering dependencies and bundled default images.
- Touch gesture fixes for lights, openings and thermostat controls.
- English-first documentation, Italian translations, 17 rendered examples and My Home Assistant buttons.
- Beta: physical-device and live Home Assistant migration testing still pending.

### Italiano

- Pacchetto HACS unico con 14 tipi esistenti più Appliance/Robot.
- Ricerca dispositivi con associazioni da verificare, misuratori esterni e depuratore acqua.
- Redesign clima nativo compatibile con i principali campi esistenti.
- Librerie e immagini predefinite incluse nel pacchetto.
- Correzioni touch per luci, aperture e termostato.
- Documentazione inglese/italiana, 17 esempi renderizzati e pulsanti My Home Assistant.
- Beta: restano i test sui dispositivi e sulla migrazione Home Assistant reale.
