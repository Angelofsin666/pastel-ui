# Dedicated device cards

## English

Pastel UI 1.1 added nine cards, version 1.2 added eleven, and version 1.3 adds five more. They share a phone-friendly layout: a live main reading, optional status badge, profile-specific measurements and any number of action buttons. The cards do not create sensors or infer that a command succeeded. Every value comes from the Home Assistant entity you choose. A missing or unavailable value displays `—`; an unconfigured button stays disabled.

| Card | Type | Main reading and optional metrics |
|---|---|---|
| Pastel Pool | `custom:pastel-pool-card` | Water temperature; pH, free chlorine, filtration |
| Pastel Sump Pumps | `custom:pastel-sump-pumps-card` | Basement sump-pit level; pump A/B and flood alarm |
| Pastel Water Booster | `custom:pastel-water-booster-card` | Water pressure; flow, pump state, target pressure |
| Pastel Coffee Machine | `custom:pastel-coffee-machine-card` | Machine state; water, beans, maintenance |
| Pastel Air Fryer | `custom:pastel-air-fryer-card` | Time remaining; temperature, programme, power |
| Pastel Boiler | `custom:pastel-boiler-card` | Heating supply temperature; pressure, burner, mode |
| Pastel Hot Water | `custom:pastel-hot-water-card` | Domestic hot-water tank temperature; target, heating, energy |
| Pastel EV Charger | `custom:pastel-ev-charger-card` | Charging power; session energy, current limit, finish estimate |
| Pastel Pool Robot | `custom:pastel-pool-robot-card` | Cleaning progress; battery, mode, time remaining |
| Pastel 3D Printer | `custom:pastel-3d-printer-card` | Print progress; nozzle, bed, time and filament |
| Pastel Printer | `custom:pastel-printer-card` | Printer state; ink/toner, paper, queue and error |
| Pastel Rainwater Tank | `custom:pastel-rain-tank-card` | Rainwater level; volume, inflow, outflow and overflow |
| Pastel Ventilation | `custom:pastel-ventilation-card` | VMC air quality; CO₂, humidity, speed and filter |
| Pastel Range Hood | `custom:pastel-range-hood-card` | Extractor speed; power, light, filter and air quality |
| Pastel Litter Robot | `custom:pastel-litter-robot-card` | Waste drawer level; cycle, litter, weight and last clean |
| Pastel Pet Bowls | `custom:pastel-pet-bowls-card` | Water level; food, reservoir, filter and last feeding |
| Pastel Chicken Feeder | `custom:pastel-chicken-feeder-card` | Feed level; next feed, portions, motor and battery |
| Pastel Irrigation | `custom:pastel-irrigation-card` | System state, next run and water use; unlimited zones |
| Pastel Solar | `custom:pastel-solar-card` | Solar production; home, grid, battery and daily energy |
| Pastel Home Battery | `custom:pastel-home-battery-card` | State of charge; power, mode, autonomy and energy |
| Pastel Garage & Gate | `custom:pastel-garage-gate-card` | Garage cover (“Basculante” by default), gate and obstacle state |
| Pastel Doorbell | `custom:pastel-doorbell-card` | Camera preview, motion and last call |
| Pastel Smart Lock | `custom:pastel-smart-lock-card` | Lock state, door contact, battery and last access |
| Pastel Air Quality | `custom:pastel-air-quality-card` | CO₂, PM2.5, humidity, temperature and VOC |
| Pastel Water Safety | `custom:pastel-water-safety-card` | Main valve, water use, flow and any number of leak sensors |

All twenty-five dedicated equipment cards have a visual editor. Pick a palette, rename the card and every reading, search for your sensor or helper, then add, rename, reorder and recolour buttons. Buttons can call `script`, `scene`, `button`, `input_button`, `switch`, `input_boolean` or `automation` entities. An optional `action` overrides the inferred service, for example `script.turn_off`. More advanced service `data` and `target` fields can be supplied in YAML. A configured status entity supplies the header badge. The editor never inserts the maintainer's entity IDs.

```yaml
type: custom:pastel-sump-pumps-card
title: Basement flood protection
state_entity: binary_sensor.example_flood_alarm
hero_entity: sensor.example_sump_level
hero_label: Sump-pit level
metrics:
  pump_a: binary_sensor.example_sump_pump_a
  pump_b: binary_sensor.example_sump_pump_b
  alarm: binary_sensor.example_flood_alarm
buttons:
  - name: Test pump A
    icon: mdi:water-pump
    entity: script.example_test_sump_pump_a
```

`Pastel Sump Pumps` is for basement flood-prevention pumps, not rainwater collection. Only configure actions supported by your installation. A visual button does not replace a physical flood alarm or safety controller.

`Pastel Irrigation` adds an optional `zones` list. Each zone can have its own name, `state_entity`, `start_entity` and `stop_entity`; there is no fixed zone count. The editor provides these fields, and both controls remain disabled until configured. The reading in each row follows the zone state entity. For script-driven controllers, associate the relevant script with each command.

