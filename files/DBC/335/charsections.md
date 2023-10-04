---
title: CharSections.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/charhairtextures" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharHairTextures'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/charstartoutfit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CharStartOutfit'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CharSections.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=charsections&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CharSections)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [RaceID](#raceid) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 2 | [SexID](#sexid) | uint32 |  |
| 3 | [BaseSection](#basesection) | uint32 |  |
| 4 | [TextureName_0](#texturename) | string |  |
| 5 | [TextureName_1](#texturename) | string |  |
| 6 | [TextureName_2](#texturename) | string |  |
| 7 | [Flags](#flags) | uint32 |  |
| 8 | [VariationIndex](#variationindex) | uint32 |  |
| 9 | [ColorIndex](#colorindex) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### RaceID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SexID
<code>Col: 2 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### BaseSection
<code>Col: 3 (uint32)</code>

[`enum CharSectionType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCStructure.h#L323-L330)
| ID | Name |
|----|------|
| 0 | SECTION_TYPE_SKIN |
| 1 | SECTION_TYPE_FACE |
| 2 | SECTION_TYPE_FACIAL_HAIR |
| 3 | SECTION_TYPE_HAIR |
| 4 | SECTION_TYPE_UNDERWEAR |
{.dense}

&nbsp;

### TextureName
:x: <code>Col: 4 &ndash; 6 (string)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 7 (uint32)</code>

[`enum CharSectionFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCStructure.h#L317-L321)
| ID | Name |
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | SECTION_FLAG_PLAYER | CHAR |
| 2 | 0x02 |  | BARBERSHOP |
| 4 | 0x04 | SECTION_FLAG_DEATH_KNIGHT | DEATHKNIGHT |
| 8 | 0x08 |  | NPCSKIN |
| 16 | 0x10 |  | SKIN |
{.dense}

&nbsp;

### VariationIndex
<code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### ColorIndex
<code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/charhairtextures" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharHairTextures'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/charstartoutfit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CharStartOutfit'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
