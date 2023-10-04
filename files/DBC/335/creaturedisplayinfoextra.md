---
title: CreatureDisplayInfoExtra.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureDisplayInfo'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturefamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureFamily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CreatureDisplayInfoExtra.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=creaturedisplayinfoextra&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CreatureDisplayInfoExtra)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [DisplayRaceID](#displayraceid) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 2 | [DisplaySexID](#displaysexid) | uint32 |  |
| 3 | [SkinID](#skinid) | uint32 | [CharSections.dbc/9](/files/DBC/335/charsections#colorindex) |
| 4 | [FaceID](#faceid) | uint32 | [CharSections.dbc/8](/files/DBC/335/charsections#variationindex) |
| 5 | [HairStyleID](#hairstyleid) | uint32 | [CharHairGeosets.dbc/3](/files/DBC/335/charhairgeosets#hairtype) |
| 6 | [HairColorID](#haircolorid) | uint32 | [CharSections.dbc/8](/files/DBC/335/charsections#variationindex) |
| 7 | [FacialHairID](#facialhairid) | uint32 | [CharSections.dbc/8](/files/DBC/335/charsections#variationindex) |
| 8 | [NPCItemDisplay_0](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 9 | [NPCItemDisplay_1](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 10 | [NPCItemDisplay_2](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 11 | [NPCItemDisplay_3](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 12 | [NPCItemDisplay_4](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 13 | [NPCItemDisplay_5](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 14 | [NPCItemDisplay_6](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 15 | [NPCItemDisplay_7](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 16 | [NPCItemDisplay_8](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 17 | [NPCItemDisplay_9](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 18 | [NPCItemDisplay_10](#npcitemdisplay) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 19 | [Flags](#flags) | uint32 |  |
| 20 | [BakeName](#bakename) | string |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### DisplayRaceID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### DisplaySexID
<code>Col: 2 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### SkinID
:x: <code>Col: 3 (uint32)</code>

Look up into CharSections.dbc, where BaseSection=SECTION_TYPE_SKIN (0) to define which texture to use.
&nbsp;

### FaceID
:x: <code>Col: 4 (uint32)</code>

Look up into CharSections.dbc, where BaseSection=SECTION_TYPE_FACE (1) to define which texture to use.
&nbsp;

### HairStyleID
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### HairColorID
:x: <code>Col: 6 (uint32)</code>

Look up into CharSections.dbc, where BaseSection=SECTION_TYPE_HAIR (3) to define which texture to use.
&nbsp;

### FacialHairID
:x: <code>Col: 7 (uint32)</code>

Look up into CharSections.dbc, where BaseSection=SECTION_TYPE_FACIAL_HAIR (2) to define which texture to use.
&nbsp;

### NPCItemDisplay
:x: <code>Col: 8 &ndash; 18 (uint32)</code>

| Col | Slot |
|-----|------|
| 8 | Helm |
| 9 | Shoulder |
| 10 | Shirt |
| 11 | Cuirass |
| 12 | Belt |
| 13 | Legs |
| 14 | Boots |
| 15 | Wrist |
| 16 | Gloves |
| 17 | Tabard |
| 18 | Cape |
{.dense}

&nbsp;

### Flags
:x: <code>Col: 19 (uint32)</code>

* 1: Can equip additional things when used for players.
&nbsp;

### BakeName
:x: <code>Col: 20 (string)</code>

The texture used on the model. .blp extension can be omitted. Name must not be empty, otherwise client crashes.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureDisplayInfo'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturefamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureFamily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
