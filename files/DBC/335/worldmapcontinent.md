---
title: WorldMapContinent.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/worldmaparea" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapArea'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldmapoverlay" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldMapOverlay'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WorldMapContinent.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=worldmapcontinent&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldMapContinent)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [LocLeft](#loc) | uint32 |  |
| 3 | [LocRight](#loc) | uint32 |  |
| 4 | [LocTop](#loc) | uint32 |  |
| 5 | [LocBottom](#loc) | uint32 |  |
| 6 | [ContinentOffset_X](#continentoffset) | float |  |
| 7 | [ContinentOffset_Y](#continentoffset) | float |  |
| 8 | [scale](#scale) | float |  |
| 9 | [TaxiMinX](#taxi) | float |  |
| 10 | [TaxiMinY](#taxi) | float |  |
| 11 | [TaxiMaxX](#taxi) | float |  |
| 12 | [TaxiMaxY](#taxi) | float |  |
| 13 | [WorldMapID](#worldmapid) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Loc
:x: <code>Col: 2 &ndash; 5 (uint32)</code>

Displayed map boundary. See [World Position](/how-to/worldposition).
&nbsp;

### ContinentOffset
:x: <code>Col: 6 &ndash; 7 ([DBCPosition2D](/how-to/worldposition) offset)</code>

On UI of parent map, from center.
&nbsp;

### scale
:x: <code>Col: 8 (float)</code>

*- no description -*
&nbsp;

### Taxi
:x: <code>Col: 9 &ndash; 12 (float)</code>

Another map boundary?
&nbsp;

### WorldMapID
:x: <code>Col: 13 (uint32)</code>

* 0: Cosmic Map
* 1: Azeroth
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/worldmaparea" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapArea'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldmapoverlay" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldMapOverlay'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
