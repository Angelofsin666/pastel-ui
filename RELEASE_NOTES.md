# Pastel UI v1.5.0

## English

Two new heating cards join Pastel UI: **Fan Heater** and **Infrared Panel**. The suite now has **56 card types**. Both cards offer a large device illustration, room-temperature and power readings, a target-temperature helper, and configurable power and temperature actions. Their visual editors let you choose your own Home Assistant entities, scripts, labels and colours. The displayed status and target always follow the selected entities; unconfigured actions remain disabled.

**Doorbell** buttons are now larger and easier to tap on phones, with clearer icons and labels. Existing card configurations remain compatible. Automated tests and the bundle build pass; physical devices were not operated. [Full changelog](CHANGELOG.md) · [Heating-card guide](docs/cards/equipment.md). Development was assisted by AI tools under maintainer review; [card and improvement requests are welcome](CONTRIBUTING.md).

## Italiano

Arrivano due card per il riscaldamento: **Fan Heater** (stufetta ad aria) e **Infrared Panel** (pannello riscaldante). Pastel UI comprende ora **56 tipi di card**. Entrambe offrono un disegno grande, temperatura ambiente, consumo, aiutante della temperatura impostata e comandi configurabili per alimentazione e temperatura. Nell’editor puoi scegliere entità, script, nomi e colori del tuo impianto. Stato e valore impostato seguono sempre le entità associate; i comandi non configurati restano disabilitati.

I pulsanti del **citofono** sono più grandi e comodi da premere sul telefono, con icone e testi più leggibili. Le configurazioni esistenti restano compatibili. Test automatici e compilazione superati; nessun dispositivo fisico è stato comandato. [Changelog completo](CHANGELOG.md) · [Guida alle card](docs/cards/equipment.md). Lo sviluppo è stato assistito da strumenti di IA sotto la revisione del manutentore; [richieste di card e miglioramenti sono benvenute](CONTRIBUTING.md).

---

# Pastel UI v1.4.0

## English

Nine new Pastel cards are here: **UPS, Home Network, Electric Car, Aquarium, Greenhouse, Mailbox, Kitchen Robot, Waste Collection and Thermostat**. They bring the suite to **54 card types**, all with configurable colours and user-selected entities. Kitchen Robot has a bowl-and-screen illustration inspired by multifunction cooking appliances.

Waste Collection accepts calendars, sensors, input selects and booleans, with any number of named collection rows. Thermostat controls a selected Home Assistant `climate` entity using only its reported modes and target-temperature limits. Existing cards and configurations remain compatible.

Automated tests and the bundle build pass; real devices have not been operated. [Full changelog](CHANGELOG.md) · [Equipment guide](docs/cards/equipment.md) · [Thermostat guide](docs/cards/thermostat.md). Development was assisted by AI tools under maintainer review; [card requests are welcome](CONTRIBUTING.md).

## Italiano

Arrivano nove card Pastel: **UPS, Home Network, Electric Car, Aquarium, Greenhouse, Mailbox, Kitchen Robot, Waste Collection e Thermostat**. La raccolta comprende ora **54 tipi di card**, con colori ed entità personalizzabili. Kitchen Robot mostra un boccale con manico e base con schermo, nello stile dei robot da cucina multifunzione.

Waste Collection accetta calendari, sensori, `input_select` e booleani, con tutte le raccolte nominate che servono. Thermostat comanda un’entità `climate` scelta dall’utente e mostra solo le modalità e i limiti di temperatura supportati dal dispositivo. Le card e le configurazioni precedenti restano compatibili.

Test automatici e compilazione superati; nessun dispositivo fisico è stato comandato. [Changelog completo](CHANGELOG.md) · [Guida dispositivi](docs/cards/equipment.md) · [Guida termostato](docs/cards/thermostat.md). Lo sviluppo è stato assistito da IA sotto la revisione del manutentore; [le richieste di nuove card sono benvenute](CONTRIBUTING.md).

---

# Pastel UI v1.3.1

## English

