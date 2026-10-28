## Italiano

- Corretto il selettore di Home Assistant: Pastel Alarm e Pastel Security Overview ora vengono aggiunte allo stesso elenco conservato dal frontend, senza sostituirlo. La versione precedente poteva lasciarle fuori dal selettore anche con il file aggiornato.
- Tutti i 17 nomi delle card sono in inglese, nel formato **Pastel + funzione**, senza il suffisso “Card”. Tra questi: **Pastel Alarm**, **Pastel Security Overview**, **Pastel Climate AC**, **Pastel Pellet Stove** e **Pastel Temperature**.
- Identificativi, configurazioni e titoli personali restano invariati.

Aggiorna da HACS alla **v0.1.0-beta.9** (versioni preliminari abilitate), chiudi le altre schede Home Assistant e ricarica completamente l’interfaccia. Nel selettore “Aggiungi card” cerca **Pastel Alarm** oppure **Pastel Security Overview**.

Restano rimossi i tre vecchi tipi Climate/Thermostat ritirati nella beta.8. [Guida alla migrazione](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/migration.md).

Verificato con test automatici e nel browser con dati simulati, riproducendo l’elenco conservato da Home Assistant. Nessun comando inviato all’allarme reale.

## English

Fixes missing alarm cards in Home Assistant’s picker by retaining the original custom-card registry array. All 17 card names now follow the same English naming convention: **Pastel + function**, without “Card”. Type IDs, saved configurations and user titles are unchanged. Update and fully reload the frontend; search for **Pastel Alarm** and **Pastel Security Overview**.
