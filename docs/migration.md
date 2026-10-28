## beta.11 — one suite for lights and covers

Pastel UI is the single repository for these cards. Update the suite before removing old standalone resources. Saved `custom:pastel-lights-card` configurations keep working. `custom:light-card` and `custom:tapparella-card` are compatibility aliases: their existing source fields are accepted, while the picker exposes only **Pastel Lights** and **Pastel Covers**.

Remove `/hacsfiles/LightCard/light-card.js`, `/hacsfiles/tapparella-card-/tapparella-card.js` and all old `/hacsfiles/Pastel-…/…` resource entries after updating. Keep only `/hacsfiles/pastel-ui/pastel-ui.js` for this suite, then fully reload the frontend. Delete resource entries, not dashboard cards. Retired Climate, Thermostat and Temperature & Humidity types still require the replacements described below.

Aggiorna Pastel UI prima di rimuovere le vecchie risorse. I tipi `light-card` e `tapparella-card` rimangono alias di compatibilità nella suite; le nuove voci del selettore sono **Pastel Lights** e **Pastel Covers**. Conserva soltanto la risorsa della suite e ricarica completamente l’interfaccia.

## beta.10 — Temperature tiles / Riquadri temperatura

`custom:pastel-temp-card` keeps its existing ID and room sensor fields. Saved Pastel Temperature cards automatically receive the new tile design. Optional humidity remains inside Temperature.

`custom:pastel-temp-humidity-card` and its editor are removed. Replace those dashboard cards with **Pastel Temperature** and choose temperature and optional humidity sensors for each room; entity/attribute configurations from the retired card are not automatically converted. All thresholds and scales remain user-defined.

L’identificativo e le associazioni sensori di Pastel Temperature restano invariati. Per la vecchia Temperature & Humidity, rimossa, aggiungi Pastel Temperature e scegli sensori separati di temperatura e umidità nell’editor. [Guida](cards/temp.md).

# Migration / Migrazione

## Beta.8 — italiano

I nomi delle due card recenti diventano **Pastel Climate AC** e **Pastel Pellet Stove**. I rispettivi identificativi restano `custom:pastel-script-climate-card` e `custom:pastel-stove-card`: le configurazioni già salvate per queste due card continuano a funzionare.

Sono state rimosse dal pacchetto e dal selettore:

| Card rimossa | Tipo rimosso |
|---|---|
| Pastel Climate nativa | `custom:pastel-climate-card` |
| Pastel Climate custom actions/IR | `custom:pastel-clima-card` |
| Pastel Thermostat | `custom:pastel-thermostat-card` |

Le dashboard che usano ancora questi tre tipi devono essere aggiornate: aggiungi **Pastel Climate AC**, scegli il sensore di temperatura e associa gli script di ogni pulsante. La configurazione non viene convertita automaticamente. La nuova AC è comandata da script: eventuali azioni native precedenti devono essere gestite dai tuoi script Home Assistant.

Per la vecchia Climate IR, `temp_entity` corrisponde al nuovo `temperature_entity`; ogni script precedentemente chiamato da un’azione va scelto nel campo **Script del pulsante**. Le altre opzioni dei tipi rimossi non vanno copiate alla cieca nel nuovo tipo.

Dopo l’aggiornamento HACS ricarica completamente il frontend. Le altre 15 card, oltre alle due rinominate, mantengono i propri tipi. Per tornare al pacchetto precedente usa la versione beta.7 da HACS e ripristina la configurazione della dashboard se l’hai modificata.

## Beta.8 — English

The two recent cards are now named **Pastel Climate AC** and **Pastel Pellet Stove**. Their existing `custom:pastel-script-climate-card` and `custom:pastel-stove-card` type IDs and settings remain unchanged.

The old native `pastel-climate-card`, custom-action/IR `pastel-clima-card`, and `pastel-thermostat-card` have been removed, including their editors. Dashboards that still use these types must be updated to the new AC card. Choose a temperature sensor and script buttons in its editor; no automatic conversion is performed. Native device actions from an old configuration need corresponding Home Assistant scripts because the retained AC card is script-driven.

Reload the frontend completely after updating. Other retained card types are unchanged. Roll back to beta.7 through HACS if needed, restoring the prior dashboard configuration if you changed it.

## Moving from standalone Pastel repositories

Register the suite resource once: `/hacsfiles/pastel-ui/pastel-ui.js` as a JavaScript module. Remove standalone Pastel resource entries before a complete frontend reload to avoid duplicate definitions. Keep custom image assets under your own `/local/` path if you intend to uninstall standalone repositories. Remaining legacy types retain their existing options; the three types listed above are no longer included.