**Pellet Stove now supports a pellet-bag counter.** Select a Home Assistant `counter` helper in the new **Aiutante contatore sacchi** field. A “Sacchi disponibili” tile then displays its live value. If you leave the field empty, your stove card looks exactly as before. The card reads the counter but never decrements it; your refill automation remains responsible for that change. Climate AC and the other 44 cards are unchanged.

Automated tests and the bundle build pass. [Full changelog](CHANGELOG.md) · [Pellet Stove guide](docs/cards/stove.md). Development was assisted by AI tools under maintainer review, and [card requests are welcome](CONTRIBUTING.md).

## Italiano

**Pellet Stove ora mostra il contatore dei sacchi di pellet.** Seleziona un aiutante `counter` nel nuovo campo **Aiutante contatore sacchi**: comparirà il riquadro “Sacchi disponibili” con il valore aggiornato. Lascia il campo vuoto per mantenere la card identica a prima. La card legge il contatore senza scalarlo; se ne occupa la tua automazione al rabbocco. Climate AC e le altre 44 card restano invariate.

Test automatici e compilazione superati. [Changelog completo](CHANGELOG.md) · [Guida Pellet Stove](docs/cards/stove.md). Lo sviluppo è stato assistito da strumenti di IA sotto la revisione del manutentore; [le richieste di card sono benvenute](CONTRIBUTING.md).

---

# Pastel UI v1.3.0

## English

Five new cards join Pastel UI: **Garage & Gate**, **Doorbell**, **Smart Lock**, **Air Quality** and **Water Safety**. The suite now includes **45 card types**. Garage & Gate labels its main cover “Basculante” by default. Doorbell accepts any Home Assistant `camera` entity, displays a still preview and opens the native camera viewer for Live. Cover, lock and valve controls follow actual entity state and supported Home Assistant features. Water Safety can show any number of named leak sensors. Names, colours, optional readings and extra script buttons can be configured in the visual editor. No personal entity IDs are included in defaults.

Automated tests and the bundle build pass. These cards have been exercised with simulated Home Assistant entities; operation against physical devices remains unverified. [Full changelog](CHANGELOG.md) · [Configuration guide](docs/cards/equipment.md) · [Install with HACS](docs/installation.md). AI tools assisted development under maintainer review, and [card requests are welcome](CONTRIBUTING.md).

## Italiano

Pastel UI aggiunge cinque card: **Garage & Gate**, **Doorbell**, **Smart Lock**, **Air Quality** e **Water Safety**. La raccolta comprende ora **45 tipi di card**. Garage & Gate chiama “Basculante” il `cover` principale. Doorbell accetta qualsiasi entità `camera`, mostra un'anteprima e apre il visualizzatore nativo con Live. I comandi di `cover`, `lock` e `valve` seguono lo stato reale e le funzioni supportate. Water Safety può mostrare quanti sensori perdite servono. Nomi, colori, valori opzionali e pulsanti script aggiuntivi sono configurabili nell'editor. Nessun ID personale è preimpostato.

Test automatici e compilazione superati. Le card sono state provate con entità Home Assistant simulate; il comando di dispositivi fisici resta da verificare. [Changelog completo](CHANGELOG.md) · [Guida](docs/cards/equipment.md) · [Installazione HACS](docs/installation.md). Il progetto è stato sviluppato con aiuto dell'IA sotto la revisione del manutentore e [accoglie richieste di nuove card](CONTRIBUTING.md).

---

# Pastel UI v1.2.0

## English

**Eleven new cards:** 3D Printer, Printer, Rainwater Tank, Ventilation, Range Hood, Litter Robot, Pet Bowls, Chicken Feeder, Irrigation, Solar and Home Battery. Each has a dedicated Pastel illustration, selectable readings and customizable controls. The final Litter Robot illustration shows a seated cat, and Chicken Feeder includes a hen. Irrigation supports any number of zones with independent state, start and stop commands. Percentage-based main readings include a level bar. The existing 29 card types and saved configurations remain compatible; Pastel UI now offers **40 card types**.

