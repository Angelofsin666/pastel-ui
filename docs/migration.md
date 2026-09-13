# Migration / Migrazione

## English

The suite preserves all fourteen existing `custom:pastel-…` card types. Existing YAML remains the starting point: you do not replace every card with Appliance or Robot.

1. Save a copy of the dashboard configuration and the current resource URLs.
2. Download Pastel UI. Before reloading, remove the **resource entries** for the standalone Pastel cards and register the suite resource once. You can retain their downloaded files while testing, but do not load them.
3. Reload the frontend fully. The card types now resolve from the suite. Validate one example of each card you use.
4. Keep your current entities, names and actions. Check custom `image_url` values: files in old HACS directories remain external overrides and will disappear if you later uninstall those repositories. Copy custom artwork to your own `/local/` folder or remove the override to use the suite default.
5. Once verified, uninstall the obsolete standalone HACS packages. Future updates come from Pastel UI.

The native `pastel-climate-card` has a redesigned implementation but retains `entity`, `title`, `temp_sensor` and `humidity_sensor`. `pastel-clima-card` (custom/IR actions), `pastel-dishwasher-card` and `pastel-lawn-mower-card` retain their existing configuration format. Moving an individual card to Appliance or Robot is optional and uses the new editor.

**Duplicate definitions:** the suite skips elements already registered by another resource and logs a warning. This prevents a suite-side duplicate-definition error, but does not guarantee that the redesigned version wins. A full reload with only the suite resource is required; older standalone files can themselves throw duplicate-definition errors if left loaded.

**Rollback:** remove the suite resource, restore the original resource entries, and reload. Restore the saved dashboard YAML if you converted any cards to the new Appliance/Robot types. Real-installation migration testing is still pending for this beta.

## Italiano

La suite mantiene tutti i quattordici tipi `custom:pastel-…` esistenti. Il tuo YAML resta il punto di partenza: non devi sostituire ogni card con Appliance o Robot.

1. Salva una copia della configurazione della dashboard e degli URL delle risorse.
2. Scarica Pastel UI. Prima di ricaricare, rimuovi le **voci delle risorse** delle card singole e registra una sola volta quella della suite. Durante i test puoi conservare i file precedenti, ma non caricarli.
3. Ricarica completamente l'interfaccia. Controlla almeno un esempio di ogni card utilizzata.
4. Mantieni entità, nomi e azioni. Verifica gli `image_url` personalizzati: i file nelle vecchie cartelle HACS spariranno se disinstalli quelle repository. Copia le immagini personalizzate in una tua cartella `/local/`, oppure rimuovi l'override per usare l'immagine della suite.
5. Dopo la verifica, disinstalla i vecchi pacchetti HACS. Gli aggiornamenti successivi arriveranno da Pastel UI.

La nuova `pastel-climate-card` conserva `entity`, `title`, `temp_sensor` e `humidity_sensor`. Le configurazioni di `pastel-clima-card` (azioni personalizzate/IR), lavastoviglie e tagliaerba restano disponibili. Passare ad Appliance o Robot è facoltativo e si fa con il nuovo editor.

La suite salta le card già registrate da un'altra risorsa e mostra un avviso nella console. Questo non garantisce quale versione venga usata: serve una ricarica completa con la sola risorsa della suite. I vecchi file possono generare errori se continuano a essere caricati.

**Per tornare indietro:** rimuovi la risorsa della suite, ripristina quelle originali e ricarica. Ripristina il YAML salvato se hai convertito delle card nei nuovi tipi. La migrazione su un impianto reale resta da verificare durante la beta.
