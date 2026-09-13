# Configuration / Configurazione

## English

### Appliance and Robot

Use `custom:pastel-appliance-card` or `custom:pastel-robot-card`. The visual editor supports device discovery, explicit sensor associations and adding/removing entity controls. Custom service data and action targets can be configured in YAML.

| Field | Meaning |
|---|---|
| `entity` | Primary state entity. Select a device and apply discovery to fill it. |
| `device_id` | Optional device-registry ID used by the discovery editor. |
| `profile` | Presentation profile; does not imply device support. |
| `title`, `subtitle`, `color` | Optional appearance settings. |
| `metrics` | Map of measurement role to sensor entity ID. |
| `controls` | List of `{entity, name}` or explicit `{name, action, entity, data, target}` controls. |
| `status_entities` | Optional sensor/binary-sensor IDs for state and maintenance rows. |
| `hidden_actions` | Native robot service names to hide, e.g. `vacuum.locate`. |
| `map_entity` | Robot only: `image` or `camera` entity with `entity_picture`. |
| `zones` | Robot only: configured buttons or explicit service/script actions. |

Profiles: `washer`, `dryer`, `dishwasher`, `refrigerator`, `freezer`, `wine_cooler`, `oven`, `microwave`, `coffee`, `hood`, `hob`, `dehumidifier`, `humidifier`, `air_purifier`, `water_purifier`, `fan`, `ventilation`, `water_heater`, `vacuum`, `floor_cleaner`, `lawn_mower`, `robot_dock`, `generic`.

Measurement roles: `power`, `energy`, `cycle_energy`, `remaining`, `progress`, `temperature`, `humidity`, `battery`, `water_quality` (outlet TDS), `water_input` (inlet TDS), `water_used`, `tank`, `filter`, `area`. Missing or invalid numeric measurements display a dash. Power accepts W/kW; energy accepts Wh/kWh. Other measurements use the sensor's unit unchanged. Time must be a numeric duration, not a timestamp. TDS is displayed as a measurement, not a drinking-water safety rating.

Entity controls support buttons, switches, selectors, numbers, scripts and scenes. Native humidifier, fan and water-heater settings use entity attributes and supported features. Robot actions additionally require an available service and its corresponding supported-feature bit. Controls are not executed during discovery. Buttons with `unknown` state can still be pressed because that state may mean they have never been used; `unavailable` disables them.

```yaml
type: custom:pastel-appliance-card
profile: water_purifier
entity: sensor.example_purifier_state
metrics:
  water_quality: sensor.example_purifier_tds_out
  filter: sensor.example_purifier_filter_remaining
  power: sensor.example_socket_power
controls:
  - name: Rinse
    entity: button.example_purifier_rinse
  - name: Custom programme
    action: script.turn_on
    entity: script.example_programme
```

A profile is a starting point, not a certified integration adapter. Device inference uses domain and names in English/Italian; select the profile manually when those names are not informative. Measurements are proposed from device class or conservative name matching within one device. Multiple candidates are not silently selected. Reapplying discovery replaces the current proposed association set; review your external sensor overrides afterwards.

### Climate

`custom:pastel-climate-card`: `entity` must be a `climate` entity. Optional fields: `title`, `subtitle`, `color`, `temp_sensor`, `humidity_sensor`. Temperature limits, target step, HVAC modes, fan modes, presets and swing settings are read from the entity. Single temperature and low/high target ranges are supported. Custom-action/IR installations should keep `custom:pastel-clima-card`; see its [page](cards/clima.md).

### Existing cards

Each [catalog entry](catalog.md) contains a runnable configuration shape with fictional entity IDs. Their existing option names are preserved. Replace demo IDs with your entities and check the migration guide for image paths.

## Italiano

### Appliance e Robot

Usa `custom:pastel-appliance-card` oppure `custom:pastel-robot-card`. L'editor permette ricerca dei dispositivi, associazioni dei sensori e aggiunta/rimozione dei controlli. Dati e destinazioni delle azioni personalizzate si configurano in YAML.

- `entity`: entità principale; `device_id`: dispositivo usato dalla ricerca.
- `profile`: profilo grafico, senza garanzia sulle funzioni del dispositivo.
- `title`, `subtitle`, `color`: aspetto.
- `metrics`: associazione ruolo → sensore. I ruoli sono elencati nella sezione inglese.
- `controls`: controlli di entità oppure azioni esplicite con `name`, `action`, `entity`, `data` e `target`.
- `status_entities`: sensori di stato e manutenzione.
- `hidden_actions`: comandi nativi del robot da nascondere.
- `map_entity`: entità immagine/camera con `entity_picture`, solo per Robot.
- `zones`: pulsanti o azioni/script configurati per le zone, solo per Robot.

La potenza accetta W/kW, l'energia Wh/kWh. I dati mancanti mostrano un trattino. Il tempo deve essere una durata numerica, non una data. Il TDS viene mostrato come misura, non come giudizio sulla potabilità. L'energia del ciclo richiede un sensore dedicato.

Il riconoscimento usa dominio e nomi inglesi/italiani. Le associazioni sono cercate entro un solo dispositivo; in caso di ambiguità devi scegliere. Riapplicare la ricerca sostituisce le associazioni: ricontrolla eventuali sensori esterni. La ricerca non esegue comandi. I pulsanti `unknown` possono essere validi se mai premuti; `unavailable` li disabilita.

L'esempio YAML sopra mostra un depuratore con misuratore esterno e un comando personalizzato. Tutte le entità sono fittizie.

### Climate

La nuova `pastel-climate-card` richiede un'entità `climate`. Conserva `title`, `temp_sensor`, `humidity_sensor` e aggiunge `subtitle` e `color`. Legge limiti, passo, modalità e capacità dal dispositivo; supporta obiettivo singolo e intervallo minimo/massimo. Per azioni personalizzate/IR resta disponibile [pastel-clima-card](cards/clima.md).

### Card esistenti

Ogni pagina del [catalogo](catalog.md) include un esempio con entità fittizie. I nomi delle opzioni esistenti sono conservati; verifica solo le risorse e i percorsi delle immagini durante la migrazione.
