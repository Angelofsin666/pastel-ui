# Pastel TV

![Pastel TV with simulated data](../images/tv.png)

`custom:pastel-tv-card` controlla un'entità `media_player.*`. L'editor visivo permette di scegliere il televisore, rinominare la card, cambiare palette e colori, e mostrare o nascondere riproduzione, volume e sorgente.

```yaml
type: custom:pastel-tv-card
title: TV Soggiorno
subtitle: Televisore
entity: media_player.soggiorno
color: lavender
show_transport: true
show_volume: true
show_source: true
```

Accensione, spegnimento, riproduzione, volume e sorgente compaiono o si attivano solo quando il televisore li supporta e il relativo servizio è disponibile. Stato, programma, sorgente e volume seguono l'entità reale: la card non li cambia in anticipo dopo una pressione.

The card uses native `media_player` capabilities and service availability. It never assumes that a command succeeded before Home Assistant reports the new state.
