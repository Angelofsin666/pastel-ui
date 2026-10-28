# Pastel Lights

<img src="../images/lights.png" alt="Pastel Lights, mobile layout with simulated devices" width="408">

## English

A mobile-oriented light list with the shared Pastel theme, large individual and group power controls, full-width brightness sliders, and expandable color/white controls when supported. Names, icons, order, palette and per-device colors are configurable in the visual editor. Slider gestures commit once on release; vertical scrolling and pointer cancellation send no command. Keyboard changes are supported.

The existing `custom:pastel-lights-card` configuration stays valid, including string entities or `{entity, name, icon}` objects. The former `custom:light-card` type is a compatibility alias inside Pastel UI; its `lights`, `name` and hex `color` fields are accepted. Do not load the old standalone resources alongside the suite.

```yaml
type: custom:pastel-lights-card
title: Esterni
subtitle: Illuminazione esterna
color: mint
entities:
  - entity: light.front_house
    name: Luce Fronte Casa
    icon: mdi:outdoor-lamp
  - light.front_path
  - switch.porch_light
```

The editor suggests `light`, `switch`, and `input_boolean` entities. Brightness, temperature and RGB controls depend on a light's advertised capabilities; plain switches only show power. Color temperature uses the device limits. Group actions exclude missing/unavailable entities, and displayed states come from Home Assistant rather than assumed command results. Tap a device name for its native details.

Optional: `show_brightness: false`, `show_progress_bar: true`, per-item `color`, plus `background_color`, `tint_color`, `accent_color`, `text_color`, `secondary_text_color`. The default palette is mint; existing palette names and custom hex colors remain supported.

## Italiano

Luci in elenco per smartphone: pulsanti grandi, luminosità a tutta larghezza e regolazioni colore/bianco apribili solo dove supportate. Nome, icona, ordine e colori sono configurabili. Gli slider inviano il valore una sola volta al rilascio; uno scorrimento verticale o un gesto annullato non invia comandi.

Le configurazioni di Pastel Lights restano valide. Anche `custom:light-card` è riconosciuto dalla suite come compatibilità: rimuovi la vecchia risorsa separata. I valori seguono gli stati reali; i dispositivi non disponibili vengono esclusi dai comandi di gruppo.
