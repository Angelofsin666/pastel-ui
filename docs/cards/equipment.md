# Dedicated device cards

## English

The nineteen new 1.6 profiles use the same large Pastel illustration, editable palette, names, main reading, optional measurements, state badge and any number of script/entity buttons. **Skylight** accepts a native `cover` and shows its live opening percentage and supported position control. No entity is preselected.

Pastel UI 1.1 added nine cards, version 1.2 added eleven, version 1.3 added five, version 1.4 added eight more equipment cards, version 1.5 added two heating cards, and version 1.6 adds nineteen more equipment cards. They share a phone-friendly layout: a live main reading, optional status badge, profile-specific measurements and any number of action buttons. The cards do not create sensors or infer that a command succeeded. Every value comes from the Home Assistant entity you choose. A missing or unavailable value displays `—`; an unconfigured button stays disabled.

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
| Pastel UPS | `custom:pastel-ups-card` | Battery charge, runtime, load, input and output |
| Pastel Home Network | `custom:pastel-home-network-card` | Download, upload, latency, connected devices and signal |
| Pastel Electric Car | `custom:pastel-electric-car-card` | Battery charge, range, charging and location |
| Pastel Aquarium | `custom:pastel-aquarium-card` | Water temperature, pH, filter, light and water level |
| Pastel Greenhouse | `custom:pastel-greenhouse-card` | Temperature, humidity, soil, light and water |
| Pastel Mailbox | `custom:pastel-mailbox-card` | Mailbox state, last delivery, door and count |
| Pastel Kitchen Robot | `custom:pastel-kitchen-robot-card` | Time remaining, temperature, speed, programme and bowl |
| Pastel Waste Collection | `custom:pastel-waste-collection-card` | Next collection and unlimited calendar/helper/sensor rows |
| Pastel Fan Heater | `custom:pastel-fan-heater-card` | Room temperature; target temperature and power |
| Pastel Infrared Panel | `custom:pastel-infrared-panel-card` | Room temperature; target temperature and power |
| Pastel Safe | `custom:pastel-safe-card` | Lock state; battery and last opening |
| Pastel Adjustable Bed | `custom:pastel-adjustable-bed-card` | Backrest position; legs and preset |
| Pastel Electric Blanket | `custom:pastel-electric-blanket-card` | Heat setting; timer and power |
| Pastel Garden Fountain | `custom:pastel-garden-fountain-card` | Pump state; water level and power |
| Pastel Window Cleaner | `custom:pastel-window-cleaner-card` | Robot state; battery and cleaned area |
| Pastel Skylight | `custom:pastel-skylight-card` | Opening percentage; rain and temperature |
| Pastel Air Compressor | `custom:pastel-air-compressor-card` | Tank pressure; target and motor |
| Pastel Stairlift | `custom:pastel-stairlift-card` | Position; battery and status |
| Pastel Fish Feeder | `custom:pastel-fish-feeder-card` | Next feeding; food level and last feeding |
| Pastel Shower | `custom:pastel-shower-card` | Water temperature; flow and daily use |
| Pastel Smart Desk | `custom:pastel-smart-desk-card` | Desk height; preset and lock |
| Pastel Outdoor Grill | `custom:pastel-outdoor-grill-card` | Grill temperature; target and fuel |
| Pastel Snow Melt | `custom:pastel-snow-melt-card` | Surface temperature; moisture and power |
| Pastel Septic Tank | `custom:pastel-septic-tank-card` | Tank level; pump and alarm |
| Pastel Generator | `custom:pastel-generator-card` | Generator state; fuel and output |
| Pastel NAS | `custom:pastel-nas-card` | System state; storage and disks |
| Pastel Water Meter | `custom:pastel-water-meter-card` | Daily use; flow and monthly total |
| Pastel Gas Meter | `custom:pastel-gas-meter-card` | Daily use; flow and monthly total |
| Pastel Power Panel | `custom:pastel-power-panel-card` | Home power; active circuits and overload |

All fifty-four dedicated equipment cards have a visual editor. Pick a palette, rename the card and every reading, search for your sensor or helper, then add, rename, reorder and recolour buttons. Buttons can call `script`, `scene`, `button`, `input_button`, `switch`, `input_boolean` or `automation` entities. An optional `action` overrides the inferred service, for example `script.turn_off`. More advanced service `data` and `target` fields can be supplied in YAML. A configured status entity supplies the header badge. The editor never inserts the maintainer's entity IDs.

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

### New in 1.4: home essentials

UPS, Home Network, Electric Car, Aquarium, Greenhouse, Mailbox and Kitchen Robot use the same configurable `hero_entity`, optional `state_entity`, named `metrics` and `buttons` as the other equipment cards. Their illustrations are scaled to match existing Pastel heroes. The Kitchen Robot illustration depicts a mixing bowl, handle and control screen; it is a generic appliance drawing, not a brand logo. Configure each value and button from your own entities in the visual editor.

**Waste Collection** has an additional **Raccolte** section. Add any number of named rows; each row can use a `calendar`, `sensor`, `binary_sensor`, `input_select`, `select`, `input_boolean`, `switch`, `input_text`, `date` or `input_datetime` entity. The main hero accepts the same kinds of entity. For a calendar, the card shows the current or next event's message and date from its entity attributes. A boolean shows “Da esporre” or “Non prevista” by default; edit the active value and both labels for your setup. Other entities display their state. A missing value is shown as `—`. The card reads the entities and does not modify your calendar or helpers.