`Pastel Solar` and `Pastel Home Battery` show the readings you associate without guessing import/export direction from a signed number. Use sensors whose names and units match the metric labels, or rename the labels in the editor. Percentage readings on the main panel also show a level bar. The same bar can show tank, feeder and other percentage levels.

### New in 1.3: access and safety

**Garage & Gate** reads a selected `cover` entity for the Basculante and offers its native open, stop and close actions when supported. The gate and obstacle readings can be associated separately. **Smart Lock** reads a `lock` entity and offers lock, unlock and open when its integration supports them. **Water Safety** reads a `valve` and can list any number of individually named `binary_sensor` leak detectors. Buttons only enable when the corresponding Home Assistant service and device feature are available.

**Doorbell** accepts any entity in the `camera` domain. Its still preview uses that camera's `entity_picture`, or Home Assistant's camera proxy. The Live button opens Home Assistant's native camera viewer, so stream support follows the selected camera integration. Add as many extra script buttons as needed, for example to open a gate. **Air Quality** takes your chosen CO₂ sensor and optional PM2.5, humidity, temperature and VOC sensors.

The visual editor lets you change names, colours, entities and extra buttons. For native cover, lock and valve actions, the default button labels and colours can also be changed. No entity IDs are preselected.

```yaml
type: custom:pastel-doorbell-card
title: Front door
camera_entity: camera.example_front_door
metrics:
  motion: binary_sensor.example_door_motion
buttons:
  - name: Open gate
    icon: mdi:gate
    entity: script.example_open_gate
```

## Italiano

Pastel UI 1.1 ha aggiunto nove card e la versione 1.2 ne aggiunge altre undici, tutte comode sul telefono: valore principale aggiornato, stato opzionale, altri valori facoltativi e quanti pulsanti servono. Ogni valore arriva dall'entità Home Assistant scelta; se manca o non è disponibile appare `—`. I pulsanti senza comando associato restano disabilitati.

Le card sono **Pool** (piscina), **Sump Pumps** (pompe anti-allagamento del sotterraneo), **Water Booster** (pompa di rilancio), **Coffee Machine**, **Air Fryer**, **Boiler** (caldaia del riscaldamento), **Hot Water** (acqua calda sanitaria), **EV Charger** e **Pool Robot**. La tabella inglese sopra indica gli ID e i valori previsti.

Si aggiungono **3D Printer**, **Printer**, **Rainwater Tank** (raccolta acqua piovana), **Ventilation** (VMC), **Range Hood** (cappa cucina), **Litter Robot**, **Pet Bowls** (acqua e cibo), **Chicken Feeder**, **Irrigation**, **Solar** e **Home Battery**. I nomi e gli ID sono nella tabella sopra.

Nell'editor visuale puoi scegliere colore, nomi, sensori o aiutanti e aggiungere, ordinare e colorare liberamente i pulsanti. I comandi possono richiamare script, scene, pulsanti, interruttori o automazioni. Per servizi particolari puoi indicare `action` in forma `dominio.servizio`; `data` e `target` sono disponibili in YAML. Lo stato in alto usa l'entità associata, non l'ultimo comando premuto. Nessun ID personale dello sviluppatore è preimpostato.

**Sump Pumps** indica le pompe che impediscono l'allagamento di cantine o locali interrati, non le pompe di raccolta dell'acqua piovana. Associa soltanto funzioni effettivamente supportate dal tuo impianto.

**Irrigation** accetta un numero libero di zone. Ogni zona ha nome, entità di stato, comando di avvio e comando di arresto separati. I pulsanti senza entità restano disabilitati; lo stato letto non viene dedotto dall'ultimo comando. **Solar** e **Home Battery** mostrano i sensori associati senza dedurre automaticamente il verso dei flussi elettrici dai segni dei valori. Per i valori principali in percentuale compare anche una barra di livello.

### Novità 1.3: accessi e sicurezza

**Garage & Gate** usa una tua entità `cover` per la Basculante, con i comandi nativi Apri, Ferma e Chiudi supportati dal dispositivo; puoi associare separatamente cancello e sensore ostacoli. **Smart Lock** legge una serratura `lock` e offre i comandi supportati. **Water Safety** legge una valvola `valve` e un numero libero di sensori perdite `binary_sensor`, ciascuno con il suo nome. I pulsanti si attivano solo quando il servizio e la funzione sono disponibili.

**Doorbell** accetta qualsiasi entità `camera`, senza limitazioni per marca o integrazione. L'anteprima usa l'immagine dell'entità o il proxy di Home Assistant; Live apre il visualizzatore nativo della telecamera. Puoi aggiungere pulsanti script, per esempio per aprire un cancello. **Air Quality** mostra il sensore CO₂ scelto e, se presenti, PM2.5, umidità, temperatura e VOC.

L'editor permette di cambiare nomi, colori, entità e pulsanti aggiuntivi. Anche nomi e colori dei pulsanti nativi sono configurabili. Nessuna entità personale è preimpostata.
