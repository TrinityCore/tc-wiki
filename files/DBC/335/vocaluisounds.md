---
title: VocalUISounds.dbc
description: 
published: true
date: 2025-05-31T21:36:27.036Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:09:15.363Z
---

<a href="https://trinitycore.info/files/DBC/335/videohardware" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'VideoHardware'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/weaponimpactsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WeaponImpactSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# VocalUISounds.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/VocalUISounds)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [VocalUIEnum](#vocaluienum) | uint32 |  |
| 2 | [RaceID](#raceid) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 3 | [SoundID_0](#soundid) | int32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [SoundID_1](#soundid) | int32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 5 | [SoundID_2](#soundid) | int32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 6 | [SoundID_3](#soundid) | int32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### VocalUIEnum
:x: <code>Col: 1 (uint32)</code>

| ID | Name | | ID | Name | | ID | Name |
|----|------|-|----|------|-|----|------|
| 0 | VUI_INVENTORYFULL |  | 23 | VUI_TOOMANYBANKSLOTS |  | 46 | VUI_CANTCAST_OUTOFRANGE |
| 1 | VUI_OUTOFAMMO |  | 24 | VUI_CANTEAT_MOVING |  | 47 | VUI_POTIONCOOLING |
| 2 | VUI_NOEQUIP_LEVEL |  | 25 | VUI_NOTABAG |  | 48 | VUI_PROFICIENCYNEEDED |
| 3 | VUI_NOEQUIP_EVER |  | 26 | VUI_CANTPUTBAG |  | 49 | VUI_MUSTEQUIPPITEM |
| 4 | VUI_BOUND_NODROP |  | 27 | VUI_WRONGSLOT |  | 50 | VUI_ABILITYCOOLING |
| 5 | VUI_ITEMCOOLING |  | 28 | VUI_AMMOONLYINBAG |  | 51 | VUI_CANTUSEITEM |
| 6 | VUI_CANTDRINKMORE |  | 29 | VUI_BAGFULL |  | 52 | VUI_CHESTINUSE |
| 7 | VUI_CANTEATMORE |  | 30 | VUI_ITEMMAXCOUNT |  | 53 | VUI_FOODCOOLING |
| 8 | VUI_CANTINVITE |  | 31 | VUI_CANTLOOT_DIDNTKILL |  | 54 | VUI_CANTTAXI_NOMONEY |
| 9 | VUI_INVITEEBUSY |  | 32 | VUI_CANTLOOT_WRONGFACING |  | 55 | VUI_CANTUSELOCKED |
| 10 | VUI_TARGETTOOFAR |  | 33 | VUI_CANTLOOT_LOCKED |  | 56 | VUI_NOEQUIPSLOTAVAILABLE |
| 11 | VUI_INVALIDTARGET |  | 34 | VUI_CANTLOOT_NOTSTANDING |  | 57 | VUI_CANTUSETOOFAR |
| 12 | VUI_SPELLCOOLING |  | 35 | VUI_CANTLOOT_TOOFAR |  | 58 | VUI_CANTSWAP |
| 13 | VUI_CANTLEARN_LEVEL |  | 36 | VUI_CANTATTACKRONGDIRECTION |  | 59 | VUI_CANTTRADE_SOULBOUND |
| 14 | VUI_LOCKED |  | 37 | VUI_CANTATTACK_NOTSTANDING |  | 60 | VUI_NOTOWNER |
| 15 | VUI_NOMANA |  | 38 | VUI_CANTATTACK_NOTARGET |  | 61 | VUI_ITEMLOCKED |
| 16 | VUI_NOTWHILEDEAD |  | 39 | VUI_NOTENOUGHGOLD |  | 62 | VUI_GUILDPERMISSIONS |
| 17 | VUI_CANTLOOT |  | 40 | VUI_NOTENOUGHMONEY |  | 63 | VUI_NORAGE |
| 18 | VUI_CANTCREATE |  | 41 | VUI_CANTEQUIP2H_SKILL |  | 64 | VUI_NOENERGY |
| 19 | VUI_DECLINEGROUP |  | 42 | VUI_CANTEQUIP_2HEQUIPPED |  | 65 | VUI_NOFOCUS |
| 20 | VUI_ALREADYINGROUP |  | 43 | VUI_CANTEQUIP2H_NOSKILL |  | 66 | NUM_VOCALUISOUNDS |
| 21 | VUI_ALREADYINGUILD |  | 44 | VUI_NOTEQUIPPABLE |  | 66 | VUI_NONE |
| 22 | VUI_CANTAFFORDBANKSLOT |  | 45 | VUI_GENERICNOTARGET |  |  |  |
{.dense}

&nbsp;

### RaceID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 3 &ndash; 6 (uint32)</code>

| Index | 0 | 1 |
| :--: | :--: | :--: |
| & 0x1 | Male | Female |
| & 0x2 | Normal | Pissed (Drunk) |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/videohardware" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'VideoHardware'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/weaponimpactsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WeaponImpactSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
