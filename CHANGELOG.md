# Changelog

## 1.11.2 — Named open doors and windows / Nomi delle porte e finestre aperte

### English

- **Pastel Security Overview** now shows the names of open doors and windows beneath their count. Existing door and window tiles discover matching Home Assistant binary sensors automatically from their icon and `device_class`. The count sensor remains the source of truth.
- The visual editor lets users choose the opening type or select an exact list of sensors. When the count exceeds the names found, the tile clearly reports the unnamed openings. Zero and unavailable counts keep their previous behaviour. The catalog remains at **104 card types**.

### Italiano

- **Pastel Security Overview** mostra sotto il conteggio i nomi delle porte e finestre aperte. I riquadri esistenti riconoscono automaticamente i sensori binari corrispondenti usando l’icona e la `device_class` di Home Assistant. Il sensore scelto continua a determinare il numero.
- Nell’editor visuale si può scegliere il tipo di apertura o un elenco preciso di sensori. Se i nomi trovati sono meno delle aperture contate, il riquadro segnala quante restano senza nome. I conteggi zero e non disponibili mantengono il comportamento precedente. Il catalogo resta a **104 tipi di card**.

## 1.11.1 — Live time on buttons / Tempo in diretta sui pulsanti

### English

- **Pastel Button** can now show an optional elapsed timer on any button. Select a Home Assistant state entity and the state that means “active”; the counter starts from that entity's `last_changed`, updates every second and disappears when the state changes. Alternatively, display the value of an existing duration sensor or template entity.
- The visual editor exposes these choices per button alongside its existing action, icon, name and colour. Existing buttons behave as before. A fictional demo and bilingual guide explain both options. The catalog remains at **104 card types**.

### Italiano

- **Pastel Button** può mostrare un cronometro facoltativo su ogni pulsante. Seleziona un'entità di stato di Home Assistant e lo stato che significa “attivo”: il conteggio parte dal suo `last_changed`, avanza ogni secondo e scompare quando lo stato cambia. In alternativa puoi mostrare il valore di un sensore di durata o di un'entità template già esistente.
- L'editor visuale offre queste opzioni per ciascun pulsante, insieme ad azione, icona, nome e colore. I pulsanti esistenti funzionano come prima. Demo fittizia e guida bilingue spiegano entrambe le possibilità. Il catalogo resta a **104 tipi di card**.

## 1.11.0 — Cameras together / Tutte le telecamere insieme

### English

- Add **Pastel Cameras**, bringing the catalog to **104 card types**. One card displays any number of selected cameras together in a mobile-friendly two-column grid or a full-width list. Home Assistant refreshes the still previews while visible; tapping a tile opens its native larger camera dialog, with live video when supported.
- The visual editor searches `camera.*` entities only and lets users add, remove, rename and reorder cameras, choose a palette and adjust individual card colours. Unavailable cameras show a placeholder. No personal camera IDs are included. A fictional demo and bilingual guide are included.

### Italiano

- Aggiunge **Pastel Cameras**, portando il catalogo a **104 tipi di card**. Una card mostra insieme quante telecamere vuoi, in griglia a due colonne adatta al telefono o in elenco a larghezza piena. Home Assistant aggiorna le anteprime statiche quando sono visibili; toccando un riquadro si apre la sua finestra grande, con video dal vivo se supportato.
- L'editor visuale cerca solo entità `camera.*` e permette di aggiungere, rimuovere, rinominare e riordinare le telecamere, scegliere la palette e personalizzare i colori. Le telecamere non disponibili mostrano un segnaposto. Nessun ID personale è incluso. Aggiunte demo fittizia e guida bilingue.

## 1.10.1 — Waste Collection next pickup / Prossima raccolta rifiuti

### English

- Fix **Pastel Waste Collection** so the large value beside the bin automatically displays the name of the nearest upcoming pickup from the configured rows when `hero_entity` is empty. Dated calendar and helper values are compared regardless of row order; an active helper can be used when no dates are available. A manually selected `hero_entity` still overrides the automatic value.
- Clarify the option in the visual editor and bilingual guide. The catalog remains at **103 card types**. Automated tests and bundle build pass; no real calendars or devices were changed.

### Italiano

- Corregge **Pastel Waste Collection**: il riquadro grande accanto al bidone mostra automaticamente il nome della raccolta futura più vicina tra le righe configurate quando `hero_entity` è vuoto. Le date di calendari e aiutanti vengono confrontate indipendentemente dall’ordine delle righe; se non ci sono date può essere usato un aiutante attivo. L’entità principale scelta manualmente continua ad avere la precedenza.
- Chiarita l’opzione nell’editor visuale e nella guida bilingue. Il catalogo resta a **103 tipi di card**. Test automatici e compilazione superati; nessun calendario o dispositivo reale è stato modificato.

