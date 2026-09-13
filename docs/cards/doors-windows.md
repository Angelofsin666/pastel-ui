# Pastel Doors & Windows

[![Open your Home Assistant and add Pastel UI to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

<img src="../images/doors-windows.png" alt="Pastel Doors & Windows, rendered with simulated data" width="408">

## English

A compact contact-sensor list with an open count. Intended for on/off binary sensors such as door and window contacts.

Included in the single Pastel UI installation. [Install the suite](../installation.md) · [Configuration reference](../configuration.md) · [Migration](../migration.md)

### Example

All entity IDs below are fictional. Replace them with your own. The screenshot is a rendered demo, not evidence of compatibility with a particular brand.

```yaml
type: custom:pastel-doors-windows-card
title: Porte e finestre
color: purple
entities:
- binary_sensor.demo_door
- binary_sensor.demo_window
```

## Italiano

Lista compatta di contatti con conteggio delle aperture. Pensata per sensori binari on/off di porte e finestre.

Inclusa nell’installazione unica di Pastel UI. [Installazione](../installation.md) · [Configurazione](../configuration.md) · [Migrazione](../migration.md)

L’esempio sopra usa soltanto entità fittizie: sostituiscile con le tue. L’immagine mostra la demo e non certifica la compatibilità con un marchio.
