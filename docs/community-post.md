# Community launch draft / Bozza presentazione community

Editorial note: prepared for the Home Assistant Community forum or a personal blog after the beta has been tested on real devices. No forum post has been published and publication on the official Home Assistant blog is not assumed. Update the test status and version before posting. This note is not part of the post.

## English

### Pastel UI: one Home Assistant card collection for appliances, robots and the rest of the house

I started making Pastel cards for my own dashboard. After using them together, I wanted to make the collection easier to install and useful beyond my own setup.

Pastel UI brings them into one HACS package. Lights, climate, openings and household sensors share a pastel style, and the existing card type names are kept for people moving from the individual repositories.

The new part is **Pastel Appliance**. Select a device or one of its entities, and the editor looks for related measurements and controls. It proposes associations for you to review: a programme selector, a pause button, a power sensor. You can remove controls or use an external energy meter. Profiles include washers, dryers, dishwashers, kitchen appliances, air treatment and water purifiers.

**Pastel Robot** follows the same idea for vacuums and lawn mowers. Native controls depend on the entity's supported features. If your integration exposes a map image and room or zone controls, you can include those too.

![Pastel UI — simulated device data](https://raw.githubusercontent.com/Angelofsin666/pastel-ui/main/docs/images/overview.png)

The important limit is that the cards use what your Home Assistant integration already provides. They do not add unsupported commands. Maps are integration-provided images, and cycle energy needs its own sensor. This is an early beta; I would especially appreciate feedback on discovery with different integrations.

[![Open Pastel UI in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

[Repository, screenshots and installation guide](https://github.com/Angelofsin666/pastel-ui)

If you try it, let me know which integration and model you use, what was detected correctly, and what you had to associate manually. Please remove private entity names and credentials from screenshots and reports. And if you find the project useful, a GitHub star would be appreciated.

## Italiano

### Pastel UI: una raccolta di card Home Assistant per elettrodomestici, robot e il resto della casa

Ho iniziato a creare le card Pastel per la mia dashboard. Usandole insieme, ho deciso di renderle più semplici da installare e utili anche fuori dal mio impianto.

Pastel UI le riunisce in un solo pacchetto HACS. Luci, clima, aperture e sensori condividono lo stile pastello; chi arriva dalle repository singole mantiene i nomi dei tipi di card esistenti.

La novità è **Pastel Appliance**. Scegli un dispositivo o una sua entità e l’editor cerca sensori e controlli associati. Ti propone collegamenti da verificare: un selettore programmi, un pulsante pausa, un sensore di potenza. Puoi rimuovere controlli o usare un misuratore esterno. I profili includono lavatrice, asciugatrice, lavastoviglie, cucina, trattamento aria e depuratore d’acqua.

**Pastel Robot** segue lo stesso principio per aspirapolvere e tagliaerba. I comandi nativi dipendono dalle capacità dell’entità. Se l’integrazione espone una mappa e controlli per stanze o zone, puoi aggiungerli.

Le card usano ciò che l’integrazione Home Assistant rende già disponibile: non aggiungono comandi non supportati. Le mappe sono immagini fornite dall’integrazione; il consumo del ciclo richiede un sensore dedicato. È una prima beta: mi interessa soprattutto il riscontro sul riconoscimento con integrazioni diverse.

[![Apri Pastel UI in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Angelofsin666&repository=pastel-ui&category=plugin)

[Repository, immagini e installazione](https://github.com/Angelofsin666/pastel-ui)

Se la provi, raccontami modello, integrazione, cosa è stato riconosciuto e cosa hai dovuto associare manualmente. Rimuovi dati privati dalle segnalazioni. Se il progetto ti è utile, una stella su GitHub è apprezzata.