## 1.10.0 — Grouped radiator valves / Valvole termostatiche raggruppate

### English

- Add **Pastel Radiator Valves**, bringing the catalog to **103 card types**. A single phone-friendly card holds any number of rooms, with a large radiator illustration, average room temperature, live status and target per valve, and optional battery readings. Rooms can be added, removed, renamed and reordered in the visual editor; colours and labels remain customizable.
- The card uses user-selected Home Assistant `climate` entities. Each +/− control follows that valve's supported target feature, step and min/max limits and calls `climate.set_temperature` only when available. Displayed values follow reported entity states, including changes made elsewhere. No personal entity IDs are included.
- Add a fictional demo and bilingual guide. Automated tests and bundle build pass; the mobile layout was checked at 390 px without horizontal overflow. No physical valve was operated.

### Italiano

- Aggiunge **Pastel Radiator Valves**, portando il catalogo a **103 tipi di card**. Una sola card adatta al telefono riunisce quante stanze vuoi, con grande disegno del termosifone, temperatura media, stato e valore impostato di ogni valvola e batteria facoltativa. Nell'editor puoi aggiungere, rimuovere, rinominare e riordinare le stanze e personalizzare colori e nomi.
- La card usa entità `climate` di Home Assistant scelte dall'utente. I controlli +/− rispettano funzione supportata, passo e limiti di ciascuna valvola e chiamano `climate.set_temperature` solo se disponibile. I valori mostrati seguono gli stati reali, anche quando cambiano altrove. Non sono presenti ID personali.
- Aggiunte demo fittizia e guida bilingue. Test automatici e compilazione superati; layout mobile verificato a 390 px senza scorrimento laterale. Nessuna valvola fisica è stata comandata.

## 1.9.0 — Seven new cards / Sette nuove card

### English

- Add **Pastel Chicken Coop, Parking Spot, Hydroponic Garden, Treadmill, E-Bike, Energy Tariff and Electric Scooter**. The catalog now has **102 card types**. Each new card has a distinct full-size line illustration, a selectable palette and editable names and readings. E-Bike and Electric Scooter are separate designs.
- Energy Tariff's **Today / Tomorrow** controls switch the main price reading between the two sensors selected by the user; they do not send a service call or invent a price. The other new cards support configurable action buttons. Unconfigured actions remain disabled, and all status and measurements follow the chosen Home Assistant entities. No personal entity IDs are preset.
- Add all seven to the Home Assistant card picker and fictional demo. Automated tests and bundle build pass; the seven-card demo was checked at a 390 px viewport with no horizontal overflow. No physical devices were operated.

### Italiano

- Aggiunge **Pastel Chicken Coop, Parking Spot, Hydroponic Garden, Treadmill, E-Bike, Energy Tariff ed Electric Scooter**. Il catalogo arriva a **102 tipi di card**. Ognuna ha un grande disegno dedicato, palette selezionabile e nomi e valori modificabili. E-Bike ed Electric Scooter hanno disegni distinti.
- I pulsanti **Oggi / Domani** di Energy Tariff cambiano il prezzo principale leggendo i due sensori scelti dall'utente; non chiamano servizi né inventano un prezzo. Le altre nuove card supportano pulsanti configurabili. I comandi non associati restano disabilitati; stato e valori seguono le entità selezionate. Nessun ID personale è preimpostato.
- Le sette card sono nel selettore Home Assistant e nella demo con dati fittizi. Test automatici e compilazione superati; demo verificata su viewport da 390 px senza scorrimento laterale. Nessun dispositivo fisico è stato comandato.

## 1.8.0 — Ten more device cards / Dieci nuove card per dispositivi

### English

- Add **Pastel Humidifier, Wine Cellar, Water Softener, Sauna, Electric Fireplace, Parcel Box, Smart Scale, Compost Bin, Aroma Diffuser and Bird Feeder**. The catalog now has **95 card types**. All ten have distinct, full-size Pastel line illustrations, editable colours and labels, optional sensor/helper readings and as many configurable action buttons as needed.
- Bird Feeder can open any user-selected Home Assistant `camera` entity from a dedicated button while retaining its food-level illustration. Every new card reads its status from the selected entity; actions can call scripts, scenes, buttons, switches or automations. Unconfigured actions remain disabled and no personal entity IDs are included.
- Add the ten cards to the Home Assistant picker and a fictional demo group. Check the mobile layout at 390 px with no horizontal overflow, verify the camera action, run all automated tests and rebuild the bundle. No physical devices were operated.

### Italiano

