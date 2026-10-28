# Pastel Thermostat

## English

Pastel Thermostat controls a regular Home Assistant `climate` entity. Select your thermostat in the visual editor. The card reads its current temperature, target temperature, available HVAC modes, target-temperature step and minimum/maximum from Home Assistant. Only supported modes appear. The target controls appear only when the entity supports a single target temperature. An optional humidity sensor adds a second measurement tile. Colours, title, subtitle and icon are configurable.

```yaml
type: custom:pastel-native-thermostat-card
entity: climate.example_living_room
humidity_entity: sensor.example_living_room_humidity
title: Living room
color: blue
```

The new type ID is `pastel-native-thermostat-card` because an older `pastel-thermostat-card` was retired. This new card does not change or revive that legacy configuration. Temperature and mode buttons call Home Assistant's native `climate` services, and the display follows the entity state after the service completes. The card does not infer success from a click.

## Italiano

Pastel Thermostat controlla una normale entità `climate` di Home Assistant. Scegli il termostato nell’editor visuale. La card legge temperatura ambiente, temperatura impostata, modalità disponibili, passo e limiti minimo/massimo direttamente dall’entità. Compaiono solo le modalità supportate. I pulsanti della temperatura appaiono soltanto se l’entità supporta una singola temperatura impostata. Puoi aggiungere un sensore di umidità e cambiare colori, nome, sottotitolo e icona.

L’ID della nuova card è `pastel-native-thermostat-card`: la vecchia `pastel-thermostat-card` era stata ritirata e non viene riattivata. I pulsanti chiamano i servizi nativi `climate`; il valore mostrato segue lo stato dell’entità, anche dopo modifiche fatte altrove. Un clic da solo non viene interpretato come conferma dell’azione.
