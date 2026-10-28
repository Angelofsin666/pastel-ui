# Pastel UI: 103 coordinated, phone-friendly cards for Home Assistant

I built Pastel UI because my Home Assistant dashboard worked, but its cards did not feel like they belonged together. Lights, roller shutters, climate, security, and appliances each had their own layout. I wanted a softer, consistent interface that still showed the real state of my devices and worked comfortably on a phone.

Pastel UI is now a stable collection of **103 dashboard cards** in one download. It does not create devices, helpers, or automations. You connect the entities and scripts already in your Home Assistant installation, choose colours and names, and use the controls your integrations support. The project and this announcement were developed with AI assistance; I review the design and releases, and [the repository documents its testing and limitations](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/testing.md).

Here are a few examples, all rendered with fictional demo entities rather than data from my home:

![Pastel Lights on a phone, with four lights, power buttons, and brightness sliders](https://raw.githubusercontent.com/Angelofsin666/pastel-ui/v1.0.2/docs/images/lights.png)

Pastel Lights puts power controls and brightness sliders in a vertical layout that is easy to use on a narrow screen.

![Pastel Covers showing two roller shutters, their positions, and open, stop, and close controls](https://raw.githubusercontent.com/Angelofsin666/pastel-ui/v1.0.2/docs/images/covers.png)

Pastel Covers keeps each shutter's position and controls together, with an illustration that reflects the opening.

![Pastel Pellet Stove showing live heating status, pellet level, temperature, flame power, and script controls](https://raw.githubusercontent.com/Angelofsin666/pastel-ui/v1.0.2/docs/images/stove.png)

Pastel Pellet Stove can combine script buttons with values read from selected Home Assistant helpers. The collection now covers script-driven air conditioning, alarm and security, weather, TV, room temperatures, robots, energy and solar, water management, kitchen appliances, garden controls, and more. The newest cards include room-by-room radiator valve controls, an electric scooter, and an e-bike. The [gallery](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/catalog.md) shows every card.

**Install:** Pastel UI is currently a *custom HACS Dashboard repository*, not part of Home Assistant or HACS's default catalog. In HACS, add `https://github.com/Angelofsin666/pastel-ui` under **Custom repositories** with the **Dashboard** category, install the latest stable release, and reload Home Assistant. Then add a Pastel card from the dashboard card picker and select your own entities. The [installation guide](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/installation.md) has the full steps and migration notes for older standalone cards.

I would love to hear what you use and what would make the collection better. [Requests for new cards, changes, and bug reports](https://github.com/Angelofsin666/pastel-ui/issues) are welcome. If Pastel UI is useful to you, a [GitHub star](https://github.com/Angelofsin666/pastel-ui) helps others discover it.

---

# Pastel UI: 103 card coordinate e comode da usare sul telefono

Ho creato Pastel UI perché la mia dashboard Home Assistant funzionava, ma le card non sembravano appartenere allo stesso insieme. Luci, tapparelle, clima, sicurezza ed elettrodomestici avevano stili diversi. Volevo un’interfaccia più morbida e coerente che mostrasse comunque lo stato reale dei dispositivi e fosse comoda sul telefono.

Pastel UI è ora una raccolta stabile di **103 card** in un solo download. Non crea dispositivi, aiutanti o automazioni: associ le entità e gli script già presenti nel tuo Home Assistant, scegli colori e nomi e usi i comandi supportati dalle integrazioni. Il progetto e questo post sono stati preparati con l’aiuto dell’IA; controllo le scelte grafiche e le release, mentre [test e limiti sono documentati nel repository](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/testing.md). Le immagini qui sopra usano soltanto entità dimostrative fittizie.

Pastel Lights offre comandi e cursori di luminosità in una disposizione verticale. Pastel Covers tiene insieme posizione, illustrazione e pulsanti di ogni tapparella. Pastel Pellet Stove combina pulsanti script e valori letti dagli aiutanti scelti. La raccolta comprende anche climatizzatori comandati da script, allarme e sicurezza, meteo, TV, temperature, robot, energia e fotovoltaico, gestione dell’acqua, elettrodomestici, giardino e molto altro. Tra le ultime aggiunte ci sono le valvole termostatiche di più stanze, lo scooter elettrico e la e-bike. La [galleria](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/catalog.md) le mostra tutte.

**Installazione:** Pastel UI è attualmente una *repository HACS personalizzata, categoria Dashboard*. Non fa parte di Home Assistant né del catalogo HACS predefinito. In HACS aggiungi `https://github.com/Angelofsin666/pastel-ui` nelle **Repository personalizzate** come **Dashboard**, installa l’ultima versione stabile e ricarica Home Assistant. Poi aggiungi una card Pastel e scegli le tue entità. La [guida all’installazione](https://github.com/Angelofsin666/pastel-ui/blob/main/docs/installation.md) spiega tutti i passaggi e la migrazione dalle vecchie card singole.

Mi piacerebbe sapere quali card usi e cosa miglioreresti. Sono benvenute [richieste di nuove card, modifiche e segnalazioni](https://github.com/Angelofsin666/pastel-ui/issues). Se Pastel UI ti è utile, una [stella su GitHub](https://github.com/Angelofsin666/pastel-ui) aiuta altre persone a scoprirla.