- Aggiunge **Pastel Humidifier, Wine Cellar, Water Softener, Sauna, Electric Fireplace, Parcel Box, Smart Scale, Compost Bin, Aroma Diffuser e Bird Feeder**. Il catalogo arriva a **95 tipi di card**. Tutte e dieci hanno grandi disegni Pastel distinti, colori e nomi modificabili, valori facoltativi da sensori o aiutanti e un numero libero di pulsanti configurabili.
- Bird Feeder può aprire qualsiasi entità `camera` scelta dall’utente con un pulsante dedicato, mantenendo il disegno e il livello del mangime. Lo stato delle nuove card segue l’entità associata; i comandi possono richiamare script, scene, pulsanti, interruttori o automazioni. I comandi non configurati restano disabilitati e non sono presenti ID personali.
- Le dieci card sono nel selettore Home Assistant e in una demo con dati fittizi. Verificati layout mobile a 390 px senza scorrimento laterale e comando telecamera; test automatici e compilazione superati. Nessun dispositivo fisico è stato comandato.

## 1.7.0 — Eight air, kitchen and bathroom cards / Otto card per aria, cucina e bagno

### English

- Add **Pastel Air Purifier, Air Multiplier, Ice Maker, Bread Maker, Toaster, Smart Toothbrush, Smart Mirror and Smart Toilet**. The catalog now has **85 card types**. Each new card has its own large line illustration, selectable pastel colours, editable names, readings and buttons, and a mobile-friendly layout.
- Air Purifier and Air Multiplier can optionally use any Home Assistant `fan` entity. Their native controls read the fan's actual power state, percentage and oscillation attributes, and call the corresponding supported services. Native button names and colours are editable. Speed steps follow the entity's `percentage_step` when supplied. Unsupported or unavailable controls remain disabled; displayed values do not change optimistically after a press. Separate configurable script buttons accommodate device-specific Auto, Boost and other modes.
- The other six cards accept user-selected sensors/helpers and any number of editable script, button, switch or scene actions. New defaults contain no personal entity IDs and existing Appliance profiles remain available. Add all eight to the card picker and fictional demo. Automated tests and bundle build pass; no physical devices were operated.

### Italiano

- Aggiunge **Pastel Air Purifier, Air Multiplier, Ice Maker, Bread Maker, Toaster, Smart Toothbrush, Smart Mirror e Smart Toilet**. Il catalogo arriva a **85 tipi di card**. Ogni nuova card ha un grande disegno dedicato, colori Pastel selezionabili, nomi, valori e pulsanti modificabili e un layout adatto al telefono.
- Air Purifier e Air Multiplier possono usare qualsiasi entità `fan` di Home Assistant scelta dall'utente. I controlli nativi leggono lo stato reale, la percentuale e l'oscillazione e richiamano i servizi supportati. Nomi e colori dei pulsanti nativi sono modificabili. Il passo della velocità segue l'attributo `percentage_step` se presente. I comandi non disponibili restano disabilitati; i valori mostrati non vengono anticipati dopo la pressione. Pulsanti script separati coprono Auto, Boost e altre modalità specifiche.
- Le altre sei card accettano sensori e aiutanti scelti dall'utente e un numero libero di azioni modificabili per script, pulsanti, interruttori o scene. Nessuna nuova configurazione contiene entità personali e i profili Appliance esistenti restano disponibili. Tutte e otto sono nel selettore card e nella demo fittizia. Test e compilazione superati; nessun dispositivo fisico è stato comandato.

## 1.6.0 — 21 new cards and moving fabric covers / 21 nuove card e tende animate

### English

- Add **Pastel Awning** and **Pastel Curtains** with large, distinct fabric illustrations. Both follow the actual `cover.current_position` or a user-selected percentage sensor (0–100), including changes made elsewhere in Home Assistant. The fabric transitions visually between reported positions; pressing a button alone does not invent a new state. A native cover can expose a position slider when supported.
- Both fabric cards have large mobile controls for Open, Stop and Close. Each command can use the native cover service or a selected script, button or switch. Card names, subtitle, icon, palette, button labels/colours and optional metrics are editable. Without a cover, a position sensor plus scripts can drive the card; unconfigured commands remain disabled.
- Add **19 equipment cards**, bringing the catalog from 56 to **77 types**: Safe, Adjustable Bed, Electric Blanket, Garden Fountain, Window Cleaner, Skylight, Air Compressor, Stairlift, Fish Feeder, Shower, Smart Desk, Outdoor Grill, Snow Melt, Septic Tank, Generator, NAS, Water Meter, Gas Meter and Power Panel. Each has a dedicated full-size Pastel illustration, editable palette, readings, status and flexible controls. Skylight reads a chosen `cover` and exposes its supported native actions and position.
- Add all 21 types to the Home Assistant card picker and local demo. New defaults contain no personal entity IDs; existing cards and configurations remain compatible. Tests, bundle build and phone-width demo checks pass. Physical devices were not operated during testing.

### Italiano

