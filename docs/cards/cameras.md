# Pastel Cameras

## English

Pastel Cameras keeps all selected Home Assistant cameras visible in one card. Choose a two-column grid or a full-width list. The overview uses Home Assistant's camera still previews, which refresh while visible; tapping a preview opens Home Assistant's larger camera dialog, including live video when the camera supports it. An unavailable camera stays in its place with a clear placeholder.

In the visual editor, add as many `camera.*` entities as you need, search only camera entities, rename and reorder each one, and choose a palette or custom colours. No entity is preselected. The card reads the camera state and never sends a control command.

```yaml
type: custom:pastel-cameras-card
title: Cameras
subtitle: Home and garden
color: blue
layout: grid
cameras:
  - entity: camera.front_door
    name: Front door
  - entity: camera.garden
    name: Garden
```

`layout` accepts `grid` (default) or `list`. Optional colour fields: `background_color`, `tint_color`, `accent_color`, `text_color`, `secondary_text_color`. `icon` changes the header icon.

## Italiano

Pastel Cameras mostra insieme tutte le telecamere Home Assistant scelte, in una griglia a due colonne o in un elenco a larghezza piena. Le anteprime statiche di Home Assistant si aggiornano quando sono visibili; toccandone una si apre la finestra grande di Home Assistant, con video dal vivo se supportato dalla telecamera. Una telecamera non disponibile rimane al suo posto con un indicatore chiaro.

Nell'editor visuale puoi aggiungere quante entità `camera.*` vuoi, cercando solo tra le telecamere, rinominare e riordinare ciascuna, e scegliere palette o colori personalizzati. Nessuna entità è preimpostata. La card legge lo stato delle telecamere e non invia comandi.

La configurazione YAML è quella mostrata sopra. `layout` accetta `grid` (predefinito) o `list`. I campi facoltativi per i colori sono `background_color`, `tint_color`, `accent_color`, `text_color`, `secondary_text_color`; `icon` modifica l'icona dell'intestazione.
