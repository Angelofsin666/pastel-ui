# Pastel Christmas Tree / Albero di Natale

`custom:pastel-christmas-tree-card` · Introduced in **v1.0.0**.

## English

The garland reflects the actual state of a selected `light.*` or `switch.*`. A `light.*` with brightness support exposes a slider. Power can use native light/switch commands or optional `on_script` and `off_script`. Add, rename, recolour and reorder any number of atmosphere buttons; each calls a selected `script.*` or `scene.*`. For accurate selected-button highlighting, choose a `mode_entity` (input select, input text or sensor) and set each button's `active_state`. Without that helper, the card does not guess which script last changed the lights. `state_entity` can override the power-state source when commands use scripts.

```yaml
type: custom:pastel-christmas-tree-card
title: Christmas tree
subtitle: Living room
entity: light.example_tree
color: amber
show_brightness: true
mode_entity: input_select.example_tree_mode
buttons:
  - name: Warm
    entity: script.example_tree_warm
    icon: mdi:fire
    active_state: warm
  - name: Night
    entity: scene.example_tree_night
    icon: mdi:weather-night
    active_state: night
```

All IDs above are examples. The editor suggests lights/switches for the tree, scripts/scenes for atmospheres, and helpers/sensors for the active mode. The header, card colour and detailed colours are editable. For a script-controlled tree, configure `state_entity`, `on_script` and `off_script`.

## Italiano

La ghirlanda mostra lo stato reale di una `light.*` o `switch.*` scelta dall'utente. Se la luce supporta la luminosità, appare il cursore. Accensione e spegnimento possono usare i comandi nativi o gli script opzionali `on_script` e `off_script`. Puoi aggiungere, rinominare, colorare e riordinare quante atmosfere vuoi: ognuna richiama uno `script.*` o una `scene.*`. Per evidenziare quella attiva scegli un `mode_entity` e imposta per ogni pulsante il valore `active_state`. Senza aiutante la card non indovina quale script abbia modificato le luci. `state_entity` permette di leggere lo stato da un'entità diversa, utile con i comandi script.

Gli ID dell'esempio sono fittizi. L'editor propone luci/interruttori, script/scene e aiutanti/sensori secondo il campo. Nome, sottotitolo, palette e colori dettagliati sono modificabili.