- Aggiunge **Pastel Awning** e **Pastel Curtains** con grandi disegni diversi per tenda da sole e tende interne. Entrambe seguono la vera posizione `current_position` della `cover` oppure un sensore percentuale scelto dall'utente (0–100), anche se cambia altrove in Home Assistant. Il tessuto si anima tra le posizioni riportate; il pulsante da solo non inventa uno stato. Se supportato dalla `cover`, compare il cursore di posizione.
- Le due card hanno pulsanti grandi per Apri, Ferma e Chiudi. Ogni comando può usare il servizio nativo o uno script, pulsante o interruttore scelto. Sono modificabili nome, sottotitolo, icona, palette, etichette e colori dei comandi e valori aggiuntivi. Per le tende comandate solo da script puoi associare un sensore di posizione; i comandi non configurati restano disabilitati.
- Aggiunge **19 card per dispositivi**, portando il catalogo da 56 a **77 tipi**: Safe, Adjustable Bed, Electric Blanket, Garden Fountain, Window Cleaner, Skylight, Air Compressor, Stairlift, Fish Feeder, Shower, Smart Desk, Outdoor Grill, Snow Melt, Septic Tank, Generator, NAS, Water Meter, Gas Meter e Power Panel. Ognuna ha un disegno Pastel grande e dedicato, palette, valori, stato e comandi personalizzabili. Skylight legge una `cover` scelta dall'utente e offre le funzioni native e di posizione supportate.
- Tutte e 21 sono presenti nel selettore card e nella demo. Nessuna nuova configurazione contiene entità personali; le card e le impostazioni precedenti restano compatibili. Test, compilazione e verifica della demo su schermo di telefono superati. Nessun dispositivo fisico è stato comandato durante i test.

## 1.5.0 — Room heaters and larger doorbell controls / Riscaldamento ambiente e comandi citofono più grandi

### English

- Add **Pastel Fan Heater** and **Pastel Infrared Panel**, bringing the catalog to **56 card types**. Both use dedicated illustrations at the same scale as other Pastel device cards, with selectable palettes, names, room-temperature sensors, target helpers, power sensors and state entities.
- Add configurable on/off commands and temperature +/− actions. Scripts, buttons and switches can operate power; scripts or `input_number`/`counter` helpers can operate the temperature controls. The displayed target and status always come from the selected Home Assistant entities, including changes made elsewhere. Unconfigured controls stay disabled.
- Enlarge **Pastel Doorbell** action buttons, labels and icons on phones, preserving its camera and saved button settings. Automated tests and the bundle build pass; physical heating devices were not operated.

### Italiano

- Aggiunge **Pastel Fan Heater** e **Pastel Infrared Panel**: il catalogo arriva a **56 tipi di card**. Entrambe hanno un disegno dedicato della stessa scala delle altre card Pastel, colori e nomi modificabili e selettori per sensore ambiente, aiutante temperatura impostata, consumo ed entità di stato.
- Aggiunge comandi configurabili per accensione, spegnimento e temperatura +/−. Script, pulsanti e interruttori possono comandare l’alimentazione; per la temperatura si possono usare script oppure aiutanti `input_number` e `counter`. Valore impostato e stato seguono sempre le entità scelte, anche dopo modifiche esterne. I comandi non configurati restano disabilitati.
- Ingrandisce pulsanti, etichette e icone dei comandi di **Pastel Doorbell** sul telefono, mantenendo telecamera e configurazioni salvate. Test automatici e compilazione superati; non sono stati comandati dispositivi di riscaldamento reali.

## 1.4.0 — Nine more cards / Altre nove card

### English

- Add **Pastel UPS**, **Home Network**, **Electric Car**, **Aquarium**, **Greenhouse**, **Mailbox**, **Kitchen Robot**, **Waste Collection** and **Thermostat**. The kitchen robot illustration now has a mixing bowl, handle and screen. All nine use the existing Pastel layout, editable colours and user-selected Home Assistant entities; the catalog contains 54 cards.
- Waste Collection supports any number of named collections. Each row can read a `calendar` entity (next event and date), sensor, `input_select`, `select`, `input_boolean` or binary sensor. Boolean labels and active values are editable. Entity IDs can also be typed directly.
- Thermostat uses a native `climate` entity. Its modes, target temperature, step and minimum/maximum come from the selected device; the optional humidity reading comes from a chosen sensor. Unsupported modes and temperature controls are hidden or disabled. Its new type ID is `pastel-native-thermostat-card`, leaving the retired legacy thermostat ID untouched.
- Action buttons on the other new equipment cards can be renamed, reordered and mapped to scripts, buttons, switches or supported Home Assistant actions. Readings always follow entity state. Automated tests and the bundle build pass; physical devices were not operated.

### Italiano

