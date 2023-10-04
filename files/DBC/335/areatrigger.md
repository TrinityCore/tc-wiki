---
title: AreaTrigger.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/areatable" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AreaTable'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/attackanimkits" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AttackAnimKits'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# AreaTrigger.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=areatrigger&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AreaTrigger)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ContinentID](#continentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [Pos_X](#pos) | float |  |
| 3 | [Pos_Y](#pos) | float |  |
| 4 | [Pos_Z](#pos) | float |  |
| 5 | [Radius](#radius) | float |  |
| 6 | [BoxLength](#boxlength) | float |  |
| 7 | [BoxWidth](#boxwidth) | float |  |
| 8 | [BoxHeight](#boxheight) | float |  |
| 9 | [BoxYaw](#boxyaw) | float |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ContinentID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Pos
<code>Col: 2 &ndash; 4 ([DBCPosition3D](/how-to/worldposition))</code>

Center of AreaTrigger.
&nbsp;

### Radius
<code>Col: 5 (float)</code>

* **Radius** = 0: AreaTrigger is a cuboid
* **Radius** > 0: AreaTrigger is a sphere
&nbsp;

### BoxLength
<code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### BoxWidth
<code>Col: 7 (float)</code>

*- no description -*
&nbsp;

### BoxHeight
<code>Col: 8 (float)</code>

*- no description -*
&nbsp;

### BoxYaw
<code>Col: 9 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/areatable" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AreaTable'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/attackanimkits" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AttackAnimKits'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
