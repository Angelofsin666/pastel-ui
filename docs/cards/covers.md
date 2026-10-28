# Pastel Covers

<img src="../images/covers.png" alt="Pastel Covers with roller shutter illustration and simulated data" width="408">

## English

A cover/shutter card matching the shared Pastel theme. The approved group layout has open/stop/close controls, individual tiles and position sliders where supported. The roller-shutter illustration has a cassette, side rails and a continuous segmented shutter that retracts as real opening increases. It does not simulate movement after a command: feedback comes from the entity state.

```yaml
type: custom:pastel-covers-card
title: Tapparelle
subtitle: Piano Terra
color: blue
entities:
  - entity: cover.living_room
    name: Salotto
    energy_entity: sensor.living_shutter_energy
  - entity: cover.kitchen
    name: Cucina
```

Names, icons, order, palettes, per-item colors and optional energy sensors are configurable in the visual editor. Missing position data displays a dash and an unknown illustration rather than zero. Averages use only available numeric positions. State and service capabilities determine which commands are enabled; group actions exclude unsupported/unavailable targets. Position uses Home Assistant's convention: **0% closed, 100% open**. Stop remains available when the device supports it.

### Single cover and standalone compatibility

Use `layout: single` with one entry in `entities`, or configure `entity`, `name`, and optional `energy_entity` directly. The former `custom:tapparella-card` is a compatibility alias inside Pastel UI and accepts the existing single-cover fields and hex `color`. It is not a separate picker card or repository. Remove `/hacsfiles/tapparella-card-/tapparella-card.js` after updating the suite; loading both versions can retain the old renderer.

Optional: `show_position: false`, per-item `color`, and the shared `background_color`, `tint_color`, `accent_color`, `text_color`, `secondary_text_color` overrides. Sliders commit on release and cancel during vertical scrolling. Tap a cover name for native details.

## Italiano

Mantiene la struttura di gruppo approvata: comandi generali, riquadri delle singole tapparelle e regolazione percentuale. Cambia il disegno, ora con cassonetto, guide laterali e telo avvolgibile che segue la posizione reale. Le percentuali mancanti non diventano zero; vengono escluse dalla media. I comandi dipendono dalle funzioni del dispositivo.

Puoi configurare anche una singola tapparella. Le vecchie card `custom:tapparella-card` restano riconosciute da Pastel UI con `entity`, `name`, `energy_entity` e colore esadecimale; rimuovi la vecchia risorsa separata dopo l’aggiornamento. Nomi, icone, colori e sensori energia si configurano nell’editor. **0% significa chiusa; 100% aperta.**