- Aggiunge **Pastel UPS**, **Home Network**, **Electric Car**, **Aquarium**, **Greenhouse**, **Mailbox**, **Kitchen Robot**, **Waste Collection** e **Thermostat**. Il robot da cucina ha un disegno con boccale, manico e schermo. Le nove card seguono lo stile Pastel, con colori modificabili ed entità scelte dall’utente; il catalogo arriva a 54 card.
- Waste Collection gestisce un numero libero di raccolte con nome. Ogni riga può leggere un’entità `calendar` (prossimo evento e data), sensore, `input_select`, `select`, `input_boolean` o sensore binario. Per i booleani si possono modificare le etichette e il valore attivo. È possibile scrivere direttamente gli ID delle entità.
- Thermostat usa un’entità `climate`. Modalità, temperatura impostata, passo e limiti vengono dal dispositivo scelto; un sensore opzionale mostra l’umidità. Le funzioni non supportate vengono nascoste o disabilitate. Il nuovo ID è `pastel-native-thermostat-card`, senza riattivare quello della vecchia card termostato ritirata.
- I pulsanti delle altre nuove card possono essere rinominati, riordinati e associati a script, pulsanti, interruttori o azioni Home Assistant supportate. I valori seguono sempre le entità. Test automatici e compilazione superati; i dispositivi fisici non sono stati comandati.

## 1.3.1 — Pellet bag counter / Contatore sacchi pellet

### English

- Pastel Pellet Stove optionally displays a **Sacchi disponibili** metric tile sourced from a user-selected Home Assistant `counter` helper. The visual editor suggests only `counter` entities and allows direct entity-ID entry. The tile is absent when the field is empty, preserving existing layouts and configurations.
- The value follows Home Assistant state, including changes made by automations; zero is shown as zero and unavailable values as `—`. The card does not decrement bags or infer refills. Climate AC and all other cards are unchanged.
- Add a fictional demo counter, update the bilingual guide and verify the rendering and picker with automated tests.

### Italiano

- Pastel Pellet Stove può mostrare il riquadro **Sacchi disponibili** leggendo un aiutante `counter` scelto dall’utente. Nell’editor la ricerca suggerisce solo entità `counter` e permette anche di scrivere l’ID. Se il campo è vuoto, il riquadro non compare e le configurazioni esistenti restano identiche.
- Il numero segue lo stato di Home Assistant, comprese le modifiche delle automazioni; zero resta zero e i valori non disponibili mostrano `—`. La card non scala i sacchi e non deduce i rabbocchi. Climate AC e tutte le altre card restano invariate.
- Aggiunti un contatore fittizio nella demo, guida bilingue e test automatici per riquadro e selettore.

## 1.3.0 — Access and safety / Accessi e sicurezza

### English

- Add **Pastel Garage & Gate**, **Pastel Doorbell**, **Pastel Smart Lock**, **Pastel Air Quality** and **Pastel Water Safety**. All five use the established rounded Pastel layout and responsive controls. The catalog now contains 45 card types.
- Garage & Gate calls the main `cover` entity **Basculante** by default. Cover, lock and valve cards read live Home Assistant state and expose native actions only when the entity, service and device feature support them. Names and colours remain configurable; optional script buttons support custom installations.
- Doorbell accepts **any `camera` entity**. It shows the entity's still picture or the Home Assistant camera proxy and opens the native camera viewer for Live. Add extra buttons, such as a gate-opening script. Water Safety accepts an unlimited list of named leak sensors.
- No personal entity IDs are built into the new card defaults. Existing card types and saved configurations remain compatible. Automated tests and the bundle build pass; physical devices have not been operated in testing.

### Italiano

- Aggiunge **Pastel Garage & Gate**, **Pastel Doorbell**, **Pastel Smart Lock**, **Pastel Air Quality** e **Pastel Water Safety**, con il consueto stile Pastel e comandi adattabili al telefono. Il catalogo comprende ora 45 card.
- Garage & Gate chiama **Basculante** il controllo principale. Le card per `cover`, `lock` e `valve` leggono lo stato aggiornato da Home Assistant e attivano i comandi nativi solo se entità, servizio e funzione sono disponibili. Nomi e colori restano modificabili; si possono aggiungere pulsanti script.
- Doorbell accetta **qualsiasi entità `camera`**. Mostra l'immagine dell'entità o il proxy di Home Assistant; Live apre il visualizzatore nativo. Si possono aggiungere comandi, per esempio uno script per il cancello. Water Safety gestisce un numero libero di sensori perdite con nome personalizzato.
- Le nuove card non preimpostano entità personali. Le configurazioni esistenti restano compatibili. Test automatici e compilazione superati; nessun dispositivo fisico è stato comandato durante le verifiche.

## 1.2.0 — Eleven new device cards / Undici nuove card

### English

