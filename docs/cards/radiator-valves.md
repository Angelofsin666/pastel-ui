# Pastel Radiator Valves

## English

A single card for any number of thermostatic radiator valves. Add, remove or reorder rooms in the visual editor. For each room, select its Home Assistant `climate` entity and, optionally, a separate temperature sensor and battery sensor. Rename the room and choose the card's palette, title, subtitle, icon and custom colours.

The large radiator illustration accompanies the **average room temperature** of rooms with valid readings. Each row shows its reported room temperature, battery percentage when configured, HVAC status and target temperature. The **+ / −** buttons call `climate.set_temperature` using the selected valve's own target, `target_temp_step`, `min_temp` and `max_temp`. A button is disabled if the entity or service is unavailable, target control is unsupported, or a limit has been reached. The value shown follows Home Assistant's reported state; the card never assumes a command succeeded. A separate temperature sensor is used only when its unit matches Home Assistant's temperature unit; otherwise the valve's own reading is used.

```yaml
type: custom:pastel-radiator-valves-card
title: Radiators
color: mint
rooms:
  - name: Living room
    entity: climate.example_living_valve
    battery_entity: sensor.example_living_valve_battery
  - name: Bedroom
    entity: climate.example_bedroom_valve
    temp_entity: sensor.example_bedroom_temperature
```

No room or entity is preselected. The card does not create schedules or automations, and a valve's supported features depend on its integration. Use [Pastel Thermostat](thermostat.md) if you prefer one card for one `climate` entity.

## Italiano

Una card per tutte le valvole termostatiche che vuoi. Nell'editor visuale puoi aggiungere, rimuovere e riordinare le stanze. Per ciascuna scegli l'entità `climate` di Home Assistant e, facoltativamente, un sensore separato di temperatura e uno della batteria. Puoi cambiare nomi, palette, icona e colori.

Il grande disegno del termosifone accompagna la **temperatura media** delle stanze con valori disponibili. Ogni riga mostra temperatura ambiente, batteria se associata, stato HVAC e temperatura impostata. I pulsanti **+ / −** chiamano `climate.set_temperature` rispettando passo e limiti della valvola. Restano disabilitati se l'entità o il servizio non sono disponibili, se la valvola non supporta il setpoint oppure se è stato raggiunto un limite. Il valore mostrato segue lo stato riportato da Home Assistant e non viene anticipato al tocco. Un sensore di temperatura separato viene usato solo se la sua unità corrisponde a quella di Home Assistant; altrimenti resta la lettura della valvola.

L'esempio YAML sopra usa ID fittizi. Nessuna stanza o entità è preimpostata. La card non crea programmi o automazioni; le funzioni effettive dipendono dall'integrazione della valvola. Se preferisci una card per una sola entità `climate`, usa [Pastel Thermostat](thermostat.md).
