---
title: VehicleUIIndSeat.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/vehicleuiindicator" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'VehicleUIIndicator'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/videohardware" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'VideoHardware'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# VehicleUIIndSeat.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=vehicleuiindseat&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/VehicleUIIndSeat)
&nbsp;

> :x: denotes unused fields
{.is-info}
   ID; // +0x0, size 0x4, type 0
   vehicleUIIndicatorID; // +0x4, size 0x4, type 0
   virtualSeatIndex; // +0x8, size 0x4, type 0
   xPos; // +0xC, size 0x4, type 3
   yPos; // +0x10, size 0x4, type 3

## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 0 | [VehicleUIIndicatorID](#vehicleuiindicatorid) | uint32 | [VehicleUIIndicator.dbc/0](/files/DBC/335/vehicleuiindicator#id) |
| 0 | [VirtualSeatIndex](#virtualseatindex) | uint32 |  |
| 0 | [Pos_X](#pos) | float |  |
| 0 | [Pos_Y](#pos) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### VehicleUIIndicatorID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### VirtualSeatIndex
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Pos
:x: <code>Col: 3 &ndash; 4 (DBCPosition2D)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/vehicleuiindicator" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'VehicleUIIndicator'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/videohardware" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'VideoHardware'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