- Add dedicated cards for 3D Printer, Printer, Rainwater Tank, Ventilation, Range Hood, Litter Robot, Pet Bowls, Chicken Feeder, Irrigation, Solar and Home Battery. Their labels, entities, palettes and actions are configurable; no personal entity IDs are supplied. The Litter Robot illustration shows a seated cat; the Chicken Feeder illustration includes a hen.
- Irrigation supports any number of individually named zones with separate state, start and stop entities. Switch-based zone commands call `turn_on` and `turn_off` explicitly. Percentage-based main readings show a level bar.
- Keep Solar and Home Battery readings tied to selected Home Assistant entities without guessing energy-flow direction from signed values. Preserve all 29 existing card types and configurations; the catalog preview has 40 card types.
- Validate the bundle and automated tests; render all eleven in the local demo at phone width without horizontal overflow. Physical-device testing remains pending. Update through HACS and reload the Home Assistant frontend to see the new cards.

### Italiano

- Aggiunge card dedicate per stampante 3D, stampante, raccolta acqua piovana, VMC, cappa cucina, lettiera robot, ciotole acqua/cibo, mangiatoia galline, irrigazione, fotovoltaico e batterie di accumulo. Nomi, entità, colori e comandi sono configurabili, senza ID personali preimpostati. La lettiera mostra un gatto seduto e la mangiatoia include una gallina.
- Irrigazione gestisce un numero libero di zone con nome, stato, avvio e arresto separati. Gli interruttori di zona usano esplicitamente `turn_on` e `turn_off`. I valori principali in percentuale mostrano anche una barra di livello.
- Solar e Home Battery mostrano i sensori scelti senza dedurre il verso dei flussi dal segno dei valori. Restano validi i 29 tipi e le configurazioni esistenti; l'anteprima del catalogo ne comprende 40.
- Pacchetto e test automatici verificati; tutte le undici card sono state renderizzate nella demo locale a larghezza telefono senza scorrimento orizzontale. Restano da provare i dispositivi fisici. Aggiorna da HACS e ricarica l'interfaccia Home Assistant per vedere le nuove card.

## 1.1.0 — Nine new device cards / Nove nuove card

### English

- Add **Pastel Pool**, **Pastel Sump Pumps**, **Pastel Water Booster**, **Pastel Coffee Machine**, **Pastel Air Fryer**, **Pastel Boiler**, **Pastel Hot Water**, **Pastel EV Charger** and **Pastel Pool Robot**. Sump Pumps represents basement flood-prevention equipment, not rainwater collection.
- Give each card a dedicated line illustration at the same hero scale as the existing Pastel cards, a live main reading, optional status and measurements, and a responsive grid of configurable action buttons.
- Add visual editors for entity search, labels, palettes, button icons, reordering and scripts or native Home Assistant actions. No personal entity ID is built into the new cards. Readings follow Home Assistant state; unavailable data remains visibly unknown and unconfigured actions are disabled.
- Expand the public catalog from 20 to 29 card types, and document configuration in English followed by Italian. Existing card IDs and configurations remain unchanged.
- Verify catalog registration, action mapping and missing-data behavior with automated tests. Device-specific physical operation has not been verified.

### Italiano

- Aggiunge **Pastel Pool**, **Pastel Sump Pumps**, **Pastel Water Booster**, **Pastel Coffee Machine**, **Pastel Air Fryer**, **Pastel Boiler**, **Pastel Hot Water**, **Pastel EV Charger** e **Pastel Pool Robot**. Sump Pumps riguarda le pompe anti-allagamento dei sotterranei, non la raccolta dell'acqua piovana.
- Ogni card ha un disegno dedicato della stessa dimensione delle altre Pastel, un valore principale aggiornato, stato e misure opzionali e pulsanti adattabili al telefono.
- Gli editor visuali permettono ricerca delle entità, etichette, palette, icone, ordine dei pulsanti e comandi tramite script o servizi Home Assistant. Nessun ID personale è incorporato. I valori seguono lo stato reale; dati non disponibili restano sconosciuti e comandi non configurati sono disabilitati.
- Il catalogo passa da 20 a 29 card, con guida prima in inglese e poi in italiano. Gli ID e le configurazioni delle card precedenti restano invariati.
- Test automatici per catalogo, comandi e dati mancanti. Il funzionamento sui dispositivi fisici specifici non è stato verificato.

## 1.0.2 — Lawn Mower preview / Anteprima tagliaerba

- English: Replace the outdated Lawn Mower gallery preview and card rendering with the shared green Robot design: line-drawn mower, live status and supported native controls. Keep the existing card type and read legacy entity and sensor settings automatically. Custom `image_url` is replaced by the shared illustration. The public example uses fictional data.
- Italiano: aggiorna l’anteprima e la card Lawn Mower al design verde della card Robot: tagliaerba disegnato, stato reale e comandi nativi supportati. Restano l’identificativo e le vecchie associazioni di entità e sensori. L’eventuale `image_url` viene sostituito dall’illustrazione comune. L’esempio pubblico usa dati fittizi.

