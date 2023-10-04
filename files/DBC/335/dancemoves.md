---
title: DanceMoves.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/currencytypes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CurrencyTypes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/deaththudlookups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DeathThudLookups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# DanceMoves.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=dancemoves&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DanceMoves)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Type](#type) | uint32 |  |
| 2 | [Value](#value) | uint32 | mixed |
| 3 | [Fallback](#fallback) | uint32 |  |
| 4 | [Racemask](#racemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 5 | [Internal](#internal) | uint32 |  |
| 6 | [Name_0](#name) | string |  |
| 7 | [Name_1](#name) | string |  |
| 8 | [Name_2](#name) | string |  |
| 9 | [Name_3](#name) | string |  |
| 10 | [Name_4](#name) | string |  |
| 11 | [Name_5](#name) | string |  |
| 12 | [Name_6](#name) | string |  |
| 13 | [Name_7](#name) | string |  |
| 14 | [Name_8](#name) | string |  |
| 15 | [Name_9](#name) | string |  |
| 16 | [Name_10](#name) | string |  |
| 17 | [Name_11](#name) | string |  |
| 18 | [Name_12](#name) | string |  |
| 19 | [Name_13](#name) | string |  |
| 20 | [Name_14](#name) | string |  |
| 21 | [Name_15](#name) | string |  |
| 22 | [Name_lang_mask](#name) | uint32 |  |
| 23 | [LockID](#lockid) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Type
:x: <code>Col: 1 (uint32)</code>

| Type | Name | Value | Comment |
|------|------|-------|---------|
| 0 | Animation | [AnimationData.dbc/0](/files/DBC/335/animationdata#id) | BE dances, laugh etc. |
| 1 | Spells | [SpellVisual.dbc/0](/files/DBC/335/spellvisual#id) | Frost Nova |
| 2 | Hold | Seconds |  |
| 3 | Repeat | Seconds |  |
{.dense}

&nbsp;

### Value
:x: <code>Col: 2 (uint32)</code>

See **Type**
&nbsp;

### Fallback
:x: <code>Col: 3 (bool)</code>

*- no description -*
*&nbsp;

### Racemask
:x: <code>Col: 4 (uint32)</code>

| Value | Flag   | Name      |  | Value | Flag   | Name      |
|-------|--------|-----------|--|-------|--------|-----------|
|     1 | 0x0001 | Human     |  |     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |  |    16 | 0x0010 | Undead    |
|     8 | 0x0008 | Night Elf |  |    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |  |   128 | 0x0080 | Troll     |
|  1024 | 0x0400 | Draenei   |  |   512 | 0x0200 | Blood Elf |
|  1101 | 0x044D | *_Alliance_* |  |   690 | 0x02B2 | *_Horde_* |
{.dense}

&nbsp;

### Internal
:x: <code>Col: 5 (string)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 6 &ndash; 23 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### LockID
:x: <code>Col: 24 (uint32)</code>

Surely not pointing to Lock.dbc/0 ?
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/currencytypes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CurrencyTypes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/deaththudlookups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DeathThudLookups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
