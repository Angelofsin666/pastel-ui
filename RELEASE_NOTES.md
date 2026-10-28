# Pastel UI v1.0.2

## English

**Lawn Mower correction:** the gallery preview and the `custom:pastel-lawn-mower-card` itself now show the green Robot-style card with the correct mower illustration, live status and supported native controls. Previously saved mower and sensor fields are mapped automatically; a custom `image_url` is replaced by the shared illustration. The published example uses fictional data. See [migration](docs/migration.md).

**Maintenance update:** fixes the gallery layout and Italian catalog text. Card behaviour and saved configurations are unchanged from v1.0.0.

**Pastel UI reaches its first stable release:** 20 coordinated cards in one HACS Dashboard download, with visual editors, configurable entity associations and phone-friendly controls.

### New in 1.0

- **Pastel Christmas Tree:** the approved garland illustration follows a selected light or switch. Brightness is shown and controlled when the light supports it. Add any number of script or scene atmospheres, each with editable name, icon and colour. An optional helper identifies the active atmosphere without guessing from the last command. Optional scripts handle power for script-driven setups.
- **Clearer starting point:** the HACS-facing README and installation guide now put the entire catalog, customization, migration and limitations up front in English followed by Italian. New contribution guidance explicitly welcomes requests for cards and changes, and discloses AI assistance.
- **Portable defaults:** the default Alarm title is now generic; existing custom titles remain saved. The source was audited for fixed personal entity IDs. Demo IDs are fictional and live only in the demo and examples.

### What matured during beta

Script-controlled AC and pellet stove, configurable native/script alarm controls, a security overview, mobile lights and roller-shutter controls, live weather, TV controls, room temperature tiles, appliance and robot discovery, and the original sensor and utility cards now share one suite. Picker names are consistent English names; saved card type IDs remain stable. The former standalone `light-card` and `tapparella-card` type IDs remain compatibility aliases.

### Upgrade

Install or update **Pastel UI** in HACS, then reload the dashboard. Confirm a single `/hacsfiles/pastel-ui/pastel-ui.js` JavaScript module resource. If you still load a standalone Pastel resource, read [migration](docs/migration.md) before removing it. Retired Climate/Thermostat and Temperature & Humidity card types are **not** restored by 1.0; replace them as described in the migration guide.

### Verification and limits

Automated tests and a local browser demo use simulated Home Assistant state. HACS installation has been checked on the maintainer's Home Assistant, but the new Christmas Tree card has not operated a physical tree. Service support varies by integration. See [testing](docs/testing.md) for exact coverage. Pastel UI is community maintained and not affiliated with Home Assistant.

## Italiano

**Correzione Lawn Mower:** l’anteprima nella galleria e la card `custom:pastel-lawn-mower-card` mostrano il design verde di Robot, con il tagliaerba corretto, stato aggiornato e comandi nativi supportati. Le vecchie associazioni per tagliaerba e sensori sono lette automaticamente; un’eventuale `image_url` viene sostituita dall’illustrazione comune. L’esempio pubblico usa dati fittizi. Consulta la [migrazione](docs/migration.md).

**Aggiornamento di manutenzione:** corregge la galleria e il testo italiano del catalogo. Comportamento delle card e configurazioni salvate sono invariati rispetto alla v1.0.0.

**Pastel UI arriva alla prima versione stabile:** 20 card coerenti in un solo download HACS Dashboard, con editor visuali, entità configurabili e comandi pensati per il telefono.

### Novità della 1.0

- **Pastel Christmas Tree:** la ghirlanda approvata segue una luce o un interruttore scelto dall'utente. La luminosità appare se supportata. Aggiungi tutte le atmosfere script o scena che vuoi, con nome, icona e colore modificabili. Un aiutante opzionale identifica l'atmosfera attiva senza dedurla dall'ultimo comando. Per impianti basati su script si possono associare anche accensione e spegnimento.
- **Presentazione completa:** README visibile in HACS e guida d'installazione descrivono catalogo, personalizzazione, migrazione e limiti prima in inglese e poi in italiano. La nuova guida ai contributi invita a chiedere card e modifiche e dichiara l'aiuto dell'IA.
- **Configurazioni trasferibili:** il nome iniziale di Alarm diventa generico; i nomi già salvati restano invariati. Il codice è stato controllato per ID di entità personali fissi. La demo usa solo ID fittizi.

### Crescita durante la beta

Clima e stufa comandati da script, allarme nativo/script, riepilogo sicurezza, luci e tapparelle mobile, meteo, TV, temperatura a riquadri, scoperta di elettrodomestici e robot e card dei sensori condividono ora la stessa suite. I nomi pubblici sono in inglese, gli ID delle card salvate restano validi. `light-card` e `tapparella-card` restano alias di compatibilità.

### Aggiornamento

Installa o aggiorna **Pastel UI** in HACS e ricarica la dashboard. Controlla che ci sia una sola risorsa JavaScript Module `/hacsfiles/pastel-ui/pastel-ui.js`. Se carichi ancora risorse delle vecchie card singole, leggi la [migrazione](docs/migration.md). I tipi Climate/Thermostat e Temperature & Humidity ritirati **non** tornano nella 1.0.

### Verifiche e limiti

I test automatici e la demo browser usano stati Home Assistant simulati. L'installazione HACS è stata verificata sul sistema del manutentore, ma la nuova card Christmas Tree non ha comandato un albero fisico. Le funzioni disponibili dipendono dall'integrazione. La copertura esatta è nelle [note sui test](docs/testing.md). Pastel UI è un progetto della comunità, non affiliato a Home Assistant.