## 1.0.1 — Gallery layout / Impaginazione galleria

- English: Keep all 20 cards in one continuous catalog table and place the Christmas Tree screenshot below it. Correct the Italian catalog footer. No card behaviour or configuration changes.
- Italiano: conserva tutte le 20 card in un’unica tabella della galleria e sposta sotto l’immagine Christmas Tree. Corregge la chiusura italiana del catalogo. Nessuna modifica al comportamento o alle configurazioni.

## 1.0.0 — First stable release / Prima versione stabile

### English

- Add **Pastel Christmas Tree** with a garland illustration, real `light`/`switch` state, capability-aware brightness, unlimited script/scene atmospheres, optional real active-mode helper, editable labels/icons/palettes and optional power scripts.
- Consolidate **20 public cards** in one HACS Dashboard package. Keep stable card type IDs and the `light-card` / `tapparella-card` compatibility aliases; older retired card types remain retired.
- Make the default Alarm name generic while preserving any title already saved by a user. Audit source cards for fixed personal entity IDs: none remain; all demo entity IDs are fictional.
- Rewrite the HACS-facing README and installation experience, add the Christmas Tree guide and contribution guide, and document real-device limits and migration. English appears before Italian. Disclose AI assistance and invite card requests and modifications.
- Add Christmas Tree state/action tests and include the new card in the demo, catalog and distribution.

### Italiano

- Aggiunge **Pastel Christmas Tree**: ghirlanda, stato reale da `light`/`switch`, luminosità solo se supportata, atmosfere script/scena senza numero fisso, aiutante opzionale per la modalità attiva, testi/icone/colori modificabili e script opzionali per accensione e spegnimento.
- Riunisce **20 card pubbliche** in un solo pacchetto HACS Dashboard; conserva gli ID attuali e gli alias `light-card` / `tapparella-card`. Le vecchie card ritirate restano ritirate.
- Rende generico il nome iniziale di Alarm senza cambiare i titoli salvati. Verifica nel codice l’assenza di ID di entità personali fissi; la demo usa ID fittizi.
- Riscrive README visibile in HACS e istruzioni di installazione, aggiunge la guida Christmas Tree e la guida ai contributi, chiarisce limiti e migrazione. Prima inglese, poi italiano. Dichiara l’aiuto dell’IA e invita a richiedere card e modifiche.
- Aggiunge test per stato e azioni Christmas Tree e include la card nella demo, nel catalogo e nel pacchetto.


## 0.1.0-beta.12

- Add Pastel Weather with current readings and live daily forecasts from the selected Home Assistant weather entity.
- Add Pastel TV with capability-aware power, playback, volume and source controls for a selected media player.
- Add visual editors with filtered entity search, editable names and Pastel color settings; 19 public card types.
- L'albero di Natale resta una proposta grafica da approvare prima dell'integrazione.

## 0.1.0-beta.11

- Redesign Pastel Lights with the approved smartphone list, large power buttons, full-width sliders and capability-based color/white controls.
- Add Pastel Covers with grouped tiles, real open/stop/close and position controls, optional energy, and the approved roller-shutter drawing.
- Preserve standalone `light-card` and `tapparella-card` configurations with compatibility aliases inside the single suite; 17 public card types.
- Consolidate picker documentation links on pastel-ui and document standalone resource removal.
- Add mobile gesture and capability regression coverage. Sliders cancel during scrolling and commit once on release.

## 0.1.0-beta.10

- Redesign Pastel Temperature with the approved room-tile layout, shared theme, thermometer illustration, current min/max, optional humidity and history trends.
- Add the shared editor with filtered sensor search, room names/icons/colors and reorder controls; retain Temperature type ID and existing room configuration.
- Handle missing data explicitly and normalize °C/°F/K before averaging.
- Remove Pastel Temperature & Humidity and its editor, documentation and demo; 16 active card types remain. See migration guidance before updating retired dashboard cards.

## 0.1.0-beta.9

- Fix missing alarm picker entries: mutate the existing custom-card registry instead of replacing Home Assistant’s retained array.
- Centralize all 17 public names and English descriptions; use consistent Pastel names without the Card suffix.
- Preserve type IDs, user configurations, unrelated registry entries and existing metadata extensions.
- Add regression coverage for cached registry references, duplicate registrations and naming.

## 0.1.0-beta.8

- **Breaking:** remove the old native Pastel Climate, custom-action/IR Climate and Pastel Thermostat cards, their editors and unused AC image asset.
- Keep the new script-driven AC card as **Pastel Climate AC**, and rename Pastel Stufa to **Pastel pellet stove** in the picker.
- Keep `custom:pastel-script-climate-card` and `custom:pastel-stove-card` unchanged so saved configurations of the new cards continue to work.
- Clean up the catalog, demo and current documentation; 17 active card types remain. See migration notes before updating dashboards that still use retired types.