The bundle and automated tests pass; all eleven cards were rendered in a simulated browser at phone width. Physical devices were not operated. [Read the full changelog](CHANGELOG.md) and [configuration guide](docs/cards/equipment.md). Update Pastel UI to v1.2.0 through HACS, then reload the Home Assistant frontend. The project welcomes [card requests and contributions](CONTRIBUTING.md) and was developed with AI assistance under maintainer review.

## Italiano

**Undici nuove card:** stampante 3D, stampante, raccolta acqua piovana, VMC, cappa cucina, lettiera robot, ciotole acqua/cibo, mangiatoia galline, irrigazione, fotovoltaico e batterie di accumulo. Ognuna ha un disegno Pastel dedicato, valori selezionabili e comandi personalizzabili. La lettiera mostra un gatto seduto e la mangiatoia include una gallina. Irrigation gestisce un numero libero di zone con stato, avvio e arresto indipendenti. I valori principali in percentuale mostrano una barra di livello. I 29 tipi precedenti e le configurazioni salvate restano compatibili: Pastel UI comprende ora **40 tipi di card**.

Il pacchetto e i test automatici passano; tutte le undici card sono state renderizzate nella demo simulata a larghezza telefono. Nessun dispositivo fisico è stato comandato. Consulta il [changelog completo](CHANGELOG.md) e la [guida alla configurazione](docs/cards/equipment.md). Aggiorna Pastel UI alla v1.2.0 da HACS, poi ricarica l'interfaccia Home Assistant. Sono benvenute [richieste di card e contributi](CONTRIBUTING.md); lo sviluppo ha ricevuto l'aiuto dell'IA sotto la revisione del manutentore.

---

# Pastel UI v1.1.0

## English

**Nine new cards in the Pastel style:** Pool, basement Sump Pumps, Water Booster, Coffee Machine, Air Fryer, Boiler, Hot Water, EV Charger and Pool Robot. Each has a dedicated illustration, live values, optional status and phone-friendly controls. Choose your own entities and add as many script or native-action buttons as needed in the visual editor. No personal entity IDs are built in; missing values show `—` and unconfigured commands remain disabled.

Pastel UI now includes **29 card types** in one HACS Dashboard download. Existing card IDs and saved configurations remain unchanged. See the [configuration guide](docs/cards/equipment.md) and [full changelog](CHANGELOG.md). Automated tests cover registration, actions and missing data; the new cards have not been tested with specific physical devices.

To update, download v1.1.0 in HACS and reload your dashboard. Confirm one `/hacsfiles/pastel-ui/pastel-ui.js` JavaScript module resource. [Card requests and contributions](CONTRIBUTING.md) are welcome. AI tools assisted development under maintainer review.

## Italiano

**Nove nuove card nello stile Pastel:** Pool, Sump Pumps per le pompe anti-allagamento dei sotterranei, Water Booster, Coffee Machine, Air Fryer, Boiler, Hot Water, EV Charger e Pool Robot. Ognuna ha un disegno dedicato, valori aggiornati, stato opzionale e pulsanti comodi sul telefono. Nell'editor scegli le tue entità e aggiungi tutti i comandi script o nativi necessari. Nessun ID personale è incorporato; valori mancanti mostrano `—` e comandi non configurati restano disabilitati.

Pastel UI comprende ora **29 tipi di card** in un solo download HACS. Gli ID e le configurazioni esistenti restano invariati. Consulta la [guida](docs/cards/equipment.md) e il [changelog](CHANGELOG.md). I test coprono registrazione, azioni e dati mancanti; i nuovi tipi non sono stati provati sui singoli dispositivi fisici.

Per aggiornare, scarica la v1.1.0 in HACS e ricarica la dashboard. Verifica che ci sia una sola risorsa JavaScript Module `/hacsfiles/pastel-ui/pastel-ui.js`. Sono benvenute [richieste di card e contributi](CONTRIBUTING.md). Il progetto è stato sviluppato con l'aiuto dell'IA e la revisione del manutentore.

---

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
