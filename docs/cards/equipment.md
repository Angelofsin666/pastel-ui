# Pool, pumps, kitchen, heating and charging cards

## English

Pastel UI 1.1 adds nine cards with the same phone-friendly layout: a live main reading, optional status badge, up to three optional metric types and any number of action buttons. The cards do not create sensors or infer that a command succeeded. Every value comes from the Home Assistant entity you choose. A missing or unavailable value displays `—`; an unconfigured button stays disabled.

| Card | Type | Main reading and optional metrics |
|---|---|---|
| Pastel Pool | `custom:pastel-pool-card` | Water temperature; pH, free chlorine, filtration |
| Pastel Sump Pumps | `custom:pastel-sump-pumps-card` | Basement sump-pit level; pump A/B and flood alarm |
| Pastel Water Booster | `custom:pastel-water-booster-card` | Water pressure; flow, pump state, target pressure |
| Pastel Coffee Machine | `custom:pastel-coffee-machine-card` | Machine state; water, beans, maintenance |
| Pastel Air Fryer | `custom:pastel-air-fryer-card` | Time remaining; temperature, programme, power |
| Pastel Boiler | `custom:pastel-boiler-card` | Heating supply temperature; pressure, burner, mode |
| Pastel Hot Water | `custom:pastel-hot-water-card` | Domestic hot-water tank temperature; target, heating, energy |
| Pastel EV Charger | `custom:pastel-ev-charger-card` | Charging power; session energy, current limit, finish estimate |
| Pastel Pool Robot | `custom:pastel-pool-robot-card` | Cleaning progress; battery, mode, time remaining |

All nine have a visual editor. Pick a palette, rename the card and every reading, search for your sensor or helper, then add, rename, reorder and recolour buttons. Buttons can call `script`, `scene`, `button`, `input_button`, `switch`, `input_boolean` or `automation` entities. An optional `action` overrides the inferred service, for example `script.turn_off`. More advanced service `data` and `target` fields can be supplied in YAML. A configured status entity supplies the header badge. The editor never inserts the maintainer's entity IDs.

```yaml
type: custom:pastel-sump-pumps-card
title: Basement flood protection
state_entity: binary_sensor.example_flood_alarm
hero_entity: sensor.example_sump_level
hero_label: Sump-pit level
metrics:
  pump_a: binary_sensor.example_sump_pump_a
  pump_b: binary_sensor.example_sump_pump_b
  alarm: binary_sensor.example_flood_alarm
buttons:
  - name: Test pump A
    icon: mdi:water-pump
    entity: script.example_test_sump_pump_a
```

`Pastel Sump Pumps` is for basement flood-prevention pumps, not rainwater collection. Only configure actions supported by your installation. A visual button does not replace a physical flood alarm or safety controller.

## Italiano

Pastel UI 1.1 aggiunge nove card con impaginazione comoda sul telefono: valore principale aggiornato, stato opzionale, altri valori facoltativi e quanti pulsanti servono. Ogni valore arriva dall'entità Home Assistant scelta; se manca o non è disponibile appare `—`. I pulsanti senza comando associato restano disabilitati.

Le card sono **Pool** (piscina), **Sump Pumps** (pompe anti-allagamento del sotterraneo), **Water Booster** (pompa di rilancio), **Coffee Machine**, **Air Fryer**, **Boiler** (caldaia del riscaldamento), **Hot Water** (acqua calda sanitaria), **EV Charger** e **Pool Robot**. La tabella inglese sopra indica gli ID e i valori previsti.

Nell'editor visuale puoi scegliere colore, nomi, sensori o aiutanti e aggiungere, ordinare e colorare liberamente i pulsanti. I comandi possono richiamare script, scene, pulsanti, interruttori o automazioni. Per servizi particolari puoi indicare `action` in forma `dominio.servizio`; `data` e `target` sono disponibili in YAML. Lo stato in alto usa l'entità associata, non l'ultimo comando premuto. Nessun ID personale dello sviluppatore è preimpostato.

**Sump Pumps** indica le pompe che impediscono l'allagamento di cantine o locali interrati, non le pompe di raccolta dell'acqua piovana. Associa soltanto funzioni effettivamente supportate dal tuo impianto.
