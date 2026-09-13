# Pastel Water Leak

[![Open your Home Assistant and add Pastel UI to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

<img src="../images/water-leak.png" alt="Pastel Water Leak, rendered with simulated data" width="408">

## English

A leak-sensor overview. Active alarms are highlighted; missing or unavailable readings are not reported as healthy.

Included in the single Pastel UI installation. [Install the suite](../installation.md) · [Configuration reference](../configuration.md) · [Migration](../migration.md)

### Example

All entity IDs below are fictional. Replace them with your own. The screenshot is a rendered demo, not evidence of compatibility with a particular brand.

```yaml
type: custom:pastel-water-leak-card
title: Perdite acqua
color: blue
entities:
- binary_sensor.demo_leak
```

## Italiano

Riepilogo sensori di perdita acqua. Gli allarmi sono evidenziati; i dati mancanti o non disponibili non vengono presentati come regolari.

Inclusa nell’installazione unica di Pastel UI. [Installazione](../installation.md) · [Configurazione](../configuration.md) · [Migrazione](../migration.md)

L’esempio sopra usa soltanto entità fittizie: sostituiscile con le tue. L’immagine mostra la demo e non certifica la compatibilità con un marchio.
