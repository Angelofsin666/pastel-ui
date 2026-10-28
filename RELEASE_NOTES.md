## Prima di aggiornare / Before updating

**Sono state rimosse Pastel Climate nativa, Pastel Climate custom actions/IR e Pastel Thermostat.** Le dashboard che usano ancora `custom:pastel-climate-card`, `custom:pastel-clima-card` o `custom:pastel-thermostat-card` devono passare alla nuova card e associare sensore e script; non c’è conversione automatica. [Guida alla migrazione](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/migration.md).

## Italiano

- La nuova card a script si chiama **Pastel Climate AC**.
- **Pastel Stufa** diventa **Pastel pellet stove**.
- Gli identificativi delle due nuove card restano invariati: le loro configurazioni già salvate funzionano senza modifiche.
- Rimossi i tre vecchi tipi, i relativi editor, la vecchia documentazione e gli esempi; il catalogo contiene ora 17 tipi attivi.

Aggiorna da HACS (versioni preliminari abilitate) e **ricarica completamente il frontend** per vedere il selettore ripulito e i nuovi nomi. Test automatici e verifica browser con dati simulati; nessun dispositivo reale azionato.

## English

Removes the old native Climate, custom-action/IR Climate and Thermostat card types. Rename the retained script-driven card to **Pastel Climate AC** and Stove to **Pastel pellet stove**. Their existing type IDs and saved configurations remain unchanged. The picker now contains 17 active types. Read the migration guide for dashboards using retired types; reload the frontend after updating.
