# Pastel Openings

[![Open your Home Assistant and add Pastel UI to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

<img src="../images/openings.png" alt="Pastel Openings, rendered with simulated data" width="408">

## English

An opening overview with per-entity actions and configurable illustration. Use this card for richer opening configurations; the older Doors & Windows type remains available.

Included in the single Pastel UI installation. [Install the suite](../installation.md) · [Configuration reference](../configuration.md) · [Migration](../migration.md)

### Example

All entity IDs below are fictional. Replace them with your own. The screenshot is a rendered demo, not evidence of compatibility with a particular brand.

```yaml
type: custom:pastel-openings-card
title: Aperture
color: blue
entities:
- binary_sensor.demo_door
- binary_sensor.demo_window
```

## Italiano

Riepilogo aperture con azioni per entità e illustrazione configurabile. Per configurazioni più ricche usa questa card; il vecchio tipo Doors & Windows resta disponibile.

Inclusa nell’installazione unica di Pastel UI. [Installazione](../installation.md) · [Configurazione](../configuration.md) · [Migrazione](../migration.md)

L’esempio sopra usa soltanto entità fittizie: sostituiscile con le tue. L’immagine mostra la demo e non certifica la compatibilità con un marchio.