## 0.1.0-beta.7

- Add Pastel Allarme with editable Protego title, visual icon/palette controls, and independently configurable native or script buttons.
- Read alarm state from the selected panel, gate native commands by features/services, and request required codes transiently without saving them in card configuration.
- Add Pastel Riepilogo Sicurezza with editable/reorderable alarm, opening-count and detector tiles. Missing data is not treated as zero or OK; numeric detectors require explicit thresholds.
- Include visual editors, bilingual documentation and simulated unit/browser checks. Existing cards remain compatible.
- Nuove card Allarme e Riepilogo Sicurezza con nomi, icone, colori, comandi e sensori configurabili.

## 0.1.0-beta.6

- Add Pastel Clima Script, a script-driven air-conditioner card matching the shared Pastel/Stove style.
- Simple visual editor: temperature sensor search, script-only button search, visual icon grid, editable names, card/button palettes and arbitrary wrapping buttons.
- Optional real-state helpers for the header and button indicators; script running/idle state never implies HVAC power.
- Preserve existing Thermostat, native Climate and custom-action card types. Add simulated unit/browser coverage and bilingual documentation.
- Nuova card Clima Script con editor semplice, scelta visiva delle icone, script e sensore di temperatura.

## 0.1.0-beta.5

- Expose a clearly labelled numeric-helper field in every stove minus/plus control; suggestions include only counter and input_number helpers.
- Add an explicit link from a temperature control’s helper to the upper target-temperature reading, keeping both values synchronized from Home Assistant.
- Preserve existing `entity` configurations and optional user-defined bounds; no optimistic counter changes or extra counter service calls.
- Aiutante del valore per ogni controllo, ricerca dei soli aiutanti numerici e collegamento opzionale alla temperatura impostata in alto.

## 0.1.0-beta.4

- Replace stove entity dropdowns with searchable suggestions and free entity-ID input.
- Script action fields suggest scripts only; pellet accepts any entity ID and temperature/value fields suggest numeric entity domains.
- Keep minimum/maximum limits optional and entirely user-defined. Existing configurations remain valid.
- Correzioni editor Stufa: ricerca e inserimento entità, suggerimenti dei soli script per i comandi, limiti −/+ liberi e opzionali.

## 0.1.0-beta.3

- Add Pastel Stufa / pellet stove with a full visual editor, configurable action buttons and independent minus/plus script controls.
- Add ordered state rules with AND/OR conditions, timer countdowns and missing-data handling.
- Add pellet percentage, configurable warning threshold, shared Pastel palettes and optional custom background/colors.
- Include a stove demo and regression tests; existing card types are preserved.
- Nuova Pastel Stufa con editor visuale, script, sensori, regole di stato e timer. Test con dati simulati; suite ancora in beta.

## 0.1.0-beta.2

### English

- Automatically discover recognized appliances when opening the editor. Selecting one immediately proposes associated sensors and controls.
- Keep manual selection for unrecognized devices and external meters.
- Recognize Italian hob names and accented coffee names. Filter robot discovery to robot profiles.
- Add four discovery regression tests. Real-device testing remains ongoing.

### Italiano

- Ricerca automatica degli elettrodomestici all’apertura dell’editor. La selezione propone subito sensori e controlli associati.
- Scelta manuale disponibile per dispositivi non riconosciuti e misuratori esterni.
- Riconoscimento di pianocottura e nomi accentati; ricerca robot filtrata.
- Quattro nuovi test di regressione. Test sui dispositivi reali ancora in corso.

## 0.1.0-beta.1

### English

- Single HACS bundle with 14 existing card types and new Appliance/Robot cards.
- Reviewed device discovery and editable associations, including external meters and water purifier measurements.
- Native climate redesign preserving the existing main configuration fields.
- Local rendering dependencies and bundled default images.
- Touch gesture fixes for lights, openings and thermostat controls.
- English-first documentation, Italian translations, 17 rendered examples and My Home Assistant buttons.
- Beta: physical-device and live Home Assistant migration testing still pending.

### Italiano

- Pacchetto HACS unico con 14 tipi esistenti più Appliance/Robot.
- Ricerca dispositivi con associazioni da verificare, misuratori esterni e depuratore acqua.
- Redesign clima nativo compatibile con i principali campi esistenti.
- Librerie e immagini predefinite incluse nel pacchetto.
- Correzioni touch per luci, aperture e termostato.
- Documentazione inglese/italiana, 17 esempi renderizzati e pulsanti My Home Assistant.
- Beta: restano i test sui dispositivi e sulla migrazione Home Assistant reale.