```yaml
type: custom:pastel-waste-collection-card
title: Waste collection
hero_entity: calendar.example_collection
waste_items:
  - name: Paper
    entity: calendar.example_paper
  - name: Glass
    entity: input_select.example_glass_day
  - name: Plastic
    entity: input_boolean.example_plastic_tomorrow
    active_label: Tomorrow
    inactive_label: Not scheduled
```

### New in 1.5: room heaters

**Pastel Fan Heater** and **Pastel Infrared Panel** each show a user-selected room-temperature sensor, optional status entity, target-temperature helper and power sensor. The fan heater has a large fan illustration; the infrared card has a radiant-panel illustration. Choose your own colours, labels, metrics and mode buttons in the visual editor. No entity is preselected.

The on/off control follows the chosen `state_entity`: when it is on, the card offers **Spegni**; when off, **Accendi**. If no usable state is selected, both commands remain visible. Associate separate scripts or entities with `power_on_entity` and `power_off_entity`. The **+ / −** controls can call scripts, `input_number` helpers or `counter` helpers via `temperature_up_entity` and `temperature_down_entity`. The displayed target always follows `metrics.target`; tapping a button does not fabricate a new reading. The scripts or helpers define the permitted temperature range. An unconfigured command is disabled.

```yaml
type: custom:pastel-fan-heater-card
hero_entity: sensor.example_room_temperature
state_entity: switch.example_fan_heater
metrics:
  target: input_number.example_heater_target
  power: sensor.example_heater_power
power_on_entity: script.example_heater_on
power_off_entity: script.example_heater_off
temperature_up_entity: script.example_target_up
temperature_down_entity: script.example_target_down
buttons:
  - name: Eco
    icon: mdi:leaf
    entity: script.example_heater_eco
```

Doorbell action buttons now use larger touch targets, text and icons on phones. Camera selection and saved button configurations remain the same.

## Italiano

La versione 1.6 aggiunge diciannove card per dispositivi: Safe, Adjustable Bed, Electric Blanket, Garden Fountain, Window Cleaner, Skylight, Air Compressor, Stairlift, Fish Feeder, Shower, Smart Desk, Outdoor Grill, Snow Melt, Septic Tank, Generator, NAS, Water Meter, Gas Meter e Power Panel. Ognuna offre un disegno grande, colori, nomi, valori ed eventuali pulsanti configurabili. Skylight legge la percentuale di apertura da un’entità `cover` e usa i comandi di posizione supportati. Nessuna entità è preimpostata.

### Novità 1.5: riscaldamento ambiente

**Pastel Fan Heater** e **Pastel Infrared Panel** mostrano un sensore scelto per la temperatura ambiente, un'entità di stato opzionale, l'aiutante della temperatura impostata e il sensore di assorbimento. La prima raffigura una stufetta ventilata, la seconda un pannello radiante. Colori, nomi, valori e pulsanti per le modalità sono modificabili nell'editor. Non viene preimpostata alcuna entità.

Il comando di accensione segue `state_entity`: quando è accesa la card mostra **Spegni**, quando è spenta mostra **Accendi**. Se lo stato non è disponibile, mostra entrambi. Per i due comandi si possono associare script o entità separati con `power_on_entity` e `power_off_entity`. I tasti **+ / −** richiamano script oppure aiutanti `input_number` o `counter`, scelti con `temperature_up_entity` e `temperature_down_entity`. Il valore visualizzato viene sempre da `metrics.target`; la card non lo cambia per finta dopo una pressione. Limiti e passo sono definiti dagli script o dagli aiutanti. I comandi non configurati restano disabilitati.

Anche i pulsanti del citofono sono più grandi sul telefono, con testo e icone più leggibili. La scelta della telecamera e le configurazioni già salvate restano valide.

### Novità 1.4: casa e servizi

UPS, Home Network, Electric Car, Aquarium, Greenhouse, Mailbox e Kitchen Robot usano `hero_entity`, `state_entity`, `metrics` e `buttons` come le altre card per dispositivi. I disegni hanno la stessa dimensione delle altre card Pastel. Kitchen Robot raffigura un boccale con manico e uno schermo di controllo, senza marchi. Tutti i valori e i comandi si associano alle proprie entità nell’editor.

**Waste Collection** aggiunge la sezione **Raccolte**, con quante righe nominate servono. Ogni riga e il valore principale possono usare un’entità `calendar`, `sensor`, `binary_sensor`, `input_select`, `select`, `input_boolean`, `switch`, `input_text`, `date` o `input_datetime`. Il calendario mostra titolo e data dell’evento corrente o successivo presenti negli attributi dell’entità. Un booleano mostra di norma “Da esporre” o “Non prevista”; valore attivo e testi si possono cambiare. Gli altri tipi mostrano il proprio stato. Se il dato manca appare `—`. La card legge le entità senza modificare calendari o aiutanti.

Per un normale termostato Home Assistant, consulta [Pastel Thermostat](thermostat.md).

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
