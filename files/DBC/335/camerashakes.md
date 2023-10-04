---
title: CameraShakes.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/battlemasterlist" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BattlemasterList'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/cfg_categories" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Cfg_Categories'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CameraShakes.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=camerashakes&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CameraShakes)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ShakeType](#shaketype) | uint32 |  |
| 2 | [Direction](#direction) | uint32 |  |
| 3 | [Amplitude](#amplitude) | float |  |
| 4 | [Frequency](#frequency) | float |  |
| 5 | [Duration](#Duration) | float |  |
| 6 | [Phase](#phase) | float |  |
| 7 | [Coefficient](#coefficient) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ShakeType
:x: <code>Col: 1 (uint32)</code>

* 0: CAMSHAKE_SINE
* 1: CAMSHAKE_DECAYED_SINE
&nbsp;

### Direction
:x: <code>Col: 2 (uint32)</code>

* 0: CAMERA_FORWARD
* 1: CAMERA_RIGHT
* 2: CAMERA_UP
&nbsp;

### Amplitude
:x: <code>Col: 3 (float)</code>

*- no description -*
&nbsp;

### Frequency
:x: <code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### Duration
:x: <code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### Phase
:x: <code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### Coefficient
:x: <code>Col: 7 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/battlemasterlist" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BattlemasterList'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/cfg_categories" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Cfg_Categories'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
