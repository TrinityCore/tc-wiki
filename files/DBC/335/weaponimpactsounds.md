---
title: WeaponImpactSounds.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/vocaluisounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'VocalUISounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/weaponswingsounds2" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WeaponSwingSounds2'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WeaponImpactSounds.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=weaponimpactsounds&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WeaponImpactSounds)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [WeaponSubClassID](#weaponsubclassid) | uint32 | [ItemSubClass.dbc/1](/files/DBC/335/itemsubclass#subclassid) |
| 2 | [ParrySoundType](#parrysoundtype) | uint32 |  |
| 3 | [ImpactSoundID_0](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 4 | [ImpactSoundID_1](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 5 | [ImpactSoundID_2](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 6 | [ImpactSoundID_3](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 7 | [ImpactSoundID_4](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 8 | [ImpactSoundID_5](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 9 | [ImpactSoundID_6](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 10 | [ImpactSoundID_7](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 11 | [ImpactSoundID_8](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 12 | [ImpactSoundID_9](#impactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 13 | [CritImpactSoundID_0](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 14 | [CritImpactSoundID_1](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 15 | [CritImpactSoundID_2](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 16 | [CritImpactSoundID_3](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 17 | [CritImpactSoundID_4](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 18 | [CritImpactSoundID_5](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 19 | [CritImpactSoundID_6](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 20 | [CritImpactSoundID_7](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 21 | [CritImpactSoundID_8](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 22 | [CritImpactSoundID_9](#critimpactsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### WeaponSubClassID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### ParrySoundType
:x: <code>Col: 2 (uint32)</code>

* 0: PARRYMATERIAL_WOOD
* 1: PARRYMATERIAL_METAL
&nbsp;

### ImpactSoundID
:x: <code>Col: 3 &ndash; 12 (uint32)</code>

*- no description -*
&nbsp;

### CritImpactSoundID
:x: <code>Col: 13 &ndash; 22 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/vocaluisounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'VocalUISounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/weaponswingsounds2" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WeaponSwingSounds2'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
