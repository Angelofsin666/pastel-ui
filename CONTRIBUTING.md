# Contributing / Contribuire

## English

Card ideas, UX improvements, bug reports and code contributions are welcome. Open an issue with the affected card, Home Assistant integration, expected behaviour, actual behaviour and a reproducible configuration using anonymised entity IDs. Add a screenshot when the issue is visual. Never post credentials, private addresses, access tokens or identifiable household information.

For code changes, use Node.js 20+, run `npm ci` and `npm run check`, and include a focused test when behaviour or state handling changes. Keep public card names in English; maintain the English-then-Italian documentation order. Preserve existing type IDs and saved configurations unless a migration is documented. New controls must read real Home Assistant state, gate unsupported services and remain usable on narrow phones.

AI tools may assist contributions. Please review and test their output; mention material AI assistance in the pull request. The maintainer reviews and decides what ships.

## Italiano

Sono benvenute idee per nuove card, migliorie d'uso, segnalazioni e contributi al codice. Apri una issue indicando card, integrazione Home Assistant, comportamento atteso e osservato e configurazione riproducibile con ID anonimizzati. Per problemi grafici aggiungi un'immagine. Non pubblicare credenziali, indirizzi privati, token o dati identificabili della casa.

Per modifiche al codice usa Node.js 20+, esegui `npm ci` e `npm run check` e aggiungi un test mirato se cambia il comportamento. I nomi pubblici restano in inglese e la documentazione segue l'ordine inglese-italiano. Conserva gli ID e le configurazioni esistenti salvo migrazione documentata. I controlli devono leggere stati reali, rispettare le funzioni supportate e funzionare su schermi piccoli.

Puoi usare strumenti di IA, ma rivedi e verifica il risultato e dichiara un aiuto sostanziale nella pull request. Il manutentore decide cosa pubblicare.
