---
title: RandPropPoints.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/questxp" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'QuestXP'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/resistances" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Resistances'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# RandPropPoints.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=randproppoints&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/RandPropPoints)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Epic_0](#epic) | uint32 |  |
| 2 | [Epic_1](#epic) | uint32 |  |
| 3 | [Epic_2](#epic) | uint32 |  |
| 4 | [Epic_3](#epic) | uint32 |  |
| 5 | [Epic_4](#epic) | uint32 |  |
| 6 | [Superior_0](#superior) | uint32 |  |
| 7 | [Superior_1](#superior) | uint32 |  |
| 8 | [Superior_2](#superior) | uint32 |  |
| 9 | [Superior_3](#superior) | uint32 |  |
| 10 | [Superior_4](#superior) | uint32 |  |
| 11 | [Good_0](#good) | uint32 |  |
| 12 | [Good_1](#good) | uint32 |  |
| 13 | [Good_2](#good) | uint32 |  |
| 14 | [Good_3](#good) | uint32 |  |
| 15 | [Good_4](#good) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

Item level
&nbsp;

### Epic
<code>Col: 1 &ndash; 5 (uint32)</code>

Col offset depending on `INVTYPE_*`, valid for all qualities:
* 0: `HEAD, BODY, CHEST, LEGS, 2HWEAPON, ROBE`
* 1: `SHOULDERS, WAIST, FEET, HANDS, TRINKET`
* 2: `NECK, WRISTS, FINGER, SHIELD, CLOAK, HOLDABLE`
* 3: `WEAPON, WEAPONMAINHAND, WEAPONOFFHAND`
* 4: `RANGED, THROWN, RANGEDRIGHT`
&nbsp;

### Superior
<code>Col: 6 &ndash; 10 (uint32)</code>

*- no description -*
&nbsp;

### Good
<code>Col: 11 &ndash; 15 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/questxp" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'QuestXP'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/resistances" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Resistances'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
