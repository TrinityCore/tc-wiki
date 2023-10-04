---
title: LFGDungeonExpansion.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/languagewords" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LanguageWords'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lfgdungeongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LfgDungeonGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LFGDungeonExpansion.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lfgdungeonexpansion&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LFGDungeonExpansion)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [LfgDungeonID](#lfgdungeonid) | uint32 | [LfgDungeons.dbc/0](/files/DBC/335/lfgdungeons#id) |
| 2 | [Expansion](#expansion) | uint32 |  |
| 3 | [RandomID](#randomid) | uint32 |  |
| 4 | [HardLevelMin](#hardlevelmin) | uint32 |  |
| 5 | [HardLevelMax](#hardlevelmax) | uint32 |  |
| 6 | [TargetLevelMin](#targetlevelmin) | uint32 |  |
| 7 | [TargetLevelMax](#targetlevelmax) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### LfgDungeonID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Expansion
:x: <code>Col: 2 (uint32)</code>

| Value | Expansion |
| :---: | :---: |
| 0 | Vanilla |
| 1 | The Burning Crusade (TBC) |
| 2 | Wrath of the Lich King (WotLK) |
{.dense}

&nbsp;

### RandomID
:x: <code>Col: 3 (uint32)</code>

**LfgDungeonID** to belong to?
&nbsp;

### HardLevelMin
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### HardLevelMax
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### TargetLevelMin
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### TargetLevelMax
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/languagewords" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LanguageWords'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lfgdungeongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LfgDungeonGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
