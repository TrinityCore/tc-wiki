---
title: CinematicSequences.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/cinematiccamera" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CinematicCamera'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureDisplayInfo'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CinematicSequences.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=cinematicsequences&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CinematicSequences)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 2 | [Camera_0](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 3 | [Camera_1](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 4 | [Camera_2](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 5 | [Camera_3](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 6 | [Camera_4](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 7 | [Camera_5](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 8 | [Camera_6](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
| 9 | [Camera_7](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Camera
<code>Col: 2 &ndash; 9 (uint32)</code>

ID in CinematicCamera.dbc
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/cinematiccamera" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CinematicCamera'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureDisplayInfo'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
