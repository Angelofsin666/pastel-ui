# Pastel Button

[![Open your Home Assistant and add Pastel UI to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

<img src="../images/button.png" alt="Pastel Button, rendered with simulated data" width="408">

## English

Configurable shortcuts for entities, scenes, scripts and navigation. Each button keeps its own label, icon, colour and action. Optionally show a live elapsed timer from an entity's last state change, or show the value of an existing duration sensor. The elapsed timer only appears while the chosen state is active.

Included in the single Pastel UI installation. [Install the suite](../installation.md) · [Configuration reference](../configuration.md) · [Migration](../migration.md)

### Example

All entity IDs below are fictional. Replace them with your own. The screenshot is a rendered demo, not evidence of compatibility with a particular brand.

```yaml
type: custom:pastel-button-card
title: Scorciatoie
buttons:
- label: Luci
  icon: mdi:lightbulb
  color: amber
  action:
    type: toggle
    entity_id: light.demo_reading
- label: Comfort
  icon: mdi:thermostat
  color: blue
  action:
    type: more_info
    entity_id: climate.demo
- label: Sleep
  icon: mdi:sleep
  color: purple
  action:
    type: script
    entity_id: script.demo_sleep
  timer:
    mode: elapsed
    entity_id: input_select.demo_sleep
    active_state: Sleeping
```

## Italiano

Scorciatoie configurabili per entità, scene, script e navigazione. Ogni pulsante mantiene nome, icona, colore e azione. Facoltativamente può mostrare un cronometro che parte dall'ultimo cambio di stato di un'entità, oppure il valore di un sensore di durata già esistente. Il cronometro appare solo quando lo stato scelto è attivo.

Per una `input_select` come quella dell'esempio, scegli **Dal cambio di stato**, seleziona l'entità e scrivi lo stato esatto (per esempio `Nanna`). Per un `input_boolean` lo stato attivo predefinito è `on`. Se hai già un sensore template che restituisce la durata, scegli **Valore di un'entità**. L'azione del pulsante resta configurabile separatamente.

Inclusa nell’installazione unica di Pastel UI. [Installazione](../installation.md) · [Configurazione](../configuration.md) · [Migrazione](../migration.md)

L’esempio sopra usa soltanto entità fittizie: sostituiscile con le tue. L’immagine mostra la demo e non certifica la compatibilità con un marchio.
