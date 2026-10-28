## Italiano

- **Pastel Lights**: redesign per smartphone con elenco delle luci, pulsanti grandi, luminosità a tutta larghezza e regolazioni colore/bianco soltanto per i dispositivi compatibili.
- **Pastel Covers**: struttura di gruppo approvata, comandi apri/ferma/chiudi singoli e generali, percentuale reale, sensori energia facoltativi e nuovo disegno avvolgibile con cassonetto e guide.
- Nomi, icone, ordine, palette e colori personalizzati disponibili dall’editor. Slider annullati durante lo scorrimento verticale; nessun movimento o stato inventato dopo un comando.
- I vecchi identificativi `custom:light-card` e `custom:tapparella-card` restano compatibili nella suite; il selettore propone solo **Pastel Lights** e **Pastel Covers**. Le configurazioni esistenti di Pastel Lights restano valide.
- Pastel UI contiene ora **17 tipi di card** ed è l’unico repository per lo sviluppo delle card.

**Aggiorna la suite prima di rimuovere le vecchie risorse** LightCard, tapparella-card- e le card Pastel separate. Mantieni solo la risorsa Pastel UI e ricarica completamente l’interfaccia: se carichi i vecchi file insieme alla suite, possono continuare a registrare il vecchio aspetto. [Migrazione](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/migration.md).

Test automatici e verifica browser con dati simulati, anche a 320/390/430 pixel. Nessun dispositivo reale azionato durante i test.

## English

Adds the approved mobile redesign for **Pastel Lights** and **Pastel Covers**, including large controls, scroll-safe sliders, capability-based native actions and real state feedback. The roller-shutter drawing replaces the blind-like illustration. Existing Lights configurations and standalone `light-card` / `tapparella-card` types remain compatible inside the suite. There are now **17 public card types**. Update Pastel UI, remove the old standalone resources, then fully reload the frontend. All card development is consolidated in this repository.
