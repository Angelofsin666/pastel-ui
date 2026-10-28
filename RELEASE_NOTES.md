## Italiano

- **Pastel Temperature** ridisegnata con i **riquadri degli ambienti** approvati nell’anteprima: stesso stile delle nuove card, pannello pastello con termometro, media, minima e massima delle letture attuali.
- Ogni ambiente può avere nome, icona, colore, sensore temperatura e sensore umidità facoltativo. Editor con ricerca dei sensori appropriati e possibilità di aggiungere, rimuovere e riordinare gli ambienti.
- Dati aggiornati dagli stati reali; sensori non disponibili espliciti ed esclusi dalla media. Conversione °C/°F/K prima delle medie. Andamento facoltativo dalle ultime due ore di storico.
- L’identificativo `custom:pastel-temp-card` e le configurazioni esistenti di Pastel Temperature restano validi.
- **Rimossa Pastel Temperature & Humidity** (`custom:pastel-temp-humidity-card`). Le dashboard che la usano devono sostituirla con Pastel Temperature scegliendo i sensori separati nell’editor. Non c’è conversione automatica dalla vecchia configurazione con attributi. Restano **16 card**.

Aggiorna da HACS alla **v0.1.0-beta.10** (versioni preliminari abilitate) e ricarica completamente l’interfaccia. [Configurazione](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/cards/temp.md).

## English

Redesigns **Pastel Temperature** with room tiles matching the shared Pastel theme, filtered sensor selection, configurable names/icons/colors, optional humidity, current min/max and history-based trends. Saved Temperature type IDs and room associations remain valid. **Pastel Temperature & Humidity is removed**; replace retired cards with Temperature and associate separate sensors. There are now **16 active card types**. Update and fully reload the frontend.
