# Awning and Curtains / Tenda da sole e tende interne

## English

**Pastel Awning** (`custom:pastel-awning-card`) and **Pastel Curtains** (`custom:pastel-curtains-card`) bring motorised fabric covers into the same rounded, phone-friendly Pastel layout. Their large illustrations open and close according to the position reported by Home Assistant. Animation is a visual transition between real reported positions; pressing a button alone does not pretend the device moved.

In the visual editor, select a `cover` entity for native open, stop, close and—when supported—position control. Optionally select a `sensor`, `number`, `input_number` or `counter` whose state is a percentage from 0 to 100. This reading takes priority over the cover's `current_position`, which also makes script-driven covers possible. If you use scripts without a cover, select a position sensor so the illustration and percentage can update. You can map separate scripts, buttons or switches to Open, Stop and Close. A native cover action is used only when no override is selected and Home Assistant reports the feature available. Unsupported or unconfigured commands stay disabled.

Names, subtitle, header icon, palette, individual button labels and colours, and the optional metrics are editable. Awning offers wind and sun readings; Curtains offers ambient light and power. Empty metrics stay hidden. Sensor and status changes made elsewhere update the card.

```yaml
type: custom:pastel-awning-card
title: Terrace awning
entity: cover.example_terrace_awning
metrics:
  wind: sensor.example_wind_speed
  sun: sensor.example_sunlight
```

```yaml
type: custom:pastel-curtains-card
title: Living-room curtains
position_entity: sensor.example_curtain_opening
open_entity: script.example_open_curtains
stop_entity: script.example_stop_curtains
close_entity: script.example_close_curtains
```

## Italiano

**Pastel Awning** (`custom:pastel-awning-card`) e **Pastel Curtains** (`custom:pastel-curtains-card`) portano le tende motorizzate nello stile Pastel con comandi comodi sul telefono. Il grande disegno si apre e si chiude seguendo la posizione comunicata da Home Assistant. La pressione di un pulsante da sola non anticipa il movimento: l'animazione avviene quando cambia il valore letto.

Nell'editor scegli un'entità `cover` per i comandi nativi Apri, Ferma, Chiudi e, se supportato, il cursore della posizione. Puoi anche scegliere un `sensor`, `number`, `input_number` o `counter` che riporti una percentuale da 0 a 100. Questo valore ha la precedenza sull'attributo `current_position` della `cover`, così puoi usare anche tende comandate da script. Se non hai una `cover`, associa un sensore di posizione affinché disegno e percentuale si aggiornino. Ogni comando può richiamare uno script, un pulsante o un interruttore. Se non associ un comando alternativo, la card usa il servizio nativo disponibile; i pulsanti non configurati o non supportati restano disabilitati.

Puoi modificare nome, sottotitolo, icona, palette, nomi e colori dei pulsanti e sensori aggiuntivi. Awning offre vento e sole; Curtains luce ambiente e consumo. I riquadri non configurati non compaiono. Anche le modifiche fatte altrove in Home Assistant aggiornano la card.
