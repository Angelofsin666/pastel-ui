## Italiano

Correzione della configurazione e sincronizzazione dei valori in **Pastel Stufa**.

- Ogni controllo −/+ espone **Aiutante del valore** con ricerca e suggerimenti dei soli `counter` e `input_number`.
- Seleziona l’aiutante modificato dagli script: il numero tra i tasti segue il suo stato in Home Assistant, anche per modifiche esterne.
- Per la temperatura attiva **Mostra questo aiutante anche come temperatura impostata**: il riquadro superiore e il controllo leggono la stessa sorgente.
- Script +/− e aiutante visualizzato rimangono associazioni distinte. La card non modifica direttamente i counter.
- Minimo e massimo restano liberi e opzionali. Le associazioni già salvate restano compatibili.

Dopo l’aggiornamento **ricarica completamente il frontend Home Assistant**, poi apri la configurazione di ogni controllo −/+ e associa il relativo aiutante. Non devi ricreare la card. Seleziona la spunta temperatura solo sul controllo che deve alimentare il riquadro superiore.

Per questa release abilita le versioni preliminari di Pastel UI in HACS; se non compare, usa “Aggiorna informazioni”. Test automatici e browser eseguiti con dati simulati: nessun dispositivo reale azionato.

## English

Each stove stepper now exposes a clearly labelled numeric-helper field with counter/input_number suggestions. Link one stepper to the upper target-temperature metric using `show_as_temperature: true` so both displays follow the same Home Assistant helper. Script actions remain separate and no optimistic increments or direct counter commands are introduced. Existing configurations and optional user-defined bounds are preserved. Reload the frontend after updating, then select the helper in each stepper. Automated and browser tests use simulated Home Assistant data; HACS pre-releases must be enabled.
